import { useState, useEffect } from "react";
import { formatDate, formatTime } from "../utils/dateUtils";
import { getApiDateRange, isDevelopment } from "../utils/apiUtils";
import { useGlobalLoader } from "../contexts/GlobalLoaderContext";

interface Pharmacy {
  id: string;
  name: string;
  address: string;
  phone: string;
  distance?: string;
  date: string;
  timeStart: string;
  timeEnd: string;
  status: "current" | "upcoming";
  lat: string;
  lng: string;
}

interface EmergencyPharmacyServiceProps {
  onDataLoaded: (pharmacies: Pharmacy[]) => void;
}

export default function EmergencyPharmacyService({
  onDataLoaded,
}: EmergencyPharmacyServiceProps) {
  const [error, setError] = useState<string | null>(null);
  const [lastFetchTime, setLastFetchTime] = useState<Date | null>(null);
  const [usingFallbackData, setUsingFallbackData] = useState(false);
  const { showLoader, hideLoader } = useGlobalLoader();

  // Function to fetch emergency pharmacy data
  const fetchEmergencyPharmacies = async () => {
    try {
      showLoader("Notdienst-Daten werden geladen...");

      // Get date range for API request (automatically handles dev/prod environments)
      const { begin: beginParam, end: endParam } = getApiDateRange(14);

      if (isDevelopment()) {
        console.log("Running in development mode with test dates");
      } else {
        console.log("Running in production mode with current dates");
      }

      // API token
      const token = "0075e630f7ea1c1900a8bb186ccc7382b0f48608";

      console.log(
        `Fetching emergency pharmacy data from ${beginParam} to ${endParam}`
      );

      // Fetch data from API (removed number limit to get all available data)
      const response = await fetch(
        `https://www.lakt.de/api?begin=${beginParam}&end=${endParam}&token=${token}`
      );

      if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`);
      }

      const xmlText = await response.text();
      const pharmacies = parseXmlResponse(xmlText);

      // Update last fetch time and reset fallback flag
      setLastFetchTime(new Date());
      setUsingFallbackData(false);

      // Pass data to parent component
      onDataLoaded(pharmacies);
    } catch (err) {
      console.error("Error fetching emergency pharmacy data:", err);
      setError(err instanceof Error ? err.message : "Unknown error occurred");

      // If API fails, use fallback data and set flag
      setUsingFallbackData(true);
      setLastFetchTime(new Date());
      onDataLoaded(getFallbackData());
    } finally {
      hideLoader();
    }
  };

  // Effect to fetch data on mount and set up refresh interval
  useEffect(() => {
    fetchEmergencyPharmacies();

    // Set up automatic refresh every day
    const refreshInterval = setInterval(() => {
      console.log("Auto-refreshing emergency pharmacy data");
      fetchEmergencyPharmacies();
    }, 24 * 60 * 60 * 1000); // 24 hours in milliseconds

    // Clean up interval on component unmount
    return () => clearInterval(refreshInterval);
  }, [onDataLoaded]);

  // If there's an error, render nothing - parent will use fallback data
  if (error) {
    return null;
  }

  // Component renders a small status indicator
  return (
    <div className="text-xs text-gray-500 text-right mt-2">
      {lastFetchTime && (
        <div>
          <span>
            Daten aktualisiert: {formatDate(lastFetchTime)}{" "}
            {formatTime(lastFetchTime)}
            {isDevelopment() && " (Testmodus)"}
          </span>
          {usingFallbackData && (
            <div className="text-orange-600 font-semibold mt-1">
              ⚠️ Aktuelle Daten konnten nicht abgerufen werden - Ersatzdaten
              werden angezeigt
            </div>
          )}
        </div>
      )}
    </div>
  );
}

// Helper functions moved to apiUtils.ts

// Parse XML response from API
function parseXmlResponse(xmlText: string): Pharmacy[] {
  // Check if we're in a browser environment
  if (typeof window === "undefined") {
    console.warn("DOMParser not available in server environment");
    return [];
  }

  const parser = new DOMParser();
  const xmlDoc = parser.parseFromString(xmlText, "text/xml");
  const events = xmlDoc.getElementsByTagName("VEVENT");
  const pharmacies: Pharmacy[] = [];

  const now = new Date();

  for (let i = 0; i < events.length; i++) {
    const event = events[i];

    // Extract data from XML
    const id = getElementText(event, "FID") || `temp-${i}`;
    const name = getElementText(event, "NAME") || "Unbekannte Apotheke";
    const street = getElementText(event, "STREET") || "";
    const zip = getElementText(event, "ZIP") || "";
    const city = getElementText(event, "CITY") || "";
    const phone = getElementText(event, "PHONE") || "";
    const lat = getElementText(event, "LAT") || "";
    const lng = getElementText(event, "LNG") || "";

    // Parse dates
    const startTimeStr = getElementText(event, "DTSTART") || "";
    const endTimeStr = getElementText(event, "DTEND") || "";

    const startTime = startTimeStr ? new Date(startTimeStr) : new Date();
    const endTime = endTimeStr ? new Date(endTimeStr) : new Date();

    // Format address
    const address = `${street}, ${zip} ${city}`;

    // Determine if this is the current emergency service
    const isCurrent = now >= startTime && now < endTime;

    pharmacies.push({
      id,
      name,
      address,
      phone,
      date: formatDate(startTime),
      timeStart: formatTime(startTime),
      timeEnd: formatTime(endTime),
      status: isCurrent ? "current" : "upcoming",
      lat,
      lng,
      // Distance will be calculated later if needed
      distance: "Entfernung berechnen...",
    });
  }

  // Sort by date and time
  pharmacies.sort((a, b) => {
    // Current services first
    if (a.status === "current" && b.status !== "current") return -1;
    if (a.status !== "current" && b.status === "current") return 1;

    // Then by date
    const dateA = new Date(a.date.split(".").reverse().join("-"));
    const dateB = new Date(b.date.split(".").reverse().join("-"));
    return dateA.getTime() - dateB.getTime();
  });

  return pharmacies;
}

// Helper function to get text content of an XML element
function getElementText(parent: Element, tagName: string): string {
  const element = parent.getElementsByTagName(tagName)[0];
  return element ? element.textContent || "" : "";
}

// Fallback data in case API fails
function getFallbackData(): Pharmacy[] {
  const today = new Date();
  const tomorrow = new Date();
  tomorrow.setDate(today.getDate() + 1);
  const dayAfterTomorrow = new Date();
  dayAfterTomorrow.setDate(today.getDate() + 2);

  return [];
}

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
  onRefreshFunction?: (refreshFn: () => void) => void;
}

export default function EmergencyPharmacyService({
  onDataLoaded,
  onRefreshFunction,
}: EmergencyPharmacyServiceProps) {
  const [error, setError] = useState<string | null>(null);
  const [lastFetchTime, setLastFetchTime] = useState<Date | null>(null);
  const [nextRefreshTime, setNextRefreshTime] = useState<Date | null>(null);
  const [usingFallbackData, setUsingFallbackData] = useState(false);
  const [isManualRefreshing, setIsManualRefreshing] = useState(false);
  const { showLoader, hideLoader } = useGlobalLoader();

  // Manual refresh function
  const manualRefresh = async () => {
    if (isManualRefreshing) return; // Prevent multiple simultaneous refreshes
    
    setIsManualRefreshing(true);
    try {
      await fetchEmergencyPharmacies();
    } finally {
      setIsManualRefreshing(false);
    }
  };

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
        `/api?begin=${beginParam}&end=${endParam}&token=${token}`
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

  // Expose refresh function to parent component
  useEffect(() => {
    if (onRefreshFunction) {
      onRefreshFunction(manualRefresh);
    }
  }, [onRefreshFunction]);

  // Effect to fetch data on mount and set up smart refresh intervals
  useEffect(() => {
    fetchEmergencyPharmacies();

    // Set up smart refresh system
    const setupSmartRefresh = () => {
      const now = new Date();
      
      // Calculate milliseconds until next refresh time (every 6 hours: 6 AM, 12 PM, 6 PM, 12 AM)
      const nextRefreshHours = [6, 12, 18, 24]; // 24 = midnight (0)
      const currentHour = now.getHours();
      
      let nextRefreshHour = nextRefreshHours.find(hour => hour > currentHour);
      if (!nextRefreshHour) {
        nextRefreshHour = nextRefreshHours[0] + 24; // Next day's 6 AM
      }
      
      const nextRefresh = new Date(now);
      nextRefresh.setHours(nextRefreshHour % 24, 0, 0, 0);
      if (nextRefreshHour >= 24) {
        nextRefresh.setDate(nextRefresh.getDate() + 1);
      }
      
      const msUntilNextRefresh = nextRefresh.getTime() - now.getTime();
      
      console.log(`Next emergency pharmacy data refresh scheduled for: ${nextRefresh.toLocaleString('de-DE')}`);
      
      // Update state with next refresh time
      setNextRefreshTime(nextRefresh);
      
      // Set timeout for next refresh
      const initialTimeout = setTimeout(() => {
        console.log("Scheduled emergency pharmacy data refresh");
        fetchEmergencyPharmacies();
        
        // Set up regular 6-hour intervals after first scheduled refresh
        const refreshInterval = setInterval(() => {
          console.log("Auto-refreshing emergency pharmacy data (6-hour interval)");
          fetchEmergencyPharmacies();
          
          // Update next refresh time
          const now = new Date();
          const nextInterval = new Date(now.getTime() + (6 * 60 * 60 * 1000));
          setNextRefreshTime(nextInterval);
        }, 6 * 60 * 60 * 1000); // 6 hours in milliseconds
        
        // Store interval ID for cleanup
        return refreshInterval;
      }, msUntilNextRefresh);
      
      return initialTimeout;
    };

    // Set up additional frequent status updates (every 30 minutes)
    // This updates the "current" status without fetching new data
    const statusUpdateInterval = setInterval(() => {
      console.log("Updating emergency pharmacy status");
      // Re-trigger the onDataLoaded callback to refresh current/upcoming status
      if (lastFetchTime) {
        // This will re-evaluate which services are "current" based on current time
        fetchEmergencyPharmacies();
      }
    }, 30 * 60 * 1000); // 30 minutes in milliseconds

    const smartRefreshTimeout = setupSmartRefresh();

    // Clean up intervals and timeouts on component unmount
    return () => {
      clearTimeout(smartRefreshTimeout);
      clearInterval(statusUpdateInterval);
    };
  }, []);

  // If there's an error, render nothing - parent will use fallback data
  if (error) {
    return null;
  }

  // Component renders a comprehensive status indicator
  return (
    <div className="text-xs text-gray-500 mt-2">
      {lastFetchTime && (
        <div className="space-y-1">
          <div className="flex justify-between items-center">
            <span>
              Daten aktualisiert: {formatDate(lastFetchTime)}{" "}
              {formatTime(lastFetchTime)}
              {isDevelopment() && " (Testmodus)"}
            </span>
            <div className="flex items-center space-x-1">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-green-600 font-medium">Live</span>
            </div>
          </div>
          
          {nextRefreshTime && (
            <div className="text-gray-400">
              Nächste Aktualisierung: {formatDate(nextRefreshTime)}{" "}
              {formatTime(nextRefreshTime)}
            </div>
          )}
          
          <div className="text-gray-400">
            🔄 Automatische Updates: 6:00, 12:00, 18:00, 00:00 Uhr + alle 30 Min. Status-Check
          </div>
          
          {usingFallbackData && (
            <div className="text-orange-600 font-semibold mt-1 p-2 bg-orange-50 rounded">
              ⚠️ Aktuelle Daten konnten nicht abgerufen werden - Ersatzdaten werden angezeigt
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
    // Handle overnight services properly (e.g., 6 PM today to 8 AM tomorrow)
    const isCurrent = isServiceActive(now, startTime, endTime);

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

// Helper function to determine if an emergency service is currently active
function isServiceActive(currentTime: Date, startTime: Date, endTime: Date): boolean {
  // Handle the simple case: service starts and ends on the same day
  if (startTime.getDate() === endTime.getDate() && 
      startTime.getMonth() === endTime.getMonth() && 
      startTime.getFullYear() === endTime.getFullYear()) {
    return currentTime >= startTime && currentTime <= endTime;
  }
  
  // Handle overnight service: starts today, ends tomorrow (or later)
  if (endTime > startTime) {
    return currentTime >= startTime && currentTime <= endTime;
  }
  
  // Handle edge case where end time appears to be before start time
  // This might happen due to data formatting issues
  // In this case, assume it's an overnight service
  const nextDayEndTime = new Date(endTime);
  nextDayEndTime.setDate(endTime.getDate() + 1);
  
  return currentTime >= startTime && currentTime <= nextDayEndTime;
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

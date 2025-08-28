import { useState, useEffect, useCallback } from "react";
import { formatDate, formatTime } from "../utils/dateUtils";
import { getApiDateRange, isDevelopment } from "../utils/apiUtils";
import { useGlobalLoader } from "../contexts/GlobalLoaderContext";
import { 
  cachePharmacyData, 
  getCachedPharmacyData, 
  isCacheValid,
  getCacheStats,
  forceCacheRefresh 
} from "../utils/cacheUtils";

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
  const [isManualRefreshing, setIsManualRefreshing] = useState(false);
  const { showLoader, hideLoader } = useGlobalLoader();

  // Function to fetch emergency pharmacy data (only called when cache is invalid or forced)
  const fetchEmergencyPharmacies = useCallback(async (forceRefresh: boolean = false) => {
    try {
      // Check cache first unless forced refresh
      if (!forceRefresh) {
        const cachedData = getCachedPharmacyData();
        if (cachedData) {
          console.log('📦 Using cached pharmacy data (skipping API call)');
          setLastFetchTime(new Date(cachedData.timestamp));
          setError(null); // Clear any previous errors when using valid cache
          onDataLoaded(cachedData.data);
          return;
        }
      }

      // If we reach here, we're actually making an API call
      console.log('🌐 Making fresh API call to LAKT (cache invalid or forced refresh)');

      showLoader("Aktuelle Notdienst-Daten werden von LAKT abgerufen...");

      // Get date range for API request (current date + 14 days) - with detailed logging
      const { begin: beginParam, end: endParam } = getApiDateRange(14, false);

      console.log("Fetching live LAKT data with dynamic date range");

      // API token for LAKT service
      const token = "0075e630f7ea1c1900a8bb186ccc7382b0f48608";

      console.log(
        `Fetching live emergency pharmacy data from LAKT API: ${beginParam} to ${endParam}`
      );

      // Fetch data from our API proxy (which calls LAKT API) with timeout
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 15000); // 15 second timeout
      
      const response = await fetch(
        `/api?begin=${beginParam}&end=${endParam}&token=${token}`,
        {
          signal: controller.signal,
          headers: {
            'Accept': 'application/xml, text/xml',
            'User-Agent': 'Lindenberg-Apotheke-Website/1.0'
          }
        }
      );
      
      clearTimeout(timeoutId);

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }

      const xmlText = await response.text();
      
      console.log("Successfully received live data from LAKT API");
      setError(null); // Clear any previous errors

      const pharmacies = parseXmlResponse(xmlText);

      // Cache the live data
      cachePharmacyData(pharmacies);

      // Update last fetch time
      setLastFetchTime(new Date());

      // Pass data to parent component
      onDataLoaded(pharmacies);
      
    } catch (err) {
      console.error("Error fetching emergency pharmacy data:", err);
      
      // Provide more descriptive error messages
      let errorMessage = "Unbekannter Fehler beim Laden der Notdienst-Daten";
      
      if (err instanceof Error) {
        if (err.name === 'AbortError') {
          errorMessage = "Zeitüberschreitung - Die LAKT-API antwortet nicht (15s Timeout). Versuchen Sie es später erneut.";
        } else if (err.message.includes('Failed to fetch') || err.message.includes('NetworkError')) {
          errorMessage = "Netzwerkfehler - Keine Verbindung zur LAKT-API möglich. Bitte überprüfen Sie Ihre Internetverbindung.";
        } else if (err.message.includes('timeout')) {
          errorMessage = "Zeitüberschreitung - Die LAKT-API antwortet nicht. Bitte versuchen Sie es später erneut.";
        } else if (err.message.includes('404')) {
          errorMessage = "LAKT-API Endpunkt nicht gefunden (HTTP 404). Der Service könnte temporär nicht verfügbar sein.";
        } else if (err.message.includes('500')) {
          errorMessage = "LAKT-API Server Fehler (HTTP 500). Der Service ist temporär nicht verfügbar.";
        } else if (err.message.includes('HTTP')) {
          errorMessage = `LAKT-API Fehler: ${err.message}`;
        } else {
          errorMessage = `Verbindungsfehler: ${err.message}`;
        }
      }
      
      setError(errorMessage);
      setLastFetchTime(new Date());
      
      // Send empty array to show "Keine Apotheken gefunden" message
      onDataLoaded([]);
      
      console.log("❌ API request failed - showing empty state with error message");
    } finally {
      hideLoader();
    }
  }, [showLoader, hideLoader, onDataLoaded]);

  // Manual refresh function
  const manualRefresh = useCallback(async () => {
    if (isManualRefreshing) return; // Prevent multiple simultaneous refreshes
    
    setIsManualRefreshing(true);
    try {
      // Force refresh bypasses cache
      await fetchEmergencyPharmacies(true);
    } finally {
      setIsManualRefreshing(false);
    }
  }, [isManualRefreshing, fetchEmergencyPharmacies]);

  // Expose refresh function to parent component
  useEffect(() => {
    if (onRefreshFunction) {
      onRefreshFunction(manualRefresh);
    }
  }, [onRefreshFunction, manualRefresh]);

  // Effect to initialize data on mount - prioritizes cached data
  useEffect(() => {
    const initializeData = () => {
      // First, check if we have valid cached data
      const cachedData = getCachedPharmacyData();
      
      if (cachedData) {
        // Use cached data immediately without API call
        console.log('✅ Found valid cached data - skipping API call on mount');
        setLastFetchTime(new Date(cachedData.timestamp));
        setError(null); // Clear any previous errors when using valid cache
        onDataLoaded(cachedData.data);
        return; // Skip API call
      }
      
      // No valid cached data - fetch from API
      console.log('🌐 No cached data found - fetching fresh data from LAKT API');
      fetchEmergencyPharmacies();
    };

    initializeData();
  }, []); // Empty dependency array - only run on mount

  // Effect to set up smart refresh intervals (runs only once)
  useEffect(() => {
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
        fetchEmergencyPharmacies(true); // Force refresh on scheduled updates
        
        // Set up regular 6-hour intervals after first scheduled refresh
        const refreshInterval = setInterval(() => {
          console.log("Auto-refreshing emergency pharmacy data (6-hour interval)");
          fetchEmergencyPharmacies(true); // Force refresh on scheduled updates
          
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

    const smartRefreshTimeout = setupSmartRefresh();

    // Clean up intervals and timeouts on component unmount
    return () => {
      clearTimeout(smartRefreshTimeout);
    };
  }, []); // Empty dependency array - only run on mount

  // If there's an error, render nothing - parent will handle error display
  if (error) {
    return null;
  }

  // Component renders nothing - status display removed for production
  return null;
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
      // distance: "Entfernung berechnen...",
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

// Note: Fallback data functionality removed
// System now shows proper empty state when API fails:
// - "Aktuelle Notdienste (0)" heading
// - "Keine Apotheken gefunden" message  
// - Clear error banner with retry option

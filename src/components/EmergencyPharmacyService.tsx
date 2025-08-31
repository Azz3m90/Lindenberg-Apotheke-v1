import { useState, useEffect, useCallback } from "react";
import { formatDate, formatTime } from "../utils/dateUtils";
import { getApiDateRange, isDevelopment } from "../utils/apiUtils";
import { useGlobalLoader } from "../contexts/GlobalLoaderContext";
import { 
  cachePharmacyData, 
  getCachedPharmacyData, 
  isCacheValid,
  getCacheStats,
  forceCacheRefresh,
  clearPharmacyCache 
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

  // Helper function to make a single API call attempt
  const makeApiCall = async (beginParam: string, endParam: string, token: string, attemptNumber: number) => {
    const apiUrl = `/api?begin=${beginParam}&end=${endParam}&token=${token}`;
    
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 15000); // 15 second timeout
    
    console.log(`📡 API attempt ${attemptNumber}/3...`);
    
    const response = await fetch(apiUrl, {
      signal: controller.signal,
      headers: {
        'Accept': 'application/xml, text/xml',
        'User-Agent': 'Lindenberg-Apotheke-Website/1.0'
      }
    });
    
    clearTimeout(timeoutId);

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }

    return response.text();
  };

  // Function to fetch emergency pharmacy data with retry logic
  const fetchEmergencyPharmacies = useCallback(async (forceRefresh: boolean = false) => {
    let beginParam: string = '';
    let endParam: string = '';
    const MAX_RETRIES = 3;
    let lastError: any = null;
    
    try {
      // Clear any existing data first to prevent duplicates
      onDataLoaded([]);
      
      // Check cache first unless forced refresh
      if (!forceRefresh) {
        const cachedData = getCachedPharmacyData();
        if (cachedData) {
          console.log('📦 Using cached pharmacy data from session (skipping API call)');
          setLastFetchTime(new Date(cachedData.timestamp));
          setError(null);
          onDataLoaded(cachedData.data);
          return;
        }
      }

      console.log('🌐 Starting API calls to LAKT (up to 3 attempts)...');
      showLoader("Aktuelle Notdienst-Daten werden von LAKT abgerufen...");

      // Get date range for API request
      const dateRange = getApiDateRange(14, false);
      beginParam = dateRange.begin;
      endParam = dateRange.end;
      const token = "0075e630f7ea1c1900a8bb186ccc7382b0f48608";

      // Try up to 3 times
      for (let attempt = 1; attempt <= MAX_RETRIES; attempt++) {
        try {
          if (attempt > 1) {
            // Wait 2 seconds before retry
            console.log(`⏳ Waiting 2 seconds before retry attempt ${attempt}...`);
            showLoader(`Versuch ${attempt} von ${MAX_RETRIES} - Notdienst-Daten werden abgerufen...`);
            await new Promise(resolve => setTimeout(resolve, 2000));
          }

          const xmlText = await makeApiCall(beginParam, endParam, token, attempt);
          
          console.log(`✅ Success on attempt ${attempt}! Received data from LAKT API`);
          setError(null);

          // Parse the XML response
          const pharmacies = parseXmlResponse(xmlText);

          // Clear cache first, then save new data
          clearPharmacyCache();
          cachePharmacyData(pharmacies);

          setLastFetchTime(new Date());
          
          // Clear old data and set new data
          onDataLoaded(pharmacies);
          
          return; // Success - exit function
          
        } catch (attemptError) {
          lastError = attemptError;
          console.error(`❌ Attempt ${attempt} failed:`, attemptError);
          
          if (attempt === MAX_RETRIES) {
            console.error('All 3 attempts failed. Showing error message.');
            break;
          }
        }
      }
      
      // All attempts failed - handle error
      let errorMessage = "Die Notdienst-Daten konnten nach 3 Versuchen nicht abgerufen werden.";
      
      if (lastError instanceof Error) {
        if (lastError.name === 'AbortError') {
          errorMessage = "Die Notdienst-Daten konnten nicht abgerufen werden. Die Anfragen haben zu lange gedauert.";
        } else if (lastError.message.includes('Failed to fetch') || lastError.message.includes('NetworkError')) {
          errorMessage = "Die Notdienst-Daten konnten nicht abgerufen werden. Bitte überprüfen Sie Ihre Internetverbindung.";
        } else if (lastError.message.includes('404')) {
          errorMessage = "Die Notdienst-Daten konnten nicht abgerufen werden. Bitte kontaktieren Sie uns direkt: ☎ 03677 888888";
        } else if (lastError.message.includes('500')) {
          errorMessage = "Die Notdienst-Daten konnten nicht abgerufen werden. Der Service ist temporär nicht verfügbar.";
        }
      }
      
      setError(errorMessage);
      setLastFetchTime(new Date());
      onDataLoaded([]);
      
    } catch (err) {
      console.error("Unexpected error in fetchEmergencyPharmacies:", err);
      setError("Ein unerwarteter Fehler ist aufgetreten.");
      onDataLoaded([]);
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

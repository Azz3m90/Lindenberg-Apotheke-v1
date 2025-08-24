/**
 * Utility functions for API interactions
 */

/**
 * Determines if the application is running in development mode
 */
export function isDevelopment(): boolean {
  // Check if process is defined (server-side)
  if (typeof process !== "undefined" && process.env) {
    return process.env.NODE_ENV === "development";
  }

  // Fallback for client-side
  return false;
}

/**
 * Gets the appropriate date for API requests
 * Always returns the current date for real-time data
 */
export function getApiDate(): Date {
  const now = new Date();
  console.log('Using current date for LAKT API:', now.toISOString());
  return now;
}

/**
 * Formats a date for API requests (YYYY-MM-DD)
 */
export function formatDateForApi(date: Date): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

/**
 * Calculates a date range for API requests that automatically handles month/year boundaries
 * @param days Number of days to include in the range (default: 14 days)
 * @param silent Optional flag to suppress detailed logging (default: false)
 * @returns Object with begin and end dates formatted for API
 */
export function getApiDateRange(days: number = 14, silent: boolean = false): {
  begin: string;
  end: string;
} {
  // Always use current system date for real-time data
  const today = new Date();
  
  // Validate input
  if (days < 1 || days > 365) {
    console.warn(`Invalid days parameter: ${days}. Using default 14 days.`);
    days = 14;
  }
  
  // Start from today for current emergency services
  const beginDate = new Date(today);
  
  // End date is X days from today - JavaScript automatically handles month/year rollover
  const endDate = new Date(today);
  endDate.setDate(today.getDate() + days);

  const range = {
    begin: formatDateForApi(beginDate),
    end: formatDateForApi(endDate),
  };

  // Only log detailed information when not in silent mode
  if (!silent) {
    // Enhanced logging with month boundary detection
    const crossesMonth = beginDate.getMonth() !== endDate.getMonth();
    const crossesYear = beginDate.getFullYear() !== endDate.getFullYear();
    
    console.log(`🌐 LAKT API Dynamic Date Range:`);
    console.log(`   From: ${range.begin} (${beginDate.toLocaleDateString('de-DE', { weekday: 'long', day: '2-digit', month: 'long', year: 'numeric' })})`);
    console.log(`   To: ${range.end} (${endDate.toLocaleDateString('de-DE', { weekday: 'long', day: '2-digit', month: 'long', year: 'numeric' })})`);
    console.log(`   Duration: ${days} days`);
    
    if (crossesMonth) console.log(`   ✓ Crosses month boundary`);
    if (crossesYear) console.log(`   ✓ Crosses year boundary`);
  }
  
  return range;
}

/**
 * Gets the next refresh time for daily data updates
 * @returns Date of next scheduled refresh
 */
export function getNextRefreshTime(): Date {
  const now = new Date();
  const nextRefresh = new Date(now);
  
  // Set next refresh to 6 AM tomorrow
  nextRefresh.setDate(now.getDate() + 1);
  nextRefresh.setHours(6, 0, 0, 0);
  
  return nextRefresh;
}

/**
 * Checks if data should be refreshed based on last fetch time
 * @param lastFetchTime Last time data was fetched
 * @returns Boolean indicating if refresh is needed
 */
export function shouldRefreshData(lastFetchTime: Date | null): boolean {
  if (!lastFetchTime) return true;
  
  const now = new Date();
  const hoursSinceLastFetch = (now.getTime() - lastFetchTime.getTime()) / (1000 * 60 * 60);
  
  // Refresh if more than 6 hours have passed
  return hoursSinceLastFetch >= 6;
}

/**
 * Get current date and time in German format for display
 */
export function getCurrentDateTime(): string {
  const now = new Date();
  return now.toLocaleString('de-DE', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  });
}

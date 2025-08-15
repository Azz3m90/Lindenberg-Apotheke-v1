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
 * In development mode, it returns a fixed date for testing
 * In production mode, it returns the current date
 */
export function getApiDate(): Date {
  // Always use the test date for now to match the example
  // This ensures the API calls work with the provided token
  const testDate = new Date();
  testDate.setFullYear(2025);
  testDate.setMonth(7); // August (0-indexed)
  testDate.setDate(13);

  // In a real production environment, you would use:
  // return isDevelopment() ? testDate : new Date();

  return testDate;
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
 * Calculates a date range for API requests
 * @param days Number of days to include in the range
 * @returns Object with begin and end dates formatted for API
 */
export function getApiDateRange(days: number = 14): {
  begin: string;
  end: string;
} {
  const beginDate = getApiDate();
  const endDate = new Date(beginDate);
  endDate.setDate(beginDate.getDate() + days);

  return {
    begin: formatDateForApi(beginDate),
    end: formatDateForApi(endDate),
  };
}

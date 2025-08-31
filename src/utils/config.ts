/**
 * Application configuration for different environments
 */

/**
 * Detects if the application is running in production
 */
export function isProduction(): boolean {
  if (typeof window === 'undefined') {
    // Server-side: check NODE_ENV
    return process.env.NODE_ENV === 'production';
  }
  
  // Client-side: check hostname
  const hostname = window.location.hostname;
  return !hostname.includes('localhost') && !hostname.includes('127.0.0.1');
}

/**
 * Gets the appropriate API endpoint based on environment
 */
export function getApiEndpoint(): string {
  return isProduction() ? '/.netlify/functions/api' : '/api';
}

/**
 * Gets the LAKT API token from environment or fallback
 */
export function getLaktApiToken(): string {
  return process.env.NEXT_PUBLIC_LAKT_API_TOKEN || '0075e630f7ea1c1900a8bb186ccc7382b0f48608';
}

/**
 * Configuration object with all environment-specific settings
 */
export const config = {
  api: {
    endpoint: getApiEndpoint,
    token: getLaktApiToken,
    timeout: 15000, // 15 seconds
    maxRetries: 3,
    retryDelay: 2000, // 2 seconds
  },
  cache: {
    duration: 6 * 60 * 60 * 1000, // 6 hours
    storage: 'session' as const, // 'session' or 'local'
  },
  dateRange: {
    startDay: 13, // 13th of current month
    endDay: 27, // 27th of next month
  },
};

export default config;
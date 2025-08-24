/**
 * Utility functions for caching emergency pharmacy data
 */

const CACHE_KEY = 'emergency-pharmacy-data';
const CACHE_TIMESTAMP_KEY = 'emergency-pharmacy-timestamp';
const CACHE_DURATION = 6 * 60 * 60 * 1000; // 6 hours in milliseconds

export interface CachedPharmacyData {
  data: any[];
  timestamp: number;
  isLiveData: boolean; // true if from LAKT API, false if fallback
}

/**
 * Store pharmacy data in local cache
 */
export function cachePharmacyData(data: any[], isLiveData: boolean = true): void {
  if (typeof window === 'undefined') return; // Skip on server-side
  
  try {
    const cacheData: CachedPharmacyData = {
      data,
      timestamp: Date.now(),
      isLiveData
    };
    
    localStorage.setItem(CACHE_KEY, JSON.stringify(cacheData));
    console.log(`💾 Cached pharmacy data: ${data.length} entries, live: ${isLiveData} (valid for 6 hours)`);
  } catch (error) {
    console.warn('Failed to cache pharmacy data:', error);
  }
}

/**
 * Retrieve pharmacy data from cache if still valid
 */
export function getCachedPharmacyData(): CachedPharmacyData | null {
  if (typeof window === 'undefined') return null; // Skip on server-side
  
  try {
    const cachedStr = localStorage.getItem(CACHE_KEY);
    if (!cachedStr) {
      console.log('📦 No cached pharmacy data found');
      return null;
    }
    
    const cached: CachedPharmacyData = JSON.parse(cachedStr);
    
    // Check if cache is still valid (within 6 hours)
    const age = Date.now() - cached.timestamp;
    const ageMinutes = Math.round(age / (1000 * 60));
    
    if (age > CACHE_DURATION) {
      console.log(`📦 Cached pharmacy data expired (${ageMinutes} minutes old) - clearing cache`);
      clearPharmacyCache();
      return null;
    }
    
    console.log(`📦 Found valid cached pharmacy data (${ageMinutes} minutes old, ${cached.data.length} entries)`);
    return cached;
    
  } catch (error) {
    console.warn('Failed to retrieve cached pharmacy data:', error);
    clearPharmacyCache();
    return null;
  }
}

/**
 * Check if cached data is still valid
 */
export function isCacheValid(): boolean {
  const cached = getCachedPharmacyData();
  return cached !== null;
}

/**
 * Clear pharmacy data cache
 */
export function clearPharmacyCache(): void {
  if (typeof window === 'undefined') return;
  
  try {
    localStorage.removeItem(CACHE_KEY);
    console.log('Pharmacy data cache cleared');
  } catch (error) {
    console.warn('Failed to clear pharmacy cache:', error);
  }
}

/**
 * Get cache statistics
 */
export function getCacheStats(): { age: number; isValid: boolean } | null {
  const cached = getCachedPharmacyData();
  if (!cached) return null;
  
  const age = Date.now() - cached.timestamp;
  return {
    age: Math.round(age / (1000 * 60)), // age in minutes
    isValid: age <= CACHE_DURATION
  };
}

/**
 * Force cache refresh by clearing existing cache
 */
export function forceCacheRefresh(): void {
  clearPharmacyCache();
  console.log('Cache refresh forced - next API call will fetch fresh data');
}
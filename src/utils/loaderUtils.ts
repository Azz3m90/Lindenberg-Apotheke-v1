import { useGlobalLoader } from "../contexts/GlobalLoaderContext";

/**
 * Utility hook for common loading operations
 */
export function useAsyncOperation() {
  const { showLoader, hideLoader, setLoadingText } = useGlobalLoader();

  /**
   * Execute an async operation with loading state
   */
  const executeWithLoader = async <T>(
    operation: () => Promise<T>,
    loadingText?: string
  ): Promise<T> => {
    try {
      showLoader(loadingText);
      const result = await operation();
      return result;
    } finally {
      hideLoader();
    }
  };

  /**
   * Execute multiple async operations with different loading texts
   */
  const executeMultipleWithLoader = async <T>(
    operations: Array<{
      operation: () => Promise<T>;
      loadingText?: string;
    }>
  ): Promise<T[]> => {
    const results: T[] = [];

    for (let i = 0; i < operations.length; i++) {
      const { operation, loadingText } = operations[i];

      if (loadingText) {
        setLoadingText(loadingText);
      }

      try {
        if (i === 0) showLoader(loadingText);
        const result = await operation();
        results.push(result);
      } catch (error) {
        hideLoader();
        throw error;
      }
    }

    hideLoader();
    return results;
  };

  return {
    executeWithLoader,
    executeMultipleWithLoader,
    showLoader,
    hideLoader,
    setLoadingText,
  };
}

/**
 * Common loading messages in German for pharmacy operations
 */
export const LOADING_MESSAGES = {
  PHARMACY_DATA: "Apotheken-Daten werden geladen...",
  EMERGENCY_SERVICE: "Notdienst-Daten werden geladen...",
  LOCATION_DATA: "Standort-Informationen werden geladen...",
  CONTACT_FORM: "Nachricht wird gesendet...",
  PAGE_LOADING: "Seite wird geladen...",
  SEARCH_RESULTS: "Suchergebnisse werden geladen...",
  MAP_DATA: "Karten-Daten werden geladen...",
  DIRECTIONS: "Route wird berechnet...",
} as const;

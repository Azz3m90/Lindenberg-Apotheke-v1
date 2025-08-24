import { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface GlobalLoaderContextType {
  isLoading: boolean;
  loadingText?: string;
  isInitialLoading: boolean;
  showLoader: (text?: string) => void;
  hideLoader: () => void;
  setLoadingText: (text: string) => void;
}

const GlobalLoaderContext = createContext<GlobalLoaderContextType | undefined>(
  undefined
);

export function useGlobalLoader() {
  const context = useContext(GlobalLoaderContext);
  if (context === undefined) {
    throw new Error(
      "useGlobalLoader must be used within a GlobalLoaderProvider"
    );
  }
  return context;
}

interface GlobalLoaderProviderProps {
  children: ReactNode;
}

export function GlobalLoaderProvider({ children }: GlobalLoaderProviderProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [isInitialLoading, setIsInitialLoading] = useState(true);
  const [loadingText, setLoadingText] = useState<string | undefined>("Website wird geladen...");

  useEffect(() => {
    const handleInitialLoad = () => {
      // Set different loading messages during startup
      const messages = [
        "Website wird geladen...",
        "Daten werden vorbereitet...",
        "Fast fertig..."
      ];
      
      let messageIndex = 0;
      const messageInterval = setInterval(() => {
        if (messageIndex < messages.length - 1) {
          messageIndex++;
          setLoadingText(messages[messageIndex]);
        }
      }, 800);

      // Wait for document ready
      if (document.readyState === 'loading') {
        const handleDOMLoaded = () => {
          document.removeEventListener('DOMContentLoaded', handleDOMLoaded);
          checkFullyLoaded();
        };
        document.addEventListener('DOMContentLoaded', handleDOMLoaded);
      } else {
        checkFullyLoaded();
      }

      function checkFullyLoaded() {
        // Wait for window load event (all resources including images)
        if (document.readyState === 'complete') {
          finishLoading();
        } else {
          window.addEventListener('load', finishLoading, { once: true });
        }
      }

      function finishLoading() {
        clearInterval(messageInterval);
        
        // Add a small delay to ensure smooth loading experience
        setTimeout(() => {
          setLoadingText("Bereit!");
          setTimeout(() => {
            setIsInitialLoading(false);
            setLoadingText(undefined);
          }, 500);
        }, 300);
      }
    };

    handleInitialLoad();
  }, []);

  const showLoader = (text?: string) => {
    if (!isInitialLoading) {
      setLoadingText(text);
      setIsLoading(true);
    }
  };

  const hideLoader = () => {
    if (!isInitialLoading) {
      setIsLoading(false);
      // Clear text after a delay to prevent flashing
      setTimeout(() => setLoadingText(undefined), 200);
    }
  };

  const updateLoadingText = (text: string) => {
    setLoadingText(text);
  };

  // Show loader if either initial loading or manual loading
  const shouldShowLoader = isInitialLoading || isLoading;

  return (
    <GlobalLoaderContext.Provider
      value={{
        isLoading: shouldShowLoader,
        loadingText,
        isInitialLoading,
        showLoader,
        hideLoader,
        setLoadingText: updateLoadingText,
      }}
    >
      {children}
    </GlobalLoaderContext.Provider>
  );
}

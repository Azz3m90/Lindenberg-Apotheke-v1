import { createContext, useContext, useState, ReactNode } from "react";

interface GlobalLoaderContextType {
  isLoading: boolean;
  loadingText?: string;
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
  const [loadingText, setLoadingText] = useState<string | undefined>();

  const showLoader = (text?: string) => {
    setLoadingText(text);
    setIsLoading(true);
  };

  const hideLoader = () => {
    setIsLoading(false);
    // Clear text after a delay to prevent flashing
    setTimeout(() => setLoadingText(undefined), 200);
  };

  const updateLoadingText = (text: string) => {
    setLoadingText(text);
  };

  return (
    <GlobalLoaderContext.Provider
      value={{
        isLoading,
        loadingText,
        showLoader,
        hideLoader,
        setLoadingText: updateLoadingText,
      }}
    >
      {children}
    </GlobalLoaderContext.Provider>
  );
}

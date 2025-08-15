import { useEffect } from "react";
import { useRouter } from "next/router";
import { useGlobalLoader } from "../contexts/GlobalLoaderContext";

/**
 * Hook to automatically show/hide loader during page transitions
 */
export function usePageLoader() {
  const { showLoader, hideLoader } = useGlobalLoader();
  const router = useRouter();

  useEffect(() => {
    const handleRouteStart = (url: string) => {
      showLoader("Seite wird geladen...");
    };

    const handleRouteComplete = () => {
      hideLoader();
    };

    const handleRouteError = () => {
      hideLoader();
    };

    router.events.on("routeChangeStart", handleRouteStart);
    router.events.on("routeChangeComplete", handleRouteComplete);
    router.events.on("routeChangeError", handleRouteError);

    // Cleanup
    return () => {
      router.events.off("routeChangeStart", handleRouteStart);
      router.events.off("routeChangeComplete", handleRouteComplete);
      router.events.off("routeChangeError", handleRouteError);
    };
  }, [router.events, showLoader, hideLoader]);
}

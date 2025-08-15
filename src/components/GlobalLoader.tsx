import { useEffect, useState } from "react";
import { useGlobalLoader } from "../contexts/GlobalLoaderContext";

export default function GlobalLoader() {
  const { isLoading, loadingText } = useGlobalLoader();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (isLoading) {
      setVisible(true);
    } else {
      // Delay hiding to prevent flickering
      const timer = setTimeout(() => setVisible(false), 150);
      return () => clearTimeout(timer);
    }
  }, [isLoading]);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-50 bg-white/90 backdrop-blur-sm transition-opacity duration-300 ${
        isLoading ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          {/* Pharmacy-themed spinner */}
          <div className="relative mb-6">
            <div className="w-16 h-16 border-4 border-primary-200 border-t-primary-600 rounded-full animate-spin mx-auto"></div>
            {/* Pharmacy cross in the center */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-primary-600">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19 8h-2V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H5c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM12 17c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM15.1 8H8.9V6c0-1.71 1.39-3.1 3.1-3.1s3.1 1.39 3.1 3.1v2z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Loading text */}
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            {loadingText || "Wird geladen..."}
          </h3>

          {/* Pharmacy-themed subtitle */}
          <p className="text-gray-600 max-w-sm mx-auto">
            Bitte warten Sie einen Moment
          </p>

          {/* Animated dots */}
          <div className="flex justify-center space-x-1 mt-4">
            <div className="w-2 h-2 bg-primary-500 rounded-full animate-pulse"></div>
            <div
              className="w-2 h-2 bg-primary-500 rounded-full animate-pulse"
              style={{ animationDelay: "0.1s" }}
            ></div>
            <div
              className="w-2 h-2 bg-primary-500 rounded-full animate-pulse"
              style={{ animationDelay: "0.2s" }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}

import { useEffect, useState } from "react";
import { useGlobalLoader } from "../contexts/GlobalLoaderContext";

export default function GlobalLoader() {
  const { isLoading, loadingText, isInitialLoading } = useGlobalLoader();
  const [visible, setVisible] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    if (isLoading) {
      setVisible(true);
      setFadeOut(false);
    } else {
      // Start fade out animation
      setFadeOut(true);
      // Hide component after animation completes
      const timer = setTimeout(() => setVisible(false), 600);
      return () => clearTimeout(timer);
    }
  }, [isLoading]);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] transition-all duration-600 ${
        fadeOut 
          ? "opacity-0 backdrop-blur-0" 
          : "opacity-100 backdrop-blur-sm"
      } ${
        isInitialLoading 
          ? "bg-gradient-to-br from-primary-50 via-white to-secondary-50" 
          : "bg-white/90"
      }`}
    >
      <div className="flex items-center justify-center min-h-screen p-4">
        <div className="text-center max-w-md mx-auto">
          
          {isInitialLoading && (
            <>
              {/* Pharmacy Logo/Brand */}
              <div className="mb-8 animate-fade-in">
                <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-secondary-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="text-white"
                  >
                    <path
                      d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z"
                      fill="currentColor"
                    />
                    <path
                      d="M12 6L12.5 10.5L17 11L12.5 11.5L12 16L11.5 11.5L7 11L11.5 10.5L12 6Z"
                      fill="white"
                      fillOpacity="0.3"
                    />
                  </svg>
                </div>
                <h1 className="text-2xl font-bold text-gray-900 mb-2">
                  Lindenberg-Apotheke
                </h1>
                <p className="text-gray-600 text-sm">
                  Ihre Apotheke im Ärztehaus Ilmenau
                </p>
              </div>
            </>
          )}

          {/* Loading Animation */}
          <div className="relative mb-8">
            {isInitialLoading ? (
              // Enhanced spinner for initial load
              <div className="relative">
                <div className="w-20 h-20 border-4 border-primary-100 border-t-primary-500 border-r-secondary-500 rounded-full animate-spin mx-auto"></div>
                <div className="absolute inset-0 w-16 h-16 border-4 border-transparent border-t-secondary-400 border-l-primary-400 rounded-full animate-spin mx-auto mt-2 ml-2" style={{animationDirection: 'reverse', animationDuration: '1.5s'}}></div>
                
                {/* Pharmacy cross in center */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-primary-600">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.5 12c0 .8-.7 1.5-1.5 1.5h-3v3c0 .8-.7 1.5-1.5 1.5s-1.5-.7-1.5-1.5v-3H7c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5h3V7c0-.8.7-1.5 1.5-1.5s1.5.7 1.5 1.5v3.5H16c.8 0 1.5.7 1.5 1.5z"/>
                    </svg>
                  </div>
                </div>
              </div>
            ) : (
              // Simple spinner for regular loading
              <div className="w-12 h-12 border-4 border-primary-200 border-t-primary-600 rounded-full animate-spin mx-auto"></div>
            )}
          </div>

          {/* Loading Text */}
          <div className="space-y-2 mb-6">
            <h3 className={`font-semibold text-gray-900 transition-all duration-500 ${
              isInitialLoading ? "text-xl" : "text-lg"
            }`}>
              {loadingText || "Wird geladen..."}
            </h3>
            
            {isInitialLoading ? (
              <div className="space-y-1">
                <p className="text-gray-600 text-sm">
                  Willkommen bei der Lindenberg-Apotheke
                </p>
                <p className="text-gray-500 text-xs">
                  Wir bereiten alles für Sie vor...
                </p>
              </div>
            ) : (
              <p className="text-gray-600 text-sm">
                Bitte warten Sie einen Moment
              </p>
            )}
          </div>

          {/* Progress Indicator */}
          {isInitialLoading && (
            <div className="w-full max-w-xs mx-auto mb-6">
              <div className="w-full bg-gray-200 rounded-full h-1.5">
                <div className="bg-gradient-to-r from-primary-500 to-secondary-500 h-1.5 rounded-full animate-pulse" style={{width: '70%'}}></div>
              </div>
            </div>
          )}

          {/* Animated Dots */}
          <div className="flex justify-center space-x-1">
            <div className="w-2 h-2 bg-primary-500 rounded-full animate-bounce"></div>
            <div 
              className="w-2 h-2 bg-secondary-500 rounded-full animate-bounce" 
              style={{ animationDelay: "0.1s" }}
            ></div>
            <div 
              className="w-2 h-2 bg-primary-500 rounded-full animate-bounce" 
              style={{ animationDelay: "0.2s" }}
            ></div>
          </div>

          {/* Features Preview (only for initial load) */}
          {isInitialLoading && (
            <div className="mt-8 grid grid-cols-2 gap-4 text-xs text-gray-500 max-w-sm mx-auto animate-fade-in-delayed">
              <div className="flex items-center space-x-2">
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                <span>Cookie-frei</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                <span>Sicher</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                <span>Modern</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full"></div>
                <span>Schnell</span>
              </div>
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes fade-in-delayed {
          0%, 50% { opacity: 0; transform: translateY(10px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }

        .animate-fade-in-delayed {
          animation: fade-in-delayed 2s ease-out;
        }
      `}</style>
    </div>
  );
}

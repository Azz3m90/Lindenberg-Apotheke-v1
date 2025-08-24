import { useState, useEffect } from "react";
import Link from "next/link";
import { Shield, X, CheckCircle, Eye } from "lucide-react";
import { useGlobalLoader } from "../contexts/GlobalLoaderContext";

export default function PrivacyNotice() {
  const { isInitialLoading } = useGlobalLoader();
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    // Don't show during initial loading
    if (isInitialLoading) {
      return;
    }

    // Check if user has already dismissed the notice
    const dismissed = localStorage.getItem('privacy-notice-dismissed');
    if (dismissed === 'true') {
      setIsDismissed(true);
      return;
    }

    // Show notice after a short delay, but only after initial loading is complete
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, [isInitialLoading]);

  const handleDismiss = () => {
    setIsVisible(false);
    setIsDismissed(true);
    localStorage.setItem('privacy-notice-dismissed', 'true');
  };

  const handleAccept = () => {
    handleDismiss();
  };

  if (isDismissed || !isVisible) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4">
      <div className="container-custom max-w-4xl mx-auto">
        <div className="bg-white border border-gray-200 rounded-2xl shadow-xl p-6">
          <div className="flex items-start justify-between">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Shield className="w-6 h-6 text-green-600" />
              </div>
              
              <div className="flex-1">
                <div className="flex items-center mb-2">
                  <h3 className="text-lg font-semibold text-gray-900 mr-2">
                    🍃 Privacy-First Website
                  </h3>
                  <div className="inline-flex items-center px-2 py-1 bg-green-100 text-green-800 text-xs font-semibold rounded-full">
                    <CheckCircle className="w-3 h-3 mr-1" />
                    Cookie-frei
                  </div>
                </div>
                
                <p className="text-gray-700 text-sm mb-4">
                  <strong>Gute Nachrichten:</strong> Diese Website verwendet <strong>keine Cookies</strong> 
                  und <strong>kein Tracking</strong>. Sie können unsere Website vollständig anonym nutzen. 
                  Wir sammeln nur notwendige technische Daten für die Funktionsfähigkeit.
                </p>
                
                <div className="flex flex-wrap items-center gap-4 text-sm">
                  <div className="flex items-center text-green-600">
                    <CheckCircle className="w-4 h-4 mr-1" />
                    <span>Keine Cookies</span>
                  </div>
                  <div className="flex items-center text-green-600">
                    <Eye className="w-4 h-4 mr-1" />
                    <span>Kein Tracking</span>
                  </div>
                  <div className="flex items-center text-green-600">
                    <Shield className="w-4 h-4 mr-1" />
                    <span>DSGVO-konform</span>
                  </div>
                  
                  <Link 
                    href="/datenschutz" 
                    className="text-primary-600 hover:text-primary-700 font-medium underline"
                  >
                    Datenschutzerklärung →
                  </Link>
                </div>
              </div>
            </div>
            
            <button
              onClick={handleDismiss}
              className="text-gray-400 hover:text-gray-600 p-1 rounded-full hover:bg-gray-100 transition-colors ml-4"
              aria-label="Schließen"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3 mt-6 pt-4 border-t border-gray-100">
            <button
              onClick={handleAccept}
              className="btn bg-green-600 hover:bg-green-700 text-white px-6 py-2 text-sm font-medium rounded-lg flex items-center justify-center"
            >
              <CheckCircle className="w-4 h-4 mr-2" />
              Verstanden
            </button>
            
            <Link
              href="/datenschutz"
              className="btn bg-gray-100 hover:bg-gray-200 text-gray-700 px-6 py-2 text-sm font-medium rounded-lg flex items-center justify-center"
            >
              <Shield className="w-4 h-4 mr-2" />
              Mehr Details
            </Link>
            
            <button
              onClick={handleDismiss}
              className="text-gray-500 hover:text-gray-700 text-sm font-medium underline"
            >
              Schließen
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
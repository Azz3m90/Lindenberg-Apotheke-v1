import Link from "next/link";
import { useState, useEffect } from "react";
import {
  AlertTriangle,
  Phone,
  Clock,
  MapPin,
  ExternalLink,
  Calendar,
} from "lucide-react";
import { getCachedPharmacyData } from "../../utils/cacheUtils";

interface Pharmacy {
  id: string;
  name: string;
  address: string;
  phone: string;
  distance?: string;
  date: string;
  timeStart: string;
  timeEnd: string;
  status: "current" | "upcoming";
}

export default function EmergencyInfo() {
  const [currentTime, setCurrentTime] = useState<string>("");
  const [todayPharmacies, setTodayPharmacies] = useState<Pharmacy[]>([]);
  const [currentDate, setCurrentDate] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleTimeString("de-DE", {
          hour: "2-digit",
          minute: "2-digit",
        })
      );
      setCurrentDate(
        now.toLocaleDateString("de-DE", {
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
        })
      );
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Load all emergency pharmacies for today from cached data
  useEffect(() => {
    const loadTodayPharmacies = () => {
      const cachedData = getCachedPharmacyData();
      if (cachedData && cachedData.data.length > 0) {
        const now = new Date();
        const today = now.toLocaleDateString("de-DE", {
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
        });
        
        // Debug: Log available dates
        console.log('Today\'s date:', today);
        console.log('Current time:', now.toLocaleTimeString("de-DE"));
        console.log('Available pharmacy dates:', [...new Set(cachedData.data.map((p: Pharmacy) => p.date))]);
        
        // First, try to find pharmacies marked as currently active
        const currentActive = cachedData.data.filter((p: Pharmacy) => p.status === "current");
        if (currentActive.length > 0) {
          console.log('Found current active pharmacies:', currentActive.length);
          setTodayPharmacies(currentActive);
          return;
        }
        
        // If no current active, filter pharmacies that start today
        const todaysList = cachedData.data.filter((p: Pharmacy) => {
          return p.date === today;
        });
        
        // Also check for pharmacies that might have started yesterday but are still active
        // (overnight services that end today)
        const yesterday = new Date(now);
        yesterday.setDate(yesterday.getDate() - 1);
        const yesterdayStr = yesterday.toLocaleDateString("de-DE", {
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
        });
        
        const overnightPharmacies = cachedData.data.filter((p: Pharmacy) => {
          // Check if this pharmacy started yesterday and might still be active
          if (p.date === yesterdayStr) {
            // If end time is less than start time, it's an overnight service
            const endHour = parseInt(p.timeEnd.split(':')[0]);
            const currentHour = now.getHours();
            // If it ends at 08:00 or later and current time is before that, it's still active
            if (endHour <= 12 && currentHour < endHour) {
              return true;
            }
          }
          return false;
        });
        
        // Combine today's pharmacies with overnight ones
        const allRelevant = [...todaysList, ...overnightPharmacies];
        
        // Sort by status (current first) then by time
        allRelevant.sort((a: Pharmacy, b: Pharmacy) => {
          if (a.status === "current" && b.status !== "current") return -1;
          if (a.status !== "current" && b.status === "current") return 1;
          return a.timeStart.localeCompare(b.timeStart);
        });
        
        console.log('Total relevant pharmacies for display:', allRelevant.length);
        setTodayPharmacies(allRelevant);
      }
    };

    loadTodayPharmacies();
    
    // Reload every minute to check for changes
    const interval = setInterval(loadTodayPharmacies, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 lg:py-24 bg-red-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-red-100 text-red-800 rounded-full text-sm font-semibold mb-4">
            <AlertTriangle className="w-4 h-4 mr-2" />
            Notdienst Information
          </div>
          <h2 className="heading-lg mb-4">
            <span className="text-red-600">Notdienst</span> & Notfallkontakte
          </h2>
          <p className="text-lead max-w-3xl mx-auto">
            Rund um die Uhr für Sie da – Informationen zum aktuellen
            Apotheken-Notdienst und wichtige Notfallnummern für den
            Gesundheitsnotfall.
          </p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
          {/* All Emergency Pharmacies Today */}
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden lg:col-span-1">
            <div className="bg-red-600 text-white p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-semibold">Notdienst heute</h3>
                  {currentDate && (
                    <div className="text-sm opacity-90 mt-1">{currentDate}</div>
                  )}
                </div>
                <div className="text-right">
                  <div className="text-sm opacity-90">Aktuelle Zeit</div>
                  <div className="text-lg font-bold">{currentTime}</div>
                </div>
              </div>
            </div>

            <div className="p-6">
              {todayPharmacies.length > 0 ? (
                <div className="space-y-4">
                  {/* Display count */}
                  <div className="text-sm text-gray-600 font-medium">
                    {todayPharmacies.length} {todayPharmacies.length === 1 ? 'Apotheke' : 'Apotheken'} im Notdienst heute
                  </div>
                  
                  {/* Scrollable list if more than 3 pharmacies */}
                  <div className={`space-y-3 ${todayPharmacies.length > 3 ? 'max-h-96 overflow-y-auto pr-2 pharmacy-scroll' : ''}`}>
                    {todayPharmacies.map((pharmacy, index) => (
                      <div 
                        key={pharmacy.id} 
                        className={`p-4 rounded-lg border ${
                          pharmacy.status === 'current' 
                            ? 'bg-red-50 border-red-200' 
                            : 'bg-gray-50 border-gray-200'
                        }`}
                      >
                        {/* Status Badge */}
                        <div className="flex items-center justify-between mb-2">
                          {pharmacy.status === 'current' ? (
                            <div className="inline-flex items-center px-2 py-1 bg-red-600 text-white text-xs font-semibold rounded-full">
                              <div className="w-2 h-2 bg-white rounded-full mr-1 animate-pulse"></div>
                              JETZT AKTIV
                            </div>
                          ) : (
                            <div className="inline-flex items-center px-2 py-1 bg-gray-500 text-white text-xs font-semibold rounded-full">
                              AB {pharmacy.timeStart} UHR
                            </div>
                          )}
                          {index === 0 && todayPharmacies.length > 1 && (
                            <span className="text-xs text-gray-500">#{index + 1}</span>
                          )}
                        </div>
                        
                        {/* Pharmacy Name */}
                        <h4 className="font-semibold text-gray-900 mb-2">
                          {pharmacy.name}
                        </h4>
                        
                        {/* Address */}
                        <div className="flex items-start text-gray-600 mb-2">
                          <MapPin className="w-4 h-4 mr-2 mt-0.5 text-red-500 flex-shrink-0" />
                          <div className="flex-1">
                            <span className="text-sm">{pharmacy.address}</span>
                            {/* {pharmacy.distance && pharmacy.distance !== "Entfernung berechnen..." && (
                              <span className="text-xs text-gray-500 ml-2">• {pharmacy.distance}</span>
                            )} */}
                          </div>
                        </div>
                        
                        {/* Time */}
                        <div className="flex items-center text-gray-600 mb-3">
                          <Clock className="w-4 h-4 mr-2 text-yellow-600 flex-shrink-0" />
                          <span className="text-sm">
                            {pharmacy.timeStart} - {pharmacy.timeEnd} Uhr
                          </span>
                        </div>
                        
                        {/* Phone */}
                        <a
                          href={`tel:${pharmacy.phone.replace(/[\s-]/g, "")}`}
                          className="flex items-center justify-center w-full px-3 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                        >
                          <Phone className="w-4 h-4 mr-2 text-red-500" />
                          <span className="font-semibold text-gray-900">
                            {pharmacy.phone}
                          </span>
                        </a>
                      </div>
                    ))}
                  </div>

                  <Link href="/notdienst" className="btn btn-secondary w-full">
                    <Calendar className="w-4 h-4 mr-2" />
                    Vollständiger Notdienstkalender
                  </Link>
                </div>
              ) : todayPharmacies.length === 0 && currentTime ? (
                <div className="space-y-4">
                  <div className="text-center py-8">
                    <AlertTriangle className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
                    <p className="text-gray-700 font-semibold mb-2">Keine Notdienst-Daten für heute</p>
                    <p className="text-gray-600 text-sm">
                      Bitte prüfen Sie den vollständigen Kalender oder rufen Sie 116 117 an
                    </p>
                  </div>
                  <Link href="/notdienst" className="btn btn-primary w-full">
                    <Calendar className="w-4 h-4 mr-2" />
                    Zum Notdienstkalender
                  </Link>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="text-center py-8">
                    <div className="inline-block w-8 h-8 border-4 border-red-200 border-t-red-600 rounded-full animate-spin mb-4"></div>
                    <p className="text-gray-600">Notdienst-Daten werden geladen...</p>
                  </div>
                  <Link href="/notdienst" className="btn btn-secondary w-full">
                    <Calendar className="w-4 h-4 mr-2" />
                    Notdienstkalender anzeigen
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/* Emergency Numbers */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                <Phone className="w-6 h-6 mr-3 text-red-500" />
                Wichtige Notrufnummern
              </h3>

              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-red-50 rounded-lg border border-red-100">
                  <div>
                    <div className="font-semibold text-red-900">
                      Rettungsdienst / Notarzt
                    </div>
                    <div className="text-sm text-red-700">
                      Lebensbedrohliche Notfälle
                    </div>
                  </div>
                  <a
                    href="tel:112"
                    className="text-2xl font-bold text-red-600 hover:text-red-700"
                  >
                    112
                  </a>
                </div>

                <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg border border-blue-100">
                  <div>
                    <div className="font-semibold text-blue-900">Polizei</div>
                    <div className="text-sm text-blue-700">
                      Bei Gefahr und Verbrechen
                    </div>
                  </div>
                  <a
                    href="tel:110"
                    className="text-2xl font-bold text-blue-600 hover:text-blue-700"
                  >
                    110
                  </a>
                </div>

                <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg border border-green-100">
                  <div>
                    <div className="font-semibold text-green-900">
                      Ärztlicher Bereitschaftsdienst
                    </div>
                    <div className="text-sm text-green-700">
                      Nicht lebensbedrohliche Fälle
                    </div>
                  </div>
                  <a
                    href="tel:116117"
                    className="text-xl font-bold text-green-600 hover:text-green-700"
                  >
                    116 117
                  </a>
                </div>

                <div className="flex items-center justify-between p-4 bg-purple-50 rounded-lg border border-purple-100">
                  <div>
                    <div className="font-semibold text-purple-900">
                      Giftnotruf
                    </div>
                    <div className="text-sm text-purple-700">GGIZ Erfurt</div>
                  </div>
                  <a
                    href="tel:0361730730"
                    className="text-lg font-bold text-purple-600 hover:text-purple-700"
                  >
                    0361 730 730
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Access to Services */}
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Schnelle Hilfe bei uns
              </h3>
              <div className="space-y-3">
                <div className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mr-3" />
                  <span className="text-sm">Erste-Hilfe Beratung vor Ort</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mr-3" />
                  <span className="text-sm">Notfall-Medikamente vorrätig</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mr-3" />
                  <span className="text-sm">Sofortige Wundversorgung</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mr-3" />
                  <span className="text-sm">Blutdruck-Notmessung</span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-200">
                <a href="tel:+493677888888" className="btn btn-primary w-full">
                  <Phone className="w-4 h-4 mr-2" />
                  Lindenberg-Apotheke: 03677 888888
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Info */}
        <div className="mt-12 text-center">
          <div className="bg-white rounded-xl p-6 border border-gray-200 max-w-4xl mx-auto">
            <p className="text-gray-600 text-sm">
              <strong>Hinweis:</strong> Bei lebensbedrohlichen Notfällen wählen
              Sie sofort die <strong>112</strong>. Der Apotheken-Notdienst ist
              für dringende Arzneimittelversorgung außerhalb der regulären
              Öffnungszeiten da. Alle Angaben ohne Gewähr - aktuelle Notdienste
              finden Sie auch unter{" "}
              <a
                href="https://www.aponet.de"
                className="text-primary-600 hover:text-primary-700 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                aponet.de <ExternalLink className="w-3 h-3 inline ml-1" />
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

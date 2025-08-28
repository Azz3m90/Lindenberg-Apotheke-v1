import { useState, useEffect, useCallback } from "react";
import { v4 as uuidv4 } from 'uuid';
import { NextSeo } from "next-seo";
import Layout from "../components/Layout";
import EmergencyPharmacyService from "../components/EmergencyPharmacyService";
import { calculateDistance, formatDistance } from "../utils/dateUtils";
import {
  AlertTriangle,
  Phone,
  Clock,
  MapPin,
  ExternalLink,
  Calendar,
  // Navigation,
  Search,
  Filter,
  Loader,
  RefreshCw,
} from "lucide-react";

// Define pharmacy interface
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
  lat: string;
  lng: string;
}

const emergencyNumbers = [
  {
    number: "112",
    title: "Rettungsdienst / Notarzt",
    description: "Bei lebensbedrohlichen Notfällen",
    color: "red",
  },
  {
    number: "110",
    title: "Polizei",
    description: "Bei Gefahr und Verbrechen",
    color: "blue",
  },
  {
    number: "116 117",
    title: "Ärztlicher Bereitschaftsdienst",
    description: "Nicht lebensbedrohliche Fälle",
    color: "green",
  },
  {
    number: "0361 730 730",
    title: "Giftnotruf Thüringen",
    description: "GGIZ Erfurt - 24h erreichbar",
    color: "purple",
  },
];

export default function Notdienst() {
  const [currentTime, setCurrentTime] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState("");
  const [filterLocation, setFilterLocation] = useState("all");
  const [pharmacies, setPharmacies] = useState<Pharmacy[]>([]);
  const [loading, setLoading] = useState(true);
  const [userLocation, setUserLocation] = useState<{
    lat: number;
    lng: number;
  } | null>(null);
  const [refreshFunction, setRefreshFunction] = useState<(() => void) | null>(null);
  const [isRefreshing, setIsRefreshing] = useState(false);

  // Update current time
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleTimeString("de-DE", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })
      );
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Get user location if available
  // useEffect(() => {
  //   if (navigator.geolocation) {
  //     navigator.geolocation.getCurrentPosition(
  //       (position) => {
  //         setUserLocation({
  //           lat: position.coords.latitude,
  //           lng: position.coords.longitude,
  //         });
  //       },
  //       (error) => {
  //         console.log("Error getting location:", error);
  //       }
  //     );
  //   }
  // }, []);

  // Handle data loaded from API
  const handleDataLoaded = useCallback((data: Pharmacy[]) => {
    // Calculate distances if user location is available
    if (userLocation) {
      data = data.map((pharmacy) => {
        const lat = parseFloat(pharmacy.lat);
        const lng = parseFloat(pharmacy.lng);

        if (!isNaN(lat) && !isNaN(lng)) {
          const distance = calculateDistance(
            userLocation.lat,
            userLocation.lng,
            lat,
            lng
          );
          return {
            ...pharmacy,
            distance: formatDistance(distance),
          };
        }
        return pharmacy;
      });
    }

    setPharmacies(data);
    setLoading(false);
  }, [userLocation]);

  // Handle refresh function from EmergencyPharmacyService
  const handleRefreshFunction = useCallback((refreshFn: () => void) => {
    setRefreshFunction(() => refreshFn);
  }, []);

  // Manual refresh handler
  const handleManualRefresh = async () => {
    if (refreshFunction && !isRefreshing) {
      setIsRefreshing(true);
      setLoading(true);
      try {
        await refreshFunction();
      } finally {
        setIsRefreshing(false);
      }
    }
  };

  // Filter pharmacies based on search and location filter
  const filteredPharmacies = pharmacies.filter((pharmacy) => {
    const matchesSearch =
      pharmacy.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pharmacy.address.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLocation =
      filterLocation === "all" ||
      (filterLocation === "ilmenau" && pharmacy.address.includes("Ilmenau")) ||
      (filterLocation === "region" && !pharmacy.address.includes("Ilmenau"));
    return matchesSearch && matchesLocation;
  });

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Apotheken-Notdienst Ilmenau",
    description:
      "Aktuelle Apotheken-Notdienste in Ilmenau und Umgebung. 24h Notdienst-Kalender mit Adressen und Telefonnummern.",
    mainEntity: {
      "@type": "EmergencyService",
      name: "Apotheken-Notdienst Ilmenau",
      areaServed: "Ilmenau, Thüringen",
      availableLanguage: "de",
      telephone: "116117",
    },
  };

  return (
    <Layout>
      <NextSeo
        title="Apotheken-Notdienst"
        description="Aktuelle Apotheken-Notdienste in Ilmenau und Umgebung. 24h Notdienst-Kalender, Adressen, Telefonnummern und wichtige Notrufnummern für den Gesundheitsnotfall."
        canonical="https://www.lindenberg-apotheke.de/notdienst/"
      />

      {/* Load emergency pharmacy data */}
      <EmergencyPharmacyService 
        onDataLoaded={handleDataLoaded} 
        onRefreshFunction={handleRefreshFunction}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      <section className="bg-red-600 text-white py-16 lg:py-20">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 bg-red-500 rounded-full text-sm font-semibold mb-6">
              <AlertTriangle className="w-4 h-4 mr-2" />
              24h Notdienst
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Apotheken-Notdienst
              <br />
              <span className="text-red-200">Ilmenau & Umgebung</span>
            </h1>
            <p className="text-xl text-red-100 mb-8">
              Hier finden Sie alle aktuellen Apotheken-Notdienste in Ihrer Nähe.
              Rund um die Uhr verfügbar für Ihren Arzneimittelbedarf.
            </p>
            <div className="bg-red-500 rounded-xl p-6 inline-block">
              <div className="flex items-center justify-center space-x-4">
                <Clock className="w-6 h-6" />
                <div className="text-left">
                  <div className="text-sm opacity-90">Aktuelle Zeit</div>
                  <div className="text-2xl font-bold">{currentTime}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter
      <section className="py-8 bg-gray-50 border-b border-gray-200">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Suche nach Apotheke oder Ort..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              />
            </div>
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <select
                value={filterLocation}
                onChange={(e) => setFilterLocation(e.target.value)}
                className="pl-10 pr-8 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white min-w-[200px]"
              >
                <option value="all">Alle Standorte</option>
                <option value="ilmenau">Nur Ilmenau</option>
                <option value="region">Umliegende Orte</option>
              </select>
            </div>
          </div>
        </div>
      </section> */}

      {/* Emergency Pharmacies List */}
      <section className="py-16 lg:py-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900">
                  Aktuelle Notdienste{" "}
                  {!loading && `(${filteredPharmacies.length})`}
                </h2>
                <button
                  onClick={handleManualRefresh}
                  disabled={isRefreshing || !refreshFunction}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isRefreshing 
                      ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                      : 'bg-primary-100 hover:bg-primary-200 text-primary-700 hover:text-primary-800'
                  }`}
                  title="Notdienst-Daten manuell aktualisieren"
                >
                  <RefreshCw 
                    className={`w-4 h-4 ${isRefreshing ? 'animate-spin' : ''}`}
                  />
                  <span>
                    {isRefreshing ? 'Aktualisiert...' : 'Aktualisieren'}
                  </span>
                </button>
              </div>

              {loading ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4 animate-spin">
                    <Loader className="w-8 h-8 text-primary-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Notdienste werden geladen
                  </h3>
                  <p className="text-gray-600">
                    Bitte warten Sie einen Moment, während wir die aktuellen
                    Notdienste abrufen.
                  </p>
                </div>
              ) : (
                <div className="space-y-4">
                  {filteredPharmacies.map((pharmacy) => (
                    <div
                      key={uuidv4()}
                      className="bg-white rounded-xl shadow-lg border border-gray-100 p-6"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-semibold text-gray-900 mb-2">
                            {pharmacy.name}
                          </h3>
                          <div className="flex items-center text-gray-600 mb-1">
                            <MapPin className="w-4 h-4 mr-2" />
                            <span className="text-sm">{pharmacy.address}</span>
                          </div>
                          {/* <div className="flex items-center text-gray-600">
                            <Navigation className="w-4 h-4 mr-2" />
                            <span className="text-sm">
                              {pharmacy.distance || "Entfernung berechnen..."}
                            </span>
                          </div> */}
                        </div>
                        {pharmacy.status === "current" && (
                          <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-semibold">
                            Aktuell
                          </span>
                        )}
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-gray-50 rounded-lg p-4">
                          <div className="flex items-center mb-2">
                            <Calendar className="w-5 h-5 mr-2 text-primary-500" />
                            <span className="font-semibold">
                              Notdienst-Zeit
                            </span>
                          </div>
                          <div className="text-sm text-gray-600">
                            <div>{pharmacy.date}</div>
                            <div>
                              {pharmacy.timeStart} - {pharmacy.timeEnd} Uhr
                              {pharmacy.timeEnd < pharmacy.timeStart &&
                                " (Folgetag)"}
                            </div>
                          </div>
                        </div>

                        <div className="bg-primary-50 rounded-lg p-4">
                          <div className="flex items-center mb-2">
                            <Phone className="w-5 h-5 mr-2 text-primary-500" />
                            <span className="font-semibold">Telefon</span>
                          </div>
                          <a
                            href={`tel:${pharmacy.phone.replace(/[\s-]/g, "")}`}
                            className="text-primary-600 hover:text-primary-700 font-semibold"
                          >
                            {pharmacy.phone}
                          </a>
                        </div>
                      </div>

                      <div className="mt-4 pt-4 border-t border-gray-200 flex flex-col sm:flex-row gap-3">
                        <a
                          href={`tel:${pharmacy.phone.replace(/[\s-]/g, "")}`}
                          className="btn btn-primary flex-1 text-center"
                        >
                          <Phone className="w-4 h-4 mr-2" />
                          Anrufen
                        </a>
                        <a
                          href={`https://www.google.com/maps/search/${encodeURIComponent(
                            pharmacy.address
                          )}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-secondary flex-1 text-center"
                        >
                          <MapPin className="w-4 h-4 mr-2" />
                          Route planen
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {!loading && filteredPharmacies.length === 0 && (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Search className="w-8 h-8 text-gray-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Keine Apotheken gefunden
                  </h3>
                  <p className="text-gray-600">
                    Versuchen Sie es mit anderen Suchbegriffen oder wählen Sie
                    "Alle Standorte".
                  </p>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Emergency Numbers */}
              <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <Phone className="w-5 h-5 mr-2 text-red-500" />
                  Wichtige Notrufnummern
                </h3>

                <div className="space-y-3">
                  {emergencyNumbers.map((emergency, index) => (
                    <div
                      key={index}
                      className={`p-3 rounded-lg border ${
                        emergency.color === "red"
                          ? "bg-red-50 border-red-100"
                          : emergency.color === "blue"
                          ? "bg-blue-50 border-blue-100"
                          : emergency.color === "green"
                          ? "bg-green-50 border-green-100"
                          : "bg-purple-50 border-purple-100"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span
                          className={`font-bold text-lg ${
                            emergency.color === "red"
                              ? "text-red-600"
                              : emergency.color === "blue"
                              ? "text-blue-600"
                              : emergency.color === "green"
                              ? "text-green-600"
                              : "text-purple-600"
                          }`}
                        >
                          {emergency.number}
                        </span>
                        <a
                          href={`tel:${emergency.number.replace(/\s/g, "")}`}
                          className={`text-xs px-2 py-1 rounded ${
                            emergency.color === "red"
                              ? "bg-red-600 hover:bg-red-700"
                              : emergency.color === "blue"
                              ? "bg-blue-600 hover:bg-blue-700"
                              : emergency.color === "green"
                              ? "bg-green-600 hover:bg-green-700"
                              : "bg-purple-600 hover:bg-purple-700"
                          } text-white`}
                        >
                          Anrufen
                        </a>
                      </div>
                      <div
                        className={`font-medium text-sm ${
                          emergency.color === "red"
                            ? "text-red-900"
                            : emergency.color === "blue"
                            ? "text-blue-900"
                            : emergency.color === "green"
                            ? "text-green-900"
                            : "text-purple-900"
                        }`}
                      >
                        {emergency.title}
                      </div>
                      <div
                        className={`text-xs ${
                          emergency.color === "red"
                            ? "text-red-700"
                            : emergency.color === "blue"
                            ? "text-blue-700"
                            : emergency.color === "green"
                            ? "text-green-700"
                            : "text-purple-700"
                        }`}
                      >
                        {emergency.description}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Access */}
              <div className="bg-primary-50 rounded-xl p-6 border border-primary-100">
                <h3 className="font-semibold text-gray-900 mb-4">
                  Lindenberg-Apotheke
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  Bei akuten Fragen zu Medikamenten während unserer
                  Öffnungszeiten:
                </p>
                <a
                  href="tel:+493677888888"
                  className="btn btn-primary w-full mb-3"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  03677 888888
                </a>
                <div className="text-xs text-gray-500">
                  Mo-Fr: 7-18 Uhr | Sa: 9-12 Uhr
                </div>
              </div>

              {/* External Links */}
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-semibold text-gray-900 mb-4">
                  Weitere Notdienst-Infos
                </h3>
                <div className="space-y-3">
                  <a
                    href="https://www.aponet.de"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-sm text-gray-600 hover:text-primary-600"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    aponet.de
                  </a>
                  <a
                    href="https://www.abda.de"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-sm text-gray-600 hover:text-primary-600"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    ABDA - Notdienstsuche
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Data Freshness Info */}
      <section className="py-8 bg-green-50">
        <div className="container-custom">
          <div className="bg-white rounded-xl p-6 border border-green-200 max-w-4xl mx-auto">
            <div className="flex items-start">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse mr-4 flex-shrink-0 mt-2"></div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 mb-2 flex items-center">
                  <Clock className="w-5 h-5 mr-2 text-green-600" />
                  Aktuelle Notdienst-Daten
                </h3>
                <div className="text-sm text-gray-700 space-y-2">
                  <p>
                    Die Notdienst-Daten werden <strong>automatisch alle 6 Stunden</strong> aktualisiert: 
                    um 6:00, 12:00, 18:00 und 24:00 Uhr.
                  </p>
                  <p>
                    Zusätzlich prüft das System <strong>alle 30 Minuten</strong>, welche Apotheken 
                    gerade im aktuellen Notdienst sind.
                  </p>
                  <div className="flex flex-wrap items-center gap-4 mt-3 text-xs">
                    <div className="flex items-center space-x-1">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-green-700 font-medium">Live-Status</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <RefreshCw className="w-3 h-3 text-blue-500" />
                      <span className="text-blue-700">6h Daten-Updates</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-3 h-3 text-purple-500" />
                      <span className="text-purple-700">30min Status-Checks</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Important Notice */}
      <section className="py-12 bg-yellow-50">
        <div className="container-custom">
          <div className="bg-white rounded-xl p-6 border border-yellow-200 max-w-4xl mx-auto">
            <div className="flex items-start">
              <AlertTriangle className="w-6 h-6 text-yellow-600 mr-4 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  Wichtige Hinweise zum Apotheken-Notdienst
                </h3>
                <div className="text-sm text-gray-700 space-y-2">
                  <p>
                    <strong>Bei lebensbedrohlichen Notfällen</strong> wählen Sie
                    sofort die <strong>112</strong>.
                  </p>
                  <p>
                    Der Apotheken-Notdienst ist für dringende
                    Arzneimittelversorgung außerhalb der regulären
                    Öffnungszeiten da.
                  </p>
                  <p>
                    <strong>Notdienstgebühr:</strong> Außerhalb der
                    Öffnungszeiten wird eine gesetzliche Notdienstgebühr
                    erhoben.
                  </p>
                  <p>
                    Alle Angaben ohne Gewähr. Änderungen sind kurzfristig
                    möglich. Bei Unsicherheiten rufen Sie die Apotheke vor dem
                    Besuch an.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

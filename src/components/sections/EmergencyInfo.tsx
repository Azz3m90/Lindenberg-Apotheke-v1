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

// Mock emergency pharmacy data - in real app, this would come from an API
const emergencyPharmacies = [
  {
    name: "Rathaus-Apotheke Ilmenau",
    address: "Marktplatz 1, 98693 Ilmenau",
    phone: "03677-123456",
    distance: "0.8 km",
    date: new Date().toLocaleDateString("de-DE"),
  },
  {
    name: "Stadt-Apotheke Ilmenau",
    address: "Bahnhofstraße 15, 98693 Ilmenau",
    phone: "03677-654321",
    distance: "1.2 km",
    date: new Date(Date.now() + 86400000).toLocaleDateString("de-DE"), // Tomorrow
  },
];

export default function EmergencyInfo() {
  const [currentTime, setCurrentTime] = useState<string>("");
  const [currentEmergency, setCurrentEmergency] = useState(
    emergencyPharmacies[0]
  );

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleTimeString("de-DE", {
          hour: "2-digit",
          minute: "2-digit",
        })
      );
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Current Emergency Pharmacy */}
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
            <div className="bg-red-600 text-white p-6">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold">Notdienst heute</h3>
                <div className="text-right">
                  <div className="text-sm opacity-90">Aktuelle Zeit</div>
                  <div className="text-lg font-bold">{currentTime}</div>
                </div>
              </div>
            </div>

            <div className="p-6">
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 text-lg mb-2">
                    {currentEmergency.name}
                  </h4>
                  <div className="flex items-start text-gray-600 mb-3">
                    <MapPin className="w-4 h-4 mr-2 mt-0.5 text-red-500" />
                    <span className="text-sm">{currentEmergency.address}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 mr-3 text-red-500" />
                    <div>
                      <div className="font-semibold text-gray-900">
                        Notdienst-Telefon
                      </div>
                      <div className="text-sm text-gray-600">
                        24 Stunden erreichbar
                      </div>
                    </div>
                  </div>
                  <a
                    href={`tel:${currentEmergency.phone.replace(/[\s-]/g, "")}`}
                    className="btn btn-primary"
                  >
                    {currentEmergency.phone}
                  </a>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 mr-2 text-yellow-600" />
                    <div>
                      <div className="font-medium text-yellow-800">
                        Notdienst-Zeiten
                      </div>
                      <div className="text-sm text-yellow-700">
                        Heute 18:00 Uhr bis morgen 8:00 Uhr
                      </div>
                    </div>
                  </div>
                </div>

                <Link href="/notdienst" className="btn btn-secondary w-full">
                  <Calendar className="w-4 h-4 mr-2" />
                  Notdienstkalender anzeigen
                </Link>
              </div>
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
                    0361 730730
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

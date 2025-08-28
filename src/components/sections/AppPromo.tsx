import Link from "next/link";
import {
  Smartphone,
  Download,
  QrCode,
  CheckCircle,
  Star,
  Clock,
  Monitor,
  Phone,
} from "lucide-react";

const appFeatures = [
  "Rezepte per Foto vorbestellen",
  "Notdienst-Apotheken finden",
  "Medikamentenliste verwalten",
  "Wechselwirkungen prüfen",
  "Beipackzettel verstehen",
  "Bestellservice nutzen",
  "Öffnungszeiten abrufen",
  "Direkter Kontakt zur Apotheke",
];

export default function AppPromo() {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-br from-primary-600 via-primary-700 to-secondary-600 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-white bg-opacity-5 rounded-full"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-white bg-opacity-5 rounded-full"></div>
      <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-yellow-300 bg-opacity-10 rounded-full"></div>

      <div className="relative container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-white bg-opacity-20 rounded-full text-sm font-semibold mb-4">
                <Smartphone className="w-4 h-4 mr-2" />
                Apotheken-App
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
                Ihre Apotheke
                <br />
                <span className="text-yellow-300">immer dabei</span>
              </h2>
              <p className="text-xl text-primary-100 leading-relaxed">
                Mit der kostenlosen "Apotheke vor Ort" App haben Sie unsere
                Services jederzeit griffbereit – inklusive Rezept-Vorbestellung
                und Notdienst-Finder.
              </p>
            </div>

            {/* App Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {appFeatures.map((feature, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="w-5 h-5 mr-3 text-secondary-300 flex-shrink-0" />
                  <span className="text-primary-100">{feature}</span>
                </div>
              ))}
            </div>

            {/* Download Buttons */}
            <div className="space-y-4">
              <p className="text-primary-200 font-medium">
                Kostenlos downloaden:
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://apps.apple.com/de/app/gesund-de-e-rezept-apotheke/id1554260352"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn bg-black hover:bg-gray-800 text-white border-0 flex items-center justify-center"
                >
                  <Monitor className="w-5 h-5 mr-3" />
                  <div className="text-left">
                    <div className="text-xs">Download im</div>
                    <div className="text-sm font-semibold">App Store</div>
                  </div>
                </a>
                <a
                  href="https://play.google.com/store/search?q=gesund.de+app&c=apps&utm_source=emea_Med"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn bg-black hover:bg-gray-800 text-white border-0 flex items-center justify-center"
                >
                  <Phone className="w-5 h-5 mr-3" />
                  <div className="text-left">
                    <div className="text-xs">Jetzt bei</div>
                    <div className="text-sm font-semibold">Google Play</div>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Right Content - App Screenshots/QR */}
          <div className="relative flex items-center justify-center lg:justify-end">
            <div className="relative max-w-sm mx-auto">
              {/* Phone Mockup */}
              <div className="relative z-10">
                <div className="w-72 h-auto bg-gray-900 rounded-3xl p-3 shadow-2xl">
                  <div className="bg-white rounded-2xl overflow-hidden">
                    <img
                      src="/app-screenshot.svg"
                      alt="Lindenberg-Apotheke App Screenshot"
                      className="w-full h-auto"
                      width={280}
                      height={560}
                    />
                  </div>
                </div>
              </div>

              {/* Floating Features - Better Positioned */}
              <div className="absolute -left-8 lg:-left-16 top-16 bg-white text-gray-900 p-3 rounded-xl shadow-xl max-w-xs z-20 hidden sm:block">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center mr-3">
                    <QrCode className="w-5 h-5 text-primary-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm">Rezept scannen</div>
                    <div className="text-xs text-gray-600">
                      Per Foto vorbestellen
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -right-8 lg:-right-16 bottom-32 bg-white text-gray-900 p-3 rounded-xl shadow-xl max-w-xs z-20 hidden sm:block">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-secondary-100 rounded-lg flex items-center justify-center mr-3">
                    <Clock className="w-5 h-5 text-secondary-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm">
                      Notdienst-Finder
                    </div>
                    <div className="text-xs text-gray-600">Immer aktuell</div>
                  </div>
                </div>
              </div>

              {/* QR Code - Better Positioned */}
              <div className="absolute -bottom-4 -right-4 bg-white p-3 rounded-xl shadow-xl z-20">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mb-1">
                    <QrCode className="w-8 h-8 text-gray-400" />
                  </div>
                  <div className="text-xs text-gray-600 font-medium">
                    QR-Code scannen
                  </div>
                  <div className="text-xs text-gray-500">zum Download</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Info */}
        <div className="mt-20 text-center">
          <div className="bg-white bg-opacity-10 rounded-3xl p-10 backdrop-blur-sm border border-white border-opacity-20">
            <div className="flex items-center justify-center mb-6">
              <div className="flex items-center space-x-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-6 h-6 fill-yellow-400 text-yellow-400"
                  />
                ))}
                <span className="text-xl font-bold ml-3">4.8/5</span>
              </div>
            </div>
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              Schon über 10.000 zufriedene App-Nutzer!
            </h3>
            <p className="text-primary-100 text-lg max-w-2xl mx-auto mb-8">
              Die App wird kontinuierlich weiterentwickelt und regelmäßig mit
              neuen Funktionen ausgestattet. Kostenfrei für alle Apple- und
              Android-Geräte.
            </p>
            <Link
              href="/app"
              className="btn bg-white text-primary-700 hover:bg-gray-100 text-lg px-8 py-3"
            >
              <Download className="w-5 h-5 mr-2" />
              Mehr zur App erfahren
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

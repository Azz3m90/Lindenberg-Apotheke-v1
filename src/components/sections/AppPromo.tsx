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
  Sparkles,
  ArrowRight,
  Camera,
  MapPin,
  Heart,
  Shield,
  Users,
  Play,
} from "lucide-react";
import { useState } from "react";

// Custom Apple and Android icons as SVG components
const Apple = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
  </svg>
);

const Android = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4482.9993.9993.0001.5511-.4482.9997-.9993.9997m-11.046 0c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4482.9993.9993 0 .5511-.4482.9997-.9993.9997m11.4045-6.02l1.9973-3.4592a.416.416 0 00-.1521-.5676.416.416 0 00-.5676.1521l-2.0223 3.503C15.5902 8.2439 13.8533 7.8508 12 7.8508s-3.5902.3931-5.1367 1.0989L4.841 5.4467a.4161.4161 0 00-.5677-.1521.4157.4157 0 00-.1521.5676l1.9973 3.4592C2.6889 11.1867.3432 14.6589 0 18.761h24c-.3435-4.1021-2.6892-7.5743-6.1185-9.4396"/>
  </svg>
);

// QR Code data URL for app download
const generateQRCodeDataURL = (url: string) => {
  return `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(url)}`;
};

const appFeatures = [
  {
    icon: Camera,
    title: "Rezepte per Foto",
    description: "Vorbestellen ohne Wartezeit"
  },
  {
    icon: MapPin,
    title: "Notdienst-Finder",
    description: "Immer die nächste Apotheke"
  },
  {
    icon: Heart,
    title: "Medikamentenliste",
    description: "Alles im Überblick behalten"
  },
  {
    icon: Shield,
    title: "Wechselwirkungen",
    description: "Sicherheit bei Medikamenten"
  },
];

export default function AppPromo() {
  const [showQRModal, setShowQRModal] = useState(false);
  
  const appStoreURL = "https://apps.apple.com/de/app/gesund-de-e-rezept-apotheke/id1554260352";
  const playStoreURL = "https://play.google.com/store/search?q=gesund.de+app&c=apps&utm_source=emea_Med";
  const websiteURL = "https://www.gesund.de/apotheke/lindenberg-apotheke-98693-ilmenau";

  return (
    <section className="relative py-24 lg:py-32 bg-gradient-to-br from-slate-900 via-primary-900 to-primary-800 text-white overflow-hidden">

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='grid' width='80' height='80' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 80 0 L 0 0 0 80' fill='none' stroke='white' stroke-width='1'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23grid)' /%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="relative container-custom">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-20 items-center">
          {/* Left Content */}
          <div className="space-y-10">
            <div>
              <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm rounded-full border border-white/10 mb-8">
                <Sparkles className="w-5 h-5 mr-3 text-yellow-300" />
                <span className="font-semibold text-lg">Apotheke vor Ort - Ihre Stamm-Apotheke</span>
              </div>
              
              <h2 className="text-5xl lg:text-7xl font-bold leading-tight mb-8">
                Die innovative
                <br />
                <span className="bg-gradient-to-r from-yellow-300 via-yellow-200 to-yellow-300 bg-clip-text text-transparent">
                  Apotheken-App
                </span>
              </h2>
              
              <p className="text-xl lg:text-2xl text-white/80 leading-relaxed mb-8">
                Mit der kostenlosen <strong className="text-white">"Apotheke vor Ort"</strong> App haben Sie unsere
                Services jederzeit griffbereit – inklusive Rezept-Vorbestellung
                und Notdienst-Finder.
              </p>
            </div>

            {/* App Features Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {appFeatures.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div key={index} className="group bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 hover:border-white/30 transition-all duration-300">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary-400 to-secondary-400 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-white mb-1">{feature.title}</h3>
                        <p className="text-sm text-white/70">{feature.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Download Section */}
            <div className="space-y-6">
              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-6 h-6 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <div className="text-white">
                  <span className="text-2xl font-bold">4.8/5</span>
                  <span className="text-sm text-white/70 ml-2">(2.450+ Bewertungen)</span>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href={appStoreURL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group bg-black hover:bg-gray-800 text-white px-8 py-4 rounded-2xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center shadow-xl hover:shadow-2xl"
                  >
                    <Apple className="w-7 h-7 mr-4" />
                    <div className="text-left">
                      <div className="text-sm text-gray-300">Download im</div>
                      <div className="text-lg font-bold">App Store</div>
                    </div>
                  </a>
                  <a
                    href={playStoreURL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group bg-black hover:bg-gray-800 text-white px-8 py-4 rounded-2xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center shadow-xl hover:shadow-2xl"
                  >
                    <Android className="w-7 h-7 mr-4" />
                    <div className="text-left">
                      <div className="text-sm text-gray-300">Jetzt bei</div>
                      <div className="text-lg font-bold">Google Play</div>
                    </div>
                  </a>
                </div>
                
                <div className="flex justify-center pt-6 border-t border-white/20">
                  <button 
                    onClick={() => setShowQRModal(true)}
                    className="group relative bg-gradient-to-r from-white/20 to-white/10 backdrop-blur-sm border border-white/30 hover:border-white/50 rounded-2xl px-8 py-4 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
                  >
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-yellow-300 to-yellow-400 rounded-xl flex items-center justify-center mr-4 group-hover:rotate-12 transition-all duration-300 shadow-lg">
                        <QrCode className="w-6 h-6 text-black" />
                      </div>
                      <div className="text-left">
                        <div className="text-white font-bold text-lg">QR-Code scannen</div>
                        <div className="text-white/70 text-sm">Für schnellen Download</div>
                      </div>
                    </div>
                    
                    {/* Animated border glow */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-yellow-300/0 via-yellow-300/20 to-yellow-300/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Enhanced Phone Mockup */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              {/* Glowing backdrop */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-400 to-secondary-400 rounded-[3rem] blur-3xl opacity-30 scale-110"></div>
              
              {/* Phone mockup */}
              <div className="relative w-80 bg-gradient-to-br from-gray-900 to-black rounded-[3rem] p-3 shadow-2xl transform hover:scale-105 transition-transform duration-500">
                <div className="bg-white rounded-[2.5rem] overflow-hidden relative">
                  {/* Status bar */}
                  <div className="absolute top-0 left-0 right-0 h-8 bg-black rounded-t-[2.5rem] z-10">
                    <div className="flex justify-center pt-2">
                      <div className="w-20 h-1 bg-white rounded-full"></div>
                    </div>
                  </div>
                  <img
                    src="/app-screenshot.svg"
                    alt="Lindenberg-Apotheke App Screenshot"
                    className="w-full h-auto"
                    width={320}
                    height={650}
                  />
                </div>
              </div>


            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-24 text-center">
          <div className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-12 border border-white/20">
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl lg:text-4xl font-bold mb-4">
                  Schon über <span className="text-yellow-300">10.000</span> zufriedene App-Nutzer!
                </h3>
                <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
                  Die App wird kontinuierlich weiterentwickelt und regelmäßig mit
                  neuen Funktionen ausgestattet. Kostenfrei für alle Apple- und Android-Geräte.
                </p>
              </div>
              
              <Link
                href="/app"
                className="group inline-flex items-center px-8 py-4 bg-white text-primary-700 hover:bg-gray-100 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
              >
                <Download className="w-6 h-6 mr-3" />
                <span>Mehr zur App erfahren</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* QR Code Modal */}
      {showQRModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="relative bg-gradient-to-br from-white via-gray-50 to-white rounded-3xl p-8 max-w-lg w-full shadow-2xl border border-gray-100 transform transition-all duration-500 scale-100 hover:scale-105">
            {/* Animated background gradient */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary-500/5 via-transparent to-secondary-500/5"></div>
            
            {/* Close button */}
            <button
              onClick={() => setShowQRModal(false)}
              className="absolute top-4 right-4 w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors duration-200"
            >
              <span className="text-gray-600 text-xl">&times;</span>
            </button>
            
            <div className="relative text-center">
              {/* Header with icon */}
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl mx-auto mb-4 flex items-center justify-center shadow-lg">
                  <Smartphone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-2">
                  App downloaden
                </h3>
                <p className="text-gray-600 text-lg">Scannen Sie den QR-Code mit Ihrem Smartphone</p>
              </div>
              
              {/* QR Code with enhanced styling */}
              <div className="relative mb-8">
                <div className="bg-white p-8 rounded-2xl shadow-inner border-2 border-gray-100 mx-auto inline-block">
                  {/* Decorative corners */}
                  <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-primary-500 rounded-tl-lg"></div>
                  <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-primary-500 rounded-tr-lg"></div>
                  <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-primary-500 rounded-bl-lg"></div>
                  <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-primary-500 rounded-br-lg"></div>
                  
                  <img 
                    src={generateQRCodeDataURL(websiteURL)}
                    alt="QR Code für App Download"
                    className="w-52 h-52 mx-auto"
                  />
                </div>
                
                {/* QR Code glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-secondary-500/20 rounded-2xl blur-xl -z-10 animate-pulse"></div>
              </div>
              
              <p className="text-gray-500 mb-8 text-base">
                Der QR-Code führt Sie zur Download-Seite für <strong className="text-gray-700">iOS</strong> und <strong className="text-gray-700">Android</strong>
              </p>
              
              {/* Enhanced download buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <a
                  href={appStoreURL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-gradient-to-r from-gray-900 to-black hover:from-black hover:to-gray-900 text-white px-6 py-4 rounded-2xl transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  <Apple className="w-6 h-6 mr-3" />
                  <div className="text-left">
                    <div className="text-xs text-gray-300">Download im</div>
                    <div className="text-sm font-bold">App Store</div>
                  </div>
                </a>
                <a
                  href={playStoreURL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-6 py-4 rounded-2xl transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  <Android className="w-6 h-6 mr-3" />
                  <div className="text-left">
                    <div className="text-xs text-gray-100">Jetzt bei</div>
                    <div className="text-sm font-bold">Google Play</div>
                  </div>
                </a>
              </div>
              
              {/* Bottom info with sparkles */}
              <div className="flex items-center justify-center text-sm text-gray-500">
                <Sparkles className="w-4 h-4 mr-2 text-yellow-400" />
                <span>Kostenlos für iOS & Android</span>
                <Sparkles className="w-4 h-4 ml-2 text-yellow-400" />
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

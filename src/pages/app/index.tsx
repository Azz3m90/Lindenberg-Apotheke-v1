import { NextSeo } from "next-seo";
import Layout from "../../components/Layout";
import Link from "next/link";
import {
  Smartphone,
  Download,
  QrCode,
  CheckCircle,
  Star,
  Clock,
  Camera,
  MapPin,
  Bell,
  Search,
  ShoppingCart,
  Phone,
  ScanLine,
  AlertTriangle,
  Heart,
  Globe,
  Shield,
  TestTube,
  FileText,
  CreditCard,
  Mic,
  Compass,
  Book,
  Zap,
  Sparkles,
  ArrowRight,
  Play,
  Users,
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

const appFeatures = [
  {
    icon: Camera,
    title: "Rezept-Foto Service",
    description: "Ärztliche Rezepte können unmittelbar nach dem Arztbesuch einfach gescannt und direkt per E-Mail an unsere Apotheke zur Bereitstellung gesandt werden. Sicherer Upload mit Bestätigung.",
    highlight: true,
  },
  {
    icon: MapPin,
    title: "Notdienst-Finder",
    description: "Die nächste Notdienstapotheke mit Lageplan und Weganzeige finden. Immer aktuell und mit direkter Navigation zu Ihrer Notapotheke.",
    highlight: true,
  },
  {
    icon: ScanLine,
    title: "Barcode-Scanner",
    description: "Leicht verständliche Beipackzettel mit Einnahmehinweisen und Gegenanzeigen zu mehr als 45.000 Fertigarzneimitteln über Barcode Scanner abrufen.",
  },
  {
    icon: Heart,
    title: "Persönliche Medikamentenliste",
    description: "Eine persönliche Medikamentenliste erstellen und verwalten - auch via Barcode-Scanner. Behalten Sie alle Ihre Medikamente im Überblick.",
  },
  {
    icon: AlertTriangle,
    title: "Wechselwirkungsprüfung",
    description: "Der Wechselwirkungscheck zeigt auf einen Blick, ob es zwischen verschiedenen Arzneimitteln zu unerwünschten Wechselwirkungen kommen kann.",
  },
  {
    icon: Book,
    title: "Heilpflanzen-Lexikon",
    description: "Farbfotos von Arzneipflanzen ansehen und sich ausführlich über die Wirkungsweise informieren. Mit interessanten Hintergrund-Informationen.",
  },
  {
    icon: TestTube,
    title: "Laborwerte-Lexikon",
    description: "Ausführliche Auskunft über alle relevanten Laborwerte von A wie ACTH bis Z wie Zink. Verstehen Sie Ihre Laborergebnisse besser.",
  },
  {
    icon: Globe,
    title: "Mehrsprachige Bedienung",
    description: "Rat & Hilfe-Beiträge in 8 Sprachen: Deutsch, Englisch, Französisch, Italienisch, Spanisch, Polnisch, Türkisch und Russisch.",
  },
  {
    icon: CreditCard,
    title: "Krankenkassen-Daten",
    description: "Hinterlegen Sie Krankenkasse und Nummer. So wird immer das korrekte Rabattarzneimittel für Sie besorgt.",
  },
  {
    icon: Mic,
    title: "Spracheingabe",
    description: "Arzneimittelsuche per Spracheingabe. Die Spracherkennung ist speziell auf Arzneimittelnamen optimiert.",
  },
  {
    icon: Bell,
    title: "Benachrichtigungen",
    description: "Erhalten Sie wichtige Informationen und Erinnerungen direkt auf Ihr Smartphone. Verpassen Sie keine wichtigen Updates.",
  },
  {
    icon: Shield,
    title: "Datenschutz",
    description: "Der Schutz persönlicher Daten ist bei allen Verfahren immer sichergestellt. Ihre Gesundheitsdaten sind bei uns sicher.",
  },
];

const benefits = [
  "Kostenlos für iOS und Android",
  "Direkte Verbindung zur Lindenberg-Apotheke",
  "Sichere Datenübertragung mit Verschlüsselung",
  "Über 45.000 Arzneimittel in der Datenbank",
  "8 verschiedene Sprachen verfügbar",
  "Offline-Funktionen für wichtige Informationen",
  "Regelmäßige Updates mit neuen Funktionen",
  "Wissenschaftlich fundierte Gesundheitsinformationen",
];

const languageList = [
  "🇩🇪 Deutsch",
  "🇬🇧 Englisch", 
  "🇫🇷 Französisch",
  "🇮🇹 Italienisch",
  "🇪🇸 Spanisch",
  "🇵🇱 Polnisch",
  "🇹🇷 Türkisch",
  "🇷🇺 Russisch",
];

// QR Code data URL for app download (you can replace this with a real QR code service)
const generateQRCodeDataURL = (url: string) => {
  // This is a placeholder. In a real implementation, you'd use a QR code library
  // For now, we'll use a QR code generation service URL
  return `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(url)}`;
};

export default function AppPage() {
  const [showQRModal, setShowQRModal] = useState(false);
  
  const appStoreURL = "https://apps.apple.com/de/app/gesund-de-e-rezept-apotheke/id1554260352";
  const playStoreURL = "https://play.google.com/store/search?q=gesund.de+app&c=apps&utm_source=emea_Med";
  const websiteURL = "https://www.gesund.de/apotheke/lindenberg-apotheke-98693-ilmenau";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MobileApplication",
    name: "Gesund.de - Lindenberg-Apotheke",
    description: "Die innovative Apotheken-App für iPhone und Android bietet direkten Kontakt zur Lindenberg-Apotheke mit Rezept-Service, Notdienst-Finder und umfassender Arzneimittel-Datenbank.",
    applicationCategory: "HealthApplication",
    operatingSystem: ["iOS", "Android"],
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "EUR",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      ratingCount: "2450",
    },
    author: {
      "@type": "Organization",
      name: "Wort & Bild Verlag",
    },
    publisher: {
      "@type": "Organization",
      name: "Lindenberg-Apotheke Ilmenau",
    },
  };

  return (
    <Layout>
      <NextSeo
        title="Apotheken-App | Lindenberg-Apotheke Ilmenau"
        description="Die innovative Apotheken-App 'gesund.de - E-Rezept, Apotheke' für iPhone und Android. Rezept-Service, Notdienst-Finder, Arzneimittel-Datenbank und mehr. Kostenlos downloaden!"
        canonical="https://www.lindenberg-apotheke.de/app/"
        openGraph={{
          title: "Apotheken-App | Lindenberg-Apotheke Ilmenau",
          description:
            "Kostenlose Apotheken-App • Rezept-Foto Service • Notdienst-Finder • 45.000+ Arzneimittel • 8 Sprachen • Für iOS & Android",
          url: "https://www.lindenberg-apotheke.de/app/",
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-primary-900 to-primary-800 text-white overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
          <div className="absolute top-40 right-20 w-96 h-96 bg-gradient-to-br from-secondary-500 to-yellow-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
          <div className="absolute -bottom-32 left-1/2 transform -translate-x-1/2 w-80 h-80 bg-gradient-to-br from-yellow-400 to-primary-500 rounded-full mix-blend-multiply filter blur-xl opacity-25 animate-pulse delay-2000"></div>
        </div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='grid' width='100' height='100' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 100 0 L 0 0 0 100' fill='none' stroke='white' stroke-width='1'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23grid)' /%3E%3C/svg%3E")`,
          }}></div>
        </div>

        <div className="relative container-custom py-20 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-10">
              {/* Badge */}
              <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm rounded-full border border-white/10">
                <Sparkles className="w-5 h-5 mr-3 text-yellow-300" />
                <span className="font-semibold text-lg">Lindenberg-Apotheke - Ihre Stamm-Apotheke</span>
              </div>

              {/* Headline */}
              <div className="space-y-6">
                <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                  Die innovative
                  <br />
                  <span className="bg-gradient-to-r from-yellow-300 via-yellow-200 to-yellow-300 bg-clip-text text-transparent animate-pulse">
                    Apotheken-App
                  </span>
                </h1>
                <p className="text-xl lg:text-2xl text-white/80 leading-relaxed">
                  Des <span className="font-semibold text-white">Wort & Bild Verlages</span> für <strong className="text-yellow-300">iPhone® und Android™</strong> bietet 
                  unseren Patienten einen bequemen, zeitsparenden und kostenlosen Service 
                  sowie den direkten Kontakt zur Lindenberg-Apotheke.
                </p>
              </div>

              {/* Instructions Card */}
              <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-secondary-500/10 rounded-2xl"></div>
                <div className="relative">
                  <div className="flex items-center mb-4">
                    <div className="w-8 h-8 bg-gradient-to-br from-yellow-300 to-yellow-400 rounded-full flex items-center justify-center mr-4">
                      <ArrowRight className="w-4 h-4 text-black font-bold" />
                    </div>
                    <h3 className="text-xl font-bold text-yellow-300">Nach dem Download:</h3>
                  </div>
                  <p className="text-white/90 text-lg leading-relaxed">
                    Wählen Sie die <strong className="text-white">Lindenberg-Apotheke</strong> als Ihre Wunschapotheke aus. 
                    Sie wird als Stamm-Apotheke definiert und bietet dann eine Fülle an 
                    praxisnahen Funktionen und Serviceleistungen.
                  </p>
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-7 h-7 fill-yellow-400 text-yellow-400 drop-shadow-sm"
                    />
                  ))}
                </div>
                <div className="text-white">
                  <div className="text-3xl font-bold">4.8<span className="text-xl">/5</span></div>
                  {/* <div className="text-sm text-white/70">(2.450+ Bewertungen)</div> */}
                </div>
              </div>

              {/* Download Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={appStoreURL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-black hover:bg-gray-800 text-white px-8 py-4 rounded-2xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center shadow-xl hover:shadow-2xl"
                >
                  <Apple className="w-8 h-8 mr-4" />
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
                  <Android className="w-8 h-8 mr-4" />
                  <div className="text-left">
                    <div className="text-sm text-gray-300">Jetzt bei</div>
                    <div className="text-lg font-bold">Google Play</div>
                  </div>
                </a>
              </div>
            </div>

            {/* Right Content - Phone Mockup */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative">
                {/* Glowing backdrop */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-400 to-secondary-400 rounded-[3rem] blur-3xl opacity-30 scale-110"></div>
                
                {/* Phone mockup */}
                <div className="relative w-80 bg-gradient-to-br from-gray-900 to-black rounded-[3rem] p-3 shadow-2xl">
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

                {/* Floating QR Code */}
                <div className="absolute -bottom-12 -right-12 bg-white p-4 rounded-2xl shadow-2xl border-4 border-white transform rotate-3 hover:rotate-0 transition-transform duration-300">
                  <button 
                    onClick={() => setShowQRModal(true)}
                    className="group text-center"
                  >
                    <div className="w-20 h-20 bg-gray-50 rounded-xl flex items-center justify-center mb-2 overflow-hidden group-hover:scale-105 transition-transform">
                      <img 
                        src={generateQRCodeDataURL(websiteURL)}
                        alt="QR Code zum App Download"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="text-xs text-gray-700 font-bold group-hover:text-primary-600 transition-colors">
                      QR-Code scannen
                    </div>
                    <div className="text-xs text-gray-500">zum Download</div>
                  </button>
                </div>


              </div>
            </div>
          </div>
        </div>

        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg className="w-full h-20 text-white" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" fill="currentColor"></path>
            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" fill="currentColor"></path>
            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" fill="currentColor"></path>
          </svg>
        </div>
      </section>

      {/* QR Code Modal */}
      {showQRModal && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
          onClick={() => setShowQRModal(false)}
        >
          <div 
            className="bg-white rounded-2xl p-8 max-w-md w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">App downloaden</h3>
              <p className="text-gray-600 mb-6">Scannen Sie den QR-Code mit Ihrem Smartphone:</p>
              
              <div className="bg-gray-50 p-6 rounded-xl mb-6">
                <img 
                  src={generateQRCodeDataURL(websiteURL)}
                  alt="QR Code für App Download"
                  className="w-48 h-48 mx-auto"
                />
              </div>
              
              <p className="text-sm text-gray-500 mb-6">
                Der QR-Code führt Sie zur Download-Seite für iOS und Android
              </p>
              
              <div className="flex flex-col gap-3">
                <a
                  href={appStoreURL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn bg-primary-600 hover:bg-primary-700 text-white flex items-center justify-center"
                >
                  <Apple className="w-5 h-5 mr-2" />
                  App Store
                </a>
                <a
                  href={playStoreURL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn bg-primary-600 hover:bg-primary-700 text-white flex items-center justify-center"
                >
                  <Android className="w-5 h-5 mr-2" />
                  Google Play
                </a>
              </div>
              
              <button 
                onClick={() => setShowQRModal(false)}
                className="mt-4 text-gray-500 hover:text-gray-700 text-sm"
              >
                Schließen
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Features Section */}
      <section className="py-24 lg:py-32 bg-gradient-to-br from-gray-50 to-blue-50/30">
        <div className="container-custom">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-primary-100 rounded-full text-primary-700 font-semibold mb-6">
              <Sparkles className="w-4 h-4 mr-2" />
              Alle Funktionen im Überblick
            </div>
            <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Eine App, <span className="text-transparent bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text">unendliche</span> Möglichkeiten
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Die App bietet eine Fülle an praxisnahen Funktionen und Serviceleistungen 
              für eine optimale Betreuung durch Ihre Stamm-Apotheke.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {appFeatures.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div
                  key={index}
                  className={`group relative p-8 rounded-3xl transition-all duration-500 hover:scale-105 ${
                    feature.highlight
                      ? "bg-gradient-to-br from-primary-500 to-secondary-500 text-white shadow-2xl shadow-primary-500/25"
                      : "bg-white border-2 border-gray-100 hover:border-primary-200 hover:shadow-xl hover:shadow-primary-100/50"
                  }`}
                >
                  {feature.highlight && (
                    <div className="absolute -top-3 -right-3 bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                      ⭐ Highlight
                    </div>
                  )}

                  <div
                    className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 ${
                      feature.highlight
                        ? "bg-white/20 backdrop-blur-sm text-white"
                        : "bg-gradient-to-br from-primary-100 to-secondary-100 text-primary-600 group-hover:from-primary-500 group-hover:to-secondary-500 group-hover:text-white"
                    }`}
                  >
                    <IconComponent className="w-8 h-8" />
                  </div>

                  <h3 className={`text-xl font-bold mb-3 ${
                    feature.highlight ? "text-white" : "text-gray-900"
                  }`}>
                    {feature.title}
                  </h3>
                  <p className={`text-sm leading-relaxed ${
                    feature.highlight ? "text-white/90" : "text-gray-600"
                  }`}>
                    {feature.description}
                  </p>

                  {!feature.highlight && (
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary-500/5 to-secondary-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Languages Section */}
      <section className="py-24 lg:py-32 bg-gradient-to-br from-primary-600 via-secondary-600 to-primary-700 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-yellow-300/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative container-custom">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 mb-8">
              <Globe className="w-5 h-5 mr-3" />
              <span className="font-semibold text-lg">Mehrsprachig verfügbar</span>
            </div>
            <h2 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              In <span className="text-yellow-300">8 Sprachen</span> verfügbar
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Gesundheitsinformationen und Rat & Hilfe-Beiträge stehen in verschiedenen 
              Sprachen zur Verfügung – für bessere Verständlichkeit und Zugänglichkeit.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {languageList.map((language, index) => (
              <div key={index} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-white/10 rounded-2xl blur-sm group-hover:blur-none transition-all duration-300"></div>
                <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20 hover:bg-white/20 hover:border-white/40 transition-all duration-300 group-hover:scale-105">
                  <div className="text-4xl mb-3">{language.split(' ')[0]}</div>
                  <div className="font-semibold text-lg text-white">{language.split(' ')[1]}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              <CheckCircle className="w-5 h-5 mr-2 text-green-300" />
              <span className="text-white/90">Alle Funktionen in allen Sprachen verfügbar</span>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-100 to-emerald-100 rounded-full text-green-700 font-semibold mb-6">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  Warum die App nutzen?
                </div>
                <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                  Die App ist
                  <br />
                  <span className="text-transparent bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text">kostenlos</span>
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Die App bietet direkten Zugang zu allen Services der Lindenberg-Apotheke. 
                  Sparen Sie Zeit und haben Sie Ihre Gesundheit jederzeit im Blick.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="group flex items-center space-x-4 p-4 rounded-xl hover:bg-gray-50 transition-colors duration-300">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-lg text-gray-800 font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              {/* Background decorations */}
              <div className="absolute -inset-4 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-3xl blur-xl opacity-50"></div>
              <div className="absolute -inset-2 bg-gradient-to-br from-primary-200 to-secondary-200 rounded-2xl blur-lg opacity-30"></div>
              
              <div className="relative bg-gradient-to-br from-white to-gray-50 rounded-3xl p-10 shadow-2xl border border-gray-100">
                <div className="text-center space-y-8">
                  <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl shadow-xl">
                    <Download className="w-12 h-12 text-white" />
                  </div>
                  
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-3">
                      Jetzt kostenlos downloaden
                    </h3>
                    <p className="text-gray-600 text-lg">
                      Suchen Sie nach der <strong className="text-primary-600">"gesund.de - E-Rezept, Apotheke"</strong> in Ihrem App Store
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                    <a
                      href={appStoreURL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group w-full bg-black hover:bg-gray-800 text-white px-8 py-4 rounded-2xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center shadow-xl hover:shadow-2xl"
                    >
                      <Apple className="w-6 h-6 mr-4" />
                      <div className="text-left">
                        <div className="text-sm text-gray-300">Download für</div>
                        <div className="text-lg font-bold">iPhone</div>
                      </div>
                    </a>
                    <a
                      href={playStoreURL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group w-full bg-black hover:bg-gray-800 text-white px-8 py-4 rounded-2xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center shadow-xl hover:shadow-2xl"
                    >
                      <Android className="w-6 h-6 mr-4" />
                      <div className="text-left">
                        <div className="text-sm text-gray-300">Download für</div>
                        <div className="text-lg font-bold">Android</div>
                      </div>
                    </a>
                  </div>
                  
                  <div className="pt-6 border-t border-gray-200">
                    <button 
                      onClick={() => setShowQRModal(true)}
                      className="group flex items-center justify-center mx-auto text-primary-600 hover:text-primary-700 font-semibold text-lg transition-colors duration-300"
                    >
                      <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center mr-3 group-hover:bg-primary-200 transition-colors duration-300">
                        <QrCode className="w-5 h-5" />
                      </div>
                      <span>QR-Code anzeigen</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          {/* <div className="mt-24 text-center">
            <div className="inline-flex items-center space-x-6 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-full px-8 py-4 text-white shadow-2xl">
              <div className="flex items-center space-x-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-6 h-6 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <div className="text-xl font-bold">4.8/5</div>
              <div className="text-white/90">von +20k Nutzern empfohlen</div>
            </div>
          </div> */}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ihre Gesundheit in besten Händen
          </h2>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto mb-8">
            Nutzen Sie die Vorteile der digitalen Apotheke und bleiben Sie in direktem 
            Kontakt mit der Lindenberg-Apotheke Ilmenau. Kostenlos, sicher und jederzeit verfügbar.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/kontakt"
              className="btn bg-white text-primary-600 hover:bg-gray-100 border-0 px-8 py-3 text-lg font-semibold rounded-xl"
            >
              <Phone className="w-5 h-5 mr-2" />
              Kontakt aufnehmen
            </Link>
            <Link
              href="/notdienst"
              className="btn bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary-600 px-8 py-3 text-lg font-semibold rounded-xl"
            >
              <Compass className="w-5 h-5 mr-2" />
              Notdienst finden
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
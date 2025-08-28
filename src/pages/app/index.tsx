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
  return `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(url)}`;
};

export default function AppPage() {
  const [showQRModal, setShowQRModal] = useState(false);
  
  const appStoreURL = "https://apps.apple.com/de/app/gesund-de-e-rezept-apotheke/id1554260352";
  const playStoreURL = "https://play.google.com/store/search?q=gesund.de+app&c=apps&utm_source=emea_Med";
  const websiteURL = "https://www.gesund.de/apotheke/lindenberg-apotheke-98693-ilmenau";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MobileApplication",
    name: "Apotheke vor Ort - Lindenberg-Apotheke",
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
        description="Die innovative Apotheken-App 'Apotheke vor Ort' für iPhone und Android. Rezept-Service, Notdienst-Finder, Arzneimittel-Datenbank und mehr. Kostenlos downloaden!"
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
      <section className="bg-gradient-to-br from-primary-600 via-primary-700 to-secondary-600 text-white py-16 lg:py-24 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        <div className="relative container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <div className="inline-flex items-center px-4 py-2 bg-white bg-opacity-20 rounded-full text-sm font-semibold mb-6">
                  <Smartphone className="w-4 h-4 mr-2" />
                  Apotheke vor Ort - Ihre Stamm-Apotheke
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
                  Die innovative
                  <br />
                  <span className="text-yellow-300">Apotheken-App</span>
                </h1>
                <p className="text-xl text-primary-100 leading-relaxed">
                  Des Wort & Bild Verlages für <strong>iPhone® und Android™</strong> bietet 
                  unseren Patienten einen bequemen, zeitsparenden und kostenlosen Service 
                  sowie den direkten Kontakt zur Lindenberg-Apotheke.
                </p>
              </div>

              <div className="bg-white bg-opacity-10 rounded-xl p-6">
                <h3 className="text-lg font-semibold mb-4 text-yellow-300">Nach dem Download:</h3>
                <p className="text-primary-100">
                  Wählen Sie die <strong>Lindenberg-Apotheke</strong> als Ihre Wunschapotheke aus. 
                  Sie wird als Stamm-Apotheke definiert und bietet dann eine Fülle an 
                  praxisnahen Funktionen und Serviceleistungen.
                </p>
              </div>

              <div className="flex items-center space-x-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <div className="text-primary-100">
                  <span className="font-bold">4.8/5</span>
                  <span className="text-sm ml-1">(2.450+ Bewertungen)</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={appStoreURL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn bg-black hover:bg-gray-800 text-white border-0 flex items-center justify-center text-lg px-6 py-3 rounded-xl transition-all duration-300"
                >
                  <Apple className="w-6 h-6 mr-3" />
                  <div className="text-left">
                    <div className="text-xs">Download im</div>
                    <div className="font-semibold">App Store</div>
                  </div>
                </a>
                <a
                  href={playStoreURL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn bg-black hover:bg-gray-800 text-white border-0 flex items-center justify-center text-lg px-6 py-3 rounded-xl transition-all duration-300"
                >
                  <Android className="w-6 h-6 mr-3" />
                  <div className="text-left">
                    <div className="text-xs">Jetzt bei</div>
                    <div className="font-semibold">Google Play</div>
                  </div>
                </a>
              </div>
            </div>

            <div className="relative flex justify-center">
              <div className="w-64 bg-gray-900 rounded-3xl p-2 shadow-2xl">
                <div className="bg-white rounded-2xl overflow-hidden">
                  <img
                    src="/app-screenshot.svg"
                    alt="Lindenberg-Apotheke App Screenshot"
                    className="w-full h-auto"
                    width={240}
                    height={520}
                  />
                </div>
              </div>

              {/* QR Code */}
              <div className="absolute -bottom-8 -right-8 bg-white p-4 rounded-xl shadow-xl border-4 border-white">
                <div className="text-center">
                  <button 
                    onClick={() => setShowQRModal(true)}
                    className="group transition-all duration-300 hover:scale-105"
                  >
                    <div className="w-24 h-24 bg-white rounded-lg flex items-center justify-center mb-2 overflow-hidden">
                      <img 
                        src={generateQRCodeDataURL(websiteURL)}
                        alt="QR Code zum App Download"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="text-xs text-gray-600 font-medium group-hover:text-primary-600">
                      QR-Code scannen
                    </div>
                    <div className="text-xs text-gray-500">zum Download</div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QR Code Modal */}
      {showQRModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full">
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
      <section className="py-16 lg:py-24">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">
              Alle <span className="text-primary-600">Funktionen</span> im Überblick
            </h2>
            <p className="text-lead max-w-3xl mx-auto">
              Die App bietet eine Fülle an praxisnahen Funktionen und Serviceleistungen 
              für eine optimale Betreuung durch Ihre Stamm-Apotheke.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {appFeatures.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div
                  key={index}
                  className={`p-6 rounded-xl border group hover:shadow-lg transition-all duration-300 ${
                    feature.highlight
                      ? "bg-primary-50 border-primary-200 hover:bg-primary-100"
                      : "bg-white border-gray-200 hover:border-primary-200"
                  }`}
                >
                  {feature.highlight && (
                    <div className="inline-flex items-center px-2 py-1 bg-primary-600 text-white text-xs font-semibold rounded-full mb-3">
                      <Zap className="w-3 h-3 mr-1" />
                      Highlight
                    </div>
                  )}

                  <div
                    className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${
                      feature.highlight
                        ? "bg-primary-600 text-white"
                        : "bg-primary-100 text-primary-600 group-hover:bg-primary-600 group-hover:text-white"
                    } transition-colors duration-300`}
                  >
                    <IconComponent className="w-6 h-6" />
                  </div>

                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Languages Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">
              In <span className="text-primary-600">8 Sprachen</span> verfügbar
            </h2>
            <p className="text-lead max-w-3xl mx-auto">
              Gesundheitsinformationen und Rat & Hilfe-Beiträge stehen in verschiedenen 
              Sprachen zur Verfügung – für bessere Verständlichkeit und Zugänglichkeit.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {languageList.map((language, index) => (
              <div key={index} className="bg-white rounded-xl p-4 text-center shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="text-2xl mb-2">{language.split(' ')[0]}</div>
                <div className="font-medium text-gray-700">{language.split(' ')[1]}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 lg:py-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-lg mb-6">
                Warum die <span className="text-primary-600">App nutzen</span>?
              </h2>
              <p className="text-lead mb-8">
                Die App ist kostenlos und bietet direkten Zugang zu allen Services 
                der Lindenberg-Apotheke. Sparen Sie Zeit und haben Sie Ihre Gesundheit 
                jederzeit im Blick.
              </p>

              <div className="grid grid-cols-1 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-6 h-6 rounded-full bg-primary-600 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl p-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Download className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Jetzt kostenlos downloaden
                </h3>
                <p className="text-gray-600 mb-6">
                  Suchen Sie nach der <strong>"Apotheke vor Ort"</strong> in Ihrem App Store
                </p>
                
                <div className="space-y-3">
                  <a
                    href={appStoreURL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full btn bg-black hover:bg-gray-800 text-white border-0 flex items-center justify-center py-3 rounded-xl"
                  >
                    <Apple className="w-5 h-5 mr-2" />
                    <span>Download für iPhone</span>
                  </a>
                  <a
                    href={playStoreURL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full btn bg-black hover:bg-gray-800 text-white border-0 flex items-center justify-center py-3 rounded-xl"
                  >
                    <Android className="w-5 h-5 mr-2" />
                    <span>Download für Android</span>
                  </a>
                </div>
                
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <button 
                    onClick={() => setShowQRModal(true)}
                    className="flex items-center justify-center mx-auto text-primary-600 hover:text-primary-700 font-medium"
                  >
                    <QrCode className="w-5 h-5 mr-2" />
                    <span>QR-Code anzeigen</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
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
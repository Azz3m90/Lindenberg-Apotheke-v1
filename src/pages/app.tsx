import { NextSeo } from "next-seo";
import Layout from "../components/Layout";
import Link from "next/link";
import {
  Smartphone,
  Download,
  QrCode,
  CheckCircle,
  Apple,
  Android,
  Star,
  Clock,
  Camera,
  MapPin,
  Bell,
  Search,
  ShoppingCart,
  Phone,
  Scan,
  AlertTriangle,
  Heart,
} from "lucide-react";

const appFeatures = [
  {
    icon: Camera,
    title: "Rezept-Foto Service",
    description:
      "Fotografieren Sie Ihr Rezept und bestellen Sie Medikamente bequem vor – wir bereiten alles für Sie vor.",
    highlight: true,
  },
  {
    icon: MapPin,
    title: "Notdienst-Finder",
    description:
      "Finden Sie die nächste Notdienst-Apotheke in Ihrer Umgebung mit Wegbeschreibung und Kontaktdaten.",
    highlight: true,
  },
  {
    icon: Scan,
    title: "Barcode-Scanner",
    description:
      "Scannen Sie Medikamente und erhalten Sie detaillierte Informationen und verständliche Beipackzettel.",
  },
  {
    icon: AlertTriangle,
    title: "Wechselwirkungsprüfung",
    description:
      "Prüfen Sie automatisch Wechselwirkungen zwischen verschiedenen Medikamenten.",
  },
  {
    icon: Heart,
    title: "Medikamentenliste",
    description:
      "Verwalten Sie Ihre persönliche Medikamentenliste und behalten Sie den Überblick.",
  },
  {
    icon: Bell,
    title: "Erinnerungen",
    description:
      "Lassen Sie sich an Einnahmezeiten und Nachbestellungen erinnern.",
  },
  {
    icon: Search,
    title: "Heilpflanzenlexikon",
    description:
      "Umfassendes Lexikon mit Farbfotos und Wirkungsweise von Heilpflanzen.",
  },
  {
    icon: ShoppingCart,
    title: "Bestellservice",
    description:
      "Bestellen Sie rezeptfreie Medikamente und Gesundheitsprodukte direkt über die App.",
  },
];

const screenshots = [
  {
    src: "/app-screenshot-home.jpg",
    alt: "App Startseite mit Hauptfunktionen",
    title: "Startseite",
  },
  {
    src: "/app-screenshot-scan.jpg",
    alt: "Rezept-Scan Funktion",
    title: "Rezept scannen",
  },
  {
    src: "/app-screenshot-notdienst.jpg",
    alt: "Notdienst-Finder mit Karte",
    title: "Notdienst-Finder",
  },
  {
    src: "/app-screenshot-medlist.jpg",
    alt: "Persönliche Medikamentenliste",
    title: "Meine Medikamente",
  },
];

const benefits = [
  "Kostenlos für iOS und Android",
  "Regelmäßige Updates mit neuen Funktionen",
  "Sichere Datenübertragung",
  "Offline-Funktionen verfügbar",
  "Mehrsprachige Bedienung (8 Sprachen)",
  "Benutzerfreundliche Oberfläche",
  "Integration mit Ihrer Stammapotheke",
  "Wissenschaftlich fundierte Informationen",
];

export default function App() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MobileApplication",
    name: "Apotheke vor Ort - Lindenberg-Apotheke",
    description:
      "Die offizielle App der Lindenberg-Apotheke Ilmenau. Rezepte per Foto vorbestellen, Notdienste finden, Medikamente verwalten und mehr.",
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
        title="Unsere Apotheken-App"
        description="Laden Sie die kostenlose Apotheke vor Ort App herunter: Rezepte per Foto vorbestellen, Notdienste finden, Medikamente verwalten. Für iOS und Android verfügbar."
        canonical="https://www.lindenberg-apotheke.de/app/"
        openGraph={{
          title: "Unsere Apotheken-App | Lindenberg-Apotheke Ilmenau",
          description:
            "Kostenlose App • Rezepte per Foto vorbestellen • Notdienst-Finder • Medikamentenliste • Wechselwirkungsprüfung • Für iOS & Android",
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
                  Unsere App
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
                  Ihre Apotheke
                  <br />
                  <span className="text-yellow-300">immer dabei</span>
                </h1>
                <p className="text-xl text-primary-100 leading-relaxed">
                  Mit der kostenlosen "Apotheke vor Ort" App haben Sie alle
                  Services der Lindenberg-Apotheke jederzeit griffbereit.
                  Einfach, sicher und praktisch.
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
                  href="https://apps.apple.com/de/app/apotheke-vor-ort/id123456789"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn bg-black hover:bg-gray-800 text-white border-0 flex items-center justify-center text-lg px-6 py-3"
                >
                  <Apple className="w-6 h-6 mr-3" />
                  <div className="text-left">
                    <div className="text-xs">Download im</div>
                    <div className="font-semibold">App Store</div>
                  </div>
                </a>
                <a
                  href="https://play.google.com/store/apps/details?id=com.apotheke.vor.ort"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn bg-black hover:bg-gray-800 text-white border-0 flex items-center justify-center text-lg px-6 py-3"
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
                    src="/app-screenshot.jpg"
                    alt="Lindenberg-Apotheke App Screenshot"
                    className="w-full h-auto"
                    width={240}
                    height={520}
                  />
                </div>
              </div>

              {/* QR Code */}
              <div className="absolute -bottom-8 -right-8 bg-white p-4 rounded-xl shadow-xl">
                <div className="text-center">
                  <div className="w-24 h-24 bg-gray-100 rounded-lg flex items-center justify-center mb-2">
                    <QrCode className="w-12 h-12 text-gray-400" />
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
      </section>

      {/* Features Section */}
      <section className="py-16 lg:py-24">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">
              Alle <span className="text-primary-600">Funktionen</span> im
              Überblick
            </h2>
            <p className="text-lead max-w-3xl mx-auto">
              Von der Rezept-Vorbestellung bis zum Notdienst-Finder – entdecken
              Sie alle praktischen Features unserer App.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                      Highlights
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

      {/* Screenshots Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">
              App <span className="text-primary-600">Screenshots</span>
            </h2>
            <p className="text-lead max-w-3xl mx-auto">
              Schauen Sie sich die benutzerfreundliche Oberfläche und die
              wichtigsten Funktionen unserer App an.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {screenshots.map((screenshot, index) => (
              <div key={index} className="text-center">
                <div className="bg-gray-900 rounded-3xl p-3 shadow-xl mx-auto w-fit">
                  <div className="bg-white rounded-2xl overflow-hidden">
                    <img
                      src={screenshot.src}
                      alt={screenshot.alt}
                      className="w-48 h-auto mx-auto"
                      width={192}
                      height={416}
                    />
                  </div>
                </div>
                <h3 className="font-semibold text-gray-900 mt-4 mb-2">
                  {screenshot.title}
                </h3>
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
                Sparen Sie Zeit, bleiben Sie informiert und haben Sie Ihre
                Gesundheit jederzeit im Blick mit unserer modernen
                Apotheken-App.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-5 h-5 mr-3 text-secondary-500 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                So einfach geht's
              </h3>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      App downloaden
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Kostenlos im App Store oder Google Play Store
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      Lindenberg-Apotheke wählen
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Suchen Sie "Lindenberg-Apotheke Ilmenau"
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      Services nutzen
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Rezepte scannen, Notdienste finden und mehr
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200 text-center">
                <p className="text-sm text-gray-600 mb-4">
                  Haben Sie Fragen zur App?
                </p>
                <a href="tel:+493677888888" className="btn btn-primary">
                  <Phone className="w-4 h-4 mr-2" />
                  Wir helfen: 03677 888888
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Download CTA */}
      <section className="py-16 bg-gradient-to-r from-secondary-600 to-primary-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Laden Sie die App jetzt kostenlos herunter
          </h2>
          <p className="text-xl text-secondary-100 mb-8 max-w-3xl mx-auto">
            Über 10.000 zufriedene Nutzer vertrauen bereits auf unsere App.
            Werden Sie Teil der digitalen Apotheken-Community!
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
            <a
              href="https://apps.apple.com/de/app/apotheke-vor-ort/id123456789"
              target="_blank"
              rel="noopener noreferrer"
              className="btn bg-black hover:bg-gray-800 text-white border-0 flex items-center text-lg px-6 py-3"
            >
              <Apple className="w-6 h-6 mr-3" />
              <div className="text-left">
                <div className="text-xs">Download im</div>
                <div className="font-semibold">App Store</div>
              </div>
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.apotheke.vor.ort"
              target="_blank"
              rel="noopener noreferrer"
              className="btn bg-black hover:bg-gray-800 text-white border-0 flex items-center text-lg px-6 py-3"
            >
              <Android className="w-6 h-6 mr-3" />
              <div className="text-left">
                <div className="text-xs">Jetzt bei</div>
                <div className="font-semibold">Google Play</div>
              </div>
            </a>
          </div>

          <div className="text-secondary-200 text-sm">
            ✓ Kostenlos ✓ Ohne Anmeldung nutzbar ✓ Regelmäßige Updates ✓ Sicher
            & datenschutzkonform
          </div>
        </div>
      </section>
    </Layout>
  );
}

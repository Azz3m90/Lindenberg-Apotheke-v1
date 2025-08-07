import { NextSeo } from "next-seo";
import Layout from "../../components/Layout";
import Link from "next/link";
import {
  Activity,
  Heart,
  Plane,
  Baby,
  Shield,
  Clock,
  Thermometer,
  Stethoscope,
  Pill,
  CheckCircle,
  Star,
  ChevronRight,
} from "lucide-react";

const services = [
  {
    icon: Activity,
    title: "Blutdruckmessung",
    description:
      "Professionelle Blutdruckmessung mit modernster geeichter Technik – ohne Wartezeit und mit sofortiger Auswertung.",
    features: [
      "Modernste geeichte Messgeräte",
      "Keine Wartezeiten",
      "Sofortige Auswertung",
      "Beratung zur richtigen Messung",
      "Empfehlung geeigneter Heimgeräte",
    ],
    href: "/leistungen/blutdruckmessung",
    price: "Kostenfrei",
    duration: "5 Minuten",
    popular: true,
  },
  {
    icon: Heart,
    title: "Kompressionsstrümpfe",
    description:
      "Individuelle Anmessung von Kompressionsstrümpfen für optimale Passform und beste therapeutische Wirkung.",
    features: [
      "Individuelle Beinvermessung",
      "Keine Standard-Größen vom Regal",
      "Verschiedene Kompressionsstärken",
      "Beratung zu Pflege und Haltbarkeit",
      "Nachkontrolle und Anpassung",
    ],
    href: "/leistungen/kompressionsstruempfe",
    price: "Nach Verordnung",
    duration: "20-30 Minuten",
    popular: true,
  },
  {
    icon: Plane,
    title: "Reise- und Impfberatung",
    description:
      "Umfassende Beratung für Ihre Reisegesundheit nach den aktuellen STIKO-Empfehlungen.",
    features: [
      "Länderspecifische Beratung",
      "Aktuelle STIKO-Empfehlungen",
      "Impfschutz-Überprüfung",
      "Reiseapotheke-Zusammenstellung",
      "Malariaprophylaxe-Beratung",
    ],
    href: "/leistungen/reiseberatung",
    price: "Kostenlos",
    duration: "15-20 Minuten",
  },
  {
    icon: Thermometer,
    title: "Blutzuckermessung",
    description:
      "Schnelle und zuverlässige Blutzuckermessung mit modernsten Messgeräten.",
    features: [
      "Modernste Blutzuckermessgeräte",
      "Keine Wartezeiten",
      "Sofortiges Ergebnis",
      "Beratung zu Blutzuckerwerten",
      "Geräte-Empfehlungen",
    ],
    href: "/leistungen/blutzuckermessung",
    price: "Kostenfrei",
    duration: "5 Minuten",
  },
  {
    icon: Baby,
    title: "Verleih-Service",
    description:
      "Verleih von Babywaagen, Milchpumpen und anderen medizinischen Hilfsmitteln.",
    features: [
      "Babywaagen (digital)",
      "Elektrische Milchpumpen",
      "Inhalationsgeräte",
      "Blutdruckmessgeräte",
      "Kassenabrechnung möglich",
    ],
    href: "/leistungen/verleih",
    price: "Ab 5€/Woche",
    duration: "Flexible Leihdauer",
  },
  {
    icon: Shield,
    title: "Hausapotheke Check",
    description:
      "Kostenlose Überprüfung Ihrer Hausapotheke auf Vollständigkeit und Haltbarkeit der Medikamente.",
    features: [
      "Vollständigkeits-Überprüfung",
      "Haltbarkeitskontrolle",
      "Lagerungsberatung",
      "Kostenlose Checkliste",
      "Empfehlungen für Ergänzungen",
    ],
    href: "/leistungen/hausapotheke-check",
    price: "Kostenlos",
    duration: "10-15 Minuten",
  },
  {
    icon: Stethoscope,
    title: "Gesundheitschecks",
    description:
      "Verschiedene Gesundheitschecks und Beratungen für Ihr Wohlbefinden.",
    features: [
      "Körperfett- und BMI-Messung",
      "Cholesterin-Schnelltest",
      "Venenfunktionstest",
      "Hauttyp-Bestimmung",
      "Ernährungsberatung",
    ],
    href: "/leistungen/gesundheitschecks",
    price: "Ab 10€",
    duration: "10-20 Minuten",
  },
  {
    icon: Pill,
    title: "Medikationsberatung",
    description:
      "Umfassende Beratung zu Ihren Medikamenten, Wechselwirkungen und Einnahmezeiten.",
    features: [
      "Medikationsplan-Erstellung",
      "Wechselwirkungsprüfung",
      "Einnahmezeiten-Optimierung",
      "Nebenwirkungsberatung",
      "Compliance-Unterstützung",
    ],
    href: "/leistungen/medikationsberatung",
    price: "Kostenfrei",
    duration: "20-30 Minuten",
  },
];

export default function LeistungenIndex() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: "Lindenberg-Apotheke Ilmenau - Gesundheitsservices",
    description:
      "Umfassende Gesundheitsservices: Blutdruckmessung, Kompressionsstrümpfe, Reiseberatung, Verleih-Service und mehr.",
    url: "https://www.lindenberg-apotheke.de/leistungen/",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Gesundheitsservices",
      itemListElement: services.map((service, index) => ({
        "@type": "Offer",
        position: index + 1,
        name: service.title,
        description: service.description,
        price: service.price,
        category: "Gesundheitsservice",
      })),
    },
  };

  return (
    <Layout>
      <NextSeo
        title="Unsere Leistungen"
        description="Professionelle Gesundheitsservices in Ilmenau: Blutdruckmessung ohne Wartezeit, individuelle Kompressionsstrümpfe-Anmessung, Reiseberatung, Verleih-Service und mehr."
        canonical="https://www.lindenberg-apotheke.de/leistungen/"
        openGraph={{
          title: "Unsere Leistungen | Lindenberg-Apotheke Ilmenau",
          description:
            "Blutdruckmessung ohne Wartezeit • Individuelle Kompressionsstrümpfe-Anmessung • Reiseberatung • Verleih-Service • Hausapotheke-Check",
          url: "https://www.lindenberg-apotheke.de/leistungen/",
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-secondary-50 py-16 lg:py-24">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-800 rounded-full text-sm font-semibold mb-6">
              <Star className="w-4 h-4 mr-2" />
              Unsere Leistungen
            </div>
            <h1 className="heading-xl mb-6">
              Modernste{" "}
              <span className="text-primary-600">Gesundheitsservices</span>
              <br />
              für Ihr Wohlbefinden
            </h1>
            <p className="text-lead mb-8">
              Von der klassischen Arzneimittelberatung bis hin zu modernen
              Gesundheitschecks – wir bieten Ihnen umfassende Services mit
              persönlicher Note und ohne Wartezeiten.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+493677888888" className="btn btn-primary text-lg">
                <Clock className="w-5 h-5 mr-2" />
                Jetzt anrufen
              </a>
              <Link href="/termin" className="btn btn-secondary text-lg">
                Termin vereinbaren
                <ChevronRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 lg:py-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={index} className="service-card group relative">
                  {service.popular && (
                    <div className="absolute -top-3 -right-3 bg-secondary-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      Beliebt
                    </div>
                  )}

                  <div className="flex items-start mb-6">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4 group-hover:bg-primary-600 group-hover:text-white transition-all duration-300 flex-shrink-0">
                      <IconComponent className="w-6 h-6 text-primary-600 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-xl font-semibold text-gray-900 group-hover:text-primary-600 transition-colors duration-300 mb-2">
                        {service.title}
                      </h3>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-3">
                        <span className="inline-flex items-center">
                          <Clock className="w-3 h-3 mr-1" />
                          {service.duration}
                        </span>
                        <span className="font-medium text-secondary-600">
                          {service.price}
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {service.description}
                  </p>

                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center text-sm text-gray-600"
                      >
                        <CheckCircle className="w-4 h-4 mr-3 text-secondary-500 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={service.href}
                    className="inline-flex items-center text-primary-600 hover:text-primary-700 font-semibold group-hover:translate-x-1 transition-all duration-200"
                  >
                    Mehr erfahren
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Haben Sie Fragen zu unseren Leistungen?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
            Unser erfahrenes Team berät Sie gerne persönlich. Rufen Sie uns an
            oder vereinbaren Sie einen Termin für eine ausführliche Beratung.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+493677888888"
              className="btn bg-white text-primary-700 hover:bg-gray-100 text-lg"
            >
              <Clock className="w-5 h-5 mr-2" />
              Jetzt anrufen: 03677 888888
            </a>
            <Link href="/kontakt" className="btn btn-secondary text-lg">
              Nachricht schreiben
              <ChevronRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}

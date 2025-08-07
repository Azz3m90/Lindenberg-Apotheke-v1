import Link from "next/link";
import {
  Activity,
  Heart,
  Plane,
  Baby,
  Shield,
  Clock,
  ChevronRight,
  Star,
} from "lucide-react";

const services = [
  {
    icon: Activity,
    title: "Blutdruckmessung",
    description:
      "Professionelle Messung mit modernster geeichter Technik – ohne Wartezeit!",
    features: ["Keine Wartezeiten", "Geeichte Geräte", "Sofortige Auswertung"],
    href: "/leistungen/blutdruckmessung",
    popular: true,
  },
  {
    icon: Heart,
    title: "Kompressionsstrümpfe",
    description:
      "Individuelle Anmessung statt Standard-Größen für optimalen Tragekomfort.",
    features: [
      "Individuelle Anmessung",
      "Verschiedene Kompressionsstärken",
      "Beratung inklusive",
    ],
    href: "/leistungen/kompressionsstruempfe",
    popular: true,
  },
  {
    icon: Plane,
    title: "Reiseberatung",
    description:
      "Umfassende Beratung für Ihre Reisegesundheit nach den neuesten STIKO-Richtlinien.",
    features: [
      "STIKO-konforme Beratung",
      "Alle Reiseländer",
      "Impfempfehlungen",
    ],
    href: "/leistungen/reiseberatung",
  },
  {
    icon: Baby,
    title: "Verleih-Service",
    description: "Babywaagen und Milchpumpen für die Zeit nach der Geburt.",
    features: ["Babywaagen", "Milchpumpen", "Kassenabrechnung möglich"],
    href: "/leistungen/verleih",
  },
  {
    icon: Shield,
    title: "Hausapotheke Check",
    description:
      "Kostenlose Überprüfung Ihrer Hausapotheke auf Vollständigkeit und Haltbarkeit.",
    features: [
      "Vollständigkeits-Check",
      "Haltbarkeitsprüfung",
      "Beratung inklusive",
    ],
    href: "/leistungen/hausapotheke-check",
  },
  {
    icon: Clock,
    title: "Weitere Services",
    description:
      "Blutzuckermessung, Kundenkarte, Verbandskasten-Checks und vieles mehr.",
    features: ["Blutzuckermessung", "Kundenkarte", "Verbandskasten-Check"],
    href: "/leistungen",
  },
];

export default function QuickServices() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-800 rounded-full text-sm font-semibold mb-4">
            <Star className="w-4 h-4 mr-2" />
            Unsere Leistungen
          </div>
          <h2 className="heading-lg mb-4">
            Modernste Gesundheitsservices
            <br />
            <span className="text-primary-600">ohne Wartezeiten</span>
          </h2>
          <p className="text-lead max-w-3xl mx-auto">
            Von der klassischen Arzneimittelberatung bis hin zu modernen
            Gesundheitschecks – wir bieten Ihnen umfassende Services mit
            persönlicher Note.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div key={index} className="service-card group relative">
                {service.popular && (
                  <div className="absolute -top-3 -right-3 bg-secondary-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    Beliebt
                  </div>
                )}

                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4 group-hover:bg-primary-600 group-hover:text-white transition-all duration-300">
                    <IconComponent className="w-6 h-6 text-primary-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 group-hover:text-primary-600 transition-colors duration-300">
                    {service.title}
                  </h3>
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
                      <div className="w-1.5 h-1.5 bg-secondary-500 rounded-full mr-3" />
                      {feature}
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

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-8 inline-block">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Haben Sie Fragen zu unseren Leistungen?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl">
              Unser erfahrenes Team berät Sie gerne persönlich zu allen
              Gesundheitsthemen. Rufen Sie uns an oder vereinbaren Sie einen
              Termin.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+493677888888" className="btn btn-primary">
                <Clock className="w-4 h-4 mr-2" />
                Jetzt anrufen
              </a>
              <Link href="/leistungen" className="btn btn-secondary">
                Alle Leistungen ansehen
                <ChevronRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

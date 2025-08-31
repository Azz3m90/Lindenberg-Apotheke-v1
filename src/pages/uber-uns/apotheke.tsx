import { NextSeo } from "next-seo";
import Layout from "../../components/Layout";
import Link from "next/link";
import {
  Award,
  Users,
  MapPin,
  Zap,
  Calendar,
  Shield,
  Heart,
  Building,
  Microscope,
  Truck,
  Clock,
  Phone,
  ChevronRight,
} from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Modernste Rohrpost-Technik",
    description:
      "Pneumatisches Rohrsystem befördert Medikamente aus dem Lager direkt in die Offizin für schnelle Abwicklung.",
  },
  {
    icon: Microscope,
    title: "Professionelles Labor",
    description:
      "Eigenes Labor mit modernster Ausstattung für Qualitätsprüfungen und individuelle Rezepturen.",
  },
  {
    icon: Building,
    title: "Ideale Lage im Ärztehaus",
    description:
      "Direkt vor den Ilm-Kreis-Kliniken gelegen für optimale Versorgung der Patienten.",
  },
  {
    icon: Users,
    title: "Erfahrenes Team",
    description:
      "Qualifizierte Apotheker und PTA mit langjähriger Erfahrung und regelmäßigen Fortbildungen.",
  },
];

const services = [
  "Individuelle Kompressionsstrumpf-Anmessung",
  "Blutdruck- und Blutzuckermessung",
  "Reise- und Impfberatung",
  "Verleih von Babywaagen und Milchpumpen",
  "Hausapotheken- und Verbandskästen-Checks",
  "Kostenlose Unterstützung für Selbsthilfegruppen",
  "Medikamenten-App für iPhone und Android",
  "Kundenkarten-System mit Vorteilen",
];

const timeline = [
  {
    year: "1995",
    title: "Gründung der Lindenberg-Apotheke",
    description:
      "Dr. H. Danz erhält seine Approbation und gründet die Apotheke",
  },
  {
    year: "1998",
    title: "Umzug ins Ärztehaus",
    description: "Neuer Standort im Ärztehaus vor den Ilm-Kreis-Kliniken",
  },
  {
    year: "2005",
    title: "Moderne Laborausstattung",
    description: "Installation modernster Labor- und Prüftechnik",
  },
  {
    year: "2010",
    title: "Pneumatisches Rohrsystem",
    description: "Einbau der innovativen Rohrpost-Technik",
  },
  {
    year: "2018",
    title: "Digitale Services",
    description: "Launch der Medikamenten-App und Online-Services",
  },
  {
    year: "2024",
    title: "Website-Modernisierung",
    description: "Neue responsive Website mit erweiterten Funktionen",
  },
];

export default function UeberUnsApotheke() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    mainEntity: {
      "@type": "Pharmacy",
      name: "Lindenberg-Apotheke Ilmenau",
      description:
        "Moderne Apotheke im Ärztehaus Ilmenau mit über 30 Jahren Erfahrung, modernster Technik und persönlicher Betreuung.",
      foundingDate: "1995",
      founder: {
        "@type": "Person",
        name: "Dr. H. Danz",
        jobTitle: "Apotheker",
      },
      address: {
        "@type": "PostalAddress",
        streetAddress: "Krankenhausstr. 26",
        addressLocality: "Ilmenau",
        postalCode: "98693",
        addressCountry: "DE",
      },
      telephone: "+49-3677-888888",
      email: "apo@lindenberg-apotheke.de",
    },
  };

  return (
    <Layout>
      <NextSeo
        title="Unsere Apotheke"
        description="Lernen Sie die Lindenberg-Apotheke Ilmenau kennen: Über 30 Jahre Erfahrung, modernste Technik im Ärztehaus, pneumatisches Rohrsystem und persönliche Betreuung durch Dr. H. Danz."
        canonical="https://www.lindenberg-apotheke.de/uber-uns/apotheke/"
        openGraph={{
          title: "Unsere Apotheke | Lindenberg-Apotheke Ilmenau",
          description:
            "Über 30 Jahre Erfahrung • Modernste Rohrpost-Technik • Eigenes Labor • Ideale Lage im Ärztehaus • Persönliche Betreuung",
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-secondary-50 py-16 lg:py-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <div className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-800 rounded-full text-sm font-semibold mb-6">
                  <Award className="w-4 h-4 mr-2" />
                  Über uns
                </div>
                <h1 className="heading-xl mb-6">
                  Ihre <span className="text-primary-600">vertrauensvolle</span>
                  <br />
                  Lindenberg-Apotheke
                </h1>
                <p className="text-lead">
                  Seit über 30 Jahren verbinden wir traditionelle Apothekenkunst
                  mit modernster Technik und persönlicher Betreuung im Herzen
                  von Ilmenau.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600 mb-1">
                    30+
                  </div>
                  <div className="text-sm text-gray-600">Jahre Erfahrung</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-secondary-600 mb-1">
                    8
                  </div>
                  <div className="text-sm text-gray-600">Hauptservices</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600 mb-1">
                    1995
                  </div>
                  <div className="text-sm text-gray-600">Gegründet</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-secondary-600 mb-1">
                    100%
                  </div>
                  <div className="text-sm text-gray-600">
                    Kundenzufriedenheit
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="/about-pharmacy-exterior.jpg"
                alt="Lindenberg-Apotheke im Ärztehaus Ilmenau"
                className="w-full h-auto rounded-2xl shadow-2xl"
                width={600}
                height={400}
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-xl border border-gray-100">
                <div className="flex items-center space-x-3">
                  <Award className="w-8 h-8 text-yellow-500" />
                  <div>
                    <div className="font-semibold text-gray-900">
                      Zertifiziert
                    </div>
                    <div className="text-sm text-gray-600">
                      Qualitätsstandards
                    </div>
                  </div>
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
              Was uns <span className="text-primary-600">besonders</span> macht
            </h2>
            <p className="text-lead max-w-3xl mx-auto">
              Modernste Technik, persönliche Betreuung und eine ideale Lage –
              entdecken Sie die Besonderheiten unserer Apotheke.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-600 group-hover:text-white transition-all duration-300">
                    <IconComponent className="w-8 h-8 text-primary-600 group-hover:text-white transition-colors duration-300" />
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

          {/* Image Gallery */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-4">
              <img
                src="/about-interior-dispensing.jpg"
                alt="Moderne Offizin der Lindenberg-Apotheke"
                className="w-full h-48 object-cover rounded-lg shadow-md"
                width={400}
                height={192}
              />
              <div className="text-center">
                <h4 className="font-semibold text-gray-900">Die Offizin</h4>
                <p className="text-sm text-gray-600">
                  Moderne Beratungs- und Ausgabebereich
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <img
                src="/about-pneumatic-system.jpg"
                alt="Modernste Rohrpost-Technik"
                className="w-full h-48 object-cover rounded-lg shadow-md"
                width={400}
                height={192}
              />
              <div className="text-center">
                <h4 className="font-semibold text-gray-900">Rohrpost-System</h4>
                <p className="text-sm text-gray-600">
                  Schnelle Medikamentenbeförderung
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <img
                src="/about-laboratory.jpg"
                alt="Professionelles Labor"
                className="w-full h-48 object-cover rounded-lg shadow-md"
                width={400}
                height={192}
              />
              <div className="text-center">
                <h4 className="font-semibold text-gray-900">Das Labor</h4>
                <p className="text-sm text-gray-600">
                  Qualitätskontrolle und Rezepturen
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-lg mb-6">
                Unsere <span className="text-primary-600">Kernservices</span>
              </h2>
              <p className="text-lead mb-8">
                Weit mehr als eine klassische Apotheke – wir bieten Ihnen
                umfassende Gesundheitsservices mit modernster Ausstattung.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {services.map((service, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-secondary-500 rounded-full mr-3 flex-shrink-0" />
                    <span className="text-sm text-gray-700">{service}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <Link href="/leistungen" className="btn btn-primary">
                  Alle Leistungen ansehen
                  <ChevronRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                <Shield className="w-6 h-6 mr-3 text-primary-500" />
                Qualität & Sicherheit
              </h3>

              <div className="space-y-4">
                <div className="flex items-start">
                  <Award className="w-5 h-5 mr-3 text-secondary-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-medium text-gray-900">
                      Zertifizierte Qualität
                    </div>
                    <div className="text-sm text-gray-600">
                      Regelmäßige Qualitätskontrollen und Zertifizierungen
                    </div>
                  </div>
                </div>

                <div className="flex items-start">
                  <Users className="w-5 h-5 mr-3 text-secondary-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-medium text-gray-900">
                      Fortgebildetes Team
                    </div>
                    <div className="text-sm text-gray-600">
                      Kontinuierliche Schulungen und Weiterbildungen
                    </div>
                  </div>
                </div>

                <div className="flex items-start">
                  <Heart className="w-5 h-5 mr-3 text-secondary-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-medium text-gray-900">
                      Persönliche Betreuung
                    </div>
                    <div className="text-sm text-gray-600">
                      Individuelle Beratung und Kundenbetreuung
                    </div>
                  </div>
                </div>

                <div className="flex items-start">
                  <Truck className="w-5 h-5 mr-3 text-secondary-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-medium text-gray-900">
                      Schnelle Lieferung
                    </div>
                    <div className="text-sm text-gray-600">
                      Direkter Zugang durch das Rohrpost-System
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 lg:py-24">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">
              Unsere <span className="text-primary-600">Geschichte</span>
            </h2>
            <p className="text-lead max-w-3xl mx-auto">
              Von der Gründung 1995 bis heute – ein Überblick über wichtige
              Meilensteine in der Entwicklung unserer Apotheke.
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-0.5 w-0.5 h-full bg-gradient-to-b from-primary-500 to-secondary-500"></div>

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div
                  key={index}
                  className={`flex items-center ${
                    index % 2 === 0 ? "" : "flex-row-reverse"
                  }`}
                >
                  <div
                    className={`w-1/2 ${
                      index % 2 === 0 ? "pr-8" : "pl-8 text-left"
                    }`}
                  >
                    <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                      <div className="text-2xl font-bold text-primary-600 mb-2">
                        {item.year}
                      </div>
                      <h3 className="text-medium lg:text-lg font-semibold text-gray-900 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Timeline Dot */}
                  <div className="w-4 h-4 bg-primary-600 rounded-full border-4 border-white shadow-lg relative z-10"></div>

                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Lernen Sie uns persönlich kennen
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
            Besuchen Sie uns in der Krankenhausstraße 26 im Ärztehaus oder rufen
            Sie uns für eine persönliche Beratung an. Wir freuen uns auf Sie!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+493677888888"
              className="btn bg-white text-primary-700 hover:bg-gray-100 text-lg"
            >
              <Phone className="w-5 h-5 mr-2" />
              Jetzt anrufen: 03677 888888
            </a>
            <Link
              href="/uber-uns/anfahrt"
              className="btn btn-secondary text-lg"
            >
              <MapPin className="w-5 h-5 mr-2" />
              Anfahrt & Parken
            </Link>
          </div>

          <div className="mt-8 pt-8 border-t border-primary-400">
            <div className="flex items-center justify-center text-primary-200 text-sm">
              <Clock className="w-4 h-4 mr-2" />
              <span>
                Mo-Fr: 7-18 Uhr | Sa: 9-12 Uhr | Kostenlose Parkplätze vor der
                Tür
              </span>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

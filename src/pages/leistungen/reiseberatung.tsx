import { NextSeo } from "next-seo";
import Layout from "../../components/Layout";
import Link from "next/link";
import {
  Plane,
  Clock,
  CheckCircle,
  Shield,
  MapPin,
  Syringe,
  Phone,
  Calendar,
  AlertTriangle,
  Star,
  Globe,
  Heart,
  Thermometer,
  Package,
} from "lucide-react";

const benefits = [
  {
    icon: Globe,
    title: "Länderspecifische Beratung",
    description:
      "Aktuelle Informationen zu Gesundheitsrisiken und Impfempfehlungen für Ihr Reiseziel",
  },
  {
    icon: Syringe,
    title: "STIKO-Empfehlungen",
    description:
      "Beratung nach den neuesten Empfehlungen der Ständigen Impfkommission",
  },
  {
    icon: Shield,
    title: "Impfschutz-Check",
    description:
      "Überprüfung Ihres aktuellen Impfstatus und Empfehlungen für Auffrischungen",
  },
  {
    icon: Package,
    title: "Reiseapotheke",
    description:
      "Individuelle Zusammenstellung Ihrer persönlichen Reiseapotheke",
  },
];

const destinations = [
  {
    region: "Südostasien",
    countries: "Thailand, Vietnam, Kambodscha, Laos",
    risks: [
      "Malaria",
      "Dengue-Fieber",
      "Hepatitis A/B",
      "Japanische Enzephalitis",
    ],
    vaccines: ["Hepatitis A", "Typhus", "Japanische Enzephalitis"],
    color: "green",
  },
  {
    region: "Afrika",
    countries: "Kenia, Tansania, Südafrika, Ghana",
    risks: ["Malaria", "Gelbfieber", "Hepatitis A/B", "Meningokokken"],
    vaccines: ["Gelbfieber", "Hepatitis A", "Meningokokken", "Typhus"],
    color: "orange",
  },
  {
    region: "Südamerika",
    countries: "Brasilien, Peru, Kolumbien, Ecuador",
    risks: ["Gelbfieber", "Malaria", "Zika-Virus", "Hepatitis A"],
    vaccines: ["Gelbfieber", "Hepatitis A", "Typhus"],
    color: "red",
  },
  {
    region: "Südasien",
    countries: "Indien, Nepal, Sri Lanka, Bangladesh",
    risks: ["Malaria", "Dengue-Fieber", "Hepatitis A/E", "Typhus"],
    vaccines: ["Hepatitis A", "Typhus", "Japanische Enzephalitis"],
    color: "blue",
  },
];

const reiseapothekeBasics = [
  "Schmerz- und Fiebermittel (Paracetamol, Ibuprofen)",
  "Durchfallmittel (Loperamid, Elektrolyte)",
  "Desinfektionsmittel und Wundversorgung",
  "Sonnenschutz (LSF 30+) und After-Sun",
  "Insektenschutz (DEET-haltig für Tropen)",
  "Persönliche Medikamente (ausreichend Vorrat)",
  "Fieberthermometer",
  "Verbandsmaterial und Pflaster",
];

const preparationSteps = [
  {
    step: "1",
    title: "Beratungstermin",
    description: "6-8 Wochen vor Abreise für rechtzeitige Impfungen",
    icon: Calendar,
  },
  {
    step: "2",
    title: "Impfcheck",
    description: "Überprüfung Ihres Impfpasses und Auffrischungen",
    icon: Syringe,
  },
  {
    step: "3",
    title: "Malariaprophylaxe",
    description: "Beratung und Medikamente bei Bedarf",
    icon: Shield,
  },
  {
    step: "4",
    title: "Reiseapotheke",
    description: "Individuelle Zusammenstellung für Ihr Reiseziel",
    icon: Package,
  },
];

const importantTips = [
  "Beginnen Sie 6-8 Wochen vor Abreise mit der Reiseplanung",
  "Informieren Sie sich über aktuelle Gesundheitswarnungen",
  "Schließen Sie eine Auslandskrankenversicherung ab",
  "Dokumentieren Sie Ihre Impfungen im Impfpass",
  "Nehmen Sie ausreichend persönliche Medikamente mit",
  "Beachten Sie Zeitverschiebung bei Medikamenteneinnahme",
  "Trinken Sie nur abgefülltes oder abgekochtes Wasser",
  "Vermeiden Sie rohe Speisen in Risikogebieten",
];

export default function Reiseberatung() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    name: "Reise- und Impfberatung",
    description:
      "Umfassende reisemedizinische Beratung nach STIKO-Empfehlungen, Impfschutz-Check und individuelle Reiseapotheken-Zusammenstellung in der Lindenberg-Apotheke Ilmenau.",
    provider: {
      "@type": "Pharmacy",
      name: "Lindenberg-Apotheke Ilmenau",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Krankenhausstr. 26",
        addressLocality: "Ilmenau",
        postalCode: "98693",
        addressCountry: "DE",
      },
      telephone: "+49-3677-888888",
    },
    procedureType: "Consultation and Prevention",
    preparationRequired:
      "Impfpass mitbringen, Reiseziel und -dauer bekannt geben",
    expectedDuration: "PT20M",
  };

  return (
    <Layout>
      <NextSeo
        title="Reise- und Impfberatung nach STIKO-Empfehlungen"
        description="Professionelle Reiseberatung in Ilmenau: Länderspecifische Impfempfehlungen, Malariaprophylaxe, Reiseapotheke. Kostenlose Beratung nach aktuellen STIKO-Empfehlungen."
        canonical="https://www.lindenberg-apotheke.de/leistungen/reiseberatung/"
        openGraph={{
          title: "Reise- und Impfberatung | Lindenberg-Apotheke Ilmenau",
          description:
            "STIKO-Empfehlungen • Länderspecifische Beratung • Malariaprophylaxe • Reiseapotheke • Impfschutz-Check",
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
                  <Plane className="w-4 h-4 mr-2" />
                  Reisemedizin
                </div>
                <h1 className="heading-xl mb-6">
                  <span className="text-primary-600">
                    Reise- und Impfberatung
                  </span>
                  <br />
                  nach STIKO-Standards
                </h1>
                <p className="text-lead">
                  Umfassende reisemedizinische Beratung für Ihre sichere Reise.
                  Impfempfehlungen, Malariaprophylaxe und individuelle
                  Reiseapotheke.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-4">
                  Ihre Vorteile:
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 mr-3 text-secondary-500" />
                    <span className="text-sm">STIKO-Empfehlungen</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 mr-3 text-secondary-500" />
                    <span className="text-sm">Länderspecifisch</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 mr-3 text-secondary-500" />
                    <span className="text-sm">Kostenlose Beratung</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 mr-3 text-secondary-500" />
                    <span className="text-sm">Individuelle Reiseapotheke</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a href="tel:+493677888888" className="btn btn-primary">
                  <Phone className="w-5 h-5 mr-2" />
                  Termin vereinbaren
                </a>
                <Link href="/kontakt" className="btn btn-secondary">
                  <Calendar className="w-5 h-5 mr-2" />
                  Frage stellen
                </Link>
              </div>
            </div>

            <div className="relative">
              <img
                src="/services-travel-consultation.jpg"
                alt="Reise- und Impfberatung in der Lindenberg-Apotheke"
                className="w-full h-auto rounded-2xl shadow-2xl"
                width={600}
                height={400}
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl border border-gray-100">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-600 mb-1">
                    20 Min
                  </div>
                  <div className="text-sm text-gray-600">
                    Kostenlose Beratung
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 lg:py-24">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">
              Warum{" "}
              <span className="text-primary-600">
                professionelle Reiseberatung
              </span>
              ?
            </h2>
            <p className="text-lead max-w-3xl mx-auto">
              Jedes Reiseziel hat spezifische Gesundheitsrisiken. Unsere
              Beratung nach aktuellen STIKO-Empfehlungen schützt Sie optimal vor
              Reisekrankheiten.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-primary-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Destinations & Risks */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-lg mb-4">
              <span className="text-primary-600">Reiseziele</span> und
              Gesundheitsrisiken
            </h2>
            <p className="text-lead max-w-3xl mx-auto">
              Verschiedene Regionen bringen unterschiedliche Gesundheitsrisiken
              mit sich. Hier finden Sie eine Übersicht der wichtigsten
              Risikogebiete.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {destinations.map((destination, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex items-center mb-4">
                  <div
                    className={`w-4 h-4 rounded-full mr-3 ${
                      destination.color === "green"
                        ? "bg-green-500"
                        : destination.color === "blue"
                        ? "bg-blue-500"
                        : destination.color === "orange"
                        ? "bg-orange-500"
                        : "bg-red-500"
                    }`}
                  />
                  <h3 className="text-xl font-semibold text-gray-900">
                    {destination.region}
                  </h3>
                </div>

                <p className="text-gray-600 mb-4">{destination.countries}</p>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Hauptrisiken:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {destination.risks.map((risk, riskIndex) => (
                        <span
                          key={riskIndex}
                          className="px-2 py-1 bg-red-100 text-red-800 text-xs rounded-full"
                        >
                          {risk}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Empfohlene Impfungen:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {destination.vaccines.map((vaccine, vaccineIndex) => (
                        <span
                          key={vaccineIndex}
                          className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full"
                        >
                          {vaccine}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-blue-50 rounded-xl p-6 border border-blue-200">
            <div className="flex items-start">
              <AlertTriangle className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-blue-900 mb-2">
                  Wichtiger Hinweis
                </h3>
                <p className="text-sm text-blue-800">
                  Diese Übersicht ist nicht vollständig. Die Risikoeinschätzung
                  kann sich ändern. Lassen Sie sich individuell für Ihr
                  spezifisches Reiseziel beraten.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Preparation Timeline */}
      <section className="py-16 lg:py-24">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">
              So bereiten Sie sich{" "}
              <span className="text-primary-600">optimal</span> vor
            </h2>
            <p className="text-lead max-w-3xl mx-auto">
              Die richtige Vorbereitung beginnt 6-8 Wochen vor der Abreise,
              damit alle Impfungen rechtzeitig wirken können.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {preparationSteps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-secondary-600" />
                  </div>
                  <div className="mb-3">
                    <span className="text-2xl font-bold text-secondary-600">
                      {step.step}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Travel Pharmacy */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="heading-lg mb-6">
                Die perfekte{" "}
                <span className="text-primary-600">Reiseapotheke</span>
              </h2>
              <p className="text-lead mb-8">
                Eine gut ausgestattete Reiseapotheke ist Ihr Schutz vor kleinen
                und größeren gesundheitlichen Problemen unterwegs.
              </p>

              <div className="space-y-4">
                {reiseapothekeBasics.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-6 h-6 bg-secondary-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                      <CheckCircle className="w-4 h-4 text-secondary-600" />
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Package className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Service-Tipp
                </h3>
              </div>

              <div className="space-y-4 text-sm text-gray-600">
                <p>
                  <strong>Individuelle Zusammenstellung:</strong> Wir stellen
                  Ihre Reiseapotheke passend zu Ihrem Reiseziel und Ihren
                  Bedürfnissen zusammen.
                </p>
                <p>
                  <strong>Praktische Verpackung:</strong> Alle wichtigen
                  Medikamente übersichtlich und platzsparend verpackt.
                </p>
                <p>
                  <strong>Anwendungshinweise:</strong> Detaillierte Anleitung
                  für jedes Medikament mit Dosierungen und Anwendungsfällen.
                </p>
                <p>
                  <strong>Notfall-Liste:</strong> Wichtige Telefonnummern und
                  Adressen für medizinische Hilfe im Reiseland.
                </p>
              </div>

              <div className="mt-6 p-4 bg-green-50 rounded-lg">
                <p className="text-sm text-green-800">
                  <strong>Kostenlos:</strong> Die Beratung zur Reiseapotheke ist
                  bei uns immer kostenlos – auch wenn Sie die Medikamente
                  woanders kaufen.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="py-16 lg:py-24">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-lg mb-4">
              <span className="text-primary-600">Wichtige Tipps</span> für Ihre
              Reise
            </h2>
            <p className="text-lead max-w-3xl mx-auto">
              Diese Grundregeln helfen Ihnen, gesund und sicher zu reisen.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {importantTips.map((tip, index) => (
              <div
                key={index}
                className="flex items-start bg-white p-4 rounded-lg shadow-sm"
              >
                <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                  <CheckCircle className="w-4 h-4 text-primary-600" />
                </div>
                <span className="text-gray-700">{tip}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Planen Sie eine Reise?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
            Lassen Sie sich 6-8 Wochen vor Ihrer Abreise kostenlos beraten. So
            haben Sie genügend Zeit für alle notwendigen Impfungen und
            Vorbereitungen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+493677888888"
              className="btn bg-white text-primary-700 hover:bg-gray-100 text-lg"
            >
              <Phone className="w-5 h-5 mr-2" />
              Beratungstermin: 03677 888888
            </a>
            <Link href="/kontakt" className="btn btn-secondary text-lg">
              <Calendar className="w-5 h-5 mr-2" />
              Nachricht schreiben
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}

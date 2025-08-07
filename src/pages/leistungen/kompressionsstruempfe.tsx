import { NextSeo } from "next-seo";
import Layout from "../../components/Layout";
import Link from "next/link";
import {
  Heart,
  Clock,
  CheckCircle,
  Ruler,
  Shield,
  Users,
  Phone,
  Calendar,
  AlertCircle,
  Star,
  Zap,
  Activity,
  Target,
} from "lucide-react";

const benefits = [
  {
    icon: Ruler,
    title: "Individuelle Anmessung",
    description:
      "Professionelle Vermessung Ihrer Beine für perfekte Passform und optimale Wirkung",
  },
  {
    icon: Shield,
    title: "Medizinische Qualität",
    description:
      "Nur hochwertige Kompressionsstrümpfe nach medizinischen Standards",
  },
  {
    icon: Target,
    title: "Verschiedene Stärken",
    description:
      "Kompressionsklassen I-IV je nach ärztlicher Verordnung und Bedarf",
  },
  {
    icon: Users,
    title: "Fachberatung inklusive",
    description:
      "Ausführliche Beratung zu Anwendung, Pflege und korrektem Anziehen",
  },
];

const compressionLevels = [
  {
    class: "Klasse I",
    pressure: "18-21 mmHg",
    indication: "Leichte Venenbeschwerden",
    description: "Müde, schwere Beine, leichte Schwellungen",
    color: "green",
  },
  {
    class: "Klasse II",
    pressure: "23-32 mmHg",
    indication: "Ausgeprägte Venenleiden",
    description: "Krampfadern, nach Venenentzündung, Schwangerschaft",
    color: "blue",
  },
  {
    class: "Klasse III",
    pressure: "34-46 mmHg",
    indication: "Schwere Venenleiden",
    description: "Chronische Veneninsuffizienz, Lymphödem",
    color: "orange",
  },
  {
    class: "Klasse IV",
    pressure: "≥ 49 mmHg",
    indication: "Schwerste Formen",
    description: "Lymphödem, Elephantiasis",
    color: "red",
  },
];

const fittingSteps = [
  {
    step: "1",
    title: "Beratungsgespräch",
    description:
      "Ausführliche Beratung zu Ihren Beschwerden und der ärztlichen Verordnung",
  },
  {
    step: "2",
    title: "Professionelle Vermessung",
    description:
      "Präzise Vermessung Ihrer Beine an verschiedenen Stellen für optimale Passform",
  },
  {
    step: "3",
    title: "Auswahl & Bestellung",
    description:
      "Auswahl des geeigneten Modells und Bestellung in Ihrer individuellen Größe",
  },
  {
    step: "4",
    title: "Anpassung & Beratung",
    description:
      "Finale Anpassung und ausführliche Anleitung zum richtigen Anziehen",
  },
];

const careInstructions = [
  "Täglich bei 30-40°C waschen",
  "Nur mildes Waschmittel verwenden",
  "Nicht schleudern oder wriken",
  "Liegend trocknen, nicht in die Sonne",
  "Keine Weichspüler oder Bleichmittel",
  "Bei Beschädigungen sofort ersetzen",
  "Zweites Paar für Wechsel empfehlenswert",
  "Nach 6 Monaten Tragdauer erneuern",
];

export default function Kompressionsstruempfe() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    name: "Individuelle Kompressionsstrümpfe-Anmessung",
    description:
      "Professionelle Anmessung von Kompressionsstrümpfen für optimale Passform und beste therapeutische Wirkung in der Lindenberg-Apotheke Ilmenau.",
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
    procedureType: "Fitting and Consultation",
    bodyLocation: "Legs",
    preparationRequired: "Ärztliche Verordnung mitbringen",
    expectedDuration: "PT30M",
  };

  return (
    <Layout>
      <NextSeo
        title="Kompressionsstrümpfe individuell anmessen lassen"
        description="Professionelle Anmessung von Kompressionsstrümpfen in Ilmenau. Individuelle Vermessung, keine Standard-Größen, optimale Passform für beste therapeutische Wirkung."
        canonical="https://www.lindenberg-apotheke.de/leistungen/kompressionsstruempfe/"
        openGraph={{
          title:
            "Kompressionsstrümpfe individuell anmessen | Lindenberg-Apotheke Ilmenau",
          description:
            "Individuelle Anmessung • Medizinische Qualität • Verschiedene Kompressionsklassen • Fachberatung inklusive",
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
                  <Heart className="w-4 h-4 mr-2" />
                  Kompressionstherapie
                </div>
                <h1 className="heading-xl mb-6">
                  <span className="text-primary-600">Kompressionsstrümpfe</span>
                  <br />
                  individuell anmessen
                </h1>
                <p className="text-lead">
                  Professionelle Anmessung von Kompressionsstrümpfen für
                  optimale Passform und beste therapeutische Wirkung – keine
                  Standard-Größen vom Regal.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-4">
                  Ihre Vorteile:
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 mr-3 text-secondary-500" />
                    <span className="text-sm">Individuelle Vermessung</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 mr-3 text-secondary-500" />
                    <span className="text-sm">Medizinische Qualität</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 mr-3 text-secondary-500" />
                    <span className="text-sm">Fachberatung inklusive</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 mr-3 text-secondary-500" />
                    <span className="text-sm">Kassenabrechnung</span>
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
                src="/services-compression-stockings.jpg"
                alt="Individuelle Kompressionsstrümpfe-Anmessung in der Lindenberg-Apotheke"
                className="w-full h-auto rounded-2xl shadow-2xl"
                width={600}
                height={400}
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl border border-gray-100 max-w-xs">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-600 mb-1">
                    30 Min
                  </div>
                  <div className="text-sm text-gray-600">
                    Beratung & Anmessung
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
              <span className="text-primary-600">individuelle Anmessung</span>?
            </h2>
            <p className="text-lead max-w-3xl mx-auto">
              Kompressionsstrümpfe entfalten ihre volle Wirkung nur bei
              perfekter Passform. Unsere professionelle Anmessung sorgt für
              optimalen Komfort und therapeutischen Erfolg.
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

      {/* Compression Levels Table */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-lg mb-4">
              <span className="text-primary-600">Kompressionsklassen</span> im
              Überblick
            </h2>
            <p className="text-lead max-w-3xl mx-auto">
              Je nach ärztlicher Verordnung und Ihren Beschwerden wählen wir die
              richtige Kompressionsklasse für optimale therapeutische Wirkung.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                      Kompressionsklasse
                    </th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">
                      Druck (mmHg)
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                      Anwendung
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                      Beschreibung
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {compressionLevels.map((level, index) => (
                    <tr
                      key={index}
                      className={`${
                        level.color === "green"
                          ? "bg-green-50"
                          : level.color === "blue"
                          ? "bg-blue-50"
                          : level.color === "orange"
                          ? "bg-orange-50"
                          : "bg-red-50"
                      }`}
                    >
                      <td className="px-6 py-4">
                        <div className="flex items-center">
                          <div
                            className={`w-3 h-3 rounded-full mr-3 ${
                              level.color === "green"
                                ? "bg-green-500"
                                : level.color === "blue"
                                ? "bg-blue-500"
                                : level.color === "orange"
                                ? "bg-orange-500"
                                : "bg-red-500"
                            }`}
                          />
                          <span className="font-medium text-gray-900">
                            {level.class}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-center font-semibold">
                        {level.pressure}
                      </td>
                      <td className="px-6 py-4 font-medium text-gray-900">
                        {level.indication}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        {level.description}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-6 bg-blue-50 rounded-xl p-6 border border-blue-200">
            <div className="flex items-start">
              <AlertCircle className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-blue-900 mb-2">
                  Wichtiger Hinweis
                </h3>
                <p className="text-sm text-blue-800">
                  Die richtige Kompressionsklasse wird von Ihrem Arzt
                  entsprechend Ihrer Diagnose verordnet. Wir beraten Sie gerne
                  zur optimalen Auswahl und Anpassung.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fitting Process */}
      <section className="py-16 lg:py-24">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">
              So läuft die <span className="text-primary-600">Anmessung</span>{" "}
              ab
            </h2>
            <p className="text-lead max-w-3xl mx-auto">
              In vier einfachen Schritten zu Ihren perfekt sitzenden
              Kompressionsstrümpfen.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {fittingSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-secondary-600">
                    {step.step}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Care Instructions */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="heading-lg mb-6">
                <span className="text-primary-600">Pflege & Haltbarkeit</span>
              </h2>
              <p className="text-lead mb-8">
                Mit der richtigen Pflege halten Ihre Kompressionsstrümpfe länger
                und behalten ihre therapeutische Wirkung.
              </p>

              <div className="space-y-4">
                {careInstructions.map((instruction, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-6 h-6 bg-secondary-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                      <CheckCircle className="w-4 h-4 text-secondary-600" />
                    </div>
                    <span className="text-gray-700">{instruction}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Kostenübernahme
                </h3>
              </div>

              <div className="space-y-4 text-sm text-gray-600">
                <p>
                  <strong>Gesetzliche Krankenkassen:</strong> Übernahme bei
                  ärztlicher Verordnung
                </p>
                <p>
                  <strong>Private Krankenversicherung:</strong> In der Regel
                  vollständige Erstattung
                </p>
                <p>
                  <strong>Zuzahlung:</strong> Gesetzliche Zuzahlung von 10%
                  (mind. 5€, max. 10€)
                </p>
                <p>
                  <strong>Folgerezept:</strong> Alle 6 Monate möglich bei
                  weiterhin bestehender Indikation
                </p>
              </div>

              <div className="mt-6 p-4 bg-green-50 rounded-lg">
                <p className="text-sm text-green-800">
                  <strong>Tipp:</strong> Wir rechnen direkt mit Ihrer
                  Krankenkasse ab. Bringen Sie einfach Ihre Gesundheitskarte
                  mit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Vereinbaren Sie einen Termin zur Anmessung
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
            Unsere erfahrenen Fachkräfte nehmen sich gerne Zeit für Ihre
            individuelle Beratung und professionelle Anmessung.
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
              <Calendar className="w-5 h-5 mr-2" />
              Anfahrt & Öffnungszeiten
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}

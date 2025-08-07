import { NextSeo } from "next-seo";
import Layout from "../../components/Layout";
import Link from "next/link";
import {
  Activity,
  Clock,
  CheckCircle,
  Heart,
  TrendingUp,
  Shield,
  Phone,
  Calendar,
  AlertCircle,
  Star,
} from "lucide-react";

const benefits = [
  {
    icon: Clock,
    title: "Keine Wartezeiten",
    description:
      "Sofortige Messung ohne Terminvereinbarung während unserer Öffnungszeiten",
  },
  {
    icon: Shield,
    title: "Geeichte Geräte",
    description:
      "Modernste, medizinisch geeichte Blutdruckmessgeräte für präzise Ergebnisse",
  },
  {
    icon: TrendingUp,
    title: "Sofortige Auswertung",
    description:
      "Direkte Bewertung Ihrer Messwerte mit professioneller Einordnung",
  },
  {
    icon: Heart,
    title: "Fachberatung inklusive",
    description:
      "Umfassende Beratung zu Bluthochdruck, Lifestyle und Medikation",
  },
];

const measurementValues = [
  {
    category: "Optimal",
    systolic: "< 120",
    diastolic: "< 80",
    color: "green",
    description: "Ideale Blutdruckwerte",
  },
  {
    category: "Normal",
    systolic: "120-129",
    diastolic: "80-84",
    color: "green",
    description: "Normale Blutdruckwerte",
  },
  {
    category: "Hoch-Normal",
    systolic: "130-139",
    diastolic: "85-89",
    color: "yellow",
    description: "Grenzwerte - regelmäßige Kontrolle empfohlen",
  },
  {
    category: "Hypertonie Grad 1",
    systolic: "140-159",
    diastolic: "90-99",
    color: "orange",
    description: "Leichter Bluthochdruck",
  },
  {
    category: "Hypertonie Grad 2",
    systolic: "160-179",
    diastolic: "100-109",
    color: "red",
    description: "Mittelschwerer Bluthochdruck",
  },
  {
    category: "Hypertonie Grad 3",
    systolic: "≥ 180",
    diastolic: "≥ 110",
    color: "red",
    description:
      "Schwerer Bluthochdruck - sofortige ärztliche Behandlung nötig",
  },
];

const tips = [
  "Messen Sie regelmäßig zur gleichen Tageszeit",
  "Bleiben Sie vor der Messung 5 Minuten ruhig sitzen",
  "Vermeiden Sie Koffein und Nikotin 30 Min. vor der Messung",
  "Führen Sie ein Blutdruck-Tagebuch",
  "Nehmen Sie Medikamente regelmäßig und wie verordnet",
  "Achten Sie auf salzarme Ernährung",
  "Bewegen Sie sich regelmäßig",
  "Reduzieren Sie Stress in Ihrem Alltag",
];

export default function Blutdruckmessung() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    name: "Professionelle Blutdruckmessung",
    description:
      "Kostenlose Blutdruckmessung mit modernsten geeichten Geräten ohne Wartezeit in der Lindenberg-Apotheke Ilmenau.",
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
    procedureType: "Diagnostic Procedure",
    bodyLocation: "Arm",
    preparationRequired: "Keine spezielle Vorbereitung erforderlich",
    expectedDuration: "PT5M",
  };

  return (
    <Layout>
      <NextSeo
        title="Blutdruckmessung ohne Wartezeit"
        description="Kostenlose Blutdruckmessung in Ilmenau mit modernsten geeichten Geräten. Keine Wartezeit, sofortige Auswertung und professionelle Beratung bei der Lindenberg-Apotheke."
        canonical="https://www.lindenberg-apotheke.de/leistungen/blutdruckmessung/"
        openGraph={{
          title:
            "Blutdruckmessung ohne Wartezeit | Lindenberg-Apotheke Ilmenau",
          description:
            "Kostenlose Blutdruckmessung • Modernste geeichte Geräte • Keine Wartezeit • Sofortige Auswertung • Professionelle Beratung",
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
                  <Activity className="w-4 h-4 mr-2" />
                  Gesundheitsservice
                </div>
                <h1 className="heading-xl mb-6">
                  <span className="text-primary-600">Blutdruckmessung</span>
                  <br />
                  ohne Wartezeit
                </h1>
                <p className="text-lead">
                  Kostenlose Blutdruckmessung mit modernsten geeichten Geräten.
                  Sofortige Auswertung und professionelle Beratung – ohne
                  Terminvereinbarung.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-4">
                  Ihre Vorteile:
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 mr-3 text-secondary-500" />
                    <span className="text-sm">Keine Wartezeiten</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 mr-3 text-secondary-500" />
                    <span className="text-sm">Geeichte Geräte</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 mr-3 text-secondary-500" />
                    <span className="text-sm">Sofortige Auswertung</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 mr-3 text-secondary-500" />
                    <span className="text-sm">Fachberatung</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a href="tel:+493677888888" className="btn btn-primary">
                  <Phone className="w-5 h-5 mr-2" />
                  Jetzt anrufen
                </a>
                <Link href="/kontakt" className="btn btn-secondary">
                  <Calendar className="w-5 h-5 mr-2" />
                  Frage stellen
                </Link>
              </div>
            </div>

            <div className="relative">
              <img
                src="/services-blood-pressure.jpg"
                alt="Professionelle Blutdruckmessung in der Lindenberg-Apotheke"
                className="w-full h-auto rounded-2xl shadow-2xl"
                width={600}
                height={400}
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl border border-gray-100">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-600 mb-1">
                    5 Min
                  </div>
                  <div className="text-sm text-gray-600">Kostenfrei</div>
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
              <span className="text-primary-600">professionelle Messung</span>?
            </h2>
            <p className="text-lead max-w-3xl mx-auto">
              Regelmäßige Blutdruckkontrollen sind wichtig für Ihre Gesundheit.
              Unsere geeichten Geräte liefern präzise Ergebnisse mit sofortiger
              Bewertung.
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

      {/* Blood Pressure Values Table */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-lg mb-4">
              <span className="text-primary-600">Blutdruckwerte</span> richtig
              einordnen
            </h2>
            <p className="text-lead max-w-3xl mx-auto">
              Verstehen Sie Ihre Messwerte und wann weitere ärztliche
              Untersuchungen empfohlen werden.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                      Kategorie
                    </th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">
                      Systolisch (mmHg)
                    </th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">
                      Diastolisch (mmHg)
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                      Bewertung
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {measurementValues.map((value, index) => (
                    <tr
                      key={index}
                      className={
                        value.color === "green"
                          ? "bg-green-50"
                          : value.color === "yellow"
                          ? "bg-yellow-50"
                          : value.color === "orange"
                          ? "bg-orange-50"
                          : "bg-red-50"
                      }
                    >
                      <td className="px-6 py-4">
                        <div className="flex items-center">
                          <div
                            className={`w-3 h-3 rounded-full mr-3 ${
                              value.color === "green"
                                ? "bg-green-500"
                                : value.color === "yellow"
                                ? "bg-yellow-500"
                                : value.color === "orange"
                                ? "bg-orange-500"
                                : "bg-red-500"
                            }`}
                          />
                          <span className="font-medium text-gray-900">
                            {value.category}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-center font-semibold">
                        {value.systolic}
                      </td>
                      <td className="px-6 py-4 text-center font-semibold">
                        {value.diastolic}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        {value.description}
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
                  Diese Werte dienen zur Orientierung. Bei erhöhten Werten oder
                  Unsicherheiten konsultieren Sie bitte Ihren Arzt für eine
                  ausführliche Diagnose.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="py-16 lg:py-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="heading-lg mb-6">
                <span className="text-primary-600">Tipps</span> für gesunde
                Blutdruckwerte
              </h2>
              <p className="text-lead mb-8">
                Mit diesen einfachen Maßnahmen können Sie aktiv zu gesunden
                Blutdruckwerten beitragen.
              </p>

              <div className="space-y-4">
                {tips.map((tip, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-6 h-6 bg-secondary-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                      <CheckCircle className="w-4 h-4 text-secondary-600" />
                    </div>
                    <span className="text-gray-700">{tip}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Wann können Sie messen lassen?
                </h3>
              </div>

              <div className="bg-primary-50 rounded-lg p-4">
                <h3 className="font-semibold text-primary-900 mb-3">
                  Öffnungszeiten
                </h3>
                <div className="text-sm text-primary-800">
                  <div className="font-medium mb-2">
                    Blutdruckmessung möglich:
                  </div>
                  <div>Montag - Freitag: 7:00 - 18:00 Uhr</div>
                  <div>Samstag: 9:00 - 12:00 Uhr</div>
                  <div className="mt-2 text-xs">
                    Keine Terminvereinbarung nötig
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Lassen Sie Ihren Blutdruck professionell messen
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
            Kommen Sie einfach vorbei – keine Terminvereinbarung nötig. Unser
            Team berät Sie gerne zu Ihren Messwerten und gibt Ihnen wertvolle
            Tipps.
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

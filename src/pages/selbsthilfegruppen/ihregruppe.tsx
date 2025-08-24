import { NextSeo } from "next-seo";
import Layout from "../../components/Layout";
import Link from "next/link";
import { Users, FileText, Phone, Mail, CheckCircle, ArrowRight, Calendar, MapPin } from "lucide-react";

export default function IhreGruppe() {
  const steps = [
    {
      number: "1",
      title: "Ideenfindung & Planung",
      description: "Identifizieren Sie das Thema und finden Sie gleichgesinnte Menschen in Ihrer Nähe.",
      icon: <Users className="w-6 h-6" />,
    },
    {
      number: "2", 
      title: "Kontakt zur Selbsthilfekontaktstelle",
      description: "Nehmen Sie Kontakt zu unserer Beratungsstelle auf. Wir unterstützen Sie gerne bei den ersten Schritten.",
      icon: <Phone className="w-6 h-6" />,
    },
    {
      number: "3",
      title: "Erstes Treffen organisieren",
      description: "Planen Sie ein erstes Kennenlernentreffen. Wir helfen bei der Raumsuche und Bewerbung.",
      icon: <Calendar className="w-6 h-6" />,
    },
    {
      number: "4",
      title: "Struktur entwickeln",
      description: "Entwickeln Sie gemeinsam Ziele, Regeln und eine feste Struktur für Ihre Gruppe.",
      icon: <FileText className="w-6 h-6" />,
    },
  ];

  const benefits = [
    "Erfahrungsaustausch mit Menschen in ähnlichen Situationen",
    "Emotionale Unterstützung und Verständnis",
    "Praktische Tipps und Informationen",
    "Gemeinsame Aktivitäten und Unternehmungen",
    "Stärkung des Selbstbewusstseins und der Eigenverantwortung",
    "Kostenlose Teilnahme und niedrigschwellige Hilfe",
  ];

  return (
    <Layout>
      <NextSeo
        title="Ihre eigene Selbsthilfegruppe gründen - Lindenberg-Apotheke Ilmenau"
        description="Schritt-für-Schritt Anleitung zur Gründung einer eigenen Selbsthilfegruppe in Ilmenau. Beratung und Unterstützung durch die Lindenberg-Apotheke."
        canonical="https://lindenberg-apotheke.de/selbsthilfegruppen/ihregruppe"
        openGraph={{
          title: "Ihre eigene Selbsthilfegruppe gründen - Lindenberg-Apotheke Ilmenau",
          description: "Schritt-für-Schritt Anleitung zur Gründung einer eigenen Selbsthilfegruppe in Ilmenau. Beratung und Unterstützung durch die Lindenberg-Apotheke.",
        }}
      />

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="bg-primary-600 text-white py-16">
          <div className="container-custom">
            <div className="max-w-3xl">
              <nav className="flex items-center space-x-2 text-primary-200 mb-6">
                <Link href="/selbsthilfegruppen" className="hover:text-white transition-colors">
                  Selbsthilfegruppen
                </Link>
                <span>/</span>
                <span>Ihre Gruppe</span>
              </nav>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Ihre eigene Selbsthilfegruppe
              </h1>
              <p className="text-xl text-primary-100 leading-relaxed">
                Sie möchten eine Selbsthilfegruppe gründen? Wir unterstützen Sie 
                bei der Planung, Organisation und Durchführung Ihres Vorhabens.
              </p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="py-16">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              
              {/* Why Start a Group */}
              <div className="bg-white rounded-xl shadow-sm p-8 mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Warum eine Selbsthilfegruppe gründen?
                </h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Eine Selbsthilfegruppe zu gründen ist ein wichtiger Schritt, um Menschen 
                    in ähnlichen Lebenssituationen zusammenzubringen. Oft entstehen solche 
                    Gruppen aus dem persönlichen Bedürfnis heraus, sich mit anderen auszutauschen, 
                    die ähnliche Herausforderungen meistern.
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Vorteile einer Selbsthilfegruppe:</h3>
                      <ul className="space-y-2">
                        {benefits.map((benefit, index) => (
                          <li key={index} className="flex items-start">
                            <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-600 text-sm">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Typische Themen:</h3>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Chronische Erkrankungen</li>
                        <li>• Suchterkrankungen</li>
                        <li>• Psychische Belastungen</li>
                        <li>• Angehörigengruppen</li>
                        <li>• Behinderung und Handicap</li>
                        <li>• Verlust und Trauer</li>
                        <li>• Soziale Probleme</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Steps to Start */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                  In 4 Schritten zur eigenen Gruppe
                </h2>
                <div className="grid md:grid-cols-2 gap-8">
                  {steps.map((step, index) => (
                    <div key={index} className="bg-white rounded-xl shadow-sm p-8 relative">
                      <div className="flex items-start">
                        <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mr-4">
                          {step.icon}
                        </div>
                        <div>
                          <div className="flex items-center mb-2">
                            <span className="inline-flex items-center justify-center w-6 h-6 bg-primary-600 text-white text-sm font-bold rounded-full mr-2">
                              {step.number}
                            </span>
                            <h3 className="text-lg font-semibold text-gray-900">
                              {step.title}
                            </h3>
                          </div>
                          <p className="text-gray-600 leading-relaxed">
                            {step.description}
                          </p>
                        </div>
                      </div>
                      {index < steps.length - 1 && (
                        <div className="hidden md:block absolute -right-4 top-1/2 transform -translate-y-1/2">
                          <ArrowRight className="w-8 h-8 text-gray-300" />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Support Services */}
              <div className="bg-white rounded-xl shadow-sm p-8 mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Unsere Unterstützung für Sie
                </h2>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center p-4">
                    <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="w-8 h-8 text-primary-600" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">Beratung & Planung</h3>
                    <p className="text-sm text-gray-600">
                      Individuelle Beratung bei der Gruppengründung und -entwicklung
                    </p>
                  </div>
                  <div className="text-center p-4">
                    <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <MapPin className="w-8 h-8 text-primary-600" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">Raumvermittlung</h3>
                    <p className="text-sm text-gray-600">
                      Hilfe bei der Suche nach geeigneten Räumlichkeiten für Ihre Treffen
                    </p>
                  </div>
                  <div className="text-center p-4">
                    <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <FileText className="w-8 h-8 text-primary-600" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">Öffentlichkeitsarbeit</h3>
                    <p className="text-sm text-gray-600">
                      Unterstützung bei der Bewerbung und Bekanntmachung Ihrer Gruppe
                    </p>
                  </div>
                </div>
              </div>

              {/* Contact CTA */}
              <div className="bg-gradient-to-r from-primary-600 to-blue-600 rounded-xl p-8 text-white text-center">
                <h2 className="text-2xl font-bold mb-4">
                  Bereit für den ersten Schritt?
                </h2>
                <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
                  Kontaktieren Sie uns für ein unverbindliches Beratungsgespräch. 
                  Wir besprechen gemeinsam Ihre Ideen und zeigen Ihnen konkrete 
                  Schritte zur Umsetzung auf.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="tel:+493677888888"
                    className="inline-flex items-center justify-center px-6 py-3 bg-white text-primary-600 font-medium rounded-lg hover:bg-gray-100 transition-colors duration-300"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    03677 888888
                  </a>
                  <Link
                    href="/kontakt"
                    className="inline-flex items-center justify-center px-6 py-3 bg-primary-700 text-white font-medium rounded-lg hover:bg-primary-800 transition-colors duration-300"
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    Kontakt aufnehmen
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
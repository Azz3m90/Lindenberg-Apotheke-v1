import { NextSeo } from "next-seo";
import Layout from "../components/Layout";
import Link from "next/link";
import {
  Shield,
  Lock,
  Mail,
  Phone,
  MapPin,
  Clock,
  Server,
  Eye,
  CheckCircle,
  AlertCircle,
  FileText,
} from "lucide-react";

export default function Datenschutz() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Datenschutzerklärung",
    description: "Datenschutzerklärung der Lindenberg-Apotheke Ilmenau - Transparente Information über den Umgang mit Ihren Daten",
    url: "https://www.lindenberg-apotheke.de/datenschutz",
    isPartOf: {
      "@type": "WebSite",
      name: "Lindenberg-Apotheke Ilmenau",
      url: "https://www.lindenberg-apotheke.de"
    }
  };

  return (
    <Layout>
      <NextSeo
        title="Datenschutzerklärung"
        description="Datenschutzerklärung der Lindenberg-Apotheke Ilmenau. Erfahren Sie, wie wir mit Ihren Daten umgehen und wie wir Ihre Privatsphäre schützen."
        canonical="https://www.lindenberg-apotheke.de/datenschutz"
        openGraph={{
          title: "Datenschutzerklärung | Lindenberg-Apotheke Ilmenau",
          description: "Transparente Information über den Umgang mit Ihren Daten bei der Lindenberg-Apotheke Ilmenau.",
          url: "https://www.lindenberg-apotheke.de/datenschutz",
        }}
        noindex={true} // Privacy policy pages are often noindexed
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white py-16 lg:py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 bg-white bg-opacity-20 rounded-full text-sm font-semibold mb-6">
              <Shield className="w-4 h-4 mr-2" />
              Datenschutz & Transparenz
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
              Datenschutzerklärung
            </h1>
            <p className="text-xl text-primary-100 leading-relaxed max-w-3xl mx-auto">
              Ihre Privatsphäre ist uns wichtig. Hier erfahren Sie transparent, 
              wie wir mit Ihren Daten umgehen und wie wir Ihre Privatsphäre schützen.
            </p>
          </div>
        </div>
      </section>

      {/* Privacy-First Notice */}
      <section className="py-12 bg-green-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-8 border-l-4 border-green-500">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    🍃 Privacy-First Website
                  </h2>
                  <p className="text-gray-700 text-lg mb-4">
                    <strong>Gute Nachrichten:</strong> Unsere Website verwendet derzeit <strong>keine Cookies</strong> 
                    und <strong>kein Tracking</strong>. Wir sammeln keine persönlichen Daten ohne Ihre ausdrückliche Einwilligung.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex items-center text-green-700">
                      <CheckCircle className="w-5 h-5 mr-2" />
                      <span>Keine Cookies</span>
                    </div>
                    <div className="flex items-center text-green-700">
                      <CheckCircle className="w-5 h-5 mr-2" />
                      <span>Kein Tracking</span>
                    </div>
                    <div className="flex items-center text-green-700">
                      <CheckCircle className="w-5 h-5 mr-2" />
                      <span>Keine Werbung</span>
                    </div>
                    <div className="flex items-center text-green-700">
                      <CheckCircle className="w-5 h-5 mr-2" />
                      <span>DSGVO-konform</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 lg:py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto prose prose-lg">

            {/* Verantwortlicher */}
            <div className="bg-white rounded-xl border border-gray-200 p-8 mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <MapPin className="w-6 h-6 mr-3 text-primary-600" />
                1. Verantwortlicher
              </h2>
              <div className="bg-gray-50 rounded-lg p-6">
                <p className="text-lg font-semibold mb-4">Lindenberg-Apotheke Ilmenau</p>
                <div className="space-y-2 text-gray-700">
                  <p>Dr. Stefan Danz</p>
                  <p>Krankenhausstr. 26</p>
                  <p>98693 Ilmenau</p>
                  <div className="flex items-center mt-4">
                    <Phone className="w-4 h-4 mr-2 text-primary-600" />
                    <a href="tel:+493677888888" className="text-primary-600 hover:text-primary-700">
                      03677 888888
                    </a>
                  </div>
                  <div className="flex items-center">
                    <Mail className="w-4 h-4 mr-2 text-primary-600" />
                    <a href="mailto:apo@lindenberg-apotheke.de" className="text-primary-600 hover:text-primary-700">
                      apo@lindenberg-apotheke.de
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Datenverarbeitung */}
            <div className="bg-white rounded-xl border border-gray-200 p-8 mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Server className="w-6 h-6 mr-3 text-primary-600" />
                2. Welche Daten wir verarbeiten
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-800">Website-Nutzung</h3>
                  <div className="bg-blue-50 rounded-lg p-6">
                    <p className="text-gray-700 mb-4">
                      Bei jedem Besuch unserer Website werden automatisch folgende technische Daten erfasst:
                    </p>
                    <ul className="space-y-2 text-gray-600">
                      <li>• IP-Adresse (anonymisiert nach 24 Stunden)</li>
                      <li>• Browser-Typ und Version</li>
                      <li>• Verwendetes Betriebssystem</li>
                      <li>• Referrer URL (vorherige Seite)</li>
                      <li>• Uhrzeit des Zugriffs</li>
                      <li>• Aufgerufene Seiten</li>
                    </ul>
                    <p className="text-sm text-gray-500 mt-4">
                      <strong>Rechtsgrundlage:</strong> Berechtigte Interessen (Art. 6 Abs. 1 lit. f DSGVO) zur Sicherstellung der Funktionsfähigkeit und Sicherheit der Website.
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-800">Kontaktformular</h3>
                  <div className="bg-yellow-50 rounded-lg p-6">
                    <p className="text-gray-700 mb-4">
                      Wenn Sie unser Kontaktformular nutzen, verarbeiten wir:
                    </p>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Ihren Namen</li>
                      <li>• Ihre E-Mail-Adresse</li>
                      <li>• Ihre Nachricht</li>
                      <li>• Optional: Telefonnummer</li>
                    </ul>
                    <p className="text-sm text-gray-500 mt-4">
                      <strong>Rechtsgrundlage:</strong> Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) und berechtigte Interessen für die Bearbeitung Ihrer Anfrage.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Keine Cookies */}
            <div className="bg-white rounded-xl border border-gray-200 p-8 mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Eye className="w-6 h-6 mr-3 text-green-600" />
                3. Cookies & Tracking
              </h2>
              
              <div className="bg-green-50 rounded-lg p-6">
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-600 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-green-800 mb-2">
                      Wir verwenden KEINE Cookies oder Tracking-Tools
                    </h3>
                    <p className="text-green-700 mb-4">
                      Unsere Website funktioniert vollständig ohne Cookies. Wir verwenden:
                    </p>
                    <ul className="space-y-2 text-green-600">
                      <li>❌ Keine Google Analytics oder ähnliche Tools</li>
                      <li>❌ Keine Marketing-Pixel (Facebook, etc.)</li>
                      <li>❌ Keine Werbe-Cookies</li>
                      <li>❌ Keine Social Media Tracking-Plugins</li>
                      <li>❌ Keine A/B-Testing Tools</li>
                    </ul>
                    <div className="bg-white rounded-lg p-4 mt-4">
                      <p className="text-sm text-gray-600">
                        <strong>Das bedeutet für Sie:</strong> Sie müssen keine Cookie-Banner akzeptieren 
                        und können unsere Website vollständig anonym nutzen.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Externe Dienste */}
            <div className="bg-white rounded-xl border border-gray-200 p-8 mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Lock className="w-6 h-6 mr-3 text-primary-600" />
                4. Externe Dienste
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-3">QR-Code Generierung</h3>
                  <p className="text-gray-700 mb-3">
                    Für die QR-Codes auf unserer App-Seite nutzen wir den Dienst <strong>QR Server API</strong> (qrserver.com).
                  </p>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li>• <strong>Zweck:</strong> Dynamische QR-Code-Erstellung</li>
                    <li>• <strong>Datenübertragung:</strong> Nur URL-Parameter, keine persönlichen Daten</li>
                    <li>• <strong>Server-Standort:</strong> Europa (DSGVO-konform)</li>
                  </ul>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-3">App-Store Links</h3>
                  <p className="text-gray-700 text-sm">
                    Links zu Apple App Store und Google Play Store werden erst bei Klick aktiviert. 
                    Es werden keine automatischen Verbindungen hergestellt.
                  </p>
                </div>
              </div>
            </div>

            {/* Ihre Rechte */}
            <div className="bg-white rounded-xl border border-gray-200 p-8 mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <FileText className="w-6 h-6 mr-3 text-primary-600" />
                5. Ihre Rechte nach DSGVO
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="p-4 border border-primary-200 rounded-lg">
                    <h4 className="font-semibold text-primary-800 mb-2">Auskunftsrecht (Art. 15)</h4>
                    <p className="text-sm text-gray-600">Sie haben das Recht zu erfahren, welche Daten wir über Sie verarbeiten.</p>
                  </div>
                  
                  <div className="p-4 border border-primary-200 rounded-lg">
                    <h4 className="font-semibold text-primary-800 mb-2">Berichtigungsrecht (Art. 16)</h4>
                    <p className="text-sm text-gray-600">Sie können die Berichtigung falscher Daten verlangen.</p>
                  </div>
                  
                  <div className="p-4 border border-primary-200 rounded-lg">
                    <h4 className="font-semibold text-primary-800 mb-2">Löschungsrecht (Art. 17)</h4>
                    <p className="text-sm text-gray-600">Sie können die Löschung Ihrer Daten unter bestimmten Voraussetzungen verlangen.</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="p-4 border border-primary-200 rounded-lg">
                    <h4 className="font-semibold text-primary-800 mb-2">Widerspruchsrecht (Art. 21)</h4>
                    <p className="text-sm text-gray-600">Sie können der Verarbeitung Ihrer Daten widersprechen.</p>
                  </div>
                  
                  <div className="p-4 border border-primary-200 rounded-lg">
                    <h4 className="font-semibold text-primary-800 mb-2">Datenübertragbarkeit (Art. 20)</h4>
                    <p className="text-sm text-gray-600">Sie können Ihre Daten in einem übertragbaren Format erhalten.</p>
                  </div>
                  
                  <div className="p-4 border border-primary-200 rounded-lg">
                    <h4 className="font-semibold text-primary-800 mb-2">Beschwerde (Art. 77)</h4>
                    <p className="text-sm text-gray-600">Sie können sich bei der Datenschutzbehörde beschweren.</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-primary-50 rounded-lg p-6 mt-6">
                <p className="text-primary-800 font-medium mb-2">Ihre Rechte geltend machen:</p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href="mailto:apo@lindenberg-apotheke.de?subject=Datenschutzanfrage"
                    className="flex items-center text-primary-600 hover:text-primary-700 font-medium"
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    apo@lindenberg-apotheke.de
                  </a>
                  <a 
                    href="tel:+493677888888"
                    className="flex items-center text-primary-600 hover:text-primary-700 font-medium"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    03677 888888
                  </a>
                </div>
              </div>
            </div>

            {/* Datensicherheit */}
            <div className="bg-white rounded-xl border border-gray-200 p-8 mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Shield className="w-6 h-6 mr-3 text-primary-600" />
                6. Datensicherheit
              </h2>
              
              <div className="space-y-4">
                <p className="text-gray-700">
                  Wir setzen technische und organisatorische Maßnahmen ein, um Ihre Daten zu schützen:
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700">SSL-Verschlüsselung (HTTPS)</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700">Sichere Server in Deutschland</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700">Regelmäßige Sicherheitsupdates</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700">Minimale Datenspeicherung</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Speicherdauer */}
            <div className="bg-white rounded-xl border border-gray-200 p-8 mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Clock className="w-6 h-6 mr-3 text-primary-600" />
                7. Speicherdauer
              </h2>
              
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Server-Logfiles:</h4>
                  <p className="text-gray-700 text-sm">Werden nach 30 Tagen automatisch gelöscht</p>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Kontaktanfragen:</h4>
                  <p className="text-gray-700 text-sm">Werden nach Abschluss der Bearbeitung gelöscht, spätestens nach 2 Jahren</p>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">E-Mail-Korrespondenz:</h4>
                  <p className="text-gray-700 text-sm">Wird nach 3 Jahren gelöscht, außer bei besonderen rechtlichen Aufbewahrungspflichten</p>
                </div>
              </div>
            </div>

            {/* Kontakt */}
            <div className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-xl text-white p-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <Mail className="w-6 h-6 mr-3" />
                8. Datenschutz-Kontakt
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <p className="text-primary-100 mb-4">
                    Bei Fragen zum Datenschutz oder zur Geltendmachung Ihrer Rechte wenden Sie sich gerne an uns:
                  </p>
                  
                  <div className="space-y-3">
                    <a 
                      href="mailto:apo@lindenberg-apotheke.de?subject=Datenschutzanfrage"
                      className="flex items-center text-white hover:text-yellow-300 transition-colors"
                    >
                      <Mail className="w-5 h-5 mr-3" />
                      <div>
                        <div className="font-medium">E-Mail</div>
                        <div className="text-sm text-primary-100">apo@lindenberg-apotheke.de</div>
                      </div>
                    </a>
                    
                    <a 
                      href="tel:+493677888888"
                      className="flex items-center text-white hover:text-yellow-300 transition-colors"
                    >
                      <Phone className="w-5 h-5 mr-3" />
                      <div>
                        <div className="font-medium">Telefon</div>
                        <div className="text-sm text-primary-100">03677 888888</div>
                      </div>
                    </a>
                  </div>
                </div>
                
                <div>
                  <div className="bg-white bg-opacity-10 rounded-lg p-4">
                    <h4 className="font-semibold mb-2">Öffnungszeiten</h4>
                    <div className="text-sm text-primary-100 space-y-1">
                      <p>Mo-Fr: 7:00-18:00 Uhr</p>
                      <p>Sa: 9:00-12:00 Uhr</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Letzte Aktualisierung */}
            <div className="text-center mt-12 pt-8 border-t border-gray-200">
              <p className="text-gray-500 text-sm">
                <strong>Letzte Aktualisierung:</strong> {new Date().toLocaleDateString('de-DE', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </p>
              <p className="text-gray-400 text-xs mt-2">
                Wir behalten uns vor, diese Datenschutzerklärung zu aktualisieren, um sie an geänderte Rechtslage oder bei Änderungen unserer Services anzupassen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Fragen zum Datenschutz?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Wir beantworten gerne alle Ihre Fragen zum Datenschutz und zu Ihren Rechten.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/uber-uns/kontakt"
                className="btn bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 text-lg font-semibold rounded-xl"
              >
                <Mail className="w-5 h-5 mr-2" />
                Kontakt aufnehmen
              </Link>
              <a
                href="tel:+493677888888"
                className="btn bg-transparent border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white px-8 py-3 text-lg font-semibold rounded-xl"
              >
                <Phone className="w-5 h-5 mr-2" />
                Anrufen
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
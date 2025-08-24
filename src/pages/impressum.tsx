import { NextSeo } from "next-seo";
import Layout from "../components/Layout";
import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  Building,
  FileText,
  Scale,
} from "lucide-react";

export default function Impressum() {
  return (
    <Layout>
      <NextSeo
        title="Impressum"
        description="Impressum der Lindenberg-Apotheke Ilmenau - Rechtliche Angaben gemäß § 5 TMG"
        canonical="https://www.lindenberg-apotheke.de/impressum"
        noindex={true} // Impressum pages are usually noindexed
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-700 to-gray-800 text-white py-16 lg:py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 bg-white bg-opacity-20 rounded-full text-sm font-semibold mb-6">
              <FileText className="w-4 h-4 mr-2" />
              Rechtliche Angaben
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
              Impressum
            </h1>
            <p className="text-xl text-gray-100 leading-relaxed max-w-3xl mx-auto">
              Angaben gemäß § 5 TMG und § 2a UAG
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 lg:py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">

            {/* Betreiber */}
            <div className="bg-white rounded-xl border border-gray-200 p-8 mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Building className="w-6 h-6 mr-3 text-primary-600" />
                Betreiber der Website
              </h2>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Apotheke</h3>
                    <div className="space-y-3 text-gray-700">
                      <p className="font-semibold text-lg">Lindenberg-Apotheke</p>
                      <p>Inhaber: Dr. Stefan Danz</p>
                      <div className="flex items-start">
                        <MapPin className="w-4 h-4 mr-2 mt-1 text-primary-600" />
                        <div>
                          <p>Krankenhausstr. 26</p>
                          <p>98693 Ilmenau</p>
                          <p>Deutschland</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Kontakt</h3>
                    <div className="space-y-3">
                      <a
                        href="tel:+493677888888"
                        className="flex items-center text-primary-600 hover:text-primary-700 transition-colors"
                      >
                        <Phone className="w-4 h-4 mr-2" />
                        03677 888888
                      </a>
                      <a
                        href="mailto:apo@lindenberg-apotheke.de"
                        className="flex items-center text-primary-600 hover:text-primary-700 transition-colors"
                      >
                        <Mail className="w-4 h-4 mr-2" />
                        apo@lindenberg-apotheke.de
                      </a>
                    </div>
                    
                    <div className="mt-6 p-4 bg-primary-50 rounded-lg">
                      <h4 className="font-semibold text-primary-800 mb-2">Öffnungszeiten</h4>
                      <div className="text-sm text-primary-700 space-y-1">
                        <p>Mo-Fr: 7:00-18:00 Uhr</p>
                        <p>Sa: 9:00-12:00 Uhr</p>
                        <p>So: Geschlossen</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Rechtliche Angaben */}
            <div className="bg-white rounded-xl border border-gray-200 p-8 mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Scale className="w-6 h-6 mr-3 text-primary-600" />
                Rechtliche Angaben
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-4">Berufsbezeichnung</h3>
                  <div className="space-y-2 text-gray-700">
                    <p>Apotheker</p>
                    <p>Verliehen in: Deutschland</p>
                    <p>Berufsrechtliche Regelungen: Bundes-Apothekerordnung (BApO)</p>
                  </div>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-4">Aufsichtsbehörde</h3>
                  <div className="space-y-2 text-gray-700">
                    <p>Landesapothekerkammer Thüringen</p>
                    <p>Anger 49</p>
                    <p>99084 Erfurt</p>
                  </div>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-4">Betriebserlaubnis</h3>
                  <div className="space-y-2 text-gray-700">
                    <p>Erteilt durch:</p>
                    <p>Landratsamt Ilm-Kreis</p>
                    <p>Ritterstraße 14</p>
                    <p>99310 Arnstadt</p>
                  </div>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-4">Steuernummer</h3>
                  <div className="space-y-2 text-gray-700">
                    <p>Finanzamt Suhl</p>
                    <p>Steuernummer: [wird auf Anfrage mitgeteilt]</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Haftungsausschluss */}
            <div className="bg-white rounded-xl border border-gray-200 p-8 mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Haftungsausschluss
              </h2>
              
              <div className="space-y-6 text-gray-700">
                <div>
                  <h3 className="text-lg font-semibold mb-3">Haftung für Inhalte</h3>
                  <p className="leading-relaxed">
                    Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten 
                    nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als 
                    Diensteanbieter jedoch nicht unter der Verpflichtung, übermittelte oder gespeicherte 
                    fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine 
                    rechtswidrige Tätigkeit hinweisen.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-3">Haftung für Links</h3>
                  <p className="leading-relaxed">
                    Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen 
                    Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. 
                    Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber 
                    der Seiten verantwortlich.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-3">Urheberrecht</h3>
                  <p className="leading-relaxed">
                    Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen 
                    dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art 
                    der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen 
                    Zustimmung des jeweiligen Autors bzw. Erstellers.
                  </p>
                </div>
              </div>
            </div>

            {/* Streitbeilegung */}
            <div className="bg-white rounded-xl border border-gray-200 p-8 mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Streitbeilegung
              </h2>
              
              <div className="bg-blue-50 rounded-lg p-6">
                <p className="text-gray-700 leading-relaxed">
                  Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: 
                  <a 
                    href="https://ec.europa.eu/consumers/odr/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary-600 hover:text-primary-700 underline ml-1"
                  >
                    https://ec.europa.eu/consumers/odr/
                  </a>
                </p>
                <p className="text-gray-700 mt-4 leading-relaxed">
                  Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer 
                  Verbraucherschlichtungsstelle teilzunehmen.
                </p>
              </div>
            </div>

            {/* Kontakt */}
            <div className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-xl text-white p-8">
              <h2 className="text-2xl font-bold mb-6">
                Fragen zum Impressum?
              </h2>
              
              <p className="text-primary-100 mb-6 leading-relaxed">
                Bei Fragen zu den rechtlichen Angaben oder anderen Belangen kontaktieren Sie uns gerne.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:+493677888888"
                  className="btn bg-white text-primary-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-medium flex items-center justify-center"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  03677 888888
                </a>
                <a
                  href="mailto:apo@lindenberg-apotheke.de"
                  className="btn bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary-600 px-6 py-3 rounded-lg font-medium flex items-center justify-center"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  E-Mail senden
                </a>
              </div>
            </div>

            {/* Letzte Aktualisierung */}
            <div className="text-center mt-12 pt-8 border-t border-gray-200">
              <p className="text-gray-500 text-sm">
                <strong>Stand:</strong> {new Date().toLocaleDateString('de-DE', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
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
              Haben Sie Fragen?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Wir sind gerne für Sie da und beantworten alle Ihre Fragen persönlich.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/uber-uns/kontakt"
                className="btn bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 text-lg font-semibold rounded-xl"
              >
                Kontakt aufnehmen
              </Link>
              <Link
                href="/datenschutz"
                className="btn bg-transparent border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white px-8 py-3 text-lg font-semibold rounded-xl"
              >
                Datenschutz
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
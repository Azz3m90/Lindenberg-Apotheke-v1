import Head from "next/head";
import Layout from "../components/Layout";
import Link from "next/link";
import {
  Clock,
  Phone,
  MapPin,
  Mail,
  ArrowRight,
  BookOpen,
  Palette,
  List,
} from "lucide-react";

export default function Interessantes() {
  return (
    <Layout>
      <Head>
        <title>Interessantes - Lindenberg-Apotheke Ilmenau</title>
        <meta
          name="description"
          content="Interessante Informationen über Ilmenau, Apothekenzeitungen und E-Nummern von der Lindenberg-Apotheke."
        />
      </Head>

      <div className="min-h-screen bg-gray-50">
        <div className="container-custom py-8">
          {/* Page Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Interessantes
            </h1>
            <div className="w-16 h-1 bg-primary-600 rounded"></div>
            <p className="text-gray-600 mt-4">
              Entdecken Sie interessante Informationen zu verschiedenen Themen
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Stadt Ilmenau Section */}
              <Link href="/interessantes/ilmenau" className="block">
                <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow cursor-pointer">
                  <div className="flex items-start space-x-6">
                    <div className="flex-shrink-0">
                      <div className="w-24 h-24 bg-teal-600 rounded-lg flex items-center justify-center">
                        <div className="text-center text-white">
                          <div className="flex justify-center mb-1">
                            <svg
                              className="w-8 h-8"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z" />
                            </svg>
                          </div>
                          <div className="font-bold text-sm">ilmenau</div>
                          <div className="text-xs opacity-90">himmelblau</div>
                        </div>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h2 className="text-xl font-bold text-gray-900 mb-2 flex items-center">
                        Stadt Ilmenau
                        <ArrowRight className="w-5 h-5 ml-2 text-blue-600" />
                      </h2>
                      <p className="text-gray-700 mb-3">
                        Erfahren Sie mehr über unsere schöne Stadt{" "}
                        <span className="text-red-600 font-medium">
                          Ilmenau
                        </span>{" "}
                        - die Universitätsstadt mit dem Slogan "himmelblau".
                      </p>
                      <div className="text-blue-600 hover:text-blue-800 font-medium">
                        Mehr erfahren →
                      </div>
                    </div>
                  </div>
                </div>
              </Link>

              {/* Apothekenzeitungen Section */}
              <Link href="/interessantes/apothekenzeitungen" className="block">
                <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow cursor-pointer">
                  <div className="flex items-start space-x-6">
                    <div className="flex-shrink-0">
                      <div className="w-24 h-24 bg-blue-600 rounded-lg flex items-center justify-center">
                        <BookOpen className="w-10 h-10 text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h2 className="text-xl font-bold text-gray-900 mb-2 flex items-center hyphens-manual">
                        Apotheken&shy;zeitungen
                        <ArrowRight className="w-5 h-5 ml-2 text-blue-600" />
                      </h2>
                      <p className="text-gray-700 mb-3">
                        Entdecken Sie unsere{" "}
                        <span className="text-red-600 font-medium">
                          Apothekenzeitungen
                        </span>{" "}
                        - Gesundheitsmagazine{" "} für alle Altersgruppen und
                        Bedürfnisse.
                      </p>
                      {/* <div className="grid md:grid-cols-5 grid-cols-auto justify-start gap-2 mb-4">
                        <div className="bg-blue-500 rounded p-1 text-white text-center text-xs">
                          <div className="font-bold">APOTHEKEN</div>
                          <div>UMSCHAU</div>
                        </div>
                        <div className="bg-green-500 rounded p-1 text-white text-center text-xs">
                          <div className="font-bold">DIABETIKER</div>
                          <div>RATGEBER</div>
                        </div>
                        <div className="bg-orange-500 rounded p-1 text-white text-center text-xs">
                          <div className="font-bold">SENIOREN</div>
                          <div>RATGEBER</div>
                        </div>
                        <div className="bg-gradient-to-r from-yellow-400 to-red-500 rounded p-1 text-white text-center text-xs font-bold">
                          BABY
                        </div>
                        <div className="bg-gradient-to-r from-blue-400 to-blue-600 rounded p-1 text-white text-center text-xs">
                          <div className="font-bold">medizini</div>
                        </div>
                      </div> */}
                      <div className="text-blue-600 hover:text-blue-800 font-medium">
                        Alle Magazine ansehen →
                      </div>
                    </div>
                  </div>
                </div>
              </Link>

              {/* E-Nummern Section */}
              <Link href="/interessantes/e-nummern" className="block">
                <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow cursor-pointer">
                  <div className="flex items-start space-x-6">
                    <div className="flex-shrink-0">
                      <div className="w-24 h-24 bg-slate-700 rounded-lg flex items-center justify-center relative overflow-hidden">
                        <div className="text-white text-xs opacity-50 absolute inset-0 p-1 leading-tight">
                          E300 E451 E350 E100 E500 E150
                        </div>
                        <List className="w-8 h-8 text-white relative z-10" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h2 className="text-xl font-bold text-gray-900 mb-2 flex items-center">
                        E-Nummern
                        <ArrowRight className="w-5 h-5 ml-2 text-blue-600" />
                      </h2>
                      <p className="text-gray-700 mb-3">
                        Hier finden Sie eine umfassende Liste zu{" "}
                        <span className="text-red-600 font-medium">
                          E-Nummern
                        </span>
                        , die Sie auch in Lebensmitteln finden.
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4 text-xs">
                        <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded">
                          Farbstoffe
                        </span>
                        <span className="bg-green-100 text-green-800 px-2 py-1 rounded">
                          Konservierungsmittel
                        </span>
                        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">
                          Emulgatoren
                        </span>
                        <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded">
                          Geschmacksverstärker
                        </span>
                      </div>
                      <div className="text-blue-600 hover:text-blue-800 font-medium">
                        Vollständige Liste ansehen →
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Opening Hours */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <Clock className="w-5 h-5 mr-2" />
                  Öffnungszeiten
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Montag</span>
                    <span className="font-medium">7:00-18:00 Uhr</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Dienstag</span>
                    <span className="font-medium">7:00-18:00 Uhr</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Mittwoch</span>
                    <span className="font-medium">7:00-18:00 Uhr</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Donnerstag</span>
                    <span className="font-medium">7:00-18:00 Uhr</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Freitag</span>
                    <span className="font-medium">7:00-18:00 Uhr</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Samstag</span>
                    <span className="font-medium">9:00-12:00 Uhr</span>
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Kontakt
                </h3>

                <div className="space-y-4 text-sm">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">
                      Lindenberg-Apotheke Ilmenau
                    </h4>
                    <p className="text-gray-600">Dr. H. Danz</p>
                  </div>

                  <div className="flex items-start space-x-2">
                    <MapPin className="w-4 h-4 mt-0.5 text-gray-400" />
                    <div>
                      <p className="text-gray-600">Krankenhausstr. 26</p>
                      <p className="text-gray-600">98693 Ilmenau</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Phone className="w-4 h-4 text-gray-400" />
                    <div>
                      <p className="text-gray-600">Fon: +49 3677 888888</p>
                      <p className="text-gray-600">Fax: +49 3677 61911</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Mail className="w-4 h-4 text-gray-400" />
                    <a
                      href="mailto:info@lindenberg-apotheke.de"
                      className="text-red-600 hover:text-red-700"
                    >
                      Lindenberg-Apotheke
                    </a>
                  </div>

                  <div className="pt-2">
                    <a
                      href="/uber-uns/anfahrt"
                      className="text-red-600 hover:text-red-700 text-sm underline"
                    >
                      Hier geht's zur Anfahrt
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

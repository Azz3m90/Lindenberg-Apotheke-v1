import Head from "next/head";
import Layout from "../../components/Layout";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function StadtIlmenau() {
  return (
    <Layout>
      <Head>
        <title>
          Stadt Ilmenau - Interessantes - Lindenberg-Apotheke Ilmenau
        </title>
        <meta
          name="description"
          content="Informationen über die Stadt Ilmenau - himmelblau."
        />
      </Head>

      <div className="min-h-screen bg-gray-50">
        <div className="container-custom py-8">
          {/* Navigation */}
          <div className="mb-6">
            <Link
              href="/interessantes"
              className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-4"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Zurück zu Interessantes
            </Link>
          </div>

          {/* Page Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Stadt Ilmenau
            </h1>
            <div className="w-16 h-1 bg-primary-600 rounded"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-lg shadow-md p-8">
                <div className="flex flex-col lg:flex-row items-start lg:items-center space-y-6 lg:space-y-0 lg:space-x-8">
                  {/* Ilmenau Logo */}
                  <div className="flex-shrink-0 mx-auto lg:mx-0">
                    <div className="w-48 h-48 bg-teal-600 rounded-lg flex items-center justify-center">
                      <div className="text-center text-white">
                        <div className="flex justify-center mb-4">
                          <svg
                            className="w-16 h-16"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z" />
                          </svg>
                        </div>
                        <div className="font-bold text-4xl mb-2">ilmenau</div>
                        <div className="text-lg opacity-90">himmelblau</div>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">
                      Willkommen in Ilmenau
                    </h2>

                    <div className="space-y-4 text-gray-700">
                      <p className="text-lg">
                        Erfahren Sie mehr über unsere schöne Stadt{" "}
                        <span className="text-red-600 font-medium">
                          Ilmenau
                        </span>{" "}
                        - die Universitätsstadt mit dem Slogan "himmelblau".
                      </p>

                      <p>
                        Ilmenau ist eine Universitäts- und Kreisstadt in
                        Thüringen mit etwa 25.000 Einwohnern. Die Stadt liegt am
                        Nordrand des Thüringer Waldes und ist bekannt für ihre
                        Technische Universität sowie ihre reiche Geschichte und
                        Kultur.
                      </p>

                      <p>
                        Die Stadt bietet eine einzigartige Mischung aus
                        Tradition und Moderne, geprägt von ihrer langen
                        industriellen Geschichte und dem lebendigen
                        Universitätsleben. Mit ihrer Lage im Herzen Deutschlands
                        ist Ilmenau ein attraktiver Ort zum Leben und Arbeiten.
                      </p>

                      <div className="mt-8 pt-6 border-t border-gray-200">
                        <h3 className="text-xl font-bold text-gray-900 mb-4">
                          Mehr über Ilmenau erfahren
                        </h3>
                        <p className="mb-4">
                          Besuchen Sie die offizielle Website der Stadt Ilmenau
                          für ausführliche Informationen über
                          Sehenswürdigkeiten, Veranstaltungen und
                          Dienstleistungen.
                        </p>
                        <a
                          href="https://www.ilmenau.de"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                        >
                          Zur offiziellen Website →
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                  Weitere Interessantes
                </h3>
                <div className="space-y-3">
                  <Link
                    href="/interessantes/apothekenzeitungen"
                    className="block p-3 rounded-lg bg-blue-50 hover:bg-blue-100 transition-colors"
                  >
                    <div className="font-medium text-blue-900">
                      Apothekenzeitungen
                    </div>
                    <div className="text-sm text-blue-700">
                      Gesundheitsmagazine aus der Apotheke
                    </div>
                  </Link>
                  <Link
                    href="/interessantes/e-nummern"
                    className="block p-3 rounded-lg bg-green-50 hover:bg-green-100 transition-colors"
                  >
                    <div className="font-medium text-green-900">E-Nummern</div>
                    <div className="text-sm text-green-700">
                      Lebensmittelzusatzstoffe erklärt
                    </div>
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

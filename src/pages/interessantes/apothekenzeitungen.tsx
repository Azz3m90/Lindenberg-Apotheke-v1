import Head from "next/head";
import Layout from "../../components/Layout";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function Apothekenzeitungen() {
  return (
    <Layout>
      <Head>
        <title>
          Apothekenzeitungen - Interessantes - Lindenberg-Apotheke Ilmenau
        </title>
        <meta
          name="description"
          content="Gesundheitsmagazine aus der Apotheke - Apotheken-Umschau, Diabetiker-Ratgeber, Senioren-Ratgeber, BABY und medizini."
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
              Apothekenzeitungen
            </h1>
            <div className="w-16 h-1 bg-primary-600 rounded"></div>
            <p className="text-gray-600 mt-4">
              Erfahren Sie mehr über unsere{" "}
              <span className="text-red-600 font-medium">
                Apothekenzeitungen
              </span>
              .
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-lg shadow-md p-6">
                {/* Magazine Details */}
                <div className="space-y-8">
                  {/* Apotheken-Umschau */}
                  <div className="border-b border-gray-200 pb-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-blue-600 rounded-lg p-4 text-white text-center h-24 w-24 flex items-center justify-center flex-shrink-0">
                        <div>
                          <div className="text-xs font-bold">APOTHEKEN</div>
                          <div className="text-xs">UMSCHAU</div>
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-gray-900 mb-2">
                          Apotheken-Umschau
                        </h3>
                        <p className="text-sm text-gray-700 mb-3">
                          Die 14-tägig erscheinende, nur in Apotheken
                          erhältliche <strong>Apotheken-Umschau</strong> ist
                          Deutschlands erfolgreichstes, meistgelesenes
                          Gesundheits-Magazin aus der Apotheke.
                        </p>
                        <p className="text-sm text-gray-600">
                          Das Magazin bietet seinen Lesern
                          Gesundheits-Aufklärung, aktuelle Informationen,
                          kritische Hintergrund-Berichterstattung und praktische
                          Lebenshilfe. All das verantwortungsbewusst, kompetent,
                          lebensbejahend und auch unterhaltend.
                        </p>
                        <a
                          href="https://www.apotheken-umschau.de/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-800 underline text-sm mt-2 inline-block"
                        >
                          Zur Website →
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Diabetiker-Ratgeber */}
                  <div className="border-b border-gray-200 pb-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-green-600 rounded-lg p-4 text-white text-center h-24 w-24 flex items-center justify-center flex-shrink-0">
                        <div>
                          <div className="text-xs font-bold">DIABETIKER</div>
                          <div className="text-xs">RATGEBER</div>
                          <div className="text-red-600 bg-white rounded px-1 mt-1 text-xs">
                            A
                          </div>
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-gray-900 mb-2">
                          Diabetiker-Ratgeber
                        </h3>
                        <p className="text-sm text-gray-700 mb-3">
                          Der <strong>Diabetiker-Ratgeber</strong> ist
                          Deutschlands größtes Spezial-Magazin für
                          Diabetes-Patienten (und deren Angehörige); es
                          erscheint monatlich und liegt in vielen Apotheken aus.
                        </p>
                        <p className="text-sm text-gray-600">
                          Das Magazin, Mitherausgeber ist die Deutsche
                          Diabetes-Stiftung, bietet den Betroffenen seriösen,
                          kompetenten, Mut machenden Gesundheitsrat und viele
                          Informationen für den Alltag.
                        </p>
                        <a
                          href="https://www.diabetes-ratgeber.net/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-800 underline text-sm mt-2 inline-block"
                        >
                          Zur Website →
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Senioren-Ratgeber */}
                  <div className="border-b border-gray-200 pb-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-orange-500 rounded-lg p-4 text-white text-center h-24 w-24 flex items-center justify-center flex-shrink-0">
                        <div>
                          <div className="text-xs font-bold">SENIOREN</div>
                          <div className="text-xs">RATGEBER</div>
                          <div className="text-red-600 bg-white rounded px-1 mt-1 text-xs">
                            A
                          </div>
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-gray-900 mb-2">
                          Senioren-Ratgeber
                        </h3>
                        <p className="text-sm text-gray-700 mb-3">
                          Der <strong>Senioren-Ratgeber</strong> ist präzise auf
                          die ältere Generation zugeschnitten. Das
                          Apotheken-Magazin, das monatlich erscheint,
                          präsentiert eine Mischung aus Gesundheits-Ratschlägen
                          und vernünftigen Alltags-Tipps.
                        </p>
                        <p className="text-sm text-gray-600">
                          Abwechselungsreiche Beiträge informieren über
                          Beschwerden und Krankheiten, die im Alter öfter
                          aufreten, zeigen, wie man ihnen vorbeugt und welche
                          Erfolgs-Therapien möglich sind.
                        </p>
                        <a
                          href="https://www.senioren-ratgeber.de/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-800 underline text-sm mt-2 inline-block"
                        >
                          Zur Website →
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* BABY */}
                  <div className="border-b border-gray-200 pb-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-gradient-to-r from-yellow-400 via-pink-500 to-red-500 rounded-lg p-4 text-white text-center h-24 w-24 flex items-center justify-center flex-shrink-0">
                        <div className="text-lg font-bold">BABY</div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-gray-900 mb-2">
                          BABY und Familie
                        </h3>
                        <p className="text-sm text-gray-700 mb-3">
                          <strong>BABY</strong> und die ersten Lebensjahre
                          erscheint monatlich und wird von sehr vielen Apotheken
                          als Spezial-Magazin für junge Eltern bereitgehalten.
                        </p>
                        <p className="text-sm text-gray-600">
                          Der Titel berichtet über Geburtsvorbereitung und
                          Säuglingspflege, stellt die typischen
                          Kinderkrankheiten vor und behandelt altersgerechte
                          Ernährung, psychische und soziale Entwicklung sowie
                          Erziehung.
                        </p>
                        <a
                          href="https://www.baby-und-familie.de/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-800 underline text-sm mt-2 inline-block"
                        >
                          Zur Website →
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* medizini */}
                  <div>
                    <div className="flex items-start space-x-4">
                      <div className="bg-gradient-to-r from-blue-400 to-blue-600 rounded-lg p-4 text-white text-center h-24 w-24 flex items-center justify-center flex-shrink-0">
                        <div>
                          <div className="text-xs font-bold">medizini</div>
                          <div className="text-xs">POSTER</div>
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-gray-900 mb-2">
                          medizini
                        </h3>
                        <p className="text-sm text-gray-700 mb-3">
                          <strong>medizini</strong> ist Europas größte
                          Kinder-Zeitschrift, ein pfiffiges Poster-Magazin der
                          Apotheken, das von Kindern heiß geliebt wird und bei
                          Eltern als pädagogisch wertvolle Lektüre hohes Ansehen
                          genießt.
                        </p>
                        <p className="text-sm text-gray-600">
                          Die monatlich erscheinenden Hefte für Kinder von 4 bis
                          12 Jahren bieten kindgerechte Gesundheits-Aufklärung,
                          lehrreiche Unterhaltung, Informationen aus Natur,
                          Umwelt, Technik und Sport, Witze, Humor, Denksport und
                          Mitmach-Aktionen.
                        </p>
                        <a
                          href="https://www.wortundbildverlag.de/medizini"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-800 underline text-sm mt-2 inline-block"
                        >
                          Zur Website →
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
                    href="/interessantes/ilmenau"
                    className="block p-3 rounded-lg bg-teal-50 hover:bg-teal-100 transition-colors"
                  >
                    <div className="font-medium text-teal-900">
                      Stadt Ilmenau
                    </div>
                    <div className="text-sm text-teal-700">
                      Informationen über unsere Stadt
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

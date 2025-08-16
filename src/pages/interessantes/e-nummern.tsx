import Head from "next/head";
import Layout from "../../components/Layout";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function ENummern() {
  return (
    <Layout>
      <Head>
        <title>E-Nummern - Interessantes - Lindenberg-Apotheke Ilmenau</title>
        <meta
          name="description"
          content="Umfassende Liste der E-Nummern in Lebensmitteln - Farbstoffe, Konservierungsmittel, Antioxidantien und mehr."
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
            <h1 className="text-3xl font-bold text-gray-900 mb-2">E-Nummern</h1>
            <div className="w-16 h-1 bg-primary-600 rounded"></div>
            <p className="text-gray-600 mt-4">
              Hier finden Sie eine umfassende Liste zu{" "}
              <span className="text-red-600 font-medium">E-Nummern</span>, die
              Sie auch in Lebensmitteln finden.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-lg shadow-md p-6">
                {/* E-Number Categories */}
                <div className="space-y-8">
                  {/* Naturidentische Farbstoffe */}
                  <div className="border-b border-gray-200 pb-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-4">
                      Naturidentische Farbstoffe
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
                      <div className="bg-yellow-50 p-3 rounded-lg">
                        <div className="font-bold text-yellow-800">
                          E 100 - Kurkumin
                        </div>
                        <div className="text-gray-600">
                          Gelbwurzel (Kurkuman), Bestandteil des Curry
                        </div>
                      </div>
                      <div className="bg-yellow-50 p-3 rounded-lg">
                        <div className="font-bold text-yellow-800">
                          E 101 - Lactoflavin (Riboflavin)
                        </div>
                        <div className="text-gray-600">
                          Vitamin B2, in zahlreichen Lebensmitteln enthalten
                        </div>
                      </div>
                      <div className="bg-orange-50 p-3 rounded-lg">
                        <div className="font-bold text-orange-800">
                          E 160 - Carotinoide
                        </div>
                        <div className="text-gray-600">
                          Kommen in zahlreichen Pflanzen vor und dienen als
                          Vorstufe des Vitamin A
                        </div>
                      </div>
                      <div className="bg-red-50 p-3 rounded-lg">
                        <div className="font-bold text-red-800">
                          E 162 - Beetenrot, Betanoin
                        </div>
                        <div className="text-gray-600">
                          Extrakt aus der Randenwurzel
                        </div>
                      </div>
                      <div className="bg-blue-50 p-3 rounded-lg">
                        <div className="font-bold text-blue-800">
                          E 163 - Anthocyane
                        </div>
                        <div className="text-gray-600">
                          Mineralische Pigmente aus den Schalen von Trauben,
                          Holunder
                        </div>
                      </div>
                      <div className="bg-green-50 p-3 rounded-lg">
                        <div className="font-bold text-green-800">
                          E 140 - Chlorophylle
                        </div>
                        <div className="text-gray-600">
                          Farbstoffe des Blattgrün
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Synthetische Farben */}
                  <div className="border-b border-gray-200 pb-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-4">
                      Synthetische Farben
                    </h3>
                    <div className="bg-red-50 p-4 rounded-lg mb-4">
                      <div className="text-sm text-red-800 font-medium">
                        ⚠️ Wichtiger Hinweis:
                      </div>
                      <div className="text-sm text-red-700">
                        Synthetische Farben können allergische Reaktionen der
                        Haut und des Atemtraktes (Asthma), vor allem auch
                        zusammen mit Acetylsalicylsäure (Aspirin) und
                        Benzoesäure hervorrufen.
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 text-sm">
                      <div className="bg-yellow-100 p-2 rounded">
                        <span className="font-bold">E 102</span> - Tartrazin
                      </div>
                      <div className="bg-yellow-100 p-2 rounded">
                        <span className="font-bold">E 104</span> - Chinolingelb
                      </div>
                      <div className="bg-orange-100 p-2 rounded">
                        <span className="font-bold">E 110</span> - Gelborange S
                      </div>
                      <div className="bg-red-100 p-2 rounded">
                        <span className="font-bold">E 120</span> - Cochenille
                      </div>
                      <div className="bg-red-100 p-2 rounded">
                        <span className="font-bold">E 122</span> - Azorubin
                      </div>
                      <div className="bg-blue-100 p-2 rounded">
                        <span className="font-bold">E 131</span> - Patentblau V
                      </div>
                      <div className="bg-blue-100 p-2 rounded">
                        <span className="font-bold">E 132</span> - Indigotin
                      </div>
                      <div className="bg-green-100 p-2 rounded">
                        <span className="font-bold">E 142</span> -
                        Brillantsäuregrün
                      </div>
                      <div className="bg-gray-600 text-white p-2 rounded">
                        <span className="font-bold">E 150</span> - Caramel
                        (Zuckerkulör)
                      </div>
                    </div>
                  </div>

                  {/* Konservierungsmittel */}
                  <div className="border-b border-gray-200 pb-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-4">
                      Konservierungsmittel
                    </h3>
                    <div className="space-y-3">
                      <div className="bg-green-50 p-3 rounded-lg">
                        <div className="font-bold text-green-800">
                          E 200-203 - Sorbinsäure und Salze
                        </div>
                        <div className="text-sm text-gray-600">
                          Gilt als unbedenklich, da sie im Körper wie Fettsäure
                          abgebaut wird. Natürlich u.a. in Eberesche.
                        </div>
                      </div>
                      <div className="bg-yellow-50 p-3 rounded-lg">
                        <div className="font-bold text-yellow-800">
                          E 210-213 - Benzoesäure und Salze
                        </div>
                        <div className="text-sm text-gray-600">
                          Eignen sich zur Konservierung von sauren
                          Lebensmitteln. Können allergische Reaktionen
                          (Nesselsucht, Asthma) hervorrufen.
                        </div>
                      </div>
                      <div className="bg-red-50 p-3 rounded-lg">
                        <div className="font-bold text-red-800">
                          E 220-227 - Schwefeldioxid und Sulfite
                        </div>
                        <div className="text-sm text-gray-600">
                          Schweflige Säure hemmt verschiedene Enzyme im Körper
                          und zerstört Vitamin B1.
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Antioxidantien */}
                  <div className="border-b border-gray-200 pb-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-4">
                      Antioxidantien
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-green-50 p-3 rounded-lg">
                        <div className="font-bold text-green-800">
                          E 300-304 - Vitamin C
                        </div>
                        <div className="text-sm text-gray-600">
                          Ascorbinsäure und Salze, unschädlich
                        </div>
                      </div>
                      <div className="bg-green-50 p-3 rounded-lg">
                        <div className="font-bold text-green-800">
                          E 306-309 - Vitamin E
                        </div>
                        <div className="text-sm text-gray-600">
                          Tocopherole, unschädlich
                        </div>
                      </div>
                      <div className="bg-yellow-50 p-3 rounded-lg">
                        <div className="font-bold text-yellow-800">
                          E 320-321 - BHA, BHT
                        </div>
                        <div className="text-sm text-gray-600">
                          Synthetische Antioxidantien. Können Allergien
                          hervorrufen.
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Emulgatoren und Stabilisatoren */}
                  <div className="border-b border-gray-200 pb-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-4">
                      Emulgatoren, Stabilisatoren, Säuerungsmittel
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 text-sm">
                      <div className="bg-blue-50 p-3 rounded-lg">
                        <div className="font-bold text-blue-800">
                          E 322 - Lecithin
                        </div>
                        <div className="text-gray-600">
                          Wird aus Soja, Ei usw. gewonnen
                        </div>
                      </div>
                      <div className="bg-blue-50 p-3 rounded-lg">
                        <div className="font-bold text-blue-800">
                          E 330-333 - Zitronensäure
                        </div>
                        <div className="text-gray-600">
                          Zitronensäure und Salze
                        </div>
                      </div>
                      <div className="bg-blue-50 p-3 rounded-lg">
                        <div className="font-bold text-blue-800">
                          E 400-405 - Alginsäure
                        </div>
                        <div className="text-gray-600">
                          Aus Braunalgen gewonnen
                        </div>
                      </div>
                      <div className="bg-blue-50 p-3 rounded-lg">
                        <div className="font-bold text-blue-800">
                          E 410-415 - Pflanzengums
                        </div>
                        <div className="text-gray-600">
                          Johannisbrotkernmehl, Guakernmehl, etc.
                        </div>
                      </div>
                      <div className="bg-blue-50 p-3 rounded-lg">
                        <div className="font-bold text-blue-800">
                          E 440 - Pektine
                        </div>
                        <div className="text-gray-600">
                          Geliermittel aus Früchten
                        </div>
                      </div>
                      <div className="bg-blue-50 p-3 rounded-lg">
                        <div className="font-bold text-blue-800">
                          E 471-472 - Fettsäure-Ester
                        </div>
                        <div className="text-gray-600">
                          Wichtige Emulgatoren für Margarine, Pudding
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Geschmacksverstärker */}
                  <div className="border-b border-gray-200 pb-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-4">
                      Geschmacksverstärker
                    </h3>
                    <div className="bg-orange-50 p-4 rounded-lg mb-4">
                      <div className="text-sm text-orange-800 font-medium">
                        ⚠️ Hinweis:
                      </div>
                      <div className="text-sm text-orange-700">
                        Geschmacksverstärker sind umstritten, gesundheitlich
                        bedenklich und meist unnötig.
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                      <div className="bg-orange-100 p-2 rounded">
                        <span className="font-bold">E 620-623</span> -
                        Glutaminsäure und Salze
                      </div>
                      <div className="bg-green-100 p-2 rounded">
                        <span className="font-bold">E 627-632</span> -
                        Guanylate, Osinate (unbedenklich)
                      </div>
                    </div>
                  </div>

                  {/* Überzugsmittel */}
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-4">
                      Überzugsmittel
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 text-sm">
                      <div className="bg-yellow-50 p-2 rounded">
                        <span className="font-bold">E 901</span> - Bienenwachs
                      </div>
                      <div className="bg-yellow-50 p-2 rounded">
                        <span className="font-bold">E 902</span> -
                        Candelillawachs
                      </div>
                      <div className="bg-yellow-50 p-2 rounded">
                        <span className="font-bold">E 903</span> - Carnaubawachs
                      </div>
                      <div className="bg-yellow-50 p-2 rounded">
                        <span className="font-bold">E 905</span> - Schellack
                      </div>
                      <div className="bg-yellow-50 p-2 rounded">
                        <span className="font-bold">E 913</span> - Lanolin
                        (Schafwollfett)
                      </div>
                    </div>
                  </div>

                  {/* Guten Appetit */}
                  <div className="text-center py-6">
                    <div className="text-2xl font-bold text-primary-600 mb-2">
                      Guten Appetit!
                    </div>
                    <div className="text-sm text-gray-600">
                      Diese Liste dient zur Information über E-Nummern in
                      Lebensmitteln.
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

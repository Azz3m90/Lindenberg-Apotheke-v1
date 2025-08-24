import { NextSeo } from "next-seo";
import Layout from "../components/Layout";
import Link from "next/link";
import { Users, Heart, Calendar, Phone, Mail } from "lucide-react";

export default function Selbsthilfegruppen() {
  const groups = [
    {
      name: "Morbus Crohn / Colitis ulcerosa",
      href: "/selbsthilfegruppen/morbuscrohn",
      description: "Selbsthilfegruppe für Menschen mit chronisch-entzündlichen Darmerkrankungen",
      icon: <Heart className="w-8 h-8 text-primary-600" />,
    },
    {
      name: "Alle Gruppen",
      href: "/selbsthilfegruppen/gruppen", 
      description: "Übersicht über alle verfügbaren Selbsthilfegruppen in der Region",
      icon: <Users className="w-8 h-8 text-primary-600" />,
    },
    {
      name: "Ihre eigene Gruppe",
      href: "/selbsthilfegruppen/ihregruppe",
      description: "Informationen zur Gründung einer eigenen Selbsthilfegruppe",
      icon: <Calendar className="w-8 h-8 text-primary-600" />,
    },
  ];

  return (
    <Layout>
      <NextSeo
        title="Selbsthilfegruppen - Lindenberg-Apotheke Ilmenau"
        description="Informationen zu Selbsthilfegruppen in Ilmenau. Unterstützung und Gemeinschaft für Menschen mit verschiedenen Gesundheitsthemen."
        canonical="https://lindenberg-apotheke.de/selbsthilfegruppen"
        openGraph={{
          title: "Selbsthilfegruppen - Lindenberg-Apotheke Ilmenau",
          description: "Informationen zu Selbsthilfegruppen in Ilmenau. Unterstützung und Gemeinschaft für Menschen mit verschiedenen Gesundheitsthemen.",
        }}
      />

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="bg-primary-600 text-white py-16">
          <div className="container-custom">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Selbsthilfegruppen
              </h1>
              <p className="text-xl text-primary-100 leading-relaxed">
                Gemeinsam sind wir stark. Finden Sie Unterstützung und Gemeinschaft 
                in unseren Selbsthilfegruppen oder gründen Sie Ihre eigene Gruppe.
              </p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="py-16">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              {/* Introduction */}
              <div className="bg-white rounded-xl shadow-sm p-8 mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Was sind Selbsthilfegruppen?
                </h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Selbsthilfegruppen sind Zusammenschlüsse von Menschen, die von einem 
                    gemeinsamen Problem, einer chronischen Krankheit oder schwierigen 
                    Lebenssituation betroffen sind. In regelmäßigen Treffen tauschen sich 
                    die Mitglieder über ihre Erfahrungen aus und unterstützen sich gegenseitig.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    Die Lindenberg-Apotheke unterstützt verschiedene Selbsthilfegruppen 
                    in Ilmenau und Umgebung. Hier finden Sie Informationen zu bestehenden 
                    Gruppen und erfahren, wie Sie selbst eine Gruppe gründen können.
                  </p>
                </div>
              </div>

              {/* Groups Grid */}
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                {groups.map((group, index) => (
                  <Link
                    key={index}
                    href={group.href}
                    className="bg-white rounded-xl shadow-sm p-8 hover:shadow-lg transition-shadow duration-300 group"
                  >
                    <div className="text-center">
                      <div className="mx-auto mb-4 w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center group-hover:bg-primary-100 transition-colors duration-300">
                        {group.icon}
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors duration-300">
                        {group.name}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {group.description}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>

              {/* Contact Section */}
              <div className="bg-gradient-to-r from-primary-50 to-blue-50 rounded-xl p-8">
                <div className="text-center">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    Haben Sie Fragen?
                  </h2>
                  <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                    Gerne beraten wir Sie persönlich zu den verschiedenen 
                    Selbsthilfegruppen oder helfen bei der Gründung einer neuen Gruppe.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                      href="tel:+493677888888"
                      className="inline-flex items-center justify-center px-6 py-3 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors duration-300"
                    >
                      <Phone className="w-5 h-5 mr-2" />
                      03677 888888
                    </a>
                    <Link
                      href="/kontakt"
                      className="inline-flex items-center justify-center px-6 py-3 bg-white text-primary-600 font-medium rounded-lg border border-primary-600 hover:bg-primary-50 transition-colors duration-300"
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
      </div>
    </Layout>
  );
}
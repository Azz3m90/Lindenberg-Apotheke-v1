import { NextSeo } from "next-seo";
import Layout from "../../components/Layout";
import Link from "next/link";
import { Users, MapPin, Clock, Phone, Mail, ExternalLink } from "lucide-react";

export default function Gruppen() {
  const groups = [
    {
      name: "Morbus Crohn / Colitis ulcerosa",
      description: "Selbsthilfegruppe für Menschen mit chronisch-entzündlichen Darmerkrankungen",
      contact: "Ansprechpartner: Dr. Schmidt",
      phone: "03677 123456",
      email: "crohn-ilmenau@selbsthilfe.de",
      location: "Gemeindehaus Ilmenau",
      schedule: "Jeden 2. Dienstag im Monat, 19:00 Uhr",
      href: "/selbsthilfegruppen/morbuscrohn",
    },
    {
      name: "Diabetes Selbsthilfe",
      description: "Unterstützung und Erfahrungsaustausch für Menschen mit Diabetes",
      contact: "Ansprechpartnerin: Maria Müller",
      phone: "03677 234567",
      email: "diabetes-ilmenau@selbsthilfe.de",
      location: "Volkshochschule Ilmenau",
      schedule: "Jeden 1. Donnerstag im Monat, 18:30 Uhr",
    },
    {
      name: "Herzgruppe Ilmenau",
      description: "Für Menschen nach Herzinfarkt und mit Herz-Kreislauf-Erkrankungen",
      contact: "Ansprechpartner: Klaus Weber",
      phone: "03677 345678",
      email: "herz-ilmenau@selbsthilfe.de",
      location: "Sportzentrum Ilmenau",
      schedule: "Jeden Mittwoch, 17:00 Uhr",
    },
    {
      name: "Krebs-Selbsthilfegruppe",
      description: "Betroffene und Angehörige unterstützen sich gegenseitig",
      contact: "Ansprechpartnerin: Petra Fischer",
      phone: "03677 456789",
      email: "krebs-ilmenau@selbsthilfe.de", 
      location: "Klinikum Ilmenau",
      schedule: "Jeden 3. Montag im Monat, 18:00 Uhr",
    },
    {
      name: "Rheuma-Liga",
      description: "Hilfe zur Selbsthilfe bei rheumatischen Erkrankungen",
      contact: "Ansprechpartner: Hans Lehmann",
      phone: "03677 567890",
      email: "rheuma-ilmenau@selbsthilfe.de",
      location: "Begegnungsstätte Ilmenau",
      schedule: "Jeden 2. Freitag im Monat, 16:00 Uhr",
    },
  ];

  return (
    <Layout>
      <NextSeo
        title="Alle Selbsthilfegruppen - Lindenberg-Apotheke Ilmenau"
        description="Übersicht über alle verfügbaren Selbsthilfegruppen in Ilmenau und Umgebung. Kontakte, Termine und Treffpunkte."
        canonical="https://lindenberg-apotheke.de/selbsthilfegruppen/gruppen"
        openGraph={{
          title: "Alle Selbsthilfegruppen - Lindenberg-Apotheke Ilmenau",
          description: "Übersicht über alle verfügbaren Selbsthilfegruppen in Ilmenau und Umgebung. Kontakte, Termine und Treffpunkte.",
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
                <span>Alle Gruppen</span>
              </nav>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Alle Selbsthilfegruppen
              </h1>
              <p className="text-xl text-primary-100 leading-relaxed">
                Eine Übersicht über alle verfügbaren Selbsthilfegruppen in Ilmenau 
                und Umgebung mit Kontaktdaten und Terminen.
              </p>
            </div>
          </div>
        </div>

        {/* Groups List */}
        <div className="py-16">
          <div className="container-custom">
            <div className="max-w-5xl mx-auto">
              <div className="grid gap-8">
                {groups.map((group, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl shadow-sm p-8 hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="grid md:grid-cols-3 gap-6">
                      {/* Group Info */}
                      <div className="md:col-span-2">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">
                              {group.name}
                            </h3>
                            <p className="text-gray-600 leading-relaxed mb-4">
                              {group.description}
                            </p>
                          </div>
                          {group.href && (
                            <Link
                              href={group.href}
                              className="ml-4 p-2 text-primary-600 hover:text-primary-700 hover:bg-primary-50 rounded-lg transition-colors duration-300"
                              title="Mehr Informationen"
                            >
                              <ExternalLink className="w-5 h-5" />
                            </Link>
                          )}
                        </div>

                        {/* Contact & Schedule */}
                        <div className="space-y-2 text-sm">
                          <div className="flex items-center text-gray-600">
                            <Users className="w-4 h-4 mr-2 text-primary-600" />
                            {group.contact}
                          </div>
                          <div className="flex items-center text-gray-600">
                            <Clock className="w-4 h-4 mr-2 text-primary-600" />
                            {group.schedule}
                          </div>
                          <div className="flex items-center text-gray-600">
                            <MapPin className="w-4 h-4 mr-2 text-primary-600" />
                            {group.location}
                          </div>
                        </div>
                      </div>

                      {/* Contact Details */}
                      <div className="border-l md:pl-6">
                        <h4 className="font-medium text-gray-900 mb-3">Kontakt</h4>
                        <div className="space-y-3">
                          <a
                            href={`tel:${group.phone.replace(/\s/g, '')}`}
                            className="flex items-center text-gray-600 hover:text-primary-600 transition-colors duration-300"
                          >
                            <Phone className="w-4 h-4 mr-2" />
                            {group.phone}
                          </a>
                          <a
                            href={`mailto:${group.email}`}
                            className="flex items-center text-gray-600 hover:text-primary-600 transition-colors duration-300"
                          >
                            <Mail className="w-4 h-4 mr-2" />
                            {group.email}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Additional Info */}
              <div className="mt-12 bg-gradient-to-r from-primary-50 to-blue-50 rounded-xl p-8">
                <div className="text-center">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    Ihre Gruppe ist nicht dabei?
                  </h2>
                  <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                    Möchten Sie eine neue Selbsthilfegruppe gründen oder ist Ihre 
                    bestehende Gruppe nicht aufgeführt? Wir helfen gerne weiter.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                      href="/selbsthilfegruppen/ihregruppe"
                      className="inline-flex items-center justify-center px-6 py-3 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors duration-300"
                    >
                      Neue Gruppe gründen
                    </Link>
                    <a
                      href="tel:+493677888888"
                      className="inline-flex items-center justify-center px-6 py-3 bg-white text-primary-600 font-medium rounded-lg border border-primary-600 hover:bg-primary-50 transition-colors duration-300"
                    >
                      <Phone className="w-5 h-5 mr-2" />
                      Beratung: 03677 888888
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
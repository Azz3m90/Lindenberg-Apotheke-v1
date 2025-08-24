import { NextSeo } from "next-seo";
import Layout from "../../components/Layout";
import Link from "next/link";
import { Calendar, MapPin, Phone, Mail, Clock, Users, Heart, Info, FileText } from "lucide-react";

export default function MorbusCrohn() {
  const meetingInfo = {
    schedule: "Jeden 2. Dienstag im Monat",
    time: "19:00 - 21:00 Uhr",
    location: "Gemeindehaus Ilmenau",
    address: "Kirchgasse 12, 98693 Ilmenau",
    contact: "Dr. med. Schmidt",
    phone: "03677 123456",
    email: "crohn-ilmenau@selbsthilfe.de",
  };

  const topics = [
    "Erfahrungsaustausch über Therapiemöglichkeiten",
    "Umgang mit Schmerzen und Beschwerden",
    "Ernährung bei CED (Chronisch-entzündliche Darmerkrankungen)",
    "Berufliche und private Herausforderungen",
    "Neue Forschungsergebnisse und Behandlungsmethoden",
    "Entspannungstechniken und Stressbewältigung",
    "Angehörige und Partnerschaft",
    "Reisen mit CED",
  ];

  const resources = [
    {
      title: "Deutsche Morbus Crohn / Colitis ulcerosa Vereinigung (DCCV)",
      description: "Bundesweiter Verband mit Informationen und Unterstützung",
      link: "https://www.dccv.de",
    },
    {
      title: "Kompetenznetz Darmerkrankungen",
      description: "Wissenschaftliche Informationen zu chronisch-entzündlichen Darmerkrankungen",
      link: "https://www.kompetenznetz-ced.de",
    },
    {
      title: "CED-Hilfe Thüringen",
      description: "Landesverband für Menschen mit chronisch-entzündlichen Darmerkrankungen",
      link: "https://www.ced-hilfe-thueringen.de",
    },
  ];

  return (
    <Layout>
      <NextSeo
        title="Morbus Crohn Selbsthilfegruppe - Lindenberg-Apotheke Ilmenau"
        description="Selbsthilfegruppe für Menschen mit Morbus Crohn und Colitis ulcerosa in Ilmenau. Termine, Kontakt und Informationen zur Teilnahme."
        canonical="https://lindenberg-apotheke.de/selbsthilfegruppen/morbuscrohn"
        openGraph={{
          title: "Morbus Crohn Selbsthilfegruppe - Lindenberg-Apotheke Ilmenau",
          description: "Selbsthilfegruppe für Menschen mit Morbus Crohn und Colitis ulcerosa in Ilmenau. Termine, Kontakt und Informationen zur Teilnahme.",
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
                <span>Morbus Crohn</span>
              </nav>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Morbus Crohn / Colitis ulcerosa
              </h1>
              <p className="text-xl text-primary-100 leading-relaxed">
                Selbsthilfegruppe für Menschen mit chronisch-entzündlichen 
                Darmerkrankungen (CED) in Ilmenau und Umgebung.
              </p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="py-16">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              
              {/* About the Group */}
              <div className="bg-white rounded-xl shadow-sm p-8 mb-12">
                <div className="flex items-start mb-6">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mr-4">
                    <Heart className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                      Über unsere Gruppe
                    </h2>
                    <div className="prose prose-lg max-w-none">
                      <p className="text-gray-600 leading-relaxed mb-4">
                        Leben mit Morbus Crohn oder Colitis ulcerosa bringt viele 
                        Herausforderungen mit sich. In unserer Selbsthilfegruppe 
                        treffen sich Betroffene regelmäßig, um Erfahrungen auszutauschen, 
                        sich gegenseitig zu unterstützen und gemeinsam Wege im Umgang 
                        mit der Erkrankung zu finden.
                      </p>
                      <p className="text-gray-600 leading-relaxed">
                        Wir sind eine offene Gruppe - neue Mitglieder sind jederzeit 
                        herzlich willkommen. Ein Einstieg ist ohne Anmeldung möglich. 
                        Auch Angehörige können gerne an unseren Treffen teilnehmen.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Meeting Information */}
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="bg-white rounded-xl shadow-sm p-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                    <Calendar className="w-5 h-5 text-primary-600 mr-2" />
                    Termine & Treffpunkt
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <Clock className="w-5 h-5 text-gray-400 mr-3 mt-0.5" />
                      <div>
                        <p className="font-medium text-gray-900">{meetingInfo.schedule}</p>
                        <p className="text-sm text-gray-600">{meetingInfo.time}</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <MapPin className="w-5 h-5 text-gray-400 mr-3 mt-0.5" />
                      <div>
                        <p className="font-medium text-gray-900">{meetingInfo.location}</p>
                        <p className="text-sm text-gray-600">{meetingInfo.address}</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Users className="w-5 h-5 text-gray-400 mr-3 mt-0.5" />
                      <div>
                        <p className="font-medium text-gray-900">Offen für alle Betroffenen</p>
                        <p className="text-sm text-gray-600">Auch Angehörige willkommen</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-sm p-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                    <Phone className="w-5 h-5 text-primary-600 mr-2" />
                    Kontakt & Ansprechpartner
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <p className="font-medium text-gray-900 mb-1">Gruppenleitung</p>
                      <p className="text-gray-600">{meetingInfo.contact}</p>
                    </div>
                    <div className="space-y-2">
                      <a
                        href={`tel:${meetingInfo.phone.replace(/\s/g, '')}`}
                        className="flex items-center text-primary-600 hover:text-primary-700 transition-colors"
                      >
                        <Phone className="w-4 h-4 mr-2" />
                        {meetingInfo.phone}
                      </a>
                      <a
                        href={`mailto:${meetingInfo.email}`}
                        className="flex items-center text-primary-600 hover:text-primary-700 transition-colors"
                      >
                        <Mail className="w-4 h-4 mr-2" />
                        {meetingInfo.email}
                      </a>
                    </div>
                    <div className="pt-4 border-t">
                      <p className="text-sm text-gray-600">
                        Bei Fragen können Sie sich gerne vorab telefonisch oder 
                        per E-Mail melden. Ein Einstieg ist jederzeit möglich.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Topics & Activities */}
              <div className="bg-white rounded-xl shadow-sm p-8 mb-12">
                <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                  <FileText className="w-5 h-5 text-primary-600 mr-2" />
                  Unsere Themen
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {topics.map((topic, index) => (
                    <div key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-primary-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <p className="text-gray-600 text-sm">{topic}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Additional Resources */}
              <div className="bg-white rounded-xl shadow-sm p-8 mb-12">
                <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                  <Info className="w-5 h-5 text-primary-600 mr-2" />
                  Weiterführende Informationen
                </h3>
                <div className="space-y-4">
                  {resources.map((resource, index) => (
                    <div key={index} className="border-l-4 border-primary-600 pl-4">
                      <h4 className="font-medium text-gray-900 mb-1">{resource.title}</h4>
                      <p className="text-gray-600 text-sm mb-2">{resource.description}</p>
                      <a
                        href={resource.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary-600 hover:text-primary-700 text-sm font-medium"
                      >
                        Mehr erfahren →
                      </a>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="bg-gradient-to-r from-primary-50 to-blue-50 rounded-xl p-8 text-center">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Interesse an unserer Gruppe?
                </h2>
                <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                  Kommen Sie einfach zu einem unserer Treffen vorbei oder kontaktieren 
                  Sie uns vorab. Wir freuen uns auf neue Gesichter und den Austausch 
                  mit Ihnen.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href={`tel:${meetingInfo.phone.replace(/\s/g, '')}`}
                    className="inline-flex items-center justify-center px-6 py-3 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors duration-300"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Kontakt aufnehmen
                  </a>
                  <Link
                    href="/selbsthilfegruppen/gruppen"
                    className="inline-flex items-center justify-center px-6 py-3 bg-white text-primary-600 font-medium rounded-lg border border-primary-600 hover:bg-primary-50 transition-colors duration-300"
                  >
                    Alle Gruppen ansehen
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
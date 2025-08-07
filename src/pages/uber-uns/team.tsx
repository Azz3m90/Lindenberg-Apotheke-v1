import { NextSeo } from "next-seo";
import Layout from "../../components/Layout";
import Link from "next/link";
import {
  Award,
  Users,
  GraduationCap,
  Heart,
  Phone,
  Mail,
  BookOpen,
  Stethoscope,
  Clock,
} from "lucide-react";

const teamMembers = [
  {
    name: "Dr. H. Danz",
    role: "Apotheker & Inhaber",
    image: "/team-dr-danz.jpg",
    qualifications: [
      "Approbation als Apotheker (1995)",
      "Fachapotheker für Offizinpharmazie",
      "Fortbildung in klinischer Pharmazie",
    ],
    specialties: [
      "Medikationsanalyse",
      "Arzneimittelberatung",
      "Qualitätssicherung",
    ],
    description:
      "Seit der Gründung 1995 führt Dr. Danz die Lindenberg-Apotheke mit Leidenschaft für pharmazeutische Betreuung und moderne Apothekenführung.",
  },
  {
    name: "Petra Müller",
    role: "PTA & Stellvertretung",
    image: "/team-petra-mueller.jpg",
    qualifications: [
      "PTA-Ausbildung (1998)",
      "Fortbildung Kompressionstherapie",
      "Zertifikat Reisemedizin",
    ],
    specialties: ["Kompressionsstrümpfe", "Reiseberatung", "Blutdruckmessung"],
    description:
      "Mit über 25 Jahren Erfahrung ist Petra Müller Expertin für alle Gesundheitsfragen und leitet unser Service-Team.",
  },
  {
    name: "Sarah Wagner",
    role: "PTA & Laborverantwortliche",
    image: "/team-sarah-wagner.jpg",
    qualifications: [
      "PTA-Ausbildung (2015)",
      "Spezialisierung Laboranalytik",
      "Fortbildung Dermatologie",
    ],
    specialties: ["Laboranalysen", "Rezepturen", "Hautberatung"],
    description:
      "Sarah Wagner kümmert sich um unser modernes Labor und erstellt individuelle Rezepturen nach höchsten Qualitätsstandards.",
  },
  {
    name: "Michael Schmidt",
    role: "Pharmazeutisch-technischer Assistent",
    image: "/team-michael-schmidt.jpg",
    qualifications: [
      "PTA-Ausbildung (2020)",
      "Fortbildung Digitale Gesundheit",
      "App-Support Zertifikat",
    ],
    specialties: ["Digitale Services", "App-Betreuung", "Botendienst"],
    description:
      "Als jüngstes Teammitglied bringt Michael Schmidt frischen Wind und kümmert sich um unsere digitalen Angebote.",
  },
];

const teamStats = [
  { number: "4", label: "Teammitglieder", icon: Users },
  { number: "75+", label: "Jahre Gesamterfahrung", icon: Award },
  { number: "12", label: "Fortbildungen pro Jahr", icon: GraduationCap },
  { number: "100%", label: "Kundenzufriedenheit", icon: Heart },
];

export default function UeberUnsTeam() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    mainEntity: {
      "@type": "Pharmacy",
      name: "Lindenberg-Apotheke Ilmenau",
      description:
        "Unser erfahrenes Team aus Apotheker und PTA mit langjähriger Erfahrung und regelmäßigen Fortbildungen.",
      employee: teamMembers.map((member) => ({
        "@type": "Person",
        name: member.name,
        jobTitle: member.role,
        description: member.description,
      })),
    },
  };

  return (
    <Layout>
      <NextSeo
        title="Unser Team"
        description="Lernen Sie das Team der Lindenberg-Apotheke Ilmenau kennen: Dr. H. Danz und erfahrene PTA mit über 75 Jahren Gesamterfahrung in der pharmazeutischen Betreuung."
        canonical="https://www.lindenberg-apotheke.de/uber-uns/team/"
        openGraph={{
          title: "Unser Team | Lindenberg-Apotheke Ilmenau",
          description:
            "Dr. H. Danz & erfahrene PTA • 75+ Jahre Gesamterfahrung • Regelmäßige Fortbildungen • Persönliche Betreuung",
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-secondary-50 py-16 lg:py-24">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-800 rounded-full text-sm font-semibold mb-6">
              <Users className="w-4 h-4 mr-2" />
              Unser Team
            </div>
            <h1 className="heading-xl mb-6">
              Ihre <span className="text-primary-600">Gesundheitsexperten</span>
              <br />
              mit Herz und Verstand
            </h1>
            <p className="text-lead">
              Lernen Sie unser erfahrenes Team kennen – qualifizierte
              Fachkräfte, die sich täglich mit Leidenschaft für Ihre Gesundheit
              einsetzen.
            </p>
          </div>
        </div>
      </section>

      {/* Team Stats */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {teamStats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-primary-600" />
                  </div>
                  <div className="text-3xl font-bold text-primary-600 mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">
              Lernen Sie uns{" "}
              <span className="text-primary-600">persönlich</span> kennen
            </h2>
            <p className="text-lead max-w-3xl mx-auto">
              Unser Team vereint jahrzehntelange Erfahrung mit modernsten
              Kenntnissen und persönlicher Betreuung.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-xl overflow-hidden"
              >
                <div className="aspect-w-16 aspect-h-12">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover"
                    width={400}
                    height={256}
                  />
                </div>
                <div className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-1">
                        {member.name}
                      </h3>
                      <p className="text-primary-600 font-semibold">
                        {member.role}
                      </p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Stethoscope className="w-5 h-5 text-secondary-500" />
                    </div>
                  </div>

                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {member.description}
                  </p>

                  {/* Qualifications */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                      <GraduationCap className="w-4 h-4 mr-2 text-primary-500" />
                      Qualifikationen
                    </h4>
                    <ul className="space-y-2">
                      {member.qualifications.map((qualification, qIndex) => (
                        <li
                          key={qIndex}
                          className="text-sm text-gray-600 flex items-start"
                        >
                          <div className="w-1.5 h-1.5 bg-secondary-500 rounded-full mr-3 mt-2 flex-shrink-0" />
                          {qualification}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Specialties */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                      <BookOpen className="w-4 h-4 mr-2 text-primary-500" />
                      Fachgebiete
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {member.specialties.map((specialty, sIndex) => (
                        <span
                          key={sIndex}
                          className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="py-16 lg:py-24 bg-primary-600 text-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-lg mb-6 text-white">
                Unser Versprechen an Sie
              </h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <Clock className="w-6 h-6 mr-4 text-primary-200 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      Kontinuierliche Fortbildung
                    </h3>
                    <p className="text-primary-100">
                      Regelmäßige Schulungen und Zertifizierungen halten unser
                      Wissen auf dem neuesten Stand.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Heart className="w-6 h-6 mr-4 text-primary-200 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      Persönliche Betreuung
                    </h3>
                    <p className="text-primary-100">
                      Wir nehmen uns Zeit für Sie und Ihre individuellen
                      Gesundheitsfragen.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Award className="w-6 h-6 mr-4 text-primary-200 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      Höchste Qualität
                    </h3>
                    <p className="text-primary-100">
                      Zertifizierte Prozesse und strenge Qualitätskontrollen in
                      allen Bereichen.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <div className="text-center">
                <h3 className="text-2xl font-semibold mb-4">
                  Haben Sie Fragen?
                </h3>
                <p className="text-primary-100 mb-6">
                  Unser Team steht Ihnen gerne zur Verfügung – vor Ort,
                  telefonisch oder per E-Mail.
                </p>

                <div className="space-y-4">
                  <a
                    href="tel:+493677888888"
                    className="btn bg-white text-primary-600 hover:bg-primary-50 w-full"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    03677 888888
                  </a>

                  <Link
                    href="/kontakt"
                    className="btn border-2 border-white text-white hover:bg-white hover:text-primary-600 w-full"
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    Nachricht schreiben
                  </Link>
                </div>

                <div className="mt-6 text-sm text-primary-200">
                  <div className="flex items-center justify-center">
                    <Clock className="w-4 h-4 mr-2" />
                    Mo-Fr: 7-18 Uhr | Sa: 9-12 Uhr
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

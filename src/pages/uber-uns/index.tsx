import { NextSeo } from "next-seo";
import Layout from "../../components/Layout";
import Link from "next/link";
import {
  Heart,
  Users,
  Award,
  Clock,
  MapPin,
  Phone,
  Mail,
  Shield,
  Star,
  CheckCircle,
  Calendar,
  Building,
  Stethoscope,
  UserCheck,
} from "lucide-react";

const teamMembers = [
  {
    name: "Dr. Maria Lindenberg",
    role: "Apothekerin, Inhaberin",
    description:
      "Fachapothekerin für Klinische Pharmazie mit über 15 Jahren Erfahrung",
    image: "/team-maria-lindenberg.jpg",
    qualifications: ["Apothekerin", "Klinische Pharmazie", "Reisemedizin"],
  },
  {
    name: "Thomas Schmidt",
    role: "Pharmazieingenieur",
    description: "Experte für Arzneimittelberatung und Komplementärmedizin",
    image: "/team-thomas-schmidt.jpg",
    qualifications: ["PTA", "Homöopathie", "Ernährungsberatung"],
  },
  {
    name: "Sarah Weber",
    role: "Pharmazeutisch-technische Assistentin",
    description: "Spezialistin für Kompressionstherapie und Kosmetikberatung",
    image: "/team-sarah-weber.jpg",
    qualifications: ["PTA", "Kompression", "Kosmetik"],
  },
  {
    name: "Michael Braun",
    role: "Pharmazeutisch-technischer Assistent",
    description: "Fachmann für Diabetes-Beratung und Blutdruckmessung",
    image: "/team-michael-braun.jpg",
    qualifications: ["PTA", "Diabetes", "Blutdruck"],
  },
];

const values = [
  {
    icon: Heart,
    title: "Menschlichkeit",
    description:
      "Wir behandeln jeden Kunden mit Respekt, Empathie und individueller Aufmerksamkeit",
  },
  {
    icon: Shield,
    title: "Vertrauen",
    description:
      "Ihre Gesundheit ist unser oberstes Anliegen - diskret, zuverlässig und kompetent",
  },
  {
    icon: Award,
    title: "Qualität",
    description:
      "Höchste pharmazeutische Standards und kontinuische Weiterbildung unseres Teams",
  },
  {
    icon: Users,
    title: "Gemeinschaft",
    description:
      "Als Familienapotheke sind wir ein wichtiger Teil der Ilmenauer Gesundheitsversorgung",
  },
];

const services = [
  {
    title: "Arzneimittelberatung",
    description:
      "Kompetente Beratung zu Wirkungen, Nebenwirkungen und Wechselwirkungen",
    icon: Stethoscope,
  },
  {
    title: "Gesundheitschecks",
    description:
      "Blutdruckmessung, Blutzuckermessung und weitere Gesundheitsdienstleistungen",
    icon: Heart,
  },
  {
    title: "Reisemedizin",
    description:
      "Umfassende Beratung und Impfempfehlungen für Ihre sichere Reise",
    icon: MapPin,
  },
  {
    title: "Kompression & Orthopädie",
    description:
      "Individuelle Anpassung von Kompressionsstrümpfen und orthopädischen Hilfsmitteln",
    icon: UserCheck,
  },
];

const history = [
  {
    year: "1952",
    event: "Gründung der Lindenberg-Apotheke",
    description: "Ursprünglich als kleine Nachbarschaftsapotheke gegründet",
  },
  {
    year: "1987",
    event: "Modernisierung und Erweiterung",
    description:
      "Umbau zu einer modernen Apotheke mit erweiterten Serviceleistungen",
  },
  {
    year: "2010",
    event: "Übernahme durch Dr. Maria Lindenberg",
    description: "Neue Inhaberin bringt moderne pharmazeutische Konzepte ein",
  },
  {
    year: "2018",
    event: "Digitalisierung und Online-Services",
    description: "Einführung digitaler Lösungen für besseren Kundenservice",
  },
  {
    year: "2024",
    event: "Erweiterte Gesundheitsdienstleistungen",
    description: "Ausbau zu einem umfassenden Gesundheitszentrum",
  },
];

export default function UberUns() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Pharmacy",
    name: "Lindenberg-Apotheke Ilmenau",
    description:
      "Familienapotheke in Ilmenau seit 1952. Kompetente Arzneimittelberatung, Gesundheitschecks und pharmazeutische Dienstleistungen mit persönlicher Betreuung.",
    foundingDate: "1952",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Krankenhausstr. 26",
      addressLocality: "Ilmenau",
      postalCode: "98693",
      addressCountry: "DE",
    },
    telephone: "+49-3677-888888",
    email: "info@lindenberg-apotheke.de",
    url: "https://www.lindenberg-apotheke.de",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "07:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "09:00",
        closes: "12:00",
      },
    ],
    employee: [
      {
        "@type": "Person",
        name: "Dr. Maria Lindenberg",
        jobTitle: "Apothekerin, Inhaberin",
      },
    ],
  };

  return (
    <Layout>
      <NextSeo
        title="Über uns - Ihre Familienapotheke seit 1952"
        description="Die Lindenberg-Apotheke in Ilmenau ist seit 1952 Ihre vertrauensvolle Familienapotheke. Lernen Sie unser Team und unsere Werte kennen - Gesundheit mit Herz und Kompetenz."
        canonical="https://www.lindenberg-apotheke.de/uber-uns/"
        openGraph={{
          title: "Über uns | Lindenberg-Apotheke Ilmenau",
          description:
            "Familienapotheke seit 1952 • Kompetentes Team • Persönliche Betreuung • Moderne Pharmazie • Herz für Ilmenau",
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-secondary-50 py-16 lg:py-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <div className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-800 rounded-full text-sm font-semibold mb-6">
                  <Heart className="w-4 h-4 mr-2" />
                  Seit 1952
                </div>
                <h1 className="heading-xl mb-6">
                  <span className="text-primary-600">
                    Ihre Familienapotheke
                  </span>
                  <br />
                  im Herzen Ilmenaus
                </h1>
                <p className="text-lead">
                  Seit über 70 Jahren sind wir Ihr vertrauensvoller Partner in
                  allen Gesundheitsfragen. Mit Herzlichkeit, Kompetenz und
                  modernster Pharmazie begleiten wir Sie und Ihre Familie.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-4">
                  Unsere Stärken:
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 mr-3 text-secondary-500" />
                    <span className="text-sm">Über 70 Jahre Erfahrung</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 mr-3 text-secondary-500" />
                    <span className="text-sm">Persönliche Betreuung</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 mr-3 text-secondary-500" />
                    <span className="text-sm">Modernste Technik</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 mr-3 text-secondary-500" />
                    <span className="text-sm">Umfassende Services</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/leistungen" className="btn btn-primary">
                  <Star className="w-5 h-5 mr-2" />
                  Unsere Leistungen
                </Link>
                <Link href="/kontakt" className="btn btn-secondary">
                  <Phone className="w-5 h-5 mr-2" />
                  Kontakt aufnehmen
                </Link>
              </div>
            </div>

            <div className="relative">
              <img
                src="/about-pharmacy-exterior.svg"
                alt="Lindenberg-Apotheke Ilmenau - Außenansicht"
                className="w-full h-auto rounded-2xl shadow-2xl"
                width={600}
                height={400}
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-xl border border-gray-100">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-600 mb-1">
                    70+
                  </div>
                  <div className="text-sm text-gray-600">Jahre Erfahrung</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 lg:py-24">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">
              Unsere <span className="text-primary-600">Werte</span>
            </h2>
            <p className="text-lead max-w-3xl mx-auto">
              Diese Grundsätze leiten uns jeden Tag bei der Betreuung unserer
              Kunden und prägen unser Handeln seit der Gründung.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-primary-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">
              Unser <span className="text-primary-600">Team</span>
            </h2>
            <p className="text-lead max-w-3xl mx-auto">
              Lernen Sie die Menschen kennen, die sich täglich um Ihre
              Gesundheit kümmern. Unser erfahrenes Team steht Ihnen mit Rat und
              Tat zur Seite.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="aspect-square bg-gray-200 relative">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-primary-600 text-sm font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-gray-600 text-sm mb-4">
                    {member.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {member.qualifications.map((qualification, qIndex) => (
                      <span
                        key={qIndex}
                        className="px-2 py-1 bg-primary-100 text-primary-800 text-xs rounded-full"
                      >
                        {qualification}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 lg:py-24">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">
              Unsere <span className="text-primary-600">Kernkompetenzen</span>
            </h2>
            <p className="text-lead max-w-3xl mx-auto">
              Als moderne Familienapotheke bieten wir Ihnen weit mehr als nur
              Medikamente. Entdecken Sie unser breites Spektrum an
              Gesundheitsdienstleistungen.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <IconComponent className="w-6 h-6 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Link href="/leistungen" className="btn btn-primary text-lg">
              <Star className="w-5 h-5 mr-2" />
              Alle Leistungen entdecken
            </Link>
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">
              Unsere <span className="text-primary-600">Geschichte</span>
            </h2>
            <p className="text-lead max-w-3xl mx-auto">
              Von der kleinen Nachbarschaftsapotheke zum modernen
              Gesundheitszentrum - eine Reise durch über 70 Jahre
              Apothekengeschichte in Ilmenau.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {history.map((item, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 w-20 text-right mr-8">
                    <span className="text-xl font-bold text-primary-600">
                      {item.year}
                    </span>
                  </div>
                  <div className="flex-shrink-0 w-4 h-4 bg-primary-600 rounded-full mt-2 mr-8"></div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {item.event}
                    </h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Werden Sie Teil unserer Apotheken-Familie
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
            Seit 1952 begleiten wir Familien in Ilmenau und Umgebung bei allen
            Gesundheitsfragen. Lassen Sie auch uns Ihr vertrauensvoller Partner
            sein.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/kontakt"
              className="btn bg-white text-primary-700 hover:bg-gray-100 text-lg"
            >
              <Phone className="w-5 h-5 mr-2" />
              Kontakt aufnehmen
            </Link>
            <Link href="/leistungen" className="btn btn-secondary text-lg">
              <Star className="w-5 h-5 mr-2" />
              Unsere Leistungen
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}

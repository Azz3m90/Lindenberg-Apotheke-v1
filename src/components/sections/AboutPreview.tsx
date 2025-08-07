import Link from "next/link";
import {
  Users,
  Award,
  MapPin,
  Zap,
  ChevronRight,
  Calendar,
} from "lucide-react";

export default function AboutPreview() {
  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-secondary-100 text-secondary-800 rounded-full text-sm font-semibold mb-4">
                <Award className="w-4 h-4 mr-2" />
                Über uns
              </div>
              <h2 className="heading-lg mb-6">
                Ihre <span className="text-primary-600">vertrauensvolle</span>
                <br />
                Gesundheitspartner seit 1995
              </h2>
              <p className="text-lead">
                Als moderne Apotheke im Ärztehaus der Ilm-Kreis-Kliniken
                verbinden wir traditionelle Apothekenkunst mit modernster
                Technik und persönlicher Betreuung.
              </p>
            </div>

            {/* Key Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                  <Users className="w-5 h-5 text-primary-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    Erfahrenes Team
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Dr. H. Danz und sein qualifiziertes Apothekerteam
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    Ideale Lage
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Im Ärztehaus vor den Ilm-Kreis-Kliniken
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                  <Zap className="w-5 h-5 text-primary-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    Moderne Technik
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Pneumatisches Rohrsystem und modernste Laborausstattung
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-primary-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    Flexible Zeiten
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Mo-Fr 7-18 Uhr, Sa 9-12 Uhr
                  </p>
                </div>
              </div>
            </div>

            {/* Unique Selling Points */}
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Was uns besonders macht:
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-secondary-500 rounded-full mr-3" />
                  <span>
                    <strong>Individuelle Kompressionsstrumpf-Anmessung</strong>{" "}
                    statt Standardgrößen
                  </span>
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-secondary-500 rounded-full mr-3" />
                  <span>
                    <strong>Modernste pneumatische Rohrpost</strong> für
                    schnelle Medikamentenausgabe
                  </span>
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-secondary-500 rounded-full mr-3" />
                  <span>
                    <strong>Kostenlose Unterstützung</strong> für
                    Selbsthilfegruppen
                  </span>
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-secondary-500 rounded-full mr-3" />
                  <span>
                    <strong>Eigene Medikamenten-App</strong> für iPhone und
                    Android
                  </span>
                </li>
              </ul>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/uber-uns/apotheke" className="btn btn-primary">
                Mehr über uns erfahren
                <ChevronRight className="w-4 h-4 ml-2" />
              </Link>
              <Link href="/uber-uns/anfahrt" className="btn btn-secondary">
                <MapPin className="w-4 h-4 mr-2" />
                Anfahrt & Kontakt
              </Link>
            </div>
          </div>

          {/* Right Content - Images */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              {/* Main Image */}
              <div className="col-span-2">
                <img
                  src="/about-pharmacy-exterior.svg"
                  alt="Lindenberg-Apotheke im Ärztehaus Ilmenau"
                  className="w-full h-64 object-cover rounded-xl shadow-lg"
                  width={600}
                  height={256}
                />
              </div>

              {/* Secondary Images */}
              <div>
                <img
                  src="/about-interior-dispensing.svg"
                  alt="Moderne Offizin der Lindenberg-Apotheke"
                  className="w-full h-32 object-cover rounded-lg shadow-md"
                  width={300}
                  height={128}
                />
              </div>
              <div>
                <img
                  src="/about-pneumatic-system.svg"
                  alt="Modernste Rohrpost-Technik"
                  className="w-full h-32 object-cover rounded-lg shadow-md"
                  width={300}
                  height={128}
                />
              </div>
            </div>

            {/* Floating Stats Card */}
            <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-xl shadow-xl border border-gray-100 max-w-xs">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-1">
                  30+
                </div>
                <div className="text-sm text-gray-600 mb-3">
                  Jahre Erfahrung
                </div>
                <div className="flex items-center justify-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className="w-4 h-4 bg-yellow-400 rounded-full"
                    />
                  ))}
                </div>
                <div className="text-xs text-gray-500 mt-1">
                  Vertrauenswürdig & Kompetent
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

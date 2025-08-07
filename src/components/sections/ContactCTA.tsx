import Link from "next/link";
import {
  Phone,
  MapPin,
  Clock,
  Mail,
  Calendar,
  MessageCircle,
  Car,
  ChevronRight,
} from "lucide-react";

export default function ContactCTA() {
  return (
    <section className="py-16 lg:py-24 bg-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1' fill-rule='evenodd'%3E%3Cpath d='M20 20c0 11.046-8.954 20-20 20s20-8.954 20-20S11.046 0 0 0s20 8.954 20 20zm10 0c0-11.046 8.954-20 20-20s20 8.954 20 20-8.954 20-20 20-20-8.954-20-20z'/%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="relative container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Wir sind für Sie da
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Haben Sie Fragen zu Medikamenten, brauchen eine persönliche Beratung
            oder möchten einen Termin vereinbaren? Kontaktieren Sie uns – wir
            helfen gerne weiter!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Phone Contact */}
          <div className="bg-primary-900 rounded-2xl p-8 text-center group hover:bg-primary-800 transition-all duration-300">
            <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <Phone className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-semibold mb-4">Anrufen</h3>
            <p className="text-gray-300 mb-6">
              Sofortige Beratung und schnelle Hilfe bei allen Fragen
            </p>
            <a
              href="tel:+493677888888"
              className="btn btn-primary w-full text-lg"
            >
              03677 888888
            </a>
            <div className="mt-4 text-sm text-gray-400">
              Mo-Fr: 7-18 Uhr • Sa: 9-12 Uhr
            </div>
          </div>

          {/* Visit Us */}
          <div className="bg-secondary-900 rounded-2xl p-8 text-center group hover:bg-secondary-800 transition-all duration-300">
            <div className="w-16 h-16 bg-secondary-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <MapPin className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-semibold mb-4">Besuchen</h3>
            <p className="text-gray-300 mb-6">
              Persönliche Beratung vor Ort im Ärztehaus Ilmenau
            </p>
            <Link
              href="/uber-uns/anfahrt"
              className="btn btn-secondary w-full text-lg"
            >
              <Car className="w-4 h-4 mr-2" />
              Anfahrt & Parken
            </Link>
            <div className="mt-4 text-sm text-gray-400">
              Krankenhausstr. 26, 98693 Ilmenau
            </div>
          </div>

          {/* Book Appointment */}
          <div className="bg-yellow-600 rounded-2xl p-8 text-center group hover:bg-yellow-500 transition-all duration-300">
            <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <Calendar className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-gray-900">
              Termin buchen
            </h3>
            <p className="text-gray-800 mb-6">
              Individuelle Beratungstermine ohne Wartezeit
            </p>
            <Link
              href="/termin"
              className="btn bg-white text-yellow-600 hover:bg-gray-100 w-full text-lg"
            >
              <Calendar className="w-4 h-4 mr-2" />
              Termin vereinbaren
            </Link>
            <div className="mt-4 text-sm text-gray-700">
              Kompressionsstrümpfe • Reiseberatung
            </div>
          </div>
        </div>

        {/* Additional Contact Options */}
        <div className="bg-gray-800 rounded-2xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Email Contact */}
            <div>
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <Mail className="w-5 h-5 mr-3 text-primary-400" />
                E-Mail Kontakt
              </h3>
              <p className="text-gray-300 mb-4">
                Schreiben Sie uns für allgemeine Anfragen oder Rückfragen zu
                Bestellungen.
              </p>
              <a
                href="mailto:apo@lindenberg-apotheke.de"
                className="inline-flex items-center text-primary-400 hover:text-primary-300 font-medium"
              >
                apo@lindenberg-apotheke.de
                <ChevronRight className="w-4 h-4 ml-1" />
              </a>
            </div>

            {/* Online Services */}
            <div>
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <MessageCircle className="w-5 h-5 mr-3 text-secondary-400" />
                Online Services
              </h3>
              <p className="text-gray-300 mb-4">
                Nutzen Sie unsere digitalen Services für mehr Komfort.
              </p>
              <div className="space-y-2">
                <Link
                  href="/kontakt"
                  className="block text-secondary-400 hover:text-secondary-300 font-medium"
                >
                  → Kontaktformular
                </Link>
                <Link
                  href="/app"
                  className="block text-secondary-400 hover:text-secondary-300 font-medium"
                >
                  → Rezept per App vorbestellen
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Opening Hours Highlight */}
        <div className="mt-12 text-center">
          <div className="inline-block bg-white bg-opacity-10 rounded-xl p-6 backdrop-blur-sm">
            <div className="flex items-center justify-center mb-3">
              <Clock className="w-6 h-6 mr-3 text-primary-400" />
              <h3 className="text-xl font-semibold">Aktuelle Öffnungszeiten</h3>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm">
              <div>
                <div className="font-medium">Mo - Fr</div>
                <div className="text-gray-300">07:00 - 18:00</div>
              </div>
              <div>
                <div className="font-medium">Samstag</div>
                <div className="text-gray-300">09:00 - 12:00</div>
              </div>
              <div>
                <div className="font-medium">Sonntag</div>
                <div className="text-gray-400">Geschlossen</div>
              </div>
            </div>
            <div className="mt-4 text-xs text-gray-400">
              Änderungen an Feiertagen werden rechtzeitig bekannt gegeben
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

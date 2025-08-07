import Link from "next/link";
import {
  Phone,
  Calendar,
  MapPin,
  Clock,
  Star,
  ChevronRight,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-primary-50 via-white to-secondary-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23dc2626' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="relative container-custom py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-800 rounded-full text-sm font-semibold">
              <Star className="w-4 h-4 mr-2 fill-current" />
              Ihre Apotheke im Ärztehaus seit 1995
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="heading-xl">
                <span className="text-primary-600">Lindenberg-Apotheke</span>
                <br />
                <span className="text-gray-900">Ilmenau</span>
              </h1>
              <p className="text-lead max-w-xl">
                Ihre <strong>moderne Apotheke im Ärztehaus</strong> – Keine
                Wartezeiten, individuelle Beratung und modernste Technik für
                Ihre Gesundheit.
              </p>
            </div>

            {/* Key Benefits */}
            <div className="space-y-3">
              <div className="flex items-center text-gray-700">
                <div className="w-2 h-2 bg-secondary-500 rounded-full mr-3" />
                <span className="font-medium">
                  Blutdruckmessung ohne Wartezeit
                </span>
              </div>
              <div className="flex items-center text-gray-700">
                <div className="w-2 h-2 bg-secondary-500 rounded-full mr-3" />
                <span className="font-medium">
                  Individuelle Kompressionsstrumpf-Anpassung
                </span>
              </div>
              <div className="flex items-center text-gray-700">
                <div className="w-2 h-2 bg-secondary-500 rounded-full mr-3" />
                <span className="font-medium">
                  Modernste Medikamenten-App für iPhone & Android
                </span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:+493677888888"
                className="btn btn-primary flex items-center justify-center text-lg px-8 py-4"
              >
                <Phone className="w-5 h-5 mr-2" />
                Jetzt anrufen
              </a>
              <Link
                href="/termin"
                className="btn btn-secondary flex items-center justify-center text-lg px-8 py-4"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Termin buchen
              </Link>
            </div>

            {/* Quick Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-gray-200">
              <div className="flex items-center text-gray-600">
                <Clock className="w-5 h-5 mr-2 text-primary-500" />
                <div>
                  <div className="font-medium text-gray-900">
                    Öffnungszeiten
                  </div>
                  <div className="text-sm">Mo-Fr: 7-18 Uhr</div>
                </div>
              </div>
              <div className="flex items-center text-gray-600">
                <MapPin className="w-5 h-5 mr-2 text-primary-500" />
                <div>
                  <div className="font-medium text-gray-900">Adresse</div>
                  <div className="text-sm">Krankenhausstr. 26</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src="/logo.png"
                alt="Lindenberg-Apotheke Ilmenau - Logo"
                className="w-full h-auto rounded-2xl shadow-2xl object-contain"
                style={{ minHeight: "300px" }}
              />

              {/* Floating Card */}
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl border border-gray-100 max-w-xs">
                <div className="flex items-center space-x-3">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                      <Phone className="w-6 h-6 text-primary-600" />
                    </div>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-900">
                      Direkte Hotline
                    </div>
                    <div className="text-lg font-bold text-primary-600">
                      03677 888888
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Background Decoration */}
            <div className="absolute top-4 right-4 w-32 h-32 bg-secondary-200 rounded-full opacity-20 -z-10" />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary-200 rounded-full opacity-20 -z-10" />
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          className="w-full h-12 text-white"
          viewBox="0 0 1440 48"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0,32L48,37.3C96,43,192,53,288,48C384,43,480,21,576,16C672,11,768,21,864,26.7C960,32,1056,32,1152,26.7C1248,21,1344,11,1392,5.3L1440,0V48H1392C1344,48,1248,48,1152,48C1056,48,960,48,864,48C768,48,672,48,576,48C480,48,384,48,288,48C192,48,96,48,48,48H0V32Z" />
        </svg>
      </div>
    </section>
  );
}

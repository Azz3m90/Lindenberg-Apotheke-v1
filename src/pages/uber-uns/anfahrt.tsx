import { NextSeo } from "next-seo";
import Layout from "../../components/Layout";
import Link from "next/link";
import {
  MapPin,
  Car,
  Bus,
  Navigation,
  Clock,
  Phone,
  User,
  Building2,
  Train,
  Bike,
  Footprints,
  ParkingCircle,
  AlertCircle,
} from "lucide-react";

const directions = [
  {
    method: "Mit dem Auto",
    icon: Car,
    color: "primary",
    routes: [
      {
        from: "Aus Erfurt (A71)",
        description:
          "A71 bis Ausfahrt Ilmenau-Ost → B87 Richtung Ilmenau → Krankenhausstraße",
        duration: "45 Min",
      },
      {
        from: "Aus Suhl (A73/B4)",
        description: "B4 Richtung Ilmenau → Stadtmitte → Krankenhausstraße",
        duration: "25 Min",
      },
      {
        from: "Aus Weimar (B85)",
        description: "B85 über Stadtilm → B87 nach Ilmenau → Krankenhausstraße",
        duration: "35 Min",
      },
    ],
    additionalInfo: "Kostenlose Parkplätze direkt vor der Apotheke verfügbar",
  },
  {
    method: "Mit Bus & Bahn",
    icon: Bus,
    color: "secondary",
    routes: [
      {
        from: "Erfurt Hauptbahnhof",
        description:
          "RE 50 nach Ilmenau → Buslinien 300, 301 bis Haltestelle 'Krankenhaus'",
        duration: "1h 15min",
      },
      {
        from: "Ilmenau Bahnhof",
        description:
          "Buslinien 300, 301, 302 bis Haltestelle 'Krankenhaus' (3 Stationen)",
        duration: "8 Min",
      },
      {
        from: "TU Ilmenau",
        description:
          "Buslinie 300 Richtung Krankenhaus → Haltestelle 'Krankenhaus'",
        duration: "12 Min",
      },
    ],
    additionalInfo:
      "Bushaltestelle 'Krankenhaus' nur 100m von der Apotheke entfernt",
  },
];

const landmarks = [
  {
    name: "Ilm-Kreis-Kliniken",
    icon: Building2,
    description: "Direkt gegenüber unserer Apotheke",
    distance: "50m",
  },
  {
    name: "Ärztehaus",
    icon: Building2,
    description: "Unsere Apotheke befindet sich im Erdgeschoss",
    distance: "0m",
  },
  {
    name: "Bushaltestelle Krankenhaus",
    icon: Bus,
    description: "Linien 300, 301, 302",
    distance: "100m",
  },
  {
    name: "Stadtzentrum Ilmenau",
    icon: MapPin,
    description: "Fußgängerzone und Marktplatz",
    distance: "1.2km",
  },
];

export default function UeberUnsAnfahrt() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Pharmacy",
    name: "Lindenberg-Apotheke Ilmenau",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Krankenhausstr. 26",
      addressLocality: "Ilmenau",
      postalCode: "98693",
      addressCountry: "DE",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 50.6874,
      longitude: 10.9147,
    },
    telephone: "+49-3677-888888",
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
  };

  return (
    <Layout>
      <NextSeo
        title="Anfahrt & Standort"
        description="So finden Sie uns: Krankenhausstr. 26, 98693 Ilmenau im Ärztehaus. Anfahrt mit Auto, Bus & Bahn. Kostenlose Parkplätze. ☎ 03677 888888"
        canonical="https://www.lindenberg-apotheke.de/uber-uns/anfahrt/"
        openGraph={{
          title: "Anfahrt & Standort | Lindenberg-Apotheke Ilmenau",
          description:
            "Krankenhausstr. 26 • Ärztehaus • Kostenlose Parkplätze • ÖPNV-Anbindung • Barrierefrei",
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
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-800 rounded-full text-sm font-semibold mb-6">
                <Navigation className="w-4 h-4 mr-2" />
                Anfahrt & Standort
              </div>
              <h1 className="heading-xl mb-6">
                So finden Sie <span className="text-primary-600">uns</span>
                <br />
                ganz einfach
              </h1>
              <p className="text-lead mb-8">
                Mitten im Gesundheitszentrum von Ilmenau – direkt vor den
                Ilm-Kreis-Kliniken und optimal erreichbar.
              </p>

              {/* Quick Contact */}
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <div className="space-y-4">
                  <div className="flex items-center">
                    <MapPin className="w-5 h-5 mr-3 text-primary-500" />
                    <div>
                      <div className="font-semibold text-gray-900">
                        Krankenhausstr. 26
                      </div>
                      <div className="text-gray-600">98693 Ilmenau</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 mr-3 text-secondary-500" />
                    <a
                      href="tel:+493677888888"
                      className="font-semibold text-secondary-600 hover:text-secondary-700"
                    >
                      03677 888888
                    </a>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 mr-3 text-gray-400" />
                    <span className="text-gray-600">
                      Mo-Fr: 7-18 Uhr | Sa: 9-12 Uhr
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              {/* Placeholder for map - replace with actual map integration */}
              <div className="bg-gray-200 rounded-2xl h-96 flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <MapPin className="w-12 h-12 mx-auto mb-4" />
                  <p className="font-semibold">Interaktive Karte</p>
                  <p className="text-sm">Krankenhausstr. 26, 98693 Ilmenau</p>
                  <a
                    href="https://maps.google.com/?q=Krankenhausstr.+26,+98693+Ilmenau"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-3 btn btn-primary text-sm"
                  >
                    In Google Maps öffnen
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Directions Section */}
      <section className="py-16 lg:py-24">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">
              <span className="text-primary-600">Anfahrt</span> mit
              verschiedenen Verkehrsmitteln
            </h2>
            <p className="text-lead max-w-3xl mx-auto">
              Ob mit dem Auto, öffentlichen Verkehrsmitteln oder zu Fuß – wir
              sind gut erreichbar.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {directions.map((direction, index) => {
              const IconComponent = direction.icon;
              const colorClass =
                direction.color === "primary" ? "primary" : "secondary";

              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden"
                >
                  <div className={`bg-${colorClass}-600 text-white px-8 py-6`}>
                    <div className="flex items-center">
                      <IconComponent className="w-8 h-8 mr-4" />
                      <h3 className="text-2xl font-bold">{direction.method}</h3>
                    </div>
                  </div>

                  <div className="p-8">
                    <div className="space-y-6">
                      {direction.routes.map((route, routeIndex) => (
                        <div
                          key={routeIndex}
                          className="border-b border-gray-100 pb-4 last:border-b-0 last:pb-0"
                        >
                          <div className="flex justify-between items-start mb-2">
                            <h4 className="font-semibold text-gray-900">
                              {route.from}
                            </h4>
                            <span
                              className={`px-3 py-1 bg-${colorClass}-100 text-${colorClass}-700 rounded-full text-sm font-medium`}
                            >
                              {route.duration}
                            </span>
                          </div>
                          <p className="text-gray-600 text-sm leading-relaxed">
                            {route.description}
                          </p>
                        </div>
                      ))}
                    </div>

                    <div className={`mt-6 p-4 bg-${colorClass}-50 rounded-lg`}>
                      <p
                        className={`text-${colorClass}-700 text-sm font-medium`}
                      >
                        💡 {direction.additionalInfo}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Landmarks & Parking */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Landmarks */}
            <div>
              <h2 className="heading-md mb-8">
                Orientierungspunkte &{" "}
                <span className="text-primary-600">Umgebung</span>
              </h2>
              <div className="space-y-4">
                {landmarks.map((landmark, index) => {
                  const IconComponent = landmark.icon;
                  return (
                    <div
                      key={index}
                      className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-sm"
                    >
                      <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-5 h-5 text-primary-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">
                          {landmark.name}
                        </h3>
                        <p className="text-gray-600 text-sm">
                          {landmark.description}
                        </p>
                        <span className="text-primary-600 text-xs font-medium">
                          {landmark.distance} entfernt
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Parking & Accessibility */}
            <div>
              <h2 className="heading-md mb-8">
                Parkplätze &{" "}
                <span className="text-secondary-600">Barrierefreiheit</span>
              </h2>

              <div className="space-y-6">
                {/* Parking */}
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="flex items-center mb-4">
                    <ParkingCircle className="w-6 h-6 mr-3 text-secondary-500" />
                    <h3 className="text-xl font-semibold text-gray-900">
                      Parkplätze
                    </h3>
                  </div>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-secondary-500 rounded-full mr-3" />
                      <span>Kostenlose Parkplätze direkt vor der Apotheke</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-secondary-500 rounded-full mr-3" />
                      <span>Behindertenparkplätze verfügbar</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-secondary-500 rounded-full mr-3" />
                      <span>Zusätzliche Parkplätze am Krankenhaus</span>
                    </div>
                  </div>
                </div>

                {/* Accessibility */}
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="flex items-center mb-4">
                    <User className="w-6 h-6 mr-3 text-blue-500" />
                    <h3 className="text-xl font-semibold text-gray-900">
                      Barrierefreiheit
                    </h3>
                  </div>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3" />
                      <span>Rollstuhlgerechter Zugang</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3" />
                      <span>Aufzug im Ärztehaus vorhanden</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3" />
                      <span>Breite Eingänge und Gänge</span>
                    </div>
                  </div>
                </div>

                {/* Alternative Transport */}
                <div className="bg-primary-50 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Alternative Anreise
                  </h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center">
                      <Bike className="w-4 h-4 mr-3 text-primary-500" />
                      <span>Fahrradstellplätze vor dem Gebäude</span>
                    </div>
                    <div className="flex items-center">
                      <Footprints className="w-4 h-4 mr-3 text-primary-500" />
                      <span>10 Min zu Fuß vom Stadtzentrum</span>
                    </div>
                    <div className="flex items-center">
                      <Train className="w-4 h-4 mr-3 text-primary-500" />
                      <span>Bahnhof Ilmenau: 2km entfernt</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-16 lg:py-20 bg-primary-600 text-white">
        <div className="container-custom text-center">
          <div className="max-w-3xl mx-auto">
            <AlertCircle className="w-16 h-16 mx-auto mb-6 text-primary-200" />
            <h2 className="heading-lg mb-6 text-white">
              Sie finden uns nicht?
            </h2>
            <p className="text-primary-100 mb-8 text-lg">
              Kein Problem! Rufen Sie uns einfach an – wir helfen Ihnen gerne
              bei der Wegbeschreibung.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="tel:+493677888888"
                className="btn bg-white text-primary-600 hover:bg-primary-50 text-lg px-8 py-3"
              >
                <Phone className="w-5 h-5 mr-2" />
                03677 888888
              </a>

              <Link
                href="/kontakt"
                className="btn border-2 border-white text-white hover:bg-white hover:text-primary-600 text-lg px-8 py-3"
              >
                Nachricht senden
              </Link>
            </div>

            <div className="mt-8 text-primary-200">
              <div className="flex items-center justify-center space-x-6 text-sm">
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-2" />
                  Mo-Fr: 7:00-18:00 Uhr
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-2" />
                  Sa: 9:00-12:00 Uhr
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  Instagram,
  Smartphone,
  AlertCircle,
  Shield,
  CheckCircle,
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const services = [
    "Blutdruckmessung",
    "Kompressionsstrümpfe",
    "Reiseberatung",
    "Verleih-Service",
    "Hausapotheke Check",
  ];

  const quickLinks = [
    { name: "Über uns", href: "/uber-uns" },
    { name: "Leistungen", href: "/leistungen" },
    { name: "Notdienst", href: "/notdienst" },
    { name: "Kontakt", href: "/kontakt" },
    { name: "Apotheken-App", href: "/app" },
    {
      name: "Selbsthilfegruppen",
      href: "/selbsthilfegruppen",
      // submenu: [
      //   { name: "Gruppen", href: "/selbsthilfegruppen/gruppen" },
      //   { name: "Ihre Gruppe", href: "/selbsthilfegruppen/ihregruppe" },
      //   { name: "Morbus Crohn", href: "/selbsthilfegruppen/morbuscrohn" },
      // ],
    },
  ];

  const legalLinks = [
    { name: "Impressum", href: "/impressum" },
    { name: "Datenschutz", href: "/datenschutz" },
    { name: "AGBs", href: "/agb" },
    { name: "Widerrufsrecht", href: "/widerrufsrecht" },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Emergency Service Strip */}
      <div className="bg-red-600 py-4">
        <div className="container-custom">
          <div className="flex items-center justify-center text-center">
            <AlertCircle className="w-5 h-5 mr-2" />
            <span className="font-semibold">
              Notdienst-Hotline: 116 117 | Aktuelle Notdienste:
            </span>
            <Link
              href="/notdienst"
              className="ml-2 underline hover:no-underline font-semibold"
            >
              Hier prüfen →
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-bold mb-2">Lindenberg-Apotheke</h3>
              <p className="text-gray-300 text-sm">
                Ihre moderne Apotheke im Ärztehaus Ilmenau
              </p>
            </div>

            <div className="space-y-3 text-sm">
              <div className="flex items-start">
                <MapPin className="w-4 h-4 mr-2 mt-0.5 text-primary-400" />
                <div>
                  <p>Krankenhausstr. 26</p>
                  <p>98693 Ilmenau</p>
                </div>
              </div>

              <a
                href="tel:+493677888888"
                className="flex items-center hover:text-primary-400 transition-colors"
              >
                <Phone className="w-4 h-4 mr-2 text-primary-400" />
                03677 888888
              </a>

              <a
                href="mailto:apo@lindenberg-apotheke.de"
                className="flex items-center hover:text-primary-400 transition-colors"
              >
                <Mail className="w-4 h-4 mr-2 text-primary-400" />
                apo@lindenberg-apotheke.de
              </a>
            </div>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <Clock className="w-5 h-5 mr-2 text-primary-400" />
              Öffnungszeiten
            </h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Montag - Freitag:</span>
                <span className="text-gray-300">7:00 - 18:00</span>
              </div>
              <div className="flex justify-between">
                <span>Samstag:</span>
                <span className="text-gray-300">9:00 - 12:00</span>
              </div>
              <div className="flex justify-between">
                <span>Sonntag:</span>
                <span className="text-gray-400">Geschlossen</span>
              </div>
              <div className="mt-4 p-3 bg-primary-900 rounded-lg">
                <p className="text-primary-200 text-xs font-medium">
                  💡 Keine Wartezeiten bei Blutdruckmessung
                </p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Schnellzugriff</h3>
            <ul className="space-y-2 text-sm">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services & App */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Unsere Services</h3>
            <ul className="space-y-2 text-sm mb-6">
              {services.map((service) => (
                <li key={service} className="text-gray-300">
                  • {service}
                </li>
              ))}
            </ul>

            {/* App Download */}
            <div className="bg-gray-800 p-4 rounded-lg">
              <div className="flex items-center mb-2">
                <Smartphone className="w-5 h-5 mr-2 text-primary-400" />
                <h4 className="font-semibold text-sm">Unsere App</h4>
              </div>
              <p className="text-xs text-gray-300 mb-3">
                Rezepte vorbestellen, Notdienste finden
              </p>
              <Link href="/app" className="btn btn-primary text-xs px-3 py-2">
                Jetzt downloaden
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Privacy Information Section */}
      <div className="border-t border-gray-800">
        <div className="container-custom py-8">
          <div className="bg-green-900 rounded-xl p-6">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-green-700 rounded-full flex items-center justify-center flex-shrink-0">
                <Shield className="w-6 h-6 text-green-200" />
              </div>
              <div className="flex-1">
                <div className="flex items-center mb-3">
                  <h3 className="text-lg font-semibold text-white mr-3">
                    🍃 Privacy-First Website
                  </h3>
                  <div className="inline-flex items-center px-3 py-1 bg-green-700 text-green-100 text-xs font-semibold rounded-full">
                    <CheckCircle className="w-3 h-3 mr-1" />
                    Cookie-frei
                  </div>
                </div>
                
                <p className="text-green-100 text-sm mb-4">
                  Diese Website verwendet <strong>keine Cookies</strong> und <strong>kein Tracking</strong>. 
                  Sie können unsere Website vollständig anonym nutzen. Ihre Privatsphäre ist uns wichtig.
                </p>
                
                <div className="flex flex-wrap items-center gap-6 text-sm">
                  <div className="flex items-center text-green-200">
                    <CheckCircle className="w-4 h-4 mr-1" />
                    <span>Keine Cookies</span>
                  </div>
                  <div className="flex items-center text-green-200">
                    <CheckCircle className="w-4 h-4 mr-1" />
                    <span>Kein Tracking</span>
                  </div>
                  <div className="flex items-center text-green-200">
                    <CheckCircle className="w-4 h-4 mr-1" />
                    <span>DSGVO-konform</span>
                  </div>
                  <div className="flex items-center text-green-200">
                    <CheckCircle className="w-4 h-4 mr-1" />
                    <span>Sichere Datenübertragung</span>
                  </div>
                </div>
              </div>
              
              <div className="hidden sm:block">
                <Link
                  href="/datenschutz"
                  className="btn bg-green-700 hover:bg-green-600 text-white border-0 px-4 py-2 text-sm font-medium rounded-lg flex items-center"
                >
                  <Shield className="w-4 h-4 mr-2" />
                  Datenschutz
                </Link>
              </div>
            </div>
            
            <div className="sm:hidden mt-4">
              <Link
                href="/datenschutz"
                className="btn bg-green-700 hover:bg-green-600 text-white border-0 px-4 py-2 text-sm font-medium rounded-lg flex items-center w-fit"
              >
                <Shield className="w-4 h-4 mr-2" />
                Datenschutz
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-800">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="flex flex-wrap gap-4 mb-4 md:mb-0">
              {legalLinks.map((link, index) => (
                <span key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                  {index < legalLinks.length - 1 && (
                    <span className="ml-4 text-gray-600">|</span>
                  )}
                </span>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <div className="flex items-center space-x-4">
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>

              <p className="text-sm text-gray-400">
                © {currentYear} Lindenberg-Apotheke Ilmenau. Alle Rechte
                vorbehalten.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  Phone,
  MapPin,
  Clock,
  Menu,
  X,
  AlertCircle,
  Smartphone,
} from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const router = useRouter();

  const navigation = [
    { name: "Startseite", href: "/" },
    {
      name: "Leistungen",
      href: "/leistungen",
      submenu: [
        { name: "Blutdruckmessung", href: "/leistungen/blutdruckmessung" },
        {
          name: "Kompressionsstrümpfe",
          href: "/leistungen/kompressionsstruempfe",
        },
        { name: "Reiseberatung", href: "/leistungen/reiseberatung" },
        { name: "Verleih-Service", href: "/leistungen/verleih" },
        { name: "Hausapotheke Check", href: "/leistungen/hausapotheke-check" },
      ],
    },
    { name: "Notdienst", href: "/notdienst" },
    {
      name: "Über uns",
      href: "/uber-uns",
      submenu: [
        { name: "Unsere Apotheke", href: "/uber-uns/apotheke" },
        { name: "Team", href: "/uber-uns/team" },
        { name: "Anfahrt", href: "/uber-uns/anfahrt" },
      ],
    },
    { name: "Gesundheit", href: "/gesundheit" },
    { name: "Kontakt", href: "/kontakt" },
  ];

  const isActive = (href: string) => {
    if (href === "/") {
      return router.pathname === "/";
    }
    return router.pathname.startsWith(href);
  };

  return (
    <>
      {/* Emergency Banner */}
      <div className="bg-red-600 text-white py-2 text-center text-sm font-medium">
        <div className="container-custom flex items-center justify-center space-x-4">
          <AlertCircle className="w-4 h-4" />
          <span>
            Notdienst heute: Rathaus-Apotheke Ilmenau | ☎ 03677-888888
          </span>
          <Link href="/notdienst" className="underline hover:no-underline">
            Alle Notdienste →
          </Link>
        </div>
      </div>

      <header className="bg-white shadow-lg sticky top-0 z-40">
        {/* Top Info Bar */}
        <div className="bg-gray-50 border-b border-gray-200">
          <div className="container-custom py-2">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-sm text-gray-600">
              <div className="flex items-center space-x-4 mb-2 sm:mb-0">
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-1" />
                  <span>Krankenhausstr. 26, 98693 Ilmenau</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-1" />
                  <span>Mo-Fr: 7-18 Uhr | Sa: 9-12 Uhr</span>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <a
                  href="tel:+493677888888"
                  className="phone-link flex items-center"
                >
                  <Phone className="w-4 h-4 mr-1" />
                  <span>03677 888888</span>
                </a>
                <Link
                  href="/app"
                  className="flex items-center text-primary-600 hover:text-primary-700 font-medium"
                >
                  <Smartphone className="w-4 h-4 mr-1" />
                  <span>Unsere App</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Main Navigation */}
        <div className="container-custom">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/" className="flex items-center space-x-3">
                <img
                  src="/logo.png"
                  alt="Lindenberg-Apotheke Logo"
                  className="h-12 w-auto"
                  width={180}
                  height={48}
                />
                <div>
                  <h1 className="text-xl font-bold text-gray-900">
                    Lindenberg-Apotheke
                  </h1>
                  <p className="text-sm text-gray-600">Ilmenau • Dr. H. Danz</p>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navigation.map((item) => (
                <div key={item.name} className="relative group">
                  <Link
                    href={item.href}
                    className={`nav-link ${
                      isActive(item.href) ? "active" : ""
                    }`}
                  >
                    {item.name}
                  </Link>

                  {/* Dropdown Menu */}
                  {item.submenu && (
                    <div className="absolute top-full left-0 mt-2 w-64 bg-white shadow-xl rounded-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                      <div className="py-2">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors duration-150"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}

              {/* CTA Button */}
              <Link href="/termin" className="btn btn-primary">
                Termin buchen
              </Link>
            </nav>

            {/* Mobile menu button */}
            <button
              type="button"
              className="lg:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-50 lg:hidden">
            <div
              className="fixed inset-0 bg-black bg-opacity-25"
              onClick={() => setMobileMenuOpen(false)}
            />
            <div className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-white shadow-xl">
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-semibold text-gray-900">Menü</h2>
                  <button
                    type="button"
                    className="p-2 rounded-md text-gray-600 hover:text-gray-900"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <nav className="mt-6">
                  <div className="space-y-1">
                    {navigation.map((item) => (
                      <div key={item.name}>
                        <Link
                          href={item.href}
                          className={`block px-3 py-2 rounded-md text-base font-medium ${
                            isActive(item.href)
                              ? "bg-primary-50 text-primary-600"
                              : "text-gray-900 hover:bg-gray-50"
                          }`}
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {item.name}
                        </Link>
                        {item.submenu && (
                          <div className="ml-4 space-y-1">
                            {item.submenu.map((subItem) => (
                              <Link
                                key={subItem.name}
                                href={subItem.href}
                                className="block px-3 py-2 text-sm text-gray-600 hover:text-gray-900"
                                onClick={() => setMobileMenuOpen(false)}
                              >
                                {subItem.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Mobile CTA */}
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <Link
                      href="/termin"
                      className="btn btn-primary w-full"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Termin buchen
                    </Link>
                    <a
                      href="tel:+493677888888"
                      className="btn btn-secondary w-full mt-3"
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      Jetzt anrufen
                    </a>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}

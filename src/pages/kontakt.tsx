import { useState } from "react";
import { NextSeo } from "next-seo";
import Layout from "../components/Layout";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  Car,
  Bus,
  User,
  CheckCircle,
  MessageCircle,
} from "lucide-react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  privacy: boolean;
}

export default function Kontakt() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    privacy: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setIsSubmitted(true);
        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
          privacy: false,
        });
      } else {
        // Handle error
        alert(result.error || 'Ein Fehler ist aufgetreten. Bitte versuchen Sie es später erneut.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Ein Fehler ist aufgetreten. Bitte überprüfen Sie Ihre Internetverbindung und versuchen Sie es erneut.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    mainEntity: {
      "@type": "Pharmacy",
      name: "Lindenberg-Apotheke Ilmenau",
      telephone: "+49-3677-888888",
      email: "apo@lindenberg-apotheke.de",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Krankenhausstr. 26",
        addressLocality: "Ilmenau",
        postalCode: "98693",
        addressCountry: "DE",
      },
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
    },
  };

  if (isSubmitted) {
    return (
      <Layout>
        <NextSeo
          title="Nachricht gesendet"
          description="Vielen Dank für Ihre Nachricht. Wir melden uns schnellstmöglich bei Ihnen zurück."
        />

        <section className="py-16 lg:py-24">
          <div className="container-custom text-center max-w-2xl mx-auto">
            <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-8 h-8 text-secondary-600" />
            </div>
            <h1 className="heading-lg mb-6">Nachricht erfolgreich gesendet!</h1>
            <p className="text-lead mb-8">
              Vielen Dank für Ihre Nachricht. Wir haben sie erhalten und melden
              uns schnellstmöglich bei Ihnen zurück – in der Regel innerhalb von
              24 Stunden.
            </p>
            <div className="space-y-4">
              <a href="tel:+493677888888" className="btn btn-primary">
                <Phone className="w-4 h-4 mr-2" />
                Für dringende Fälle: 03677 888888
              </a>
              <div className="text-sm text-gray-600">
                Bei dringenden Anliegen erreichen Sie uns telefonisch:
                <br />
                Mo-Fr: 7-18 Uhr | Sa: 9-12 Uhr
              </div>
            </div>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <NextSeo
        title="Kontakt"
        description="Kontaktieren Sie die Lindenberg-Apotheke Ilmenau: ☎ 03677 888888 | apo@lindenberg-apotheke.de | Krankenhausstr. 26, 98693 Ilmenau. Öffnungszeiten & Anfahrt."
        canonical="https://www.lindenberg-apotheke.de/kontakt/"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-secondary-50 py-16 lg:py-20">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="heading-xl mb-6">Kontaktieren Sie uns</h1>
            <p className="text-lead">
              Haben Sie Fragen zu Medikamenten, brauchen eine Beratung oder
              möchten einen Termin vereinbaren? Wir sind gerne für Sie da!
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="heading-md mb-8">Unsere Kontaktdaten</h2>

                {/* Contact Cards */}
                <div className="space-y-6">
                  {/* Phone */}
                  <div className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-lg border border-gray-100">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                      <Phone className="w-6 h-6 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">
                        Telefon
                      </h3>
                      <a
                        href="tel:+493677888888"
                        className="text-xl font-bold text-primary-600 hover:text-primary-700 transition-colors"
                      >
                        03677 888888
                      </a>
                      <p className="text-sm text-gray-600 mt-1">
                        Mo-Fr: 7:00-18:00 Uhr | Sa: 9:00-12:00 Uhr
                      </p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-lg border border-gray-100">
                    <div className="flex-shrink-0 w-12 h-12 bg-secondary-100 rounded-lg flex items-center justify-center">
                      <Mail className="w-6 h-6 text-secondary-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">
                        E-Mail
                      </h3>
                      <a
                        href="mailto:apo@lindenberg-apotheke.de"
                        className="text-lg text-secondary-600 hover:text-secondary-700 transition-colors"
                      >
                        apo@lindenberg-apotheke.de
                      </a>
                      <p className="text-sm text-gray-600 mt-1">
                        Wir antworten innerhalb von 24 Stunden
                      </p>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-lg border border-gray-100">
                    <div className="flex-shrink-0 w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-yellow-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">
                        Adresse
                      </h3>
                      <div className="text-gray-700">
                        <div>Lindenberg-Apotheke Ilmenau</div>
                        <div>Dr. H. Danz</div>
                        <div>Krankenhausstr. 26</div>
                        <div>98693 Ilmenau</div>
                      </div>
                      <p className="text-sm text-gray-600 mt-2">
                        Im Ärztehaus vor den Ilm-Kreis-Kliniken
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Opening Hours */}
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
                  <Clock className="w-5 h-5 mr-2 text-primary-500" />
                  Öffnungszeiten
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="font-medium">Montag - Freitag:</span>
                    <span>07:00 - 18:00 Uhr</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Samstag:</span>
                    <span>09:00 - 12:00 Uhr</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Sonntag:</span>
                    <span className="text-gray-500">Geschlossen</span>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <p className="text-xs text-gray-600">
                    Änderungen an Feiertagen werden rechtzeitig bekannt gegeben
                  </p>
                </div>
              </div>

              {/* Accessibility Info */}
              <div className="bg-blue-50 rounded-xl p-6">
                <h3 className="font-semibold text-gray-900 mb-4">
                  Barrierefreiheit
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center">
                    <User className="w-5 h-5 mr-3 text-blue-500" />
                    <span>Rollstuhlgerechter Zugang</span>
                  </div>
                  <div className="flex items-center">
                    <Car className="w-5 h-5 mr-3 text-blue-500" />
                    <span>Parkplätze direkt vor der Tür</span>
                  </div>
                  <div className="flex items-center">
                    <Bus className="w-5 h-5 mr-3 text-blue-500" />
                    <span>Bushaltestelle in 100m Entfernung</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="bg-white rounded-xl shadow-xl border border-gray-100 p-8">
                <div className="flex items-center mb-6">
                  <MessageCircle className="w-6 h-6 mr-3 text-primary-500" />
                  <h2 className="text-2xl font-semibold text-gray-900">
                    Schreiben Sie uns
                  </h2>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                        placeholder="Ihr Name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        E-Mail *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                        placeholder="ihre.email@beispiel.de"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Telefon (optional)
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                      placeholder="Ihre Telefonnummer"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Betreff *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    >
                      <option value="">Bitte wählen Sie ein Thema</option>
                      <option value="beratung">Allgemeine Beratung</option>
                      <option value="medikament">Frage zu Medikament</option>
                      <option value="rezept">Rezeptbestellung</option>
                      <option value="notdienst">Notdienst</option>
                      <option value="termin">Terminvereinbarung</option>
                      <option value="lob">Lob & Anregungen</option>
                      <option value="beschwerde">Beschwerde</option>
                      <option value="sonstiges">Sonstiges</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Nachricht *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors resize-none"
                      placeholder="Beschreiben Sie Ihr Anliegen..."
                    />
                  </div>

                  <div className="flex items-start space-x-3">
                    <input
                      type="checkbox"
                      id="privacy"
                      name="privacy"
                      required
                      checked={formData.privacy}
                      onChange={handleInputChange}
                      className="mt-1 h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                    />
                    <label
                      htmlFor="privacy"
                      className="text-sm text-gray-700 leading-5"
                    >
                      Ich habe die{" "}
                      <a
                        href="/datenschutz"
                        className="text-primary-600 hover:text-primary-700 underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Datenschutzerklärung
                      </a>{" "}
                      gelesen und stimme der Verarbeitung meiner Daten zu. *
                    </label>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center">
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Wird gesendet...
                      </div>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Nachricht senden
                      </>
                    )}
                  </button>

                  <div className="text-xs text-gray-500 text-center">
                    * Pflichtfelder müssen ausgefüllt werden
                  </div>
                </form>
              </div>

              <div className="mt-8 p-6 bg-green-50 rounded-xl">
                <h3 className="font-semibold text-green-900 mb-2">
                  Warum uns kontaktieren?
                </h3>
                <ul className="text-sm text-green-800 space-y-1">
                  <li>• Kompetente Beratung zu allen Medikamenten</li>
                  <li>• Individuelle Gesundheitsberatung</li>
                  <li>• Schnelle Bearbeitung Ihrer Anfragen</li>
                  <li>• Persönlicher Service vor Ort</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="heading-md mb-4">
              Weitere Wege, uns zu erreichen
            </h2>
            <p className="text-gray-600">
              Neben unserem Kontaktformular stehen Ihnen verschiedene weitere
              Kontaktmöglichkeiten zur Verfügung.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <Phone className="w-12 h-12 mx-auto mb-4 text-primary-500" />
              <h3 className="font-semibold mb-2">Anrufen</h3>
              <p className="text-sm text-gray-600 mb-4">
                Für dringende Fragen und Beratung
              </p>
              <a href="tel:+493677888888" className="btn btn-sm btn-primary">
                03677 888888
              </a>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <Mail className="w-12 h-12 mx-auto mb-4 text-secondary-500" />
              <h3 className="font-semibold mb-2">E-Mail</h3>
              <p className="text-sm text-gray-600 mb-4">
                Detaillierte Anfragen per E-Mail
              </p>
              <a
                href="mailto:apo@lindenberg-apotheke.de"
                className="btn btn-sm btn-secondary"
              >
                E-Mail senden
              </a>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <MapPin className="w-12 h-12 mx-auto mb-4 text-yellow-500" />
              <h3 className="font-semibold mb-2">Persönlich</h3>
              <p className="text-sm text-gray-600 mb-4">
                Besuchen Sie uns in der Apotheke
              </p>
              <a href="/uber-uns/anfahrt" className="btn btn-sm btn-outline">
                Anfahrt zeigen
              </a>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <Clock className="w-12 h-12 mx-auto mb-4 text-green-500" />
              <h3 className="font-semibold mb-2">Notdienst</h3>
              <p className="text-sm text-gray-600 mb-4">
                24/7 Notdienst-Informationen
              </p>
              <a href="/notdienst" className="btn btn-sm btn-outline">
                Notdienst finden
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
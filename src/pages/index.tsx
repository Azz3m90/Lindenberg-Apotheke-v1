import { NextSeo } from "next-seo";
import Layout from "../components/Layout";
import Hero from "../components/sections/Hero";
import QuickServices from "../components/sections/QuickServices";
import AboutPreview from "../components/sections/AboutPreview";
import EmergencyInfo from "../components/sections/EmergencyInfo";
import AppPromo from "../components/sections/AppPromo";
import ContactCTA from "../components/sections/ContactCTA";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Pharmacy",
    name: "Lindenberg-Apotheke Ilmenau",
    description:
      "Moderne Apotheke im Ärztehaus Ilmenau mit kompetenter Beratung, Blutdruckmessung ohne Wartezeit und individueller Kompressionsstrumpf-Anpassung.",
    url: "https://www.lindenberg-apotheke.de",
    telephone: "+49-3677-888888",
    email: "apo@lindenberg-apotheke.de",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Krankenhausstr. 26",
      addressLocality: "Ilmenau",
      postalCode: "98693",
      addressCountry: "DE",
      addressRegion: "Thüringen",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 50.6833,
      longitude: 10.9167,
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
    hasMap:
      "https://www.google.com/maps/place/Krankenhausstr.+26,+98693+Ilmenau",
    sameAs: [
      "https://www.facebook.com/lindenberg-apotheke-ilmenau",
      "https://www.instagram.com/lindenberg_apotheke",
    ],
    priceRange: "€€",
    currenciesAccepted: "EUR",
    paymentAccepted: ["Cash", "Credit Card", "Debit Card", "Insurance"],
    founder: "Dr. H. Danz",
    foundingDate: "1995",
    areaServed: ["Ilmenau", "Thüringen", "Germany"],
    serviceType: [
      "Prescription Dispensing",
      "Blood Pressure Measurement",
      "Compression Stockings Fitting",
      "Travel Consultation",
      "Health Consultation",
      "Emergency Services",
    ],
  };

  return (
    <Layout>
      <NextSeo
        title="Startseite"
        description="Lindenberg-Apotheke Ilmenau - Ihre moderne Apotheke im Ärztehaus. Kompetente Beratung, Blutdruckmessung ohne Wartezeit, individuelle Kompressionsstrümpfe. ☎ 03677 888888"
        canonical="https://www.lindenberg-apotheke.de/"
        openGraph={{
          title:
            "Lindenberg-Apotheke Ilmenau | Ihre moderne Apotheke im Ärztehaus",
          description:
            "Keine Wartezeiten bei Blutdruckmessung • Individuelle Kompressionsstrumpf-Anpassung • Modernste Medikamenten-App • Kompetente Beratung seit 1995",
          url: "https://www.lindenberg-apotheke.de/",
          images: [
            {
              url: "/og-image-home.jpg",
              width: 1200,
              height: 630,
              alt: "Lindenberg-Apotheke Ilmenau - Moderne Apotheke im Ärztehaus",
            },
          ],
        }}
        additionalMetaTags={[
          {
            name: "keywords",
            content:
              "Apotheke Ilmenau, Lindenberg-Apotheke, Dr. Danz, Blutdruckmessung, Kompressionsstrümpfe, Reiseapotheke, Notdienst, Thüringen, Ärztehaus, Medikamente",
          },
          {
            property: "business:contact_data:locality",
            content: "Ilmenau",
          },
          {
            property: "business:contact_data:region",
            content: "Thüringen",
          },
          {
            property: "business:contact_data:postal_code",
            content: "98693",
          },
          {
            property: "business:contact_data:country_name",
            content: "Deutschland",
          },
        ]}
      />

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Page Content */}
      <Hero />
      <QuickServices />
      <AboutPreview />
      <EmergencyInfo />
      <AppPromo />
      <ContactCTA />
    </Layout>
  );
}

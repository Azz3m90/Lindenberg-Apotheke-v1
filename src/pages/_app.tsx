import type { AppProps } from "next/app";
import { NextSeo, DefaultSeo } from "next-seo";
import { GlobalLoaderProvider } from "../contexts/GlobalLoaderContext";
import GlobalLoader from "../components/GlobalLoader";
import "../styles/globals.css";

// Default SEO configuration
const defaultSEO = {
  titleTemplate: "%s | Lindenberg-Apotheke Ilmenau",
  defaultTitle:
    "Lindenberg-Apotheke Ilmenau | Ihre Apotheke im Ärztehaus | Dr. Danz",
  description:
    "Lindenberg-Apotheke Ilmenau - Kompetente Beratung, Kompressionsstrümpfe, Blutdruckmessung, Reiseapotheke. Öffnungszeiten Mo-Fr 7-18 Uhr. ☎ 03677 888888",
  canonical: "https://www.lindenberg-apotheke.de",
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: "https://www.lindenberg-apotheke.de",
    siteName: "Lindenberg-Apotheke Ilmenau",
    title: "Lindenberg-Apotheke Ilmenau | Ihre Apotheke im Ärztehaus",
    description:
      "Moderne Apotheke im Herzen von Ilmenau - Keine Wartezeiten bei Blutdruckmessung, individuelle Kompressionsstrumpf-Anpassung, kompetente Beratung.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Lindenberg-Apotheke Ilmenau - Ihre moderne Apotheke",
      },
    ],
  },
  twitter: {
    cardType: "summary_large_image",
  },
  additionalMetaTags: [
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1, maximum-scale=5",
    },
    {
      name: "apple-mobile-web-app-capable",
      content: "yes",
    },
    {
      name: "format-detection",
      content: "telephone=yes",
    },
    {
      name: "geo.region",
      content: "DE-TH",
    },
    {
      name: "geo.placename",
      content: "Ilmenau",
    },
    {
      name: "geo.position",
      content: "50.6833;10.9167",
    },
    {
      name: "ICBM",
      content: "50.6833, 10.9167",
    },
  ],
  additionalLinkTags: [
    {
      rel: "icon",
      href: "/favicon.ico",
    },
    {
      rel: "apple-touch-icon",
      href: "/apple-touch-icon.png",
      sizes: "180x180",
    },
    {
      rel: "manifest",
      href: "/site.webmanifest",
    },
  ],
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <GlobalLoaderProvider>
      <>
        <DefaultSeo {...defaultSEO} />
        <GlobalLoader />
        <Component {...pageProps} />
      </>
    </GlobalLoaderProvider>
  );
}

export default MyApp;

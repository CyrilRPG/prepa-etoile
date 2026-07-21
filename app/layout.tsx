import type { Metadata } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileCta } from "@/components/layout/MobileCta";
import { SkipLink } from "@/components/layout/SkipLink";
import { jsonLd, site } from "@/lib/data/site";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["500", "600"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} · ${site.tagline}`,
    template: `%s | ${site.name}`,
  },
  description:
    "Prépa Étoile accompagne depuis 2007 les collégiens et lycéens en mathématiques, physique-chimie, français et anglais, au sein de groupes d'environ 8 élèves.",
  openGraph: {
    title: `${site.name} · ${site.tagline}`,
    description:
      "Des cours exigeants et bienveillants en groupes d'environ 8 élèves, du collège au lycée.",
    type: "website",
    locale: "fr_FR",
    siteName: site.name,
  },
};

export const viewport = {
  themeColor: "#071F3D",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="fr"
      className={`${playfair.variable} ${dmSans.variable} h-full`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <SkipLink />
        <Header />
        <main id="contenu" className="flex-1">
          {children}
        </main>
        <Footer />
        <MobileCta />
      </body>
    </html>
  );
}

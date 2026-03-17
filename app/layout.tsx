import type { Metadata } from "next";
import { Space_Mono, Outfit } from "next/font/google";
import { LanguageProvider } from "@/lib/i18n";
import Nav from "@/components/Nav";
import "./globals.css";

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Argand — Infraestructura Digital · Gabriel Moreno",
  description:
    "Ingeniero de sistemas y socio técnico bilingüe para empresas mexicanas. Infraestructura web, integración de IA y consultoría técnica. Ciudad de México.",
  keywords: [
    "desarrollo web México",
    "infraestructura digital",
    "integración IA",
    "consultoría técnica",
    "freelance Ciudad de México",
  ],
  authors: [{ name: "Gabriel Moreno Azcona" }],
  openGraph: {
    title: "Argand — Infraestructura Digital",
    description:
      "Bilingual technical partner for Mexican businesses. Web infrastructure, AI integration, technical consulting.",
    url: "https://argand.mx",
    siteName: "Argand",
    locale: "es_MX",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${spaceMono.variable} ${outfit.variable}`}>
        <LanguageProvider>
            <Nav />
            {children}
          </LanguageProvider>
      </body>
    </html>
  );
}

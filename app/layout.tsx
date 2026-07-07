import type { Metadata } from "next";
import { Big_Shoulders, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const bigShoulders = Big_Shoulders({
  variable: "--font-big-shoulders",
  subsets: ["latin"],
  weight: ["700", "800", "900"],
  display: "swap",
});

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const SITE_URL = "https://www.smisrl.com.ar";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "SMI — Soluciones de Mantenimiento e Ingeniería",
    template: "%s — SMI",
  },
  description:
    "SMI brinda soluciones a la industria mediante mantenimiento, ingeniería y montajes mecánicos, con gestión y profesionalismo de empresas de primera línea.",
  keywords: [
    "mantenimiento industrial",
    "ingeniería",
    "montajes mecánicos",
    "montaje de estructuras",
    "supervisión de obras",
    "Santa Fe",
    "Argentina",
  ],
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: SITE_URL,
    siteName: "SMI",
    title: "SMI — Soluciones de Mantenimiento e Ingeniería",
    description:
      "Mantenimiento, ingeniería y montajes mecánicos para la industria. Gestión y profesionalismo, soluciones prácticas y eficientes.",
    images: [{ url: "/images/og.jpg", width: 1200, height: 630, alt: "SMI" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="es-AR"
      className={`${bigShoulders.variable} ${geist.variable} ${geistMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}

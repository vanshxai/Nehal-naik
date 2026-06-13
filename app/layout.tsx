import type { Metadata } from "next";
import { Inter, Lora, Geist_Mono } from "next/font/google";
import "@/styles/globals.css";
import { siteConfig } from "@/data/content";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500", "600"],
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  display: "swap",
  weight: ["400", "600"],
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nehalnaik.com"),
  title: {
    default: `${siteConfig.name} — AI/ML Technology Leader`,
    template: `%s | ${siteConfig.name}`,
  },
  description:
    "Managing Director, Product Owner, and AI Strategist specializing in Risk, Insurance, and Finance technology. 25+ years of domain experience.",
  keywords: ["AI", "ML", "Machine Learning", "Insurance", "Risk", "Finance", "Technology Leader", "Catastrophe Modeling"],
  authors: [{ name: siteConfig.name }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nehalnaik.com",
    siteName: siteConfig.name,
    title: `${siteConfig.name} — AI/ML Technology Leader`,
    description: "Strategic AI for a Risk-Intelligent World.",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${lora.variable} ${geistMono.variable}`}>
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

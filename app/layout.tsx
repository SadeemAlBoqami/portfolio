import type { Metadata } from "next";
import { Inter, Space_Grotesk, IBM_Plex_Mono, IBM_Plex_Sans_Arabic } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import { LanguageProvider } from "@/components/LanguageProvider";
import { Navbar } from "@/components/Navbar";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { CursorGlow } from "@/components/CursorGlow";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space", display: "swap" });
const plexMono = IBM_Plex_Mono({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-plex-mono", display: "swap" });
const plexArabic = IBM_Plex_Sans_Arabic({ subsets: ["arabic"], weight: ["400", "500", "600"], variable: "--font-arabic", display: "swap" });

const portfolioTitle = "Sadeem Faihan AlBoqami";
const portfolioDescription = "Portfolio of Sadeem AlBoqami, a Computer Engineer working across AI infrastructure, GPU inference, Edge AI, robotics, and intelligent systems.";
const portfolioUrl = "https://sadeem-alboqami.vercel.app/";

export const metadata: Metadata = {
  metadataBase: new URL(portfolioUrl),
  title: portfolioTitle,
  description: portfolioDescription,
  alternates: { canonical: portfolioUrl },
  openGraph: {
    title: portfolioTitle,
    description: portfolioDescription,
    url: portfolioUrl,
    siteName: portfolioTitle,
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 627, type: "image/png", alt: "Sadeem Faihan AlBoqami — Computer Engineer" }],
  },
  twitter: { card: "summary_large_image", title: portfolioTitle, description: portfolioDescription, images: ["/og-image.png"] },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en" dir="ltr" suppressHydrationWarning className={`${inter.variable} ${spaceGrotesk.variable} ${plexMono.variable} ${plexArabic.variable}`}>
    <body>
      <ThemeProvider>
        <LanguageProvider>
          <div className="hud-field" aria-hidden="true" />
          <div className="hud-field-secondary" aria-hidden="true" />
          <CursorGlow />
          <Navbar />
          <main id="main-content" tabIndex={-1}>{children}</main>
          <Contact />
          <Footer />
        </LanguageProvider>
      </ThemeProvider>
    </body>
  </html>;
}

import type { Metadata } from "next";
import { Inter, Space_Grotesk, IBM_Plex_Mono, IBM_Plex_Sans_Arabic } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import { LanguageProvider } from "@/components/LanguageProvider";
import { Navbar } from "@/components/Navbar";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { CursorGlow } from "@/components/CursorGlow";
import { siteMeta } from "@/lib/content";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space", display: "swap" });
const plexMono = IBM_Plex_Mono({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-plex-mono", display: "swap" });
const plexArabic = IBM_Plex_Sans_Arabic({ subsets: ["arabic"], weight: ["400", "500", "600"], variable: "--font-arabic", display: "swap" });

export const metadata: Metadata = { title: siteMeta.title, description: siteMeta.description };

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

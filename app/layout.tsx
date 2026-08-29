import type { Metadata } from "next";
import { Be_Vietnam_Pro, Lora } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { LanguageProvider } from "@/components/language-provider";

export const metadata: Metadata = {
  title: { default: "Lamora Coffee", template: "%s — Lamora Coffee" },
  description: "Cà phê nguyên bản từ đất lành, cho quán và những lần pha tại nhà.",
};

const bodyFont = Be_Vietnam_Pro({
  subsets: ["latin", "vietnamese"],
  variable: "--font-body-web",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const displayFont = Lora({
  subsets: ["latin", "vietnamese"],
  variable: "--font-display-web",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="vi" className={`${bodyFont.variable} ${displayFont.variable}`}>
      <body><LanguageProvider><SiteHeader />{children}<SiteFooter /></LanguageProvider></body>
    </html>
  );
}

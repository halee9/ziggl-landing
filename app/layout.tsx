import type { Metadata } from "next";
import { Bebas_Neue, Outfit, Noto_Sans_KR } from "next/font/google";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const notoSansKR = Noto_Sans_KR({
  subsets: ["latin"],
  variable: "--font-noto",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ziggl — Restaurant Management for Korean-owned Businesses",
  description:
    "Self-order kiosk, POS, online ordering, kitchen display, and AI-powered Google Review responses. Built for Korean-owned fast casual restaurants.",
  metadataBase: new URL("https://ziggl.app"),
  openGraph: {
    title: "Ziggl — Restaurant Management for Korean-owned Businesses",
    description:
      "Self-order kiosk, POS, online ordering, kitchen display, and AI-powered Google Review responses. Built for Korean-owned fast casual restaurants.",
    url: "https://ziggl.app",
    siteName: "Ziggl",
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ziggl — Restaurant Management for Korean-owned Businesses",
    description:
      "Self-order kiosk, POS, online ordering, and AI-powered review responses. Built for Korean-owned fast casual restaurants.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      className={`${bebasNeue.variable} ${outfit.variable} ${notoSansKR.variable}`}
      style={
        {
          "--font-bebas": bebasNeue.style.fontFamily,
          "--font-outfit": outfit.style.fontFamily,
          "--font-noto": notoSansKR.style.fontFamily,
        } as React.CSSProperties
      }
    >
      <body
        style={{
          fontFamily: "var(--font-outfit), sans-serif",
        }}
      >
        {children}
      </body>
    </html>
  );
}

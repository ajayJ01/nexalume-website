import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/data";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} | ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },
  description:
    "Nexalume Solutions is an AI-first technology company building next-generation digital products, enterprise AI solutions, generative AI, agentic systems, and custom software for businesses across India.",
  keywords: [
    "AI company India",
    "artificial intelligence",
    "generative AI",
    "agentic AI",
    "machine learning",
    "LLM applications",
    "RAG solutions",
    "enterprise automation",
    "SaaS development",
    "custom software development",
    "Nexalume Solutions",
    "nexalume.in",
  ],
  authors: [{ name: siteConfig.name, url: siteConfig.domain }],
  creator: siteConfig.name,
  metadataBase: new URL(siteConfig.domain),
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteConfig.domain,
    siteName: siteConfig.name,
    title: `${siteConfig.name} | ${siteConfig.tagline}`,
    description:
      "AI-first technology company building intelligent digital products and enterprise solutions.",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | ${siteConfig.tagline}`,
    description:
      "AI-first technology company building intelligent digital products and enterprise solutions.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link
          href="https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} min-h-screen bg-nexa-dark font-sans text-white antialiased`}
        style={{ fontFamily: "var(--font-inter), Satoshi, system-ui, sans-serif" }}
      >
        <div className="noise-overlay" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}

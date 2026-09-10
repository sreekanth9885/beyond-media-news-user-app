import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";

import SiteHeader from "./components/navigation/SiteHeader";
import Footer from "./components/ui/layout/Footer";
import { clientConfig } from "./config/client";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(clientConfig.siteUrl),

  title: {
    default: clientConfig.seo.title,
    template: `%s | ${clientConfig.siteName}`,
  },

  description: clientConfig.seo.description,

  keywords: clientConfig.seo.keywords,

  applicationName: clientConfig.siteName,

  authors: [
    {
      name: clientConfig.siteName,
    },
  ],

  creator: clientConfig.siteName,
  publisher: clientConfig.siteName,

  verification: {
    google: "80CJruEWjiTeKujRK_o9A4H23XnrCEkhOKkPC_1HFeg",
  },

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: clientConfig.siteUrl,
    siteName: clientConfig.siteName,
    title: clientConfig.seo.title,
    description: clientConfig.seo.description,
  },

  twitter: {
    card: "summary_large_image",
    title: clientConfig.seo.title,
    description: clientConfig.seo.description,
  },

  icons: {
    icon: "/navbar-logo.jpeg",
    shortcut: "/navbar-logo.jpeg",
    apple: "/navbar-logo.jpeg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const theme = clientConfig.theme;
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      style={
        {
          "--primary": theme.primary,
          "--primary-hover": theme.primaryHover,
          "--secondary": theme.secondary,

          "--background": theme.background,
          "--surface": theme.surface,

          "--text": theme.text,
          "--text-muted": theme.textMuted,

          "--border": theme.border,

          "--success": theme.success,
          "--warning": theme.warning,
          "--danger": theme.danger,
        } as React.CSSProperties
      }
    >
      <body className="min-h-screen bg-background text-text">
        <SiteHeader />

        {children}

        <Footer />
      </body>
    </html>
  );
}
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";
import ThemeProvider from "./theme/ThemeProvider";

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
  title: {
    default: clientConfig.siteName,
    template: `%s | ${clientConfig.siteName}`,
  },

  description: clientConfig.seo.description,

  keywords: clientConfig.seo.keywords,

  icons: {
    icon: "/navbar-logo.jpeg",
    shortcut: "/navbar-logo.jpeg",
    apple: "/navbar-logo.jpeg",
  },

  metadataBase: new URL(clientConfig.siteUrl),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-screen bg-white">
        <ThemeProvider>
          <SiteHeader />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
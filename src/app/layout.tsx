import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: {
    default: "Building Bharat - Political Consulting & Strategy",
    template: "%s | Building Bharat",
  },
  description:
    "From aspiration to action - we empower political journeys with the science of strategy and the heart of grassroots connection. Expert political consulting services.",
  keywords: [
    "political consulting",
    "political strategy",
    "campaign management",
    "political marketing",
    "election consulting",
    "political communication",
    "grassroots organizing",
    "political branding",
    "India politics",
    "Building Bharat",
  ],
  authors: [{ name: "Building Bharat" }],
  creator: "Building Bharat",
  publisher: "Building Bharat",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://buildingbharat.com",
    siteName: "Building Bharat",
    title: "Building Bharat - Political Consulting & Strategy",
    description:
      "From aspiration to action - we empower political journeys with the science of strategy and the heart of grassroots connection.",
    images: [
      {
        url: "/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Building Bharat - Political Consulting",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Building Bharat - Political Consulting & Strategy",
    description:
      "From aspiration to action - we empower political journeys with the science of strategy and the heart of grassroots connection.",
    images: ["/logo.jpg"],
    creator: "@buildingbharat",
  },
  verification: {
    google: "your-google-verification-code", // Replace with actual verification code
  },
  alternates: {
    canonical: "https://buildingbharat.com",
  },
  icons: {
    // Use local public assets so favicon works the same after deployment
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
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
        {/* SEO Meta Tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#005451" />
        <meta name="format-detection" content="telephone=no" />

        {/* Additional SEO Meta Tags */}
        <meta name="geo.region" content="IN" />
        <meta name="geo.placename" content="India" />
        <meta name="geo.position" content="20.5937;78.9629" />
        <meta name="ICBM" content="20.5937, 78.9629" />

        {/* Use local public paths so favicons work in dev and production */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" href="/favicon.png" type="image/png" sizes="32x32" />
        <link rel="apple-touch-icon" href="/favicon.png" />

        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@700;900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Literata:ital,opsz,wght@0,7..72,400;0,7..72,700;1,7..72,400&display=swap"
          rel="stylesheet"
        />

        {/* Structured Data for Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Building Bharat",
              description: "Political consulting and strategy services",
              url: "https://buildingbharat.com",
              logo: "https://buildingbharat.com/logo.jpg",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+91-XXXX-XXXX-XX", // Replace with actual phone
                contactType: "customer service",
                areaServed: "IN",
                availableLanguage: "English",
              },
              address: {
                "@type": "PostalAddress",
                addressCountry: "IN",
              },
              sameAs: [
                "https://twitter.com/buildingbharat",
                "https://linkedin.com/company/buildingbharat",
              ],
            }),
          }}
        />
      </head>
      <body className="font-body bg-background text-foreground antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  );
}

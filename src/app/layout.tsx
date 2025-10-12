import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: "Building Bharat",
  description:
    "From aspiration to action - we empower political journeys with the science of strategy and the heart of grassroots connection.",
  icons: {
    icon: "/favicon.png?v=2?v=2",
    shortcut: "/favicon.png?v=2?v=2",
    apple: "/favicon.png?v=2?v=2",
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
        <link rel="icon" type="image/png" href="/favicon.png?v=2" />
        <link rel="shortcut icon" href="/favicon.png?v=2" type="image/png" />
        <link
          rel="icon"
          href="/favicon.png?v=2"
          type="image/png"
          key="site-icon"
        />
        <link
          rel="icon"
          href="/favicon.png?v=2"
          type="image/png"
          sizes="32x32"
          key="icon-32"
        />
        <link
          rel="icon"
          href="/favicon.png?v=2"
          type="image/png"
          sizes="16x16"
          key="icon-16"
        />
        <link rel="apple-touch-icon" href="/favicon.png?v=2" key="apple-icon" />
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
      </head>
      <body className="font-body bg-background text-foreground antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  );
}

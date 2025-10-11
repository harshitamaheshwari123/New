import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: "Bharat Rise",
  description:
    "From aspiration to action - we empower political journeys with the science of strategy and the heart of grassroots connection.",
  icons: {
    icon: "/logo.jpg",
    shortcut: "/logo.jpg",
    apple: "/logo.jpg",
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
          rel="icon"
          href="/logo.jpg?v=3"
          type="image/jpeg"
          key="site-icon"
        />
        <link
          rel="icon"
          href="/logo.jpg?v=3"
          type="image/jpeg"
          sizes="32x32"
          key="icon-32"
        />
        <link
          rel="icon"
          href="/logo.jpg?v=3"
          type="image/jpeg"
          sizes="16x16"
          key="icon-16"
        />
        <link rel="apple-touch-icon" href="/logo.jpg?v=3" key="apple-icon" />
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

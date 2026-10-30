import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Video Tools - AI Video Enhancer, Compressor & 4K Upscaler",
  description:
    "All-in-one AI video toolkit. Compress videos without quality loss, enhance clarity with AI, upscale HD to 2K/4K, adjust video speed, extract audio, and manage media history.",
  icons: {
    icon: "/favicon.ico",
    apple: "/images/logo.png",
  },
  verification: {
    google: [
      "4edXJTMyV4nhq0qY_zalMGnNG0QlH5oEJP6IiO_9qlY",
      "project-716448996918",
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/images/logo.png" />
        <meta name="google-site-verification" content="project-716448996918" />
        <meta name="google-site-verification" content="4edXJTMyV4nhq0qY_zalMGnNG0QlH5oEJP6IiO_9qlY" />
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght@300;400;500;600&display=swap"
        />
      </head>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}

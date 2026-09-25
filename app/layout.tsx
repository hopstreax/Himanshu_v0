import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const sansFont = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://himanshupatro.dev"),
  title: {
    default: "Himanshu Patro — AI / Software / Open Source",
    template: "%s — Himanshu Patro",
  },
  description:
    "Personal portfolio and engineering work of Himanshu Patro. Full Stack AI Developer and Open Source Contributor.",
  authors: [{ name: "Himanshu Patro" }],
  creator: "Himanshu Patro",
  keywords: [
    "Himanshu Patro",
    "Software Engineer",
    "Full Stack AI",
    "Graphify",
    "TraceKit",
    "Open Source",
  ],
  openGraph: {
    title: "Himanshu Patro — AI / Software / Open Source",
    description:
      "Personal portfolio and engineering work of Himanshu Patro. Full Stack AI Developer and Open Source Contributor.",
    type: "website",
    locale: "en_US",
    siteName: "Himanshu Patro Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Himanshu Patro — AI / Software / Open Source",
    description:
      "Personal portfolio and engineering work of Himanshu Patro. Full Stack AI Developer and Open Source Contributor.",
    creator: "@himanshupatro",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#F9F8F5",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={sansFont.variable}>
      <body className="font-sans antialiased bg-canvas text-ink selection:bg-[#E8E5DC] selection:text-ink">
        {children}
      </body>
    </html>
  );
}

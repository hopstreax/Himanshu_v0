import type { Metadata } from "next";
import { HomePageClient } from "@/components/home/HomePageClient";

export const metadata: Metadata = {
  title: "Himanshu Patro — AI / Software / Open Source",
  description:
    "Personal portfolio and engineering work of Himanshu Patro. Full Stack AI Developer and Open Source Contributor.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Himanshu Patro — AI / Software / Open Source",
    description:
      "Personal portfolio and engineering work of Himanshu Patro. Full Stack AI Developer and Open Source Contributor.",
    url: "https://himanshupatro.dev",
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

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://himanshupatro.dev/#website",
      url: "https://himanshupatro.dev",
      name: "Himanshu Patro Portfolio",
      description:
        "Personal portfolio and engineering work of Himanshu Patro. Full Stack AI Developer and Open Source Contributor.",
      publisher: {
        "@id": "https://himanshupatro.dev/#person",
      },
    },
    {
      "@type": "Person",
      "@id": "https://himanshupatro.dev/#person",
      name: "Himanshu Patro",
      url: "https://himanshupatro.dev",
      jobTitle: "Full Stack AI Developer",
      sameAs: [
        "https://github.com/himanshupatro-334",
        "https://linkedin.com/in/himanshupatro",
        "https://x.com/himanshupatro",
      ],
      knowsAbout: [
        "Full Stack Development",
        "Generative AI",
        "Autonomous Testing",
        "AST Parsing",
        "Open Source",
      ],
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HomePageClient />
    </>
  );
}

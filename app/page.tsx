import type { Metadata } from "next";
import { HomePageClient } from "@/components/home/HomePageClient";

export const metadata: Metadata = {
  title: "Himanshu Patro — AI / Software / Open Source",
  description:
    "Personal portfolio and engineering work of Himanshu Patro. Full Stack AI Developer and Open Source Contributor.",
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

export default function HomePage() {
  return <HomePageClient />;
}

import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";
import { EditorialOgCard } from "@/components/og/EditorialOgCard";

const OG_SIZE = { width: 1200, height: 630 };

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get("title") || "Himanshu Patro";
  const subtitle =
    searchParams.get("subtitle") ||
    "Full Stack AI Developer & Open Source Contributor";
  const badge = searchParams.get("badge") || "AI · SOFTWARE · OPEN SOURCE";

  return new ImageResponse(
    (
      <EditorialOgCard
        badge={badge}
        title={title}
        subtitle={subtitle}
      />
    ),
    { ...OG_SIZE }
  );
}

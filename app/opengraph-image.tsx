import { ImageResponse } from "next/og";
import { EditorialOgCard } from "@/components/og/EditorialOgCard";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function OpenGraphImage() {
  return new ImageResponse(
    (
      <EditorialOgCard
        badge="AI · SOFTWARE · OPEN SOURCE"
        title="Himanshu Patro"
        subtitle="Personal portfolio and engineering work in full-stack AI development, autonomous testing orchestration, and open-source tooling."
        tags={["Full Stack AI", "Graphify Contributor", "TraceKit", "TypeScript", "Python"]}
        footerNote="Full Stack AI Developer & Open Source Contributor"
      />
    ),
    {
      ...size,
    }
  );
}

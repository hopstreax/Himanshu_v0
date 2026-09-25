import { ImageResponse } from "next/og";
import { EditorialOgCard } from "@/components/og/EditorialOgCard";
import { projects } from "@/data/projects";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export async function generateStaticParams() {
  return projects.map((p) => ({
    slug: p.slug,
  }));
}

export default async function ProjectOpenGraphImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return new ImageResponse(
      (
        <EditorialOgCard
          badge="PROJECT ARCHIVE"
          title="Case Study"
          subtitle="Engineering case study by Himanshu Patro"
        />
      ),
      { ...size }
    );
  }

  const isFlagship = project.tier === "flagship";
  const badge = isFlagship
    ? `FLAGSHIP · ${project.category}`
    : `ARCHIVE · ${project.category}`;

  return new ImageResponse(
    (
      <EditorialOgCard
        badge={badge}
        title={project.title}
        subtitle={project.tagline}
        tags={project.technologies}
        footerNote={`${project.year} · Engineering Case Study by Himanshu Patro`}
      />
    ),
    {
      ...size,
    }
  );
}

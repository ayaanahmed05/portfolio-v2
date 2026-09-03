import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";

import { getProjectBySlug, projects } from "@/lib/projects";
import { useMDXComponents } from "../../../mdx-components";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  return {
    title: project ? project.title : "Project not found",
  };
}

export default async function ProjectCaseStudyPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const { default: CaseStudy } = await import(`../../../../content/projects/${slug}.mdx`);
  const components = useMDXComponents({});

  return (
    <article className="mx-auto w-full max-w-4xl px-5 py-20 sm:px-8 sm:py-28 lg:py-36">
      <Link
        href="/projects"
        className="inline-flex items-center gap-2 font-mono text-[0.68rem] uppercase tracking-[0.14em] text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      >
        <ArrowLeft className="size-3.5" aria-hidden="true" />
        All projects
      </Link>
      <header className="mt-14 border-b border-border pb-12 sm:mt-20 sm:pb-16">
        <p className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-muted-foreground">
          Projects / Overview
        </p>
        <h1 className="mt-5 text-balance text-[clamp(3.25rem,6vw,6rem)] font-medium leading-[0.94] tracking-[-0.065em] text-foreground">
          {project.title}
        </h1>
        <p className="mt-7 max-w-2xl text-pretty text-lg leading-8 text-muted-foreground sm:text-xl">
          {project.description}
        </p>
        <div className="mt-8 flex flex-wrap gap-x-4 gap-y-2 font-mono text-[0.68rem] uppercase tracking-[0.1em] text-muted-foreground">
          {project.technologies.map((technology) => (
            <span key={technology}>{technology}</span>
          ))}
        </div>
      </header>
      <div className="mt-12 flex max-w-2xl flex-col gap-6 sm:mt-16">
        {project.imagePath && (
          <div className="relative mt-8 aspect-[16/9] w-full overflow-hidden rounded-xl border border-border/60 bg-muted shadow-sm">
            <Image
              src={project.imagePath}
              alt={`${project.title} preview`}
              fill
              priority
              sizes="(max-width: 896px) 100vw, 896px"
              className="object-cover transition-transform duration-500 ease-out hover:scale-[1.02]"
            />
          </div>
        )}
        <CaseStudy components={components} />
      </div>
    </article>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, GitBranch } from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "Projects that Ayaan Ahmed has worked on, showcasing a range of technical skills and expertise.",
};

export default function ProjectsPage() {
  return (
    <section className="mx-auto w-full max-w-[88rem] px-5 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-36">
      <header className="max-w-4xl">
        <p className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-muted-foreground">
          Selected work
        </p>
        <h1 className="mt-5 text-balance text-[clamp(3.25rem,6vw,6rem)] font-medium leading-[0.95] tracking-[-0.065em] text-foreground">
          A collection of systems, AI, and full-stack builds.
        </h1>
        <p className="mt-7 max-w-2xl text-pretty text-lg leading-8 text-muted-foreground sm:text-xl">
          A showcase of technical work spanning real-time C++ simulations, automated fault-testing pipelines, award-winning machine learning applications, and full-stack AI platforms.
        </p>
      </header>

      <div className="mt-16 columns-1 gap-5 sm:mt-20 sm:columns-2 lg:columns-3 lg:gap-6 space-y-5 lg:space-y-6">
        {projects.map((project) => (
          <Card key={project.slug} className="transition-shadow duration-500 hover:shadow-[0_1rem_3rem_-1.5rem_oklch(0.225_0.015_255_/_0.32)]">
            {project.imagePath ? (
              <div className="group relative mx-4 aspect-[16/10] overflow-hidden rounded-lg border border-border bg-muted/45">
                <Link
                  href={`/projects/${project.slug}`}
                  aria-label={`Preview image for ${project.title}`}
                  className="absolute inset-0"
                >
                  <Image
                    src={project.imagePath}
                    alt={`${project.title} preview`}
                    fill
                    sizes="(min-width: 1024px) 30vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </Link>
              </div>
            ) : (
              <div
                aria-label={`Placeholder image for ${project.title}`}
                role="img"
                className="site-grid group relative mx-4 aspect-[16/10] overflow-hidden rounded-lg border border-border bg-muted/45"
              >
                <div aria-hidden="true" className="absolute -right-10 -top-10 size-36 rounded-full border border-primary/40 transition-transform duration-700 ease-out group-hover:scale-125" />
                <div aria-hidden="true" className="absolute bottom-5 left-5 size-12 rounded-full border border-border bg-background/70" />
                <span className="absolute bottom-5 right-5 font-mono text-[0.62rem] uppercase tracking-[0.14em] text-muted-foreground">
                  [Placeholder visual]
                </span>
              </div>
            )}
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2" aria-label="Technology stack">
                {project.technologies.map((technology) => (
                  <Badge key={technology} variant="secondary" className="font-mono text-[0.65rem] tracking-[0.04em]">
                    {technology}
                  </Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter className="mt-2 flex flex-wrap gap-x-5 gap-y-3">
              {project.liveUrl &&
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 font-mono text-[0.68rem] uppercase tracking-[0.1em] text-foreground transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  Live demo
                  <ArrowUpRight className="size-3.5" aria-hidden="true" />
                </a>
              }
              {project.repositoryUrl && (
                <a
                  href={project.repositoryUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 font-mono text-[0.68rem] uppercase tracking-[0.1em] text-foreground transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  GitHub repo
                  <GitBranch className="size-3.5" aria-hidden="true" />
                </a>
              )}
              <Link
                href={`/projects/${project.slug}`}
                className="group/cta ml-auto inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-2.5 py-1 font-mono text-[0.68rem] font-semibold uppercase tracking-[0.1em] text-primary border border-primary/20 transition-all duration-200 hover:bg-primary hover:text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                Overview
                <ArrowUpRight className="size-3.5" aria-hidden="true" />
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}

import Image from "next/image";
import Link from "next/link";
import { ArrowDownRight, ArrowRight, ArrowUpRight, GitBranch } from "lucide-react";

import { CopyEmailButton } from "@/components/copy-email-button";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { experienceLabels, getRecentExperience } from "@/lib/experience";
import { getRecentPosts } from "@/lib/posts";
import { getFeaturedProjects } from "@/lib/projects";

export default function Home() {
  const featuredProjects = getFeaturedProjects(2);
  const recentExperience = getRecentExperience(3);
  const recentPosts = getRecentPosts(2);

  return (
    <div className="flex flex-col">
      {/* 1. HERO SECTION */}
      <section className="relative isolate flex min-h-[calc(100svh-4rem)] overflow-hidden">
        <div aria-hidden="true" className="site-grid pointer-events-none absolute inset-0 -z-10" />
        <div
          aria-hidden="true"
          className="hero-orbit pointer-events-none absolute -right-48 top-1/2 -z-10 size-[min(58vw,54rem)] -translate-y-1/2 rounded-full border border-border"
        />
        <div className="mx-auto flex w-full max-w-[88rem] flex-col justify-between gap-16 px-5 py-12 sm:px-8 sm:py-16 lg:px-12 lg:py-20">
          <div className="relative max-w-5xl py-10 lg:py-16">
            <p className="mb-6 font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground sm:mb-8">
              Hello, I&apos;m
            </p>
            <h1 className="max-w-5xl text-balance text-[clamp(3.5rem,8vw,8rem)] font-medium leading-[0.91] tracking-[-0.075em] text-foreground">
              Ayaan Ahmed
            </h1>
            <div className="mt-10 flex max-w-xl flex-col gap-7 sm:mt-12">
              <p className="text-pretty text-lg leading-8 text-muted-foreground sm:text-xl">
                Engineering software solutions ranging from real-time fault simulation to award-winning AI platforms.
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <a href="#projects" className={buttonVariants({ size: "lg" })}>
                  View projects
                  <ArrowDownRight data-icon="inline-end" />
                </a>
                <a
                  href="#contact"
                  className={buttonVariants({ variant: "outline", size: "lg" })}
                >
                  Start a conversation
                  <ArrowUpRight data-icon="inline-end" />
                </a>
              </div>
            </div>
          </div>

          <div className="flex items-end justify-between gap-6 border-t border-border pt-5 font-mono text-[0.66rem] uppercase tracking-[0.13em] text-muted-foreground">
            <span>Toronto, Ontario</span>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 transition-colors hover:text-foreground"
            >
              <span className="hidden sm:inline">Scroll to explore</span>
              <ArrowDownRight aria-hidden="true" className="size-4 text-foreground" />
            </a>
          </div>
        </div>
      </section>

      {/* 2. FEATURED PROJECTS TEASER */}
      <section
        id="projects"
        className="scroll-mt-16 border-t border-border/80 bg-background/50 py-20 sm:py-28 lg:py-32"
      >
        <div className="mx-auto w-full max-w-[88rem] px-5 sm:px-8 lg:px-12">
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div className="max-w-2xl">
              <p className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-muted-foreground">
                Selected Projects
              </p>
              <h2 className="mt-4 text-balance text-3xl font-medium tracking-[-0.055em] text-foreground sm:text-4xl lg:text-5xl">
                Selected Projects
              </h2>
              <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
                Deep dives into web architecture, developer tools, and user experience.
              </p>
            </div>
            <Link
              href="/projects"
              className="group inline-flex items-center gap-2 font-mono text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-foreground transition-colors hover:text-primary"
            >
              <span>Explore All Projects</span>
              <ArrowRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
            {featuredProjects.map((project) => (
              <Card
                key={project.slug}
                className="transition-all duration-300 hover:ring-foreground/25 hover:shadow-[0_1rem_3rem_-1.5rem_oklch(0.225_0.015_255_/_0.25)]"
              >
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
                        sizes="(min-width: 1024px) 45vw, 100vw"
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
                    <div
                      aria-hidden="true"
                      className="absolute -right-10 -top-10 size-36 rounded-full border border-primary/40 transition-transform duration-700 ease-out group-hover:scale-125"
                    />
                    <div
                      aria-hidden="true"
                      className="absolute bottom-5 left-5 size-12 rounded-full border border-border bg-background/70"
                    />
                    <span className="absolute bottom-5 right-5 font-mono text-[0.62rem] uppercase tracking-[0.14em] text-muted-foreground">
                      [Featured system]
                    </span>
                  </div>
                )}

                <CardHeader className="gap-2 sm:gap-2.5">
                  <CardTitle className="text-xl sm:text-2xl">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-sm leading-relaxed sm:text-base">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="flex flex-wrap gap-2" aria-label="Technology stack">
                    {project.technologies.map((technology) => (
                      <Badge
                        key={technology}
                        variant="secondary"
                        className="font-mono text-[0.65rem] tracking-[0.04em]"
                      >
                        {technology}
                      </Badge>
                    ))}
                  </div>
                </CardContent>

                <CardFooter className="mt-auto flex flex-wrap items-center gap-x-5 gap-y-3">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 font-mono text-[0.68rem] uppercase tracking-[0.1em] text-foreground transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    >
                      Live demo
                      <ArrowUpRight className="size-3.5" aria-hidden="true" />
                    </a>
                  )}
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
                    className="group/cta ml-auto inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 font-mono text-[0.68rem] font-semibold uppercase tracking-[0.1em] text-primary transition-all duration-200 hover:bg-primary hover:text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    Overview
                    <ArrowRight className="size-3.5 transition-transform duration-200 group-hover/cta:translate-x-0.5" />
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 3. EXPERIENCE SNIPPET */}
      <section
        id="experience"
        className="scroll-mt-16 border-t border-border/80 bg-background py-20 sm:py-28 lg:py-32"
      >
        <div className="mx-auto w-full max-w-[88rem] px-5 sm:px-8 lg:px-12">
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div className="max-w-2xl">
              <p className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-muted-foreground">
                Path &amp; Impact
              </p>
              <h2 className="mt-4 text-balance text-3xl font-medium tracking-[-0.055em] text-foreground sm:text-4xl lg:text-5xl">
                Path &amp; Impact
              </h2>
              <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
                A summary of my engineering, architecture, and technical leadership journey across industry and student communities.
              </p>
            </div>
            <Link
              href="/experience"
              className="group inline-flex items-center gap-2 font-mono text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-foreground transition-colors hover:text-primary"
            >
              <span>View Full Experience</span>
              <ArrowRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

          <ol className="relative mt-12 flex max-w-5xl flex-col gap-6 border-l border-border pl-6 sm:mt-16 sm:gap-8 sm:pl-10">
            {recentExperience.map((item, index) => {
              const isTeaser = index === 2;

              if (isTeaser) {
                return (
                  <li key={`${item.role}-${item.organization}`} className="relative">
                    <span
                      aria-hidden="true"
                      className="absolute -left-[1.93rem] top-7 size-2.5 rounded-full border-2 border-background bg-primary/70 sm:-left-[2.69rem]"
                    />
                    <Link
                      href="/experience"
                      aria-label={`View full details for ${item.role} and complete experience timeline`}
                      className="group/teaser relative block overflow-hidden rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    >
                      <Card className="max-h-36 overflow-hidden transition-all duration-300 group-hover/teaser:ring-foreground/25 group-hover/teaser:shadow-lg sm:max-h-40">
                        <CardHeader>
                          <div className="flex flex-wrap items-start justify-between gap-4">
                            <div className="flex flex-col gap-2">
                              <Badge
                                variant="secondary"
                                className="font-mono text-[0.65rem] tracking-[0.08em]"
                              >
                                {experienceLabels[item.type]}
                              </Badge>
                              <CardTitle className="text-xl sm:text-2xl">{item.role}</CardTitle>
                              <CardDescription className="text-sm font-medium text-foreground/85 sm:text-base">
                                {item.organization}
                              </CardDescription>
                            </div>
                            <p className="font-mono text-[0.68rem] uppercase tracking-[0.11em] text-muted-foreground">
                              {item.date}
                            </p>
                          </div>
                        </CardHeader>
                        <CardContent className="flex flex-col gap-5">
                          {item.technologies && (
                            <div className="flex flex-wrap gap-2" aria-label="Technology stack">
                              {item.technologies.slice(0, 6).map((technology) => (
                                <Badge
                                  key={technology}
                                  variant="outline"
                                  className="font-mono text-[0.65rem] tracking-[0.04em]"
                                >
                                  {technology}
                                </Badge>
                              ))}
                            </div>
                          )}
                          <ul className="flex list-disc flex-col gap-2 pl-5 text-sm leading-relaxed text-muted-foreground">
                            {item.highlights.slice(0, 2).map((highlight) => (
                              <li key={highlight}>{highlight}</li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>

                      {/* Smooth gradient fade-out */}
                      <div
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-x-0 bottom-0 flex h-28 items-end justify-center bg-gradient-to-t from-background via-background/85 to-transparent pb-3.5 sm:h-32"
                      >
                        <span className="inline-flex items-center gap-1.5 rounded-full border border-border/80 bg-background/90 px-3.5 py-1 font-mono text-[0.68rem] font-medium uppercase tracking-[0.12em] text-foreground shadow-xs transition-colors group-hover/teaser:border-primary/40 group-hover/teaser:text-primary">
                          <span>View full timeline &amp; more positions</span>
                          <ArrowRight className="size-3.5 transition-transform duration-300 group-hover/teaser:translate-x-1" />
                        </span>
                      </div>
                    </Link>
                  </li>
                );
              }

              return (
                <li key={`${item.role}-${item.organization}`} className="relative">
                  <span
                    aria-hidden="true"
                    className="absolute -left-[1.93rem] top-7 size-2.5 rounded-full border-2 border-background bg-primary sm:-left-[2.69rem]"
                  />
                  <Card className="transition-all duration-300 hover:ring-foreground/25 hover:shadow-[0_1rem_3rem_-1.5rem_oklch(0.225_0.015_255_/_0.2)]">
                    <CardHeader>
                      <div className="flex flex-wrap items-start justify-between gap-4">
                        <div className="flex flex-col gap-2">
                          <Badge
                            variant="secondary"
                            className="font-mono text-[0.65rem] tracking-[0.08em]"
                          >
                            {experienceLabels[item.type]}
                          </Badge>
                          <CardTitle className="text-xl sm:text-2xl">{item.role}</CardTitle>
                          <CardDescription className="text-sm font-medium text-foreground/85 sm:text-base">
                            {item.organization}
                          </CardDescription>
                        </div>
                        <p className="font-mono text-[0.68rem] uppercase tracking-[0.11em] text-muted-foreground">
                          {item.date}
                        </p>
                      </div>
                    </CardHeader>
                    <CardContent className="flex flex-col gap-5">
                      {item.technologies && (
                        <div className="flex flex-wrap gap-2" aria-label="Technology stack">
                          {item.technologies.slice(0, 6).map((technology) => (
                            <Badge
                              key={technology}
                              variant="outline"
                              className="font-mono text-[0.65rem] tracking-[0.04em]"
                            >
                              {technology}
                            </Badge>
                          ))}
                        </div>
                      )}
                      <ul className="flex list-disc flex-col gap-2 pl-5 text-sm leading-relaxed text-muted-foreground">
                        {item.highlights.slice(0, 3).map((highlight) => (
                          <li key={highlight}>{highlight}</li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </li>
              );
            })}

            {/* Timeline bottom fade-out */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -left-px bottom-0 h-28 w-1 bg-gradient-to-b from-transparent to-background"
            />
          </ol>
        </div>
      </section>

      {/* 4. LATEST ARTICLES / EDITORIAL TEASER */}
      <section
        id="writing"
        className="scroll-mt-16 border-t border-border/80 bg-background/50 py-20 sm:py-28 lg:py-32"
      >
        <div className="mx-auto w-full max-w-[88rem] px-5 sm:px-8 lg:px-12">
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div className="max-w-2xl">
              <p className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-muted-foreground">
                Recent Writing
              </p>
              <h2 className="mt-4 text-balance text-3xl font-medium tracking-[-0.055em] text-foreground sm:text-4xl lg:text-5xl">
                Recent Writing
              </h2>
              <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
                Thoughts on software engineering, hackathon retrospectives, and technical explorations.
              </p>
            </div>
            <Link
              href="/blog"
              className="group inline-flex items-center gap-2 font-mono text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-foreground transition-colors hover:text-primary"
            >
              <span>Read More Articles</span>
              <ArrowRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
            {recentPosts.map((post) => (
              <Card
                key={post.slug}
                className="group/card flex flex-col justify-between overflow-hidden p-0 transition-all duration-300 hover:ring-foreground/25 hover:shadow-[0_1rem_3rem_-1.5rem_oklch(0.225_0.015_255_/_0.2)]"
              >
                <div>
                  {post.imagePath ? (
                    <div className="group relative aspect-[16/9] w-full overflow-hidden border-b border-border bg-muted/45">
                      <Link
                        href={`/blog/${post.slug}`}
                        aria-label={`Thumbnail for ${post.title}`}
                        className="absolute inset-0"
                      >
                        <Image
                          src={post.imagePath}
                          alt={`${post.title} thumbnail`}
                          fill
                          sizes="(min-width: 768px) 50vw, 100vw"
                          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        />
                      </Link>
                    </div>
                  ) : (
                    <div
                      aria-label={`Placeholder thumbnail for ${post.title}`}
                      role="img"
                      className="site-grid group relative aspect-[16/9] w-full overflow-hidden border-b border-border bg-muted/45"
                    >
                      <div
                        aria-hidden="true"
                        className="absolute -right-9 -top-9 size-32 rounded-full border border-primary/40 transition-transform duration-700 ease-out group-hover:scale-125"
                      />
                      <span className="absolute bottom-5 left-5 font-mono text-[0.62rem] uppercase tracking-[0.14em] text-muted-foreground">
                        [Editorial article]
                      </span>
                    </div>
                  )}

                  <CardHeader className="pt-6">
                    {post.category && (
                      <Badge
                        variant="secondary"
                        className="w-fit font-mono text-[0.65rem] tracking-[0.08em]"
                      >
                        {post.category}
                      </Badge>
                    )}
                    <CardTitle className="text-xl tracking-[-0.03em] sm:text-2xl">
                      <Link
                        href={`/blog/${post.slug}`}
                        className="transition-colors group-hover/card:text-primary"
                      >
                        {post.title}
                      </Link>
                    </CardTitle>
                    <CardDescription className="line-clamp-2 text-sm leading-relaxed sm:text-base">
                      {post.excerpt}
                    </CardDescription>
                  </CardHeader>
                </div>

                <div>
                  <CardContent className="font-mono text-[0.65rem] uppercase tracking-[0.1em] text-muted-foreground">
                    {post.author} / {post.publishedAt}
                  </CardContent>
                  <CardFooter className="mt-2 border-t border-border/60 bg-muted/20">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="group/cta inline-flex items-center gap-1.5 font-mono text-[0.68rem] font-semibold uppercase tracking-[0.1em] text-primary transition-opacity hover:opacity-75"
                    >
                      Read article
                      <ArrowRight className="size-3.5 transition-transform duration-200 group-hover/cta:translate-x-0.5" />
                    </Link>
                  </CardFooter>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CONTACT CTA SECTION */}
      <section
        id="contact"
        className="scroll-mt-16 border-t border-border/80 bg-background py-20 sm:py-28 lg:py-32"
      >
        <div className="mx-auto w-full max-w-[88rem] px-5 sm:px-8 lg:px-12">
          <div className="relative overflow-hidden rounded-2xl border border-border bg-card p-8 sm:p-12 lg:p-16">
            <div
              aria-hidden="true"
              className="site-grid pointer-events-none absolute inset-0 opacity-40"
            />
            <div className="relative flex max-w-3xl flex-col items-start gap-6">
              <p className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-muted-foreground">
                Get in Touch
              </p>
              <h2 className="text-balance text-3xl font-medium tracking-[-0.055em] text-foreground sm:text-4xl lg:text-5xl">
                Let&apos;s build something exceptional together.
              </h2>
              <p className="text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
                Whether you have an upcoming software engineering internship, a research collaboration, or just want to discuss distributed systems and AI architectures, I&apos;d love to connect.
              </p>
              <div className="mt-2 flex flex-wrap items-center gap-3">
                <a
                  href="mailto:ayaan.ahmed@ontariotechu.net?subject=Portfolio%20inquiry"
                  className={buttonVariants({ size: "lg" })}
                >
                  Email Ayaan Ahmed
                  <ArrowUpRight data-icon="inline-end" />
                </a>
                <CopyEmailButton />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

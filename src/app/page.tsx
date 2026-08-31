import Link from "next/link";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";

export default function Home() {
  return (
    <section className="relative isolate flex min-h-[calc(100svh-4rem)] overflow-hidden">
      <div aria-hidden="true" className="site-grid pointer-events-none absolute inset-0 -z-10" />
      <div aria-hidden="true" className="hero-orbit pointer-events-none absolute -right-48 top-1/2 -z-10 size-[min(58vw,54rem)] -translate-y-1/2 rounded-full border border-border" />
      <div className="mx-auto flex w-full max-w-[88rem] flex-col justify-between gap-16 px-5 py-12 sm:px-8 sm:py-16 lg:px-12 lg:py-20">
        {/* <div className="flex items-center gap-3 font-mono text-[0.68rem] uppercase tracking-[0.14em] text-muted-foreground">
          <span className="size-1.5 rounded-full bg-primary" />
          <span>Portfolio / 2026</span>
        </div> */}

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
              <Link href="/projects" className={buttonVariants({ size: "lg" })}>
                View projects
                <ArrowDownRight data-icon="inline-end" />
              </Link>
              <a
                href="mailto:ayaan.ahmed@ontariotechu.net?subject=Portfolio%20inquiry"
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
          <span className="hidden sm:inline">Scroll to explore</span>
          <ArrowDownRight aria-hidden="true" className="size-4 text-foreground" />
        </div>
      </div>
    </section>
  );
}

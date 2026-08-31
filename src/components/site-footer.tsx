import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { CopyEmailButton } from "@/components/copy-email-button";
import { buttonVariants } from "@/components/ui/button";

const socialLinks = [
  { label: "GitHub", href: "https://github.com/ayaanahmed05/" },
  { label: "LinkedIn", href: "https://linkedin.com/in/ayaanahmed05" },
] as const;

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto grid max-w-[88rem] gap-12 px-5 py-16 sm:px-8 md:grid-cols-[1.35fr_0.65fr] md:gap-16 lg:px-12 lg:py-20">
        <div className="flex max-w-2xl flex-col items-start gap-7">
          <p className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-muted-foreground">
            Available for internship opportunities
          </p>
          <h2 className="text-balance text-3xl font-medium tracking-[-0.055em] text-foreground sm:text-4xl">
            Start a conversation with me.
          </h2>
          <div className="flex flex-wrap items-center gap-3">
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

        <div className="flex flex-col gap-8 md:items-end md:justify-between">
          <div className="flex flex-col gap-3 font-mono text-xs text-muted-foreground md:items-end">
            <a
              className="transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              href="mailto:ayaan.ahmed@ontariotechu.net?subject=Portfolio%20inquiry"
            >
              ayaan.ahmed@ontariotechu.net
            </a>
            <p>Toronto, Ontario</p>
          </div>
          <div className="flex items-center gap-5 font-mono text-[0.68rem] uppercase tracking-[0.12em] text-muted-foreground">
            {socialLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="mx-auto flex max-w-[88rem] items-center justify-between gap-5 border-t border-border px-5 py-5 font-mono text-[0.65rem] uppercase tracking-[0.12em] text-muted-foreground sm:px-8 lg:px-12">
        <span>© {new Date().getFullYear()} Ayaan Ahmed</span>
        {/* <span>Built as a placeholder</span> */}
      </div>
    </footer>
  );
}

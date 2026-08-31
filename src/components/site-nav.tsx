"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";

const navigation = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/experience", label: "Experience" },
  { href: "/blog", label: "Blog" },
] as const;

export function SiteNav() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/90 backdrop-blur-md">
      <nav
        aria-label="Primary navigation"
        className="mx-auto flex h-16 max-w-[88rem] items-center justify-between gap-5 px-5 sm:px-8 lg:px-12"
      >
        <Link
          href="/"
          className="shrink-0 font-mono text-xs font-semibold tracking-[-0.02em] text-foreground transition-opacity hover:opacity-60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          AYAAN AHMED<span className="text-accent-foreground">.</span>
        </Link>

        <div className="flex min-w-0 items-center gap-1 overflow-x-auto font-mono text-[0.68rem] uppercase tracking-[0.1em] sm:gap-2">
          {navigation.map((item) => {
            const isActive =
              item.href === "/" ? pathname === item.href : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "relative shrink-0 px-2 py-2 text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:px-3",
                  isActive && "text-foreground",
                )}
              >
                {item.label}
                <span
                  aria-hidden="true"
                  className={cn(
                    "absolute inset-x-2 -bottom-[1px] h-px origin-left bg-primary transition-transform duration-300 sm:inset-x-3",
                    isActive ? "scale-x-100" : "scale-x-0",
                  )}
                />
              </Link>
            );
          })}
        </div>
      </nav>
    </header>
  );
}

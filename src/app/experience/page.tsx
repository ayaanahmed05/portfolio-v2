import type { Metadata } from "next";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { experience } from "@/lib/experience";

export const metadata: Metadata = {
  title: "Experience",
  description: "Placeholder experience timeline for Jane Doe.",
};

const labels = {
  internship: "Industry",
  leadership: "Leadership",
  education: "Education",
} as const;

export default function ExperiencePage() {
  return (
    <section className="mx-auto w-full max-w-[88rem] px-5 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-36">
      <header className="max-w-4xl">
        <p className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-muted-foreground">
          Experience
        </p>
        <h1 className="mt-5 text-balance text-[clamp(3.25rem,6vw,6rem)] font-medium leading-[0.95] tracking-[-0.065em] text-foreground">
          A placeholder record
          <br />
          of building and leading.
        </h1>
        <p className="mt-7 max-w-2xl text-pretty text-lg leading-8 text-muted-foreground sm:text-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. [Replace this with a concise introduction to your experience.]
        </p>
      </header>

      <ol className="relative mt-16 flex max-w-5xl flex-col gap-5 border-l border-border pl-6 sm:mt-20 sm:gap-6 sm:pl-10">
        {experience.map((item) => (
          <li key={`${item.role}-${item.organization}`} className="relative">
            <span
              aria-hidden="true"
              className="absolute -left-[1.93rem] top-7 size-2.5 rounded-full border-2 border-background bg-primary sm:-left-[2.69rem]"
            />
            <Card>
              <CardHeader>
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div className="flex flex-col gap-2">
                    <Badge variant="secondary" className="font-mono text-[0.65rem] tracking-[0.08em]">
                      {labels[item.type]}
                    </Badge>
                    <CardTitle>{item.role}</CardTitle>
                    <CardDescription>{item.organization}</CardDescription>
                  </div>
                  <p className="font-mono text-[0.68rem] uppercase tracking-[0.11em] text-muted-foreground">
                    {item.date}
                  </p>
                </div>
              </CardHeader>
              <CardContent className="flex flex-col gap-5">
                {item.technologies ? (
                  <div className="flex flex-wrap gap-2" aria-label="Technology stack">
                    {item.technologies.map((technology) => (
                      <Badge key={technology} variant="outline" className="font-mono text-[0.65rem] tracking-[0.04em]">
                        {technology}
                      </Badge>
                    ))}
                  </div>
                ) : null}
                <ul className="flex list-disc flex-col gap-2 pl-5 text-sm leading-7 text-muted-foreground">
                  {item.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </li>
        ))}
      </ol>
    </section>
  );
}

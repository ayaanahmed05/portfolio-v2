import type { Metadata } from "next";

import { BlogIndex } from "@/components/blog-index";
import { posts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Blog",
  description: "Blog posts about hackathons, technical write-ups, and other random things.",
};

export default function BlogPage() {
  return (
    <section className="mx-auto w-full max-w-[88rem] px-5 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-36">
      <header className="max-w-4xl">
        <p className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-muted-foreground">
          Blog
        </p>
        <h1 className="mt-5 text-balance text-[clamp(3.25rem,6vw,6rem)] font-medium leading-[0.95] tracking-[-0.065em] text-foreground">
          A bit of everything.
        </h1>
        <p className="mt-7 max-w-2xl text-pretty text-lg leading-8 text-muted-foreground sm:text-xl">
          Stories from hackathons, random life updates, and notes on projects I'm working on.
        </p>
      </header>
      <BlogIndex posts={posts} />
    </section>
  );
}

import type { Metadata } from "next";

import { BlogIndex } from "@/components/blog-index";
import { posts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Blog",
  description: "Placeholder technical write-ups and hackathon recaps for Jane Doe.",
};

export default function BlogPage() {
  return (
    <section className="mx-auto w-full max-w-[88rem] px-5 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-36">
      <header className="max-w-4xl">
        <p className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-muted-foreground">
          Notes and dispatches
        </p>
        <h1 className="mt-5 text-balance text-[clamp(3.25rem,6vw,6rem)] font-medium leading-[0.95] tracking-[-0.065em] text-foreground">
          Placeholder articles
          <br />
          for curious builders.
        </h1>
        <p className="mt-7 max-w-2xl text-pretty text-lg leading-8 text-muted-foreground sm:text-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. [Replace this with a brief editorial introduction.]
        </p>
      </header>
      <BlogIndex posts={posts} />
    </section>
  );
}

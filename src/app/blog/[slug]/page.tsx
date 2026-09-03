import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";
import Image from "next/image";

import { getPostBySlug, posts } from "@/lib/posts";
import { useMDXComponents as getMDXComponents } from "../../../mdx-components";

import { postContent } from "@/lib/post-content";

type ArticlePageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  return { title: post ? post.title : "Article not found" };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const loader = postContent[slug];
  if (!loader) notFound();
  const { default: Article } = await loader();

  const components = getMDXComponents({});

  return (
    <article className="mx-auto w-full max-w-[88rem] px-5 py-16 sm:px-8 sm:py-24 lg:px-12 lg:py-32">
      <Link
        href="/blog"
        className="inline-flex items-center gap-2 font-mono text-[0.68rem] uppercase tracking-[0.14em] text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      >
        <ArrowLeft className="size-3.5" aria-hidden="true" />
        All articles
      </Link>
      <header className="mx-auto mt-14 max-w-5xl sm:mt-20">
        <p className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-primary">{post.category}</p>
        <h1 className="mt-5 text-balance text-[clamp(3.5rem,8vw,8rem)] font-medium leading-[0.9] tracking-[-0.075em] text-foreground">
          {post.title}
        </h1>
        <div className="mt-8 flex flex-wrap gap-x-4 gap-y-2 border-t border-border pt-5 font-mono text-[0.68rem] uppercase tracking-[0.11em] text-muted-foreground">
          <span>By {post.author}</span>
          <span>{post.publishedAt}</span>
        </div>
      </header>
      
      {/* Hero Image / Placeholder Backup */}
      {post.imagePath ? (
        <div className="relative mx-auto mt-12 aspect-[16/9] max-w-6xl overflow-hidden rounded-xl border border-border bg-muted/45 sm:mt-16">
          <Image
            src={post.imagePath}
            alt={`${post.title} hero image`}
            fill
            priority
            sizes="(max-width: 1280px) 100vw, 1152px"
            className="object-cover"
          />
        </div>
      ) : (
        <div
          aria-label={`Placeholder hero image for ${post.title}`}
          role="img"
          className="site-grid relative mx-auto mt-12 aspect-[16/9] max-w-6xl overflow-hidden rounded-xl border border-border bg-muted/45 sm:mt-16"
        >
          <div aria-hidden="true" className="absolute -right-16 -top-16 size-64 rounded-full border border-primary/40" />
          <span className="absolute bottom-6 left-6 font-mono text-[0.65rem] uppercase tracking-[0.14em] text-muted-foreground">
            [Placeholder hero image]
          </span>
        </div>
      )}

      <div className="mx-auto mt-14 flex max-w-prose flex-col gap-6 sm:mt-20">
        <Article components={components} />
      </div>
    </article>
  );
}

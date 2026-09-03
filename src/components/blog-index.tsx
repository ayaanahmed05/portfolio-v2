"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { BlogPost } from "@/lib/posts";
import Image from "next/image";

type BlogIndexProps = {
  posts: readonly BlogPost[];
};

const filters = ["All", "Technical Write-ups", "Hackathon Recaps"] as const;
type Filter = (typeof filters)[number];

export function BlogIndex({ posts }: BlogIndexProps) {
  const [activeFilter, setActiveFilter] = useState<Filter>("All");
  const visiblePosts = activeFilter === "All" ? posts : posts.filter((post) => post.category === activeFilter);

  return (
    <div className="mt-14 sm:mt-20">
      <div className="flex flex-wrap gap-2" aria-label="Filter articles">
        {filters.map((filter) => (
          <Button
            key={filter}
            type="button"
            variant={activeFilter === filter ? "default" : "outline"}
            aria-pressed={activeFilter === filter}
            onClick={() => setActiveFilter(filter)}
          >
            {filter}
          </Button>
        ))}
      </div>

      <div className="mt-8 grid grid-flow-dense gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
        {visiblePosts.map((post, index) => (
          <Card
            key={post.slug}
            className={index === 0 ? "md:col-span-2 lg:col-span-2" : undefined}
          >
            {post.imagePath ? (
        <div className="group relative mx-4 aspect-[16/9] overflow-hidden rounded-lg border border-border bg-muted/45">
          <Link
            href={`/blog/${post.slug}`}
            aria-label={`Thumbnail for ${post.title}`}
            className="absolute inset-0"
          >
            <Image
              src={post.imagePath}
              alt={`${post.title} thumbnail`}
              fill
              sizes="(min-width: 1024px) 30vw, (min-width: 768px) 50vw, 100vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
          </Link>
        </div>
      ) : (
        <div
          aria-label={`Placeholder thumbnail for ${post.title}`}
          role="img"
          className="site-grid group relative mx-4 aspect-[16/9] overflow-hidden rounded-lg border border-border bg-muted/45"
        >
          <div
            aria-hidden="true"
            className="absolute -right-9 -top-9 size-32 rounded-full border border-primary/40 transition-transform duration-700 ease-out group-hover:scale-125"
          />
          <span className="absolute bottom-5 left-5 font-mono text-[0.62rem] uppercase tracking-[0.14em] text-muted-foreground">
            [Placeholder thumbnail]
          </span>
        </div>
      )}
            <CardHeader>
              <Badge variant="secondary" className="font-mono text-[0.65rem] tracking-[0.08em]">
                {post.category}
              </Badge>
              <CardTitle className={index === 0 ? "text-2xl tracking-[-0.04em] sm:text-3xl" : "text-xl tracking-[-0.03em]"}>
                {post.title}
              </CardTitle>
              <CardDescription>{post.excerpt}</CardDescription>
            </CardHeader>
            <CardContent className="font-mono text-[0.65rem] uppercase tracking-[0.1em] text-muted-foreground">
              {post.author} / {post.publishedAt}
            </CardContent>
            <CardFooter className="mt-2">
              <Link
                href={`/blog/${post.slug}`}
                className="inline-flex items-center gap-1.5 font-mono text-[0.68rem] uppercase tracking-[0.1em] text-primary transition-opacity hover:opacity-70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                Read article
                <ArrowUpRight className="size-3.5" aria-hidden="true" />
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}

export type BlogCategory = "Technical Write-ups" | "Hackathon Recaps";

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: BlogCategory;
  author: string;
  publishedAt: string;
};

export const posts: readonly BlogPost[] = [
  {
    slug: "placeholder-hackathon",
    title: "Placeholder Hackathon Recap",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. [Insert a concise overview of this hackathon experience.]",
    category: "Hackathon Recaps",
    author: "Jane Doe",
    publishedAt: "[Month DD, YYYY]",
  },
  {
    slug: "placeholder-technical",
    title: "Placeholder Technical Write-up",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. [Insert a concise overview of the technical topic.]",
    category: "Technical Write-ups",
    author: "Jane Doe",
    publishedAt: "[Month DD, YYYY]",
  },
] as const;

export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find((post) => post.slug === slug);
}

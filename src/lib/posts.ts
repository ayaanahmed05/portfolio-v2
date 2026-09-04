export type BlogCategory = "Technical Write-ups" | "Hackathon Recaps";

export type BlogPost = {
  slug: string;
  title: string;
  imagePath?: string;
  excerpt: string;
  category?: BlogCategory;
  author: string;
  publishedAt: string;
};

export const posts: readonly BlogPost[] = [
  {
    slug: "ufc-montreal",
    title: "Snacks, French Signs, and UFC 315: A Road Trip to Montreal",
    imagePath: "/blog/montreal.webp",
    excerpt: "A wild weekend road trip from Toronto to Montreal featuring endless road snacks, steep Airbnb stairs, French language struggles, and live fight action at UFC 315.",
    // category: "Technical Write-ups",
    author: "Ayaan Ahmed",
    publishedAt: "May 12th, 2025",
  },
  {
    slug: "calgary-trip",
    title: "Mountains, Cheap Flights, and EV Disasters: A Trip to Alberta",
    imagePath: "/blog/calgary2.jpeg",
    excerpt: "A road trip from flat Ontario to the Alberta Rockies packed with cheap flights, EV charging chaos, and stunning views of Banff and Lake Louise.",
    // category: "Hackathon Recaps",
    author: "Ayaan Ahmed",
    publishedAt: "August 26th, 2023",
  },
] as const;

export function getBlogPosts(): readonly BlogPost[] {
  return posts;
}

export function getRecentPosts(limit = 2): readonly BlogPost[] {
  return posts.slice(0, limit);
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find((post) => post.slug === slug);
}


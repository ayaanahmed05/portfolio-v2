export type Project = {
  slug: string;
  title: string;
  description: string;
  technologies: readonly string[];
  liveUrl: string;
  repositoryUrl: string;
};

export const projects: readonly Project[] = [
  {
    slug: "placeholder",
    title: "Project Title",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. [Insert a concise project summary.]",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://example.com",
    repositoryUrl: "https://github.com",
  },
  {
    slug: "placeholder-alpha",
    title: "Project Title Alpha",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. [Insert a concise project summary.]",
    technologies: ["React", "Node.js", "PostgreSQL"],
    liveUrl: "https://example.com",
    repositoryUrl: "https://github.com",
  },
  {
    slug: "placeholder-beta",
    title: "Project Title Beta",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. [Insert a concise project summary.]",
    technologies: ["Figma", "Framer Motion", "Vercel"],
    liveUrl: "https://example.com",
    repositoryUrl: "https://github.com",
  },
] as const;

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

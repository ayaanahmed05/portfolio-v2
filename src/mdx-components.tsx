import type { MDXComponents } from "mdx/types";
import Image from "next/image";

function Callout({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-6 rounded-lg border border-border bg-muted/50 p-4 text-sm text-foreground">
      {children}
    </div>
  );
}

function ImagePlaceholder({ label }: { label: string }) {
  return (
    <div
      aria-label={label}
      role="img"
      className="site-grid my-10 flex aspect-[16/9] items-end justify-between overflow-hidden rounded-lg border border-border bg-muted/45 p-5"
    >
      <span className="font-mono text-[0.65rem] uppercase tracking-[0.12em] text-muted-foreground">
        {label}
      </span>
      <span aria-hidden="true" className="size-10 rounded-full border border-primary/45" />
    </div>
  );
}

const customComponents: MDXComponents = {
  Callout, 
  ImagePlaceholder,
  Image,
  img: ({ src, alt }) => {
    if (!src) return null;

    return (
      <figure className="my-10 flex flex-col items-center">
        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg border border-border/70 bg-muted/30 shadow-xs transition-shadow hover:shadow-md">
          <Image
            src={src}
            alt={alt || "Article illustration"}
            fill
            sizes="(max-width: 768px) 100vw, 720px"
            className="object-cover transition-transform duration-700 ease-out hover:scale-[1.015]"
          />
        </div>
        {alt && (
          <figcaption className="mt-3 text-center font-mono text-[0.7rem] uppercase tracking-[0.08em] text-muted-foreground/80">
            {alt}
          </figcaption>
        )}
      </figure>
    );
  },
  h2: (props) => (
    <h2
      className="mt-14 text-2xl font-medium tracking-[-0.04em] text-foreground sm:text-3xl"
      {...props}
    />
  ),
  h3: (props) => (
    <h3 className="mt-10 text-lg font-medium tracking-[-0.025em] text-foreground" {...props} />
  ),
  p: (props) => <p className="text-pretty text-base leading-8 text-muted-foreground sm:text-lg" {...props} />,
  ul: (props) => <ul className="flex list-disc flex-col gap-3 pl-5 text-muted-foreground" {...props} />,
  ol: (props) => <ol className="flex list-decimal flex-col gap-3 pl-5 text-muted-foreground" {...props} />,
  li: (props) => <li className="pl-1 leading-7" {...props} />,
  a: (props) => <a className="text-primary underline underline-offset-4 hover:opacity-70" {...props} />,
  code: (props) => <code className="font-mono text-[0.85em] text-foreground" {...props} />,
};

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return { 
    ...components, 
    ...customComponents,
  };
}

/// <reference types="mdx" />
import type { ReactElement } from "react";
import type { MDXProps } from "mdx/types";

type MDXModule = { default: (props: MDXProps) => ReactElement };

export const postContent: Record<string, () => Promise<MDXModule>> = {
  "calgary-trip": () => import("../../content/blog/calgary-trip.mdx"),
  "ufc-montreal": () => import("../../content/blog/ufc-montreal.mdx"),
};
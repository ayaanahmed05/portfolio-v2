/// <reference types="mdx" />
import type { ReactElement } from "react";
import type { MDXProps } from "mdx/types";

type MDXModule = { default: (props: MDXProps) => ReactElement };

export const projectContent: Record<string, () => Promise<MDXModule>> = {
  "smr-decision-support": () => import("../../content/projects/smr-decision-support.mdx"),
  "spam-email": () => import("../../content/projects/spam-email.mdx"),
  "battery-chatbot": () => import("../../content/projects/battery-chatbot.mdx"),
  "calendar-web-app": () => import("../../content/projects/calendar-web-app.mdx"),
  "course-planner": () => import("../../content/projects/course-planner.mdx"),
  "crypto-platform": () => import("../../content/projects/crypto-platform.mdx"),
  "game-review-site": () => import("../../content/projects/game-review-site.mdx"),
  "maze-solver": () => import("../../content/projects/maze-solver.mdx"),
  "nutri-ai": () => import("../../content/projects/nutri-ai.mdx"),
  "sdv-fault-sim": () => import("../../content/projects/sdv-fault-sim.mdx"),
};
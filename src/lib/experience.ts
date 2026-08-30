export type ExperienceItem = {
  type: "internship" | "leadership" | "education";
  role: string;
  organization: string;
  date: string;
  highlights: readonly string[];
  technologies?: readonly string[];
};

export const experience: readonly ExperienceItem[] = [
  {
    type: "internship",
    role: "Software Engineering Intern",
    organization: "Company Name",
    date: "[Month YYYY] — [Month YYYY]",
    technologies: ["TypeScript", "React", "[Technology]"],
    highlights: [
      "[Describe a technical contribution and its measurable outcome.]",
      "[Describe a collaboration outcome, scope, or performance metric.]",
    ],
  },
  {
    type: "leadership",
    role: "University Club Leadership Role",
    organization: "University Club Name",
    date: "[Month YYYY] — [Month YYYY]",
    highlights: [
      "[Describe the team, initiative, or event you led.]",
      "[Add a tangible outcome, participation metric, or result.]",
    ],
  },
  {
    type: "leadership",
    role: "University Club Leadership Role",
    organization: "University Club Name",
    date: "[Month YYYY] — [Month YYYY]",
    highlights: [
      "[Describe the team, initiative, or event you led.]",
      "[Add a tangible outcome, participation metric, or result.]",
    ],
  },
  {
    type: "education",
    role: "University Degree",
    organization: "University Name",
    date: "Expected [YYYY]",
    highlights: [
      "[Insert program focus, relevant coursework, or academic distinction.]",
    ],
  },
] as const;

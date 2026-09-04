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
    role: "IT Architect Intern",
    organization: "Ornge",
    date: "September 2026 - December 2026",
    technologies: ["Azure DevOps", "Git", "Docker", "Selenium", "Postman", "Python", "C#", "SQL", "Bash"],
    highlights: [
      "Engineered and maintained automated regression scripts using Selenium and C# to streamline release validation, reducing manual testing effort and identifying software defects early in the release cycle.",
      "Executed end-to-end API testing across web services using Postman and Python, validating dynamic endpoints and data payloads to maintain software reliability across environments",
      "Managed defect lifecycle tracking and test plan execution within Azure DevOps, collaborating directly with software developers to expand code coverage across major application enhancements.",
      "Integrated enterprise software into static and dynamic security scanning tools to identify OWASP top vulnerabilities early in the software development lifecycle.",
      "Conducted security audits across REST API endpoints and application architecture, documenting security controls and configuration details to mitigate data exposure risks.",
      "Standardized AppSec workflows by building technical vulnerability management checklists and security onboarding procedures for engineering teams.",
      "Evaluated enterprise software architecture and system dependencies across cloud and on-premise hosting models to map integration pathways and optimize data flow",
      "Audited backend databases using SQL to verify system data schemas and hosting environments, improving technical inventory accuracy for architecture decision-making.",
      "Authored technical architecture guides and operational documentation within Azure DevOps to accelerate team onboarding and streamline software governance.",
    ],
  },
  
  {
    type: "internship",
    role: "Data Clerk Intern",
    organization: "MyUniGuide",
    date: "April 2026 - August 2026",
    technologies: ["Microsoft Excel", "Google Sheets"],
    highlights: [
      "Performed accurate and efficient data entry of student information into the company's database, ensuring data integrity and confidentiality.",
      "Assisted in the development of a streamlined data entry process, reducing errors and improving overall efficiency.",
      "Collaborated with team members to verify and validate data, contributing to the maintenance of high-quality records."
    ],
  },
  {
    type: "leadership",
    role: "Vice President, Communications & Marketing",
    organization: "CITech OTU",
    date: "september 2025 - present",
    highlights: [
      "Led communications and marketing strategy for a student-led technology organization, scaling engagement across initiatives and events through targeted outreach and digital campaigns.",
      "Coordinated partnerships and outreach with industry mentors, professionals, and speakers, strengthening the organization's technical network and mentorship pipeline.",
      "Scaled overall engagement across digital platforms, driving targeted video campaigns that achieved 10,000+ views.",
      "Spearheaded multi-channel promo strategies for workshops and panels, directly boosting turnout to 100+ attendees per event.",
    ],
  },
  {
    type: "leadership",
    role: "Co-Founder & Vice President",
    organization: "Project Developers",
    date: "september 2024 — present",
    highlights: [
      "Founded and grew the club to 100+ active members, fostering a strong community of aspiring developers.",
      "Organized and led 5+ large-scale networking events annually, bringing together 200+ students to encourage collaboration, knowledge-sharing, and the development of innovative projects.",
      "Led 6+ cross-functional teams to deliver 6+ projects, improving collaboration, problem-solving, and technical execution.",
      "Mentored 20+ students, providing guidance on technical skills, career development, and project management, resulting in improved performance and increased confidence.",
    ],
  },

  {
    type: "internship",
    role: "Freelance Web Developer",
    organization: "Self-Employed",
    date: "september 2023 — april 2026",
    highlights: [
      "Collaborated with multiple small businesses to design, develop, and revamp modern, responsive websites tailored to each client’s branding and goals, from initial concept to deployment.",
      "Delivered complete end-to-end web solutions using HTML, CSS, JavaScript, React, ensuring optimized performance and mobile compatibility, while enhancing client visibility through SEO optimization, UX-focused design, and integrated analytics tracking.",
      "Built strong client relationships by managing project timelines, gathering requirements, and providing continued technical support post-launch.",
      "Conducted stakeholder interviews and discovery sessions to gather client requirements, translating business goals into technical specifications and managing the full SDLC from initial wireframing to production deployment.",
    ],
  },

  {
    type: "education",
    role: "Bachelor of Engineering - Software Engineering",
    organization: "Ontario Tech University",
    date: "September 2023 — Present",
    highlights: [
      "President's List Recipient",
    ],
  },
] as const;

export const experienceLabels: Record<ExperienceItem["type"], string> = {
  internship: "Industry",
  leadership: "Leadership",
  education: "Education",
};

export function getRecentExperience(limit = 2): readonly ExperienceItem[] {
  return experience.slice(0, limit);
}


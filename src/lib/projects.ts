export type Project = {
  slug: string;
  title: string;
  description: string;
  technologies: readonly string[];
  imagePath?: string;
  liveUrl?: string;
  repositoryUrl?: string;
  featured?: boolean;
};

export const projects: readonly Project[] = [
  {
    slug: "smr-decision-support",
    title: "SMR Control Room Decision Support System",
    description: "Architected a safety-critical AI solution architecture for a Small Modular Reactor (SMR) control room, combining real-time digital twin analytics with human-factors data. Built a dual-agent workflow featuring an AI Safety Supervisor that validates proposed operator actions and provides explainable, step-by-step guidance during critical scenarios.",
    technologies: ["Multi-Agent AI", "Digital Twin", "Explainable AI", "System Architecture"],
    imagePath: "/projects/smr.jpeg",
    // liveUrl: "https://example.com",
    repositoryUrl: "https://github.com/ayaanahmed05/SMR-Control-Room-Decision-Support-System/",
    featured: true,
  },
  {
    slug: "sdv-fault-sim",
    title: "Software-Defined Vehicle Fault Simulation & SiL Platform",
    description: "Architected a 5-layer Software-in-the-Loop (SiL) platform using Rust, Python, and Eclipse SDV frameworks for real-time vehicle telemetry and digital-twin fault diagnosis. Integrated automated fault-injection testing into a Jenkins CI/CD pipeline, achieving sub-50ms 95th-percentile latency and throughput exceeding 300 messages per second.",
    technologies: ["Python", "Rust", "Docker", "Jenkins"],
    imagePath: "/projects/sdv-fault-sim.jpg",
    // liveUrl: "https://example.com",
    repositoryUrl: "https://github.com/ayaanahmed05/vehicular-digital-twin-pipeline",
    featured: true,
  },
  {
    slug: "battery-chatbot",
    title: "AI & ML Battery Health Prediction System",
    description: "Engineered an award-winning (2nd place) battery health prediction platform that uses Scikit-learn regression models to forecast multi-cell battery State-of-Health (SoH) from raw telemetry. Integrated a scalable data-preprocessing pipeline with a React Native mobile interface and a Gemini-powered AI diagnostic assistant for real-time system monitoring.",
    technologies: ["Python", "Scikit-learn", "React Native"],
    imagePath: "/projects/battery-chatbot.png",
    // liveUrl: "https://example.com",
    repositoryUrl: "https://github.com/Inshalc/battery-soh-chatbot",
  },
  {
    slug: "course-planner",
    title: "Graph-Based Course Planning Platform",
    description: "Engineered a graph-based course planning platform that uses Scrapy web scrapers to extract university course catalogs and models academic pathways in Neo4j. Built an interactive web application running optimized Cypher queries to map complex prerequisite networks, dynamically generate degree plans, and resolve scheduling conflicts.",
    technologies: ["Scrapy", "Neo4j", "Cypher", "Python"],
    imagePath: "/projects/course-planner.png",
    // liveUrl: "https://example.com",
    repositoryUrl: "https://github.com/ayaanahmed05/UniScraper",
  },
  {
    slug: "maze-solver",
    title: "High-Performance Pathfinding & Maze Analytics Engine",
    description: "Engineered a high-performance Java navigation engine implementing BFS and DFS algorithms with bit-masking state tracking, achieving a 40% improvement in traversal speed across large-scale grid datasets. Designed custom, low-overhead data structures to prevent heap bloat during deep exploration and validated pathfinding accuracy",
    technologies: ["Java", "OOP", "Data Structures"],
    imagePath: "/projects/maze.jpg",
    // liveUrl: "https://example.com",
    repositoryUrl: "https://github.com/ayaanahmed05/Maze-Solver",
  },
  {
    slug: "spam-email",
    title: "Spam Email Classifier",
    description: "Developed an automated natural language processing (NLP) and machine learning pipeline to classify incoming emails as spam or ham (legitimate). Designed to minimize security risks and clean inbox clutter, the platform processes raw email text through tokenization and TF-IDF feature extraction before passing data to trained supervised models for high-precision, real-time prediction.",
    technologies: ["Python", "Scikit-Learn", "Pandas", "NumPy", "NLTK (Natural Language Toolkit)", "TF-IDF Vectorizer", "Jupyter Notebooks"],
    imagePath: "/projects/spam-mail.png",
    // liveUrl: "https://example.com",
    repositoryUrl: "https://github.com/ayaanahmed05/Maze-Solver",
  },
  {
    slug: "nutri-ai",
    title: "NutriAI - AI-Powered Meal Plan Generator",
    description: "Built NutriAI: a full-stack, AI-powered meal planning application—in under 12 hours during HackHive 2024. Integrated a local Microsoft Phi-3.5-mini-instruct LLM with a Node.js/Express backend and React frontend to transform complex user dietary requirements into personalized, structured meal plans.",
    technologies: ["Node.js", "Express.js", "React.js", "Microsoft Phi-3", "REST APIs"],
    imagePath: "/projects/nutri-ai.jpeg",
    // liveUrl: "https://example.com",
    repositoryUrl: "https://github.com/ayaanahmed05/NutriAI",
  },
  {
    slug: "crypto-platform",
    title: "Cryptocurrency Trading Simulation - Team Lead",
    description: "Led a 5-developer engineering team to build a real-time cryptocurrency trading simulator designed for testing strategies in a risk-free environment. Architected an event-driven WebSocket pipeline for live market synchronization and built a React dashboard for real-time portfolio analytics and transaction tracking.",
    technologies: ["Python", "WebSockets", "React", "SQL", "Figma"],
    imagePath: "/projects/crypto.jpeg",
    // liveUrl: "https://example.com",
    // repositoryUrl: "https://github.com/ayaanahmed05/NutriAI",
  },
  {
    slug: "game-review-site",
    title: "Game Review Website",
    description: "Developed an award-winning full-stack game review website recognized as a top-10 class project for exceptional usability and UI/UX design. Built dynamic server-side data pipelines using PHP, client-side interactions in JavaScript, and managed version control workflows through Git and GitHub.",
    technologies: ["GitHub", "HTML", "CSS", "JavaScript", "PHP"],
    // liveUrl: "https://example.com",
    repositoryUrl: "https://github.com/RayanK05/ReviewWebsite",
  },
  {
    slug: "calendar-web-app",
    title: "Calendar Web App",
    description: "Built an interactive frontend calendar application using vanilla HTML, CSS, and JavaScript for client-side schedule management. Implemented browser LocalStorage to persist events across sessions, utilizing native JavaScript event listeners to handle dynamic DOM rendering, date navigation, and event creation.",
    technologies: ["HTML", "CSS", "JavaScript"],
    imagePath: "/projects/calendar.jpeg",
    // liveUrl: "https://example.com",
    repositoryUrl: "https://github.com/ayaanahmed05/Calendar-Web-App",
  },
] as const;

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getFeaturedProjects(limit = 2): readonly Project[] {
  const featured = projects.filter((project) => project.featured);
  return (featured.length > 0 ? featured : projects).slice(0, limit);
}


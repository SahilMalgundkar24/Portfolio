export const projects = [
  {
    title: "Codebase Intelligence Platform",
    image: "/images/demo2.jpeg",
    tags: ["Next.js", "RAG", "Claude", "Pinecone"],
    category: "AI",
    year: "2025",
    description:
      "AI-powered code intelligence platform indexing 500+ file GitHub repos with hybrid RAG retrieval (vector + BM25 fusion), architecture wiki generation, dependency-impact analysis, and streaming Claude responses via Vercel AI SDK with Pinecone vector storage.",
    link: "https://github.com/SahilMalgundkar24/AI-Codebase-Intelligence-Platform",
    featured: true,
  },
  {
    title: "AI Agent for Job Application",
    image: "/images/aiagent1.jpeg",
    tags: ["Next.js", "Vercel AI SDK", "Claude"],
    category: "AI",
    year: "2026",
    description:
      "AI Agent for Job Application using Next.js, Vercel AI SDK, and Claude which extracts skills analyze job description, calculates ats score and generates a cover letter.",
    link: "https://github.com/SahilMalgundkar24/AI-Job-Application-Agent",
    featured: true,
  },
  {
    title: "Multi-Agent Startup Research System",
    image: "/images/aiagent2.png",
    tags: ["Next.js", "Vercel AI SDK", "Claude"],
    category: "AI",
    year: "2026",
    description:
      "Multi-Agent Startup Research System using Next.js, Vercel AI SDK, and Claude that turns scattered information into a structured startup briefing.",
    link: "https://github.com/SahilMalgundkar24/multi-agent-startup-research",
    featured: true,
  },
  {
    title: "VeriSure — AI Document Verification",
    image: "/images/ProjectThree.png",
    tags: ["Next.js", "TensorFlow", "OCR", "CNN"],
    category: "AI",
    year: "2024",
    description:
      "Built an AI-powered document verification pipeline using OCR (Pytesseract) and a trained CNN, achieving 99% verification accuracy and cutting manual review time by 80%. Real-time fraud detection processes documents in under 3 seconds.",
    link: "https://github.com/SahilMalgundkar24/VeriSure-Frontend",
    featured: true,
  },
  {
    title: "ODOP — One District One Product",
    image: "/images/ProjectTwo.png",
    tags: ["React Native", "Blockchain", "Django", "AI"],
    category: "Mobile",
    year: "2024",
    description:
      "Cross-platform mobile app for the government's ODOP scheme with Hyperledger blockchain for product authenticity, AI-driven recommendation systems, and Django REST backend — increasing local artisans' income by 60%.",
    link: "https://youtu.be/b-pQvemBHus?si=y-lcYHj-DqQV31hH",
    featured: true,
  },
  {
    title: "Nomadica - A smart itinerary generator",
    image: "/images/nomadica.webp",
    tags: ["React Native", "Node.js", "Express", "Firebase"],
    category: "AI",
    year: "2026",
    description:
      "Nomadica is a smart itinerary generator that uses AI to create a personalized itinerary for your trip.",
    link: "https://github.com/Tejas-Gawde/Nomadica",
    featured: false,
  },
  {
    title: "Sunrisers Hyderabad",
    image: "/images/sunrisers.png",
    tags: ["Next.js", "React", "Real-time APIs"],
    category: "Client",
    year: "2026",
    description:
      "Official IPL franchise website built with Next.js — handling 600,000+ API requests/hour during live matches with optimised Core Web Vitals and pixel-perfect Figma implementation.",
    link: "https://www.sunrisershyderabad.in/",
    featured: false,
  },
  {
    title: "Epic Bite",
    image: "/images/epicbite.png",
    tags: ["Next.js", "React Native", "Supabase"],
    category: "Client",
    year: "2025",
    description:
      "Content-driven food creator platform spanning web and mobile with Supabase backend, scalable CMS workflows, and performance-tuned responsive UI.",
    link: "http://myepicbite.com/",
    featured: false,
  },
  {
    title: "First Inspiration",
    image: "/images/firstinspiration.png",
    tags: ["Next.js"],
    category: "Client",
    year: "2025",
    description:
      "FirstInspiration is a platform designed to educate and empower individuals through expert-led webinars on the share market.",
    link: "https://first-inspiration.vercel.app/",
    featured: false,
  },
  {
    title: "Adzeeny",
    image: "/images/adzeeny.png",
    tags: ["Next.js"],
    category: "Client",
    year: "2025",
    description:
      "Adzeeny is a team of developers, designers, and marketers who help startups and brands turn their ideas into impactful digital platforms.",
    link: "https://adzeeny.com/",
    featured: false,
  },
  {
    title: "RK Towing",
    image: "/images/rktowing.png",
    tags: ["Next.js"],
    category: "Client",
    year: "2025",
    description:
      "RK Towing is a towing company that provides towing services to the public and also offers roadside assistance services.",
    link: "https://rktowing.com/",
    featured: false,
  },
];

export const featuredProjects = projects.filter((p) => p.featured);

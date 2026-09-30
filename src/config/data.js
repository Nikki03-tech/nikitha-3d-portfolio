const data = {
  name: "Nikitha Singh Raj Purohit",
  roles: ["Front-End Developer", "AI Enthusiast", "Full Stack Developer", "AI  Engineer"],
  bio: "I build thoughtful digital experiences at the intersection of AI, technology, and creativity. As a Computer Science & IT student, I enjoy turning ideas into interactive web applications and AI-powered solutions while continuously exploring how technology can create a more inclusive future.",

  // ─── ABOUT ───────────────────────────────────────────────────────────────────
  // Edit these strings to update the About section. No component changes needed.
  aboutP1: "I’m a Computer Science & Information Technology student who loves turning ideas into technology. My journey has taken me from building web applications and experimenting with AI to creating projects that combine creativity, problem-solving, and real-world usefulness.",
  aboutP2: "I’m especially interested in Artificial Intelligence, Generative AI, front-end development, and building products that feel intuitive and meaningful. I enjoy learning by building — from AI-powered applications and research tools to interactive web experiences — and I’m constantly exploring new technologies that can turn an idea into something people can actually use.",
  aboutP3: "I also believe technology should be a space where women can create, lead, experiment, and be heard. As a woman in tech, I want my work to reflect both technical curiosity and confidence — while encouraging more women to explore AI, software, and the possibilities of building their own future with with technology."
  email: "nikkiraj2504@gmail.com",
  phone: "+91-8074991397",
  location: "Hyderabad,India",
  linkedin: "linkedin.com/in/nikitha-singh-raj-purohit-862317301",
  github: "https://github.com/Nikki03-tech",
  resume: "/resume.pdf",

  // ─── STATS ───────────────────────────────────────────────────────────────────
  // Remove or add stat objects here. No emoji - plain labels only.
  stats: [
  { val: "8.0",  label: "CGPA" },
  { val: "5+",   label: "Projects Built" },
  { val: "2",    label: "Internships" },
  { val: "7+",   label: "Certifications & Simulations" },
],

  // ─── TECH STACK ──────────────────────────────────────────────────────────────
  // Add new technologies here. cat values: Backend, Frontend, Data, Cloud, Tools, AI/ML, Data Tools
  stack: [
  // Frontend
  { name: "JavaScript", cat: "Frontend" },
  { name: "React", cat: "Frontend" },
  { name: "HTML5", cat: "Frontend" },
  { name: "CSS3", cat: "Frontend" },
  { name: "Streamlit", cat: "Frontend" },
  { name: "Chart.js", cat: "Frontend" },
  { name: "Responsive UI Design", cat: "Frontend" },

  // Backend & APIs
  { name: "Node.js", cat: "Backend" },
  { name: "Express.js", cat: "Backend" },
  { name: "REST APIs", cat: "Backend" },
  { name: "API Integration", cat: "Backend" },

  // AI / Engineering
  { name: "Python", cat: "AI/ML" },
  { name: "LangChain", cat: "AI/ML" },
  { name: "DeepAgents", cat: "AI/ML" },
  { name: "Multi-Agent AI", cat: "AI/ML" },
  { name: "Prompt Engineering", cat: "AI/ML" },
  { name: "Groq", cat: "AI/ML" },

  // Core
  { name: "Data Structures & Algorithms", cat: "Tools" },
  { name: "Object-Oriented Programming", cat: "Tools" },
  { name: "DBMS", cat: "Tools" },

  // Tools
  { name: "Git", cat: "Tools" },
  { name: "GitHub", cat: "Tools" },
  { name: "VS Code", cat: "Tools" },
  { name: "Postman", cat: "Tools" },
  { name: "Render", cat: "Tools" },
  { name: "DuckDuckGo Search", cat: "Tools" },
],

   ─── EXPERIENCE ──────────────────────────────────────────────────────────────
  // Add new roles by pushing a new object. current: true shows the "Current" badge.
  experience: [
  {
    role: "AI Virtual Intern",
    company: "Infosys — Virtual Internship 7.0",
    location: "Remote",
    period: "Jul 2026 – Sep 2026",
    current: false,
    desc: "Built an end-to-end AI-powered web application focused on startup idea validation and market research.",
    points: [
      "Architected and developed the AI Startup Idea Validator using Python, DeepAgents, and Streamlit.",
      "Built dynamic dashboards with real-time execution status tracking, interactive pitch-evaluation reports, and conversational AI Q&A.",
      "Integrated specialized agents for web search, market analysis, competitor analysis, SWOT and risk analysis, MVP scope, and go-to-market strategy.",
      "Integrated DuckDuckGo Search for live web data extraction and Groq LPU inference for responsive AI workflows.",
    ],
  },
  {
    role: "Associate Project Manager Intern",
    company: "Excelerate",
    location: "Remote",
    period: "Dec 2025 – Jan 2026",
    current: false,
    desc: "Supported cross-functional project planning, execution, communication, and product milestone tracking.",
    points: [
      "Supported cross-functional project planning, deliverable tracking, and execution of product milestones.",
      "Facilitated communication between technical teams and non-technical stakeholders while maintaining project documentation and workflow tracking.",
    ],
  },
], 
  // ─── EDUCATION ───────────────────────────────────────────────────────────────
  education: [
  {
    degree: "B.Tech in Computer Science & Information Technology",
    school: "Malla Reddy College of Engineering and Technology",
    location: "Hyderabad, Telangana",
    period: "2023 – 2027",
    image: "/MRCET.jpg",
    bullets: [
      "CGPA: 8.0 / 10",
      "Focus areas: Web Development, Artificial Intelligence, Data Structures & Algorithms, Object-Oriented Programming, and DBMS",
    ],
  },
  {
    degree: "Intermediate — MPC",
    school: "Narayana Junior College",
    location: "Hyderabad, Telangana",
    period: "2021 – 2023",
    image: "/Narayana.jpg",
    bullets: [
      "88% — 8.8 CGPA",
    ],
  },
  {
    degree: "Secondary School Certificate",
    school: "Gowtham Model School",
    location: "Hyderabad, Telangana",
    period: "2011 – 2021",
    image: "/Gowtham.jpg",
    bullets: [
      "100% — 10 CGPA",
    ],
  },
],
  // ─── PROJECTS ────────────────────────────────────────────────────────────────
  // To add a project: push a new object to this array.
  // featured: true  → large card in the top featured row (keep to 2 max)
  // featured: false → smaller card in the grid below
  // date: shown as a tag. live/github: set to null to hide the button.
  projects: [
  {
    title: "AI Startup Idea Validator",
    sub: "Multi-Agent Intelligence Platform",
    date: "2026",
    desc: "An AI-powered startup research and validation platform that analyzes business ideas through specialized agents for market research, competitor analysis, SWOT and risk assessment, MVP planning, and go-to-market strategy. Built with Python, DeepAgents, Groq LPU, Streamlit, and live web search.",
    tech: [
      "Python",
      "DeepAgents",
      "Groq",
      "Streamlit",
      "Multi-Agent AI",
      "DuckDuckGo Search"
    ],
    live: null,
    github: "https://github.com/Nikki03-tech/Ai-startup-idea-validator",
    featured: true,
    accent: 0,
  },

  {
    title: "FinWise AI",
    sub: "Personal Financial Copilot",
    date: "2026",
    desc: "A GenAI-powered financial web platform using specialized News, Investment, Risk, and Decision agents to generate automated market insights. Includes interactive investment-growth visualizations and automated risk warnings.",
    tech: [
      "Node.js",
      "Express.js",
      "JavaScript",
      "Chart.js",
      "GenAI",
      "Multi-Agent System"
    ],
    live: null,
    github: null,
    featured: true,
    accent: 1,
  },

  {
    title: "DSA Visualizer",
    sub: "Interactive Algorithm Learning Platform",
    date: "2026",
    desc: "An interactive web application that visualizes core data structures and sorting algorithms through step-by-step animations. Users can control animation speed while learning how Bubble Sort, Selection Sort, and Insertion Sort work.",
    tech: [
      "JavaScript",
      "HTML5",
      "CSS3",
      "DSA",
      "Interactive UI"
    ],
    live: null,
    github: "https://github.com/Nikki03-tech/DSA-Visualizer",
    featured: false,
    accent: 2,
  },


  {
    title: "Monster Battle Ground",
    sub: "2D Interactive Web Game",
    date: "2026",
    desc: "A browser-based 2D game featuring animated gameplay, player controls, enemy interactions, scoring, game states, and win/lose screens. Built as an interactive front-end project with custom UI and game logic.",
    tech: [
      "HTML",
      "CSS",
      "JavaScript",
      "Game Development",
      "Interactive UI"
    ],
    live: null,
    github: "https://github.com/Nikki03-tech/Monster-Battle-Ground-2D-Game-",
    featured: false,
    accent: 1,
  },

  {
    title: "Tech + AI Portfolio",
    sub: "My Interactive Developer Portfolio",
    date: "2026",
    desc: "A bright, interactive portfolio showcasing my journey as a woman in technology, with a focus on AI, front-end development, creative problem solving, and building technology with purpose.",
    tech: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion"
    ],
    live: null,
    github: "https://github.com/Nikki03-tech/nikitha-final-portfolio",
    featured: false,
    accent: 2,
  },
],
  // ─── CERTIFICATIONS ──────────────────────────────────────────────────────────
  certifications: [
  {
    name: "Generative AI Certification",
    issuer: "Infosys Springboard",
    date: "2026",
    url: null,
    licenseId: null,
    preview: null,
  },
  {
    name: "Artificial Intelligence Primer",
    issuer: "Infosys Springboard",
    date: "2026",
    url: null,
    licenseId: null,
    preview: null,
  },
  {
    name: "Agile Explorer",
    issuer: "IBM SkillsBuild",
    date: "2026",
    url: null,
    licenseId: null,
    preview: null,
  },
  {
    name: "Cybersecurity Fundamentals",
    issuer: "IBM SkillsBuild",
    date: "2026",
    url: null,
    licenseId: null,
    preview: null,
  },
  {
    name: "Software Engineering Job Simulation",
    issuer: "Accenture Nordics",
    date: "2026",
    url: null,
    licenseId: null,
    preview: null,
  },
  {
    name: "AWS Solutions Architecture Job Simulation",
    issuer: "AWS Forage",
    date: "2026",
    url: null,
    licenseId: null,
    preview: null,
  },
  {
    name: "Semi-Finalist — ET AI Hackathon 2026",
    issuer: "ET AI",
    date: "2026",
    url: null,
    licenseId: null,
    preview: null,
  },
],
};

export default data;

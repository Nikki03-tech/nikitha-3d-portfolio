const data = {
  name: "Chinmay Sakhare",
  roles: ["Cloud Native Software Engineer", "AI Enthusiast", "Full Stack Developer", "Data & Analytics Engineer"],
  bio: "I build software that can't afford to fail. Four years at AuroPay engineering the payment systems, APIs, and microservices behind 50,000+ daily transactions. Now doing my Master's at Northeastern, looking for a Fall 2026 / Spring 2027 co-op where I can ship real software with a great team.",

  // ─── ABOUT ───────────────────────────────────────────────────────────────────
  // Edit these strings to update the About section. No component changes needed.
  aboutP1: "I didn't take the traditional route into software. I studied electronics engineering, then started teaching myself to code on the side, grinding LeetCode, building small projects, and breaking plenty of them along the way. At some point it stopped being a hobby and became the thing I actually wanted to do.",
  aboutP2: "That path led me to AuroPay, where I spent four years building the backend for a real-time payments platform and learning how to keep systems reliable at scale. Now I'm at Northeastern for my Master's in Information Systems, going deeper on systems design, data engineering, and applied AI, and looking for a Fall 2026 / Spring 2027 co-op with a team that cares about getting things right.",
  aboutP3: "Outside of work, you'll find me at the gym, spotting planes taking off from Logan, or on a Costco run.",

  email: "sakhare.c@northeastern.edu",
  phone: "857-421-2839",
  location: "Boston, MA",
  linkedin: "https://www.linkedin.com/in/chinmaysakhare/",
  github: "https://github.com/Chinmay-Sakhare07",
  resume: "/resume.pdf",

  // ─── STATS ───────────────────────────────────────────────────────────────────
  // Remove or add stat objects here. No emoji - plain labels only.
  stats: [
    { val: "4",    label: "Years Building Software" },
    { val: "50K+", label: "Daily Txns Processed" },
    { val: "6",    label: "Certifications" },
    { val: "40%",  label: "API Throughput Gain" },
  ],

  // ─── TECH STACK ──────────────────────────────────────────────────────────────
  // Add new technologies here. cat values: Backend, Frontend, Data, Cloud, Tools, AI/ML, Data Tools
  stack: [
    { name: ".NET",                cat: "Backend"    },
    { name: "C#",                  cat: "Backend"    },
    { name: "Java",                cat: "Backend"    },
    { name: "Python",              cat: "Backend"    },
    { name: "Node.js",             cat: "Backend"    },
    { name: "FastAPI",             cat: "Backend"    },
    { name: "React",               cat: "Frontend"   },
    { name: "Angular",             cat: "Frontend"   },
    { name: "TypeScript",          cat: "Frontend"   },
    { name: "JavaScript",          cat: "Frontend"   },
    { name: "Tailwind",            cat: "Frontend"   },
    { name: "HTML/CSS",            cat: "Frontend"   },
    { name: "Streamlit",           cat: "Frontend"   },
    { name: "SQL Server",          cat: "Data"       },
    { name: "MySQL",               cat: "Data"       },
    { name: "PostgreSQL",          cat: "Data"       },
    { name: "MongoDB",             cat: "Data"       },
    { name: "Cassandra",           cat: "Data"       },
    { name: "Snowflake",           cat: "Data"       },
    { name: "Databricks",          cat: "Data"       },
    { name: "AWS",                 cat: "Cloud"      },
    { name: "Azure",               cat: "Cloud"      },
    { name: "Docker",              cat: "Cloud"      },
    { name: "Kubernetes",          cat: "Cloud"      },
    { name: "Fly.io",              cat: "Cloud"      },
    { name: "Supabase",            cat: "Cloud"      },
    { name: "Git",                 cat: "Tools"      },
    { name: "GitHub",              cat: "Tools"      },
    { name: "GitHub Actions",      cat: "Tools"      },
    { name: "FFmpeg",              cat: "Tools"      },
    { name: "Postman",             cat: "Tools"      },
    { name: "VS Code",             cat: "Tools"      },
    { name: "IntelliJ",            cat: "Tools"      },
    { name: "PyTorch",             cat: "AI/ML"      },
    { name: "YOLOv8",              cat: "AI/ML"      },
    { name: "OpenCV",              cat: "AI/ML"      },
    { name: "scikit-learn",        cat: "AI/ML"      },
    { name: "Groq",                cat: "AI/ML"      },
    { name: "Llama 3.3",           cat: "AI/ML"      },
    { name: "Edge TTS",            cat: "AI/ML"      },
    { name: "Power BI",            cat: "Data Tools" },
    { name: "Tableau",             cat: "Data Tools" },
    { name: "Azure Data Factory",  cat: "Data Tools" },
    { name: "SSMS",                cat: "Data Tools" },
    { name: "DBeaver",             cat: "Data Tools" },
    { name: "Navicat",             cat: "Data Tools" },
    { name: "ER Studio",           cat: "Data Tools" },
  ],

  // ─── EXPERIENCE ──────────────────────────────────────────────────────────────
  // Add new roles by pushing a new object. current: true shows the "Current" badge.
  experience: [
    {
      role: "Software Engineer",
      company: "Aurionpro Payments (AuroPay)",
      location: "Mumbai, India",
      period: "Dec 2021 – Aug 2025",
      current: false,
      desc: "Engineered secure, compliant, scalable, event-driven microservices for AuroPay's real-time payments platform supporting high-volume transactions.",
      points: [
        "Reconciliation Engine: Architected a PostgreSQL-backed reconciliation pipeline processing 50,000+ daily transactions, reducing error rates by 90% and automating 60-80% of previously manual verification work across the merchant payments lifecycle. Every decimal had to be right.",
        "API Throughput Optimization: Optimized API throughput by 40% through profiling .NET Core service layers and restructuring MySQL query execution plans, sustaining platform performance under peak transaction loads of 50,000+ daily requests.",
        "Audit Logging & Observability: Designed an audit logging and observability framework using AWS CloudWatch with structured logging, custom metrics, and alerting across distributed services, reducing production incident resolution time by 30-50%.",
        "Fraud & Velocity Rule Engine: Engineered a fraud and velocity rule engine evaluating live transaction streams: an UN-watchlist blacklisting layer and a configurable velocity layer catching 15% more anomalies and driving 20% feature adoption among operations teams.",
        "Webhook Notification Platform: Identified the gap in merchant self-serve integrations, designed and shipped a webhook notification platform end to end, reducing client onboarding time by 25%. Scoped the work, owned the outcome.",
        "RBAC & AES-256 Encryption: Implemented IAM-aligned RBAC access control with AES-256 column-level encryption, enforcing role-based data visibility across 200+ merchant accounts on a multi-tenant payments platform in compliance with PCI DSS requirements.",
        "Analytics API Layer: Developed an API-first analytics layer using stored procedures and pre-aggregated database views, delivering role-scoped reporting across 3 user tiers (admins, merchants, resellers) at volume with zero real-time query overhead on raw tables.",
        "Payment Link Tracking: Deployed a real-time payment link tracking system providing complete lifecycle visibility across thousands of active links, including device and network metadata that fed downstream fraud detection pipelines.",
        "Buy Now Pay Later: Shipped a BNPL installment feature: merchants configured up to three payment plans per link; the system generated customer-specific schedules, automated reminders, and post-payment summaries. 20% merchant adoption within first quarter.",
        "Kiosk Applications: Delivered CDK, PBK, and MFK kiosk applications in .NET MVC and SQL Server to Kotak Mahindra Bank, Axis Bank, and SBI across 500+ branches. Real bank branches, real customers, live nationwide.",
        "Mentorship: Mentored 5+ junior engineers through code reviews, system design walkthroughs, and incident retrospectives, reducing team downtime by 30%. Knowledge never depended on one person.",
      ],
    },
    {
      role: "Fitness Consultant",
      company: "Marino Recreation Center, Northeastern",
      location: "Boston, MA",
      period: "Sep 2025 – Present",
      current: true,
      desc: "Because building software is only half the fun.",
      points: [
        "Coach 50+ daily visitors on form, technique, and programming. Supervise ~100 patrons on the floor, ensuring equipment safety and a smooth gym environment.",
        "Handle real-time communication across a fast-paced facility - coordinating with staff, managing member concerns, and keeping the floor running without a hitch.",
      ],
    },
  ],

  // ─── EDUCATION ───────────────────────────────────────────────────────────────
  education: [
    {
      degree: "MS in Information Systems",
      school: "Northeastern University",
      location: "Boston, MA",
      period: "Sep 2025 – Aug 2027",
      image: "/NEU.jpg",
      bullets: [
        "Application Engineering and Development",
        "Data Management and Database Design",
        "Data Warehousing and Business Intelligence",
        "Data Science Engineering Methods and Tools",
      ],
    },
    {
      degree: "BE in Electronics Engineering",
      school: "RAIT - University of Mumbai",
      location: "Mumbai, India",
      period: "Graduated Jun 2021",
      image: "/RAIT.jpg",
      bullets: [
        "Thesis: ML-based classification of neurological disorders using EEG signals - Savitzky-Golay filtering, DWT feature extraction, and ANN classifiers. Achieved 80% accuracy.",
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
      title: "Duologue AI",
      sub: "Article / PDF / URL → Two-Host AI Podcast",
      date: "Jul 2026",
      desc: "Turns any article, PDF, URL, or topic into a two-host AI podcast, generated end to end on free infrastructure. Source text flows through an LLM-written script (Groq / Llama 3.3 70B in JSON mode), into text-to-speech, then stitched into a single MP3 and stored in a browsable episode library - all in a deployed Streamlit app. Built for production resilience: a fault-tolerant TTS fallback chain, graceful degradation, rate limiting, and a scheduled keep-alive for the database. Modular, pure-logic architecture with a thin UI layer - a practical study in shipping on free tiers and adapting when hosts, rate limits, and unofficial APIs shift underneath you.",
      tech: ["Python", "Streamlit", "Groq / Llama 3.3", "Edge TTS", "Supabase", "FFmpeg", "GitHub Actions"],
      live: "https://duologue-ai.streamlit.app/",
      github: "https://github.com/Chinmay-Sakhare07/duologue-ai",
      featured: true,
      accent: 0,
    },
    {
      title: "LogBase",
      sub: "Distributed Log Analytics Platform",
      date: "Mar – Apr 2026",
      desc: "Built a distributed log analytics system mirroring the internals of Splunk and Datadog. Python file-tailer agent ships events via HTTP with exponential backoff and disk buffering for at-least-once delivery. FastAPI ingestion validates and writes raw logs to Astra DB (Cassandra) partitioned by service and date. Hourly severity counts upserted into Neon PostgreSQL for cheap aggregation. React frontend with live tail, keyword search, time-range filters, CSV export, and a floating log generator for live demos.",
      tech: ["Python", "FastAPI", "Cassandra", "PostgreSQL", "React", "Docker", "Fly.io", "GitHub Actions"],
      live: "https://loganalyticssystem.vercel.app/",
      github: "https://github.com/Chinmay-Sakhare07/Log_Analytics_System",
      featured: true,
      accent: 1,
    },
    {
      title: "MediNexus",
      sub: "Hospital Management System",
      date: "Jan 2026",
      desc: "Full-stack hospital platform built for a database design course. 26-table normalized SQL Server schema, .NET Core REST APIs, React frontend. Covers patient registration, doctor scheduling, billing with insurance claims, and pharmacy inventory. Deployed on Azure and Netlify.",
      tech: [".NET Core", "React", "SQL Server", "Azure", "Tailwind"],
      live: "https://medinexushealth.netlify.app",
      github: "https://github.com/Chinmay-Sakhare07/MediNexus",
      featured: false,
      accent: 1,
    },
    {
      title: "VibeReact",
      sub: "Browser Audio Visualizer",
      date: "Oct 2025",
      desc: "Real-time audio visualizer that makes your screen react to music. Uses the Web Audio API to capture microphone input, runs FFT frequency analysis at 60fps, and detects beats by averaging bass-range frequency bins against a rolling threshold. Four visual modes: Strobe, Disco, RGB, and Rainbow.",
      tech: ["React 18", "Web Audio API", "Vite", "Vercel"],
      live: "https://vibereact.vercel.app/",
      github: "https://github.com/Chinmay-Sakhare07/VibeReact",
      featured: false,
      accent: 2,
    },
    {
      title: "Cafe Vision",
      sub: "Real-Time AI Analytics",
      date: "Feb 2025",
      desc: "Hackathon project at MGEN 2025. Real-time vision pipeline using YOLOv8 and OpenCV that processes live camera feeds with sub-second inference. Tracks customer engagement and staff productivity. Recognized by judges for practical business impact.",
      tech: ["Python", "YOLOv8", "OpenCV", "PyTorch"],
      live: null,
      github: "https://github.com/Chinmay-Sakhare07/CafeVison-MGEN_Hackathon_2025",
      featured: false,
      accent: 0,
    },
    {
      title: "Neuro Classifier",
      sub: "EEG Signal Processing",
      date: "Jun 2021",
      desc: "Undergraduate thesis. EEG analysis system in MATLAB that detects epilepsy from brain signals. Savitzky-Golay filtering for noise reduction, Discrete Wavelet Transform for feature extraction, ANN for classification. Achieved 80% accuracy across test subjects.",
      tech: ["MATLAB", "Machine Learning", "Signal Processing", "DWT", "ANN"],
      live: null,
      github: null,
      featured: false,
      accent: 1,
    },
  ],

  // ─── CERTIFICATIONS ──────────────────────────────────────────────────────────
  certifications: [
    { name: "AWS Certified Cloud Practitioner", issuer: "Amazon Web Services", date: "Jan 2024", url: "https://aws.amazon.com/verification", code: "98Z8MJ1D5B1QQYCY", licenseId: "98Z8MJ1D5B1QQYCY", preview: "/certs/AWS Certified Cloud Practitioner.pdf" },
    { name: "Enterprise Web Dev (.NET Core)", issuer: "Swabhav Techlabs", date: "Dec 2021", url: null, licenseId: null, preview: "/certs/Enterprise Web Dev (.NET Core).pdf" },
    { name: "Introduction to Java", issuer: "Coursera / LearnQuest", date: "Jul 2021", url: "https://coursera.org/verify/EMFSF56S7J2E", licenseId: null, preview: "/certs/Introduction to Java.pdf" },
    { name: "Programming for Everybody (Python)", issuer: "Coursera / U of Michigan", date: "Jun 2020", url: "https://coursera.org/verify/244ENWDYRM4F", licenseId: null, preview: "/certs/Programming for Everybody (Python).pdf" },
    { name: "Python Data Structures", issuer: "Coursera / U of Michigan", date: "Jul 2020", url: "https://coursera.org/verify/C8FQUSNS4D9T", licenseId: null, preview: "/certs/Python Data Structures.pdf" },
    { name: "Using Python to Access Web Data", issuer: "Coursera / U of Michigan", date: "Aug 2020", url: "https://coursera.org/verify/EQGHSCTACRW9", licenseId: null, preview: "/certs/Using Python to Access Web Data.pdf" },
    { name: "Responsive Websites (HTML5 & CSS3)", issuer: "Udemy", date: "Aug 2020", url: "https://ude.my/UC-27ed60f3-990b-45db-ba28-e425badd7e25", licenseId: null, preview: "/certs/Responsive Websites (HTML5 & CSS3).pdf" },
  ],
};

export default data;
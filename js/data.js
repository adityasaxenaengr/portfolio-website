/**
 * CENTRALIZED PORTFOLIO DATASET — ADITYA SAXENA
 */

window.PORTFOLIO_DATA = {
  profile: {
    name: "Aditya Saxena",
    title: "Full-Stack Developer & Software Engineer",
    tagline: "B.Tech Computer Science student passionate about Full-Stack Web Development, Python, and Java. 🚀",
    location: "Bareilly, Uttar Pradesh, India",
    email: "adityasaxena.engr@gmail.com",
    github: "https://github.com/adityasaxenaengr",
    linkedin: "https://www.linkedin.com/in/adityasaxenaengr",
    twitter: "https://twitter.com",
    degree: "B.Tech in Computer Science & Engineering (CSE)",
    university: "Dr. A.P.J. Abdul Kalam Technical University (AKTU)",
    yearsExperience: 0,
    projectsCompleted: 3,
    openSourceStars: 10,
    clientSatisfaction: 100
  },

  typingTitles: [
    "Full-Stack Web Apps",
    "Python Automation",
    "Java OOP Software",
    "Responsive UIs"
  ],

  skills: [
    // Web Development & Full-Stack
    { name: "HTML5 & CSS3", level: 90, category: "frontend", icon: "code", desc: "Responsive Design, Flexbox, CSS Grid, Glassmorphism" },
    { name: "JavaScript (ES6+)", level: 85, category: "frontend", icon: "file-code", desc: "DOM Manipulation, ES6+, Async/Await, Fetch API" },
    { name: "React.js", level: 80, category: "frontend", icon: "layers", desc: "Reusable Components, Hooks, State Management" },
    { name: "Node.js & Express", level: 75, category: "backend", icon: "server", desc: "RESTful APIs, Middleware, Server Routing" },

    // Programming Languages
    { name: "Python", level: 85, category: "backend", icon: "terminal", desc: "OOP, Automation Scripts, Logic & Data Structures" },
    { name: "Java", level: 80, category: "backend", icon: "coffee", desc: "Object-Oriented Programming (OOP), Core Java, Algorithms" },

    // Databases & Tools
    { name: "SQL & Databases", level: 75, category: "backend", icon: "database", desc: "MySQL, Relational Database Design, SQL Queries" },
    { name: "Git & GitHub", level: 85, category: "devops", icon: "git-branch", desc: "Version Control, Repository Management, Open Source" }
  ],

  projects: [
    {
      id: "toolstudio-pro",
      title: "ToolStudio Pro — All-in-One 150+ Web Utility Suite",
      category: "web",
      image: "images/project-toolstudio.jpg",
      shortDesc: "A high-performance flagship client-side web utility suite with 150+ tools across 11 categories (PDF, QR, Dev, CSS, Image, Security, Finance, AI, Math, Text & Games) featuring 100% privacy, offline PWA, and zero latency.",
      tags: ["JavaScript (ES6+)", "HTML5/CSS3", "PWA", "Web Audio API", "PDF-Lib", "Vercel"],
      liveUrl: "https://toolstudio.vercel.app",
      githubUrl: "https://github.com/adityasaxenaengr/toolstudio",
      svgBanner: "🛠️ ToolStudio Pro — 150+ Web Utility Suite",
      gradient: "linear-gradient(135deg, #00f0ff, #a855f7)",
      fullDesc: "ToolStudio Pro is a flagship client-side web application engineered with 150+ fully functional tools across 11 specialized categories: PDF & Document Studio, QR & Barcode Suite, Developer & Code Hub, CSS & UI Design Studio, Image & Media Studio, Security & Converters, Financial Hub (with 160+ World Currency Converter), AI Text Lab, Productivity Calculators, Text & String Studio, and Gaming & Brain Hub. Built with zero third-party tracking, 100% local browser execution, offline PWA installation, and responsive glassmorphism HUD UI.",
      features: [
        "150+ Fully Functional Client-Side Tools across 11 specialized categories",
        "100% Private & Zero Latency: All processing (PDF, Image, Encryption, Audio) happens locally in browser",
        "Offline Progressive Web App (PWA) with Service Worker caching and 1-Click desktop/mobile installation",
        "1:1 Physical Teal Blue Casio fx-991ES PLUS Scientific Calculator with Natural V.P.A.M. display",
        "Global World Currency Converter with 160+ currencies & live real-time FX market rates API",
        "Interactive Mini Games (Sudoku Master with Auto-Solver, Typing Speed WPM Test, 2048, Wordle, Memory Matrix)",
        "High-Tech HUD Interface with Glassmorphism, Spotlight Search (Ctrl+K), Split-Screen mode, and Dark/Light theme"
      ],
      architectureNotes: "Engineered using vanilla JavaScript (ES6+), HTML5, custom CSS Glassmorphism design system, Web Audio API, Canvas API, PDF-lib, PDF.js, jsPDF, WebSpeech API, Service Workers for PWA caching, and Open Exchange Rates API for live forex rates. Deployed on Vercel with GitHub CI/CD automation."
    }
  ],

  experience: [
    {
      role: "B.Tech in Computer Science & Engineering (CSE)",
      company: "Dr. A.P.J. Abdul Kalam Technical University (AKTU)",
      period: "Present",
      description: "Pursuing B.Tech in CSE with a focus on Data Structures, Algorithms, Full-Stack Web Development, Python, and Java.",
      achievements: [
        "Building core technical skills in Web Development (HTML/CSS/JS/React/Node.js), Python, and Java OOP.",
        "Created first milestone full-stack project: Modern Developer Portfolio Website.",
        "Actively developing hands-on software engineering projects and exploring open-source contributions."
      ]
    }
  ],

  certifications: [
    {
      id: "cert-java",
      title: "Java Programming (Basic & Intermediate)",
      issuer: "HackerRank / Oracle Academy",
      issuerLogo: "☕",
      date: "2024",
      credId: "HR-JAVA-2024-X99",
      skills: ["Java", "OOPs", "Collections", "Exception Handling"],
      verified: true,
      description: "Demonstrates proficiency in Java syntax, Object-Oriented Programming (OOP), exception handling, and data collection structures."
    },
    {
      id: "cert-python",
      title: "Python Programming & Automation Certificate",
      issuer: "Cisco Networking Academy",
      issuerLogo: "🐍",
      date: "2024",
      credId: "PY-CERT-8841-A22",
      skills: ["Python 3", "Automation", "File I/O", "Data Structures"],
      verified: true,
      description: "Covers Python programming fundamentals, algorithmic problem solving, scripting, and file processing utilities."
    },
    {
      id: "cert-webdev",
      title: "Responsive Web Design Certification",
      issuer: "freeCodeCamp",
      issuerLogo: "💻",
      date: "2025",
      credId: "FCC-RWD-2025-B11",
      skills: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
      verified: true,
      description: "Comprehensive certification covering HTML5 semantic structure, CSS3 Flexbox/Grid layouts, typography, and responsive web design."
    },
    {
      id: "cert-problemsolving",
      title: "Problem Solving (Basic) Certificate",
      issuer: "HackerRank",
      issuerLogo: "🧩",
      date: "2026",
      credId: "HR-PS-2026-C44",
      skills: ["Data Structures", "Algorithms", "Array/String", "Logic"],
      verified: true,
      description: "Validates core problem-solving capability, data structure manipulation, and algorithmic efficiency."
    }
  ]
};

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
      id: "upcoming-ecommerce",
      title: "Full-Stack E-Commerce Store",
      category: "fullstack",
      image: "images/project-ecommerce.jpg",
      shortDesc: "A full-stack online shop featuring product catalog, shopping cart, and secure checkout flow.",
      tags: ["React", "Node.js", "Express", "MongoDB"],
      liveUrl: "#",
      githubUrl: "#",
      svgBanner: "🛒 Full-Stack E-Commerce Store",
      gradient: "linear-gradient(135deg, #10b981, #06b6d4)",
      fullDesc: "Currently planning and building a full-stack e-commerce web application with user authentication, product filtering, shopping cart state management, and payment gateway integration.",
      features: [
        "User registration & JWT authentication system",
        "Product catalog with category search and price filters",
        "Persistent cart management and order summary checkout",
        "Admin dashboard for inventory management"
      ],
      architectureNotes: "Planned stack: React frontend with Node.js/Express REST API and MongoDB database."
    },
    {
      id: "upcoming-python-automation",
      title: "Python Automation & Utilities Tool",
      category: "ai",
      image: "images/project-python.jpg",
      shortDesc: "A suite of Python scripts and automated tools for file management, web scraping, and data processing.",
      tags: ["Python", "Automation", "Scripts", "Web Scraping"],
      liveUrl: "#",
      githubUrl: "#",
      svgBanner: "🐍 Python Automation & Tools",
      gradient: "linear-gradient(135deg, #f59e0b, #ef4444)",
      fullDesc: "A practical Python application built to automate repetitive daily tasks, scrape web data, parse text files, and perform data analysis.",
      features: [
        "Automated file organizer and batch renamer",
        "Web scraping module extracting structured data into CSV/JSON",
        "Command-line utility interface with customizable options"
      ],
      architectureNotes: "Built using Python 3, Beautiful Soup, Requests, and standard OS/sys libraries."
    },
    {
      id: "upcoming-java-backend",
      title: "Java Management & Banking System",
      category: "backend",
      image: "images/project-java.jpg",
      shortDesc: "An object-oriented Java application managing user accounts, transactions, and data records.",
      tags: ["Java", "OOP", "SQL", "Algorithms"],
      liveUrl: "#",
      githubUrl: "#",
      svgBanner: "☕ Java Management & Banking System",
      gradient: "linear-gradient(135deg, #06b6d4, #6366f1)",
      fullDesc: "An enterprise-style Java application applying Object-Oriented Programming (OOP) principles, data structures, and database connectivity.",
      features: [
        "Account creation, deposit, withdrawal, and balance tracking logic",
        "Robust input validation and exception handling",
        "Database integration using JDBC for persistent record storage"
      ],
      architectureNotes: "Built in Java using OOP design patterns (Encapsulation, Inheritance, Polymorphism)."
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

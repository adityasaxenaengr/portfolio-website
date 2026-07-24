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
    projectsCompleted: 1,
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
      id: "portfolio-website",
      title: "Personal Developer Portfolio Website",
      category: "web",
      shortDesc: "A modern, glassmorphic portfolio web app with dark/light mode, terminal CLI, and responsive design.",
      tags: ["HTML5", "CSS3", "JavaScript", "Responsive UI"],
      liveUrl: "index.html",
      githubUrl: "https://github.com/adityasaxenaengr/portfolio-website",
      svgBanner: "💻 Personal Developer Portfolio",
      gradient: "linear-gradient(135deg, #6366f1, #a855f7)",
      fullDesc: "This personal portfolio website is my foundational full-stack project, showcasing interactive features including dark/light theme switching, live skill search, filterable project galleries, terminal CLI easter egg, and custom UI audio effects.",
      features: [
        "Modern glassmorphism UI design with dark & light theme engine",
        "Interactive Terminal CLI easter egg supporting custom commands",
        "Responsive across Desktop, Tablet, and Mobile screens",
        "Clean modular JavaScript architecture without external heavy frameworks"
      ],
      architectureNotes: "Built with standard semantic HTML5, custom CSS design system, and modular ES JavaScript."
    },
    {
      id: "upcoming-ecommerce",
      title: "Full-Stack E-Commerce Store",
      category: "fullstack",
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

  testimonials: [
    {
      quote: "Aditya is a highly dedicated student with excellent enthusiasm for building clean, modern web applications and software solutions!",
      name: "Peer & Instructor Review",
      role: "Computer Science Department"
    },
    {
      quote: "Great problem-solving mindset and impressive speed in learning full-stack web technologies and writing clean code.",
      name: "Project Mentor Review",
      role: "Web Development Specialist"
    },
    {
      quote: "Demonstrates strong logic, great collaboration skills in group coding sessions, and excellent knowledge of Python and Java.",
      name: "Peer Code Reviewer",
      role: "Full-Stack Development Team"
    },
    {
      quote: "Consistently demonstrates high attention to detail in UI responsiveness, modern design aesthetics, and backend database structure.",
      name: "Technical Evaluator",
      role: "Software Engineering Lab"
    }
  ]
};

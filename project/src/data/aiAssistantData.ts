export const portfolioData = {
  personal: {
    name: "Arihant Jain",
    title: "Full Stack Developer & AI Enthusiast",
    age: 22,
    dob: "15 March 2003",
    gender: "Male",
    location: "Moradabad, Uttar Pradesh, India",
    email: "arihant.jain@email.com",
    phone: "+91 98765 43210",
    portfolio: "https://arihantportfolio.com",
    linkedin: "https://linkedin.com/in/arihant-jain",
    github: "https://github.com/arihant-jain",
    resume: "https://drive.google.com/arihant-resume",
    summary: "A passionate fresher ready to build innovative solutions and contribute to cutting-edge projects",
    hobbies: ["Coding", "AI Experiments", "Poetry", "Travelling", "Tech Blogging"]
  },

  academics: {
    college: "Teerthanker Mahaveer University, Moradabad",
    course: "Bachelor of Computer Applications (BCA)",
    duration: "2022 - 2025",
    overall_cgpa: "8.7 / 10",
    semester_results: [
      { semester: "1st", sgpa: "8.4" },
      { semester: "2nd", sgpa: "8.8" },
      { semester: "3rd", sgpa: "9.0" },
      { semester: "4th", sgpa: "8.6" },
      { semester: "5th", sgpa: "9.1" }
    ],
    certifications: [
      "React.js Advanced – Coursera",
      "Node.js API Development – Udemy",
      "AI & Machine Learning Basics – Google",
      "Database Management Systems – NPTEL",
      "Cybersecurity Essentials – Cisco"
    ],
    achievements: [
      "Winner – TMU Hackathon 2024",
      "Runner-up – Intercollege Web Dev Challenge 2023",
      "Top 10 Finalist – AI Innovation Challenge"
    ]
  },

  skills: {
    frontend: ["JavaScript", "TypeScript", "React", "Next.js", "Vue.js", "HTML5", "CSS3", "Tailwind CSS", "Framer Motion"],
    backend: ["Node.js", "Express.js", "Python", "FastAPI", "RESTful APIs", "GraphQL"],
    database: ["MongoDB", "PostgreSQL", "MySQL", "Firebase", "Redis"],
    mobile: ["React Native", "Flutter"],
    ai: ["Machine Learning", "Deep Learning", "NLP", "TensorFlow", "PyTorch", "Data Analysis"],
    tools: ["Git", "Docker", "AWS", "Vercel", "Linux", "VS Code", "Postman"]
  },

  projects: [
    {
      name: "AI-Powered Portfolio Website",
      description: "A personal AI-integrated portfolio that answers questions interactively",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Firebase"],
      features: ["AI Chat Assistant", "Dynamic Data Fetching", "SEO Optimization", "Dark Mode"],
      github: "https://github.com/arihant-jain/ai-portfolio",
      demo: "https://arihantportfolio.com"
    },
    {
      name: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with payment integration and real-time analytics",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      features: ["User authentication", "Payment gateway", "Inventory management", "Admin dashboard"],
      github: "https://github.com/arihant-jain/ecommerce",
      demo: "https://arihantstore.com"
    },
    {
      name: "AI Chat Bot",
      description: "Intelligent chatbot with natural language processing",
      technologies: ["Python", "TensorFlow", "FastAPI", "React"],
      features: ["NLP capabilities", "Context awareness", "Real-time responses"],
      github: "https://github.com/arihant-jain/ai-chatbot"
    },
    {
      name: "IoT Home Automation Dashboard",
      description: "Smart home monitoring and automation system",
      technologies: ["React", "Node.js", "MQTT", "Raspberry Pi"],
      features: ["Device control", "Sensor data monitoring", "Real-time notifications"]
    }
  ],

  experience: {
    level: "Fresher",
    internships: [
      {
        company: "XYZ Software Solutions",
        duration: "June 2024 - August 2024",
        role: "Full-Stack Developer Intern",
        responsibilities: [
          "Developed REST APIs using Node.js",
          "Integrated Firebase authentication",
          "Optimized React components for performance"
        ]
      }
    ],
    strengths: ["Quick learner", "Problem solver", "Team player", "Adaptable"],
    interests: ["Web Development", "AI/ML", "Open Source", "IoT", "Blockchain"]
  },

  availability: {
    status: "Open to work",
    interests: ["Full-time positions", "Internships", "Freelance projects", "Open source contributions"],
    preferences: ["Remote work", "Hybrid", "On-site"]
  }
};

export const responseTemplates = {
  skills: "Arihant is proficient in modern web technologies including React, TypeScript, Node.js, and various databases. He's also skilled in AI, mobile app development, and cloud deployments.",
  projects: "Arihant has built several projects including AI-powered apps, e-commerce platforms, IoT dashboards, and real-time chatbots.",
  academics: "Arihant is pursuing a BCA at TMU, Moradabad, with a current CGPA of 8.7, and has completed multiple certifications in AI, web, and cloud technologies.",
  contact: "You can reach Arihant at arihant.jain@email.com or +91 98765 43210. Connect via LinkedIn or explore his work on GitHub.",
  availability: "Arihant is actively looking for opportunities as a fresher developer. He's open to full-time roles, internships, and freelance projects."
};

export const keywordMapping = {
  skills: ["skill", "technology", "tech", "programming", "language", "framework"],
  projects: ["project", "work", "portfolio", "built", "created", "developed"],
  academics: ["education", "study", "college", "cgpa", "degree", "course"],
  experience: ["experience", "background", "internship", "training", "fresher", "level"],
  contact: ["contact", "reach", "email", "phone", "connect", "hire"],
  availability: ["available", "job", "work", "opportunity", "position", "hiring"]
};

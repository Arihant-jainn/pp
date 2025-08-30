// AI Assistant Knowledge Base
// You can edit this file to add more information about Arihant Jain

export const portfolioData = {
  personal: {
    name: "Arihant Jain",
    title: "Full Stack Developer & Tech Enthusiast",
    location: "India",
    email: "arihant.jain@email.com",
    phone: "+91 98765 43210",
    summary: "Passionate fresher ready to build innovative solutions and contribute to cutting-edge projects"
  },
  
  skills: {
    frontend: ["JavaScript", "TypeScript", "React", "Next.js", "Vue.js", "HTML5", "CSS3", "Tailwind CSS"],
    backend: ["Node.js", "Express.js", "Python", "FastAPI", "RESTful APIs", "GraphQL"],
    database: ["MongoDB", "PostgreSQL", "Redis", "Firebase"],
    mobile: ["React Native", "Flutter"],
    ai: ["Machine Learning", "TensorFlow", "Python", "Data Analysis"],
    tools: ["Git", "Docker", "AWS", "Vercel", "Linux", "VS Code"]
  },
  
  projects: [
    {
      name: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with payment integration",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      features: ["User authentication", "Payment processing", "Inventory management", "Real-time analytics"]
    },
    {
      name: "AI Chat Bot",
      description: "Intelligent chatbot with natural language processing",
      technologies: ["Python", "TensorFlow", "FastAPI", "React"],
      features: ["NLP capabilities", "Machine learning", "Real-time responses", "Context awareness"]
    }
  ],
  
  experience: {
    level: "Fresher",
    education: "Bachelor's in Computer Science",
    strengths: ["Quick learner", "Problem solver", "Team player", "Adaptable"],
    interests: ["Web development", "AI/ML", "Open source", "Tech blogging", "Poetry"]
  },
  
  availability: {
    status: "Open to work",
    interests: ["Full-time positions", "Internships", "Freelance projects", "Open source contributions"],
    preferences: ["Remote work", "Hybrid", "On-site"]
  }
};

// Response templates for common questions
export const responseTemplates = {
  skills: "Arihant is proficient in modern web technologies including React, TypeScript, Node.js, and various databases. As a fresher, he's passionate about full-stack development and continuously learning new technologies.",
  
  projects: "Arihant has worked on diverse projects including e-commerce platforms, AI chatbots, mobile apps, and IoT solutions. Each project demonstrates his ability to learn quickly and implement modern development practices.",
  
  experience: "As a fresher, Arihant brings fresh perspectives and enthusiasm to software development. He's completed various personal projects and is eager to contribute to real-world applications in a professional environment.",
  
  contact: "You can reach Arihant at arihant.jain@email.com or +91 98765 43210. He's also active on GitHub and LinkedIn. Feel free to connect and discuss opportunities!",
  
  availability: "Arihant is actively looking for opportunities as a fresher developer. He's open to full-time positions, internships, and freelance projects, with preference for remote or hybrid work arrangements."
};

// Keywords mapping for better response matching
export const keywordMapping = {
  skills: ["skill", "technology", "tech", "programming", "language", "framework"],
  projects: ["project", "work", "portfolio", "built", "created", "developed"],
  experience: ["experience", "background", "education", "fresher", "level"],
  contact: ["contact", "reach", "email", "phone", "connect", "hire"],
  availability: ["available", "job", "work", "opportunity", "position", "hiring"]
};
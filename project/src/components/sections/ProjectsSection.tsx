import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, Play } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
  category: 'web' | 'mobile' | 'ai' | 'fullstack';
}

const projects: Project[] = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce solution with payment integration, inventory management, and real-time analytics.',
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    githubUrl: '#',
    liveUrl: '#',
    category: 'fullstack'
  },
  {
    id: 2,
    title: 'AI Chat Bot',
    description: 'Intelligent chatbot with natural language processing and machine learning capabilities.',
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600',
    technologies: ['Python', 'TensorFlow', 'FastAPI', 'React'],
    githubUrl: '#',
    liveUrl: '#',
    category: 'ai'
  },
  {
    id: 3,
    title: 'Task Management App',
    description: 'Collaborative project management tool with real-time updates and team coordination features.',
    image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=600',
    technologies: ['Vue.js', 'Express', 'PostgreSQL', 'Socket.io'],
    githubUrl: '#',
    liveUrl: '#',
    category: 'web'
  },
  {
    id: 4,
    title: 'Weather Forecast App',
    description: 'Beautiful weather app with location-based forecasts and interactive maps.',
    image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=600',
    technologies: ['React Native', 'TypeScript', 'OpenWeather API'],
    githubUrl: '#',
    liveUrl: '#',
    category: 'mobile'
  },
  {
    id: 5,
    title: 'Social Media Dashboard',
    description: 'Analytics dashboard for social media management with data visualization and scheduling.',
    image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=600',
    technologies: ['React', 'D3.js', 'Node.js', 'Redis'],
    githubUrl: '#',
    liveUrl: '#',
    category: 'web'
  },
  {
    id: 6,
    title: 'Crypto Trading Bot',
    description: 'Automated trading bot with technical analysis and risk management algorithms.',
    image: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=600',
    technologies: ['Python', 'Pandas', 'ccxt', 'Docker'],
    githubUrl: '#',
    liveUrl: '#',
    category: 'ai'
  },
  {
    id: 7,
    title: 'Learning Management System',
    description: 'Complete LMS with course creation, student tracking, and assessment tools.',
    image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600',
    technologies: ['Next.js', 'Prisma', 'PostgreSQL', 'AWS'],
    githubUrl: '#',
    liveUrl: '#',
    category: 'fullstack'
  },
  {
    id: 8,
    title: 'IoT Home Automation',
    description: 'Smart home control system with sensor integration and mobile app interface.',
    image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600',
    technologies: ['Arduino', 'React Native', 'MQTT', 'Firebase'],
    githubUrl: '#',
    liveUrl: '#',
    category: 'mobile'
  },
  {
    id: 9,
    title: 'Code Review Tool',
    description: 'AI-powered code review platform with automated suggestions and collaboration features.',
    image: 'https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg?auto=compress&cs=tinysrgb&w=600',
    technologies: ['React', 'GraphQL', 'Node.js', 'GitHub API'],
    githubUrl: '#',
    liveUrl: '#',
    category: 'web'
  },
  {
    id: 10,
    title: 'Fitness Tracker',
    description: 'Personal fitness tracking app with workout plans and progress analytics.',
    image: 'https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=600',
    technologies: ['Flutter', 'Firebase', 'TensorFlow Lite'],
    githubUrl: '#',
    liveUrl: '#',
    category: 'mobile'
  },
  {
    id: 11,
    title: 'Blog CMS Platform',
    description: 'Content management system with markdown support, SEO optimization, and multi-author support.',
    image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=600',
    technologies: ['Next.js', 'Sanity', 'Vercel', 'TypeScript'],
    githubUrl: '#',
    liveUrl: '#',
    category: 'fullstack'
  },
  {
    id: 12,
    title: 'Real-time Chat App',
    description: 'Secure messaging platform with end-to-end encryption and group chat features.',
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600',
    technologies: ['React', 'Socket.io', 'Express', 'MongoDB'],
    githubUrl: '#',
    liveUrl: '#',
    category: 'web'
  }
];

const ProjectsSection: React.FC = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: (index: number) => ({
      opacity: 0,
      x: index % 3 === 0 ? -100 : index % 3 === 1 ? 0 : 100,
      y: index % 3 === 1 ? -100 : 0,
      scale: 0.8
    }),
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="projects" className="py-20 relative" ref={ref}>
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')] bg-cover bg-center opacity-5 dark:opacity-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
        >
          Featured Projects
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              custom={index}
              variants={cardVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute top-4 right-4">
                  <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                    project.category === 'web' ? 'bg-blue-100 text-blue-800' :
                    project.category === 'mobile' ? 'bg-green-100 text-green-800' :
                    project.category === 'ai' ? 'bg-purple-100 text-purple-800' :
                    'bg-orange-100 text-orange-800'
                  }`}>
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-md text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-3">
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.githubUrl}
                    className="flex-1 px-4 py-2 bg-gray-800 dark:bg-gray-700 text-white rounded-lg text-center text-sm font-medium hover:bg-gray-700 dark:hover:bg-gray-600 transition-colors flex items-center justify-center"
                  >
                    <Github size={16} className="mr-2" />
                    Code
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.liveUrl}
                    className="flex-1 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg text-center text-sm font-medium hover:from-blue-700 hover:to-purple-700 transition-all flex items-center justify-center"
                  >
                    <ExternalLink size={16} className="mr-2" />
                    Live
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
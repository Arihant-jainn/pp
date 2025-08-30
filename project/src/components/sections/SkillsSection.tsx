import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code2, Database, Globe, Smartphone, Brain, Cloud } from 'lucide-react';

interface Skill {
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'database' | 'tools' | 'mobile' | 'ai';
  icon: React.ReactNode;
}

const skills: Skill[] = [
  { name: 'JavaScript', level: 90, category: 'frontend', icon: <Code2 /> },
  { name: 'TypeScript', level: 85, category: 'frontend', icon: <Code2 /> },
  { name: 'React', level: 88, category: 'frontend', icon: <Globe /> },
  { name: 'Next.js', level: 82, category: 'frontend', icon: <Globe /> },
  { name: 'Node.js', level: 85, category: 'backend', icon: <Database /> },
  { name: 'Express.js', level: 80, category: 'backend', icon: <Database /> },
  { name: 'MongoDB', level: 78, category: 'database', icon: <Database /> },
  { name: 'PostgreSQL', level: 75, category: 'database', icon: <Database /> },
  { name: 'Python', level: 82, category: 'ai', icon: <Brain /> },
  { name: 'Machine Learning', level: 70, category: 'ai', icon: <Brain /> },
  { name: 'React Native', level: 75, category: 'mobile', icon: <Smartphone /> },
  { name: 'AWS', level: 70, category: 'tools', icon: <Cloud /> }
];

const SkillsSection: React.FC = () => {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  const categories = {
    frontend: { name: 'Frontend', color: 'from-blue-500 to-cyan-500', bgColor: 'bg-blue-50 dark:bg-blue-900/20' },
    backend: { name: 'Backend', color: 'from-green-500 to-emerald-500', bgColor: 'bg-green-50 dark:bg-green-900/20' },
    database: { name: 'Database', color: 'from-purple-500 to-violet-500', bgColor: 'bg-purple-50 dark:bg-purple-900/20' },
    mobile: { name: 'Mobile', color: 'from-orange-500 to-red-500', bgColor: 'bg-orange-50 dark:bg-orange-900/20' },
    ai: { name: 'AI/ML', color: 'from-pink-500 to-rose-500', bgColor: 'bg-pink-50 dark:bg-pink-900/20' },
    tools: { name: 'Cloud & Tools', color: 'from-indigo-500 to-purple-500', bgColor: 'bg-indigo-50 dark:bg-indigo-900/20' }
  };

  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) acc[skill.category] = [];
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, Skill[]>);

  return (
    <section id="skills" className="py-20 relative" ref={ref}>
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')] bg-cover bg-center opacity-5 dark:opacity-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
        >
          Technical Skills
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(groupedSkills).map(([category, categorySkills], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 50, rotateX: -30 }}
              animate={inView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              className={`${categories[category as keyof typeof categories].bgColor} rounded-2xl p-6 backdrop-blur-sm border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300`}
            >
              <div className="flex items-center mb-6">
                <div className={`p-3 rounded-full bg-gradient-to-r ${categories[category as keyof typeof categories].color} text-white mr-4`}>
                  {categorySkills[0].icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                  {categories[category as keyof typeof categories].name}
                </h3>
              </div>

              <div className="space-y-4">
                {categorySkills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: categoryIndex * 0.2 + index * 0.1 }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {skill.name}
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                      <motion.div
                        className={`h-full bg-gradient-to-r ${categories[category as keyof typeof categories].color} rounded-full`}
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1, delay: categoryIndex * 0.2 + index * 0.1 + 0.5 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-16 text-center"
        >
          <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 dark:border-gray-700">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
              Always Learning
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              As a fresher in the tech industry, I'm committed to continuous learning and staying updated 
              with the latest technologies and best practices. Currently exploring advanced React patterns, 
              microservices architecture, and AI/ML applications.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {['Docker', 'Kubernetes', 'GraphQL', 'Redis', 'Elasticsearch', 'TensorFlow'].map((tech) => (
                <motion.span
                  key={tech}
                  whileHover={{ scale: 1.05 }}
                  className="px-4 py-2 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300 shadow-sm"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
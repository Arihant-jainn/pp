import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AboutSection: React.FC = () => {
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });

  const photoVariants = {
    hidden: { opacity: 0, rotateY: -90, scale: 0.8 },
    visible: {
      opacity: 1,
      rotateY: 0,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, delay: 0.3 }
    }
  };

  return (
    <section id="about" className="py-20 relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
        >
          About Me
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={photoVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="relative"
          >
            <div className="relative w-80 h-80 mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-xl opacity-30" />
              <div className="relative w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 rounded-full flex items-center justify-center overflow-hidden shadow-2xl">
                <img
                  src="src/assets/text-behind-image.png"
                  alt="Arihant Jain"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full blur-lg" />
            </div>
          </motion.div>

          <motion.div
            variants={textVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-gray-800 dark:text-white">
              Hello, I'm Arihant!
            </h3>
            
            <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
              <p>
                A passionate and dedicated fresher in the field of software development, 
                eager to contribute to innovative projects and grow in the tech industry. 
                With a strong foundation in programming and a keen interest in emerging technologies.
              </p>
              
              <p>
                I specialize in full-stack development with modern technologies like React, 
                Node.js, and cloud platforms. My goal is to create efficient, scalable, 
                and user-friendly applications that solve real-world problems.
              </p>
              
              <p>
                When I'm not coding, you'll find me exploring new technologies, writing 
                tech blogs, crafting poetry, or contributing to open-source projects. 
                I believe in continuous learning and staying updated with industry trends.
              </p>
            </div>

            <motion.div
              className="grid grid-cols-2 gap-4 pt-6"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.8 }}
            >
              {[
                { label: 'Location', value: 'India' },
                { label: 'Experience', value: 'Fresher' },
                { label: 'Focus', value: 'Full Stack' },
                { label: 'Availability', value: 'Open to Work' }
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  whileHover={{ scale: 1.02 }}
                  className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-lg p-4 border border-gray-200 dark:border-gray-700"
                >
                  <div className="text-sm text-gray-500 dark:text-gray-400">{item.label}</div>
                  <div className="text-lg font-semibold text-gray-800 dark:text-white">{item.value}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

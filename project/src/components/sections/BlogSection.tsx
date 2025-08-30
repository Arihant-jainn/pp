import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, Clock, ArrowRight, Code, Heart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: 'tech' | 'poetry';
  image: string;
  slug: string;
  tags: string[];
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'Building Scalable React Applications',
    excerpt: 'Learn how to structure your React applications for maximum scalability and maintainability...',
    date: '2024-01-15',
    readTime: '8 min read',
    category: 'tech',
    image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=600',
    slug: 'building-scalable-react-applications',
    tags: ['React', 'JavaScript', 'Architecture']
  },
  {
    id: 2,
    title: 'The Digital Symphony',
    excerpt: 'In circuits deep and code so bright, where algorithms dance through the night...',
    date: '2024-01-12',
    readTime: '3 min read',
    category: 'poetry',
    image: 'https://images.pexels.com/photos/1166644/pexels-photo-1166644.jpeg?auto=compress&cs=tinysrgb&w=600',
    slug: 'the-digital-symphony',
    tags: ['Poetry', 'Technology', 'Art']
  },
  {
    id: 3,
    title: 'Understanding Async/Await in JavaScript',
    excerpt: 'Master asynchronous programming in JavaScript with practical examples and best practices...',
    date: '2024-01-10',
    readTime: '6 min read',
    category: 'tech',
    image: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=600',
    slug: 'understanding-async-await-javascript',
    tags: ['JavaScript', 'Async', 'Programming']
  },
  {
    id: 4,
    title: 'Code and Coffee',
    excerpt: 'Steam rises from my cup, like thoughts from sleepy mind, while functions execute...',
    date: '2024-01-08',
    readTime: '2 min read',
    category: 'poetry',
    image: 'https://images.pexels.com/photos/1002543/pexels-photo-1002543.jpeg?auto=compress&cs=tinysrgb&w=600',
    slug: 'code-and-coffee',
    tags: ['Poetry', 'Developer Life', 'Inspiration']
  },
  {
    id: 5,
    title: 'Database Design Best Practices',
    excerpt: 'Essential principles for designing efficient and scalable database schemas...',
    date: '2024-01-05',
    readTime: '10 min read',
    category: 'tech',
    image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=600',
    slug: 'database-design-best-practices',
    tags: ['Database', 'SQL', 'Design']
  },
  {
    id: 6,
    title: 'Variables and Dreams',
    excerpt: 'In the realm where variables hold more than data, they carry aspirations...',
    date: '2024-01-03',
    readTime: '4 min read',
    category: 'poetry',
    image: 'https://images.pexels.com/photos/1925536/pexels-photo-1925536.jpeg?auto=compress&cs=tinysrgb&w=600',
    slug: 'variables-and-dreams',
    tags: ['Poetry', 'Programming', 'Philosophy']
  }
];

const BlogSection: React.FC = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [activeCategory, setActiveCategory] = React.useState<'all' | 'tech' | 'poetry'>('all');
  const navigate = useNavigate();

  const filteredPosts = activeCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="blog" className="py-20 relative" ref={ref}>
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1181319/pexels-photo-1181319.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')] bg-cover bg-center opacity-5 dark:opacity-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
        >
          Blog & Writings
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
          className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto"
        >
          Sharing my journey through technology and creative expression
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4 }}
          className="flex justify-center mb-12"
        >
          <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-full p-1 border border-gray-200 dark:border-gray-700">
            {[
              { key: 'all', label: 'All Posts', icon: null },
              { key: 'tech', label: 'Tech Blogs', icon: <Code size={16} /> },
              { key: 'poetry', label: 'Poetry', icon: <Heart size={16} /> }
            ].map((category) => (
              <motion.button
                key={category.key}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(category.key as any)}
                className={`px-6 py-2 rounded-full transition-all duration-300 flex items-center space-x-2 ${
                  activeCategory === category.key
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                    : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                {category.icon}
                <span className="font-medium">{category.label}</span>
              </motion.button>
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredPosts.map((post, index) => (
            <motion.article
              key={post.id}
              variants={cardVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700 group cursor-pointer"
              onClick={() => navigate(`/blog/${post.slug}`)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold flex items-center space-x-1 ${
                    post.category === 'tech' 
                      ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' 
                      : 'bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200'
                  }`}>
                    {post.category === 'tech' ? <Code size={12} /> : <Heart size={12} />}
                    <span>{post.category}</span>
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
                  {post.excerpt}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-md text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-4 text-xs text-gray-500 dark:text-gray-400">
                    <div className="flex items-center space-x-1">
                      <Calendar size={12} />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock size={12} />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <motion.div
                    whileHover={{ x: 5 }}
                    className="flex items-center space-x-1 text-blue-600 dark:text-blue-400 text-sm font-medium"
                  >
                    <span>Read More</span>
                    <ArrowRight size={14} />
                  </motion.div>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default BlogSection;
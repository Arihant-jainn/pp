import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Clock, Share2, Code, Heart } from 'lucide-react';

const blogData: Record<string, any> = {
  'building-scalable-react-applications': {
    title: 'Building Scalable React Applications',
    date: '2024-01-15',
    readTime: '8 min read',
    category: 'tech',
    image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=1200',
    tags: ['React', 'JavaScript', 'Architecture'],
    content: `
      <p>Building scalable React applications requires careful planning and architectural decisions from the start. In this comprehensive guide, we'll explore the key principles and patterns that will help you create maintainable and scalable React applications.</p>
      
      <h2>1. Component Architecture</h2>
      <p>The foundation of any scalable React application lies in its component architecture. Here are some key principles:</p>
      
      <ul>
        <li><strong>Single Responsibility Principle:</strong> Each component should have one clear purpose</li>
        <li><strong>Composition over Inheritance:</strong> Use composition to build complex UIs</li>
        <li><strong>Props Interface Design:</strong> Design clear and consistent prop interfaces</li>
      </ul>
      
      <h2>2. State Management</h2>
      <p>As your application grows, state management becomes crucial. Consider these approaches:</p>
      
      <h3>Local State</h3>
      <p>Use useState and useReducer for component-level state that doesn't need to be shared.</p>
      
      <h3>Global State</h3>
      <p>For shared state, consider Context API for simple cases, or Redux Toolkit for complex state management needs.</p>
      
      <h2>3. Performance Optimization</h2>
      <p>Implement performance optimizations early:</p>
      
      <ul>
        <li>Use React.memo for expensive components</li>
        <li>Implement code splitting with React.lazy</li>
        <li>Optimize bundle size with proper tree shaking</li>
        <li>Use useMemo and useCallback judiciously</li>
      </ul>
      
      <h2>4. Testing Strategy</h2>
      <p>A solid testing strategy is essential for scalable applications:</p>
      
      <ul>
        <li>Unit tests for individual components</li>
        <li>Integration tests for component interactions</li>
        <li>End-to-end tests for critical user flows</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>Building scalable React applications is an ongoing process that requires attention to architecture, performance, and maintainability. By following these principles and continuously refactoring your code, you can create applications that grow with your needs.</p>
    `
  },
  'the-digital-symphony': {
    title: 'The Digital Symphony',
    date: '2024-01-12',
    readTime: '3 min read',
    category: 'poetry',
    image: 'https://images.pexels.com/photos/1166644/pexels-photo-1166644.jpeg?auto=compress&cs=tinysrgb&w=1200',
    tags: ['Poetry', 'Technology', 'Art'],
    content: `
      <div class="poetry-content">
        <p><em>In circuits deep and code so bright,<br/>
        Where algorithms dance through the night,<br/>
        A symphony of ones and zeros plays,<br/>
        In the silicon halls of modern days.</em></p>
        
        <p><em>Each function call, a note so clear,<br/>
        Each loop, a rhythm drawing near,<br/>
        Variables whisper secrets untold,<br/>
        In languages both new and old.</em></p>
        
        <p><em>The screen glows with electric dreams,<br/>
        While data flows in endless streams,<br/>
        Debugging fears and testing hope,<br/>
        On syntax mountains, we learn to cope.</em></p>
        
        <p><em>From morning coffee to midnight's call,<br/>
        We build the future, bit by all,<br/>
        In this digital symphony we write,<br/>
        Code becomes art in pixeled light.</em></p>
        
        <p><em>So here's to those who dream in code,<br/>
        Who walk the less-traveled road,<br/>
        May your algorithms run true and fast,<br/>
        And your legacy in bytes forever last.</em></p>
      </div>
      
      <hr class="my-8 border-gray-300 dark:border-gray-600" />
      
      <h2>About This Piece</h2>
      <p>This poem captures the essence of what it means to be a developer in the modern age. It's about the beauty we find in code, the late nights spent debugging, and the dreams we build with technology.</p>
      
      <p>As a fresher entering this incredible field, I'm amazed by how programming can be both logical and creative, structured yet expressive. Every line of code is a brushstroke in the digital canvas we're painting together.</p>
    `
  }
};

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const post = slug ? blogData[slug] : null;

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
            Post Not Found
          </h1>
          <button
            onClick={() => navigate('/')}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <motion.article
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen pt-24 pb-16"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.button
          onClick={() => navigate('/')}
          whileHover={{ x: -5 }}
          className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors mb-8"
        >
          <ArrowLeft size={20} />
          <span>Back to Blog</span>
        </motion.button>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl border border-gray-200 dark:border-gray-700"
        >
          <div className="relative">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-64 md:h-80 object-cover"
            />
            <div className="absolute top-6 left-6">
              <span className={`px-3 py-1 rounded-full text-sm font-semibold flex items-center space-x-1 ${
                post.category === 'tech' 
                  ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' 
                  : 'bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200'
              }`}>
                {post.category === 'tech' ? <Code size={14} /> : <Heart size={14} />}
                <span>{post.category}</span>
              </span>
            </div>
          </div>

          <div className="p-8">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-6"
            >
              {post.title}
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap items-center justify-between mb-8 pb-6 border-b border-gray-200 dark:border-gray-700"
            >
              <div className="flex items-center space-x-6 text-sm text-gray-500 dark:text-gray-400">
                <div className="flex items-center space-x-1">
                  <Calendar size={16} />
                  <span>{new Date(post.date).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock size={16} />
                  <span>{post.readTime}</span>
                </div>
              </div>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
              >
                <Share2 size={16} />
                <span>Share</span>
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-2 mb-8"
            >
              {post.tags.map((tag: string) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full text-sm font-medium"
                >
                  #{tag}
                </span>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="prose prose-lg dark:prose-invert max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>
        </motion.div>
      </div>
    </motion.article>
  );
};

export default BlogPost;
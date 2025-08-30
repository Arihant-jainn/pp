import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, X, Send, HelpCircle } from 'lucide-react';

const AIAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hi! I'm Arihant's AI assistant. I can help you learn more about his skills, projects, and experience. What would you like to know?",
      isBot: true
    }
  ]);

  const quickQuestions = [
    "What are Arihant's key skills?",
    "Tell me about his projects",
    "What is his experience level?",
    "How can I contact him?"
  ];

  const handleSendMessage = (text?: string) => {
    const messageText = text || message;
    if (!messageText.trim()) return;

    const newUserMessage = {
      id: messages.length + 1,
      text: messageText,
      isBot: false
    };

    setMessages(prev => [...prev, newUserMessage]);
    setMessage('');

    // Simulate AI response
    setTimeout(() => {
      let response = "I'm here to help! Let me tell you more about Arihant's qualifications and experience.";
      
      if (messageText.toLowerCase().includes('skill')) {
        response = "Arihant is proficient in modern web technologies including React, TypeScript, Node.js, and various databases. As a fresher, he's passionate about full-stack development and continuously learning new technologies.";
      } else if (messageText.toLowerCase().includes('project')) {
        response = "Arihant has worked on diverse projects including e-commerce platforms, AI chatbots, mobile apps, and IoT solutions. Each project demonstrates his ability to learn quickly and implement modern development practices.";
      } else if (messageText.toLowerCase().includes('experience')) {
        response = "As a fresher, Arihant brings fresh perspectives and enthusiasm to software development. He's completed various personal projects and is eager to contribute to real-world applications in a professional environment.";
      } else if (messageText.toLowerCase().includes('contact')) {
        response = "You can reach Arihant at arihant.jain@email.com or +91 98765 43210. He's also active on GitHub and LinkedIn. Feel free to connect and discuss opportunities!";
      }

      const botMessage = {
        id: messages.length + 2,
        text: response,
        isBot: true
      };

      setMessages(prev => [...prev, botMessage]);
    }, 1000);
  };

  return (
    <>
      <motion.button
        onClick={() => setIsOpen(true)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-6 right-6 z-50 p-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2 }}
      >
        <Bot size={24} />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 100 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 100 }}
            className="fixed bottom-6 right-6 z-50 w-96 max-w-[calc(100vw-2rem)]"
          >
            <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-md rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden">
              <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700 bg-gradient-to-r from-blue-600 to-purple-600">
                <div className="flex items-center space-x-3">
                  <Bot className="text-white" size={20} />
                  <span className="font-semibold text-white">AI Assistant</span>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-white hover:bg-white/20 rounded-full p-1 transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="h-80 overflow-y-auto p-4 space-y-4">
                {messages.map((msg) => (
                  <motion.div
                    key={msg.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex ${msg.isBot ? 'justify-start' : 'justify-end'}`}
                  >
                    <div className={`max-w-[80%] p-3 rounded-2xl ${
                      msg.isBot
                        ? 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200'
                        : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                    }`}>
                      <p className="text-sm">{msg.text}</p>
                    </div>
                  </motion.div>
                ))}

                {messages.length === 1 && (
                  <div className="space-y-2">
                    <p className="text-xs text-gray-500 dark:text-gray-400 text-center">Quick questions:</p>
                    {quickQuestions.map((question, index) => (
                      <motion.button
                        key={question}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 * index }}
                        onClick={() => handleSendMessage(question)}
                        className="w-full text-left p-2 text-xs bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-lg transition-colors text-gray-700 dark:text-gray-300"
                      >
                        <HelpCircle className="inline mr-2" size={12} />
                        {question}
                      </motion.button>
                    ))}
                  </div>
                )}
              </div>

              <div className="p-4 border-t border-gray-200 dark:border-gray-700">
                <div className="flex space-x-2">
                  <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                    placeholder="Ask me anything about Arihant..."
                    className="flex-1 px-3 py-2 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                  />
                  <motion.button
                    onClick={() => handleSendMessage()}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all"
                  >
                    <Send size={16} />
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AIAssistant;
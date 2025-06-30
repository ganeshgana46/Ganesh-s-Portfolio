import { motion } from 'framer-motion';
import React from 'react';

const About = () => {
  // Stats data
  const stats = [
    { 
      title: 'Experience', 
      value: '1+ Years', 
      icon: '⏳',
      color: 'bg-indigo-100 text-indigo-700'
    },
    { 
      title: 'Projects', 
      value: '5+', 
      icon: '🚀',
      color: 'bg-purple-100 text-purple-700'
    },
    { 
      title: 'Education', 
      value: 'B.Tech', 
      icon: '🎓',
      color: 'bg-blue-100 text-blue-700'
    },
    { 
      title: 'Location', 
      value: 'Bangalore', 
      icon: '📍',
      color: 'bg-violet-100 text-violet-700'
    },
  ];

  return (
    <section id="about" className="py-20 relative bg-gradient-to-b bg-gray-900 text-white overflow-hidden">
      {/* Background Particles Animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(40)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-indigo-500 opacity-30"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              width: `${Math.random() * 10 + 5}px`,
              height: `${Math.random() * 10 + 5}px`,
            }}
            animate={{
              y: [null, -20],
              opacity: [0.1, 0.6, 0.1],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        ))}
      </div>

      {/* Abstract Floating Shapes */}
      <motion.div
        className="absolute w-64 h-64 bg-purple-700 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"
        style={{ top: '10%', left: '10%' }}
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <motion.div
        className="absolute w-80 h-80 bg-blue-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"
        style={{ bottom: '10%', right: '10%' }}
        animate={{
          scale: [1.2, 1, 1.2],
          rotate: [0, -180, -360],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 z-10 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
          >
            About <span className="bg-gradient-to-r from-indigo-400 to-purple-400 text-transparent bg-clip-text">Me</span>
          </motion.h2>
          <motion.div
            className="h-1 w-20 bg-gradient-to-r from-indigo-400 to-purple-400 mx-auto rounded-full"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          />
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Circular Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex justify-center lg:justify-start"
          >
            <div className="relative w-64 h-64 md:w-90 md:h-90">
              <motion.div
                className="absolute inset-0 rounded-full border-4 border-indigo-500/30 overflow-hidden shadow-2xl"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
              >
                <img
                  src="/images/Profile.jpg" // Replace with your image path
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <motion.div
                className="absolute inset-0 rounded-full border-4 border-transparent border-t-indigo-500 border-r-purple-500"
                initial={{ rotate: 0 }}
                animate={{ rotate: 360 }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
            </div>
          </motion.div>

          {/* Right Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <motion.p 
              className="text-lg md:text-xl text-gray-300 leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
            >
              I'm a <span className="font-semibold text-indigo-400">Front-End Developer</span> specializing in React, JavaScript, and responsive web design. Passionate about crafting intuitive, high-performance user interfaces with clean, maintainable code that delivers exceptional user experiences.
            </motion.p>
            
            <motion.p 
              className="text-lg md:text-xl text-gray-300 leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
            >
              With expertise in state management, REST APIs, and modern front-end workflows, I combine <span className="font-semibold text-purple-400">technical skills</span> with a keen eye for UX/UI best practices to create digital products that are both beautiful and functional.
            </motion.p>

            {/* Compact Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 my-8"
            >
              {stats.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    y: -5,
                    boxShadow: "0 10px 15px -3px rgba(79, 70, 229, 0.3)"
                  }}
                  className={`${item.color} p-4 rounded-lg text-center shadow-sm transition-all`}
                >
                  <div className="text-2xl mb-1">{item.icon}</div>
                  <div className="font-bold text-lg">{item.value}</div>
                  <div className="text-sm opacity-80">{item.title}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
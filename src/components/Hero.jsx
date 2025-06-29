import { motion } from 'framer-motion';
import React from 'react';

const App = () => {
  // Background particle animation component
  const ParticlesBackground = () => (
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
  );

  // Image path - assuming your image is in public/images folder
  const imagePath = "/images/developer-image.png"; // Update this to your actual image path

  return (
    <section id="home" className="min-h-screen relative flex items-center justify-center bg-gray-900 text-white overflow-hidden pt-20">
      {/* Background Particles */}
      <ParticlesBackground />

      {/* Abstract Floating Shapes */}
      <motion.div
        className="absolute w-64 h-64 bg-purple-700 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"
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
        className="absolute w-80 h-80 bg-blue-600 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"
        style={{ top: '60%', right: '10%' }}
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

      {/* Content Container */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 z-10 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Left Column - Text & CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left space-y-6"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
              <span className="bg-gradient-to-r from-white via-indigo-300 to-purple-300 text-transparent bg-clip-text">
                Ganesh Pallam
              </span>
            </h1>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-indigo-400">
              Front-End Developer
            </h2>
            <p className="text-lg text-gray-300 max-w-lg mx-auto md:mx-0">
              Building sleek, scalable, and performant web experiences with React, Tailwind CSS, and modern design principles.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mt-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white px-6 py-3 rounded-lg font-medium shadow-lg transition-transform"
              >
                Hire Me
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-indigo-500 text-indigo-300 hover:bg-indigo-900 hover:text-indigo-200 px-6 py-3 rounded-lg font-medium transition-all"
              >
                View Resume
              </motion.button>
            </div>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex justify-center"
          >
            <div className="w-full max-w-md h-64 sm:h-80 md:h-96 relative rounded-xl overflow-hidden shadow-2xl">
              {/* Developer Image with nice border and effects */}
              <img 
                src={imagePath} 
                alt="Ganesh Pallam - Front-End Developer"
                className="w-full h-full object-cover object-center"
              />
              {/* Decorative border elements */}
              <div className="absolute inset-0 border-4 border-indigo-500/20 rounded-xl pointer-events-none"></div>
              <div className="absolute inset-4 border-2 border-indigo-300/30 rounded-lg pointer-events-none"></div>
              {/* Glow effect */}
              <div className="absolute inset-0 bg-indigo-500/10 pointer-events-none"></div>
            </div>
          </motion.div>
        </div>

        {/* Location Tag */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-16 text-center text-gray-500"
        >
          <p>📍 Bangalore, India • Open for remote opportunities</p>
        </motion.div>
      </div>
    </section>
  );
};

export default App;
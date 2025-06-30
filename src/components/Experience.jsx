import { motion } from 'framer-motion';
import React from 'react';

const Experience = () => {
  const experiences = [
    {
      role: "Freelance Front-End Developer",
      company: "Self-Employed | Remote",
      duration: "2024 - Present",
      location: "Bangalore, India",
      responsibilities: [
        "Developed high-performance web applications using React.js, Next.js, and TypeScript",
        "Leveraged Tailwind CSS for rapid UI development and consistent design systems",
        "Integrated AI-powered tools (ChatGPT, Deepseek) to accelerate code generation",
        "Managed state efficiently using Redux and Context API",
        "Automated deployments using Vercel and Netlify",
        "Followed Agile/Scrum methodologies with remote teams",
        "Built and optimized RESTful API integrations"
      ]
    }
  ];

  return (
    <section 
      id="experience" 
      className="relative min-h-screen py-20 overflow-hidden bg-gray-900 text-white"
    >
      {/* Background Elements - Identical to Hero Section */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating Particles */}
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

        {/* Floating Shapes - Identical to Hero */}
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
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-10 relative z-10">
        {/* Section Header - Matching Hero */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 text-transparent bg-clip-text">
              My Experience
            </span>
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "120px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 mx-auto mb-6 rounded-full"
          />
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            My professional journey and contributions
          </p>
        </motion.div>

        {/* Experience Cards */}
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-800/50 p-8 rounded-xl border border-gray-700/50 backdrop-blur-sm hover:shadow-lg transition-all"
              whileHover={{ y: -5 }}
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-white">{exp.role}</h3>
                  <p className="text-indigo-400 font-medium">{exp.company}</p>
                </div>
                <div className="mt-4 md:mt-0">
                  <p className="text-gray-300">{exp.duration}</p>
                  <p className="text-gray-400">{exp.location}</p>
                </div>
              </div>
              <ul className="space-y-4">
                {exp.responsibilities.map((item, i) => (
                  <motion.li
                    key={i}
                    className="flex items-start"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <span className="text-indigo-400 mr-3 mt-1">▹</span>
                    <span className="text-gray-300">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
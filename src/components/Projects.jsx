import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaReact, FaCss3Alt, FaCode } from 'react-icons/fa';
import { SiTailwindcss, SiFramer, SiVite, SiNetlify } from 'react-icons/si';
import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "Portfolio Specialist",
      description: "Crafting high-performance, visually stunning portfolios with modern web technologies.",
      features: [
        "Custom animations and micro-interactions",
        "Responsive design with mobile-first approach",
        "Optimized for performance and SEO",
        "Dark/light mode support",
        "Accessibility compliant",
        "3D Animations"
      ],
      portfolioLinks: [
        {
          name: "Data Scientist Portfolio",
          url: "https://vinodhportfolio-ds.netlify.app/"
        },
        {
          name: "Data Engineer Portfolio",
          url: "https://bhargavi-portfolio-de.netlify.app/"
        }
      ],
      techStack: ["React", "Tailwind CSS", "Framer Motion", "Vite", "Netlify"],
      image: "/project3.jpg",
      isSpecial: true,
      hideButtons: true
    },
    {
      title: "EFOQ – Modern E-Commerce Website",
      description: "A sleek and responsive e-commerce platform designed to showcase and sell traditional and powerloom sarees.",
      features: [
        "70% faster build time using Vite",
        "Smooth UI transitions using Framer Motion and AOS",
        "Fully responsive layout, optimized for mobile, tablet, and desktop",
        "Product gallery with filterable categories and detailed product views",
        "Modern design aligned with brand identity and user-friendly navigation",
        "Fast hosting on Netlify with automated deployments via Git"
      ],
      techStack: ["React", "JavaScript (ES6+)", "Vite", "Tailwind CSS", "Framer Motion", "AOS", "Git", "Netlify"],
      githubLink: "#",
      demoLink: "#",
      image: "/project1.jpg"
    },
    {
      title: "Intelligent Traffic Prediction System",
      description: "A computer vision application using YOLO to detect and count vehicles at traffic junctions.",
      features: [
        "Vehicle detection using YOLO pretrained weights",
        "X and Y junction analysis for traffic patterns",
        "User-friendly interface for real-time visualization",
        "Priority signaling system based on vehicle density",
        "Image processing for traffic flow improvement"
      ],
      techStack: ["Python", "YOLO", "Deep Learning", "HTML", "CSS", "JavaScript"],
      githubLink: "#",
      demoLink: "#",
      image: "/project2.jpg"
    }
  ];

  // Tech stack icons mapping
  const techIcons = {
    'React': <FaReact className="text-blue-400" />,
    'Tailwind CSS': <SiTailwindcss className="text-cyan-400" />,
    'Framer Motion': <SiFramer className="text-purple-400" />,
    'Vite': <SiVite className="text-yellow-400" />,
    'Netlify': <SiNetlify className="text-teal-400" />,
    'JavaScript (ES6+)': <FaCode className="text-yellow-300" />,
    'CSS': <FaCss3Alt className="text-blue-500" />,
    'default': <FaCode className="text-gray-400" />
  };

  // Background particle animation component (identical to Hero section)
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

  return (
    <section 
      id="projects" 
      className="relative min-h-screen py-20 overflow-hidden bg-gray-900 text-white"
    >
      {/* Background Particles (identical to Hero section) */}
      <ParticlesBackground />

      {/* Abstract Floating Shapes (identical to Hero section) */}
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

      <div className="max-w-7xl mx-auto px-6 sm:px-10 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: 'spring' }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 text-transparent bg-clip-text">
              My Projects
            </span>
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 mx-auto mb-6 rounded-full w-32"
          />
          <motion.p 
            className="text-lg text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            Showcase of my development work and portfolio creations
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.15,
                type: 'spring',
                stiffness: 100
              }}
              viewport={{ once: true, margin: "-100px" }}
              className={`relative group rounded-xl overflow-hidden ${project.isSpecial ? 'lg:col-span-1' : ''}`}
            >
              {/* Card Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-800/70 to-gray-900/80 backdrop-blur-sm border border-gray-700/50 rounded-xl group-hover:border-indigo-500/50 transition-all duration-500"></div>
              
              {/* Content */}
              <div className="relative z-10 h-full flex flex-col p-6">
                {/* Header */}
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4">
                    {project.description}
                  </p>
                </div>
                
                {/* Features */}
                <div className="mb-6 flex-grow">
                  <h4 className="font-semibold text-white mb-3 flex items-center">
                    <span className="w-3 h-3 bg-indigo-400 rounded-full mr-2"></span>
                    Key Features
                  </h4>
                  <ul className="space-y-3">
                    {project.features.map((feature, i) => (
                      <motion.li
                        key={i}
                        className="flex items-start"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <span className="text-indigo-400 mr-2 mt-1">▹</span>
                        <span className="text-gray-300">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
                
                {/* Portfolio Links (only for special card) */}
                {project.isSpecial && project.portfolioLinks && (
                  <div className="mb-6">
                    <h4 className="font-semibold text-white mb-3 flex items-center">
                      <span className="w-3 h-3 bg-purple-400 rounded-full mr-2"></span>
                      Sample Portfolios
                    </h4>
                    <div className="space-y-3">
                      {project.portfolioLinks.map((link, i) => (
                        <motion.a
                          key={i}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block p-3 bg-gray-700/50 rounded-lg border border-gray-600 hover:border-indigo-400 transition-colors group"
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.6 + i * 0.1 }}
                          viewport={{ once: true }}
                          whileHover={{ x: 5 }}
                        >
                          <div className="flex justify-between items-center">
                            <span className="text-indigo-300 group-hover:text-indigo-200 transition-colors">
                              {link.name}
                            </span>
                            <FaExternalLinkAlt className="text-gray-400 group-hover:text-indigo-300 transition-colors" />
                          </div>
                        </motion.a>
                      ))}
                    </div>
                  </div>
                )}
                
                {/* Tech Stack */}
                <div className="mb-6">
                  <h4 className="font-semibold text-white mb-3 flex items-center">
                    <span className="w-3 h-3 bg-purple-400 rounded-full mr-2"></span>
                    Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, i) => (
                      <motion.div 
                        key={i}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.6 + i * 0.05, type: 'spring' }}
                        viewport={{ once: true }}
                        className="flex items-center px-3 py-1 bg-gray-700/50 text-indigo-300 rounded-full text-xs font-medium border border-gray-600 hover:bg-gray-600/50 hover:border-indigo-400 transition-colors"
                        whileHover={{ y: -2 }}
                      >
                        {techIcons[tech] && (
                          <span className="mr-1.5">
                            {techIcons[tech]}
                          </span>
                        )}
                        {tech}
                      </motion.div>
                    ))}
                  </div>
                </div>
                
                {/* Action Buttons (hidden for portfolio specialist) */}
                {!project.hideButtons && (
                  <div className="flex space-x-4 mt-auto">
                    <motion.a 
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center px-4 py-2 bg-gradient-to-r from-indigo-600 to-blue-600 text-white rounded-lg hover:from-indigo-500 hover:to-blue-500 transition-all group relative overflow-hidden"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <FaGithub className="mr-2" /> Code
                    </motion.a>
                    <motion.a 
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center px-4 py-2 border border-indigo-600 text-indigo-300 rounded-lg hover:bg-indigo-900/30 transition-all group relative overflow-hidden"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.9 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <FaExternalLinkAlt className="mr-2" /> Demo
                    </motion.a>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Decorative Element */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <motion.div
            className="inline-block text-gray-400 text-sm border border-gray-700 rounded-full px-6 py-2 bg-gray-800/50 backdrop-blur-sm"
            animate={{
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatDelay: 2
            }}
          >
            More projects coming soon...
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "Interactive Developer Portfolio",
      description: "A high-performance portfolio built with React and Vite, featuring smooth animations and responsive design.",
      features: [
        "70% faster build speeds than Create-React-App",
        "Smooth animations with Framer Motion",
        "Scroll effects with AOS library",
        "Fully responsive interface scoring 95+ on Lighthouse",
        "AI-assisted development tools integration"
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

  return (
    <section 
      id="projects" 
      className="relative min-h-screen py-20 overflow-hidden bg-gray-900 text-white"
    >
      {/* Background Particles - Identical to Hero Section */}
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

        {/* Floating Shapes - Identical to Hero Section */}
        <motion.div
          className="absolute w-64 h-64 bg-purple-700 rounded-full mix-blend-multiply filter blur-xl opacity-30"
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
          className="absolute w-80 h-80 bg-blue-600 rounded-full mix-blend-multiply filter blur-xl opacity-30"
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
        {/* Section Header - Matching Hero Section Styling */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 text-transparent bg-clip-text">
              My Projects
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
            Showcase of my best work and contributions
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-800/50 rounded-xl overflow-hidden border border-gray-700/50 backdrop-blur-sm hover:shadow-lg transition-all"
              whileHover={{ y: -5 }}
            >
              {/* Project Image Placeholder - Matching Hero Section Style */}
              <div className="h-48 bg-gray-700/50 flex items-center justify-center relative overflow-hidden">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8 }}
                  className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10"
                />
                <span className="text-gray-400 z-10">Project Screenshot</span>
              </div>
              
              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                
                {/* Features List */}
                <div className="mb-4">
                  <h4 className="font-semibold text-white mb-2">Key Features:</h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, i) => (
                      <motion.li
                        key={i}
                        className="flex items-start"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <span className="text-indigo-400 mr-2 mt-1">▹</span>
                        <span className="text-gray-300">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
                
                {/* Tech Stack */}
                <div className="mb-6">
                  <h4 className="font-semibold text-white mb-2">Tech Stack:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, i) => (
                      <motion.span 
                        key={i}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.1 + i * 0.05 }}
                        viewport={{ once: true }}
                        className="px-3 py-1 bg-gray-700 text-indigo-300 rounded-full text-xs font-medium border border-gray-600"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
                
                {/* Action Buttons */}
                <div className="flex space-x-4">
                  <motion.a 
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-500 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaGithub className="mr-2" /> View Code
                  </motion.a>
                  <motion.a 
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-4 py-2 border border-indigo-600 text-indigo-300 rounded-lg hover:bg-indigo-900/50 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaExternalLinkAlt className="mr-2" /> Live Demo
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
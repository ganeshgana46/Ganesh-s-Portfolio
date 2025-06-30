import React from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaFigma,
  FaNodeJs,
} from "react-icons/fa";
import {
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiRedux,
  SiGraphql,
  SiJest,
  SiStorybook,
  SiVercel,
  SiWebpack,
  SiGreensock,
  SiFramer,
} from "react-icons/si";

const SkillsSection = () => {
  const skillsData = [
    {
      category: "Frontend",
      icon: "💻",
      skills: [
        { name: "React", icon: <FaReact className="text-blue-400" /> },
        { name: "Next.js", icon: <SiNextdotjs className="text-black dark:text-white" /> },
        { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
        { name: "JavaScript", icon: <FaJs className="text-yellow-300" /> },
        { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
        { name: "CSS3", icon: <FaCss3Alt className="text-blue-400" /> },
      ],
      color: "from-blue-500/10 to-blue-700/10",
    },
    {
      category: "Styling & Animation",
      icon: "🎨",
      skills: [
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> },
        { name: "Framer Motion", icon: <SiFramer className="text-pink-500" /> },
        { name: "GSAP", icon: <SiGreensock className="text-green-500" /> },
        { name: "CSS Modules", icon: <FaCss3Alt className="text-blue-300" /> },
        { name: "Styled Components", icon: <FaCss3Alt className="text-pink-400" /> },
      ],
      color: "from-purple-500/10 to-purple-700/10",
    },
    {
      category: "Tools & Workflow",
      icon: "🛠️",
      skills: [
        { name: "Git", icon: <FaGitAlt className="text-orange-500" /> },
        { name: "Figma", icon: <FaFigma className="text-purple-400" /> },
        { name: "Jest", icon: <SiJest className="text-red-500" /> },
        { name: "Storybook", icon: <SiStorybook className="text-pink-500" /> },
        { name: "Webpack", icon: <SiWebpack className="text-blue-400" /> },
        { name: "Vercel", icon: <SiVercel className="text-black dark:text-white" /> },
      ],
      color: "from-indigo-500/10 to-indigo-700/10",
    },
  ];

  const additionalSkills = [
    "React Native", "Node.js", "REST APIs", "JWT", 
    "Responsive Design", "UI/UX", "Accessibility",
    "Performance", "Cross-browser"
  ];

  return (
    <section 
      id="skills" 
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
              Technical Skills
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
            Tools and technologies I use to build exceptional digital experiences
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {skillsData.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`bg-gradient-to-br ${category.color} p-6 rounded-xl border border-gray-700/50 backdrop-blur-sm hover:shadow-lg transition-all`}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <motion.span
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 3 + Math.random() * 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="text-2xl"
                >
                  {category.icon}
                </motion.span>
                <h3 className="text-xl font-bold text-white">
                  {category.category}
                </h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: skillIndex * 0.05 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex flex-col items-center p-3 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-indigo-400/50 transition-all"
                  >
                    <div className="text-3xl mb-2">{skill.icon}</div>
                    <span className="text-sm font-medium text-gray-300">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="bg-gray-800/50 p-8 rounded-xl border border-gray-700/50 backdrop-blur-sm"
        >
          <h3 className="text-2xl font-bold mb-6 text-center text-white">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Also Work With
            </span>
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {additionalSkills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + index * 0.03 }}
                whileHover={{ scale: 1.05 }}
                className="px-4 py-2 bg-gray-700/50 rounded-full text-sm font-medium text-gray-200 border border-gray-600 hover:bg-gray-600/50 transition-all"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
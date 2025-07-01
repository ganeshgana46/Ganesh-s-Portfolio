import { motion } from 'framer-motion';
import { FaGraduationCap, FaAward, FaMapMarkerAlt, FaLaptopCode } from 'react-icons/fa';

const education = [
  {
    type: "course",
    degree: "Frontend Development Certification",
    institution: "Digital Institute, Hitec City",
    duration: "2024",
    location: "Hyderabad, India",
    skills: "React, JavaScript, HTML/CSS",
    projects: "5+ projects completed",
    icon: <FaLaptopCode className="text-purple-400 text-2xl" />
  },
  {
    type: "degree",
    degree: "Bachelor of Technology in Electronics and Communication Engineering",
    institution: "Vel Tech Rangarajan Dr. Sagunthala R&D Institute of Science and Technology",
    duration: "2019 - 2023",
    location: "Chennai, India",
    gpa: "8.23/10",
    awards: "Merit Scholarship",
    icon: <FaGraduationCap className="text-indigo-400 text-2xl" />
  },
  {
    type: "school",
    degree: "Board of Intermediate Education",
    institution: "Suvarna Bharathi Junior College",
    duration: "2017 - 2019",
    location: "Hindupur, India",
    gpa: "9.57/10",
    awards: "Merit Scholarship",
    icon: <FaGraduationCap className="text-blue-400 text-2xl" />
  }
];

const Education = () => {
  // Background particle animation component
  const ParticlesBackground = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-indigo-500 opacity-20"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            width: `${Math.random() * 8 + 4}px`,
            height: `${Math.random() * 8 + 4}px`,
          }}
          animate={{
            y: [null, -15],
            opacity: [0.1, 0.4, 0.1],
          }}
          transition={{
            duration: Math.random() * 6 + 4,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      ))}
    </div>
  );

  // Timeline dot animation
  const dotVariants = {
    hidden: { scale: 0 },
    visible: { 
      scale: 1,
      transition: { 
        type: "spring",
        stiffness: 260,
        damping: 20
      }
    }
  };

  // Card animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.6, 
        ease: "backOut",
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    },
    hover: {
      y: -5,
      boxShadow: "0 10px 25px -5px rgba(79, 70, 229, 0.3)",
      transition: { duration: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const getCardColor = (type) => {
    switch(type) {
      case "degree": return "from-indigo-900/50 to-indigo-800/30";
      case "course": return "from-purple-900/50 to-purple-800/30";
      case "school": return "from-blue-900/50 to-blue-800/30";
      default: return "from-gray-800/50 to-gray-700/30";
    }
  };

  return (
    <section id="education" className="relative py-20 bg-gradient-to-b from-gray-900 to-gray-800 overflow-hidden">
      {/* Background Particles */}
      <ParticlesBackground />
      
      {/* Abstract Floating Shapes */}
      <motion.div
        className="absolute w-64 h-64 bg-purple-700 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"
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
        className="absolute w-80 h-80 bg-blue-600 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"
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

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-purple-300 to-indigo-300">
            Education & Training
          </h2>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
            My academic journey and professional development that shaped my career
          </p>
        </motion.div>
        
        <div className="relative">
          {/* Timeline line moved to right side of icons */}
          <div className="absolute left-20 h-full w-0.5 bg-gradient-to-b from-indigo-500/20 via-purple-500/20 to-blue-500/20"></div>
          
          <div className="space-y-12 pl-8"> {/* Reduced left padding */}
            {education.map((edu, index) => (
              <motion.div
                key={index}
                className="relative"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                transition={{ staggerChildren: 0.1 }}
              >
                {/* Icon positioned to the left of timeline */}
                <motion.div 
                  className={`absolute top-6 left-0 w-8 h-8 rounded-full flex items-center justify-center z-10
                    ${edu.type === "degree" ? "bg-indigo-500" : 
                      edu.type === "course" ? "bg-purple-500" : "bg-blue-500"}`}
                  variants={dotVariants}
                >
                  {edu.icon}
                </motion.div>
                
                {/* Card with adjusted margin */}
                <motion.div
                  className={`ml-10 bg-gradient-to-br ${getCardColor(edu.type)} p-6 rounded-2xl border border-gray-700 shadow-xl backdrop-blur-sm`}
                  variants={cardVariants}
                  whileHover="hover"
                >
                  <motion.div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                    <motion.div variants={itemVariants} className="md:w-2/3">
                      <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
                      <p className="text-indigo-300 font-medium mt-1">{edu.institution}</p>
                    </motion.div>
                    <motion.div variants={itemVariants} className="mt-4 md:mt-0 md:text-right">
                      <p className="text-gray-300 font-medium">{edu.duration}</p>
                      <p className="text-gray-400 flex items-center mt-1 md:justify-end">
                        <FaMapMarkerAlt className="mr-1 text-sm" />
                        {edu.location}
                      </p>
                    </motion.div>
                  </motion.div>
                  
                  <motion.div 
                    className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4"
                    variants={itemVariants}
                  >
                    {edu.gpa && (
                      <div className="flex items-start">
                        <div className="p-2 bg-indigo-900/50 rounded-lg mr-3 mt-1">
                          <FaAward className="text-indigo-300" />
                        </div>
                        <div>
                          <p className="text-gray-300 text-sm">GPA</p>
                          <p className="text-white font-medium">{edu.gpa}</p>
                        </div>
                      </div>
                    )}
                    
                    {edu.awards && (
                      <div className="flex items-start">
                        <div className="p-2 bg-purple-900/50 rounded-lg mr-3 mt-1">
                          <FaAward className="text-purple-300" />
                        </div>
                        <div>
                          <p className="text-gray-300 text-sm">Achievements</p>
                          <p className="text-white font-medium">{edu.awards}</p>
                        </div>
                      </div>
                    )}
                    
                    {edu.skills && (
                      <div className="flex items-start">
                        <div className="p-2 bg-blue-900/50 rounded-lg mr-3 mt-1">
                          <FaLaptopCode className="text-blue-300" />
                        </div>
                        <div>
                          <p className="text-gray-300 text-sm">Skills Learned</p>
                          <p className="text-white font-medium">{edu.skills}</p>
                        </div>
                      </div>
                    )}
                    
                    {edu.projects && (
                      <div className="flex items-start">
                        <div className="p-2 bg-purple-900/50 rounded-lg mr-3 mt-1">
                          <svg className="w-4 h-4 text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                          </svg>
                        </div>
                        <div>
                          <p className="text-gray-300 text-sm">Projects</p>
                          <p className="text-white font-medium">{edu.projects}</p>
                        </div>
                      </div>
                    )}
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
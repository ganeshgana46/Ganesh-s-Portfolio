import { motion, AnimatePresence } from 'framer-motion';
import 'aos/dist/aos.css';

const education = [
  {
    degree: "Bachelor of Technology in Electronics and Communication Engineering",
    institution: "Vel Tech Rangarajan Dr. Sagunthala R&D Institute of Science and Technology",
    duration: "May 2023",
    location: "Chennai, India",
    gpa: "GPA: 8.23/10",
    awards: "Academic Honours/Awards: Merit Scholarship"
  },
  {
    degree: "Board of Intermediate Education",
    institution: "Suvarna Bharathi Junior College",
    duration: "May 2019",
    location: "Hindupur, India",
    gpa: "GPA: 9.57/10",
    awards: "Academic Honours/Awards: Merit Scholarship"
  }
];

const Education = () => {
  // Background particle animation component
  const ParticlesBackground = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-indigo-500 opacity-20"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            width: `${Math.random() * 10 + 5}px`,
            height: `${Math.random() * 10 + 5}px`,
          }}
          animate={{
            y: [null, -20],
            opacity: [0.1, 0.4, 0.1],
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
      boxShadow: "0 10px 25px -5px rgba(79, 70, 229, 0.2)",
      transition: { duration: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-purple-300">
            Education
          </h2>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
            My academic journey and qualifications that shaped my technical foundation
          </p>
        </motion.div>
        
        <div className="space-y-8">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 bg-opacity-50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 shadow-lg"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              whileHover="hover"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <motion.div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                <motion.div variants={itemVariants}>
                  <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
                  <p className="text-indigo-400 font-medium mt-1">{edu.institution}</p>
                </motion.div>
                <motion.div variants={itemVariants} className="mt-4 md:mt-0">
                  <p className="text-gray-300">{edu.duration}</p>
                  <p className="text-gray-400 flex items-center mt-1">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {edu.location}
                  </p>
                </motion.div>
              </motion.div>
              
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4"
                variants={itemVariants}
              >
                <div className="flex items-center">
                  <div className="p-2 bg-indigo-900 bg-opacity-50 rounded-lg mr-3">
                    <svg className="w-5 h-5 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <p className="text-gray-300"><span className="font-medium text-indigo-200">{edu.gpa}</span></p>
                </div>
                <div className="flex items-center">
                  <div className="p-2 bg-purple-900 bg-opacity-50 rounded-lg mr-3">
                    <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <p className="text-gray-300"><span className="text-purple-200">{edu.awards}</span></p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
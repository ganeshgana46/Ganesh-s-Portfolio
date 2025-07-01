import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "backOut"
      }
    }
  };

  const socialVariants = {
    hover: {
      y: -5,
      scale: 1.1,
      color: "#a78bfa", // purple-400
      transition: { duration: 0.3 }
    },
    tap: { scale: 0.9 }
  };

  return (
    <footer className="relative bg-gradient-to-b from-gray-900 to-gray-800 text-white py-16 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-indigo-500 opacity-10"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              width: `${Math.random() * 10 + 5}px`,
              height: `${Math.random() * 10 + 5}px`,
            }}
            animate={{
              y: [null, -20],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-4 gap-12"
        >
          {/* About Column */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-indigo-300 to-purple-300 bg-clip-text text-transparent">
              Ganesh Pallam
            </h3>
            <p className="text-gray-400">
              Front-End Developer specializing in React, JavaScript, and responsive web design.
            </p>
          </motion.div>
          
          {/* Quick Links Column */}
          <motion.div variants={itemVariants}>
            <h4 className="text-xl font-semibold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'About', 'Skills', 'Experience', 'Projects', 'Education', 'Contact'].map((item, index) => (
                <motion.li 
                  key={index}
                  variants={itemVariants}
                  whileHover={{ x: 5 }}
                >
                  <a 
                    href={`#${item.toLowerCase()}`} 
                    className="text-gray-400 hover:text-indigo-300 transition-colors flex items-center"
                  >
                    <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></span>
                    {item}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          
          {/* Contact Info Column */}
          <motion.div variants={itemVariants}>
            <h4 className="text-xl font-semibold mb-6 text-white">Contact Info</h4>
            <ul className="space-y-4 text-gray-400">
              <motion.li 
                className="flex items-start"
                variants={itemVariants}
              >
                <FaMapMarkerAlt className="text-indigo-400 mt-1 mr-3 flex-shrink-0" />
                <span>Bangalore, India</span>
              </motion.li>
              <motion.li 
                className="flex items-start"
                variants={itemVariants}
              >
                <FaEnvelope className="text-indigo-400 mt-1 mr-3 flex-shrink-0" />
                <a href="mailto:pallamganesh213@gmail.com" className="hover:text-indigo-300 transition-colors">
                  pallamganesh213@gmail.com
                </a>
              </motion.li>
              <motion.li 
                className="flex items-start"
                variants={itemVariants}
              >
                <FaPhone className="text-indigo-400 mt-1 mr-3 flex-shrink-0" />
                <a href="tel:+918296096782" className="hover:text-indigo-300 transition-colors">
                  +91 8296096782
                </a>
              </motion.li>
            </ul>
          </motion.div>
          
          {/* Social Links Column */}
          <motion.div variants={itemVariants}>
            <h4 className="text-xl font-semibold mb-6 text-white">Follow Me</h4>
            <div className="flex space-x-5">
              {[
                { icon: <FaGithub className="h-6 w-6" />, url: "https://github.com/ganeshgana46" },
                { icon: <FaLinkedin className="h-6 w-6" />, url: "https://www.linkedin.com/in/ganesh-pallam/" },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400"
                  variants={socialVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>
        
        {/* Copyright */}
        <motion.div 
          className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p>&copy; {currentYear} Ganesh Pallam. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
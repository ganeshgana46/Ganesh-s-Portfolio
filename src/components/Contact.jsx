import { motion, AnimatePresence } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaLinkedin, FaGithub, FaInstagram, FaFacebook, FaWhatsapp } from 'react-icons/fa';
import 'aos/dist/aos.css';

const Contact = () => {
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

  const buttonVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: "backOut" },
    },
    hover: {
      scale: 1.05,
      boxShadow: "0 0 15px rgba(79, 70, 229, 0.5)",
      transition: { duration: 0.4, ease: "easeInOut" },
    },
    tap: { scale: 0.98 },
  };

  return (
    <section id="contact" className="relative py-20 bg-gradient-to-b from-gray-900 to-gray-800 overflow-hidden">
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
            Get In Touch
          </h2>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
            Feel free to reach out for collaborations or just a friendly hello
          </p>
        </motion.div>
        
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Contact Information */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-semibold text-white mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <motion.div 
                className="flex items-start bg-gray-800 bg-opacity-50 backdrop-blur-sm p-4 rounded-xl border border-gray-700"
                variants={itemVariants}
                whileHover={{ y: -3 }}
              >
                <div className="bg-indigo-900 bg-opacity-50 p-3 rounded-full mr-4">
                  <FaEnvelope className="text-indigo-400" />
                </div>
                <div>
                  <h4 className="text-gray-400 font-medium">Email</h4>
                  <a href="mailto:pallamganesh213@gmail.com" className="text-white hover:text-indigo-300 transition-colors">
                    pallamganesh213@gmail.com
                  </a>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-start bg-gray-800 bg-opacity-50 backdrop-blur-sm p-4 rounded-xl border border-gray-700"
                variants={itemVariants}
                whileHover={{ y: -3 }}
              >
                <div className="bg-indigo-900 bg-opacity-50 p-3 rounded-full mr-4">
                  <FaPhone className="text-indigo-400" />
                </div>
                <div>
                  <h4 className="text-gray-400 font-medium">Phone</h4>
                  <a href="tel:+918296096782" className="text-white hover:text-indigo-300 transition-colors">
                    +91 8296096782
                  </a>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-start bg-gray-800 bg-opacity-50 backdrop-blur-sm p-4 rounded-xl border border-gray-700"
                variants={itemVariants}
                whileHover={{ y: -3 }}
              >
                <div className="bg-indigo-900 bg-opacity-50 p-3 rounded-full mr-4">
                  <FaMapMarkerAlt className="text-indigo-400" />
                </div>
                <div>
                  <h4 className="text-gray-400 font-medium">Address</h4>
                  <p className="text-white">
                    Hindupur, Sri Sathya Sai District, Andhra Pradesh 515201
                  </p>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-start bg-gray-800 bg-opacity-50 backdrop-blur-sm p-4 rounded-xl border border-gray-700"
                variants={itemVariants}
                whileHover={{ y: -3 }}
              >
                <div className="bg-indigo-900 bg-opacity-50 p-3 rounded-full mr-4">
                  <FaClock className="text-indigo-400" />
                </div>
                <div>
                  <h4 className="text-gray-400 font-medium">Working Hours</h4>
                  <p className="text-white">Mon–Sat: 9AM–9PM</p>
                </div>
              </motion.div>
            </div>
            
            <motion.div 
              className="mt-8"
              variants={itemVariants}
            >
              <h3 className="text-2xl font-semibold text-white mb-4">Social Links</h3>
              <div className="flex space-x-4">
                <motion.a 
                  href="https://linkedin.com/in/yourusername" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-indigo-900 bg-opacity-50 p-3 rounded-full text-indigo-400 hover:bg-indigo-800 hover:text-white transition-colors"
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaLinkedin />
                </motion.a>
                <motion.a 
                  href="https://github.com/yourusername" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-indigo-900 bg-opacity-50 p-3 rounded-full text-indigo-400 hover:bg-indigo-800 hover:text-white transition-colors"
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaGithub />
                </motion.a>
              </div>
            </motion.div>
            
            <motion.div 
              className="mt-8 bg-indigo-900 bg-opacity-20 backdrop-blur-sm p-4 rounded-xl border border-indigo-800"
              variants={itemVariants}
              whileHover={{ scale: 1.01 }}
            >
              <div className="flex items-start">
                <div className="bg-indigo-800 p-2 rounded-full mr-3">
                  <FaWhatsapp className="text-indigo-300" />
                </div>
                <div>
                  <h4 className="text-white font-medium">Need help?</h4>
                  <p className="text-gray-300">Check our FAQ or WhatsApp us directly!</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Contact Form */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-semibold text-white mb-6">Send Me a Message</h3>
            <form className="space-y-4">
              <motion.div variants={itemVariants}>
                <label htmlFor="name" className="block text-gray-300 mb-2">Your Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition text-white placeholder-gray-500"
                  placeholder="Enter your name"
                />
              </motion.div>
              
              <motion.div variants={itemVariants}>
                <label htmlFor="email" className="block text-gray-300 mb-2">Your Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition text-white placeholder-gray-500"
                  placeholder="Enter your email"
                />
              </motion.div>
              
              <motion.div variants={itemVariants}>
                <label htmlFor="subject" className="block text-gray-300 mb-2">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition text-white placeholder-gray-500"
                  placeholder="Enter subject"
                />
              </motion.div>
              
              <motion.div variants={itemVariants}>
                <label htmlFor="message" className="block text-gray-300 mb-2">Your Message</label>
                <textarea 
                  id="message" 
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition text-white placeholder-gray-500"
                  placeholder="Enter your message"
                ></textarea>
              </motion.div>
              
              <motion.button
                variants={buttonVariants}
                type="submit"
                className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 px-6 rounded-lg font-medium hover:from-indigo-500 hover:to-purple-500 transition-colors"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
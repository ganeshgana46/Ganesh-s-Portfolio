import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import React, { useState, useEffect, useRef } from 'react';

const HeroSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef(null);

  // Handle click outside modal
  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      setIsModalOpen(false);
    }
  };

  // Scroll to contact section
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Lock scroll when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.body.style.overflow = "auto";
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.body.style.overflow = "auto";
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isModalOpen]);

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

  // Button animation variants
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

  // Social links
  const socialLinks = [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/ganesh-pallam/",
      icon: <FaLinkedin className="text-2xl" />,
    },
    {
      name: "GitHub",
      href: "https://github.com/ganeshgana46",
      icon: <FaGithub className="text-2xl" />,
    },
    {
      name: "Email",
      href: "mailto:pallamganesh213@gmail.com",
      icon: <FaEnvelope className="text-2xl" />,
    },
  ];

  // Contact info
  const contactInfo = [
    { icon: <FaPhone className="text-indigo-400" />, text: "+91 8296096782" },
    {
      icon: <FaEnvelope className="text-indigo-400" />,
      text: "pallamganesh213@gmail.com",
    },
    {
      icon: <FaMapMarkerAlt className="text-indigo-400" />,
      text: "Bangalore, India",
    },
  ];

  // Mock resume download handler
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "GaneshPallam_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Image animation - now always floating
  const imageVariants = {
    initial: { opacity: 0, scale: 0.9, y: 20 },
    animate: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
    floating: {
      y: [-10, 10],
      transition: {
        y: {
          duration: 3,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        },
      },
    }
  };

  return (
    <>
      {/* Modal for Resume */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-8 bg-black/50 backdrop-blur-sm pt-20 lg:pt-16"
          >
            <motion.div
              ref={modalRef}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="w-full max-w-4xl bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-lg shadow-2xl border border-gray-700 overflow-hidden"
            >
              <div className="flex justify-between items-center p-4 border-b border-gray-700">
                <h3 className="text-xl font-semibold bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-500 bg-clip-text text-transparent">
                  My Resume
                </h3>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="text-gray-400 hover:text-white focus:outline-none transition-colors"
                >
                  ✖
                </button>
              </div>
              <div className="p-4">
                <iframe
                  src="/resume.pdf"
                  className="w-full h-[60vh] border border-gray-700 rounded bg-gray-900"
                  title="Resume PDF Viewer"
                />
              </div>
              <div className="p-4 border-t border-gray-700 flex justify-center bg-gray-900">
                <motion.button
                  variants={buttonVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover="hover"
                  whileTap="tap"
                  onClick={handleDownload}
                  className="px-6 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium rounded-md flex items-center shadow-lg relative overflow-hidden"
                >
                  📄 Download Resume
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Hero Section */}
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center pt-10">
            {/* Image Column - Now first in mobile view */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="order-1 md:order-2 relative flex justify-center"
            >
              <motion.div
                className="relative w-full max-w-md h-80 md:h-96 rounded-xl overflow-hidden border-4 border-indigo-500/30 shadow-2xl"
                variants={imageVariants}
                initial="initial"
                animate={["animate", "floating"]}
              >
                <motion.img
                  src="/images/developer-image.png"
                  alt="Ganesh Pallam"
                  className="w-full h-full object-cover"
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                />
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.3 }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="absolute inset-0 border-2 border-indigo-400/30 pointer-events-none"
                ></motion.div>
              </motion.div>
            </motion.div>

            {/* Content Column - Now second in mobile view */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="order-2 md:order-1 text-center md:text-left space-y-6"
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

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="mb-8"
              >
                {contactInfo.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-center md:justify-start mb-2 text-gray-300"
                  >
                    <span className="mr-2">{item.icon}</span>
                    <span className="ml-2">{item.text}</span>
                  </div>
                ))}
              </motion.div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mt-4">
                <motion.button
                  variants={buttonVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover="hover"
                  whileTap="tap"
                  onClick={scrollToContact}
                  className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white px-6 py-3 rounded-lg font-medium shadow-lg transition-transform"
                >
                  💬 Let's Talk
                </motion.button>
                <motion.button
                  variants={buttonVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover="hover"
                  whileTap="tap"
                  onClick={() => setIsModalOpen(true)}
                  className="border-2 border-indigo-500 text-indigo-300 hover:bg-indigo-900 hover:text-indigo-200 px-6 py-3 rounded-lg font-medium transition-all"
                >
                  📄 View Resume
                </motion.button>
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                className="flex gap-4 justify-center md:justify-start"
              >
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className="text-indigo-400 hover:text-indigo-200 transition-colors duration-300"
                    whileHover={{ y: -5, scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>
          </div>

          {/* Location Tag */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className=" pb-10 mt-10 text-center text-gray-500"
          >
            <p>📍 Bangalore, India • Open for remote opportunities</p>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
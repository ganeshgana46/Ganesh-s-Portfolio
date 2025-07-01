import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import {
  FaGithub,
  FaLinkedin,
  FaHome,
  FaUser,
  FaCode,
  FaLaptopCode,
  FaProjectDiagram,
  FaGraduationCap,
  FaPaperPlane,
  FaBars,
  FaTimes,
} from 'react-icons/fa';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);
  const navRef = useRef(null);
  const mobileMenuRef = useRef(null);

  // Handle scroll behavior for navbar background
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsAtTop(scrollPosition < 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Section detection
  useEffect(() => {
    const handleScrollSection = () => {
      const sections = ['home', 'about', 'skills', 'experience', 'projects', 'education', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScrollSection);
    return () => window.removeEventListener('scroll', handleScrollSection);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      const isNavbarClick = navRef.current && navRef.current.contains(event.target);
      const isMobileMenuClick = mobileMenuRef.current && mobileMenuRef.current.contains(event.target);
      
      if (!isNavbarClick && !isMobileMenuClick) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  const navLinks = [
    { id: 'home', label: 'Home', icon: <FaHome className="mr-2" /> },
    { id: 'about', label: 'About', icon: <FaUser className="mr-2" /> },
    { id: 'skills', label: 'Skills', icon: <FaCode className="mr-2" /> },
    { id: 'experience', label: 'Experience', icon: <FaLaptopCode className="mr-2" /> },
    { id: 'projects', label: 'Projects', icon: <FaProjectDiagram className="mr-2" /> },
    { id: 'education', label: 'Education', icon: <FaGraduationCap className="mr-2" /> },
    { id: 'contact', label: 'Contact', icon: <FaPaperPlane className="mr-2" /> },
  ];

  const handleNavClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Navbar Container */}
      <motion.nav
        ref={navRef}
        className={`fixed inset-x-0 top-0 h-16 z-[9999] transition-all duration-300 ${
          isAtTop ? '' : 'bg-gray-900/95 backdrop-blur-md shadow-lg'
        }`}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex justify-between items-center h-full">
            {/* Mobile menu button - Left side */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`${isAtTop ? 'text-white' : 'text-gray-300'} hover:text-indigo-300 focus:outline-none`}
                aria-label="Toggle Menu"
              >
                {isMenuOpen ? <FaTimes className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
              </button>
            </div>

            {/* Name/Logo - Right side in mobile, centered in desktop */}
            <div className="flex items-center md:mx-auto">
              <span className="text-2xl font-bold bg-gradient-to-r from-white via-indigo-300 to-purple-300 text-transparent bg-clip-text">
                Ganesh Pallam
              </span>
            </div>

            {/* Desktop Navigation - Right side */}
            <div className="hidden md:flex items-center space-x-6 h-full">
              {navLinks.map((link) => (
                <motion.a
                  key={link.id}
                  href={`#${link.id}`}
                  className={`flex items-center ${
                    activeSection === link.id
                      ? 'text-white'
                      : 'bg-gradient-to-r from-indigo-300 to-purple-300 text-transparent bg-clip-text hover:text-white'
                  } font-medium transition-colors duration-300`}
                  onClick={() => handleNavClick(link.id)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {link.icon}
                  {link.label}
                </motion.a>
              ))}

              <motion.a
                href="#contact"
                className={`ml-4 px-4 py-2 rounded-full font-semibold transition-all duration-300 bg-gradient-to-r from-indigo-400 to-purple-500 text-white hover:from-indigo-500 hover:to-purple-600`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Let's Connect
              </motion.a>

              <div className="flex items-center space-x-4 ml-4">
                <a
                  href="https://github.com/ganeshgana46"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${isAtTop ? 'text-white' : 'text-gray-300'} hover:text-indigo-300 transition-colors`}
                  aria-label="GitHub"
                >
                  <FaGithub className="h-5 w-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/ganesh-pallam/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${isAtTop ? 'text-white' : 'text-gray-300'} hover:text-indigo-300 transition-colors`}
                  aria-label="LinkedIn"
                >
                  <FaLinkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 z-[9998] bg-black/50 backdrop-blur-sm"
          onClick={() => setIsMenuOpen(false)}
        >
          {/* Mobile Menu Content */}
          <motion.div
            ref={mobileMenuRef}
            className="fixed top-16 left-0 right-0 bg-gray-900/95 shadow-xl"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="px-4 pt-4 pb-6 space-y-4">
              {navLinks.map((link) => (
                <motion.a
                  key={link.id}
                  href={`#${link.id}`}
                  className={`${
                    activeSection === link.id
                      ? 'font-semibold bg-gradient-to-r from-indigo-400 to-purple-400 text-transparent bg-clip-text'
                      : 'text-gray-300'
                  } flex items-center gap-3 px-3 py-2 rounded-lg text-base font-medium transition-colors`}
                  onClick={() => handleNavClick(link.id)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className={`${activeSection === link.id ? 'text-indigo-400' : 'text-gray-400'}`}>
                    {link.icon}
                  </span>
                  {link.label}
                </motion.a>
              ))}

              <div className="flex justify-center space-x-6 mt-4">
                <a
                  href="https://github.com/ganeshgana46"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-indigo-300 p-2 transition-colors"
                  aria-label="GitHub"
                >
                  <FaGithub className="h-6 w-6" />
                </a>
                <a
                  href="https://www.linkedin.com/in/ganesh-pallam/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-indigo-300 p-2 transition-colors"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin className="h-6 w-6" />
                </a>
              </div>
              <a
                href="#contact"
                className="block text-center px-4 py-2 rounded-lg text-white font-semibold bg-gradient-to-r from-indigo-400 to-purple-500 hover:from-indigo-500 hover:to-purple-600 transition-all duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Let's Connect
              </a>
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
};

export default Navbar;
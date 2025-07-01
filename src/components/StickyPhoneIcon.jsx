import { motion } from 'framer-motion';
import { FaPhone } from 'react-icons/fa';

const StickyPhoneIcon = () => {
  return (
    <motion.a
      href="tel:+918296096782"
      className="fixed bottom-8 right-8 z-50 w-14 h-14 bg-indigo-600 rounded-full flex items-center justify-center shadow-lg hover:bg-indigo-700 transition-colors duration-300"
      aria-label="Call me"
      initial={{ opacity: 0, y: 20 }}
      animate={{ 
        opacity: 1, 
        y: 0,
        y: [0, -10, 0], // Floating up and down
      }}
      transition={{
        opacity: { duration: 0.5, delay: 1 },
        y: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 2,
          ease: "easeInOut"
        },
        hover: { scale: 1.1 },
        tap: { scale: 0.9 }
      }}
      whileHover={{ 
        scale: 1.1,
        y: 0, // Stop floating when hovered
        transition: { duration: 0.2 }
      }}
    >
      <FaPhone className="text-white text-2xl" />
      {/* Optional pulse ring effect */}
      <motion.span
        className="absolute inset-0 border-2 border-indigo-400 rounded-full"
        animate={{
          scale: [1, 1.3],
          opacity: [0.7, 0]
        }}
        transition={{
          repeat: Infinity,
          duration: 2,
          ease: "easeOut"
        }}
      />
    </motion.a>
  );
};

export default StickyPhoneIcon;
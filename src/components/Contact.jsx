import { motion, AnimatePresence } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaWhatsapp
} from "react-icons/fa";
import { useState, useRef, useEffect } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const formRef = useRef(null);

  // Environment variables for Web3Forms
  const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

  // Background particle animation component (from Hero section)
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
            ease: "linear",
          }}
        />
      ))}
    </div>
  );

  // Floating animation variants
  const floatVariants = {
    float: {
      y: [-5, 5],
      transition: {
        y: {
          duration: 3,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        },
      },
    },
  };

  // Input focus animation
  const inputFocus = {
    focus: {
      scale: 1.02,
      boxShadow: "0 0 0 2px rgba(99, 102, 241, 0.5)",
      transition: { duration: 0.2 },
    },
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setSubmitStatus("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
        formRef.current.reset();
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Reset status after timeout
  useEffect(() => {
    if (submitStatus) {
      const timer = setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [submitStatus]);

  return (
    <section
      id="contact"
      className="relative min-h-screen py-20 bg-gradient-to-b from-gray-900 to-gray-800 overflow-hidden"
    >
      {/* Background Particles */}
      <ParticlesBackground />

      {/* Abstract Floating Shapes (from Hero section) */}
      <motion.div
        className="absolute w-64 h-64 bg-purple-700 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"
        style={{ top: "10%", left: "10%" }}
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
        style={{ top: "60%", right: "10%" }}
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
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-500 bg-clip-text text-transparent"
          >
            Contact Me
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-gray-300 max-w-2xl mx-auto"
          >
            Have a project in mind or want to collaborate? Drop me a message!
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 shadow-2xl"
          >
            <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-indigo-300 to-purple-300 bg-clip-text text-transparent">
              Send a Message
            </h3>
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
              <input type="hidden" name="access_key" value={accessKey} />
              <input
                type="hidden"
                name="redirect"
                value="https://web3forms.com/success"
              />

              <div className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-300 mb-1"
                  >
                    Your Name
                  </label>
                  <motion.div whileFocus="focus" variants={inputFocus}>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-white placeholder-gray-400 transition-all"
                      placeholder="John Doe"
                    />
                  </motion.div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-300 mb-1"
                  >
                    Email Address
                  </label>
                  <motion.div whileFocus="focus" variants={inputFocus}>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-white placeholder-gray-400 transition-all"
                      placeholder="you@example.com"
                    />
                  </motion.div>
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-300 mb-1"
                  >
                    Phone Number
                  </label>
                  <motion.div whileFocus="focus" variants={inputFocus}>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-white placeholder-gray-400 transition-all"
                      placeholder="+91 1234567890"
                    />
                  </motion.div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-300 mb-1"
                  >
                    Subject
                  </label>
                  <motion.div whileFocus="focus" variants={inputFocus}>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-white placeholder-gray-400 transition-all"
                      placeholder="Project Inquiry"
                    />
                  </motion.div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-300 mb-1"
                  >
                    Your Message
                  </label>
                  <motion.div whileFocus="focus" variants={inputFocus}>
                    <textarea
                      id="message"
                      name="message"
                      rows="5"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-white placeholder-gray-400 transition-all"
                      placeholder="Hello Ganesh, I'd like to discuss..."
                    ></textarea>
                  </motion.div>
                </div>
              </div>

              <div className="pt-2">
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full flex items-center justify-center px-6 py-3 border border-transparent rounded-lg shadow-sm text-base font-medium text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all ${
                    isSubmitting ? "opacity-80 cursor-not-allowed" : ""
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <FaPaperPlane className="mr-2" />
                      Send Message
                    </>
                  )}
                </motion.button>
              </div>

              <AnimatePresence>
                {submitStatus === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="p-4 bg-green-900/50 border border-green-700 rounded-lg text-green-200 text-center"
                  >
                    🎉 Thanks for your message! I'll get back to you soon.
                  </motion.div>
                )}

                {submitStatus === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="p-4 bg-red-900/50 border border-red-700 rounded-lg text-red-200 text-center"
                  >
                    ❌ Something went wrong. Please try again or email me
                    directly.
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-indigo-300">
                Let's Collaborate
              </h3>
              <p className="text-lg text-gray-300">
                I'm currently open to new opportunities, whether it's freelance
                work, contract projects, or full-time positions. Feel free to
                reach out!
              </p>
            </div>

            <div className="space-y-6">
              <motion.a
                href="mailto:pallamganesh213@gmail.com"
                variants={floatVariants}
                animate="float"
                className="block p-6 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 shadow-lg hover:bg-gray-700/50 transition-colors"
              >
                <h4 className="text-xl font-semibold text-white mb-4 flex items-center">
                  <FaEnvelope className="text-indigo-400 mr-3" />
                  Email Me
                </h4>
                <p className="text-indigo-300 text-lg">
                  pallamganesh213@gmail.com
                </p>
              </motion.a>

              <motion.a
                href="https://wa.me/918296096782"
                target="_blank"
                rel="noopener noreferrer"
                variants={floatVariants}
                animate="float"
                transition={{ delay: 0.2 }}
                className="block p-6 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 shadow-lg hover:bg-gray-700/50 transition-colors"
              >
                <h4 className="text-xl font-semibold text-white mb-4 flex items-center">
                  <FaWhatsapp className="text-indigo-400 mr-3" />
                  WhatsApp Me
                </h4>
                <p className="text-indigo-300 text-lg">
                  Any questions? Click to chat directly
                </p>
              </motion.a>

              <motion.div
                variants={floatVariants}
                animate="float"
                transition={{ delay: 0.4 }}
                className="p-6 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 shadow-lg"
              >
                <h4 className="text-xl font-semibold text-white mb-4 flex items-center">
                  <FaMapMarkerAlt className="text-indigo-400 mr-3" />
                  Location
                </h4>
                <p className="text-indigo-300 text-lg">Bangalore, India</p>
                <p className="text-gray-400 mt-2">
                  Open to remote work worldwide
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
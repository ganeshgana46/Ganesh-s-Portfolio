import { motion } from 'framer-motion';
import 'aos/dist/aos.css';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          data-aos="fade-up"
        >
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">About Me</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-600 mb-6">
                Front-End Developer specializing in React, JavaScript, and responsive web design. 
                Passionate about crafting intuitive, high-performance user interfaces with clean, 
                maintainable code.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Experienced in state management, Rest APIs, and modern front-end workflows. 
                Strong problem-solving skills and a keen eye for UX/UI best practices.
              </p>
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">My Specialties:</h3>
                <div className="flex flex-wrap gap-3">
                  {['React', 'Next.js', 'Tailwind CSS', 'TypeScript', 'Responsive Design', 'Redux'].map((skill) => (
                    <span 
                      key={skill}
                      className="px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                Download Resume
              </motion.button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { title: 'Experience', value: '1+ Years', desc: 'Freelance Development' },
                { title: 'Projects', value: '10+', desc: 'Completed' },
                { title: 'Education', value: 'B.Tech', desc: 'Electronics & Communication' },
                { title: 'Location', value: 'Bangalore', desc: 'India' },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <h3 className="text-2xl font-bold text-indigo-600 mb-1">{item.value}</h3>
                  <p className="text-gray-700 font-medium">{item.title}</p>
                  <p className="text-gray-500 text-sm">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
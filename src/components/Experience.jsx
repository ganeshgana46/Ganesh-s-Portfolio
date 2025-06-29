import { motion } from 'framer-motion';
import 'aos/dist/aos.css';

const experiences = [
  {
    role: "Freelance Front-End Developer",
    company: "Self-Employed | Remote",
    duration: "2024 - Present",
    location: "Bangalore, India",
    responsibilities: [
      "Developed high-performance web applications using React.js, Next.js, and TypeScript",
      "Leveraged Tailwind CSS for rapid UI development and consistent design systems",
      "Integrated AI-powered tools (ChatGPT, Deepseek) to accelerate code generation",
      "Managed state efficiently using Redux and Context API",
      "Automated deployments using Vercel and Netlify",
      "Followed Agile/Scrum methodologies with remote teams",
      "Built and optimized RESTful API integrations"
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          data-aos="fade-up"
        >
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">My Experience</h2>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 p-6 rounded-lg shadow-sm"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">{exp.role}</h3>
                    <p className="text-indigo-600 font-medium">{exp.company}</p>
                  </div>
                  <div className="mt-2 md:mt-0">
                    <p className="text-gray-600">{exp.duration}</p>
                    <p className="text-gray-500">{exp.location}</p>
                  </div>
                </div>
                <ul className="space-y-3">
                  {exp.responsibilities.map((item, i) => (
                    <motion.li
                      key={i}
                      className="flex items-start"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <span className="text-indigo-500 mr-2 mt-1">•</span>
                      <span className="text-gray-700">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
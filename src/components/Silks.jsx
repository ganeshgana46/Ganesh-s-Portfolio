import { motion } from 'framer-motion';
import { FaReact, FaGitAlt, FaPython } from 'react-icons/fa';
import { SiNextdotjs, SiTypescript, SiJavascript, SiTailwindcss, SiRedux, SiVercel, SiNetlify } from 'react-icons/si';
import 'aos/dist/aos.css';

const skills = [
  { name: 'React', icon: <FaReact className="w-8 h-8 text-blue-500" />, level: '90%' },
  { name: 'Next.js', icon: <SiNextdotjs className="w-8 h-8 text-black" />, level: '85%' },
  { name: 'TypeScript', icon: <SiTypescript className="w-8 h-8 text-blue-600" />, level: '80%' },
  { name: 'JavaScript', icon: <SiJavascript className="w-8 h-8 text-yellow-400" />, level: '90%' },
  { name: 'Tailwind CSS', icon: <SiTailwindcss className="w-8 h-8 text-cyan-400" />, level: '95%' },
  { name: 'Python', icon: <FaPython className="w-8 h-8 text-blue-700" />, level: '75%' },
  { name: 'Redux', icon: <SiRedux className="w-8 h-8 text-purple-500" />, level: '85%' },
  { name: 'Git', icon: <FaGitAlt className="w-8 h-8 text-orange-600" />, level: '80%' },
  { name: 'Vercel', icon: <SiVercel className="w-8 h-8 text-black" />, level: '90%' },
  { name: 'Netlify', icon: <SiNetlify className="w-8 h-8 text-teal-500" />, level: '90%' },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          data-aos="fade-up"
        >
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">My Skills</h2>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col items-center"
                data-aos="fade-up"
                data-aos-delay={index * 50}
              >
                <div className="mb-4">{skill.icon}</div>
                <h3 className="text-lg font-medium text-gray-800 mb-2">{skill.name}</h3>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-indigo-600 h-2 rounded-full" 
                    style={{ width: skill.level }}
                    initial={{ width: 0 }}
                    whileInView={{ width: skill.level }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  />
                </div>
                <span className="text-sm text-gray-500 mt-1">{skill.level}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
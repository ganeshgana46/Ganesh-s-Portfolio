import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import 'aos/dist/aos.css';

const projects = [
  {
    title: "Interactive Developer Portfolio",
    description: "A high-performance portfolio built with React and Vite, featuring smooth animations and responsive design.",
    features: [
      "70% faster build speeds than Create-React-App",
      "Smooth animations with Framer Motion",
      "Scroll effects with AOS library",
      "Fully responsive interface scoring 95+ on Lighthouse",
      "AI-assisted development tools integration"
    ],
    techStack: ["React", "JavaScript (ES6+)", "Vite", "Tailwind CSS", "Framer Motion", "AOS", "Git", "Netlify"],
    githubLink: "#",
    demoLink: "#",
    image: "/project1.jpg"
  },
  {
    title: "Intelligent Traffic Prediction System",
    description: "A computer vision application using YOLO to detect and count vehicles at traffic junctions.",
    features: [
      "Vehicle detection using YOLO pretrained weights",
      "X and Y junction analysis for traffic patterns",
      "User-friendly interface for real-time visualization",
      "Priority signaling system based on vehicle density",
      "Image processing for traffic flow improvement"
    ],
    techStack: ["Python", "YOLO", "Deep Learning", "HTML", "CSS", "JavaScript"],
    githubLink: "#",
    demoLink: "#",
    image: "/project2.jpg"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          data-aos="fade-up"
        >
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">My Projects</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                whileHover={{ y: -5 }}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="h-48 bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-500">Project Screenshot</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-800 mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {project.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-indigo-500 mr-2 mt-1">•</span>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-800 mb-2">Tech Stack:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech, i) => (
                        <span 
                          key={i} 
                          className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex space-x-4">
                    <a 
                      href={project.githubLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors"
                    >
                      <FaGithub className="mr-2" /> View Code
                    </a>
                    <a 
                      href={project.demoLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center px-4 py-2 border border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-50 transition-colors"
                    >
                      <FaExternalLinkAlt className="mr-2" /> Live Demo
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
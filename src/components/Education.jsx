import { motion } from 'framer-motion';
import 'aos/dist/aos.css';

const education = [
  {
    degree: "Bachelor of Technology in Electronics and Communication Engineering",
    institution: "Vel Tech Rangarajan Dr. Sagunthala R&D Institute of Science and Technology",
    duration: "May 2023",
    location: "Chennai, India",
    gpa: "GPA: 8.23/10",
    awards: "Academic Honours/Awards: Merit Scholarship"
  },
  {
    degree: "Board of Intermediate Education",
    institution: "Suvarna Bharathi Junior College",
    duration: "May 2019",
    location: "Hindupur, India",
    gpa: "GPA: 9.57/10",
    awards: "Academic Honours/Awards: Merit Scholarship"
  }
];

const Education = () => {
  return (
    <section id="education" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          data-aos="fade-up"
        >
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Education</h2>
          
          <div className="space-y-8">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 p-6 rounded-lg shadow-sm"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">{edu.degree}</h3>
                    <p className="text-indigo-600 font-medium">{edu.institution}</p>
                  </div>
                  <div className="mt-2 md:mt-0">
                    <p className="text-gray-600">{edu.duration}</p>
                    <p className="text-gray-500">{edu.location}</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-gray-700"><span className="font-medium">GPA:</span> {edu.gpa}</p>
                  </div>
                  <div>
                    <p className="text-gray-700">{edu.awards}</p>
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

export default Education;
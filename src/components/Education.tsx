import React from "react";
import { Calendar, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";
import pawansoftskills from "../assets/Pawan SoftSkills.png"; // Importing the image

const educationData = [
  {
    id: 1,
    institution: "Lovely Professional University",
    location: "Phagwara, Punjab",
    degree: "B.Tech in Computer Science",
    duration: "Jul 2022 - Present",
    grade: "CGPA: 7.53",
  },
  {
    id: 2,
    institution: "Nucleus Jr College",
    location: "Nandyal, AP",
    degree: "Higher Secondary Education",
    duration: "May 2020 - Jun 2022",
    grade: "CGPA: 9.4",
  },
  {
    id: 3,
    institution: "Indian Digital School",
    location: "Allagadda, AP",
    degree: "Secondary Education",
    duration: "Apr 2019 - Mar 2020",
    grade: "CGPA: 9.9",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const Education: React.FC = () => {
  return (
    <>
      {/* Soft Skills Section */}
      <section id="soft-skills" className="py-20">
        <div className="container mx-auto px-4">
          <SectionTitle>Soft Skills</SectionTitle>
          {/* Display the image for Soft Skills */}
          <div className="flex justify-center">
            <img
              src={pawansoftskills}
              alt="Soft Skills"
              className="w-full max-w-lg"
            />
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20">
        <div className="container mx-auto px-4">
          <SectionTitle>Education</SectionTitle>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            {educationData.map((edu) => (
              <motion.div key={edu.id} className="card p-6" variants={item}>
                <h3 className="text-xl font-semibold mb-2">
                  {edu.institution}
                </h3>
                <p className="text-primary font-medium mb-4">{edu.degree}</p>

                <div className="flex items-center text-gray-600 dark:text-gray-300 mb-2">
                  <Calendar size={16} className="mr-2" />
                  <span className="text-sm">{edu.duration}</span>
                </div>

                <div className="flex items-center text-gray-600 dark:text-gray-300 mb-4">
                  <MapPin size={16} className="mr-2" />
                  <span className="text-sm">{edu.location}</span>
                </div>

                <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700">
                  <p className="font-medium">{edu.grade}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Education;

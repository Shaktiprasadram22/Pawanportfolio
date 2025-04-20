import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from './SectionTitle';

const skillCategories = [
  {
    id: 1,
    title: 'Languages',
    skills: ['C++', 'Java', 'Python', 'JavaScript', 'TypeScript', 'HTML', 'CSS'],
  },
  {
    id: 2,
    title: 'Frameworks',
    skills: ['React.js', 'Node.js', 'Express.js', 'Bootstrap', 'Tailwind CSS'],
  },
  {
    id: 3,
    title: 'Databases',
    skills: ['MySQL', 'MongoDB', 'PostgreSQL', 'SQLite'],
  },
  {
    id: 4,
    title: 'Tools',
    skills: ['Git', 'GitHub', 'AWS', 'Docker', 'Kubernetes', 'VS Code'],
  },
  {
    id: 5,
    title: 'Soft Skills',
    skills: ['Team player', 'Problem solver', 'Critical Thinking', 'Communication', 'Time Management'],
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <SectionTitle>Skills</SectionTitle>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {skillCategories.map((category) => (
            <div key={category.id} className="card p-6">
              <h3 className="text-xl font-semibold mb-6">{category.title}</h3>
              
              <motion.div 
                className="flex flex-wrap"
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.1 }}
              >
                {category.skills.map((skill, index) => (
                  <motion.div 
                    key={index} 
                    className="w-full"
                    variants={item}
                  >
                    <div className="mb-4">
                      <div className="flex justify-between mb-1">
                        <span className="font-medium">{skill}</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div 
                          className="bg-primary h-2 rounded-full"
                          style={{ width: `${Math.floor(70 + Math.random() * 30)}%` }}
                        ></div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
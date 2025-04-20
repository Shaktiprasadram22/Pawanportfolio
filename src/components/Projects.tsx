import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import SectionTitle from './SectionTitle';

const projects = [
  {
    id: 1,
    title: 'Online Pet Store',
    description: 'A full-stack e-commerce platform for pet products with user authentication, shopping cart, and payment integration.',
    technologies: ['Node', 'Express', 'MongoDB', 'HTML', 'Bootstrap'],
    duration: 'Nov 2024 - Jan 2025',
    github: 'https://github.com/pavansimhareddypeddiredddy',
    image: 'https://images.pexels.com/photos/1350588/pexels-photo-1350588.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
  },
  {
    id: 2,
    title: 'News App',
    description: 'A responsive news application with category filtering, search functionality, and personalized news feed based on user preferences.',
    technologies: ['React', 'MongoDB', 'TypeScript', 'Node.js'],
    duration: 'Jan 2025 - Feb 2025',
    github: 'https://github.com/pavansimhareddypeddiredddy',
    image: 'https://images.pexels.com/photos/518543/pexels-photo-518543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
  },
  {
    id: 3,
    title: 'Photography Website',
    description: 'A modern photography portfolio website with image gallery, filtering options, and contact form for booking photography sessions.',
    technologies: ['React.js', 'CSS', 'JavaScript'],
    duration: 'Oct 2024 - Nov 2024',
    github: 'https://github.com/pavansimhareddypeddiredddy',
    image: 'https://images.pexels.com/photos/1092671/pexels-photo-1092671.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <SectionTitle>Projects</SectionTitle>
        
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {projects.map((project) => (
            <motion.div 
              key={project.id} 
              className="card overflow-hidden flex flex-col h-full"
              variants={item}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">{project.description}</p>
                
                <div className="mb-4">
                  <div className="flex flex-wrap">
                    {project.technologies.map((tech, index) => (
                      <span 
                        key={index} 
                        className="badge bg-secondary text-gray-700 dark:text-gray-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="pt-4 border-t border-gray-100 dark:border-gray-700 flex justify-between items-center">
                  <span className="text-sm text-gray-600 dark:text-gray-300">{project.duration}</span>
                  
                  <div className="flex space-x-3">
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary-light transition-colors"
                      aria-label="View GitHub repository"
                    >
                      <Github size={20} />
                    </a>
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary-light transition-colors"
                      aria-label="Visit live site"
                    >
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
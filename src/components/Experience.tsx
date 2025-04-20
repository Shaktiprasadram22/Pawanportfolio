import React from 'react';
import { Calendar, MapPin } from 'lucide-react';
import SectionTitle from './SectionTitle';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <SectionTitle>Experience</SectionTitle>
        
        <div className="mt-12 card p-8 text-center">
          <h3 className="text-xl font-semibold mb-4">Ready for New Opportunities</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            I am currently focused on my studies and building projects to enhance my skills. 
            Looking forward to internship and collaborative opportunities in software development.
          </p>
          
          <div className="max-w-md mx-auto">
            <div className="border border-dashed border-gray-300 dark:border-gray-600 p-4 rounded-lg">
              <h4 className="font-medium mb-2">Example: Frontend Intern – XYZ Startup</h4>
              <div className="flex items-center justify-center text-gray-600 dark:text-gray-300 mb-2">
                <Calendar size={16} className="mr-2" />
                <span className="text-sm">Aug 2024 – Sep 2024</span>
              </div>
              <div className="flex items-center justify-center text-gray-600 dark:text-gray-300">
                <MapPin size={16} className="mr-2" />
                <span className="text-sm">Remote</span>
              </div>
            </div>
          </div>
          
          <a 
            href="#contact" 
            className="mt-8 inline-block btn btn-primary"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Experience;
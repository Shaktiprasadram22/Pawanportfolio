import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import SectionTitle from './SectionTitle';

const testimonials = [
  {
    id: 1,
    name: 'Dr. Rajesh Kumar',
    role: 'Professor, Computer Science',
    text: 'Pavan is a dedicated student with excellent problem-solving skills. His approach to complex programming challenges is methodical and creative.',
  },
  {
    id: 2,
    name: 'Priya Sharma',
    role: 'Project Teammate',
    text: 'Working with Pavan on our News App project was a great experience. He&#39;s knowledgeable about React and always willing to help team members.',
  },
  {
    id: 3,
    name: 'Arjun Singh',
    role: 'Hackathon Partner',
    text: 'Pavan\'s strong technical skills and collaborative nature make him an excellent team player. His dedication to producing quality work is impressive.',
  },
];

const Testimonials: React.FC = () => {
  const [active, setActive] = useState(0);

  const next = () => {
    setActive((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prev = () => {
    setActive((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section id="testimonials" className="py-20">
      <div className="container mx-auto px-4">
        <SectionTitle>Testimonials</SectionTitle>
        
        <div className="mt-12 relative">
          <div className="max-w-3xl mx-auto card p-8 md:p-12 text-center">
            <div className="flex justify-center mb-6">
              <Quote size={40} className="text-primary opacity-30" />
            </div>
            
            <div className="min-h-36">
              {testimonials.map((testimonial, index) => (
                <motion.div 
                  key={testimonial.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ 
                    opacity: active === index ? 1 : 0,
                    y: active === index ? 0 : 20
                  }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0 flex flex-col justify-center items-center p-6"
                  style={{ display: active === index ? 'flex' : 'none' }}
                >
                  <p className="text-lg md:text-xl italic mb-6 text-gray-700 dark:text-gray-300">
                    {testimonial.text}
                  </p>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{testimonial.role}</p>
                </motion.div>
              ))}
            </div>
            
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActive(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    active === index 
                      ? 'bg-primary' 
                      : 'bg-gray-300 dark:bg-gray-600'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                ></button>
              ))}
            </div>
          </div>
          
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-800 rounded-full p-2 shadow-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors hidden md:block"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button
            onClick={next}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-800 rounded-full p-2 shadow-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors hidden md:block"
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
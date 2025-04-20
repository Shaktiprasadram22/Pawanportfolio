import React from 'react';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Footer: React.FC = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold">
              <span className="text-primary">Pavan</span> Simha
            </h2>
            <p className="mt-2 text-gray-400">Computer Science Student & Developer</p>
          </div>
          
          <div className="flex space-x-4">
            <a 
              href="https://github.com/pavansimhareddypeddiredddy" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://linkedin.com/in/pavansimhareddy2003" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="mailto:pavansimhareddyp@gmail.com"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
            <a 
              href="tel:+918328264232"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Phone"
            >
              <Phone size={20} />
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400 mb-4 md:mb-0">
            &copy; {currentYear} Peddi Reddy Pavan Simha Reddy. All rights reserved.
          </p>
          
          <div className="flex items-center">
            <button 
              onClick={toggleTheme}
              className="text-sm text-gray-400 hover:text-white transition-colors flex items-center"
              aria-label="Toggle theme"
            >
              <span className="mr-2">{isDarkMode ? 'Light Mode' : 'Dark Mode'}</span>
              <div className={`w-10 h-5 rounded-full p-1 transition-colors ${
                isDarkMode ? 'bg-primary' : 'bg-gray-600'
              }`}>
                <div className={`bg-white w-3 h-3 rounded-full transform transition-transform ${
                  isDarkMode ? 'translate-x-5' : 'translate-x-0'
                }`}></div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
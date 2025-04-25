import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ChevronDown, FileText } from "lucide-react";
import profileImg from "../assets/profile.jpg";

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="min-h-screen pt-20 flex flex-col justify-center items-center relative"
    >
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between">
        <motion.div
          className="lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            <span className="block">Hi, I'm</span>
            <span className="text-primary block">Pavan Simha Reddy</span>
          </h1>
          <h2 className="text-xl sm:text-2xl font-medium text-gray-600 dark:text-gray-300 mb-8">
            Computer Science Student & Developer
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-lg mx-auto lg:mx-0">
            Passionate about building innovative solutions and exploring new
            technologies. Currently pursuing B.Tech in Computer Science at
            Lovely Professional University.
          </p>

          <div className="flex flex-wrap justify-center lg:justify-start gap-4">
            <a href="#contact" className="btn btn-primary">
              Contact Me
            </a>
            <a
              href="https://drive.google.com/file/d/13dip7fKCBT84DyQiBysI8SeS_tijN-Ia/view?usp=drive_link"
              target="_blank"
              className="btn btn-outline flex items-center gap-2"
              rel="noopener noreferrer"
            >
              <FileText size={18} />
              Download Resume
            </a>

            <a href="#projects" className="btn btn-outline">
              View Projects
            </a>
          </div>

          <div className="flex mt-8 justify-center lg:justify-start gap-6">
            <a
              href="https://github.com/pavansimhareddypeddiredddy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary-light transition-colors"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com/in/pavansimhareddy2003"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary-light transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:pavansimhareddyp@gmail.com"
              className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary-light transition-colors"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
          </div>
        </motion.div>

        <motion.div
          className="lg:w-1/2 flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="relative">
            <div className="w-64 h-64 sm:w-80 sm:h-80 bg-primary rounded-full absolute top-4 left-4 -z-10"></div>
            <img
              src={profileImg}
              alt="Peddi Reddy Pavan Simha Reddy"
              className="w-64 h-64 sm:w-80 sm:h-80 object-cover rounded-full border-4 border-white dark:border-gray-800 shadow-lg"
            />
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary-light transition-colors"
        initial={{ y: -10, opacity: 0.6 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
        aria-label="Scroll down"
      >
        <ChevronDown size={32} />
      </motion.a>
    </section>
  );
};

export default Hero;

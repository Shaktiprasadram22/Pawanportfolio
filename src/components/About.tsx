import React from "react";
import { MapPin, Phone, Mail, Briefcase, GraduationCap } from "lucide-react";
import SectionTitle from "./SectionTitle";

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <SectionTitle>About Me</SectionTitle>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <div className="card p-6">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <Briefcase size={20} className="text-primary mr-2" />
              Personal Information
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="mt-1 text-primary mr-4">
                  <MapPin size={18} />
                </div>
                <div>
                  <h4 className="font-medium">Location</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Allagadda, Andhra Pradesh 518543
                  </p>
                </div>
              </li>

              <li className="flex items-start">
                <div className="mt-1 text-primary mr-4">
                  <Phone size={18} />
                </div>
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    +91-8328264232
                  </p>
                </div>
              </li>

              <li className="flex items-start">
                <div className="mt-1 text-primary mr-4">
                  <Mail size={18} />
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    pavansimhareddyp@gmail.com
                  </p>
                </div>
              </li>

              <li className="flex items-start">
                <div className="mt-1 text-primary mr-4">
                  <GraduationCap size={18} />
                </div>
                <div>
                  <h4 className="font-medium">Portfolio</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Three Dimension Journey
                  </p>
                </div>
              </li>
            </ul>
          </div>

          <div className="card p-6">
            <h3 className="text-xl font-semibold mb-4">My Journey</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
              I am a passionate Computer Science student currently pursuing my
              B.Tech degree at Lovely Professional University. With a strong
              foundation in programming and web development, I am constantly
              exploring new technologies and building innovative solutions.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
              My technical journey began with learning C++ and Java, and has
              expanded to include web technologies like React.js, Node.js, and
              database management systems. I enjoy solving complex problems and
              creating applications that make a positive impact.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Beyond coding, I'm interested in cloud computing, DevOps, and
              software engineering practices. I'm actively seeking opportunities
              to apply my skills in real-world scenarios and collaborate with
              other developers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

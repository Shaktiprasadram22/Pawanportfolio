import React, { useState } from "react";
import { Calendar, MapPin } from "lucide-react";
import SectionTitle from "./SectionTitle";

const Experience: React.FC = () => {
  const [showDescription, setShowDescription] = useState<number | null>(null);

  const toggleDescription = (index: number) => {
    setShowDescription(showDescription === index ? null : index);
  };

  return (
    <div>
      {/* Achievements Section */}
      <section id="achievements" className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <SectionTitle>Achievements</SectionTitle>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Achievement 1: 400+ DSA Problems Solved */}
            <div className="card p-6 text-center bg-white dark:bg-gray-800 rounded-lg shadow-md">
              {/* LeetCode Emoji or Image */}
              <span className="text-5xl mb-4">💻</span>
              <h4 className="font-semibold text-lg mb-2">
                400+ DSA Problems Solved
              </h4>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Developed strong problem-solving skills by solving over 400 data
                structures and algorithms problems.
              </p>
              <button
                onClick={() => toggleDescription(0)}
                className="text-primary hover:underline"
              >
                {showDescription === 0 ? "Show Less" : "Click to Know More"}
              </button>
              {showDescription === 0 && (
                <p className="text-gray-600 dark:text-gray-300 mt-4">
                  I solved 400+ problems on platforms like LeetCode and
                  HackerRank, covering various topics such as Arrays, Linked
                  Lists, Trees, Graphs, and Dynamic Programming.
                </p>
              )}
            </div>

            {/* Achievement 2: Winner of Hackathon */}
            <div className="card p-6 text-center bg-white dark:bg-gray-800 rounded-lg shadow-md">
              {/* HackerRank Emoji or Image */}
              <span className="text-5xl mb-4">🏆</span>
              <h4 className="font-semibold text-lg mb-2">
                Top 5 in LPU hackathon
              </h4>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Led a team to be in top 5 in LPU hackathon, building an
                innovative app for smart homes.
              </p>
              <button
                onClick={() => toggleDescription(1)}
                className="text-primary hover:underline"
              >
                {showDescription === 1 ? "Show Less" : "Click to Know More"}
              </button>
              {showDescription === 1 && (
                <p className="text-gray-600 dark:text-gray-300 mt-4">
                  Our team developed a Smart Home App using IoT devices that
                  control lights, temperature, and security systems. The
                  hackathon tested our creativity, teamwork, and technical
                  expertise.
                </p>
              )}
            </div>

            {/* Achievement 3: Top Contributor on GitHub */}
            <div className="card p-6 text-center bg-white dark:bg-gray-800 rounded-lg shadow-md">
              {/* GitHub Image */}
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                alt="GitHub"
                className="w-16 h-16 mx-auto mb-4"
              />
              <h4 className="font-semibold text-lg mb-2">
                Top Contributor on GitHub
              </h4>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Contributed to over 10 open-source projects, improving code
                quality and adding new features.
              </p>
              <button
                onClick={() => toggleDescription(2)}
                className="text-primary hover:underline"
              >
                {showDescription === 2 ? "Show Less" : "Click to Know More"}
              </button>
              {showDescription === 2 && (
                <p className="text-gray-600 dark:text-gray-300 mt-4">
                  As a top contributor to several repositories, I collaborated
                  with other developers to optimize code, fix bugs, and add new
                  features to projects focused on web development and tools for
                  the community.
                </p>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20">
        <div className="container mx-auto px-4">
          <SectionTitle>Experience</SectionTitle>

          <div className="mt-12 card p-8 text-center">
            <h3 className="text-xl font-semibold mb-4">
              Ready for New Opportunities
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              I am currently focused on my studies and building projects to
              enhance my skills. Looking forward to internship and collaborative
              opportunities in software development.
            </p>

            <div className="max-w-md mx-auto">
              <div className="border border-dashed border-gray-300 dark:border-gray-600 p-4 rounded-lg">
                <h4 className="font-medium mb-2">
                  Example: Frontend Intern – XYZ Startup
                </h4>
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

            <a href="#contact" className="mt-8 inline-block btn btn-primary">
              Contact Me
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Experience;

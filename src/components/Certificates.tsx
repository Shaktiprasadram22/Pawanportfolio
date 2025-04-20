import React from "react";
import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";
import nptelCert from "../assets/nptel-cert.png";
import ibmCert from "../assets/Devop Certificate.png";
import sqlCert from "../assets/SQL FOR DATA.jpg";

const certificates = [
  {
    id: 1,
    title: "Cloud Computing",
    organization: "NPTEL",
    date: "Nov 2024",
    image: nptelCert,
  },
  {
    id: 2,
    title: "IBM DevOps and Software Engineering",
    organization: "Coursera",
    date: "Jan 2024",
    image: ibmCert,
  },
  {
    id: 3,
    title: "SQL for Data Science",
    organization: "Great Learning",
    date: "Aug 2024",
    image: sqlCert,
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

const Certificates: React.FC = () => {
  const [selectedCert, setSelectedCert] = React.useState<string | null>(null);

  return (
    <section id="certificates" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <SectionTitle>Certificates</SectionTitle>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {certificates.map((certificate) => (
            <motion.div
              key={certificate.id}
              className="card overflow-hidden cursor-pointer"
              variants={item}
              onClick={() => setSelectedCert(certificate.image)}
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={certificate.image}
                  alt={certificate.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold mb-1">
                  {certificate.title}
                </h3>
                <div className="flex justify-between items-center text-sm text-gray-600 dark:text-gray-300">
                  <span>{certificate.organization}</span>
                  <span>{certificate.date}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Certificate Preview Modal */}
        {selectedCert && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedCert(null)}
          >
            <div className="relative max-w-4xl w-full bg-white dark:bg-gray-800 rounded-lg overflow-hidden">
              <button
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                onClick={() => setSelectedCert(null)}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <img
                src={selectedCert}
                alt="Certificate preview"
                className="w-full h-auto"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Certificates;

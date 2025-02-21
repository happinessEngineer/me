import React, { type FC } from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    title: "Full-Stack Engineer (Growth/Marketing)",
    company: "Pivot Health Technologies",
    location: "San Carlos, CA",
    date: "Dec 2019 – Present",
    points: [
      "Led integration of Braze CEP into the web registration system (React) and backend systems (Node/TypeScript/AWS)",
      "Designed and built a system to sync client email lists to Braze enabling 400+ campaigns and over $7M in revenue",
      "Optimized signup flow, increasing revenue per campaign by 58%",
      "Created ETL pipelines using Node, Braze API, AWS, PostgreSQL and Tableau",
      "Built features for internal tools (React, Node, WordPress)"
    ]
  },
  {
    title: "Front-End Engineer",
    company: "Intuit",
    location: "Mountain View, CA",
    date: "Sept 2017 – July 2019",
    points: [
      "Led the build of a custom WordPress app for the QuickBooks Design System (QBDS)",
      "Developed a React/Next.js/WordPress app for the Intuit Design System (IDS)"
    ]
  },
  {
    title: "Web Engineer",
    company: "Exygy",
    location: "San Francisco, CA",
    date: "Jan 2011 – Aug 2017",
    points: [
      "Built custom WordPress websites and web apps for clients like Wikimedia, Intuit, and TechCrunch",
      "Led the Support Team, helping clients build and prioritize backlog"
    ]
  },
  {
    title: "Founder & Web Developer",
    company: "getCarbonated",
    location: "Raleigh, NC",
    date: "Nov 2003 – Nov 2010",
    points: [
      "Built and maintained over 100 small business websites",
      "Built forums-based web app and online casino review platform"
    ]
  },
  {
    title: "Software Developer",
    company: "Vermont Academy",
    location: "Saxtons River, VT",
    date: "Nov 2001 – Nov 2003",
    points: [
      "Built enterprise software for student data management",
      "Created complex reports using SQL and Crystal Reports"
    ]
  }
];

const Experience: FC = () => {
  return (
    <section id="experience" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Professional Experience
        </motion.h2>
        <div className="relative">
          {/* Vertical line */}
          <motion.div 
            className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-green-200"
            initial={{ height: 0 }}
            animate={{ height: "100%" }}
            transition={{ duration: 1.5 }}
          ></motion.div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div 
                key={index} 
                className="relative"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                {/* Circle on timeline */}
                <motion.div 
                  className={`absolute left-4 ${index % 2 !== 0 ? 'md:left-[calc(50%_-_1rem)]' : 'md:left-1/2 md:-translate-x-[calc(100%_+_8px)]'} transform -translate-y-1/2 w-4 h-4 bg-green-500 rounded-full`}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.2 }}
                ></motion.div>
                
                {/* Content card */}
                <div className={`relative ml-12 md:ml-0 md:w-[calc(50%-2rem)] ${index % 2 === 0 ? 'md:ml-auto md:pl-8 md:pr-4' : 'md:mr-auto md:pr-8 md:pl-4'}`}>
                  <motion.div 
                    className="bg-white p-6 rounded-lg shadow-lg"
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="text-sm text-green-600 font-semibold mb-2">{exp.date}</div>
                    <h3 className="text-xl font-bold mb-1">{exp.title}</h3>
                    <h4 className="text-lg text-green-600 mb-1">{exp.company}</h4>
                    <p className="text-gray-500 italic mb-4">{exp.location}</p>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                      {exp.points.map((point, i) => (
                        <motion.li 
                          key={i} 
                          className="leading-relaxed"
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: (index * 0.2) + (i * 0.1) }}
                        >
                          {point}
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

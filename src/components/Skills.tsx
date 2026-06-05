"use client";

import { motion } from "framer-motion";
import { FaPython, FaProjectDiagram } from "react-icons/fa";
import { SiFlutter, SiFastapi, SiNextdotjs, SiPostgresql } from "react-icons/si";
import { GiBrain } from "react-icons/gi";

const skills = [
  { name: "Python",        icon: <FaPython size={52} color="#3776AB" /> },
  { name: "Flutter",       icon: <SiFlutter size={52} color="#54C5F8" /> },
  { name: "FastAPI",       icon: <SiFastapi size={52} color="#009688" /> },
  { name: "Next.js",       icon: <SiNextdotjs size={52} color="#000000" /> },
  { name: "PostgreSQL",    icon: <SiPostgresql size={52} color="#336791" /> },
  { name: "Generative AI", icon: <GiBrain size={52} color="#9c59d1" /> },
  { name: "RAG",           icon: <FaProjectDiagram size={52} color="#e06c13" /> },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-[#5f3dc4] bg-pattern-01">
      <div className="container mx-auto px-6 md:px-12 max-w-6xl">

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center md:text-left mb-12"
        >
          <h2 className="text-5xl md:text-6xl font-black text-white">Skills</h2>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-6 md:gap-8"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="flex flex-col items-center gap-3"
            >
              <p className="text-white font-bold text-xs tracking-widest uppercase text-center">
                {skill.name}
              </p>
              <div className="bg-white rounded-2xl p-5 shadow-xl w-24 h-24 flex items-center justify-center">
                {skill.icon}
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}

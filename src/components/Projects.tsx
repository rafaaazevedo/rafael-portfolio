"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Projects() {
  const projects = [
    {
      title: "Café Oslo",
      category: "Landpage",
      color: "bg-[#f1f3f5]",
      image: "/images/cafe-oslo.png",
      
    },
    {
      title: "LeadFlow AI",
      category: "Agente de IA",
      color: "bg-[#f1f3f5]",
      image: "/images/chat-leadflow-ai.png",
    },
    {
      title: "Automação no Setor de Consultoria Financeira",
      category: "Multiagente de IA e automações com n8n",
      color: "bg-[#f1f3f5]",
      image: "/images/automacao-multiagente.png",
    },
    {
      title: "MoniCare: Monitoramento Remoto de Pacientes",
      category: "Aplicativo mobile",
      color: "bg-[#f1f3f5]",
      image: "/images/monicare-sensors-data.png",
    }
  ];

  return (
    <section id="projects" className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-[#343a40]">
            Projetos
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white rounded-lg overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-shadow"
            >
              <div className={`relative w-full aspect-[4/3] ${project.color} overflow-hidden flex items-center justify-center`}>
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                ) : (
                  <span className="text-gray-400 text-sm">
                    Imagem em breve
                  </span>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#343a40] mb-1">{project.title}</h3>
                <p className="text-sm text-gray-500 font-medium">{project.category}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

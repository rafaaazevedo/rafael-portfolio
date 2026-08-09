"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Projects() {
  const projects = [
    {
      title: "Café Oslo",
      category: "Landpage",
      description:
        "Landing page responsiva desenvolvida para apresentar uma cafeteria, com foco em design, navegação e experiência do usuário.",
      color: "bg-[#f1f3f5]",
      image: "/images/cafe-oslo.png",
      site: "https://projetocafeteriaoslo.netlify.app/",
      github: "https://github.com/rafaaazevedo/Projeto-Cafeteria",
      
    },
    {
      title: "LeadFlow AI",
      category: "Agente de IA",
      description:
        "Assistente inteligente para atendimento clínico, utilizando IA generativa, RAG e integração com serviços em nuvem para automatizar o atendimento inicial, qualificação e agendamento.",
      color: "bg-[#f1f3f5]",
      image: "/images/chat-leadflow-ai.png",
      site: "leadflow-ai-mocha-eight.vercel.app",
      github: "https://github.com/rafaaazevedo/leadflow-ai-showcase",
    },
    {
      title: "Automação no Setor de Consultoria Financeira",
      category: "Multiagente de IA e automações com n8n",
      description:
        "Sistema multiagentes desenvolvido para automatizar o atendimento financeiro, utilizando agentes especializados e fluxos de automação para classificação e encaminhamento de solicitações.",
      color: "bg-[#f1f3f5]",
      image: "/images/automacao-multiagente.png",
      site: null,
      github: null,
    },
    {
      title: "MoniCare: Monitoramento Remoto de Pacientes",
      category: "Aplicativo mobile",
       description:
      "Aplicativo mobile desenvolvido com Dart e Flutter para monitoramento remoto de pacientes, integrado a uma arquitetura IoT para coleta e visualização de dados.",
      color: "bg-[#f1f3f5]",
      image: "/images/monicare-sensors-data.png",
      site: null,
      github: "https://github.com/rafaaazevedo/Health_Monitor",
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
                <h3 className="text-xl font-bold text-[#343a40] mb-1">
                  {project.title}
                </h3>

                <p className="text-sm text-gray-500 font-medium mb-3">
                  {project.category}
                </p>

                <p className="text-sm text-gray-600 leading-relaxed mb-5">
                  {project.description}
                </p>

                <div className="flex items-center gap-5">
                  {project.site && (
                    <a
                      href={project.site}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-[#343a40] hover:text-gray-500 transition-colors"
                    >
                      Site
                      <span>↗</span>
                    </a>
                  )}

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-[#343a40] hover:text-gray-500 transition-colors"
                    >
                      GitHub
                      <span>↗</span>
                    </a>
                  )}

                  {!project.site && !project.github && (
                    <span className="text-sm text-gray-400">
                      Projeto privado
                    </span>
                  )}
                </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

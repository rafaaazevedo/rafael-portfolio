"use client";

import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope, FaGraduationCap } from "react-icons/fa";

export default function Contact() {
  const contacts = [
    {
      icon: <FaLinkedin size={40} />,
      label: "linkedin.com/in/rafaelalvesdeazevedo",
      href: "https://linkedin.com/in/rafaelalvesdeazevedo",
    },
    {
      icon: <FaGithub size={40} />,
      label: "github.com/rafaaazevedo",
      href: "https://github.com/rafaaazevedo",
    },
    {
      icon: <FaGraduationCap size={40} />,
      label: "Currículo Lattes",
      href: "https://lattes.cnpq.br/3043585412472370", // Insira o link do seu Lattes aqui
    },
    {
      icon: <FaEnvelope size={40} />,
      label: "ra.alvesdeazevedo@gmail.com",
      href: "mailto:ra.alvesdeazevedo@gmail.com",
    },
  ];

  return (
    <section id="contact" className="py-24 bg-[#f8f9fa]">
      <div className="container mx-auto px-6 md:px-12 text-center">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-[#343a40] mb-4">
            Contato
          </h2>
          <p className="text-sm md:text-base text-gray-500 font-medium">
            Vamos Conversar? Fique a vontade para entrar em contato comigo!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap md:flex-nowrap justify-center gap-8 md:gap-16 w-full max-w-6xl mx-auto"
        >
          {contacts.map((contact, index) => (
            <a
              key={index}
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-4 group"
            >
              <div className="text-[#5f3dc4] group-hover:-translate-y-2 transition-transform duration-300">
                {contact.icon}
              </div>
              <span className="text-xs text-gray-400 group-hover:text-[#5f3dc4] transition-colors">
                {contact.label}
              </span>
            </a>
          ))}
        </motion.div>

      </div>
    </section>
  );
}

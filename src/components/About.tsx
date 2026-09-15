"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 bg-[#fafafa]">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          {/* <h2 className="text-4xl md:text-5xl font-black text-[#343a40]">
            Sobre
          </h2> */}
          <h2 className="text-4xl md:text-5xl font-black text-[#5f3dc4]">
            &gt; Sobre mim
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto flex flex-col text-center"
        >
          {/* <h3 className="text-xl md:text-2xl font-bold text-[#5f3dc4] mb-6">
            &gt; Sobre mim
          </h3> */}

          <p className="text-base md:text-lg text-gray-700 leading-relaxed font-medium">
            Engenheiro de IA focado no desenvolvimento de soluções ponta a ponta com Agentes de IA. Mestre em Engenharia Eletrônica e Computação pela UCPel, com pesquisa em Aprendizado de Máquina e Análise Exploratória de Dados, e Engenheiro de Computação pela UFPel, com formação em Robótica. Possuo experiência profissional como Analista de Sistemas, atuando no desenvolvimento de aplicações web e mobile.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
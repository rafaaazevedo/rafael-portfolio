"use client";

import { motion } from "framer-motion";
import Image from "next/image";

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
          <h2 className="text-4xl md:text-5xl font-black text-[#343a40]">
            Sobre
          </h2>
        </motion.div>

        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-16">

          {/* Left Column - Image with shapes */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full md:w-1/2 flex justify-center relative"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              {/* Decorative shapes behind */}
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-[#5f3dc4]"></div>
              <div className="absolute top-1/2 -left-8 w-6 h-6 bg-[#48e5c2]"></div>
              <div className="absolute -bottom-8 right-12 w-10 h-10 bg-[#5f3dc4]"></div>
              <div className="absolute -bottom-2 right-4 w-6 h-6 bg-[#48e5c2]"></div>
              <div className="absolute -top-6 left-12 w-4 h-4 bg-[#5f3dc4]"></div>

              {/* Main Background Shape */}
              <div className="absolute top-8 left-8 right-0 bottom-0 bg-[#5f3dc4] rounded-[3rem] rounded-bl-xl z-0"></div>

              {/* Image Container */}
              <div className="relative w-full h-full rounded-[3rem] rounded-bl-xl overflow-hidden z-10 border-4 border-white shadow-xl">
                {/* Substitua a imagem abaixo pela sua foto salvando como "profile.jpg" na pasta "public" */}
                <Image
                  src="/profile.jpg"
                  alt="Rafael Alves"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full md:w-1/2 flex flex-col text-center md:text-left"
          >
            <h3 className="text-xl md:text-2xl font-bold text-[#5f3dc4] mb-6">
              &gt; Sobre mim
            </h3>

            <p className="text-base md:text-lg text-gray-700 leading-relaxed font-medium">
              Sou Mestre em Engenharia Eletrônica e Computação formado pela Universidade Católica de Pelotas (UCPEL). Tenho experiência profissional como Analista de Desenvolvimento de Sistemas e também atuo como desenvolvedor AI Freelancer.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 bg-[#fafafa]">
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* Left Column - Content */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="order-2 md:order-1 text-left"
        >
          <h2 className="text-xl md:text-2xl font-medium text-[#5f3dc4] mb-2">
            &gt; Hello world!
          </h2>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-[#343a40] mb-6">
            RAFAEL ALVES<span className="text-[#343a40]">_</span>
          </h1>

          <p className="text-base md:text-lg text-gray-600 max-w-md mb-10 leading-relaxed font-medium">
            Bem-vindo ao meu portfólio. Aqui você conhecerá um pouco sobre minhas habilidades e alguns dos meus projetos.
          </p>

          <a
            href="#contact"
            className="inline-flex items-center justify-center px-6 py-3 text-sm font-bold text-[#5f3dc4] bg-transparent border-2 border-[#5f3dc4] rounded-lg hover:bg-[#5f3dc4] hover:text-white transition-all duration-300"
          >
            Entre em contato
          </a>
        </motion.div>

        {/* Right Column - Image with decorative shapes */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="order-1 md:order-2 flex justify-center md:justify-end"
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            <div className="absolute -top-4 -left-4 w-12 h-12 bg-[#5f3dc4]"></div>
            <div className="absolute top-1/2 -left-8 w-6 h-6 bg-[#48e5c2]"></div>
            <div className="absolute -bottom-8 right-12 w-10 h-10 bg-[#5f3dc4]"></div>
            <div className="absolute -bottom-2 right-4 w-6 h-6 bg-[#48e5c2]"></div>
            <div className="absolute -top-6 left-12 w-4 h-4 bg-[#5f3dc4]"></div>

            <div className="absolute top-8 left-8 right-0 bottom-0 bg-[#5f3dc4] rounded-[3rem] rounded-bl-xl z-0"></div>

            <div className="relative w-full h-full rounded-[3rem] rounded-bl-xl overflow-hidden z-10 border-4 border-white shadow-xl">
              <Image
                src="/profile.png"
                alt="Rafael Alves"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

import { motion } from 'framer-motion';
import { Github, Linkedin, ArrowDown } from 'lucide-react';

export default function Hero() {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative flex min-h-screen items-center overflow-hidden px-[clamp(2rem,6vw,6rem)] pb-20 pt-32">
      <div className="section-orb left-[-8rem] top-28 bg-[#C9A24D]" />
      <div className="section-orb bottom-4 right-[-10rem] bg-[#77B7A6]" />

      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[minmax(0,1.18fr)_minmax(360px,0.82fr)] xl:gap-14 xl:grid-cols-[1.05fr_0.95fr]">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
          className="max-w-3xl"
        >
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-6 inline-flex rounded-full border border-white/[0.1] bg-white/[0.035] px-4 py-2 text-sm font-medium text-[#C9CED6]"
          >
            Olá, me chamo João Vitor de Moura
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.18 }}
            className="mb-4 text-lg font-semibold tracking-[-0.02em] text-[#C9A24D] md:text-xl xl:text-2xl"
          >
            Desenvolvedor Full Stack em formação
          </motion.h2>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.26 }}
            className="max-w-[11ch] text-[clamp(3rem,8vw,5.2rem)] font-black leading-[0.9] tracking-[-0.075em] text-[#F4F1E8] xl:max-w-[12ch] xl:text-[clamp(5.1rem,6vw,7.3rem)]"
          >
            <span>Transformando linhas de código em </span>
            <span className="text-[#C9A24D]">SOLUÇÕES REAIS</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.34 }}
            className="mt-6 max-w-2xl text-base leading-7 text-[#A7ADB7] md:text-lg md:leading-8 xl:mt-8 xl:text-xl"
          >
            Desenvolvo projetos acadêmicos e pessoais com React, TypeScript, Java, Spring Boot,
            Node.js e outras tecnologias do ecossistema web, buscando unir visual moderno,
            código organizado, APIs REST e soluções funcionais.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.42 }}
            className="mt-8 flex flex-wrap items-center gap-4 xl:mt-10"
          >
            <a
              href="https://github.com/JoaooMoura"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              <Github size={20} />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/joaoomoura/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <Linkedin size={20} />
              LinkedIn
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative mx-auto w-full max-w-[360px] md:max-w-[400px] lg:mr-0 lg:max-w-[390px] xl:max-w-[520px]"
        >
          <div className="absolute -left-5 top-8 h-20 w-20 rounded-full border border-[#C9A24D]/30 lg:h-24 lg:w-24" />
          <div className="absolute -right-4 bottom-16 h-24 w-24 rounded-full border border-[#77B7A6]/24 lg:h-28 lg:w-28 xl:h-32 xl:w-32" />

          <div className="relative overflow-hidden rounded-[2rem] border border-white/[0.08] bg-[#0D1117] shadow-[0_28px_90px_rgba(0,0,0,0.42)]">
            <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#C9A24D]/12 to-transparent" />
            <div className="flex justify-center px-8 pt-8 md:px-10 md:pt-10">
              <img
                src="/fotoeu.jpeg"
                alt="João Vitor de Moura"
                className="h-[300px] w-auto object-contain object-center drop-shadow-[0_28px_40px_rgba(0,0,0,0.45)] md:h-[370px] lg:h-[420px] xl:h-[460px] [mask-image:linear-gradient(to_bottom,black_78%,transparent)]"
              />
            </div>
            <div className="absolute bottom-0 left-0 right-0 border-t border-white/[0.08] bg-[#090D12]/92 p-4 backdrop-blur-md md:p-5">
              <div className="flex items-center justify-between gap-5">
                <div>
                  <p className="text-sm font-semibold text-[#F4F1E8]">João Vitor de Moura</p>
                  <p className="mt-1 text-[11px] uppercase tracking-[0.22em] text-[#717986] md:text-xs">
                    React · TypeScript · Java
                  </p>
                </div>
                <span className="h-2.5 w-2.5 rounded-full bg-[#77B7A6] shadow-[0_0_18px_rgba(119,183,166,0.75)]" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-0 right-0 flex justify-center">
        <motion.button
          onClick={scrollToProjects}
          className="rounded-full border border-white/[0.1] bg-white/[0.035] p-3 text-[#A7ADB7] transition hover:border-[#C9A24D]/50 hover:text-[#F4F1E8]"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2.2 }}
          aria-label="Ir para projetos"
        >
          <ArrowDown size={30} strokeWidth={1.5} />
        </motion.button>
      </div>
    </section>
  );
}

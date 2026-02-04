import { motion } from 'framer-motion';
import { Github, Linkedin, ArrowDown } from 'lucide-react';

export default function Hero() {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-6 pt-32 pb-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-purple-900/20 via-slate-950 to-slate-950" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-[120px] animate-pulse" />
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-full shadow-lg"
            >
              <span className="text-gray-300 text-sm font-medium">Olá, me chamo João Moura</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-3xl md:text-4xl font-bold text-white"
            >
              Desenvolvedor Full Stack
            </motion.h2>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
            >
              <span className="text-white">
                Transformando linhas de código em{' '}
              </span>
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                SOLUÇÕES REAIS
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-xl text-gray-300 leading-relaxed"
            >
              Especializado em criar experiências digitais modernas e funcionais com React, Node.js e tecnologias de ponta.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex items-center gap-4 flex-wrap"
            >
              <a 
                href="https://github.com/JoaooMoura" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-8 py-4 backdrop-blur-xl bg-gradient-to-br from-white/20 to-white/5 border border-white/30 rounded-2xl text-white hover:bg-white/30 hover:border-white/40 hover:-translate-y-1 transition-all duration-300 shadow-lg flex items-center gap-3 text-lg font-medium"
              >
                <Github size={24} />
                GitHub
              </a>
              <a 
                href="https://www.linkedin.com/in/joaoomoura/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-8 py-4 bg-gradient-to-r from-blue-500 via-purple-600 to-purple-700 rounded-2xl text-white hover:from-blue-600 hover:via-purple-700 hover:to-purple-800 hover:-translate-y-1 transition-all duration-300 shadow-lg shadow-purple-500/50 flex items-center gap-3 text-lg font-medium border border-purple-400/30"
              >
                <Linkedin size={24} />
                LinkedIn
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative flex items-center justify-center lg:justify-end"
          >
           
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                  x: [0, 30, 0],
                  y: [0, -30, 0],
                }}
                transition={{ 
                  duration: 8, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute w-[500px] h-[500px] bg-gradient-to-br from-purple-600/60 via-purple-500/40 to-transparent rounded-full blur-3xl -left-20"
              />

              <motion.div
                animate={{ 
                  scale: [1, 1.3, 1],
                  x: [0, -20, 0],
                  y: [0, 40, 0],
                }}
                transition={{ 
                  duration: 10, 
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
                className="absolute w-[400px] h-[400px] bg-gradient-to-tl from-pink-600/60 via-pink-500/40 to-transparent rounded-full blur-3xl right-0 top-20"
              />

              <motion.div
                animate={{ 
                  scale: [1, 1.15, 1],
                  x: [0, 20, 0],
                  y: [0, -20, 0],
                }}
                transition={{ 
                  duration: 7, 
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2
                }}
                className="absolute w-[450px] h-[450px] bg-gradient-to-tr from-blue-600/60 via-blue-500/40 to-transparent rounded-full blur-3xl -bottom-10 left-10"
              />
            </div>

            <motion.div
              animate={{ 
                y: [0, -15, 0]
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="relative z-10 flex items-center justify-center"
            >
              <img 
                src="/fotoeu.png" 
                alt="João Moura"
                className="w-auto h-[500px] md:h-[600px] object-contain object-center drop-shadow-[0_0_30px_rgba(168,85,247,0.6)] [mask-image:linear-gradient(to_bottom,black_70%,transparent)]"
              />
            </motion.div>
          </motion.div>
        </div>

        <motion.button
          onClick={scrollToProjects}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-400 hover:text-white transition-colors"
          animate={{ y: [0, 12, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ArrowDown size={40} strokeWidth={1.5} />
        </motion.button>
      </div>
    </section>
  );
}

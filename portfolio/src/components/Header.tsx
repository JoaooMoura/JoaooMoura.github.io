import { Github, Linkedin, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false); 
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-slate-900/30 border-b border-white/20 shadow-lg shadow-black/50"
      >
        <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div
            className="flex items-center gap-2 cursor-pointer group"
            onClick={() => scrollToSection('hero')}
          >
            <span className="text-purple-500 text-2xl font-mono font-bold transition-transform group-hover:-translate-x-1">&lt;</span>
            <span className="text-white text-xl font-bold tracking-tighter group-hover:text-purple-400 transition-colors">JM</span>
            <span className="text-purple-500 text-2xl font-mono font-bold transition-transform group-hover:translate-x-1">/&gt;</span>
          </div>

          <ul className="hidden md:flex items-center gap-8">
            <li>
              <button onClick={() => scrollToSection('hero')} className="text-gray-300 hover:text-white transition">
                Home
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection('about')} className="text-gray-300 hover:text-white transition">
                Sobre
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection('projects')} className="text-gray-300 hover:text-white transition">
                Projetos
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection('skills')} className="text-gray-300 hover:text-white transition">
                Skills
              </button>
            </li>
          </ul>

          <div className="flex items-center gap-4">
            <a 
              href="https://github.com/JoaooMoura" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hidden md:block text-gray-300 hover:text-white transition"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://www.linkedin.com/in/joaoomoura/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hidden md:block text-gray-300 hover:text-white transition"
            >
              <Linkedin size={20} />
            </a>

            <button 
              onClick={toggleMobileMenu}
              className="md:hidden text-gray-300 hover:text-white transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />

            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-[280px] bg-slate-900/95 backdrop-blur-xl border-l border-white/20 shadow-2xl z-50 md:hidden"
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between p-6 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <span className="text-purple-500 text-xl font-mono font-bold">&lt;</span>
                    <span className="text-white text-lg font-bold">JM</span>
                    <span className="text-purple-500 text-xl font-mono font-bold">/&gt;</span>
                  </div>
                  <button 
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    <X size={24} />
                  </button>
                </div>

                <nav className="flex-1 py-8">
                  <ul className="space-y-2">
                    <li>
                      <button 
                        onClick={() => scrollToSection('hero')}
                        className="w-full text-left px-6 py-3 text-gray-300 hover:text-white hover:bg-white/5 transition-colors"
                      >
                        Home
                      </button>
                    </li>
                    <li>
                      <button 
                        onClick={() => scrollToSection('about')}
                        className="w-full text-left px-6 py-3 text-gray-300 hover:text-white hover:bg-white/5 transition-colors"
                      >
                        Sobre
                      </button>
                    </li>
                    <li>
                      <button 
                        onClick={() => scrollToSection('projects')}
                        className="w-full text-left px-6 py-3 text-gray-300 hover:text-white hover:bg-white/5 transition-colors"
                      >
                        Projetos
                      </button>
                    </li>
                    <li>
                      <button 
                        onClick={() => scrollToSection('skills')}
                        className="w-full text-left px-6 py-3 text-gray-300 hover:text-white hover:bg-white/5 transition-colors"
                      >
                        Skills
                      </button>
                    </li>
                  </ul>
                </nav>

                <div className="p-6 border-t border-white/10">
                  <div className="flex items-center gap-4">
                    <a 
                      href="https://github.com/JoaooMoura" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                    >
                      <Github size={20} />
                      <span className="text-sm">GitHub</span>
                    </a>
                    <a 
                      href="https://www.linkedin.com/in/joaoomoura/" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                    >
                      <Linkedin size={20} />
                      <span className="text-sm">LinkedIn</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

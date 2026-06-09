import { Github, Linkedin, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const navItems = [
  { label: 'Home', id: 'hero' },
  { label: 'Sobre', id: 'about' },
  { label: 'Projetos', id: 'projects' },
  { label: 'Trabalhos', id: 'academic' },
  { label: 'Skills', id: 'skills' },
  { label: 'Atividades', id: 'activities' },
  { label: 'Contato', id: 'contact' },
];

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
        initial={{ y: -90, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.45 }}
        className="fixed left-0 right-0 top-0 z-50 border-b border-white/[0.07] bg-[#070A0D]/82 backdrop-blur-xl"
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <button
            type="button"
            className="group flex items-center gap-3"
            onClick={() => scrollToSection('hero')}
            aria-label="Ir para o início"
          >
            <span className="hidden text-left leading-none sm:block">
              <span className="block text-sm font-semibold text-[#F4F1E8]">João Moura</span>
              <span className="mt-1 block text-[10px] uppercase tracking-[0.22em] text-[#717986]">Full Stack</span>
            </span>
          </button>

          <ul className="hidden items-center rounded-full border border-white/[0.08] bg-white/[0.035] px-2 py-2 lg:flex">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className="rounded-full px-3.5 py-2 text-sm font-medium text-[#A7ADB7] transition hover:bg-white/[0.06] hover:text-[#F4F1E8]"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <a
              href="https://github.com/JoaooMoura"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden h-10 w-10 place-items-center rounded-full border border-white/[0.1] bg-white/[0.035] text-[#A7ADB7] transition hover:border-[#C9A24D]/50 hover:text-[#F4F1E8] lg:grid"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/joaoomoura/"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden h-10 w-10 place-items-center rounded-full border border-white/[0.1] bg-white/[0.035] text-[#A7ADB7] transition hover:border-[#C9A24D]/50 hover:text-[#F4F1E8] lg:grid"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>

            <button
              onClick={toggleMobileMenu}
              className="grid h-10 w-10 place-items-center rounded-full border border-white/[0.12] bg-white/[0.035] text-[#F4F1E8] transition hover:border-[#C9A24D]/50 lg:hidden"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
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
              className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm lg:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />

            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 220 }}
              className="fixed bottom-0 right-0 top-0 z-50 w-[310px] border-l border-white/[0.08] bg-[#0B0F14] shadow-2xl lg:hidden"
            >
              <div className="flex h-full flex-col">
                <div className="flex items-center justify-between border-b border-white/[0.07] p-6">
                  <div className="flex items-center gap-3">
                    <span className="grid h-10 w-10 place-items-center rounded-full border border-white/[0.12] bg-white/[0.04] text-sm font-black text-[#F4F1E8]">
                      JM
                    </span>
                    <span>
                      <span className="block text-sm font-semibold text-[#F4F1E8]">João Moura</span>
                      <span className="block text-[10px] uppercase tracking-[0.22em] text-[#717986]">Full Stack</span>
                    </span>
                  </div>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-[#A7ADB7] transition-colors hover:text-[#F4F1E8]"
                    aria-label="Fechar menu"
                  >
                    <X size={24} />
                  </button>
                </div>

                <nav className="flex-1 py-7">
                  <ul className="space-y-1 px-3">
                    {navItems.map((item) => (
                      <li key={item.id}>
                        <button
                          onClick={() => scrollToSection(item.id)}
                          className="w-full rounded-2xl px-4 py-3 text-left text-[#A7ADB7] transition-colors hover:bg-white/[0.05] hover:text-[#F4F1E8]"
                        >
                          {item.label}
                        </button>
                      </li>
                    ))}
                  </ul>
                </nav>

                <div className="border-t border-white/[0.07] p-6">
                  <div className="flex items-center gap-3">
                    <a
                      href="https://github.com/JoaooMoura"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary flex-1 px-4 py-3 text-sm"
                    >
                      <Github size={18} />
                      GitHub
                    </a>
                    <a
                      href="https://www.linkedin.com/in/joaoomoura/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary flex-1 px-4 py-3 text-sm"
                    >
                      <Linkedin size={18} />
                      LinkedIn
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

import { Github, Linkedin, Menu } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Header() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
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
          <a href="https://github.com/JoaooMoura" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition">
            <Github size={20} />
          </a>
          <a href="https://www.linkedin.com/in/joaoomoura/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition">
            <Linkedin size={20} />
          </a>
          <button className="md:hidden text-gray-300">
            <Menu size={24} />
          </button>
        </div>
      </nav>
    </motion.header>
  );
}

import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Header />
      <Hero />
      <About />
      <Projects />
      <Skills />

      <footer className="py-16 px-6 border-t border-white/20 backdrop-blur-xl bg-gradient-to-br from-white/5 to-transparent">
        <div className="container mx-auto max-w-7xl text-center">
          <p className="text-gray-400 text-lg">
            © 2026 João Moura. Desenvolvido com React + TypeScript + Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  );
}

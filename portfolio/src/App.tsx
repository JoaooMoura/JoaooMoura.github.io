import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import AcademicWorks from './components/AcademicWorks';
import Skills from './components/Skills';
import Activities from './components/Activities';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-[#070A0D] text-[#F4F1E8] antialiased">
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <AcademicWorks />
        <Skills />
        <Activities />
        <Contact />
      </main>

      <footer className="border-t border-white/[0.07] px-6 py-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
          <p className="text-sm text-[#717986]">
            © 2026 João Vitor de Moura. Desenvolvido com React + TypeScript + Tailwind CSS
          </p>
          <span className="text-xs font-semibold uppercase tracking-[0.24em] text-[#C9A24D]">Portfolio</span>
        </div>
      </footer>
    </div>
  );
}

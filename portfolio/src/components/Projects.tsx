import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import FeaturedProjects from './FeaturedProjects';
import { projects } from '../data/projects';

export default function Projects() {
  return (
    <section id="projects" className="section-shell">
      <div className="section-orb left-1/3 top-32 bg-[#77B7A6]" />

      <div className="section-container max-w-screen-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-heading"
        >
          <span className="eyebrow">Projetos</span>
          <h2 className="section-title">Projetos</h2>
          <p className="section-subtitle">Projetos acadêmicos e pessoais desenvolvidos ao longo da minha formação</p>
        </motion.div>

        <FeaturedProjects />

        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 flex flex-col gap-3 border-b border-white/[0.07] pb-6 md:flex-row md:items-end md:justify-between"
          >
            <div>
              <span className="eyebrow">Todos os Projetos</span>
              <h3 className="text-3xl font-bold tracking-[-0.04em] text-[#F4F1E8] md:text-5xl">Todos os Projetos</h3>
            </div>
            <p className="max-w-2xl text-[#A7ADB7]">Outros projetos, estudos práticos e aplicações desenvolvidas</p>
          </motion.div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                className="h-full"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

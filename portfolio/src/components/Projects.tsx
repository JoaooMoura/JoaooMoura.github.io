import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import FeaturedProjects from './FeaturedProjects';
import { projects } from '../data/projects';

export default function Projects() {
  return (
    <section id="projects" className="py-32 px-6 border-t border-white/10 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-purple-900/10 to-slate-950" />
      <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-purple-500/20 rounded-full blur-[150px]" />
      
      <div className="container mx-auto max-w-screen-2xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">Projetos</h2>
          <p className="text-gray-400 text-lg">Soluções desenvolvidas em produção</p>
        </motion.div>
        <FeaturedProjects />

        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-4">Todos os Projetos</h3>
            <p className="text-gray-400 text-lg">Galeria completa de trabalhos desenvolvidos</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
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

import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { projects } from '../data/projects';

export default function FeaturedProjects() {
  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <section className="mb-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h3 className="text-4xl md:text-5xl font-bold text-white mb-4">Projetos em Destaque</h3>
        <p className="text-gray-400 text-lg">Projetos que representam melhor minha evolução técnica e prática</p>
      </motion.div>

      <div className="space-y-24">
        {featuredProjects.map((project, index) => {
          const isEven = index % 2 === 0;

          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              <div className={`relative group ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500" />
                <div className="relative overflow-hidden rounded-3xl border border-white/20 backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5 shadow-2xl hover:shadow-purple-500/30 transition-all duration-500 hover:-translate-y-2">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    loading="lazy"
                    className="w-full aspect-[16/10] object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent opacity-60" />
                </div>
              </div>

              <div className={`space-y-6 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                <div>
                  <h4 className="text-3xl md:text-4xl font-bold text-white mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                    {project.title}
                  </h4>
                  <p className="text-gray-300 text-lg leading-relaxed">{project.description}</p>
                </div>

                <div className="flex flex-wrap gap-3">
                  {project.techs.map((tech, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 backdrop-blur-xl bg-gradient-to-br from-white/20 to-white/10 border border-white/30 rounded-full text-sm font-semibold text-white shadow-lg hover:bg-white/25 hover:scale-105 transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 pt-4 flex-wrap">
                  <a
                    href={project.deployUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-4 bg-gradient-to-r from-blue-500 via-purple-600 to-purple-700 rounded-2xl text-white font-semibold hover:from-blue-600 hover:via-purple-700 hover:to-purple-800 hover:-translate-y-1 transition-all duration-300 shadow-lg shadow-purple-500/50 hover:shadow-xl hover:shadow-purple-500/60 flex items-center gap-3 border border-purple-400/30"
                  >
                    <ExternalLink size={20} />
                    Ver projeto
                  </a>
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-4 backdrop-blur-xl bg-gradient-to-br from-white/20 to-white/5 border border-white/30 rounded-2xl text-white font-semibold hover:bg-white/30 hover:border-white/40 hover:-translate-y-1 transition-all duration-300 shadow-lg flex items-center gap-3"
                  >
                    <Github size={20} />
                    Código
                  </a>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

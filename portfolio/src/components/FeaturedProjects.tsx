import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { projects } from '../data/projects';

export default function FeaturedProjects() {
  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <section className="mb-28">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12 flex flex-col gap-3 border-b border-white/[0.07] pb-6 md:flex-row md:items-end md:justify-between"
      >
        <div>
          <span className="eyebrow">Destaques</span>
          <h3 className="text-3xl font-bold tracking-[-0.04em] text-[#F4F1E8] md:text-5xl">Projetos em Destaque</h3>
        </div>
        <p className="max-w-2xl text-[#A7ADB7]">Projetos que representam melhor minha evolução técnica, acadêmica e prática</p>
      </motion.div>

      <div className="space-y-20">
        {featuredProjects.map((project, index) => {
          const isEven = index % 2 === 0;
          const hasProjectPreview = Boolean(project.deployUrl) && !project.deployUrl.includes('github.com');

          return (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
              className="grid items-center gap-10 lg:grid-cols-2"
            >
              <div className={`relative group ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                <div className="image-frame">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    loading="lazy"
                    className="aspect-[16/10] w-full object-cover transition-transform duration-700 group-hover:scale-[1.025]"
                  />
                  <div className="absolute left-4 top-4 rounded-full border border-white/[0.14] bg-[#070A0D]/80 px-3 py-1.5 text-xs font-bold text-[#F4F1E8] backdrop-blur">
                    {project.category}
                  </div>
                </div>
              </div>

              <div className={`space-y-6 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                <div>
                  <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-[#C9A24D]">{project.type}</p>
                  <h4 className="mb-4 text-3xl font-black leading-tight tracking-[-0.045em] text-[#F4F1E8] md:text-5xl">
                    {project.title}
                  </h4>
                  <p className="text-lg leading-8 text-[#A7ADB7]">{project.description}</p>
                </div>

                <div className="grid gap-3 md:grid-cols-2">
                  <div className="compact-card p-5">
                    <h5 className="mb-2 font-bold text-[#F4F1E8]">Problema identificado</h5>
                    <p className="text-sm leading-relaxed text-[#A7ADB7]">{project.problem}</p>
                  </div>
                  <div className="compact-card p-5">
                    <h5 className="mb-2 font-bold text-[#F4F1E8]">Solução desenvolvida</h5>
                    <p className="text-sm leading-relaxed text-[#A7ADB7]">{project.solution}</p>
                  </div>
                  <div className="compact-card p-5">
                    <h5 className="mb-2 font-bold text-[#F4F1E8]">Metodologia aplicada</h5>
                    <p className="text-sm leading-relaxed text-[#A7ADB7]">{project.methodology}</p>
                  </div>
                  <div className="compact-card p-5">
                    <h5 className="mb-2 font-bold text-[#F4F1E8]">Desafio técnico</h5>
                    <p className="text-sm leading-relaxed text-[#A7ADB7]">{project.challenge}</p>
                  </div>
                  <div className="compact-card p-5 md:col-span-2">
                    <h5 className="mb-2 font-bold text-[#F4F1E8]">Minha participação</h5>
                    <p className="text-sm leading-relaxed text-[#A7ADB7]">{project.role}</p>
                  </div>
                  <div className="compact-card p-5 md:col-span-2">
                    <h5 className="mb-2 font-bold text-[#F4F1E8]">Resultado</h5>
                    <p className="text-sm leading-relaxed text-[#A7ADB7]">{project.results}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2.5">
                  {project.techs.map((tech, i) => (
                    <span key={i} className="tag-pill">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3 pt-2">
                  {hasProjectPreview && (
                    <a
                      href={project.deployUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary"
                    >
                      <ExternalLink size={18} />
                      Ver projeto
                    </a>
                  )}
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary"
                  >
                    <Github size={18} />
                    GitHub
                  </a>
                </div>
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}

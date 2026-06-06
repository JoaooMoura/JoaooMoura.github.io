import { ExternalLink, Github } from 'lucide-react';
import type { Project } from '../data/projects';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const hasProjectPreview = Boolean(project.deployUrl) && !project.deployUrl.includes('github.com');

  return (
    <article className="group relative overflow-hidden rounded-3xl h-full min-h-[760px] flex flex-col backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 hover:border-white/30 hover:-translate-y-2 transition-all duration-500 shadow-xl hover:shadow-2xl hover:shadow-purple-500/30 shadow-[inset_0_0_40px_rgba(255,255,255,0.05)]">
      <div className="relative h-52 overflow-hidden">
        <img
          src={project.imageUrl}
          alt={project.title}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
        <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold text-white bg-purple-500/70 border border-white/20 backdrop-blur-md">
          {project.category}
        </span>
      </div>

      <div className="p-6 flex flex-col flex-1">
        <p className="text-xs uppercase tracking-[0.2em] text-blue-300 font-semibold mb-3">{project.type}</p>
        <h3 className="text-2xl font-bold text-white mb-3 leading-tight bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          {project.title}
        </h3>

        <p className="text-gray-300 text-sm leading-relaxed mb-4">{project.description}</p>

        <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 mb-4">
          <p className="text-white font-semibold mb-1 text-sm">Metodologia aplicada</p>
          <p className="text-gray-400 text-sm leading-relaxed">{project.methodology}</p>
        </div>

        <div className="space-y-3 mb-5 text-sm flex-1">
          <div>
            <p className="text-white font-semibold mb-1">Desafio técnico</p>
            <p className="text-gray-400 leading-relaxed">{project.challenge}</p>
          </div>
          <div>
            <p className="text-white font-semibold mb-1">Minha participação</p>
            <p className="text-gray-400 leading-relaxed">{project.role}</p>
          </div>
          <div>
            <p className="text-white font-semibold mb-1">Resultado</p>
            <p className="text-gray-400 leading-relaxed">{project.results}</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-6 pt-2">
          {project.techs.slice(0, 6).map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 backdrop-blur-xl bg-gradient-to-br from-white/20 to-white/10 border border-white/30 rounded-full text-xs font-semibold text-white shadow-lg"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-3 flex-wrap">
          {hasProjectPreview && (
            <a
              href={project.deployUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 min-w-[130px] px-4 py-3 bg-gradient-to-r from-blue-500 via-purple-600 to-purple-700 rounded-xl text-white text-sm font-semibold hover:from-blue-600 hover:via-purple-700 hover:to-purple-800 transition-all duration-300 shadow-lg shadow-purple-500/40 hover:shadow-purple-500/60 flex items-center justify-center gap-2 border border-purple-400/30"
            >
              <ExternalLink size={16} />
              Ver projeto
            </a>
          )}
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`${hasProjectPreview ? 'flex-1 min-w-[130px]' : 'w-full'} px-4 py-3 backdrop-blur-xl bg-gradient-to-br from-white/20 to-white/5 border border-white/30 rounded-xl text-white text-sm font-semibold hover:bg-white/30 hover:border-white/40 transition-all duration-300 shadow-lg flex items-center justify-center gap-2`}
          >
            <Github size={16} />
            GitHub
          </a>
        </div>
      </div>
    </article>
  );
}

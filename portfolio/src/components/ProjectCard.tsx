import { ExternalLink, Github } from 'lucide-react';
import type { Project } from '../data/projects';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-3xl h-80 backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 hover:border-white/30 hover:-translate-y-2 transition-all duration-500 shadow-xl hover:shadow-2xl hover:shadow-purple-500/30 shadow-[inset_0_0_40px_rgba(255,255,255,0.05)]">

      <img 
        src={project.imageUrl} 
        alt={project.title}
        className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/95 to-slate-900/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      <div className="absolute inset-0 p-8 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
        <h3 className="text-3xl font-bold text-white mb-3 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          {project.title}
        </h3>

        <p className="text-gray-300 text-sm leading-relaxed mb-4 line-clamp-2">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.techs.slice(0, 4).map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 backdrop-blur-xl bg-gradient-to-br from-white/30 to-white/10 border border-white/40 rounded-full text-xs font-semibold text-white shadow-lg"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-3">
          <a
            href={project.deployUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 px-4 py-3 bg-gradient-to-r from-blue-500 via-purple-600 to-purple-700 rounded-xl text-white text-sm font-semibold hover:from-blue-600 hover:via-purple-700 hover:to-purple-800 transition-all duration-300 shadow-lg shadow-purple-500/40 hover:shadow-purple-500/60 flex items-center justify-center gap-2 border border-purple-400/30"
          >
            <ExternalLink size={16} />
            Projeto
          </a>
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 px-4 py-3 backdrop-blur-xl bg-gradient-to-br from-white/20 to-white/5 border border-white/30 rounded-xl text-white text-sm font-semibold hover:bg-white/30 hover:border-white/40 transition-all duration-300 shadow-lg flex items-center justify-center gap-2"
          >
            <Github size={16} />
            Código
          </a>
        </div>
      </div>
    </div>
  );
}

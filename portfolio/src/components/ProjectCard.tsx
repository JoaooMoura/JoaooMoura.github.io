import { ExternalLink, Github } from 'lucide-react';
import type { Project } from '../data/projects';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const hasProjectPreview = Boolean(project.deployUrl) && !project.deployUrl.includes('github.com');

  return (
    <article className="group flex h-full min-h-[840px] flex-col overflow-hidden rounded-[1.6rem] border border-white/[0.08] bg-[#0D1117]/88 shadow-[0_18px_60px_rgba(0,0,0,0.26)] transition duration-300 hover:-translate-y-1 hover:border-[#C9A24D]/35">
      <div className="relative h-52 overflow-hidden border-b border-white/[0.07] bg-[#090D12]">
        <img
          src={project.imageUrl}
          alt={project.title}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover opacity-88 transition-transform duration-700 group-hover:scale-[1.035]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#070A0D] via-transparent to-transparent" />
        <span className="absolute left-4 top-4 rounded-full border border-white/[0.14] bg-[#070A0D]/80 px-3 py-1.5 text-xs font-bold text-[#F4F1E8] backdrop-blur">
          {project.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.22em] text-[#C9A24D]">{project.type}</p>
        <h3 className="mb-3 text-2xl font-black leading-tight tracking-[-0.04em] text-[#F4F1E8]">
          {project.title}
        </h3>

        <p className="mb-5 text-sm leading-relaxed text-[#A7ADB7]">{project.description}</p>

        <div className="compact-card mb-5 px-4 py-3">
          <p className="mb-1 text-sm font-bold text-[#F4F1E8]">Metodologia aplicada</p>
          <p className="text-sm leading-relaxed text-[#A7ADB7]">{project.methodology}</p>
        </div>


        <div className="compact-card mb-5 px-4 py-3">
          <p className="mb-2 text-sm font-bold text-[#F4F1E8]">Soft skills adquiridas</p>
          <div className="mb-3 flex flex-wrap gap-2">
            {project.softSkills.map((skill, index) => (
              <span key={index} className="tag-pill">
                {skill}
              </span>
            ))}
          </div>
          <p className="text-sm leading-relaxed text-[#A7ADB7]">{project.softSkillDevelopment}</p>
        </div>

        <div className="mb-5 flex-1 space-y-3 text-sm">
          <div>
            <p className="mb-1 font-bold text-[#F4F1E8]">Desafio técnico</p>
            <p className="leading-relaxed text-[#A7ADB7]">{project.challenge}</p>
          </div>
          <div>
            <p className="mb-1 font-bold text-[#F4F1E8]">Minha participação</p>
            <p className="leading-relaxed text-[#A7ADB7]">{project.role}</p>
          </div>
          <div>
            <p className="mb-1 font-bold text-[#F4F1E8]">Resultado</p>
            <p className="leading-relaxed text-[#A7ADB7]">{project.results}</p>
          </div>
        </div>

        <div className="mb-6 flex flex-wrap gap-2 pt-2">
          {project.techs.slice(0, 6).map((tech, index) => (
            <span key={index} className="tag-pill">
              {tech}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-3">
          {hasProjectPreview && (
            <a
              href={project.deployUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary flex-1 px-4 py-3 text-sm"
            >
              <ExternalLink size={16} />
              Ver projeto
            </a>
          )}
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`btn-secondary px-4 py-3 text-sm ${hasProjectPreview ? 'flex-1' : 'w-full'}`}
          >
            <Github size={16} />
            GitHub
          </a>
        </div>
      </div>
    </article>
  );
}

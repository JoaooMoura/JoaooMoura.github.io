import { motion } from 'framer-motion';
import { BookOpen, FileText, GraduationCap, ExternalLink } from 'lucide-react';
import { projects } from '../data/projects';

const academicProjects = projects.filter((project) => project.category === 'Acadêmico' || project.category === 'TCC');

const workGroups = [
  {
    title: 'TCC / Trabalho Técnico',
    icon: GraduationCap,
    items: academicProjects.filter((project) => project.category === 'TCC'),
  },
  {
    title: 'Projetos Integradores e Relatórios Técnicos',
    icon: FileText,
    items: academicProjects.filter((project) => project.title.includes('API')),
  },
  {
    title: 'Trabalhos Acadêmicos Individuais',
    icon: BookOpen,
    items: academicProjects.filter((project) => project.title.includes('Aerocode') || project.title.includes('Atlantis')),
  },
];

export default function AcademicWorks() {
  return (
    <section id="academic" className="section-shell">
      <div className="section-orb left-[-6rem] top-1/4 bg-[#77B7A6]" />

      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-heading"
        >
          <span className="eyebrow">Acadêmico</span>
          <h2 className="section-title">Trabalhos Acadêmicos</h2>
          <p className="section-subtitle">
            Organização dos principais trabalhos, projetos integradores, relatórios técnicos e TCC desenvolvidos ao longo da minha formação.
          </p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-3">
          {workGroups.map((group, groupIndex) => {
            const Icon = group.icon;
            return (
              <motion.article
                key={group.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: groupIndex * 0.08 }}
                className="panel-card p-7"
              >
                <div className="mb-6 grid h-14 w-14 place-items-center rounded-2xl border border-[#C9A24D]/30 bg-[#C9A24D]/10">
                  <Icon className="text-[#C9A24D]" size={26} />
                </div>

                <h3 className="mb-6 text-2xl font-black tracking-[-0.035em] text-[#F4F1E8]">{group.title}</h3>

                <div className="space-y-4">
                  {group.items.map((item) => (
                    <div key={item.id} className="compact-card p-5 transition-colors hover:border-[#C9A24D]/30">
                      <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-[#C9A24D]">{item.type}</p>
                      <h4 className="mb-2 font-bold leading-tight text-[#F4F1E8]">{item.title}</h4>
                      <p className="mb-4 text-sm leading-relaxed text-[#A7ADB7]">{item.results}</p>
                      <a
                        href={item.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-bold text-[#C9A24D] transition-colors hover:text-[#F4F1E8]"
                      >
                        Acessar repositório
                        <ExternalLink size={14} />
                      </a>
                    </div>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

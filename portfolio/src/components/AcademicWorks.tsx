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
    <section id="academic" className="py-32 px-6 border-t border-white/10 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-blue-900/10 to-slate-950" />
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[150px]" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">Trabalhos Acadêmicos</h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Organização dos principais trabalhos, projetos integradores, relatórios técnicos e TCC desenvolvidos ao longo da minha formação.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {workGroups.map((group, groupIndex) => {
            const Icon = group.icon;
            return (
              <motion.article
                key={group.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: groupIndex * 0.1 }}
                className="backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-3xl p-8 shadow-xl hover:shadow-2xl hover:border-white/30 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg mb-6">
                  <Icon className="text-white" size={28} />
                </div>

                <h3 className="text-2xl font-bold text-white mb-6">{group.title}</h3>

                <div className="space-y-5">
                  {group.items.map((item) => (
                    <div key={item.id} className="rounded-2xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition-colors">
                      <p className="text-sm text-blue-300 font-semibold mb-2">{item.type}</p>
                      <h4 className="text-white font-bold mb-2 leading-tight">{item.title}</h4>
                      <p className="text-gray-400 text-sm leading-relaxed mb-4">{item.results}</p>
                      <a
                        href={item.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-purple-300 hover:text-purple-200 transition-colors"
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

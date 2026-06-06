import { motion } from 'framer-motion';
import { Presentation, Users, GitBranch, ClipboardCheck, ExternalLink } from 'lucide-react';

const activities = [
  {
    title: 'Palestra sobre Projeto de API',
    period: 'FATEC São José dos Campos - Fev/2026',
    description:
      'Ministrei palestra sobre Projeto de API para alunos do 1º semestre do CST em Desenvolvimento de Software Multiplataforma, compartilhando experiência prática com projetos acadêmicos, equipe, entregas e organização do desenvolvimento.',
    icon: Presentation,
    evidenceUrl: '/certificates/certificado-fatec-palestra-api.jpg',
    evidenceLabel: 'Ver certificado',
  },
  {
    title: 'Projetos Integradores com clientes reais',
    period: 'FATEC - 2025/2026',
    description:
      'Participação em projetos acadêmicos semestrais desenvolvidos em equipe, com backlog, entregas por sprint, apresentações e validação de funcionalidades.',
    icon: Users,
  },
  {
    title: 'Apresentações técnicas de sprint',
    period: 'FATEC',
    description:
      'Participação em apresentações de andamento, demonstração de telas, funcionalidades, regras de negócio e resultados obtidos durante o desenvolvimento dos projetos.',
    icon: Presentation,
  },
  {
    title: 'Trabalho com metodologia Scrum',
    period: 'Projetos acadêmicos',
    description:
      'Uso de backlog, tarefas, responsáveis, versionamento com Git/GitHub, organização de entregas e correções de bugs ao longo das sprints.',
    icon: ClipboardCheck,
  },
  {
    title: 'Versionamento e colaboração em equipe',
    period: 'Projetos Team Chronos',
    description:
      'Contribuições em repositórios acadêmicos, submódulos, microsserviços, correções de integração e evolução contínua das aplicações.',
    icon: GitBranch,
  },
];

export default function Activities() {
  return (
    <section id="activities" className="py-32 px-6 border-t border-white/10 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 via-transparent to-slate-950" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[150px]" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">Eventos e Atividades</h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Atividades acadêmicas e extracurriculares que mostram participação prática, colaboração e desenvolvimento contínuo.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {activities.map((activity, index) => {
            const Icon = activity.icon;
            return (
              <motion.article
                key={activity.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-3xl p-8 shadow-xl hover:shadow-2xl hover:border-white/30 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 shrink-0 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center shadow-lg">
                    <Icon className="text-white" size={28} />
                  </div>
                  <div>
                    <p className="text-sm text-purple-300 font-semibold mb-2">{activity.period}</p>
                    <h3 className="text-2xl font-bold text-white mb-3">{activity.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{activity.description}</p>
                    {'evidenceUrl' in activity && activity.evidenceUrl && (
                      <a
                        href={activity.evidenceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-purple-300 hover:text-purple-200 transition-colors"
                      >
                        <ExternalLink size={16} />
                        {activity.evidenceLabel}
                      </a>
                    )}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

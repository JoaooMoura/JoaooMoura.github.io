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
    <section id="activities" className="section-shell">
      <div className="section-orb bottom-[-8rem] right-[-8rem] bg-[#77B7A6]" />

      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-heading"
        >
          <span className="eyebrow">Atividades</span>
          <h2 className="section-title">Eventos e Atividades</h2>
          <p className="section-subtitle">
            Atividades acadêmicas e extracurriculares que mostram participação prática, colaboração e desenvolvimento contínuo.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {activities.map((activity, index) => {
            const Icon = activity.icon;
            return (
              <motion.article
                key={activity.title}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
                className="panel-card p-7 transition duration-300 hover:-translate-y-1"
              >
                <div className="flex items-start gap-5">
                  <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl border border-[#C9A24D]/30 bg-[#C9A24D]/10 p-3">
                    <Icon className="text-[#C9A24D]" size={26} />
                  </div>
                  <div>
                    <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-[#C9A24D]">{activity.period}</p>
                    <h3 className="mb-3 text-2xl font-black tracking-[-0.035em] text-[#F4F1E8]">{activity.title}</h3>
                    <p className="leading-relaxed text-[#A7ADB7]">{activity.description}</p>
                    {'evidenceUrl' in activity && activity.evidenceUrl && (
                      <a
                        href={activity.evidenceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#C9A24D] transition-colors hover:text-[#F4F1E8]"
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

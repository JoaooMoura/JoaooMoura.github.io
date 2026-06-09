import { motion } from 'framer-motion';
import { Code2, Database, Wrench, Users, MessageCircle, ClipboardCheck, Lightbulb, Target, BriefcaseBusiness } from 'lucide-react';

const hardSkills = [
  {
    title: 'Front-end',
    icon: Code2,
    items: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React', 'React Native', 'Vite', 'Tailwind CSS'],
  },
  {
    title: 'Back-end e APIs',
    icon: Code2,
    items: ['Node.js', 'Express', 'Java', 'Spring Boot', 'Python', 'Flask', 'APIs REST', 'Microsserviços'],
  },
  {
    title: 'Banco de dados',
    icon: Database,
    items: ['MySQL', 'MariaDB', 'Prisma ORM', 'Modelagem relacional', 'Consultas SQL'],
  },
  {
    title: 'Ferramentas e plataformas',
    icon: Wrench,
    items: ['Git', 'GitHub', 'Docker', 'VS Code', 'Figma', 'Canva', 'Unity', 'Vuforia', 'Firebase'],
  },
  {
    title: 'Rotinas administrativas',
    icon: BriefcaseBusiness,
    items: ['Planilhas', 'Organização de documentos', 'Controle de informações', 'Acompanhamento operacional', 'Comunicação entre setores'],
  },
];

const softSkills = [
  {
    title: 'Trabalho em equipe',
    description: 'Experiência em projetos acadêmicos com divisão de tarefas, sprints, versionamento e entregas em grupo.',
    icon: Users,
  },
  {
    title: 'Comunicação',
    description: 'Prática em apresentações de sprint, alinhamento de demandas e explicação de funcionalidades desenvolvidas.',
    icon: MessageCircle,
  },
  {
    title: 'Organização',
    description: 'Acompanhamento de tarefas, documentos, planilhas, rotinas administrativas e atenção a detalhes no trabalho e nos projetos.',
    icon: ClipboardCheck,
  },
  {
    title: 'Resolução de problemas',
    description: 'Atuação em correções de bugs, integração entre módulos, regras de negócio e melhorias de usabilidade.',
    icon: Lightbulb,
  },
  {
    title: 'Aprendizado contínuo',
    description: 'Busca constante por evolução técnica em front-end, back-end, banco de dados, microsserviços e ferramentas de desenvolvimento.',
    icon: Target,
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section-shell">
      <div className="section-orb left-1/2 top-1/3 bg-[#C9A24D]" />

      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-heading"
        >
          <span className="eyebrow">Skills</span>
          <h2 className="section-title">Habilidades</h2>
          <p className="section-subtitle">Competências técnicas e comportamentais desenvolvidas nos meus projetos</p>
        </motion.div>

        <div className="mb-20">
          <div className="mb-8 flex items-center justify-between gap-5 border-b border-white/[0.07] pb-5">
            <h3 className="text-2xl font-black tracking-[-0.035em] text-[#F4F1E8] md:text-3xl">Hard Skills</h3>
            <span className="h-px flex-1 bg-white/[0.07]" />
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {hardSkills.map((group, index) => {
              const Icon = group.icon;
              return (
                <motion.article
                  key={group.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.06 }}
                  className="panel-card p-7 transition duration-300 hover:-translate-y-1"
                >
                  <div className="mb-6 flex items-center gap-4">
                    <div className="grid h-12 w-12 place-items-center rounded-2xl border border-[#C9A24D]/30 bg-[#C9A24D]/10">
                      <Icon className="text-[#C9A24D]" size={24} />
                    </div>
                    <h4 className="text-2xl font-black tracking-[-0.035em] text-[#F4F1E8]">{group.title}</h4>
                  </div>

                  <div className="flex flex-wrap gap-2.5">
                    {group.items.map((item) => (
                      <span key={item} className="tag-pill">
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>

        <div>
          <div className="mb-8 flex items-center justify-between gap-5 border-b border-white/[0.07] pb-5">
            <h3 className="text-2xl font-black tracking-[-0.035em] text-[#F4F1E8] md:text-3xl">Soft Skills</h3>
            <span className="h-px flex-1 bg-white/[0.07]" />
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {softSkills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <motion.article
                  key={skill.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="panel-card p-7 transition duration-300 hover:-translate-y-1"
                >
                  <Icon className="mb-5 text-[#77B7A6]" size={28} />
                  <h4 className="mb-3 text-xl font-black tracking-[-0.03em] text-[#F4F1E8]">{skill.title}</h4>
                  <p className="text-sm leading-relaxed text-[#A7ADB7]">{skill.description}</p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

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
    <section id="skills" className="py-32 px-6 border-t border-white/10 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 via-transparent to-blue-900/10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/20 rounded-full blur-[150px]" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">Habilidades</h2>
          <p className="text-gray-400 text-lg">Competências técnicas e comportamentais desenvolvidas nos meus projetos</p>
        </motion.div>

        <div className="mb-20">
          <h3 className="text-3xl font-bold text-white mb-10 text-center flex items-center justify-center gap-3">
            <span className="w-2 h-8 bg-purple-500 rounded-full inline-block"></span>
            Hard Skills
          </h3>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {hardSkills.map((group, index) => {
              const Icon = group.icon;
              return (
                <motion.article
                  key={group.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-3xl p-8 shadow-xl hover:shadow-2xl hover:shadow-purple-500/10 hover:border-white/30 transition-all duration-300"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                      <Icon className="text-white" size={24} />
                    </div>
                    <h4 className="text-2xl font-bold text-white">{group.title}</h4>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="px-4 py-2 rounded-full text-sm font-semibold text-white bg-white/10 border border-white/20 hover:bg-white/15 transition-colors"
                      >
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
          <h3 className="text-3xl font-bold text-white mb-10 text-center flex items-center justify-center gap-3">
            <span className="w-2 h-8 bg-blue-500 rounded-full inline-block"></span>
            Soft Skills
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {softSkills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <motion.article
                  key={skill.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-3xl p-7 shadow-xl hover:shadow-2xl hover:shadow-blue-500/10 hover:border-white/30 hover:-translate-y-1 transition-all duration-300"
                >
                  <Icon className="text-blue-300 mb-5" size={30} />
                  <h4 className="text-xl font-bold text-white mb-3">{skill.title}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">{skill.description}</p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

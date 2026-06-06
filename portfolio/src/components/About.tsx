import { motion } from 'framer-motion';
import { GraduationCap, Award, Download, Calendar, ExternalLink, FileText, BriefcaseBusiness } from 'lucide-react';

export default function About() {
  const education = [
    {
      period: '2025 - Presente',
      title: 'Desenvolvimento de Software Multiplataforma',
      institution: 'FATEC',
      level: 'Ensino Superior',
      status: 'Em andamento',
    },
    {
      period: '2022 - 2024',
      title: 'Técnico em Desenvolvimento de Sistemas',
      institution: 'ETEC Profª Ilza Nascimento Pintus',
      level: 'Ensino Médio Técnico',
      status: 'Concluído',
    },
  ];

  const certificates = [
    {
      name: 'Networking Essentials',
      issuer: 'Cisco Networking Academy',
      year: 'Concluído em 04 jun. 2024',
      credentialUrl: '/certificates/networking-essentials.pdf',
      imageUrl: '/certificates/networking-essentials.png',
      type: 'PDF',
      icon: Award,
    },
    {
      name: 'Introduction to Cybersecurity',
      issuer: 'Cisco Networking Academy',
      year: 'Concluído em 03 set. 2024',
      credentialUrl: '/certificates/introduction-to-cybersecurity.pdf',
      imageUrl: '/certificates/introduction-to-cybersecurity.png',
      type: 'PDF',
      icon: Award,
    },
    {
      name: 'Fundamentos da Cibersegurança',
      issuer: 'Cisco Networking Academy / ETEC Profª Ilza Nascimento Pintus',
      year: 'Concluído em 29 nov. 2024',
      credentialUrl: '/certificates/fundamentos-ciberseguranca.pdf',
      imageUrl: '/certificates/fundamentos-ciberseguranca.png',
      type: 'PDF',
      icon: Award,
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0 },
  };

  return (
    <section id="about" className="py-32 px-6 border-t border-white/10 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 via-transparent to-purple-900/10" />
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[150px]" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">Sobre Mim</h2>
          <p className="text-gray-400 text-lg">Formação, trajetória e certificações</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-3xl p-10 shadow-xl hover:shadow-2xl hover:border-white/30 transition-all duration-300 shadow-[inset_0_0_40px_rgba(255,255,255,0.05)]"
          >
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-white mb-6">Perfil Profissional</h3>

              <div className="space-y-4">
                <p className="text-gray-300 leading-relaxed">
                  Sou <span className="text-blue-400 font-semibold">João Vitor de Moura</span>, desenvolvedor full stack em formação, atualmente cursando
                  <span className="text-purple-400 font-semibold"> Desenvolvimento de Software Multiplataforma</span> na FATEC e formado como técnico em Desenvolvimento de Sistemas pela ETEC Profª Ilza Nascimento Pintus.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Tenho maior afinidade com o ecossistema <span className="text-blue-400 font-semibold">JavaScript e TypeScript</span>, utilizando React no desenvolvimento de interfaces e Node.js na construção de aplicações e APIs. Também venho atuando com <span className="text-emerald-400 font-semibold">Java, Spring Boot, Python, MySQL, Docker e microsserviços</span>, principalmente nos projetos integradores da FATEC.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Além da formação técnica, também desenvolvo experiência profissional na área administrativa como
                  <span className="text-cyan-400 font-semibold"> Jovem Aprendiz Administrativo na Braga Turismo</span>, onde atuo desde junho de 2025 com organização de documentos, manipulação de planilhas, acompanhamento de informações operacionais, apoio em demandas internas e comunicação entre setores. Essa vivência me ajuda a entender processos reais de uma empresa e a pensar em sistemas que resolvem problemas do dia a dia administrativo.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Busco oportunidades de estágio para aplicar meus conhecimentos em projetos reais, evoluir tecnicamente e contribuir com soluções bem estruturadas, funcionais e pensadas para o usuário. Tenho interesse em desenvolvimento web, APIs REST, front-end, full stack, sistemas empresariais e soluções que conectem tecnologia com rotinas administrativas e operacionais.
                </p>
              </div>

              <div className="mt-8 rounded-2xl border border-cyan-400/20 bg-cyan-500/10 p-6 shadow-lg shadow-cyan-500/10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg">
                    <BriefcaseBusiness className="text-white" size={22} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg">Experiência administrativa</h4>
                    <p className="text-cyan-200 text-sm">Braga Turismo · Jun/2025 - Atual</p>
                  </div>
                </div>
                <ul className="space-y-2 text-sm text-gray-300 leading-relaxed">
                  <li>• Organização de documentos e apoio em rotinas administrativas.</li>
                  <li>• Manipulação de planilhas e acompanhamento de informações operacionais.</li>
                  <li>• Comunicação entre setores, controle de demandas e atenção a detalhes.</li>
                </ul>
              </div>

              <div className="pt-6">
                <a
                  href="/curriculo.pdf"
                  download="curriculo.pdf"
                  rel="noopener noreferrer"
                  className="w-full px-8 py-4 bg-gradient-to-r from-blue-500 via-purple-600 to-purple-700 rounded-2xl text-white font-semibold hover:from-blue-600 hover:via-purple-700 hover:to-purple-800 hover:-translate-y-1 transition-all duration-300 shadow-lg shadow-purple-500/50 hover:shadow-xl hover:shadow-purple-500/60 flex items-center justify-center gap-3 border border-purple-400/30"
                >
                  <Download size={20} />
                  Baixar currículo
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg">
                <GraduationCap className="text-white" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-white">Formação Acadêmica</h3>
            </div>

            <div className="relative pl-8 border-l-2 border-white/20">
              {education.map((edu, index) => (
                <motion.div key={index} variants={item} className="relative mb-10 last:mb-0">
                  <div className="absolute -left-[37px] w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg shadow-purple-500/50 border-4 border-slate-950">
                    <Calendar className="text-white" size={18} />
                  </div>

                  <div className="backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-2xl p-6 hover:bg-white/15 hover:border-white/30 hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl shadow-[inset_0_0_30px_rgba(255,255,255,0.05)]">
                    <div className="flex items-start justify-between mb-3 gap-3">
                      <span className="text-sm font-semibold text-blue-400 bg-blue-500/20 px-3 py-1 rounded-full border border-blue-500/30">
                        {edu.period}
                      </span>
                      <span
                        className={`text-xs font-semibold px-3 py-1 rounded-full ${
                          edu.status === 'Em andamento'
                            ? 'text-green-400 bg-green-500/20 border border-green-500/30'
                            : 'text-gray-400 bg-gray-500/20 border border-gray-500/30'
                        }`}
                      >
                        {edu.status}
                      </span>
                    </div>
                    <h4 className="text-xl font-bold text-white mb-2">{edu.title}</h4>
                    <p className="text-gray-300 mb-1">{edu.institution}</p>
                    <p className="text-sm text-gray-400">{edu.level}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="flex items-center gap-3 mb-10">
            <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg">
              <Award className="text-white" size={24} />
            </div>
            <h3 className="text-2xl font-bold text-white">Certificações</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificates.map((cert, index) => {
              const Icon = cert.icon;
              return (
                <motion.article
                  key={cert.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-2xl overflow-hidden hover:bg-white/15 hover:border-white/30 hover:-translate-y-2 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-yellow-500/20 shadow-[inset_0_0_30px_rgba(255,255,255,0.05)] group"
                >
                  {cert.imageUrl ? (
                    <a href={cert.credentialUrl} target="_blank" rel="noopener noreferrer" className="block h-40 bg-white/95 overflow-hidden">
                      <img src={cert.imageUrl} alt={`Certificado ${cert.name}`} className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300" />
                    </a>
                  ) : (
                    <div className="h-40 bg-gradient-to-br from-yellow-500/20 via-orange-500/10 to-purple-500/20 flex items-center justify-center border-b border-white/10">
                      <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-3xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                        <Icon className="text-white" size={40} />
                      </div>
                    </div>
                  )}

                  <div className="p-6">
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <h4 className="text-white font-semibold text-base leading-snug">{cert.name}</h4>
                      <span className="shrink-0 text-[10px] uppercase tracking-wide text-yellow-300 bg-yellow-500/10 border border-yellow-500/30 px-2 py-1 rounded-full">
                        {cert.type}
                      </span>
                    </div>
                    <p className="text-sm text-gray-400">{cert.issuer}</p>
                    <p className="text-xs text-gray-500 mt-1">{cert.year}</p>

                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-yellow-300 hover:text-yellow-200 transition-colors"
                    >
                      {cert.type === 'PDF' ? <FileText size={16} /> : <ExternalLink size={16} />}
                      Ver credencial
                    </a>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

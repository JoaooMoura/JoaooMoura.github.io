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
        staggerChildren: 0.16,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 16 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section id="about" className="section-shell">
      <div className="section-orb right-[-8rem] top-1/4 bg-[#C9A24D]" />

      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-heading"
        >
          <span className="eyebrow">Sobre</span>
          <h2 className="section-title">Sobre Mim</h2>
          <p className="section-subtitle">Formação, trajetória e certificações</p>
        </motion.div>

        <div className="mb-16 grid gap-8 lg:grid-cols-[1.18fr_0.82fr]">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="panel-card p-7 md:p-10"
          >
            <div className="space-y-6">
              <div className="flex flex-col gap-3 border-b border-white/[0.07] pb-6 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <span className="eyebrow">Perfil</span>
                  <h3 className="text-3xl font-black tracking-[-0.04em] text-[#F4F1E8]">Perfil Profissional</h3>
                </div>
              </div>

              <div className="space-y-5 text-[1rem] leading-8 text-[#A7ADB7]">
                <p>
                  Sou <span className="font-semibold text-[#F4F1E8]">João Vitor de Moura</span>, desenvolvedor full stack em formação, atualmente cursando
                  <span className="font-semibold text-[#C9A24D]"> Desenvolvimento de Software Multiplataforma</span> na FATEC e formado como técnico em Desenvolvimento de Sistemas pela ETEC Profª Ilza Nascimento Pintus.
                </p>
                <p>
                  Tenho maior afinidade com o ecossistema <span className="font-semibold text-[#F4F1E8]">JavaScript e TypeScript</span>, utilizando React no desenvolvimento de interfaces e Node.js na construção de aplicações e APIs. Também venho atuando com <span className="font-semibold text-[#77B7A6]">Java, Spring Boot, Python, MySQL, Docker e microsserviços</span>, principalmente nos projetos integradores da FATEC.
                </p>
                <p>
                  Além da formação técnica, também desenvolvo experiência profissional na área administrativa como
                  <span className="font-semibold text-[#F4F1E8]"> Jovem Aprendiz Administrativo na Braga Turismo</span>, onde atuo desde junho de 2025 com organização de documentos, manipulação de planilhas, acompanhamento de informações operacionais, apoio em demandas internas e comunicação entre setores. Essa vivência me ajuda a entender processos reais de uma empresa e a pensar em sistemas que resolvem problemas do dia a dia administrativo.
                </p>
                <p>
                  Busco oportunidades de estágio para aplicar meus conhecimentos em projetos reais, evoluir tecnicamente e contribuir com soluções bem estruturadas, funcionais e pensadas para o usuário. Tenho interesse em desenvolvimento web, APIs REST, front-end, full stack, sistemas empresariais e soluções que conectem tecnologia com rotinas administrativas e operacionais.
                </p>
              </div>

              <div className="compact-card p-6">
                <div className="mb-4 flex items-center gap-4">
                  <div className="grid h-12 w-12 place-items-center rounded-2xl border border-[#77B7A6]/30 bg-[#77B7A6]/10">
                    <BriefcaseBusiness className="text-[#77B7A6]" size={22} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-[#F4F1E8]">Experiência administrativa</h4>
                    <p className="text-sm text-[#A7ADB7]">Braga Turismo · Jun/2025 - Atual</p>
                  </div>
                </div>
                <ul className="space-y-2 text-sm leading-relaxed text-[#A7ADB7]">
                  <li>• Organização de documentos e apoio em rotinas administrativas.</li>
                  <li>• Manipulação de planilhas e acompanhamento de informações operacionais.</li>
                  <li>• Comunicação entre setores, controle de demandas e atenção a detalhes.</li>
                </ul>
              </div>

              <div className="pt-2">
                <a
                  href="/curriculo.pdf"
                  download="curriculo.pdf"
                  rel="noopener noreferrer"
                  className="btn-primary w-full"
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
            className="space-y-6"
          >
            <div className="flex items-center gap-4">
              <div className="grid h-12 w-12 place-items-center rounded-2xl border border-[#77B7A6]/30 bg-[#77B7A6]/10">
                <GraduationCap className="text-[#77B7A6]" size={24} />
              </div>
              <h3 className="text-2xl font-black tracking-[-0.03em] text-[#F4F1E8]">Formação Acadêmica</h3>
            </div>

            <div className="relative space-y-5 border-l border-white/[0.1] pl-6">
              {education.map((edu, index) => (
                <motion.div key={index} variants={item} className="relative">
                  <div className="absolute -left-[31px] top-5 grid h-10 w-10 place-items-center rounded-full border border-white/[0.12] bg-[#0B0F14]">
                    <Calendar className="text-[#C9A24D]" size={17} />
                  </div>

                  <div className="panel-card p-6">
                    <div className="mb-4 flex flex-wrap items-start justify-between gap-3">
                      <span className="tag-pill">
                        {edu.period}
                      </span>
                      <span
                        className={`rounded-full border px-3 py-1 text-xs font-bold ${
                          edu.status === 'Em andamento'
                            ? 'border-[#77B7A6]/30 bg-[#77B7A6]/10 text-[#77B7A6]'
                            : 'border-white/[0.12] bg-white/[0.04] text-[#A7ADB7]'
                        }`}
                      >
                        {edu.status}
                      </span>
                    </div>
                    <h4 className="mb-2 text-xl font-black tracking-[-0.03em] text-[#F4F1E8]">{edu.title}</h4>
                    <p className="mb-1 text-[#C9CED6]">{edu.institution}</p>
                    <p className="text-sm text-[#717986]">{edu.level}</p>
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
          <div className="mb-8 flex items-center gap-4 border-b border-white/[0.07] pb-5">
            <div className="grid h-12 w-12 place-items-center rounded-2xl border border-[#C9A24D]/30 bg-[#C9A24D]/10">
              <Award className="text-[#C9A24D]" size={24} />
            </div>
            <h3 className="text-2xl font-black tracking-[-0.03em] text-[#F4F1E8]">Certificações</h3>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {certificates.map((cert, index) => {
              const Icon = cert.icon;
              return (
                <motion.article
                  key={cert.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="group overflow-hidden rounded-[1.4rem] border border-white/[0.08] bg-[#0D1117]/88 shadow-[0_18px_55px_rgba(0,0,0,0.24)] transition duration-300 hover:-translate-y-1 hover:border-[#C9A24D]/35"
                >
                  {cert.imageUrl ? (
                    <a href={cert.credentialUrl} target="_blank" rel="noopener noreferrer" className="block h-40 overflow-hidden border-b border-white/[0.07] bg-[#F4F1E8]">
                      <img src={cert.imageUrl} alt={`Certificado ${cert.name}`} className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.025]" />
                    </a>
                  ) : (
                    <div className="flex h-40 items-center justify-center border-b border-white/[0.07] bg-white/[0.035]">
                      <div className="grid h-20 w-20 place-items-center rounded-3xl border border-[#C9A24D]/30 bg-[#C9A24D]/10">
                        <Icon className="text-[#C9A24D]" size={38} />
                      </div>
                    </div>
                  )}

                  <div className="p-6">
                    <div className="mb-3 flex items-start justify-between gap-3">
                      <h4 className="text-base font-bold leading-snug text-[#F4F1E8]">{cert.name}</h4>
                      <span className="shrink-0 rounded-full border border-[#C9A24D]/30 bg-[#C9A24D]/10 px-2 py-1 text-[10px] font-bold uppercase tracking-wide text-[#C9A24D]">
                        {cert.type}
                      </span>
                    </div>
                    <p className="text-sm text-[#A7ADB7]">{cert.issuer}</p>
                    <p className="mt-1 text-xs text-[#717986]">{cert.year}</p>

                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#C9A24D] transition-colors hover:text-[#F4F1E8]"
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

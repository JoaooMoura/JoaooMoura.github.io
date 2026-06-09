import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Phone, MapPin, ExternalLink } from 'lucide-react';

const contacts = [
  {
    label: 'E-mail',
    value: 'jv.moura.sjc@gmail.com',
    href: 'mailto:jv.moura.sjc@gmail.com',
    icon: Mail,
  },
  {
    label: 'Telefone',
    value: '(12) 98845-6100',
    href: 'tel:+5512988456100',
    icon: Phone,
  },
  {
    label: 'GitHub',
    value: 'github.com/JoaooMoura',
    href: 'https://github.com/JoaooMoura',
    icon: Github,
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/joaoomoura',
    href: 'https://www.linkedin.com/in/joaoomoura/',
    icon: Linkedin,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="section-shell">
      <div className="section-orb right-[-8rem] top-1/4 bg-[#C9A24D]" />

      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-heading mb-12"
        >
          <span className="eyebrow">Contato</span>
          <h2 className="section-title">Contato</h2>
          <p className="section-subtitle">
            Estou em busca de estágio em desenvolvimento de software e aberto a oportunidades para atuar com front-end, full stack e projetos web.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="panel-card p-7 md:p-10"
        >
          <div className="mb-10 flex flex-col gap-8 border-b border-white/[0.07] pb-8 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h3 className="mb-3 text-3xl font-black tracking-[-0.04em] text-[#F4F1E8]">João Vitor de Moura</h3>
              <p className="flex items-center gap-2 text-[#A7ADB7]">
                <MapPin size={18} />
                São José dos Campos, SP
              </p>
            </div>

            <a
              href="/curriculo.pdf"
              download="curriculo.pdf"
              className="btn-primary"
            >
              Baixar currículo
              <ExternalLink size={18} />
            </a>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {contacts.map((contact) => {
              const Icon = contact.icon;
              return (
                <a
                  key={contact.label}
                  href={contact.href}
                  target={contact.href.startsWith('http') ? '_blank' : undefined}
                  rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="compact-card p-5 transition duration-300 hover:-translate-y-1 hover:border-[#C9A24D]/35"
                >
                  <Icon className="mb-4 text-[#C9A24D]" size={24} />
                  <p className="mb-1 font-bold text-[#F4F1E8]">{contact.label}</p>
                  <p className="break-words text-sm text-[#A7ADB7]">{contact.value}</p>
                </a>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

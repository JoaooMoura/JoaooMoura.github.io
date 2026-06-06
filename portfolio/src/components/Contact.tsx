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
    <section id="contact" className="py-32 px-6 border-t border-white/10 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-blue-900/10 to-slate-950" />
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[150px]" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">Contato</h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Estou em busca de estágio em desenvolvimento de software e aberto a oportunidades para atuar com front-end, full stack e projetos web.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-3xl p-8 md:p-10 shadow-xl"
        >
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 mb-10">
            <div>
              <h3 className="text-3xl font-bold text-white mb-3">João Vitor de Moura</h3>
              <p className="text-gray-400 flex items-center gap-2">
                <MapPin size={18} />
                São José dos Campos, SP
              </p>
            </div>

            <a
              href="/curriculo.pdf"
              download="curriculo.pdf"
              className="px-8 py-4 bg-gradient-to-r from-blue-500 via-purple-600 to-purple-700 rounded-2xl text-white font-semibold hover:from-blue-600 hover:via-purple-700 hover:to-purple-800 hover:-translate-y-1 transition-all duration-300 shadow-lg shadow-purple-500/50 hover:shadow-xl hover:shadow-purple-500/60 flex items-center justify-center gap-3 border border-purple-400/30"
            >
              Baixar currículo
              <ExternalLink size={18} />
            </a>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {contacts.map((contact) => {
              const Icon = contact.icon;
              return (
                <a
                  key={contact.label}
                  href={contact.href}
                  target={contact.href.startsWith('http') ? '_blank' : undefined}
                  rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 hover:border-white/20 hover:-translate-y-1 transition-all duration-300"
                >
                  <Icon className="text-blue-300 mb-4" size={26} />
                  <p className="text-white font-bold mb-1">{contact.label}</p>
                  <p className="text-gray-400 text-sm break-words">{contact.value}</p>
                </a>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

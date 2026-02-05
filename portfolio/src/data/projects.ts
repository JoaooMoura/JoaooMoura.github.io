export interface Project {
  id: number;
  title: string;
  description: string;
  techs: string[];
  imageUrl: string;
  deployUrl: string;
  repoUrl: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'RArdware',
    description: 'Plataforma web completa para gerenciamento e monitoramento de hardware em tempo real. Sistema desenvolvido com foco em performance e escalabilidade, permitindo análise detalhada de componentes e histórico de desempenho.',
    techs: ['React', 'Node.js', 'MySQL', 'Express'],
    imageUrl: '/projects/rardware.jpeg',
    deployUrl: 'https://youtube.com/shorts/3gZU5ezltcM',
    repoUrl: 'https://github.com/JoaooMoura/TCC---RArdware',
    featured: true,
  },
  {
    id: 2,
    title: 'Ragnarok Store',
    description: 'E-commerce moderno e responsivo inspirado no universo de Ragnarok Online. Interface intuitiva com sistema de carrinho, filtros avançados e integração com APIs de pagamento. Desenvolvido com as melhores práticas de UX/UI.',
    techs: ['React', 'TypeScript', 'Tailwind CSS', 'Firebase'],
    imageUrl: '/projects/ragnarok.PNG',
    deployUrl: 'https://joaoomoura.github.io/ragnarok-store-web/',
    repoUrl: 'https://github.com/JoaooMoura/ragnarok-store-web',
    featured: true,
  },
  {
    id: 3,
    title: 'API 1º Semestre',
    description: 'API REST robusta desenvolvida como projeto integrador acadêmico. Sistema completo de gerenciamento com autenticação, validação de dados e documentação técnica. Implementa conceitos de arquitetura limpa e padrões de projeto.',
    techs: ['Node.js', 'Express', 'PostgreSQL', 'Prisma'],
    imageUrl: '/projects/api.jpg',
    deployUrl: 'https://github.com/Team-Chronos/API-DSM-1SEMESTRE-2025',
    repoUrl: 'https://github.com/Team-Chronos/API-DSM-1SEMESTRE-2025',
    featured: true,
  },
  {
    id: 4,
    title: 'SharkAnimes',
    description: 'Plataforma de streaming de animes com interface moderna e fluida. Recursos incluem sistema de busca avançado, categorização por gênero, lista de favoritos e player customizado. Desenvolvido com foco em experiência do usuário e performance.',
    techs: ['React', 'TypeScript', 'API Integration', 'Styled Components'],
    imageUrl: '/projects/SharkAnimes.png',
    deployUrl: 'https://joaoomoura.github.io/SharkAnimes/',
    repoUrl: 'https://github.com/JoaooMoura/SharkAnimes',
    featured: false,
  },
  {
    id: 5,
    title: 'API 2º Semestre',
    description: 'Projeto integrador desenvolvido em equipe para resolver desafio empresarial real. Sistema completo de gestão com dashboard analítico, relatórios automatizados e integração com múltiplas APIs. Aplicação de metodologias ágeis e desenvolvimento colaborativo.',
    techs: ['Node.js', 'React', 'PostgreSQL', 'Docker'],
    imageUrl: '/projects/api2.png',
    deployUrl: 'https://github.com/Team-Chronos/API-DSM-2SEMESTRE-2025',
    repoUrl: 'https://github.com/Team-Chronos/API-DSM-2SEMESTRE-2025',
    featured: false,
  },
  {
    id: 6,
    title: 'AV3 - Avaliação Prática',
    description: 'Projeto acadêmico avançado focado em conceitos de arquitetura de software, padrões de design e otimização de código. Implementação de funcionalidades complexas com ênfase em qualidade, manutenibilidade e documentação técnica.',
    techs: ['JavaScript', 'React', 'Node.js', 'Git'],
    imageUrl: '/projects/AV3.png',
    deployUrl: 'https://av-3-six.vercel.app',
    repoUrl: 'https://github.com/JoaooMoura/AV3',
    featured: false,
  },
];

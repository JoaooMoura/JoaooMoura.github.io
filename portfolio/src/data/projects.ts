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
    title: 'RArdware - Aplicativo Mobile com Realidade Aumentada',
    description:
      'Aplicativo desenvolvido como Trabalho de Conclusão de Curso com foco no ensino de hardware por meio de realidade aumentada. A proposta permite visualizar componentes internos de um computador em 3D a partir da câmera do celular, tornando o aprendizado mais interativo e acessível.',
    techs: ['React Native', 'TypeScript', 'Unity 3D', 'C#', 'Firebase'],
    imageUrl: '/projects/rardware.jpeg',
    deployUrl: 'https://youtube.com/shorts/3gZU5ezltcM',
    repoUrl: 'https://github.com/JoaooMoura/TCC---RArdware',
    featured: true,
  },
  {
    id: 2,
    title: 'Ragnarok Store - E-commerce Temático',
    description:
      'Projeto de e-commerce responsivo inspirado no universo de Ragnarok Online. A aplicação foi desenvolvida com foco em usabilidade, navegação intuitiva e organização visual dos produtos, incluindo carrinho, filtros e experiência de compra adaptada para diferentes tamanhos de tela.',
    techs: ['React', 'TypeScript', 'Tailwind CSS', 'Firebase'],
    imageUrl: '/projects/ragnarok.PNG',
    deployUrl: 'https://joaoomoura.github.io/ragnarok-store-web/',
    repoUrl: 'https://github.com/JoaooMoura/ragnarok-store-web',
    featured: false,
  },
  {
    id: 3,
    title: 'API 1º Semestre - Plataforma de Monitoramento de Importação e Exportação',
    description:
      'Projeto integrador acadêmico voltado ao monitoramento de tendências do mercado de importação e exportação no estado de São Paulo. A aplicação reúne visualização de dados, filtros e apoio à análise de informações comerciais e logísticas em uma solução prática para consulta.',
    techs: ['Python', 'Flask', 'MySQL', 'HTML', 'CSS'],
    imageUrl: '/projects/api.jpg',
    deployUrl: 'https://github.com/Team-Chronos/API-DSM-1SEMESTRE-2025',
    repoUrl: 'https://github.com/Team-Chronos/API-DSM-1SEMESTRE-2025',
    featured: true,
  },
  {
    id: 4,
    title: 'SharkAnimes - Plataforma Web de Streaming',
    description:
      'Projeto front-end desenvolvido com foco em interface moderna e navegação fluida para consumo de conteúdo. A aplicação reúne busca, categorização por gênero, organização visual e experiência mais dinâmica para o usuário.',
    techs: ['React', 'TypeScript', 'API Integration', 'Styled Components'],
    imageUrl: '/projects/SharkAnimes.png',
    deployUrl: 'https://joaoomoura.github.io/SharkAnimes/',
    repoUrl: 'https://github.com/JoaooMoura/SharkAnimes',
    featured: false,
  },
  {
    id: 5,
    title: 'API 2º Semestre - Plataforma Integrada de Gestão Empresarial',
    description:
      'Projeto integrador desenvolvido em equipe para atender um desafio empresarial real. A aplicação foi pensada para apoiar a gestão dos setores administrativo, comercial e operacional, reunindo funcionalidades específicas, organização por rotas e estrutura de sistema web integrada.',
    techs: ['React', 'Node.js', 'Express', 'MySQL'],
    imageUrl: '/projects/api2.png',
    deployUrl: 'https://github.com/Team-Chronos/API-DSM-2SEMESTRE-2025',
    repoUrl: 'https://github.com/Team-Chronos/API-DSM-2SEMESTRE-2025',
    featured: false,
  },
  {
    id: 6,
    title: 'AV3 - Plataforma de Gestão e Performance de Aeronaves',
    description:
      'Plataforma full stack desenvolvida para gerenciamento de aeronaves, peças e etapas de manutenção, com foco em controle operacional, acompanhamento técnico e organização das informações. A aplicação conta com dashboard, autenticação por níveis de acesso, integração com banco de dados e geração de relatórios em PDF.',
    techs: ['React', 'TypeScript', 'Node.js', 'Prisma'],
    imageUrl: '/projects/AV3.png',
    deployUrl: 'https://av-3-six.vercel.app',
    repoUrl: 'https://github.com/JoaooMoura/AV3',
    featured: true,
  },
];

export interface Project {
  id: number;
  title: string;
  category: 'Acadêmico' | 'TCC' | 'Pessoal';
  type: string;
  description: string;
  problem: string;
  solution: string;
  methodology: string;
  challenge: string;
  softSkills: string[];
  softSkillDevelopment: string;
  role: string;
  results: string;
  techs: string[];
  imageUrl: string;
  deployUrl: string;
  repoUrl: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'API 3º Semestre - Apontamento de Horas e Gestão Financeira',
    category: 'Acadêmico',
    type: 'Projeto Integrador FATEC',
    description:
      'Plataforma web baseada em microsserviços para gestão de projetos, tarefas, apontamento de horas, auditoria e análise financeira de custos e ganhos por profissional.',
    problem:
      'Empresas que gerenciam projetos precisam centralizar horas trabalhadas, tarefas, custos e indicadores financeiros para reduzir retrabalho e melhorar a rastreabilidade das informações.',
    solution:
      'Sistema com perfis de acesso, dashboard financeiro, filtros por período, visualização de auditoria, integração via gateway e regras de controle para projetos por hora fechada.',
    methodology:
      'Scrum, com organização por sprints, divisão de tarefas no Jira, acompanhamento de entregas e versionamento pelo GitHub.',
    challenge:
      'Compreender o propósito das regras de horas e custos antes de implementar as telas e serviços, além de evoluir no uso de Java, Spring Boot, microsserviços, gateway e integrações entre módulos.',
    softSkills: ['Comunicação', 'Proatividade', 'Trabalho em equipe', 'Adaptabilidade'],
    softSkillDevelopment:
      'Desenvolvi essas habilidades ao lidar com regras financeiras, integrações entre microsserviços e correções de bugs que exigiam alinhamento com colegas, entendimento do impacto de cada entrega e atenção aos prazos das sprints. Nesse projeto consegui desenvolver melhoro minhas atitudes em grupo, pois nesse semestre tivemos uma equipe com mais de 8 pessoas e então houve muitos conflitos internos, mas aprendi junto ao meus colegas a lidar com situações de desentendimento e que ás vezes mudanças drásticas são necessárias. E também pude ser mais proativo, contribuindo com o grupo, ajudando quem estava com dificuldades e dando uma refinada no projeto',
    role:
      'Atuei como desenvolvedor full stack, com foco no front-end e no microsserviço financeiro. Implementei dashboard, filtros por período, tela de auditoria, controle de acesso, bloqueio de rotas, integração via gateway e regras de cálculo/limite de horas.',
    results:
      'Entrega de uma solução funcional com comunicação entre microsserviços, acompanhamento financeiro de projetos e maior controle sobre horas estimadas e consumidas.',
    techs: ['React', 'TypeScript', 'Java', 'Spring Boot', 'Docker', 'MySQL', 'Microsserviços'],
    imageUrl: '/projects/api3-dashboard.png',
    deployUrl: 'https://github.com/Team-Chronos/API-DSM-3SEMESTRE-2026',
    repoUrl: 'https://github.com/Team-Chronos/API-DSM-3SEMESTRE-2026',
    featured: true,
  },
  {
    id: 2,
    title: 'RArdware - TCC Técnico com Realidade Aumentada',
    category: 'TCC',
    type: 'Trabalho de Conclusão de Curso - ETEC',
    description:
      'Aplicativo educacional com realidade aumentada para apoiar o ensino de hardware, integrando aplicação mobile e Unity/Vuforia para exibir um modelo 3D de computador ao escanear um QR Code.',
    problem:
      'O ensino de hardware pode ser pouco visual quando depende apenas de explicações teóricas ou imagens estáticas, dificultando a compreensão da organização interna de um computador.',
    solution:
      'Aplicação mobile com recursos de realidade aumentada para tornar o aprendizado mais interativo, visual e próximo da prática.',
    methodology:
      'Scrum, com divisão de responsabilidades, organização por etapas, validação do protótipo e acompanhamento contínuo das entregas do TCC.',
    challenge:
      'Entender a finalidade didática do projeto e integrar tecnologias que ainda estavam em aprendizado, principalmente React Native, Unity, Vuforia, C# e comunicação entre app mobile e ambiente 3D.',
    softSkills: ['Trabalho em equipe', 'Comunicação', 'Gestão de Equipe' ,'Criatividade', 'Organização'],
    softSkillDevelopment:
      'Adquiri essas soft skills durante a organização do TCC, dividindo responsabilidades, validando ideias com o grupo, ajustando a proposta didática e preparando uma solução que precisava ser compreendida também por quem não era da área técnica. Nesse projeto eu consegui desenvolver bem minha softskill de gerenciamento de equipe, por ter conseguido orgazinar e melhorar a performance da equipe',
    role:
      'Participei do desenvolvimento do aplicativo mobile, da integração com o ambiente de realidade aumentada e da organização da experiência didática do projeto.',
    results:
      'Protótipo funcional apresentado como TCC técnico em Desenvolvimento de Sistemas, com foco em educação tecnológica e uso de modelos 3D.',
    techs: ['React Native', 'Unity', 'Vuforia', 'C#', 'Firebase'],
    imageUrl: '/projects/rardware.jpeg',
    deployUrl: 'https://youtube.com/shorts/3gZU5ezltcM',
    repoUrl: 'https://github.com/JoaooMoura/TCC---RArdware',
    featured: true,
  },
  {
    id: 3,
    title: 'API 2º Semestre - Newe CRM',
    category: 'Acadêmico',
    type: 'Projeto Integrador FATEC',
    description:
      'Plataforma de gestão administrativa, comercial e operacional criada para centralizar processos internos, clientes, eventos, checklists, cotações, certificados e funil de vendas.',
    problem:
      'Processos administrativos e comerciais dispersos dificultam o acompanhamento de informações, a geração de relatórios e a padronização da rotina interna.',
    solution:
      'Sistema web integrado com módulos de clientes, colaboradores, eventos, certificados, cotações, checklists, agenda, gráficos e funil comercial.',
    methodology:
      'Scrum, com backlog, sprints, divisão de tarefas por módulos, entregas incrementais e colaboração entre front-end, back-end e banco de dados.',
    challenge:
      'Compreender o motivo de cada fluxo de negócio do CRM e transformar necessidades administrativas em telas úteis, enquanto aprofundava React, TypeScript, Node.js e integração com banco de dados.',
    softSkills: ['Colaboração', 'Organização', 'Comunicação'],
    softSkillDevelopment:
      'Desenvolvi essas habilidades ao trabalhar em vários módulos do CRM, alinhar requisitos com a equipe, adaptar telas conforme as necessidades do projeto e organizar entregas incrementais dentro das sprints.',
    role:
      'Atuei principalmente no front-end e em funcionalidades full stack, implementando telas, filtros, gráficos, geração de certificados em PDF, cotações, agenda pessoal, checklists operacionais e correções de bugs.',
    results:
      'Sistema funcional para apoio à gestão empresarial, com centralização de dados e recursos de visualização para tomada de decisão.',
    techs: ['React', 'TypeScript', 'Node.js', 'Express', 'MySQL', 'Recharts'],
    imageUrl: '/projects/api2.png',
    deployUrl: 'https://github.com/Team-Chronos/API-DSM-2SEMESTRE-2025',
    repoUrl: 'https://github.com/Team-Chronos/API-DSM-2SEMESTRE-2025',
    featured: true,
  },
  {
    id: 4,
    title: 'API 1º Semestre - Monitoramento de Importação e Exportação',
    category: 'Acadêmico',
    type: 'Projeto Integrador FATEC',
    description:
      'Sistema web para análise de dados de importação e exportação no estado de São Paulo, com tabelas, filtros e gráficos para interpretação de informações comerciais.',
    problem:
      'Dados de importação e exportação podem ser difíceis de interpretar quando não estão organizados em visualizações acessíveis e comparáveis.',
    solution:
      'Aplicação web com interface informativa, filtros, tabelas e gráficos para consulta de tendências por município, produto, período e movimentação comercial.',
    methodology:
      'Scrum, com desenvolvimento em equipe, divisão das funcionalidades por sprint, validação das entregas e versionamento do código no GitHub.',
    challenge:
      'Entender o significado dos dados comerciais e o objetivo das visualizações antes de montar telas, gráficos e tabelas, além de evoluir no uso de HTML, CSS, JavaScript, Python e Flask.',
    softSkills: ['Aprendizado rápido', 'Trabalho em equipe', 'Comunicação'],
    softSkillDevelopment:
      'Por ser o primeiro Projeto Integrador, desenvolvi essas habilidades ao aprender a trabalhar com Scrum, interpretar dados de importação e exportação, alinhar decisões de interface com o grupo e revisar detalhes de tabelas, filtros e gráficos.',
    role:
      'Atuei no front-end, construindo estrutura visual, tabelas, gráficos, navbar, footer, semântica HTML, estilização e melhorias de usabilidade.',
    results:
      'Entrega de uma aplicação web funcional para análise visual de dados comerciais, desenvolvida em equipe com metodologia Scrum.',
    techs: ['HTML', 'CSS', 'JavaScript', 'Python', 'Flask', 'MySQL'],
    imageUrl: '/projects/api.jpg',
    deployUrl: 'https://github.com/Team-Chronos/API-DSM-1SEMESTRE-2025',
    repoUrl: 'https://github.com/Team-Chronos/API-DSM-1SEMESTRE-2025',
    featured: false,
  },
  {
    id: 5,
    title: 'Aerocode - AV3 Técnicas de Programação I',
    category: 'Acadêmico',
    type: 'Projeto Acadêmico Individual',
    description:
      'Sistema web full stack para gestão e monitoramento de aeronaves, com CRUD, autenticação, dashboard com gráficos, relatórios em PDF, métricas de performance e testes de carga.',
    problem:
      'O controle de aeronaves, peças e etapas de manutenção exige organização das informações e visualização clara de indicadores operacionais.',
    solution:
      'Aplicação full stack com autenticação, gerenciamento de entidades, dashboard, relatórios e validações para acompanhamento técnico.',
    methodology:
      'Scrum aplicado à organização individual do projeto, com divisão por etapas, priorização de funcionalidades e evolução incremental da solução.',
    challenge:
      'Entender a finalidade de cada entidade e regra de negócio do domínio de aeronaves, além de consolidar React, TypeScript, Node.js, Prisma, banco de dados e geração de relatórios.',
    softSkills: ['Autonomia', 'Organização', 'Resolução de problemas'],
    softSkillDevelopment:
      'Por ser um projeto individual, precisei organizar o escopo, priorizar funcionalidades, estudar ferramentas novas e resolver problemas técnicos sem depender de uma equipe direta, fortalecendo disciplina e tomada de decisão.',
    role:
      'Desenvolvi a aplicação com foco em organização de código, regras de negócio, integração com banco de dados e construção de interface administrativa.',
    results:
      'Projeto acadêmico robusto que demonstra evolução em desenvolvimento full stack, modelagem de dados, autenticação e análise de desempenho.',
    techs: ['React', 'TypeScript', 'Node.js', 'Prisma', 'MySQL'],
    imageUrl: '/projects/AV3.png',
    deployUrl: 'https://av-3-six.vercel.app',
    repoUrl: 'https://github.com/JoaooMoura/av3',
    featured: true,
  },
  {
    id: 6,
    title: 'Atlantis - AV3/AV4 Técnicas de Programação II',
    category: 'Acadêmico',
    type: 'Projeto Acadêmico Individual',
    description:
      'Sistema acadêmico de hospedagem desenvolvido em duas etapas: back-end em TypeScript/CLI e front-end SPA para gerenciamento de hóspedes, acomodações, hospedagens e regras de negócio.',
    problem:
      'Sistemas de hospedagem exigem organização de cadastros, vínculos entre clientes e acomodações, regras de negócio e separação clara de responsabilidades.',
    solution:
      'Back-end CLI com estrutura orientada a domínio e front-end SPA para navegação entre entidades, aplicando conceitos de padrões de projeto e organização de código.',
    methodology:
      'Scrum aplicado ao planejamento individual, com separação por etapas, evolução do back-end para o front-end e organização incremental das funcionalidades.',
    challenge:
      'Compreender o porquê das regras de hospedagem e dos padrões de projeto antes de aplicar a solução, além de evoluir na componentização com React e na organização do código TypeScript.',
    softSkills: ['Pensamento analítico', 'Autonomia', 'Organização', 'Criatividade'],
    softSkillDevelopment:
      'Desenvolvi essas competências ao analisar regras de domínio, aplicar padrões de projeto, separar responsabilidades entre back-end e front-end e manter uma evolução organizada entre as etapas AV3 e AV4.',
    role:
      'Desenvolvi a estrutura do back-end e a interface front-end, trabalhando com organização de classes, componentes, fluxo de navegação e representação das regras do domínio.',
    results:
      'Projeto que evidencia aplicação prática de padrões de projeto, componentização e evolução de uma solução acadêmica do back-end para o front-end.',
    techs: ['TypeScript', 'React', 'CSS', 'Padrões de Projeto'],
    imageUrl: '/projects/atlantis.png',
    deployUrl: '',
    repoUrl: 'https://github.com/JoaooMoura/av4-tpii',
    featured: false,
  },
  {
    id: 7,
    title: 'Ragnarok Store - E-commerce Temático',
    category: 'Pessoal',
    type: 'Projeto Pessoal',
    description:
      'Projeto de e-commerce responsivo inspirado no universo de Ragnarok Online, com foco em usabilidade, navegação intuitiva e organização visual dos produtos.',
    problem:
      'Lojas virtuais precisam de interfaces claras, responsivas e com fluxo de navegação simples para facilitar a experiência de compra.',
    solution:
      'Interface web com listagem de produtos, organização visual, carrinho, filtros e adaptação para diferentes tamanhos de tela.',
    methodology:
      'Scrum aplicado à organização pessoal do desenvolvimento, com divisão das funcionalidades por etapas, revisão visual e melhoria incremental.',
    challenge:
      'Entender o fluxo de navegação esperado em uma loja virtual e praticar React, TypeScript, Tailwind CSS e Firebase em um projeto com foco em experiência do usuário.',
    softSkills: ['Criatividade', 'Autonomia', 'Atenção ao usuário', 'Organização visual'],
    softSkillDevelopment:
      'Aprimorei essas habilidades ao planejar a experiência de compra, organizar produtos e componentes, testar diferentes soluções visuais e ajustar a interface pensando na clareza para o usuário final.',
    role:
      'Desenvolvi a interface e a experiência de navegação, aplicando React, TypeScript e estilização responsiva.',
    results:
      'Projeto pessoal utilizado para praticar front-end moderno, organização de componentes e experiência de usuário.',
    techs: ['React', 'TypeScript', 'Tailwind CSS', 'Firebase'],
    imageUrl: '/projects/ragnarok.PNG',
    deployUrl: 'https://joaoomoura.github.io/ragnarok-store-web/',
    repoUrl: 'https://github.com/JoaooMoura/ragnarok-store-web',
    featured: false,
  },
  {
    id: 8,
    title: 'SharkAnimes - Plataforma Web de Streaming',
    category: 'Pessoal',
    type: 'Projeto Pessoal',
    description:
      'Projeto front-end desenvolvido com foco em interface moderna e navegação fluida para consumo de conteúdo, com busca, categorização e organização visual.',
    problem:
      'Plataformas de conteúdo precisam organizar grandes volumes de informações de forma visualmente clara e fácil de navegar.',
    solution:
      'Aplicação front-end com busca, categorização por gênero e componentes visuais para navegação dinâmica.',
    methodology:
      'Scrum aplicado à organização pessoal do projeto, com backlog de funcionalidades, entregas por partes e ajustes incrementais na interface.',
    challenge:
      'Entender a finalidade de busca, categorização e organização de conteúdo em uma plataforma de streaming, praticando React, TypeScript e integração com API.',
    softSkills: ['Criatividade', 'Autonomia', 'Organização'],
    softSkillDevelopment:
      'Desenvolvi essas soft skills ao estudar referências de interface, organizar conteúdos por categoria, ajustar a navegação e evoluir o projeto de forma independente com base em testes e melhorias incrementais.',
    role:
      'Desenvolvi a interface, organização de componentes e integração de dados para exibição de conteúdos.',
    results:
      'Projeto pessoal voltado à prática de React, TypeScript, consumo de API e construção de interfaces modernas.',
    techs: ['React', 'TypeScript', 'API Integration', 'Styled Components'],
    imageUrl: '/projects/SharkAnimes.png',
    deployUrl: 'https://joaoomoura.github.io/SharkAnimes/',
    repoUrl: 'https://github.com/JoaooMoura/SharkAnimes',
    featured: false,
  },
];

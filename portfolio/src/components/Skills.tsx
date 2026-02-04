import React from 'react';
import { 
  SiJavascript, 
  SiCss3, 
  SiHtml5, 
  SiPython, 
  SiPhp, 
  SiMysql, 
  SiPrisma,
  SiCanva,
  SiAndroidstudio,
  SiUnity,
  SiFigma,
  SiGit,
  SiGithub
} from 'react-icons/si';

// Importando ícones alternativos (Tabler Icons) para evitar erros de versão
import { 
  TbBrandCSharp, 
  TbBrandVisualStudio, 
  TbBrandVscode 
} from 'react-icons/tb';

export default function Skills() {
  const technologies = [
    { name: 'JavaScript', icon: SiJavascript, hoverColor: 'group-hover:text-yellow-400' },
    { name: 'CSS3', icon: SiCss3, hoverColor: 'group-hover:text-blue-500' },
    { name: 'HTML5', icon: SiHtml5, hoverColor: 'group-hover:text-orange-500' },
    { name: 'C#', icon: TbBrandCSharp, hoverColor: 'group-hover:text-purple-600' },
    { name: 'Python', icon: SiPython, hoverColor: 'group-hover:text-blue-400' },
    { name: 'PHP', icon: SiPhp, hoverColor: 'group-hover:text-indigo-500' },
    { name: 'MySQL', icon: SiMysql, hoverColor: 'group-hover:text-blue-600' },
    { name: 'Prisma', icon: SiPrisma, hoverColor: 'group-hover:text-teal-400' },
  ];

  const tools = [
    { name: 'Canva', icon: SiCanva, hoverColor: 'group-hover:text-cyan-400' },
    { name: 'VS Code', icon: TbBrandVscode, hoverColor: 'group-hover:text-blue-500' }, // Ícone trocado para segurança
    { name: 'Visual Studio', icon: TbBrandVisualStudio, hoverColor: 'group-hover:text-purple-700' }, // Ícone trocado para segurança
    { name: 'Android Studio', icon: SiAndroidstudio, hoverColor: 'group-hover:text-green-500' },
    { name: 'Unity', icon: SiUnity, hoverColor: 'group-hover:text-gray-300' },
    { name: 'Figma', icon: SiFigma, hoverColor: 'group-hover:text-pink-500' },
    { name: 'Git', icon: SiGit, hoverColor: 'group-hover:text-orange-600' },
    { name: 'GitHub', icon: SiGithub, hoverColor: 'group-hover:text-white' },
  ];

  return (
    <section id="skills" className="py-32 px-6 border-t border-white/10 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 via-transparent to-blue-900/10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/20 rounded-full blur-[150px]" />
      
      <div className="container mx-auto max-w-7xl relative z-10">
        
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">Habilidades</h2>
          <p className="text-gray-400 text-lg">Tecnologias e ferramentas que domino</p>
        </div>
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-white mb-10 text-center flex items-center justify-center gap-3">
             <span className="w-2 h-8 bg-purple-500 rounded-full inline-block"></span>
             Tecnologias
          </h3>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {technologies.map((skill) => {
              const Icon = skill.icon;
              return (
                <div key={skill.name} className="group relative">
                  <div className="
                    backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5 
                    border border-white/20 rounded-3xl p-6 
                    hover:bg-white/15 hover:border-white/30 hover:-translate-y-2 
                    transition-all duration-300 
                    shadow-xl hover:shadow-2xl hover:shadow-purple-500/10
                    shadow-[inset_0_0_30px_rgba(255,255,255,0.05)] 
                    flex items-center justify-center aspect-square cursor-pointer
                  ">
                    <Icon className={`text-6xl text-gray-400 ${skill.hoverColor} transition-colors duration-300`} />
                  </div>
                  
                  <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-20">
                    <div className="backdrop-blur-md bg-black/80 border border-white/10 rounded-xl px-4 py-2 whitespace-nowrap shadow-lg">
                      <p className="text-white text-sm font-medium">{skill.name}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div>
          <h3 className="text-3xl font-bold text-white mb-10 text-center flex items-center justify-center gap-3">
             <span className="w-2 h-8 bg-blue-500 rounded-full inline-block"></span>
             Ferramentas
          </h3>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {tools.map((skill) => {
              const Icon = skill.icon;
              return (
                <div key={skill.name} className="group relative">
                  <div className="
                    backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5 
                    border border-white/20 rounded-3xl p-6 
                    hover:bg-white/15 hover:border-white/30 hover:-translate-y-2 
                    transition-all duration-300 
                    shadow-xl hover:shadow-2xl hover:shadow-blue-500/10
                    shadow-[inset_0_0_30px_rgba(255,255,255,0.05)] 
                    flex items-center justify-center aspect-square cursor-pointer
                  ">
                    <Icon className={`text-6xl text-gray-400 ${skill.hoverColor} transition-colors duration-300`} />
                  </div>
                  
                  <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-20">
                    <div className="backdrop-blur-md bg-black/80 border border-white/10 rounded-xl px-4 py-2 whitespace-nowrap shadow-lg">
                      <p className="text-white text-sm font-medium">{skill.name}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
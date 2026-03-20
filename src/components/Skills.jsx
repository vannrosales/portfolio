const Skills = () => {
  const skillCategories = [
    {
      category: "Programming Languages",
      skills: [
        { name: "PHP", level: 100, color: "bg-red-400" },
        { name: "JavaScript", level: 90, color: "bg-yellow-400" },
        { name: "Python", level: 80, color: "bg-green-400" },
        { name: "Java", level: 70, color: "bg-blue-400" },
        { name: "C#", level: 70,color: "bg-purple-400" },
        { name: "C", level: 70,color: "bg-purple-400" }
      ]
    },
    {
      category: "Frameworks & Libraries",
      skills: [
        { name: "Laravel PHP", level: 100, color: "bg-red-400" },
        { name: "CodeIgniter 4", level: 100, color: "bg-red-400" },
        { name: "Tailwind CSS", level: 85, color: "bg-teal-400" },
        { name: "React.JS", level: 80, color: "bg-cyan-400" }, 
        { name: "Vue.JS", level: 80, color: "bg-green-400" },
        { name: "Bootstrap", level: 75, color: "bg-purple-400" }
      ]
    }
  ];

  return (
    <div className="bg-[#212121] border-4 border-black p-6 md:p-10 shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] animate-in fade-in zoom-in-95 duration-300">
      <div className="flex items-center gap-4 mb-10">
        <h2 className="text-2xl font-bold uppercase text-yellow-400 tracking-tighter">Skill Tree</h2>
        <div className="h-1 flex-grow bg-gray-800 border-b-2 border-gray-700"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-12">
        {skillCategories.map((cat, i) => (
          <div key={i} className="space-y-8">
            <h3 className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.3em] border-l-4 border-yellow-400 pl-3">
              {cat.category}
            </h3>
            
            <div className="space-y-6">
              {cat.skills.map((skill) => (
                <div key={skill.name} className="group">
                  <div className="flex justify-between items-end mb-1">
                    <span className="text-white font-bold uppercase text-xs tracking-tight group-hover:text-yellow-400 transition-colors">
                      {skill.level === 100 ? '★ ' : '> '} {skill.name}
                    </span>
                    <span className={`text-[9px] font-mono ${skill.level === 100 ? 'text-yellow-400 animate-pulse' : 'text-gray-500'}`}>
                      {skill.level === 100 ? 'MAX LVL' : `${skill.level}/100 XP`}
                    </span>
                  </div>
                  
                  {/* Pixelated Progress Bar Container */}
                  <div className="h-5 bg-black border-2 border-gray-700 p-0.5 relative overflow-hidden">
                    <div 
                      className={`h-full ${skill.color} transition-all duration-[1500ms] ease-out shadow-[inset_-4px_0px_0px_rgba(0,0,0,0.2)]`}
                      style={{ width: `${skill.level}%` }}
                    >
                      {/* CRT Scanline effect layer */}
                      <div className="w-full h-full opacity-30 bg-[linear-gradient(90deg,transparent_50%,rgba(0,0,0,0.5)_50%)] bg-[length:6px_100%]"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Passive Skills / Sub-Stats */}
      <div className="mt-16 pt-8 border-t-2 border-gray-800 flex flex-wrap gap-4 justify-center md:justify-start">
        <div className="bg-gray-900 border-2 border-gray-700 px-4 py-2 flex items-center gap-3">
          <div className="w-2 h-2 bg-green-500 animate-ping"></div>
          <span className="text-[10px] uppercase font-bold text-gray-400 italic">Backend Specialist +20 ATK</span>
        </div>
        <div className="bg-gray-900 border-2 border-gray-700 px-4 py-2 flex items-center gap-3">
          <div className="w-2 h-2 bg-blue-500 animate-ping"></div>
          <span className="text-[10px] uppercase font-bold text-gray-400 italic">Frontend Sorcery +15 SPD</span>
        </div>
      </div>
    </div>
  );
};

export default Skills;
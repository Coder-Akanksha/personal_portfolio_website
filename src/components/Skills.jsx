import React from 'react';
import { FaCode, FaLaptopCode, FaDatabase, FaTools, FaBook } from 'react-icons/fa';

const Skills = () => {
  // Categorized skills data straight from your resume
  const skillsData = [
    {
      category: "Programming Languages",
      icon: <FaCode />,
      skills: ["Java", "Python", "JavaScript", "SQL"]
    },
    {
      category: "Frontend Web Tools",
      icon: <FaLaptopCode />,
      skills: ["React.js", "HTML5", "CSS3", "TailwindCSS"]
    },
    {
      category: "Backend Frameworks",
      icon: <FaTools />,
      skills: ["Node.js", "Express.js"]
    },
    {
      category: "Databases & Storage",
      icon: <FaDatabase />,
      skills: ["MongoDB", "MySQL"]
    },
    {
      category: "Core CS Subjects",
      icon: <FaBook />,
      skills: ["Data Structures & Algorithms (DSA)", "OOPS", "DBMS", "Operating Systems", "Computer Networks"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-slate-950 text-white px-6 relative border-t border-slate-900">
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-2">
            Technical <span className="text-cyan-400">Skills</span>
          </h2>
          <div className="w-16 h-1 bg-cyan-500 mx-auto rounded-full"></div>
          <p className="text-slate-400 text-sm mt-4 max-w-md mx-auto">
            A comprehensive overview of my technical proficiencies, development frameworks, and core computer science fundamentals.
          </p>
        </div>

        {/* Skills Layout Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.map((item, index) => (
            <div 
              key={index}
              className="bg-slate-900/40 border border-slate-800/80 p-6 rounded-2xl backdrop-blur-sm hover:border-cyan-500/30 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                {/* Header Icon + Title */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2.5 bg-cyan-950/50 border border-cyan-800/40 text-cyan-400 rounded-xl group-hover:bg-cyan-500 group-hover:text-slate-950 transition-colors duration-300 text-base">
                    {item.icon}
                  </div>
                  <h3 className="text-base font-bold text-slate-100 tracking-wide">
                    {item.category}
                  </h3>
                </div>

                {/* Skill Badges/Chips */}
                <div className="flex flex-wrap gap-2">
                  {item.skills.map((skill, sIdx) => (
                    <span 
                      key={sIdx}
                      className="text-xs font-medium px-3 py-1.5 bg-slate-950 border border-slate-800/60 hover:border-slate-700 text-slate-300 rounded-lg tracking-wide transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
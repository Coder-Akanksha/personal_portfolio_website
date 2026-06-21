import React from 'react';
import { FaGithub, FaExternalLinkAlt, FaFolderOpen, FaGraduationCap, FaClipboardList, FaCheckCircle } from 'react-icons/fa';

const Projects = () => {
  const projectsData = [
    {
      title: "Student Management System",
      description: "Developed a full-stack Student Management System using MongoDB, Express.js, React.js, and Node.js for seamless data flow.",
      points: [
        "Engineered RESTful APIs with Express.js to handle robust CRUD operations.",
        "Optimized data management by integrating MongoDB for efficient student record retrieval."
      ],
      tags: ["MongoDB", "Express.js", "React.js", "Node.js"],
      githubLink: "https://github.com/Coder-Akanksha/Student_Managment_System",
      liveLink: "#",
      icon: <FaFolderOpen />
    },
    {
      title: "Smart Student Dashboard",
      description: "Developed a centralized academic dashboard enabling users to manage tasks, notes, and institutional study resources.",
      points: [
        "Designed fully responsive web interfaces using clean CSS architectures.",
        "Implemented complex state management features for interactive task organization."
      ],
      tags: ["React.js", "CSS3", "State Architecture", "UI Design"],
      githubLink: "https://github.com/Coder-Akanksha/Smart-Student-Dashboard",
      liveLink: "#",
      icon: <FaClipboardList className="text-cyan-400" />
    },
    {
      title: "Student Complaint Portal",
      description: "Designed and developed a web-based complaint management system to streamline issues between students and administrators.",
      points: [
        "Implemented real-time complaint submission modules and distinct tracking rows.",
        "Structured backend database operations to ensure secure logging and query handling."
      ],
      tags: ["Full-Stack", "Relational DB", "Dashboard Control", "Backend Logic"],
      githubLink: "https://github.com/Coder-Akanksha/student-complaint-portal",
      liveLink: "#",
      icon: <FaGraduationCap className="text-purple-400" />
    }
  ];

  return (
    <section id="projects" className="py-20 bg-slate-950 text-white px-6 relative border-t border-slate-900">
      <div className="max-w-6xl mx-auto relative z-10">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-2">
            Featured <span className="text-cyan-400">Projects</span>
          </h2>
          <div className="w-16 h-1 bg-cyan-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projectsData.map((project, idx) => (
            <div 
              key={idx}
              className="bg-slate-900/40 border border-slate-800/70 p-6 rounded-2xl backdrop-blur-sm hover:border-cyan-500/20 hover:-translate-y-1 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-center mb-5">
                  <div className="text-2xl text-cyan-500/80 group-hover:text-cyan-400 transition-colors">
                    {project.icon}
                  </div>
                  <div className="flex gap-4 text-slate-400 text-base">
                    <a href={project.githubLink} target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-colors">
                      <FaGithub />
                    </a>
                    <a href={project.liveLink} className="hover:text-cyan-400 transition-colors">
                      <FaExternalLinkAlt className="text-sm" />
                    </a>
                  </div>
                </div>

                <h3 className="text-base font-bold text-slate-100 group-hover:text-cyan-400 transition-colors mb-2">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-xs sm:text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Highly Informative Core Bullet Points */}
                <ul className="space-y-2 mb-6 border-t border-slate-900 pt-3">
                  {project.points.map((pt, pIdx) => (
                    <li key={pIdx} className="flex gap-2 text-xs text-slate-400 items-start">
                      <FaCheckCircle className="text-cyan-500 text-[10px] mt-0.5 flex-shrink-0" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-800/40">
                {project.tags.map((tag, tIdx) => (
                  <span 
                    key={tIdx}
                    className="text-[9px] font-mono font-medium px-2 py-0.5 bg-slate-950 border border-slate-800 text-cyan-400 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
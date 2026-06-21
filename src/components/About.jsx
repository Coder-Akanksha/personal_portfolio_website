import React from 'react';
import { FaGraduationCap } from 'react-icons/fa';

const About = () => {
  const educationData = [
    {
      degree: "Bachelor of Technology (B.Tech), Computer Science Engineering",
      institution: "IMS Engineering College, Ghaziabad",
      duration: "2023 - 2027",
      score: "CGPA: 7.5/10",
      details: "Core Focus: Data Structures & Algorithms (DSA), Object-Oriented Programming (OOPS), Database Management Systems (DBMS), Operating Systems, and Computer Networks."
    },
    {
      degree: "Class 12th (Intermediate) — PCM",
      institution: "KPIC Inter College",
      duration: "2022 - 2023",
      score: "81%",
      details: "Specialized in Physics, Chemistry, and Mathematics (PCM stream) with solid logical and core analytics fundamentals."
    },
    {
      degree: "Class 10th (High School) — Science Stream",
      institution: "KPIC Inter College",
      duration: "2020 - 2021",
      score: "86%",
      details: "General Science stream curriculum focusing on foundational mathematics, science structures, and logical reasoning modules."
    }
  ];

  return (
    <section id="about" className="py-20 bg-slate-950 text-white px-6 relative">
      <div className="max-w-6xl mx-auto z-10 relative">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-2">
            About Me & <span className="text-cyan-400">Education</span>
          </h2>
          <div className="w-16 h-1 bg-cyan-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Brief Bio Card */}
          <div className="lg:col-span-4 bg-slate-900/40 border border-slate-800/80 p-6 rounded-2xl backdrop-blur-sm">
            <h3 className="text-xl font-bold text-slate-100 mb-4">Who I Am</h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-4">
              I am a dedicated Computer Science undergraduate passionate about building efficient backend architectures and clean, responsive user interfaces. 
            </p>
            <p className="text-slate-400 text-sm leading-relaxed">
              With a strong foundation in Java and structural database management, I enjoy converting logical problem statements into production-ready full-stack applications.
            </p>
          </div>

          {/* Right Column: Clean Vertical Timeline Grid */}
          <div className="lg:col-span-8 space-y-6">
            {educationData.map((edu, index) => (
              <div 
                key={index} 
                className="relative group bg-slate-900/30 hover:bg-slate-900/60 border border-slate-800/60 hover:border-cyan-500/30 p-6 rounded-2xl transition-all duration-300 flex gap-4 items-start"
              >
                {/* Icon Hub */}
                <div className="p-3 bg-cyan-950/40 border border-cyan-800/30 text-cyan-400 rounded-xl mt-1 group-hover:bg-cyan-500 group-hover:text-slate-950 transition-colors duration-300">
                  <FaGraduationCap className="text-lg" />
                </div>

                {/* Content Block */}
                <div className="flex-1">
                  <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
                    <div>
                      <h4 className="text-lg font-bold text-slate-100 group-hover:text-cyan-400 transition-colors">
                        {edu.degree}
                      </h4>
                      <p className="text-slate-400 text-sm font-medium">{edu.institution}</p>
                    </div>
                    <div className="text-right">
                      <span className="inline-block text-xs font-mono px-2.5 py-1 bg-slate-800/80 text-cyan-400 rounded-md mb-1 border border-slate-700/50">
                        {edu.duration}
                      </span>
                      <p className="text-sm font-bold text-emerald-400">{edu.score}</p>
                    </div>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed border-t border-slate-800/60 pt-2 mt-2">
                    {edu.details}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default About;
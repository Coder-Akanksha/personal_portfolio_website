import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { SiLeetcode, SiGeeksforgeeks } from 'react-icons/si';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-slate-950 text-white px-6 pt-20 relative overflow-hidden selection:bg-cyan-500/30">
      
      {/* Creative Design Element 1: Subtle Digital Tech Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-60"></div>
      
      {/* Creative Design Element 2: Ambient Glowing Radials */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none animate-pulse duration-[6000ms]"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none animate-pulse duration-[8000ms]"></div>

      <div className="max-w-5xl w-full flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
        
        {/* Left Side: Layout Updated with Glowing Accents */}
        <div className="space-y-6 max-w-2xl flex-1 text-center md:text-left">
          
          {/* Cyber Status Badge Wrap */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-slate-900 border border-slate-800 text-cyan-400 text-xs font-mono tracking-widest uppercase relative group overflow-hidden">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
            <span>Computer Science Student</span>
          </div>
          
          {/* High-Contrast Gradient Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-slate-100 leading-none">
            Hi, I'm <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 drop-shadow-[0_2px_10px_rgba(34,211,238,0.15)]">Akanksha Maurya</span>
          </h1>
          
          {/* Subtitle with Minimalist Cyan Line Indicator */}
          <div className="flex items-center justify-center md:justify-start gap-3">
            <div className="hidden md:block w-8 h-[2px] bg-cyan-500"></div>
            <p className="text-base sm:text-lg font-medium text-slate-300 tracking-wide">
              Passionate about coding, web development, and logic building.
            </p>
          </div>
          
          {/* Main Content Paragraph */}
          <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-xl mx-auto md:mx-0">
            I am a final-year student at IMS Engineering College (2023-2027) who loves building practical applications using Java and the MERN stack. I enjoy solving logical problems and have practiced over 225+ challenges on platforms like LeetCode and GFG.
          </p>

          {/* Kinetic Social Action Matrix Boxes */}
          <div className="flex gap-4 justify-center md:justify-start pt-2">
            {[
              { icon: <FaGithub />, url: "https://github.com/Coder-Akanksha", label: "GitHub" },
              { icon: <FaLinkedin />, url: "https://linkedin.com", label: "LinkedIn" },
              { icon: <FaEnvelope />, url: "mailto:Shivi.aka1810@gmail.com", label: "Email" },
              { icon: <SiLeetcode />, url: "https://leetcode.com", label: "LeetCode" },
              { icon: <SiGeeksforgeeks />, url: "https://geeksforgeeks.org", label: "GeeksforGeeks" }
            ].map((node, i) => (
              <a 
                key={i}
                href={node.url} 
                target="_blank" 
                rel="noreferrer" 
                title={node.label}
                className="w-10 h-10 rounded-xl bg-slate-900/60 border border-slate-800/80 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-500/30 hover:-translate-y-1 hover:shadow-[0_4px_12px_rgba(6,182,212,0.15)] transition-all duration-300 ease-out"
              >
                {node.icon}
              </a>
            ))}
          </div>

          {/* Micro-Interactive Button Grids */}
          <div className="flex flex-wrap gap-4 justify-center md:justify-start items-center pt-3">
            <a 
              href="#projects" 
              className="relative px-6 py-3 overflow-hidden font-bold rounded-xl text-xs sm:text-sm text-slate-950 bg-cyan-400 shadow-lg shadow-cyan-500/10 hover:shadow-cyan-400/30 group transition-all duration-300 hover:-translate-y-0.5"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-500 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out"></span>
              <span className="relative z-10 flex items-center gap-1">See My Work</span>
            </a>
            
            <a 
              href="#contact" 
              className="px-6 py-3 bg-slate-900/40 backdrop-blur-sm border border-slate-800 text-slate-300 hover:text-white hover:border-cyan-500/30 rounded-xl text-xs sm:text-sm transition-all duration-300 hover:-translate-y-0.5"
            >
              Get In Touch
            </a>
          </div>
        </div>

        {/* Right Side: Abstract Tech Shell with Custom Glowing Logo */}
        <div className="w-full max-w-[260px] sm:max-w-[280px] aspect-square flex-shrink-0 relative group">
          
          <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500 to-blue-600 rounded-2xl opacity-10 group-hover:opacity-30 blur-xl transition-all duration-500 group-hover:scale-110"></div>
          
          <div className="relative w-full h-full bg-slate-900/80 backdrop-blur-md border border-slate-800/60 group-hover:border-cyan-500/30 rounded-2xl flex flex-col items-center justify-center p-6 text-center shadow-2xl transition-all duration-500 group-hover:-translate-y-1.5">
            
            {/* New Glowing Neon Logo */}
            <div className="w-20 h-20 rounded-2xl bg-slate-950 border border-slate-800 flex items-center justify-center relative overflow-hidden group-hover:border-cyan-400/50 transition-all duration-500 shadow-xl group-hover:shadow-[0_0_20px_rgba(6,182,212,0.3)]">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent"></div>
              <span className="text-3xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-tr from-cyan-400 to-blue-500 transform group-hover:scale-110 transition-transform duration-500">AM</span>
              <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(6,182,212,0.05)_50%)] bg-[length:100%_4px] pointer-events-none"></div>
            </div>
            
            <div className="mt-5 space-y-1">
              <div className="w-12 h-[2px] bg-slate-800 mx-auto rounded group-hover:bg-cyan-500/40 transition-colors duration-500"></div>
              <p className="text-[11px] font-mono text-slate-500 group-hover:text-slate-400 transition-colors pt-2 px-1">
                [ Place profile image inside <span className="text-cyan-400 font-bold">src/assets/</span> ]
              </p>
            </div>

            {/* Futuristic Tech Frame Corner Anchors */}
            <div className="absolute top-3 left-3 w-1.5 h-1.5 border-t border-l border-slate-700 group-hover:border-cyan-500 transition-colors"></div>
            <div className="absolute top-3 right-3 w-1.5 h-1.5 border-t border-r border-slate-700 group-hover:border-cyan-500 transition-colors"></div>
            <div className="absolute bottom-3 left-3 w-1.5 h-1.5 border-b border-l border-slate-700 group-hover:border-cyan-500 transition-colors"></div>
            <div className="absolute bottom-3 right-3 w-1.5 h-1.5 border-b border-r border-slate-700 group-hover:border-cyan-500 transition-colors"></div>
            
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
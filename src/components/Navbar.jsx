import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-slate-900 border-b border-slate-800 py-4 px-6 flex justify-between items-center z-50">
      <div className="text-xl font-bold text-cyan-400">AM.</div>
      <div className="flex gap-6 text-sm text-slate-300">
        <a href="#about" className="hover:text-cyan-400 transition-colors">About</a>
        <a href="#skills" className="hover:text-cyan-400 transition-colors">Skills</a>
        <a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a>
        <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
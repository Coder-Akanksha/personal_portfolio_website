import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import CodingStats from './components/CodingStats';
import Certifications from './components/Certifications'; // <-- 1. Import checking
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-x-hidden antialiased">
      
      {/* Navigation Layer */}
      <Navbar />
      
      <main>
        {/* Hero Banner Grid */}
        <Hero />
        
        {/* Education Timeline Hub */}
        <About />
        
        {/* Technical Core Skills */}
        <Skills />
        
        {/* LeetCode & GFG Counters */}
        <CodingStats />
        
        {/* 🚨 FIX: Is component tag ko yahan call hona bohot zaroori tha */}
        <Certifications />
        
        {/* Live Functional Projects */}
        <Projects />
        
        {/* Connect Panel Footer */}
        <Contact />
      </main>

    </div>
  );
}

export default App;
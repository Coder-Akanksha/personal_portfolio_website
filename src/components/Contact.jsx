import React from 'react';
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-slate-950 text-white px-6 relative border-t border-slate-900">
      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-2">
            Let's <span className="text-cyan-400">Connect</span>
          </h2>
          <div className="w-16 h-1 bg-cyan-500 mx-auto rounded-full"></div>
          <p className="text-slate-400 text-sm mt-4">
            Opportunities or queries? Feel free to reach out directly through any platform!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-12">
          
          {/* Left Side: Contact Direct Credentials */}
          <div className="space-y-6 bg-slate-900/30 border border-slate-800/60 p-6 rounded-2xl backdrop-blur-sm">
            <h3 className="text-xl font-bold text-slate-100 mb-4">Contact Information</h3>
            
            <div className="flex items-center gap-4 text-slate-300">
              <div className="p-3 bg-slate-950 border border-slate-800 text-cyan-400 rounded-xl">
                <FaEnvelope />
              </div>
              <div>
                <p className="text-xs text-slate-500 font-mono">EMAIL ME</p>
                <a href="mailto:Shivi.aka1810@gmail.com" className="text-sm font-medium hover:text-cyan-400 transition-colors">
                  Shivi.aka1810@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4 text-slate-300">
              <div className="p-3 bg-slate-950 border border-slate-800 text-cyan-400 rounded-xl">
                <FaPhone />
              </div>
              <div>
                <p className="text-xs text-slate-500 font-mono">CALL ME</p>
                <a href="tel:+919555823939" className="text-sm font-medium hover:text-cyan-400 transition-colors">
                  +91 9555823939
                </a>
              </div>
            </div>
          </div>

          {/* Right Side: Professional Social Anchors */}
          <div className="bg-slate-900/30 border border-slate-800/60 p-6 rounded-2xl backdrop-blur-sm flex flex-col justify-between h-full">
            <div>
              <h3 className="text-xl font-bold text-slate-100 mb-2">Social Footprints</h3>
              <p className="text-slate-400 text-sm mb-6">I am actively available on LinkedIn for formal talks and GitHub for code updates.</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noreferrer" 
                className="flex items-center justify-center gap-2 py-3 rounded-xl bg-slate-950 hover:bg-slate-900 border border-slate-800 hover:border-cyan-500/30 text-sm font-medium text-slate-300 hover:text-white transition-all duration-200"
              >
                <FaLinkedin className="text-cyan-400 text-base" /> LinkedIn
              </a>
              <a 
                href="https://github.com/Coder-Akanksha" 
                target="_blank" 
                rel="noreferrer" 
                className="flex items-center justify-center gap-2 py-3 rounded-xl bg-slate-950 hover:bg-slate-900 border border-slate-800 hover:border-cyan-500/30 text-sm font-medium text-slate-300 hover:text-white transition-all duration-200"
              >
                <FaGithub className="text-slate-200 text-base" /> GitHub
              </a>
            </div>
          </div>

        </div>

        {/* Universal Footer Tag */}
        <div className="text-center mt-20 pt-8 border-t border-slate-900 text-xs text-slate-600 font-mono">
          © 2026 Akanksha Maurya. Engineered with React & Tailwind CSS.
        </div>

      </div>
    </section>
  );
};

export default Contact;
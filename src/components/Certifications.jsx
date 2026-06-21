import React from 'react';
import { FaCertificate, FaAward, FaDatabase } from 'react-icons/fa';
import { SiJavascript } from 'react-icons/si';

const Certifications = () => {
  const certs = [
    {
      title: "JavaScript Essentials Certification",
      issuer: "Cisco Networking Academy / Standard Institution",
      icon: <SiJavascript className="text-yellow-400" />,
      date: "Verified Valid"
    },
    {
      title: "SQL Bootcamp Certification",
      issuer: "Udemy Professional Training",
      icon: <FaDatabase className="text-cyan-400" />,
      date: "Verified Valid"
    }
  ];

  return (
    <section id="certifications" className="py-16 bg-slate-950 text-white px-6 relative border-t border-slate-900">
      <div className="max-w-4xl mx-auto relative z-10">
        
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white mb-2">
            Professional <span className="text-cyan-400">Credentials</span>
          </h2>
          <div className="w-12 h-1 bg-cyan-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certs.map((cert, idx) => (
            <div 
              key={idx}
              className="bg-slate-900/30 border border-slate-800/60 p-5 rounded-xl flex items-center gap-4 hover:border-cyan-500/30 transition-all duration-300"
            >
              <div className="p-3 bg-slate-950 border border-slate-800 rounded-lg text-xl">
                {cert.icon}
              </div>
              <div>
                <h3 className="text-sm font-bold text-slate-200 tracking-wide">{cert.title}</h3>
                <p className="text-xs text-slate-500 mt-0.5">{cert.issuer}</p>
                <span className="inline-block text-[10px] font-mono text-emerald-400 bg-emerald-500/5 border border-emerald-500/10 px-2 py-0.5 rounded mt-2">
                  {cert.date}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Certifications;
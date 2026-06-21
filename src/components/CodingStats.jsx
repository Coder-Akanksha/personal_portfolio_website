import React from 'react';
import { SiLeetcode, SiGeeksforgeeks } from 'react-icons/si';
import { FaFire, FaTrophy } from 'react-icons/fa';

const CodingStats = () => {
  const statsData = [
    {
      platform: "LeetCode",
      icon: <SiLeetcode className="text-[#FFA116]" />,
      bgColor: "hover:border-[#FFA116]/30",
      metrics: [
        { label: "Problems Solved", value: "110+" },
        { label: "Contest Rating", value: "1507" }
      ],
      link: "https://leetcode.com"
    },
    {
      platform: "GeeksforGeeks",
      icon: <SiGeeksforgeeks className="text-[#2F8D46]" />,
      bgColor: "hover:border-[#2F8D46]/30",
      metrics: [
        { label: "Problems Solved", value: "117+" },
        { label: "Institute Rank", value: "136" }
      ],
      link: "https://geeksforgeeks.org"
    }
  ];

  return (
    <section id="achievements" className="py-20 bg-slate-950 text-white px-6 relative border-t border-slate-900">
      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-2">
            Coding <span className="text-cyan-400">Milestones</span>
          </h2>
          <div className="w-16 h-1 bg-cyan-500 mx-auto rounded-full"></div>
          <p className="text-slate-400 text-sm mt-4">
            Consistently practicing advanced DSA paradigms to strengthen core algorithmic problem-solving skills.
          </p>
        </div>

        {/* Platform Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {statsData.map((platform, idx) => (
            <div 
              key={idx}
              className={`bg-slate-900/40 border border-slate-800/80 p-6 rounded-2xl backdrop-blur-sm transition-all duration-300 ${platform.bgColor} group`}
            >
              {/* Platform Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="text-3xl">
                    {platform.icon}
                  </div>
                  <h3 className="text-lg font-bold text-slate-100 tracking-wide">
                    {platform.platform}
                  </h3>
                </div>
                <span className="text-xs font-mono px-2.5 py-1 bg-slate-950 border border-slate-800 text-slate-400 rounded-md">
                  Active Profile
                </span>
              </div>

              {/* Metrics Rows */}
              <div className="grid grid-cols-2 gap-4 border-t border-slate-800/60 pt-4">
                {platform.metrics.map((metric, mIdx) => (
                  <div key={mIdx} className="text-center md:text-left">
                    <p className="text-xs text-slate-500 font-medium mb-1 uppercase tracking-wider">
                      {metric.label}
                    </p>
                    <p className="text-2xl font-extrabold text-slate-200 tracking-tight group-hover:text-cyan-400 transition-colors">
                      {metric.value}
                    </p>
                  </div>
                ))}
              </div>

              {/* Profile Hook Button */}
              <a 
                href={platform.link}
                target="_blank"
                rel="noreferrer"
                className="mt-6 w-full inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-slate-950 hover:bg-slate-900 border border-slate-800 text-xs font-medium text-slate-400 hover:text-white transition-all duration-200"
              >
                View Live Profile
              </a>
            </div>
          ))}
        </div>

        {/* Global Achievement Highlight Row */}
        <div className="mt-8 bg-slate-900/20 border border-slate-800/60 rounded-2xl p-4 flex flex-col sm:flex-row items-center gap-4 justify-between backdrop-blur-sm">
          <div className="flex items-center gap-3 text-center sm:text-left">
            <div className="p-2 bg-purple-950/40 border border-purple-800/30 text-purple-400 rounded-xl text-lg">
              <FaTrophy />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-200">National Level Representation</h4>
              <p className="text-xs text-slate-400">Participated in the national-level ISRO Bharatiya Antariksh Hackathon.</p>
            </div>
          </div>
          <span className="text-xs font-mono font-bold text-purple-400 bg-purple-500/5 border border-purple-500/20 px-3 py-1 rounded-full">
            Space-Tech Statement
          </span>
        </div>

      </div>
    </section>
  );
};

export default CodingStats;
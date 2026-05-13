import React, { useState, useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import { FolderGit2, Code2, Layers, Trophy } from 'lucide-react';

const stats = [
  { icon: FolderGit2, value: '12+', label: 'Projects Completed' },
  { icon: Code2, value: '50K+', label: 'Lines of Code' },
  { icon: Layers, value: '9+', label: 'Technologies' },
  { icon: Trophy, value: '200+', label: 'Contributions' },
];

const activities = [
  { text: 'Completed E-Commerce Dashboard', time: '2 days ago', highlight: 'E-Commerce Dashboard' },
  { text: 'Pushed 15 commits to Portfolio repo', time: '4 days ago', highlight: 'Portfolio repo' },
  { text: 'Started learning Node.js APIs', time: '1 week ago', highlight: 'Node.js APIs' },
  { text: 'Deployed Chat Application', time: '2 weeks ago', highlight: 'Chat Application' },
];

const learningProgress = [
  { name: 'React Advanced', percent: 75 },
  { name: 'Node.js & Express', percent: 55 },
  { name: 'MongoDB', percent: 50 },
  { name: 'TypeScript', percent: 30 },
];

export default function DashboardOverview() {
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setAnimated(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="p-6 sm:p-10 max-w-6xl">
      {/* Top greeting */}
      <div className={`mb-8 transition-all duration-700 ${animated ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
        <p className="text-white/40 text-sm font-mono mb-1">Welcome back, <span className="text-primary">omar faruk</span></p>
        <h1 className="text-2xl sm:text-3xl font-black tracking-tight">Overview</h1>
      </div>

      {/* Hero Banner */}
      <div
        className={`mb-8 p-8 border border-white/5 bg-[#111] rounded transition-all duration-700 delay-100 ${
          animated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
      >
        <h2 className="text-2xl sm:text-3xl font-black mb-2">
          Welcome to the <span className="text-primary">Dashboard.</span>
        </h2>
        <p className="text-white/40 text-sm font-mono">
          Explore projects, skills, code snippets, and free resources.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((stat, i) => (
          <div
            key={stat.label}
            className={`bg-[#111] border border-white/5 rounded p-5 hover:border-primary/30 transition-all duration-500 group ${
              animated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: `${200 + i * 80}ms` }}
          >
            <div className="w-10 h-10 bg-primary/10 border border-primary/20 rounded flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
              <stat.icon size={18} className="text-primary" />
            </div>
            <p className="text-2xl sm:text-3xl font-black font-mono mb-1">{stat.value}</p>
            <p className="text-white/40 text-xs font-mono">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Recent Activity + Learning Progress */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activity */}
        <div
          className={`bg-[#111] border border-white/5 rounded p-6 transition-all duration-700 delay-500 ${
            animated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <h3 className="font-bold text-base mb-6">Recent Activity</h3>
          <div className="space-y-4">
            {activities.map((activity, i) => (
              <div key={i} className="flex items-start justify-between gap-4 group">
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 shrink-0" />
                  <p className="text-sm text-white/70 leading-relaxed">
                    {activity.text.replace(activity.highlight, '')}
                    <span className="text-primary">{activity.highlight}</span>
                    {activity.text.split(activity.highlight)[1]}
                  </p>
                </div>
                <span className="text-[10px] font-mono text-white/25 whitespace-nowrap shrink-0">{activity.time}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Learning Progress */}
        <div
          className={`bg-[#111] border border-white/5 rounded p-6 transition-all duration-700 delay-600 ${
            animated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <h3 className="font-bold text-base mb-6">Learning Progress</h3>
          <div className="space-y-5">
            {learningProgress.map((item, i) => (
              <div key={item.name}>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-white/70 font-mono">{item.name}</span>
                  <span className="text-xs font-mono text-primary">{item.percent}%</span>
                </div>
                <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-primary rounded-full transition-all duration-1000"
                    style={{
                      width: animated ? `${item.percent}%` : '0%',
                      transitionDelay: `${700 + i * 100}ms`,
                      boxShadow: '0 0 8px hsl(var(--primary) / 0.5)'
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
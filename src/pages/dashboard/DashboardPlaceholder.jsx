import React from 'react';
import { Construction } from 'lucide-react';

export default function DashboardPlaceholder({ title, desc }) {
  return (
    <div className="p-6 sm:p-10 flex flex-col items-start">
      <div className="mb-8">
        <p className="text-white/40 text-xs font-mono uppercase tracking-wider mb-1">Dashboard</p>
        <h1 className="text-2xl sm:text-3xl font-black tracking-tight">{title}</h1>
      </div>
      <div className="w-full max-w-lg border border-white/5 bg-[#111] rounded p-10 flex flex-col items-center text-center animate-fade-in">
        <div className="w-14 h-14 bg-primary/10 border border-primary/20 rounded flex items-center justify-center mb-5">
          <Construction size={22} className="text-primary" />
        </div>
        <h3 className="font-bold text-lg mb-2">{title}</h3>
        <p className="text-white/40 text-sm font-mono">{desc}</p>
        <div className="mt-6 text-[10px] font-mono uppercase tracking-widest text-white/20 border border-white/5 px-3 py-1 rounded">
          Coming Soon
        </div>
      </div>
    </div>
  );
}
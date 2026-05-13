import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import FreeCourses from './FreeCourses';
import PaidCourses from './PaidCourses';
import { BookOpen, Lock, Unlock } from 'lucide-react';

export default function Courses() {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(location.state?.tab || 'free');

  return (
    <div className="p-6 sm:p-10">
      {/* Header */}
      <div className="mb-8">
        <p className="text-white/40 text-xs font-mono uppercase tracking-wider mb-1">Dashboard</p>
        <h1 className="text-2xl sm:text-3xl font-black tracking-tight flex items-center gap-3">
          <BookOpen size={26} className="text-primary" />
          Courses
        </h1>
        <p className="text-white/40 text-sm font-mono mt-2">Browse free and premium learning courses.</p>
      </div>

      {/* Tab Switcher */}
      <div className="flex gap-1 mb-8 border border-white/5 rounded p-1 w-fit bg-[#111]">
        <button
          onClick={() => setActiveTab('free')}
          className={`flex items-center gap-2 px-5 py-2.5 rounded text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
            activeTab === 'free'
              ? 'bg-primary text-black shadow-lg shadow-primary/20'
              : 'text-white/40 hover:text-white/70'
          }`}
        >
          <Unlock size={13} />
          Free
        </button>
        <button
          onClick={() => setActiveTab('paid')}
          className={`flex items-center gap-2 px-5 py-2.5 rounded text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
            activeTab === 'paid'
              ? 'bg-primary text-black shadow-lg shadow-primary/20'
              : 'text-white/40 hover:text-white/70'
          }`}
        >
          <Lock size={13} />
          Paid
        </button>
      </div>

      {/* Content */}
      <div className="animate-fade-in" key={activeTab}>
        {activeTab === 'free' ? <FreeCourses /> : <PaidCourses />}
      </div>
    </div>
  );
}
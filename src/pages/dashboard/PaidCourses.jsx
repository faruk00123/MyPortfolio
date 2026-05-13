import React from 'react';
import { Lock } from 'lucide-react';

export default function PaidCourses() {
  return (
    <div className="border border-white/5 bg-[#111] rounded p-16 flex flex-col items-center justify-center text-center min-h-[320px]">
      <div className="w-16 h-16 bg-primary/10 border border-primary/20 rounded-full flex items-center justify-center mb-6">
        <Lock size={24} className="text-primary" />
      </div>
      <h3 className="text-xl font-black tracking-tight mb-2">Paid Courses</h3>
      <p className="text-white/30 text-sm font-mono max-w-xs">
        Premium courses will be available here soon.
      </p>
      <div className="mt-6 text-[10px] font-mono uppercase tracking-widest text-white/20 border border-white/5 px-4 py-1.5 rounded">
        Coming Soon
      </div>
    </div>
  );
}
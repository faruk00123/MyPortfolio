import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Copy, Check, Code2 } from 'lucide-react';
import { toast } from 'sonner';

const snippets = [
  {
    title: 'Responsive Navbar',
    category: 'Header',
    code: `<nav class="flex items-center justify-between px-6 py-4 bg-gray-900">
  <a href="#" class="text-xl font-bold text-white">Logo</a>
  <div class="hidden md:flex gap-6">
    <a href="#" class="text-gray-300 hover:text-white">Home</a>
    <a href="#" class="text-gray-300 hover:text-white">About</a>
    <a href="#" class="text-gray-300 hover:text-white">Contact</a>
  </div>
</nav>`,
  },
  {
    title: 'Glassmorphism Card',
    category: 'Card',
    code: `<div class="relative p-8 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 shadow-xl">
  <h3 class="text-xl font-bold text-white">Glass Card</h3>
  <p class="text-gray-300 mt-2">Beautiful glass effect.</p>
</div>`,
  },
  {
    title: 'Gradient Button',
    category: 'Button',
    code: `<button class="px-8 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold hover:opacity-90 transition-opacity shadow-lg shadow-cyan-500/25">
  Click Me
</button>`,
  },
  {
    title: 'Contact Form',
    category: 'Form',
    code: `<form class="space-y-4 max-w-md mx-auto">
  <input type="text" placeholder="Your Name" class="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:border-cyan-500 focus:outline-none" />
  <input type="email" placeholder="Email" class="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:border-cyan-500 focus:outline-none" />
  <textarea rows="4" placeholder="Message" class="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:border-cyan-500 focus:outline-none"></textarea>
  <button class="w-full py-3 bg-cyan-500 text-black font-semibold rounded-lg hover:bg-cyan-400">
    Send Message
  </button>
</form>`,
  },
  {
    title: 'Minimal Footer',
    category: 'Footer',
    code: `<footer class="border-t border-gray-800 py-8 px-6">
  <div class="flex flex-col md:flex-row items-center justify-between gap-4">
    <p class="text-gray-400 text-sm">© 2026 DevFolio. All rights reserved.</p>
    <div class="flex gap-4">
      <a href="#" class="text-gray-400 hover:text-white">GitHub</a>
      <a href="#" class="text-gray-400 hover:text-white">LinkedIn</a>
    </div>
  </div>
</footer>`,
  },
  {
    title: 'Hero Section',
    category: 'Header',
    code: `<section class="min-h-screen flex items-center justify-center bg-black text-center px-4">
  <div>
    <p class="text-cyan-400 font-mono mb-4">Hello, I'm a Developer</p>
    <h1 class="text-5xl md:text-7xl font-bold text-white mb-6">
      Building the <span class="text-cyan-400">Future</span>
    </h1>
    <button class="px-8 py-3 bg-cyan-500 text-black rounded-lg font-semibold">
      View My Work
    </button>
  </div>
</section>`,
  },
];

export default function CodePlaygroundTab() {
  const [copiedId, setCopiedId] = useState(null);

  const copyCode = (code, index) => {
    navigator.clipboard.writeText(code);
    setCopiedId(index);
    toast.success('Code copied to clipboard!');
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="space-y-8 bg-black min-h-screen text-white">

      <div className='mt-20 lg:mt-7 ml-4 lg:ml-6'>
        <h2 className="text-2xl md:text-3xl font-mono font-bold mb-2">
          Code Playground<span className="text-red-500">.</span>
        </h2>
        <p className="text-gray-400 text-sm">
          Ready-to-use Tailwind CSS components. Click to copy the code.
        </p>
      </div>

      <div className="grid grid-cols-1 m-4 mb-6 md:grid-cols-2 gap-6">

        {snippets.map((snippet, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08 }}
            className="rounded-2xl border border-gray-900 bg-[#111] overflow-hidden hover:border-[#06B6] transition-all group"
          >

            <div className="flex items-center justify-between px-5 py-3 border-b border-gray-700">
              <div className="flex items-center gap-2">
                <Code2 className="w-4 h-4 text-white" />
                <span className="font-mono text-sm font-semibold text-white">
                  {snippet.title}
                </span>
              </div>
              <span className="text-[10px] font-mono text-gray-300">
                {snippet.category}
              </span>
            </div>

            <div className="relative">

              <pre className="p-5 text-xs font-mono overflow-x-auto max-h-48 text-gray-300 bg-black leading-relaxed">
                <code>{snippet.code}</code>
              </pre>

              <button
                onClick={() => copyCode(snippet.code, i)}
                className="absolute top-3 right-3 text-gray-400 hover:text-red-500"
              >
                {copiedId === i ? <Check /> : <Copy />}
              </button>

            </div>

          </motion.div>
        ))}

      </div>

    </div>
  );
}
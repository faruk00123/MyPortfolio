import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Calendar } from 'lucide-react';

const projects = [
  {
    title: 'E-Commerce Dashboard',
    desc: 'Admin panel with real-time analytics, product management, and charts.',
    tech: ['React', 'Tailwind', 'REST API'],
    date: 'Jan 2026',
    status: 'Completed',
  },
  {
    title: 'Portfolio Builder',
    desc: 'Drag-and-drop portfolio website builder with custom themes.',
    tech: ['React', 'Node.js', 'MongoDB'],
    date: 'Feb 2026',
    status: 'Completed',
  },
  {
    title: 'Chat Application',
    desc: 'Real-time messaging with auth, file sharing, and group chats.',
    tech: ['MERN', 'Socket.io', 'JWT'],
    date: 'Mar 2026',
    status: 'Completed',
  },
];

export default function ProjectsTab() {
  return (
    <div className="space-y-8 bg-black min-h-screen text-white p-4">

      <div>
        <h2 className="text-2xl md:text-3xl font-mono font-bold mb-2">
          All Projects<span className="text-red-500">.</span>
        </h2>
        <p className="text-gray-400 text-sm">
          Complete list of projects with details.
        </p>
      </div>

      <div className="space-y-4">

        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            className="p-5 rounded-2xl bg-[#111] border border-gray-900 hover:border-[#06B6] transition-all"
          >

            <div className="flex flex-col md:flex-row justify-between gap-4">

              <div>

                <h3 className="font-mono font-semibold text-white mb-1">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-sm mb-3">
                  {project.desc}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span key={t} className="text-[10px] px-2 py-1 bg-black border border-gray-700 text-gray-300 rounded">
                      {t}
                    </span>
                  ))}
                </div>

              </div>

              <div className="flex items-center gap-3 text-gray-400 text-xs">

                <Calendar className="w-3 h-3" />
                {project.date}

                <ExternalLink className="w-4 h-4 hover:text-red-500 cursor-pointer" />
                <Github className="w-4 h-4 hover:text-red-500 cursor-pointer" />

              </div>

            </div>

          </motion.div>
        ))}

      </div>

    </div>
  );
}
import React from 'react';
import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML5', level: 95 },
      { name: 'CSS3', level: 90 },
      { name: 'JavaScript (ES6+)', level: 85 },
      { name: 'React.js', level: 80 },
      { name: 'Tailwind CSS', level: 90 },
      { name: 'Next.js', level: 70 },
      { name: 'Framer Motion', level: 65 },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js', level: 10 },
      { name: 'Express.js', level: 8 },
      { name: 'REST API', level: 7 },
      { name: 'MongoDB', level: 1 },
      { name: 'Mongoose', level: 0 },
      { name: 'JWT Auth', level: 5 },
      { name: 'Firebase Auth', level: 70 },
    ],
  },
  {
    title: 'Tools & DevOps',
    skills: [
      { name: 'Git & GitHub', level: 85 },
      { name: 'VS Code', level: 95 },
      { name: 'Postman', level: 60 },
      { name: 'Figma', level: 60 },
      { name: 'Vercel Deploy', level: 80 },
      { name: 'Netlify', level: 70 },
    ],
  },
  {
    title: 'Advanced Concepts',
    skills: [
      { name: 'Authentication System', level: 16 },
      { name: 'Authorization (RBAC)', level: 15 },
      { name: 'API Security', level: 10 },
      { name: 'Performance Optimization', level: 0 },
      { name: 'Component Architecture', level: 4 },
      { name: 'State Management', level: 5 },
    ],
  },
];

export default function SkillsTab() {
  return (
    <div className="space-y-8 bg-black min-h-screen text-white p-4">

      <div>
        <h2 className="text-2xl md:text-3xl font-mono font-bold mb-2">
          Skills<span className="text-red-500">.</span>
        </h2>
        <p className="text-gray-400 text-sm">
          My complete technical skill set and proficiency levels.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {skillCategories.map((cat, ci) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: ci * 0.1 }}
            className="bg-[#111] border border-gray-900 rounded-2xl p-5 hover:border-[#06B6] transition-all"
          >

            <h3 className="font-mono font-semibold text-white mb-4">
              {cat.title}
            </h3>

            <div className="space-y-4">

              {cat.skills.map((skill) => (
                <div key={skill.name}>

                  <div className="flex justify-between text-xs mb-2 text-gray-300">
                    <span>{skill.name}</span>
                    <span className="text-[#06B6D4]">{skill.level}%</span>
                  </div>

                  <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">

                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1 }}
                      className="h-full bg-[#06B6D4]"
                      style={{
                        boxShadow: '0 0 8px rgba(0, 240, 255, 0.4)'
                      }}
                    />

                  </div>

                </div>
              ))}

            </div>

          </motion.div>
        ))}

      </div>

    </div>
  );
}
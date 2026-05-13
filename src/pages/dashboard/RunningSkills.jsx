import React from 'react';
import { motion } from 'framer-motion';

const runningSkills = [
  { name: 'Node.js', level: 20, color: '#E34F26', emoji: '🟢' },
  { name: 'Express.js', level: 17, color: '#1572B6', emoji: '🟦' },
  { name: 'Next.js', level: 15, color: '#15728A', emoji: '🔵' },
  { name: 'TypeScript', level: 30, color: '#06B6D4', emoji: '🩵' },
  { name: 'MongoDB', level: 10, color: '#F7DF1E', emoji: '🟨' },
  { name: 'Mongoose', level: 11, color: '#61DAFB', emoji: '🧬' },
  { name: 'API Design', level: 60, color: '#F05032', emoji: '🔌' },
  { name: 'Framer Motion, Motion, GSAP, React Spring', level: 30, color: '#ffffff', emoji: '🎨' },
  { name: 'Vercel', level: 70, color: '#646CFF', emoji: '🚀' },
  { name: 'Railway', level: 30, color: '#339933', emoji: '🚂' },
  { name: 'Redux', level: 13, color: '#47A248', emoji: '⚛️' },
  { name: 'JWT', level: 5, color: '#47A', emoji: '🔒' },
  { name: 'CORS', level: 2, color: '#ffaaaa', emoji: '🌐' },
  { name: 'Nodemailer', level: 8, color: '#ffaaaa', emoji: '✉️' },
];

export default function RunningSkills() {

  return (

    <div className="space-y-8 bg-black min-h-screen text-white">

      <div className='m-5 mt-20 lg:m-8'>

        <h2 className="text-2xl md:text-3xl font-mono font-bold mb-2">

          Running Skills
          <span className="text-[#06B6D4]">.</span>

        </h2>

        <p className="font-inter text-sm text-gray-300">
          এগুলো আমি এখন শিখছি — প্রতিদিন আপডেট হচ্ছে।
        </p>

      </div>

      <div className="grid grid-cols-1 m-4 md:grid-cols-2 gap-5">

        {runningSkills.map((skill, i) => (

          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.07 }}
            className="p-5 border border-gray-900 rounded-2xl bg-[#111111] hover:border-[#06B6] transition-all duration-300"
          >

            <div className="flex items-center justify-between mb-3">

              <div className="flex items-center gap-2">

                <span className="text-lg">
                  {skill.emoji}
                </span>

                <span className="font-mono font-semibold text-sm text-white">
                  {skill.name}
                </span>

              </div>

              <span
                className="font-mono text-sm font-bold"
                style={{ color: skill.color }}
              >
                {skill.level}%
              </span>

            </div>

            {/* Progress Bar */}

            <div className="w-full h-2.5 rounded-full bg-gray-800 overflow-hidden">

              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${skill.level}%` }}
                transition={{
                  duration: 1.2,
                  delay: i * 0.07 + 0.3,
                  ease: 'easeOut'
                }}
                className="h-full rounded-full"
                style={{
                  background: `linear-gradient(90deg, ${skill.color}99, ${skill.color})`,
                  boxShadow: `0 0 8px ${skill.color}55`,
                }}
              />

            </div>

            <p className="text-xs font-mono mt-2 text-gray-400">

              {
                skill.level >= 75
                  ? '🔥 Strong'
                  : skill.level >= 55
                  ? '📈 Growing'
                  : '🌱 Learning'
              }

            </p>

          </motion.div>

        ))}

      </div>

    </div>

  );
}
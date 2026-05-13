import React, { useEffect, useRef, useState } from 'react';
import { useTheme } from 'next-themes';
import {
  Calendar,
  BookOpen,
  Code2,
  Youtube,
  Globe,
  Rocket,
  CheckCircle,
  ArrowRight,
  MonitorSmartphone,
} from 'lucide-react';

const timeline = [
  {
    year: '2021-22',
    title: 'শেখা শুরু',
    desc: 'MERN Stack Web Development শেখার যাত্রা শুরু করি। HTML, CSS, JavaScript দিয়ে প্রথম পদক্ষেপ।',
    icon: <Rocket size={18} />,
    color: 'from-cyan-500 to-blue-500',
  },
  {
    year: '2022–24',
    title: 'MERN Stack Frontend & Backend দক্ষতা',
    desc: 'আমি MERN Stack Development এ HTML5, CSS3, JavaScript, TypeScript, React.js, Next.js, Tailwind CSS, Bootstrap, Redux Toolkit, Node.js, Express.js, REST API, Authentication System, JWT, API Integration Server Side Development এবং Framer Motion, GSAP, Smooth Transition, Interactive Animation, শিখছি ও প্র্যাকটিস করছি প্রতিদিন তিন থেকে আট ঘন্টা ।',
    icon: <Code2 size={18} />,
    color: 'from-purple-500 to-pink-500',
  },
  {
    year: '2024–25',
    title: 'MERN Stack Database দক্ষতা',
    desc: 'আমি MongoDB, Mongoose, Firebase, Supabase, Database Schema Design, Data Management, Cloud Database Integration এবং Secure Database System শিখছি ও কাজ করছি ।',
    icon: <Globe size={18} />,
    color: 'from-green-500 to-teal-500',
  },
  {
    title: 'MERN Stack Tools ও Deployment',
    desc: 'আমি VS Code, Git & GitHub, Postman, Docker Basics, Vercel, Netlify, Render, npm, Yarn এবং Modern Deployment Workflow ব্যবহার শিখছি ।',
    icon: <CheckCircle size={18} />,
    color: 'from-orange-500 to-yellow-500',
  },
  {
    title: 'Responsive & Clean Code',
    desc: 'আমি Mobile, Tablet এবং Desktop Device এর জন্য Responsive Website Design করতে পারি। পাশাপাশি Clean Code, Reusable Components, Optimized Structure এবং Professional Coding Practice অনুসরণ করি ।',
    icon: <MonitorSmartphone size={18}/>,
    color: 'from-red-500 to-blue-500',
  }
];

const resources = [
  {
    icon: <Youtube size={20} />,
    name: 'YouTube Channels',
    items: ['Anisul Islam', 'Jhankar Mahbub', 'Ali Hossain', 'Learn with Sumit', 'Apna College', 'GreadtStack', 'CodeWithHarry', 'Coding2GO', 'CodeTutorBD', 'Hablu Programmer', 'Codehal', 'Web Ship'],
    iconBg: 'bg-red-500',
  },
  {
    icon: <Globe size={20} />,
    name: 'Online Platforms',
    items: ['freeCodeCamp', 'W3Schools', 'MDN Web Docs', 'The Odin Project', 'Codecademy', 'Coursera', 'edX', 'Khan Academy', 'Scrimba', 'web.dev', 'Frontend Mentor', 'GeeksforGeeks', 'TutorialsPoint', 'SoloLearn', 'Full Stack Open'],
    iconBg: 'bg-blue-500',
  },
  {
    icon: <BookOpen size={20} />,
    name: 'নিজে Practice',
    items: ['Daily Coding', 'Project Building', 'Problem Solving', 'Code Debugging', 'Algorithm Practice', 'Git/GitHub Practice', 'Frontend Practice', 'Backend Practice', 'UI Cloning', 'Mini Projects', 'Real World Projects', 'Code Review', 'Learning from Docs', 'Consistent Learning'],
    iconBg: 'bg-primary',
  },
];

const skills = [
  { name: 'HTML & CSS', level: 100 },
  { name: 'JavaScript', level: 95 },
  { name: 'TypeScript', level: 70 },
  { name: 'Tailwind CSS', level: 90 },
  { name: 'React.js', level: 90 },
  { name: 'Redux Toolkit', level: 70 },
  { name: 'Next.js', level: 70 },
  { name: 'Firebase', level: 85 },
  { name: 'Node.js', level: 60 },
  { name: 'Express.js', level: 90 },
  { name: 'REST API', level: 70 },
  { name: 'Authentication System', level: 80 },
  { name: 'JWT', level: 85 },
  { name: 'Framer Motion, GSAP, Smooth Transition etc', level: 85 },
  { name: 'MongoDB', level: 90 },
  { name: 'Mongoose', level: 80 },
  { name: 'Data Management', level: 75 },
  { name: 'Git & GitHub', level: 89 },
  { name: 'Vercel,  Netlify, Render, npm etc', level: 80 },
  { name: 'Responsive Design & Other', level: 90 }
];

const projects = [
  {
    title: 'Portfolio Website',
    desc: 'এই পোর্টফোলিও সাইট — Dark/Light mode, animation সহ।',
    tech: ['React', 'Tailwind', 'Firebase'],
    status: 'Live',
  },
  {
    title: 'Responsive Landing Pages',
    desc: 'বিভিন্ন ব্যবসার জন্য সুন্দর responsive landing page তৈরি।',
    tech: ['HTML', 'CSS', 'JavaScript'],
    status: 'Completed',
  },
  {
    title: 'Dashboard App',
    desc: 'Learning tracker dashboard with auth & real-time data।',
    tech: ['React', 'Firebase', 'Tailwind'],
    status: 'In Progress',
  },
];

export default function BlogSection() {

  // EXACT SAME SYSTEM
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const sectionRef = useRef(null);

  const [visible, setVisible] = useState(false);
  const [activeProject, setActiveProject] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="blog"

      // IMPORTANT
      className="
      py-20 px-4 sm:px-6 lg:px-8
      bg-white dark:bg-[#080808]
      transition-colors duration-300
      "
    >
      <div className="max-w-5xl mx-auto">

        {/* HEADER */}
        <div
          className={`
          mb-16 transition-all duration-700
          ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
          `}
        >
          <div className="w-10 h-[2px] bg-primary mb-6" />

          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-3 text-black dark:text-white">
            My <span className="text-primary italic">Journey</span>
          </h2>

          <p className="text-gray-500 dark:text-gray-400 font-mono text-xs uppercase tracking-widest">
            আমার MERN Stack ডেভেলপমেন্টের যাত্রা 2021 থেকে শুরু হয় — কীভাবে শিখলাম, কী করলাম
          </p>
        </div>

        {/* TIMELINE */}
        <div
          className={`
          mb-20 transition-all duration-700 delay-100
          ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
          `}
        >
          <h3 className="text-lg font-bold mb-8 flex items-center gap-2 text-black dark:text-white">
            <Calendar size={18} className="text-primary" />
            শেখার টাইমলাইন
          </h3>

          <div className="relative">

            <div className="absolute left-5 top-0 bottom-0 w-px bg-gray-300 dark:bg-white/10 hidden sm:block" />

            <div className="space-y-6">
              {timeline.map((item, i) => (
                <div
                  key={i}
                  className={`
                  flex gap-4 transition-all duration-500
                  ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}
                  `}
                  style={{ transitionDelay: `${200 + i * 100}ms` }}
                >
                  <div
                    className={`
                    relative z-10 w-10 h-10 rounded-full
                    bg-gradient-to-br ${item.color}
                    flex items-center justify-center text-white flex-shrink-0
                    `}
                  >
                    {item.icon}
                  </div>

                  {/* EXACT SAME DARK SYSTEM */}
                  <div
                    className="
                    flex-1 p-4 rounded-xl border
                    bg-gray-100 dark:bg-[#0d0d0d]
                    border-black/10 dark:border-white/5
                    hover:border-primary/40
                    transition-all duration-300
                    "
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-mono text-primary font-bold">
                        {item.year}
                      </span>
                    </div>

                    <h4 className="font-semibold mb-1 text-black dark:text-white">
                      {item.title}
                    </h4>

                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* SKILLS */}
        <div
          className={`
          mb-20 transition-all duration-700 delay-200
          ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
          `}
        >
          <h3 className="text-lg font-bold mb-8 flex items-center gap-2 text-black dark:text-white">
            <Code2 size={18} className="text-primary" />
            দক্ষতার মাত্রা
          </h3>

          <div className="grid sm:grid-cols-2 gap-4">

            {skills.map((skill, i) => (
              <div
                key={i}

                // EXACT SAME SYSTEM
                className="
                p-4 rounded-xl border
                bg-gray-100 dark:bg-[#0d0d0d]
                border-black/10 dark:border-white/5
                "
              >
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium text-black dark:text-white">
                    {skill.name}
                  </span>

                  <span className="text-xs font-mono text-primary">
                    {skill.level}%
                  </span>
                </div>

                <div className="h-1.5 bg-black/10 dark:bg-white/10 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-primary to-cyan-400 rounded-full transition-all duration-1000"
                    style={{
                      width: visible ? `${skill.level}%` : '0%',
                      transitionDelay: `${400 + i * 80}ms`,
                    }}
                  />
                </div>
              </div>
            ))}

          </div>
        </div>

        {/* RESOURCES */}
        <div
          className={`
          mb-20 transition-all duration-700 delay-300
          ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
          `}
        >
          <h3 className="text-lg font-bold mb-8 flex items-center gap-2 text-black dark:text-white">
            <BookOpen size={18} className="text-primary" />
            কোথা থেকে শিখেছি
          </h3>

          <div className="grid sm:grid-cols-3 gap-4">

            {resources.map((res, i) => (
              <div
                key={i}

                // EXACT SAME SYSTEM
                className="
                p-5 rounded-xl border
                bg-gray-100 dark:bg-[#0d0d0d]
                border-black/10 dark:border-white/5
                hover:border-primary/40
                transition-all duration-300
                "
              >
                <div
                  className={`
                  w-9 h-9 rounded-lg ${res.iconBg}
                  text-white flex items-center justify-center mb-3
                  `}
                >
                  {res.icon}
                </div>

                <h4 className="font-semibold text-sm mb-3 text-black dark:text-white">
                  {res.name}
                </h4>

                <ul className="space-y-1">

                  {res.items.map((item, j) => (
                    <li
                      key={j}
                      className="text-xs text-gray-600 dark:text-gray-400 flex items-center gap-1.5"
                    >
                      <ArrowRight
                        size={10}
                        className="text-primary flex-shrink-0"
                      />
                      {item}
                    </li>
                  ))}

                </ul>
              </div>
            ))}

          </div>
        </div>

        {/* PROJECTS */}
        <div
          className={`
          transition-all duration-700 delay-400
          ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
          `}
        >
          <h3 className="text-lg font-bold mb-8 flex items-center gap-2 text-black dark:text-white">
            <Rocket size={18} className="text-primary" />
            উল্লেখযোগ্য Projects
          </h3>

          <div className="grid sm:grid-cols-3 gap-4">

            {projects.map((proj, i) => (
              <div
                key={i}
                onClick={() =>
                  setActiveProject(activeProject === i ? null : i)
                }

                // EXACT SAME SYSTEM
                className={`
                p-5 rounded-xl border cursor-pointer transition-all duration-300
                ${
                  activeProject === i
                    ? 'border-primary bg-primary/5'
                    : 'bg-gray-100 dark:bg-[#0d0d0d] border-black/10 dark:border-white/5 hover:border-primary/40'
                }
                `}
              >
                <div className="flex justify-between items-start mb-2">

                  <h4 className="font-semibold text-sm text-black dark:text-white">
                    {proj.title}
                  </h4>

                  <span
                    className={`
                    text-[10px] font-mono px-2 py-0.5 rounded-full
                    ${
                      proj.status === 'Live'
                        ? 'bg-green-500/10 text-green-400'
                        : proj.status === 'Completed'
                        ? 'bg-blue-500/10 text-blue-400'
                        : 'bg-orange-500/10 text-orange-400'
                    }
                    `}
                  >
                    {proj.status}
                  </span>
                </div>

                <p className="text-xs text-gray-600 dark:text-gray-400 mb-3">
                  {proj.desc}
                </p>

                <div className="flex flex-wrap gap-1">

                  {proj.tech.map((t, j) => (
                    <span
                      key={j}
                      className="
                      text-[10px] font-mono
                      bg-primary/10 text-primary
                      px-2 py-0.5 rounded
                      "
                    >
                      {t}
                    </span>
                  ))}

                </div>
              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
}
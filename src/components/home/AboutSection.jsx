import React, { useEffect, useRef, useState } from "react";
const highlights = [
  {
    icon: "⚡",
    title: "Performance",
    desc: "Optimized code for blazing fast experiences",
  },
  {
    icon: "🎨",
    title: "Design",
    desc: "Clean and modern UI with attention to detail",
  },
  {
    icon: "📱",
    title: "Responsive",
    desc: "Mobile-first approach for all screen sizes",
  },
  {
    icon: "🔧",
    title: "Clean Code",
    desc: "Maintainable, readable, scalable code",
  },
];
export default function AboutSection() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return (
    <section
      id="about"
      className="py-32 px-4 bg-white dark:bg-[#080808] transition-colors duration-300"
    >
      {" "}
      <div className="max-w-7xl mx-auto" ref={ref}>
        {" "}
        <div
          className={`text-center mb-16 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-mono font-bold text-black dark:text-white mb-6">
            {" "}
            Who Am I<span className="text-[#00F0FF]">?</span>{" "}
          </h2>{" "}
        </div>{" "}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {" "}
          <div
            className={`transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
          >
            {" "}
            <p className="text-gray-700 dark:text-gray-300 text-base md:text-lg leading-relaxed mb-6 font-sans">
              {" "}
              I'm a passionate Frontend Developer on a mission to master the
              MERN stack. I build clean, responsive web interfaces and love
              turning ideas into real, working products.{" "}
            </p>{" "}
            <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed mb-8 font-sans">
              {" "}
              I've completed my foundation in{" "}
              <span className="text-black dark:text-white font-medium">
                {" "}
                HTML, CSS, JavaScript, React, Tailwind CSS, Git, GitHub &
                Firebase{" "}
              </span>{" "}
              — and I'm currently diving deep into backend development with
              Node.js, Express & MongoDB to become a full-stack developer.{" "}
            </p>{" "}
            <div className="flex flex-wrap gap-3">
              {" "}
              {[
                "HTML5",
                "CSS3",
                "JavaScript",
                "React.js",
                "Tailwind CSS",
                "Firebase",
                "Git & GitHub",
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 text-xs font-mono border border-[#00F0FF]/30 text-[#00F0FF] bg-[#00F0FF]/5 rounded-full hover:bg-[#00F0FF]/10 transition-colors"
                >
                  {" "}
                  {tech}{" "}
                </span>
              ))}{" "}
            </div>{" "}
          </div>{" "}
          <div
            className={`grid grid-cols-2 gap-4 transition-all duration-700 delay-400 ${visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
          >
            {" "}
            {highlights.map((h, i) => (
              <div
                key={h.title}
                className="p-5 rounded-2xl bg-gray-100 dark:bg-[#0d0d0d] border border-black/10 dark:border-white/5 hover:border-[#00F0FF]/30 hover:-translate-y-1 transition-all duration-300 group"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                {" "}
                <span className="text-2xl mb-3 block">{h.icon}</span>{" "}
                <h3 className="font-mono font-semibold text-black dark:text-white text-sm mb-1 group-hover:text-[#00F0FF] transition-colors">
                  {" "}
                  {h.title}{" "}
                </h3>{" "}
                <p className="text-xs text-gray-600 dark:text-gray-500 leading-relaxed">
                  {" "}
                  {h.desc}{" "}
                </p>{" "}
              </div>
            ))}{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </section>
  );
}

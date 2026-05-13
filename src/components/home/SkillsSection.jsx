import React, { useEffect, useRef, useState } from "react";
const skills = [
  { name: "HTML", level: 90, color: "#E34F26", emoji: "🟧" },
  { name: "CSS", level: 85, color: "#1572B6", emoji: "🟦" },
  { name: "JavaScript", level: 75, color: "#F7DF1E", emoji: "🟨" },
  { name: "React.js", level: 70, color: "#61DAFB", emoji: "⚛️" },
  { name: "Tailwind CSS", level: 82, color: "#06B6D4", emoji: "🩵" },
  { name: "Figma", level: 50, color: "#339933", emoji: "🟩" },
  { name: "Git & GitHub", level: 72, color: "#F05032", emoji: "🔴" },
  { name: "Responsive Design", level: 95, color: "#E34F", emoji: "📱" },
  { name: "Fetch Api", level: 80, color: "#E34F01", emoji: "🌐" },
  { name: "Firebase", level: 75, color: "#61DAFB", emoji: "🟪" },
  { name: "Authentication", level: 78, color: "#1572B6", emoji: "🔒" },
  { name: "Running Mern", level: 60, color: "#F7DF1F", emoji: "🟧" }
];
export default function SkillsSection() {
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
      id="skills"
      className="py-32 px-4 bg-white dark:bg-[#050505] transition-colors duration-300"
    >
      {" "}
      <div className="max-w-7xl mx-auto" ref={ref}>
        {" "}
        <div
          className={`text-center mb-16 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-mono font-bold text-black dark:text-white">
            {" "}
            My Skills<span className="text-[#00F0FF]">.</span>{" "}
          </h2>{" "}
        </div>{" "}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {" "}
          {skills.map((skill, i) => (
            <div
              key={skill.name}
              className={`p-5 rounded-2xl bg-gray-100 dark:bg-[#0d0d0d] border border-black/10 dark:border-white/5 hover:border-[#00F0FF]/20 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {" "}
              <div className="flex items-center justify-between mb-3">
                {" "}
                <div className="flex items-center gap-2">
                  {" "}
                  <span className="text-lg">{skill.emoji}</span>{" "}
                  <span className="font-mono font-semibold text-black dark:text-white text-sm">
                    {" "}
                    {skill.name}{" "}
                  </span>{" "}
                </div>{" "}
                <span
                  className="font-mono text-sm font-bold"
                  style={{ color: skill.color }}
                >
                  {" "}
                  {skill.level}%{" "}
                </span>{" "}
              </div>{" "}
              <div className="w-full h-2 rounded-full bg-black/10 dark:bg-white/5 overflow-hidden">
                {" "}
                <div
                  className="h-full rounded-full transition-all duration-1000 ease-out"
                  style={{
                    width: visible ? `${skill.level}%` : "0%",
                    background: `linear-gradient(90deg, ${skill.color}88, ${skill.color})`,
                    boxShadow: `0 0 8px ${skill.color}55`,
                    transitionDelay: `${i * 80 + 300}ms`,
                  }}
                />{" "}
              </div>{" "}
            </div>
          ))}{" "}
        </div>{" "}
      </div>{" "}
    </section>
  );
}

import React, { useEffect, useRef, useState } from "react";
const projects = [
  {
    title: "OmCoder-project-react-tailwindcss",
    desc: "OmCoder is a modern and responsive web application built with React.js and Tailwind CSS. It features a clean UI, fast performance, and a smooth user experience using reusable components and modern frontend design practices.",
    tech: ["React", "Tailwind CSS", "API", "Firebase", "Animation tools", "Responsive Design", "Other tools"],
    link: "https://webcoder-project-react-tailwindcss-beta.vercel.app/",
    github: "https://github.com/faruk00123/webcoder-project-react-tailwindcss",
    num: "01",
  },
  {
    title: "Marketplace-House-Product",
    desc: "A modern website built with HTML, CSS, Tailwind CSS, JavaScript, React, and API integration. Designed with a responsive layout and clean user interface, featuring Marketplace, House, and Product related sections. This project was created for learning, practice, and showcasing web development skills.",
    tech: ["React", "Tailwind CSS", "Animation tools", "Responsive Design", "Other tools"],
    link: "https://marketplace-house-product.vercel.app/",
    github: "https://github.com/faruk00123/Marketplace-House-product",
    num: "02",
  },
  {
    title: "My website react tailwindcss",
    desc: "This website is built with React and Tailwind CSS using modern and attractive color combinations. The clean UI, responsive design, and smooth user experience make the website more professional and visually appealing.",
    tech: ["React", "Tailwind CSS", "Color Palette", "Animation tools", "Responsive Design", "Other tools"],
    link: "https://react-tailwind-website-eight.vercel.app/",
    github: "https://github.com/faruk00123/react-tailwind-website",
    num: "03",
  },
  {
    title: "Weather Dashboard",
    desc: "Real-time weather data with location search and 5-day forecast using OpenWeather API. With a clean UI and responsive design, it works smoothly on both mobile and desktop devices. Users can easily check weather updates through a fast and simple interface, making it efficient and easy to use.",
    tech: ["React", "OpenWeather API", "CSS Animations"],
    link: "https://weather-app-form-bangladesh.vercel.app/",
    github: "https://github.com/faruk00123/Weather_App_Form_Bangladesh",
    num: "04",
  },
  {
    title: "Data-Management-App",
    desc: "Send Your Data to Google Sheet is a smart feature that allows form data from a website to be directly saved into Google Sheets. It is commonly built using React, JavaScript, and APIs.",
    tech: ["React", "Tailwind CSS", "LocalStorage", "Google Sheets API", "Other tools"],
    link: "https://send-your-data-nv4f.vercel.app/",
    github: "https://github.com/faruk00123/send_your_data",
    num: "05",
  },
  {
    title: "Doctor Care",
    desc: "Doctor Care is a modern web application built with React and Tailwind CSS. It features a fully responsive design, ensuring a smooth experience on mobile, tablet, and desktop devices.",
    tech: ["React", "Tailwind CSS", "Responsive Design", "Other tools"],
    link: "https://doctor-care-eta.vercel.app/#contact",
    github: "https://github.com/faruk00123/Doctor-Care",
    num: "06",
  },
];
function ProjectCard({ project, visible, delay }) {
  return (
    <div
      className={`group rounded-2xl bg-gray-100 dark:bg-[#0d0d0d] border border-black/10 dark:border-white/5 overflow-hidden hover:border-[#00F0FF]/30 hover:-translate-y-1 hover:shadow-lg transition-all duration-500 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
      style={{ transitionDelay: `${delay}ms`, boxShadow: "0 0 0 transparent" }}
    >
      {" "}
      <div className="p-6">
        {" "}
        <div className="flex items-start justify-between mb-4">
          {" "}
          <span className="text-4xl font-mono font-black text-black/10 dark:text-white/5 group-hover:text-[#00F0FF]/10 transition-colors">
            {" "}
            {project.num}{" "}
          </span>{" "}
          <div className="flex gap-2">
            {" "}
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-lg bg-black/5 dark:bg-white/5 flex items-center justify-center text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white hover:bg-black/10 dark:hover:bg-white/10 transition-all text-xs font-mono"
            >
              {" "}
              GH{" "}
            </a>{" "}
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-lg bg-[#00F0FF]/10 flex items-center justify-center text-[#00F0FF] hover:bg-[#00F0FF]/20 transition-all text-xs font-mono"
            >
              {" "}
              ↗{" "}
            </a>{" "}
          </div>{" "}
        </div>{" "}
        <h3 className="text-lg font-mono font-bold text-black dark:text-white mb-2 group-hover:text-[#00F0FF] transition-colors">
          {" "}
          {project.title}{" "}
        </h3>{" "}
        <p className="text-sm text-gray-600 dark:text-gray-500 leading-relaxed mb-4">
          {" "}
          {project.desc}{" "}
        </p>{" "}
        <div className="flex flex-wrap gap-2">
          {" "}
          {project.tech.map((t) => (
            <span
              key={t}
              className="text-[10px] font-mono px-2 py-1 rounded-md bg-black/5 dark:bg-white/5 text-gray-600 dark:text-gray-400 border border-black/5 dark:border-white/5"
            >
              {" "}
              {t}{" "}
            </span>
          ))}{" "}
        </div>{" "}
      </div>{" "}
      <div className="h-[2px] bg-gradient-to-r from-transparent via-[#00F0FF]/0 to-transparent group-hover:via-[#00F0FF]/50 transition-all duration-500" />{" "}
    </div>
  );
}
export default function ProjectsSection() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return (
    <section
      id="projects"
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
            My Projects<span className="text-[#00F0FF]">.</span>{" "}
          </h2>{" "}
        </div>{" "}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {" "}
          {projects.map((project, i) => (
            <ProjectCard
              key={project.title}
              project={project}
              visible={visible}
              delay={i * 100}
            />
          ))}{" "}
        </div>{" "}
      </div>{" "}
    </section>
  );
}

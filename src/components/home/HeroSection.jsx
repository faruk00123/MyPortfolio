import React, { useState, useEffect } from "react";
import { ArrowDown } from "lucide-react";
import heroImage from "./img/omar.png";
export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-white dark:bg-[#050505] transition-colors duration-500">
      {" "}
      {/* Background Grid */}{" "}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,240,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(0,240,255,0.08) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />{" "}
      {/* Glow Effect */}{" "}
      <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] bg-cyan-400/10 blur-[120px] rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none" />{" "}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full">
        {" "}
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16">
          {" "}
          {/* LEFT CONTENT */}{" "}
          <div
            className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
          >
            {" "}
            {/* Tag */}{" "}
            <div className="inline-flex items-center gap-2 mb-6">
              {" "}
              <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />{" "}
              <span className="text-xs font-mono uppercase tracking-[0.3em] text-cyan-400">
                {" "}
                MERN Stack Developer{" "}
              </span>{" "}
            </div>{" "}
            {/* Heading */}{" "}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[0.9] tracking-tight text-black dark:text-white mb-6">
              {" "}
              Building <br />{" "}
              <span className="text-cyan-400 italic">
                {" "}
                Digital Experiences.{" "}
              </span>{" "}
            </h1>{" "}
            {/* Description */}{" "}
            <p className="max-w-xl text-base sm:text-lg leading-relaxed text-gray-600 dark:text-gray-400 mb-10">
              {" "}
              I create modern, responsive and high-performance web interfaces
              using React and Tailwind CSS. Passionate about animations, clean
              code and beautiful user experiences.{" "}
            </p>{" "}
            {/* Buttons */}{" "}
            <div className="flex flex-wrap gap-4">
              {" "}
              <button
                onClick={() =>
                  document
                    .getElementById("projects")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="px-8 py-3 rounded-xl bg-cyan-400 text-black font-bold text-sm hover:scale-105 hover:shadow-[0_0_30px_rgba(34,211,238,0.4)] transition-all duration-300"
              >
                {" "}
                View Projects{" "}
              </button>{" "}
              <button
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="px-8 py-3 rounded-xl border border-black/10 dark:border-white/10 text-black dark:text-white hover:border-cyan-400 hover:text-cyan-400 hover:bg-cyan-400/5 transition-all duration-300"
              >
                {" "}
                Contact Me{" "}
              </button>{" "}
            </div>{" "}
          </div>{" "}
          {/* RIGHT IMAGE */}{" "}
          <div
            className={`relative flex justify-center transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
          >
            {" "}
            {/* Glow Ring */}{" "}
            <div
              style={{ animationDuration: "10s" }}
            />{" "}
            {/* Image */}{" "}
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-cyan-400/20 shadow-[0_0_60px_rgba(34,211,238,0.25)] animate-float">
              {" "}
              <img
                src={heroImage}
                alt="Hero"
                className="w-full h-full object-cover"
              />{" "}
              {/* Overlay */}{" "}
              <div className="absolute inset-0 bg-gradient-to-t from-cyan-400/10 to-transparent" />{" "}
            </div>{" "}
            {/* Floating Badge */}{" "}
            <div className="absolute bottom-5 -left-5 px-4 py-2 rounded-xl bg-white dark:bg-[#0d0d0d] border border-black/10 dark:border-white/10 shadow-xl animate-bounce">
              {" "}
              <span className="text-xs font-mono text-cyan-400">
                {" "}
                Running MERN{" "}
              </span>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
      {/* Scroll Down */}{" "}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        {" "}
        <ArrowDown
          size={18}
          className="text-gray-500 dark:text-gray-400"
        />{" "}
      </div>{" "}
    </section>
  );
}

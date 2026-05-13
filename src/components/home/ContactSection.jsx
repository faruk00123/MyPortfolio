import React, { useRef, useState, useEffect } from "react";

export default function ContactSection() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
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
  const onSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    formData.append("access_key", "310c51f6-05f4-45d8-8ec2-cb4cdb1db77c");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSent(true);
      setForm({ name: "", email: "", message: "" });
    }, 1500);
  };
  const contacts = [
    { icon: "📧", label: "Email", value: "omar013faruka@gmail.com" },
    { icon: "💼", label: "LinkedIn", value: "linkedin.com/in/omar" },
    { icon: "🐙", label: "GitHub", value: "https://github.com/faruk00123" },
  ];
  return (
    <section
      id="contact"
      className="py-32 px-4 bg-white dark:bg-[#050505] transition-colors duration-300"
    >
      {" "}
      <div className="max-w-7xl mx-auto" ref={ref}>
        {" "}
        <div
          className={`text-center mb-16 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-mono font-bold text-black dark:text-white mb-4">
            {" "}
            contact me<span className="text-[#00F0FF]">.</span>{" "}
          </h2>{" "}
        </div>{" "}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {" "}
          {/* Left */}{" "}
          <div
            className={`transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
          >
            {" "}
            <h3 className="font-mono font-bold text-black dark:text-white text-xl mb-6">
              {" "}
              Let's work together{" "}
            </h3>{" "}
            <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
              {" "}
              I'm currently available for freelance work and open to new
              opportunities. If you have a project that needs a dedicated
              developer, I'd love to hear from you.{" "}
            </p>{" "}
            <div className="space-y-4">
              {" "}
              {contacts.map((c) => (
                <div
                  key={c.label}
                  className="flex items-center gap-4 p-4 rounded-xl bg-gray-100 dark:bg-[#0d0d0d] border border-black/10 dark:border-white/5 hover:border-[#00F0FF]/20 transition-all group"
                >
                  {" "}
                  <span className="text-2xl">{c.icon}</span>{" "}
                  <div>
                    {" "}
                    <p className="text-xs font-mono text-gray-500">
                      {" "}
                      {c.label}{" "}
                    </p>{" "}
                    <p className="text-sm font-mono text-black dark:text-white group-hover:text-[#00F0FF] transition-colors">
                      {" "}
                      {c.value}{" "}
                    </p>{" "}
                  </div>{" "}
                </div>
              ))}{" "}
            </div>
          </div>{" "}
          {/* Form */}{" "}
          <div
            className={`transition-all duration-700 delay-400 ${visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
          >
            {" "}
            {sent ? (
              <div className="h-full flex items-center justify-center text-center p-8">
                {" "}
                <div>
                  {" "}
                  <div className="text-5xl mb-4">✅</div>{" "}
                  <h3 className="font-mono font-bold text-black dark:text-white text-xl mb-2">
                    {" "}
                    Message Sent!{" "}
                  </h3>{" "}
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {" "}
                    I'll get back to you within 24 hours.{" "}
                  </p>{" "}
                  <button
                    onClick={() => setSent(false)}
                    className="mt-6 text-xs font-mono text-[#00F0FF] hover:underline"
                  >
                    {" "}
                    Send another message{" "}
                  </button>{" "}
                </div>{" "}
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-5">
                {" "}
                <div>
                  {" "}
                  <label className="text-xs font-mono text-gray-600 dark:text-gray-400 mb-2 block">
                    {" "}
                    Your Name{" "}
                  </label>{" "}
                  
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Your full name"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-gray-100 dark:bg-[#0d0d0d] border border-black/10 dark:border-white/10 text-black dark:text-white text-sm font-mono placeholder:text-gray-500 dark:placeholder:text-gray-600 focus:outline-none focus:border-[#00F0FF]/50 transition-colors"
                  />{" "}
                </div>{" "}
                <div>
                  {" "}
                  <label className="text-xs font-mono text-gray-600 dark:text-gray-400 mb-2 block">
                    {" "}
                    Email Address{" "}
                  </label>{" "}
                  
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                    placeholder="Your email address"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-gray-100 dark:bg-[#0d0d0d] border border-black/10 dark:border-white/10 text-black dark:text-white text-sm font-mono placeholder:text-gray-500 dark:placeholder:text-gray-600 focus:outline-none focus:border-[#00F0FF]/50 transition-colors"
                  />{" "}
                </div>{" "}
                <div>
                  {" "}
                  <label className="text-xs font-mono text-gray-600 dark:text-gray-400 mb-2 block">
                    {" "}
                    Message{" "}
                  </label>{" "}
                  
                  <textarea
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                    placeholder="Your message here..."
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl bg-gray-100 dark:bg-[#0d0d0d] border border-black/10 dark:border-white/10 text-black dark:text-white text-sm font-mono placeholder:text-gray-500 dark:placeholder:text-gray-600 focus:outline-none focus:border-[#00F0FF]/50 transition-colors resize-none"
                  />{" "}
                </div>{" "}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 font-mono font-semibold text-sm rounded-xl text-black transition-all duration-300 hover:opacity-90 hover:scale-[1.02] disabled:opacity-50 disabled:scale-100"
                  style={{
                    background: "#00F0FF",
                    boxShadow: "0 0 20px rgba(0,240,255,0.3)",
                  }}
                >
                  {" "}
                  {loading ? "Sending..." : "Send Message →"}{" "}
                </button>{" "}
              </form>
            )}{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </section>
  );
}

import React from "react";
import AnimatedCounter from "./AnimatedCounter";

const AboutMe = () => {
  return (
    <section id="about" className="space-y-4 mb-10">
      <h2 className="text-3xl font-rammetto mb-4">About Me</h2>
      <p className="text-white/80 leading-relaxed text-sm sm:text-base">
        I’m Pranjali, a frontend developer who loves building clean, smooth, and
        high‑performing user interfaces. My focus is on simplicity, speed, and
        creating meaningful digital experiences that help businesses grow.
      </p>
      <p className="text-white/70 leading-relaxed text-sm sm:text-base">
        I specialize in React, Tailwind CSS, and modern UI/UX practices. Over
        the last <b>2 years</b>, I’ve worked on landing pages, portfolio sites,
        business websites, and redesign projects that improved user experience
        and conversions. I care deeply about performance, accessibility, and
        building scalable front‑end structures.
      </p>
      <p className="text-white/70 leading-relaxed text-sm sm:text-base">
        When working with clients, my approach is simple — understand the goal,
        design with intention, build with precision, and deliver results on
        time. My mission is to help brands and founders create a strong online
        presence using clean visual design and modern development tools.
      </p>

      {/* Metrics Section */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mt-6">
        {[
          { value: 2, suffix: "+ yrs", label: "Experience" },
          { value: 40, suffix: "+", label: "UI Components" },
          { value: 20, suffix: "+", label: "Projects Delivered" },
        ].map((item, i) => (
          <div
            key={i}
            className="text-center p-4 rounded-lg bg-white/5 border border-white/10"
          >
            <AnimatedCounter value={item.value} suffix={item.suffix} />
            <p className="text-xs text-white/60 mt-1">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutMe;

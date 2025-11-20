import React from "react";
import AnimatedCounter from "./AnimatedCounter";

const AboutMe = () => {
  return (
    <section id="about" className="space-y-4 mb-10">
      <h2 className="text-3xl font-rammetto mb-4">About Me</h2>
      <p className="text-white/80 leading-relaxed text-sm sm:text-base">
        I’m Pranjali — a frontend developer who loves crafting clean, intuitive,
        and high-performing websites. Over the last two years, I’ve built
        products that consistently score 95–100 on Lighthouse, improve client
        conversions, and elevate overall user experience.
      </p>
      <p className="text-white/70 leading-relaxed text-sm sm:text-base">
        I specialize in React, Tailwind CSS, and building scalable, maintainable
        UIs using a component-driven approach. I care deeply about clean
        architecture, accessibility, and creating interfaces that perform well
        across all devices.
      </p>
      <p className="text-white/70 leading-relaxed text-sm sm:text-base">
        Outside coding, I create lifestyle content on Instagram where I share
        snippets of my routine, creativity, and life in tech..
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

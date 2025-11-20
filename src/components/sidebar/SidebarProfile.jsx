import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import Avatar from "./Avatar";
import TopSkills from "./TopSkills";
import ContactDivider from "./ContactDivider";

const SidebarProfile = () => {
  return (
    <motion.aside
      initial={{ opacity: 0, x: -80 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        type: "spring",
        stiffness: 60,
        damping: 14,
      }}
      className="md:sticky md:top-10 h-fit space-y-6 border border-white/10 p-6 rounded-xl bg-white/5"
    >
      {/* Profile Section */}
      <div className="flex items-start gap-4">
        <Avatar src="/profile.jpg" name="Pranjali Pongde" size={80} />
        <div>
          <div className="text-base font-semibold">Pranjali Pongde</div>
          <div className="mt-2">
            <span className="text-xs bg-green-400 text-black px-2 py-1 rounded-full font-semibold">
              Available
            </span>
          </div>
        </div>
      </div>

      {/* About Me */}
      <div>
        <p className="text-sm text-white/70 leading-relaxed">
          Frontend developer focused on building clean, high-performing, and
          user-centered websites using React and Tailwind. I care about
          simplicity, speed, and creating meaningful digital experiences that
          help businesses grow.
        </p>
      </div>

      {/* top skills */}
      <TopSkills />

      {/* contact divider */}
      <ContactDivider title="Contact" />

      {/* Title */}
      <div>
        <h2 className="text-xl font-rammetto">Frontend Developer</h2>
        <p className="text-sm text-white/70">
          India · Available for Full-time & freelance work
        </p>
      </div>

      {/* Contact Icons */}
      <div className="flex flex-row gap-3 text-sm">
        <a
          href="mailto:pranjalipongde0997@gmail.com"
          className="flex items-center gap-3 group"
        >
          <IoMail
            size={18}
            className="text-white hover:text-yellow-300 transition"
          />
        </a>

        <a
          href="https://github.com/pranjalipongde"
          target="_blank"
          className="flex items-center gap-3 group"
        >
          <FaGithub
            size={18}
            className="text-white hover:text-yellow-300 transition"
          />
        </a>

        <a
          href="https://www.linkedin.com/in/pranjali-pongde/"
          target="_blank"
          className="flex items-center gap-3 group"
        >
          <FaLinkedinIn
            size={18}
            className="text-white hover:text-yellow-300 transition"
          />
        </a>
      </div>

      {/* CV Button */}

      <a
        href="/Pranjali-Resume.pdf"
        download
        className="block w-full text-center bg-yellow-300 text-black py-2 rounded-lg font-semibold hover:bg-yellow-200"
      >
        Download CV
      </a>
    </motion.aside>
  );
};

export default SidebarProfile;

import React from "react";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="w-full border-b border-white/10 py-4 px-4 sm:px-6 lg:px-12 flex justify-between items-center"
    >
      <h1 className="text-2xl font-rammetto tracking-wide">Pranjali.</h1>

      <nav className="hidden md:flex gap-8 text-sm">
        <a href="#projects" className="hover:text-yellow-300">
          Projects
        </a>
        <a href="#services" className="hover:text-yellow-300">
          Services
        </a>
        <a href="#skills" className="hover:text-yellow-300">
          Skills
        </a>
        <a href="#contact" className="hover:text-yellow-300">
          Contact
        </a>
      </nav>
    </motion.header>
  );
};

export default Header;

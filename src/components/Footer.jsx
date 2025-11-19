import React from "react";

const Footer = () => {
  return (
    <footer className="mt-20 py-8 border-t border-white/10 text-center text-sm text-white/60">
      <p>© {new Date().getFullYear()} Pranjali Pongde — All rights reserved.</p>
      <div className="flex justify-center gap-6 mt-3">
        <a
          href="https://github.com/pranjalipongde"
          target="_blank"
          className="hover:text-yellow-300"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/pranjali-pongde/"
          target="_blank"
          className="hover:text-yellow-300"
        >
          LinkedIn
        </a>
        <a href="#contact" className="hover:text-yellow-300">
          Hire Me
        </a>
      </div>
    </footer>
  );
};

export default Footer;

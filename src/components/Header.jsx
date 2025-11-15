import { useState, useEffect } from "react";

const Header = () => {
  return (
    <header className="fixed top-0 right-0 p-2 z-50">
      <nav className="flex flex-col items-end text-lg font-semibold">
        {[
          { id: "home", label: "Home" },
          { id: "about", label: "About" },
          { id: "work", label: "Work" },
          { id: "projects", label: "Projects" },
          { id: "contact", label: "Contact" },
        ].map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className="transition-all duration-300 border-b-2 border-transparent hover:border-white hover:font-extrabold hover:scale-105"
          >
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
};

export default Header;

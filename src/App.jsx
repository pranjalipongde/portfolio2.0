import React from "react";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Skills from "./components/skills";
import SidebarProfile from "./components/sidebar/SidebarProfile";
import Endorsements from "./components/Endorsements";

const App = () => {
  return (
    <div className="min-h-screen bg-black text-[#fffdec] font-sans">
      <Header />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 sm:px-6 lg:px-12 mt-10">
        {/* LEFT SIDEBAR */}
        <SidebarProfile />

        {/* RIGHT CONTENT */}
        <div className="md:col-span-2 space-y-16">
          <Projects />
          <Services />
          <Skills />
          <Endorsements />
          <Contact />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default App;

import { FaLinkedinIn } from "react-icons/fa";
import "./index.css";
import { MdOutlineMailOutline } from "react-icons/md";
import { IoLogoGithub } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";

const App = () => {
  return (
    <section className="">
      <div className="w-full max-w-6xl ml-auto mr-0 mt-6 px-4 sm:px-6 lg:px-8 mb-10">
        <h1 className="font-rammetto text-3xl font-bold tracking-wide mb-2 ">
          <div className="tracking-wider">Pranjali</div>{" "}
          <div className="tracking-wider">Pongde.</div>
        </h1>

        <p className="font-sans text-md font-semibold max-w-[300px]">
          I’m a front-end developer who wants to help make the internet a more
          creative, accessible, and better place.
        </p>

        <div className="flex space-x-6 mt-6 ">
          <a
            href="#"
            className="hover:bg-[#fffdec] hover:rounded-full hover:p-2 w-fit hover:text-black"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="#"
            className="hover:bg-[#fffdec] hover:rounded-full hover:p-2 w-fit hover:text-black"
          >
            <MdOutlineMailOutline />
          </a>
          <a
            href="#"
            className="hover:bg-[#fffdec] hover:rounded-full hover:p-2 w-fit hover:text-black"
          >
            <IoLogoGithub />
          </a>
          <a
            href="#"
            className="hover:bg-[#fffdec] hover:rounded-full hover:p-2 w-fit hover:text-black"
          >
            <FaXTwitter />
          </a>
        </div>
      </div>
    </section>
  );
};

export default App;

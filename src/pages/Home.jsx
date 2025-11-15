import { FaLinkedinIn } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { IoLogoGithub } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";

const socialLinks = [
  {
    icon: <FaLinkedinIn />,
    href: "https://linkedin.com",
    label: "LinkedIn",
  },
  {
    icon: <MdOutlineMailOutline />,
    href: "pranjalipongde0997@gmail.com",
    label: "Email",
  },
  {
    icon: <IoLogoGithub />,
    href: "https://github.com",
    label: "GitHub",
  },
  {
    icon: <FaXTwitter />,
    href: "https://twitter.com",
    label: "Twitter",
  },
];

const Home = () => {
  return (
    <section className="py-10">
      <div className="w-full max-w-6xl ml-auto mr-0 px-4 sm:px-6 lg:px-8">
        <h1 className="font-rammetto text-3xl tracking-wide mb-3">
          <p className="tracking-wider font-semibold">Hey there!</p>
          <p className="tracking-wider font-bold">I'm Pranjali Pongde.</p>
        </h1>

        <p className="font-sans text-md font-semibold max-w-[320px] leading-relaxed">
          I’m a front-end developer who wants to help make the internet a more
          creative, accessible, and better place.
        </p>

        {/* Social Links */}
        <div className="flex space-x-6 mt-6">
          {socialLinks.map(({ icon, href, label }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              target="_blank"
              rel="noreferrer"
              className="transition-all duration-200 hover:bg-[#fffdec] hover:text-black 
                        hover:rounded-full p-2"
            >
              {icon}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;

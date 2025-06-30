import { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaBars, FaTimes } from "react-icons/fa";
import ThemeToggle from "./ThemeToggle";

export default function Navbar({ onContactClick }) {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  const navigation = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { 
      name: "Contact", 
      href: "#contact",
      onClick: (e) => {
        e.preventDefault();
        onContactClick();
        setNav(false);
      }
    }
  ];

  return (
    <div className={`fixed w-full h-20 z-[100] bg-white/90 dark:bg-dark-800/90 backdrop-blur-sm transition-colors duration-300 ${
      shadow ? "shadow-xl" : ""
    }`}>
      <div className="flex justify-between items-center w-full h-full px-4 2xl:px-16">
        {/* Logo - Keep your original logo code */}
        <a href="#home" className="group">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-200 flex items-center">
            <span className="text-blue-600 dark:text-blue-400 inline-block origin-center animate-spin-slow">
              {"<"}
            </span>
            <span className="mx-1">Rachit</span>
            <span className="text-blue-600 dark:text-blue-400 inline-block origin-center animate-spin-slow-reverse">
              {"/>"}
            </span>
          </h1>
        </a>

        <div className="flex items-center gap-8">
          <ul className="hidden md:flex gap-8">
            {navigation.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  onClick={item.onClick}
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium text-lg transition duration-300"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>

          <ThemeToggle />

          <div
            onClick={() => setNav(!nav)}
            className="md:hidden cursor-pointer text-gray-700 dark:text-gray-300"
          >
            {nav ? <FaTimes size={25} /> : <FaBars size={25} />}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {nav && (
        <div className="md:hidden fixed left-0 top-0 w-full h-screen bg-black/70 dark:bg-black/80 backdrop-blur-sm">
          <div className="fixed left-0 top-0 w-[75%] h-screen bg-white dark:bg-dark-800 p-10">
            <div className="flex justify-between items-center mb-12">
              <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
                <span className="text-blue-600 dark:text-blue-400">{"<"}</span>
                Rachit
                <span className="text-blue-600 dark:text-blue-400">{"/>"}</span>
              </h1>
              <div onClick={() => setNav(false)} className="cursor-pointer">
                <FaTimes size={25} className="text-gray-700 dark:text-gray-300" />
              </div>
            </div>

            <ul className="space-y-8">
              {navigation.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    onClick={item.onClick}
                    className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 text-lg block"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>

            <div className="absolute bottom-10 left-10">
              <ThemeToggle />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
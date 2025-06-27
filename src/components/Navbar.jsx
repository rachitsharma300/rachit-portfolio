import { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaBars, FaTimes } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsPersonLinesFill } from 'react-icons/bs';

export default function Navbar() {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);

  // Navbar shadow effect on scroll
  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener('scroll', handleShadow);
  }, []);

  // Navigation items
  const navigation = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <div
      className={
        shadow
          ? 'fixed w-full h-20 shadow-xl z-[100] bg-white/90 backdrop-blur-sm'
          : 'fixed w-full h-20 z-[100] bg-white/90 backdrop-blur-sm'
      }
    >
      <div className="flex justify-between items-center w-full h-full px-4 2xl:px-16">
        {/* Logo/Name */}
        <a href="#home">
          <h1 className="text-2xl font-bold text-gray-800">
            <span className="text-blue-600">{"<"}</span>
            rachit
            <span className="text-blue-600">{"/>"}</span>
          </h1>
        </a>

        {/* Desktop Navigation */}
        <div>
          <ul className="hidden md:flex gap-8">
            {navigation.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="text-gray-700 hover:text-blue-600 font-medium text-lg transition duration-300"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile menu button */}
          <div
            onClick={() => setNav(!nav)}
            className="md:hidden cursor-pointer text-gray-700"
          >
            <FaBars size={25} />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={
          nav
            ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70 backdrop-blur-sm'
            : ''
        }
      >
        <div
          className={
            nav
              ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-white p-10 ease-in duration-500'
              : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <a href="#home" onClick={() => setNav(false)}>
                <h1 className="text-2xl font-bold text-gray-800">
                  <span className="text-blue-600">{"<"}</span>
                  Rachit Sharma
                  <span className="text-blue-600">{"/>"}</span>
                </h1>
              </a>
              <div
                onClick={() => setNav(!nav)}
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
              >
                <FaTimes className="text-gray-700" />
              </div>
            </div>
            <div className="border-b border-gray-300 my-4">
              <p className="w-[85%] md:w-[90%] py-4 text-gray-600">
                Java Full Stack Developer
              </p>
            </div>
          </div>

          <div className="py-4 flex flex-col">
            <ul>
              {navigation.map((item) => (
                <li key={item.name} className="py-4">
                  <a
                    href={item.href}
                    onClick={() => setNav(false)}
                    className="text-gray-700 hover:text-blue-600 text-lg"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>

            <div className="pt-20">
              <p className="uppercase tracking-widest text-blue-600">
                Let's Connect
              </p>
              <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                <a
                  href="https://github.com/yourusername"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <FaGithub className="text-gray-700" />
                  </div>
                </a>
                <a
                  href="https://linkedin.com/in/yourusername"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <FaLinkedin className="text-gray-700" />
                  </div>
                </a>
                <a href="mailto:your.email@example.com">
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <HiOutlineMail className="text-gray-700" />
                  </div>
                </a>
                <a href="/resume.pdf" download>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <BsPersonLinesFill className="text-gray-700" />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
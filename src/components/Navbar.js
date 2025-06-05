import { ArrowRightIcon, SunIcon, MoonIcon, MenuIcon, XIcon } from "@heroicons/react/solid";
import React, { useState } from "react";

export default function Navbar({ onToggleTheme, isBlack }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");

  // Handler to set the active link
  const handleLinkClick = (link) => {
    if (link === "Work" || link === "Skills") {
      setActiveLink(link);
    } else {
      setActiveLink("");
    }
    setIsMenuOpen(false); // close menu on mobile after clicking
  };
  
  return (
    <header
      className={`top-0 z-10 sticky ${
        isBlack ? "bg-black" : "bg-pink-200"
      }`}
      style={{ fontFamily: "'Dancing Script', cursive" }}
    >
      <div className="container mx-auto flex flex-wrap p-5 items-center justify-between">
        <div className="flex items-center mr-3">
          <a
            className="title-font font-medium text-3xl mr-3"
            onClick={() => handleLinkClick("Home")}
            href="#about"
          >
            <span className={`${isBlack ? "text-pink-400" : "text-black"}`}>
              AT
            </span>
          </a>

          {/* Hamburger Icon (visible on mobile) */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="ml-4 md:hidden"
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? (
              <XIcon className={`w-6 h-6 ${isBlack ? "text-white" : "text-black"}`} />
            ) : (
              <MenuIcon className={`w-6 h-6 ${isBlack ? "text-white" : "text-black"}`} />
            )}
          </button>
        

          {/* Navigation Links */}
          <nav
            className={`${
              isMenuOpen ? "block" : "hidden"
            } w-full md:flex md:items-center md:w-auto mt-4 md:mt-0 md:border-l border-slate-50 pl-3`}
          >
            <div className="flex flex-col md:flex-row md:space-x-4 items-center">
              <a
                href="#projects"
                onClick={() => handleLinkClick("Work")}
                className={`hover:underline py-2 md:py-0 cursor-pointer ${
                  isBlack ? "text-white" : "text-black"
                } ${
                  activeLink === "Work"
                    ? "font-bold underline text-pink-400"
                    : ""
                }`}
              >
                Work
              </a>
              <a
                href="#skills"
                onClick={() => handleLinkClick("Skills")}
                className={`hover:underline py-2 md:py-0 cursor-pointer ${
                  isBlack ? "text-white" : "text-black"
                } ${
                  activeLink === "Skills"
                    ? "font-bold underline text-pink-400"
                    : ""
                }`}
              >
                Skills
              </a>
            </div>
          </nav>
        </div>

        <div className="flex items-center space-x-4 mt-4 md:mt-0">
          <button
            onClick={onToggleTheme}
            className={`p-2 rounded-full shadow-md transition ${
              isBlack
                ? "bg-pink-500 text-white hover:bg-pink-400"
                : "bg-black text-white hover:bg-gray-800"
            }`}
            aria-label="Toggle Theme"
          >
            {isBlack ? (
              <SunIcon className="w-5 h-5" />
            ) : (
              <MoonIcon className="w-5 h-5 text-pink-100" />
            )}
          </button>
          <a
            href="#contact"
            onClick={() => handleLinkClick("Contact")}
            className={`inline-flex items-center border-0 py-1 px-3 focus:outline-none rounded text-base transition ${
              isBlack
                ? "bg-gray-800 text-white hover:bg-gray-700"
                : "bg-pink-400 text-black hover:bg-pink-300"
            }`}
          >
            Hire Me
            <ArrowRightIcon className="w-4 h-4 ml-1" />
          </a>
        </div>
      </div>
    </header>
  );
}

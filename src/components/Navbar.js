import { ArrowRightIcon, SunIcon, MoonIcon, MenuIcon, XIcon } from "@heroicons/react/solid";
import React, { useState } from "react";

export default function Navbar({ onToggleTheme, isBlack }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className={`top-0 z-10 sticky ${isBlack ? "bg-black" : "bg-pink-200"}`} style={{ fontFamily: "'Dancing Script', cursive" }}>
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-between">
        {/* Logo / Title */}
        <a className="title-font font-medium mb-4 md:mb-0" href="#about">
          <span className={`ml-3 text-3xl ${isBlack ? "text-pink-400" : "text-black"}`}>AT</span>
        </a>

        {/* Hamburger Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 rounded-full focus:outline-none transition"
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? (
            <XIcon
              className={`w-6 h-6 ${isBlack ? "text-white" : "text-black"}`}
            />
          ) : (
            <MenuIcon
              className={`w-6 h-6 ${isBlack ? "text-white" : "text-black"}`}
            />
          )}
        </button>

        {/* Navigation Links */}
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l flex flex-wrap items-center text-base justify-center border-slate-50">
          <a href="#projects" className={`mr-5 hover:underline ${isBlack ? "text-white" : "text-black"}`}>
            Work
          </a>
          <a href="#skills" className={`mr-5 hover:underline ${isBlack ? "text-white" : "text-black"}`}>
            Skills
          </a>
        </nav>

        {/* Theme Toggle Button */}
        <button
          onClick={onToggleTheme}
          className={`p-2 rounded-full shadow-md transition mr-4 ${
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

        {/* Hire Me Button */}
        <a
          href="#contact"
          className={`inline-flex items-center border-0 py-1 px-3 focus:outline-none rounded text-base mt-4 md:mt-0 transition ${
            isBlack ? "bg-gray-800 text-white hover:bg-gray-700" : "bg-pink-400 text-black hover:bg-pink-300"
          }`}
        >
          Hire Me
          <ArrowRightIcon className="w-4 h-4 ml-1" />
        </a>
      </div>
    </header>
  );
}
import React, { useState } from "react";

const About = ({ onToggleTheme, isBlack }) => {

  return (
    <div
      className={`min-h-screen transition duration-500 ${
        isBlack ? "bg-black text-white" : "bg-pink-100 text-black"
      }`}
      style={{ fontFamily: "'Dancing Script', cursive" }}
    >

      {/* Hero Section */}
      <section 
        id="about" 
        className={`relative min-h-screen items-center justify-center transition duration-500  py-20 ${isBlack ? "bg-black text-white" : "bg-pink-100 text-black"}`} 
        style={{ fontFamily: "'Dancing Script', cursive" }}
      >
        <div className="container mx-auto flex px-10 md:flex-row flex-col items-center">
          <div className="about_div">
            <h1 className={`text-6xl mb-4 ${isBlack ? "text-pink-400" : "text-black"}`}>
              Hi, I'm  Aye Thiri Mon {isBlack ? "🖤" : "💖"}
            </h1>
            <h5 className={`text-3xl mb-7 ${isBlack ? "text-white-400" : "text-black"}`}>
              I love to build Web Apps.
            </h5>
            <p className="mb-8 leading-relaxed">
              Web developer with over a year experience in full-stack development with PHP and one year plus in React JS development and passion for responsive website design. 
            </p>
            <div className="flex justify-center">
              <a
                href="#contact"
                className="work_with_me">
                Work With Me
              </a>
              <a
                href="#projects"
                className="see_my_work">
                See My Work
              </a>
            </div>
          </div>
          <div className="flex lg:max-w-lg lg:w-full md:w-1/2 w-5/6 rounded-xl ">
            <img
              className="object-cover object-center h-1/3 rounded"
              alt="hero"
              src="https://ayethirimon.github.io/aye-thiri-portfolio/images/drawing_system.svg"
            />
            </div>
          </div>
        </section>
      
    </div>
  );
};



export default About;
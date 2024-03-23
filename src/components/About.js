import React from "react";

const About = () => {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-5 md:flex-row flex-col items-center">
        <div className="about_div">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm  Aye Thiri Mon.
            <br className="hidden lg:inline-block" />I love to build Web Apps.
          </h1>
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
        <div className="flex lg:max-w-lg lg:w-full md:w-1/2 w-5/6 rounded-xl shadow-lg">
          <img
            className="object-cover object-center h-1/3 rounded"
            alt="hero"
            src="https://ayethirimon.github.io/aye-thiri-portfolio/images/drawing_system.svg"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
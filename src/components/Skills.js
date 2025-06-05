import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";
import React from "react";
import { skills } from "../data";

const Skills = ({isBlack}) => {
  return (
    <section id="skills" className={`py-16 px-6 ${isBlack ? "bg-black text-white" : "bg-pink-100 text-black"}`}>
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl mb-6 font-bold">Skills & Technologies</h2>
        <p className="mb-8">
          As a full-stack developer, I’m passionate about writing clean, maintainable code and building responsive designs that deliver a seamless user experience. Below is a quick overview of my technical proficiency:
        </p>

        {/* Skills Bar Graph */}
        <div className="space-y-6">
          <div>
            <div className="flex justify-between mb-1">
              <span>HTML</span>
              <span>100%</span>
            </div>
            <div className="w-full bg-gray-300 rounded-full h-4">
              <div className="bg-pink-500 h-4 rounded-full" style={{ width: "100%" }}></div>
            </div>
          </div>
          <div>
            <div className="flex justify-between mb-1">
              <span>Javascript</span>
              <span>90%</span>
            </div>
            <div className="w-full bg-gray-300 rounded-full h-4">
              <div className="bg-pink-500 h-4 rounded-full" style={{ width: "90%" }}></div>
            </div>
          </div>
          <div>
            <div className="flex justify-between mb-1">
              <span>JQuery</span>
              <span>90%</span>
            </div>
            <div className="w-full bg-gray-300 rounded-full h-4">
              <div className="bg-pink-500 h-4 rounded-full" style={{ width: "90%" }}></div>
            </div>
          </div>
          <div>
            <div className="flex justify-between mb-1">
              <span>CSS</span>
              <span>95%</span>
            </div>
            <div className="w-full bg-gray-300 rounded-full h-4">
              <div className="bg-pink-500 h-4 rounded-full" style={{ width: "95%" }}></div>
            </div>
          </div>
          <div>
            <div className="flex justify-between mb-1">
              <span>Pure PHP/Laravel PHP</span>
              <span>90%</span>
            </div>
            <div className="w-full bg-gray-300 rounded-full h-4">
              <div className="bg-pink-500 h-4 rounded-full" style={{ width: "90%" }}></div>
            </div>
          </div>
          <div>
            <div className="flex justify-between mb-1">
              <span>React JS</span>
              <span>80%</span>
            </div>
            <div className="w-full bg-gray-300 rounded-full h-4">
              <div className="bg-pink-500 h-4 rounded-full" style={{ width: "80%" }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
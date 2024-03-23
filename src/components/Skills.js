import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";
import React from "react";
import { skills } from "../data";

export default function Skills() {
  return (
    <section id="skills">
      <div className="container_p_xy_510_mx_auto">
        <div className="text-center mb-20">
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            Skills &amp; Technologies
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
          I work as a full-stack developer, aiming to create clean code and responsive designs for user-friendly systems. I'm showcasing my skills using graphs proficiency in PHP, CSS, and more.
          </p>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {skills.map((skill) => (
            <div className="progress">
              {/* <div class="" style={{background: `${skill.color}`}}><span>{skill.name}</span></div> */}
              <div className="progress-bar" role="progressbar" style={{width: `${skill.value}%`}} aria-valuenow={`${skill.value}`} aria-valuemin="0" aria-valuemax="100">
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
"use client";

import React from "react";
import { skills1, skills2 } from "@/data";
import { InfiniteSkillsMovingCards } from "./ui/InfiniteSkillsCards";

const Skills = () => {
  return (
    <section id="skills" className="mt-20 py-20 z-10 ">
     <h1 className="heading">
        My <span className="text-purple">Skills</span>
      </h1>
      <div className="flex flex-col items-center max-lg:mt-10">
        <div className="h-[50vh] md:h-[30rem] rounded-lg flex flex-col antialiased items-center justify-center relative overflow-hidden">
          <InfiniteSkillsMovingCards items={skills1} direction="right" speed="slow" />
          <InfiniteSkillsMovingCards items={skills2} direction="left" speed="slow" />
        </div>
      </div>
    </section>
  );
};

export default Skills;
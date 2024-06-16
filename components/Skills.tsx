"use client";

import React from "react";
import { skills1, skills2 } from "@/data";
import { InfiniteSkillsMovingCards } from "./ui/InfiniteSkillsCards";

const Skills = () => {
  return (
    <section id="skills" className="m-20 py-20  ">
     <h1 className="heading z-50">
        My <span className="text-purple ">Skills</span>
      </h1>
      <div className="flex flex-col items-center max-lg:mt-10">
        <div className="h-[50vh] md:h-[30rem] rounded-3xl flex flex-col gap-6 antialiased items-center justify-center relative overflow-hidden">
          <InfiniteSkillsMovingCards items={skills1} direction="right" speed="slow" />
          <InfiniteSkillsMovingCards items={skills2} direction="left" speed="slow" />
        </div>
      </div>
    </section>
  );
};

export default Skills;
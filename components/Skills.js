import React, { useEffect, useRef, useState } from "react";
import { clearInterval } from "timers";
import SingleSkill from "./SingleSkill";
import { Cog8ToothIcon } from "@heroicons/react/20/solid";
import SkillsContainer from "./SkillsContainer";
function Skills() {
  const [skills, setSkills] = useState([
    "HTML",
    "CSS",
    "TAILWINDCSS",
    "JAVASCRIPT",
    "WORDPRESS",
    "REACT JS",
    "NEXT JS",
    "TYPESCRIPT",
    "GIT",
    "FIGMA",
  ]);
  const [isEdit, setIsEdit] = useState(false);
  function editHandler() {
    setIsEdit(!isEdit);
  }
  return (
    <>
      <ul
        className={`mx-64 relative flex flex-wrap items-center columns-3 flex-shrink-1 flex-grow justify-start bg-red-400 bg-opacity-40 rounded-t-lg`}
      >
        <SkillsContainer isEdit={isEdit} />

        <button
          onClick={editHandler}
          className="absolute right-[-30px] bottom-[-30px] w-[60px] h-[60px] bg-red-800  rounded-full active:scale-90"
        >
          <Cog8ToothIcon className="m-4 opacity-100" />
        </button>

        <button className="absolute right-[-15px] bottom-[-15px] w-[30px] h-[30px] bg-red-800 border border-red-950 opacity-60 rounded-full pointer-events-none animate-ping"></button>
      </ul>
    </>
  );
}

export default Skills;

import React, { useEffect, useRef, useState } from "react";
import { clearInterval } from "timers";
import SingleSkill from "./SingleSkill";
import { Cog8ToothIcon } from "@heroicons/react/20/solid";
import SkillsContainer from "./SkillsContainer";
import AOS from "aos";
import "aos/dist/aos.css";
import AddSkillsModal from "./AddSkillsModal";
function Skills() {
  const [isEdit, setIsEdit] = useState(false);

  function editHandler() {
    setIsEdit(!isEdit);
  }
  useEffect(() => {
    AOS.init();
  }, []);

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

      {/* <AddSkillsModal isOpen={addModalOpen} setIsOpen={setAddModalOpen} /> */}

      {isEdit && (
        <div
          className="self-center text-xl bg-red-400 bg-opacity-40 rounded-b-lg p-5"
          data-aos="flip-down"
        >
          You can drag and drop, remove, add skills.
          <br /> Through this portfolio I want to show my fundamental knowledge
          of react. <br />
          For the main title animation I used refs. Here I use context.
          <br />I am fast at learning and my google-ing skills are good. haha
          <br /> I think it is important to use the newest technology and always
          be up to date.
          <br />
          For this drag and drop effect I used{" "}
          <a className="underline" target="_blank" href="https://dndkit.com/">
            dnd-kit
          </a>{" "}
          for react.
        </div>
      )}
    </>
  );
}

export default Skills;

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
        style={{ transform: "none" }}
        data-aos="fade up"
        data-aos-offset="300"
        className={`mx-64 relative flex flex-wrap items-center columns-3 flex-shrink-1 flex-grow justify-start bg-gray-400 bg-opacity-40 rounded-t-lg mobile:mx-0`}
      >
        <SkillsContainer isEdit={isEdit} />

        <button
          onClick={editHandler}
          className="absolute right-[-30px] bottom-[-30px] w-[60px] h-[60px] bg-gray-800  rounded-full active:scale-90 mobile:z-30 mobile:right-[30px] "
        >
          <Cog8ToothIcon className="m-4 opacity-100" />
        </button>

        <button className="absolute right-[-15px] bottom-[-15px] w-[30px] h-[30px] bg-gray-800 border border-gray-950 opacity-60 rounded-full pointer-events-none animate-ping mobile:right-[45px]  mobile:z-40"></button>
      </ul>

      {/* <AddSkillsModal isOpen={addModalOpen} setIsOpen={setAddModalOpen} /> */}

      {isEdit && (
        <div
          className="self-center text-xl bg-gray-400 bg-opacity-40 rounded-b-lg p-5 -z-10 top-full"
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

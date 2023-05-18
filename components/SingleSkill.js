import React, { useEffect, useState } from "react";
import { useItems } from "./SkillsContainer";

function SingleSkill({ skill, isEdit }) {
  const [bounce, setBounce] = useState(false);
  function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const { items, setItems, activeId } = useItems();
  function deleteSelf() {
    let index = items.findIndex((item) => item == skill);

    setItems([...items.slice(0, index), ...items.slice(index + 1)]);
  }

  useEffect(() => {
    if (isEdit)
      setTimeout(() => {
        setBounce(true);
      }, randomNumber(100, 400));
    else
      setTimeout(() => {
        setBounce(false);
      }, randomNumber(50, 200));
  }, [isEdit]);

  return (
    <div
      style={({ top: "auto !important" }, { left: "auto !important" })}
      className={`relative py-2 px-4 select-none bg-pink-50 rounded-2xl text-center m-4 text-2xl cursor-grab duration-75 ${
        bounce && "animate-bounce"
      }  ${activeId && "active:opacity-0 cursor-grabbing"} `}
    >
      {skill}
      {isEdit && (
        <button
          onClick={deleteSelf}
          className="absolute w-2 h-2 top-[-0.8rem] right-[0] text-red-800 z-[10000]"
        >
          X
        </button>
      )}
    </div>
  );
}

export default SingleSkill;

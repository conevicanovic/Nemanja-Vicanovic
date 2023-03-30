import React, { useEffect, useState } from "react";

function SingleSkill({ skill, isEdit }) {
  const [bounce, setBounce] = useState(false);
  function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
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
      className={`py-2 px-4 select-none bg-pink-50 rounded-2xl text-center m-4 text-2xl cursor-default duration-75 ${
        bounce && "animate-bounce active:opacity-0"
      } hover:animate-none `}
    >
      {skill}
    </div>
  );
}

export default SingleSkill;

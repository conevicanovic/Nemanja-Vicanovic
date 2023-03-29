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
    <li
      className={`py-2 px-4 bg-pink-50 rounded-2xl text-center m-4 text-2xl cursor-default duration-75 ${
        bounce && "animate-bounce"
      } hover:animate-none active:animate-wiggle active:absolute`}
    >
      {skill}
    </li>
  );
}

export default SingleSkill;

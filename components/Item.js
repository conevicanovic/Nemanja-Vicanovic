import React, { forwardRef } from "react";
import SingleSkill from "./SingleSkill";

// eslint-disable-next-line react/display-name
export const Item = forwardRef(({ id, isEdit, ...props }, ref) => {
  return (
    <li {...props} ref={ref} className={`${isEdit && ""}`}>
      <SingleSkill skill={props.skill} isEdit={isEdit} />
    </li>
  );
});

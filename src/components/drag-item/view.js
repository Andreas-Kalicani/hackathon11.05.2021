import React, { forwardRef } from "react";
import "./styles.css";

export default forwardRef(({ data, classValue }, ref) => {
  return (
    <div className={`item ${classValue}`} ref={ref}>
      <p className="title-task">{data.task}</p> 
      <p className="points">Points:{data.points}</p> 
    </div>
  );
});

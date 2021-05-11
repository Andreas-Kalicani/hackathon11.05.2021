import React from "react";
import './Tasks.css'
const Tasks = ({task, points, index}) => {
  return (
    <div key={index} className="task-container">     
       <h1 className="task-title">{task}</h1>
       <p>{points}</p>
    </div>   
  );
}

export default Tasks;
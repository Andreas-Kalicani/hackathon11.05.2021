import React from "react";
import './Tasks.css'


const Tasks = ({task, points, index}) => {
  return (
    <div key={index} className="task-container">     
       <h1 className="task-title">{task}</h1>
       <div className="points-button">
        <p>Points:{points}</p>
        <button> Do it!</button> 
       </div>
       
    </div>   
  );
}

export default Tasks;
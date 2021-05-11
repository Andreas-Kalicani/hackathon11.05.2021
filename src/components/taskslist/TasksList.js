import React from 'react'
import Tasks from './Tasks'
import './Tasks.css'

  function TasksList({tasksList}){
    return (
      <div  className="allTask-containers" >
        <h1>TO DO</h1>
        {tasksList.map((task, index) => (
          <Tasks
            key={index}
            {...task}
          />
          
        ))}
        <button>Do it!</button>
      </div>
    );
  };
  
  export default TasksList;
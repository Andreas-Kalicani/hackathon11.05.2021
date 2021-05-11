import React from 'react'

export const TaskRow = ({tasks,task, progress, done,}) => (
        <tr key={task}>
          <td>{task}</td>
          <td>
              <input type="checkbox" 
              checked={progress}
              onChange=""/>
          </td>
          <td>
              <input type="checkbox" 
              checked={done}
              onChange=""/>
          </td>
        </tr>
)
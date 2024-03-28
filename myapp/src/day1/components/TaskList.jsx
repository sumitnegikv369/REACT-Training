import React from 'react'

const TaskList = ({ tasks }) => {
  return (
    <ul>
      {tasks.map((task) => (
        <li style={{
            fontSize: "1rem",
            backgroundColor: "#3331",
            padding: "1rem",
            margin: "1rem 0"
        }} key={task.name}>{task.name}</li>
      ))}
    </ul>
  )
}

export default TaskList

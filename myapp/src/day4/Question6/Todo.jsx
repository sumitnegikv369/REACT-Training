import React, { useState } from 'react'

const Todo = () => {
    const [tasks, setTasks] = useState([]);
    const [value, setValue] = useState("");
    const handleTask = () => {
      const newTasks = [...tasks, value]
      setTasks([...newTasks]);
      setValue("");
    }
  return (
    <div>
        <input type="text" placeholder='add a new task' value={value} onChange={(e)=>setValue(e.target.value)}/>
        <button onClick={handleTask}>Add</button>

        <ul>
          {tasks.map((task)=>(
            <li key={task}>
              {task}
            </li>
          ))}
        </ul>
    </div>
  )
}

export default Todo 
import React, { useState } from 'react'
import './styles.css'
const Todo = () => {
  const [tasks, setTasks] = useState([])
  const [value, setValue] = useState('')
  const handleTask = () => {
    const newTasks = [...tasks, value]
    setTasks([...newTasks])
    setValue('')
  }
  const removetask = (index) => {
    setTasks((prevTask) => prevTask.filter((_, i) => i !== index))
  }
  return (
    <div className="ques6">
      <div className="inputarea">
        <input
          type="text"
          placeholder="add a new task"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button onClick={handleTask}>Add</button>
      </div>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task} <span onClick={() => removetask(index)}>x</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Todo

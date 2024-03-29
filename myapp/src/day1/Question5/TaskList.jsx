import React from 'react'
import styles from './question5.css'
const TaskList = ({ tasks }) => {
  return (
    <ul>
      {tasks.map((task) => (
        <li className={styles} key={task.name}>
          {task.name}
        </li>
      ))}
    </ul>
  )
}

export default TaskList

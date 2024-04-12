import { useCallback, useState } from 'react'
import Task from './Task'
import './styles.css'

const data = [
  {
    id: 1,
    title: 'Task 1',
    description: 'This is the description for Task 1.',
    isCompleted: false,
  },
  {
    id: 2,
    title: 'Task 2',
    description: 'This is the description for Task 2.',
    isCompleted: true,
  },
  {
    id: 3,
    title: 'Task 3',
    description: 'This is the description for Task 3.',
    isCompleted: false,
  },
]

const Tasks = () => {
  const [tasks, setTasks] = useState(data)

  const buttonHandler = useCallback(
    (id) => {
      setTasks((prevTasks) =>
        prevTasks.map((task) =>
          task.id === id ? { ...task, isCompleted: true } : task,
        ),
      )
    },
    [setTasks],
  )

  return (
    <div>
      {tasks.map((task) => (
        <Task
          key={task.id}
          isCompleted={task.isCompleted}
          description={task.description}
          id={task.id}
          buttonHandler={buttonHandler}
        />
      ))}
    </div>
  )
}

export default Tasks

import React from 'react'
import TaskList from './TaskList'

const index = () => {
  let tasks = [
    {
      name: 'Complete project proposal',
      priority: 'High',
      deadline: '2024-04-05',
    },
    {
      name: 'Prepare presentation slides',
      priority: 'Medium',
      deadline: '2024-04-10',
    },
    {
      name: 'Review code for bug fixes',
      priority: 'Low',
      deadline: '2024-04-15',
    },
  ]

  return (
    <div>
      <TaskList tasks={tasks} />
    </div>
  )
}

export default index

// 5.Create a functional component named TaskList that accepts an array of task names as a prop.
// Use the map function to render each task name as a list item.
// Import and render the TaskList component in the App component with an array of tasks.

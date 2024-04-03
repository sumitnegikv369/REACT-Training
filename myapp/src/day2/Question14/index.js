import React from 'react'
import Tasks from './Tasks'

const index = () => {
  return (
    <div><Tasks/></div>
  )
}

export default index

// 14.create a component that displays a list of tasks.
// Each task has a "Complete" button.
// Implement a feature where clicking the "Complete" button marks the task as completed.
// Use the useCallback hook to create dynamic callback functions for each task.
// Ensure that clicking the "Complete" button for one task doesn't trigger unnecessary re-renders for other tasks.


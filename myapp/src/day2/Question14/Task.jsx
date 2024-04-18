import { memo } from 'react'

const Task = ({ isCompleted, description, id, buttonHandler }) => {
  console.log(id)
  return (
    <li className={`${isCompleted && 'disable'} task`}>
      <span>{description}</span>
      <button onClick={() => buttonHandler(id)}>completed?</button>
    </li>
  )
}

export default memo(Task)

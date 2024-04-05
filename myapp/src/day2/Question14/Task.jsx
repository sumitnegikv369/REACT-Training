const Task = ({ task, buttonHandler }) => {
  return (
    <li className={`${task.isCompleted && 'disable'} task`}>
      <span>{task.description}</span>
      {console.log("taskid: ", task.id)}
      <button onClick={() => buttonHandler(task.id)}>completed?</button>
    </li>
  )
}

export default Task

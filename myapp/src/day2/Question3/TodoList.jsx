import { useState } from 'react'
import './styles.css'

const data = [
  {
    todo: 'Learn React',
    completed: false,
  },
  {
    todo: 'Practice JavaScript',
    completed: true,
  },
  {
    todo: 'Build a portfolio website',
    completed: false,
  },
]

const TodoList = () => {
  const [todos, setTodos] = useState(data)

  const checkboxHandler = (val) => {
    const filteredTodos = todos.map((todo) => {
      if (todo.todo === val) {
        todo.completed = !todo.completed
      }
      return todo
    })
    setTodos(filteredTodos)
  }

  const deleteHandler = (value) => {
    const filteredTodos = todos.filter((todo) => todo.todo !== value)
    setTodos(filteredTodos)
  }

  return (
    <ul className="todos">
      {todos.map((todo) => (
        <li key={todo.todo}>
          <input
            type="checkbox"
            onChange={() => checkboxHandler(todo.todo)}
            checked={todo.completed}
          />
          <span
            style={
              todo.completed
                ? { textDecoration: 'line-through', color: '#3336' }
                : {}
            }
          >
            {todo.todo}
          </span>
          <button onClick={() => deleteHandler(todo.todo)}>Delete</button>
        </li>
      ))}
    </ul>
  )
}

export default TodoList

import { useMemo, useState } from 'react'
import './styles.css'

let data = ['Alice', 'Bob', 'Charlie', 'David', 'Emma', 'Frank']

const StudentList = () => {
  const [names, setNames] = useState(data)
  const [name, setName] = useState('')
  const students = useMemo(() => names, [names])
  const addNewStudent = () => {
    students.push(name)
    setName('')
  }
  return (
    <div className="students">
      <div>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button onClick={addNewStudent}>Add</button>
      </div>
      <ul>
        {names.map((student, index) => (
          <li key={index}>{student}</li>
        ))}
      </ul>
    </div>
  )
}

export default StudentList

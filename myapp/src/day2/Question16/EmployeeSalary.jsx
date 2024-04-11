import { useState, useMemo } from 'react'
import './styles.css'

const EmployeeSalary = () => {
  const [employees, setEmployees] = useState([
    { name: 'John', salary: 50000 },
    { name: 'Jane', salary: 60000 },
    { name: 'Doe', salary: 55000 },
    { name: 'Smith', salary: 58000 },
  ])

  const averageSalary = useMemo(() => {
    const totalSalary = employees.reduce((acc, emp) => acc + emp.salary, 0)
    return totalSalary / employees.length
  }, [employees])

  const updateSalaries = () => {
    setEmployees([
      { name: 'John', salary: Math.floor(Math.random() * 70000) + 40000 },
      { name: 'Jane', salary: Math.floor(Math.random() * 70000) + 40000 },
      { name: 'Doe', salary: Math.floor(Math.random() * 70000) + 40000 },
      { name: 'Smith', salary: Math.floor(Math.random() * 70000) + 40000 },
    ])
  }

  return (
    <div className="employee">
      <h2>Average Salary: ${averageSalary}</h2>
      <button onClick={updateSalaries}>Update Salaries</button>
    </div>
  )
}

export default EmployeeSalary

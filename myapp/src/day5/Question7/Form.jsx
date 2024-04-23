import { useState } from 'react'
import axios from 'axios'
import './styles.css'

const Form = () => {
  const data = {
    firstname: '',
    lastname: '',
  }
  const [inputdata, setInputdata] = useState(data)
  const handledata = (e) => {
    setInputdata({ ...inputdata, [e.target.name]: e.target.value })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    axios
      .post('https://jsonplaceholder.typicode.com/todos', inputdata)
      .then((response) => console.log(response))
  }
  return (
    <div className="ques7">
      <input
        type="text"
        name="firstname"
        value={inputdata.firstname}
        onChange={handledata}
        placeholder="enter first name"
      />
      <input
        type="text"
        name="lastname"
        value={inputdata.lastname}
        onChange={handledata}
        placeholder="enter last name"
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Form

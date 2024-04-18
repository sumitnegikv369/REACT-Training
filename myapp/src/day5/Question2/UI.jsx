import React, { useState } from 'react'
import './styles.css'

const UI = () => {
  const [isError, setIsError] = useState(null)
  const [userInfo, setUserInfo] = useState([])

  const correctURL = 'https://jsonplaceholder.typicode.com/users'
  const incorrectURL = 'https://jsonplaceholder.typicode/users'

  const getUserData = async (url) => {
    try {
      const res = await fetch(url)
      const data = await res.json()

      console.log(data)
      setUserInfo(data)
      setIsError(null)
    } catch (error) {
      console.log(error.message)
      setIsError(error.message)
    }
  }
  return (
    <div className="ques2">
      <div className="buttons">
        <button onClick={() => getUserData(correctURL)}>
          Try Correct URL 🟢
        </button>
        <button onClick={() => getUserData(incorrectURL)}>
          Try Incorrect URL 🔴
        </button>
      </div>
      <div className="users">
        {isError ? (
          <p>{isError}</p>
        ) : (
          userInfo.map((info) => (
            <div key={info.id}>
              <h1>{info.name}</h1>
              <p>{info.email}</p>
            </div>
          ))
        )}
      </div>
    </div>
  )
}

export default UI

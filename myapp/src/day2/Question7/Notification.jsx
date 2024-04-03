import { useEffect, useState } from 'react'
import './styles.css'

const Notification = () => {
  const [message, setMessage] = useState('')
  const [text, setText] = useState('')
  useEffect(() => {
    const timer = setTimeout(() => {
      setMessage('')
    }, 5000)

    return () => clearTimeout(timer)
  }, [message])
  return (
    <div className="notification">
      {message.length > 0 && <p>{message}</p>}
      <input
        type="text"
        placeholder="enter new message"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        onClick={() => {
          setMessage(text)
          setText('')
        }}
      >
        Send Notification
      </button>
    </div>
  )
}

export default Notification

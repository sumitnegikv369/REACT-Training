import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {
  const navigate = useNavigate()
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/')
    }, 3000)
    return () => clearTimeout(timer)
  })
  return <div>404 Not Found</div>
}

export default NotFound

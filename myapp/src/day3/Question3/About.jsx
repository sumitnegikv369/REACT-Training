import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {
  const navigate = useNavigate()
  useEffect(() => {
    // The useEffect hook is used here to ensure that the home page can be shown in cases where there might not be a similar route like the about.page in another assignment question.
    const timer = setTimeout(() => {
      navigate('/')
    }, 3000)
    return () => clearTimeout(timer)
  })
  return <div>About</div>
}

export default About

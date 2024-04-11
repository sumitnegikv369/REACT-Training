import { useContext } from 'react'
import { MyContext } from './ThemeSwitcher'

const UI = () => {
  const { theme, setTheme } = useContext(MyContext)

  return (
    <>
      <div className="toggle">
        <button onClick={() => setTheme(true)}>☀️</button>
        <button onClick={() => setTheme(false)}>🌙</button>
      </div>
      <div className={`ui ${theme ? 'light' : 'dark'}`}>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit
          culpa officiis qui quam quasi, hic quo molestias itaque. Harum
          molestias laudantium quisquam similique facilis corrupti nulla saepe
          magnam at quidem?
        </p>
        <button>Submit</button>
      </div>
    </>
  )
}

export default UI

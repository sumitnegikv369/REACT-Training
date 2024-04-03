import { createContext, useState } from "react";
import UI from "./UI";
import './styles.css'

export const MyContext = createContext(null);

const ThemeSwitcher = () => {
    const [theme, setTheme] = useState(false);
  return (
    <MyContext.Provider value={{theme, setTheme}}>
        <UI/>
    </MyContext.Provider>
  )
}

export default ThemeSwitcher
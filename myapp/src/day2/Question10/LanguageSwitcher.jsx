import { createContext, useState } from "react";
import UI from "./UI";
import './styles.css'

const languages = ["english","hindi","japanese","spanish"];

export const MyContext = createContext(null);

const LanguageSwitcher = () => {
    const [language, setLanguage] = useState('english');
    return (
        <>
        <select onClick={(e)=>setLanguage(e.target.value)}>
            {
                languages.map((lang)=>(
                    <option key={lang} value={lang}>{lang}</option>
                ))
            }
        </select>
        <MyContext.Provider value={{language}}>
            <UI/>
        </MyContext.Provider>
        </>
    )
}

export default LanguageSwitcher;
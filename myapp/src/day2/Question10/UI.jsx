import React, { useContext, useEffect, useState } from 'react'
import { MyContext } from './LanguageSwitcher';
import { translations } from './data';

const UI = () => {
    const {language} = useContext(MyContext);
    const [content, setContent] = useState(null);

    useEffect(()=>{
        const filterTranslation = translations.filter((translation)=>translation.language === language);
        setContent(filterTranslation[0]);
    }, [language]);

  return (
    <div className='content'>
        {
            content && <>
            <p>{content.content.para}</p>
        <button>{content.content.button}</button>
            </>
        }
    </div>
  )
}

export default UI
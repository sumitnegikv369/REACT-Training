import { useEffect, useState } from 'react'
import './styles.css'
import useLocalStorage from './useLocalStorage'

const setting = {
  theme: 'dark',
  language: 'english',
}

const UserPreference = () => {
  const [preference, setPreference] = useState(setting)
  const [getItem, removeItem, setItem] = useLocalStorage()
  const [currentPreference, setCurrentPreference] = useState(preference)

  const handlePreferenceChange = (key, value) => {
    preference[key] = value
    const updatedPreference = preference
    setPreference(updatedPreference)
  }

  useEffect(() => {
    setCurrentPreference(getItem('userData'))
  }, [])

  const handleButtonClick = (e) => {
    if (e === 'set') {
      setItem('userData', preference)
    } else {
      removeItem('userData')
    }
    setCurrentPreference(getItem('userData'))
  }

  return (
    <div className="preference">
      <section>
        <p>Please select your prefered Theme:</p>
        <div>
          <input
            type="radio"
            name="theme"
            value="dark"
            onChange={() => handlePreferenceChange('theme', 'dark')}
          />
          <label htmlFor="dark">DARK</label>
          <input
            type="radio"
            name="theme"
            value="light"
            onChange={() => handlePreferenceChange('theme', 'light')}
          />
          <label htmlFor="light">LIGHT</label>
        </div>
        <br />
        <p>Please select your prefered Language:</p>
        <div>
          <input
            type="radio"
            name="language"
            value="english"
            onChange={() => handlePreferenceChange('language', 'english')}
          />
          <label htmlFor="english">ENGLISH</label>
          <input
            type="radio"
            name="language"
            value="hindi"
            onChange={() => handlePreferenceChange('language', 'hindi')}
          />
          <label htmlFor="hindi">HINDI</label>
        </div>
        <button onClick={() => handleButtonClick('set')}>
          Submit Preference
        </button>
        <button onClick={() => handleButtonClick('')}>Remove Preference</button>
      </section>
      <div
        className={
          currentPreference && currentPreference.theme === 'dark'
            ? 'dark'
            : 'light'
        }
      >
        {currentPreference && currentPreference.language === 'english' ? (
          <>
            The sun sets in the west, painting the sky with hues of orange and
            pink. Birds return to their nests as the day comes to a peaceful
            end.
          </>
        ) : (
          <>
            सूर्य पश्चिम में अस्त होता है, नारंगी और गुलाबी रंगों से आकाश को
            रंगीन करता है। दिन का अंत होते ही पक्षियाँ अपने घर लौटती हैं।
          </>
        )}
      </div>
    </div>
  )
}

export default UserPreference

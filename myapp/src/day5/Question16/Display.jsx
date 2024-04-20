import React from 'react'
import FetchData from './FetchData.jsx'
import './styles.css'

const Display = ({ data }) => {
  return (
    <div className="ques16">
      {data &&
        data.countries.slice(0, 10).map((country) => (
          <div key={country.name}>
            <p>
              {country.name}
              <span>{country.emoji}</span>
            </p>
          </div>
        ))}
    </div>
  )
}

export default FetchData(Display)

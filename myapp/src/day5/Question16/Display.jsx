import React from 'react'
import FetchData from './FetchData'

const Display = ({data}) => {
    console.log(data.countries)
  return (
    <div>{data.countries.slice(0,10).map((country)=>(
        <div key={country.name}>
            <p>{country.name}
            <span>{country.emoji}</span>
            </p>
        </div>
    ))}</div>
  )
}

export default FetchData(Display)
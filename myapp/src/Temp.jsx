import React, { useRef, useState } from 'react'

const Temp = () => {
  const data = ['sumit', 'kavi', 'rohit']

  const ref = useRef([])

  return (
    <div>
      {data.map((i, index) => (
        <h1
          ref={(el) => (ref.current[index] = el)}
          onClick={() => console.log(ref.current[index].textContent)}
        >
          {i}
        </h1>
      ))}
    </div>
  )
}

export default Temp

// handling large data set - throttling on scroll
// Profiling and Dev tools
// Internationalization (i18n) and Localization (l10n) - language switcher
// Authentication and Authorization - JWT user authentication

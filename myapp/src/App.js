import React from 'react'
import { Question1, Question2, Question3 } from './day1'
import Tag from './day1/components/Tag'

const App = () => {
  return (
    <>
      <Tag questionNumber={1} />
      <Question1 />
      <Tag questionNumber={2} />
      <Question2 />
      <Tag questionNumber={3} />
      <Question3 />
    </>
  )
}

export default App

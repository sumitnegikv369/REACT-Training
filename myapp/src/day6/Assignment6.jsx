import React from 'react'
import { Question1_2, Question3, Question4, Question5, Question6 } from '.'
import Tag from '../components/Tag'

const Assignment6 = () => {
  return (
    <div>
      <Tag assignmentNumber={6} questionNumber={'1&2'} />
      <Question1_2 />
      {/* <Tag assignmentNumber={6} questionNumber={3} />
      <Question3 />
      <Tag assignmentNumber={6} questionNumber={4} />
      <Question4 />
      <Tag assignmentNumber={6} questionNumber={5} />
      <Question5 />
      <Tag assignmentNumber={6} questionNumber={6} />
      <Question6 /> */}
    </div>
  )
}

export default Assignment6

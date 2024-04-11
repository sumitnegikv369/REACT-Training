import Tag from '../components/Tag'
import {
  Question1,
  Question2,
  Question3,
  Question4,
  Question5,
  Question6,
} from '.'

const Assignment3 = () => {
  return (
    <>
      <h1>Assignment 3</h1>
      <div>
        <Tag assignmentNumber={3} questionNumber={1} />
        <Question1 />
        <Tag assignmentNumber={3} questionNumber={2} />
        <Question2 />
        <Tag assignmentNumber={3} questionNumber={3} />
        <Question3 />
        <Tag assignmentNumber={3} questionNumber={4} />
        <Question4 />
        <Tag assignmentNumber={3} questionNumber={5} />
        <Question5 />
        <Tag assignmentNumber={3} questionNumber={6} />
        <Question6 />
      </div>
    </>
  )
}

export default Assignment3

import{
  Question1,
  Question2,
  Question3,
  Question4,
  Question5,
  Question6,
  Question7,
  Question8,
  Question9,
  Question10,
  Question11,
  Question12,
  Question13,
  Question14,
  Question15,
  Question16,
  Question17,
  Question18,
  Question19,
} from '.'
import Tag from '../components/Tag'
const Assignment2 = () => {
  return (
    <>
      <h1>Assignment 2</h1>
      <div>
        <Tag assignmentNumber={2} questionNumber={1} />
        <Question1 />
        <Tag assignmentNumber={2} questionNumber={2} />
        <Question2 />
        <Tag assignmentNumber={2} questionNumber={3} />
        <Question3 />
        <Tag assignmentNumber={2} questionNumber={4} />
        <Question4 />
        <Tag assignmentNumber={2} questionNumber={5} />
        <Question5 />
        <Tag assignmentNumber={2} questionNumber={6} />
        <Question6 />
        <Tag assignmentNumber={2} questionNumber={7} />
        <Question7 />
        <Tag assignmentNumber={2} questionNumber={8} />
        <Question8 />
        <Tag assignmentNumber={2} questionNumber={9} />
        <Question9 />
        <Tag assignmentNumber={2} questionNumber={10} />
        <Question10 />
        <Tag assignmentNumber={2} questionNumber={11} />
        <Question11 />
        <Tag assignmentNumber={2} questionNumber={12} />
        <Question12 />
        <Tag assignmentNumber={1} questionNumber={13} />
        <Question13 />
        <Tag assignmentNumber={1} questionNumber={14} />
        <Question14 />

        <Tag assignmentNumber={1} questionNumber={17} />
        <Question17 />
        <Tag assignmentNumber={2} questionNumber={18} />
        <Question18 />
        <Tag assignmentNumber={2} questionNumber={19} />
        <Question19 />
        {/* 

        <Tag assignmentNumber={1} questionNumber={15} />
        <Question15 />
        <Tag assignmentNumber={1} questionNumber={16} />
        <Question16 /> */}
      </div>
    </>
  )
}

export default Assignment2
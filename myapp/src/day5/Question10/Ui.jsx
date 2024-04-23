import withDataFetching from './WithDataFetching'
import './styles.css'

const Ui = ({ axiosdata }) => {
  return (
    <div className="ques10">
      {axiosdata.map((element, index) => (
        <div key={index}>
          <p>
            id:
            {element.id}
          </p>
          <p>Title: {element.title} </p>
          <p>Completed! {element.completed}</p>
        </div>
      ))}
    </div>
  )
}

export default withDataFetching(Ui)

const Child = ({ count, setCount, incrementHandler }) => {
  return (
    <>
      <p>{count}</p>
      <button onClick={incrementHandler}>increment</button>
      <button onClick={() => setCount(0)}>reset</button>
    </>
  )
}

export default Child

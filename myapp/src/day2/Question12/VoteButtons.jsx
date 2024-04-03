const VoteButtons = ({ data, dispatch }) => {
  console.log(typeof data)
  return (
    <>
      {data.map((brand) => (
        <button
          className="vote"
          key={brand.brand}
          onClick={() => {
            dispatch({
              type: brand.brand,
              value: brand.votes + 1,
            })
          }}
        >
          {brand.brand}: {brand.votes}
        </button>
      ))}
    </>
  )
}

export default VoteButtons

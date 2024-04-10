const VoteButtons = ({ data, dispatch }) => {
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

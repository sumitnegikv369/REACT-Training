import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './styles.css'

const Cart = () => {
  const [cartData, setCartData] = useState([])
  const [isError, setIsError] = useState(null)
  const incorrectURL = 'https://dummyjson.com/p'
  const correctURL = 'https://dummyjson.com/products'
  const getCart = async (url) => {
    try {
      const res = await axios.get(url)
      setCartData(res.data.products.slice(0, 4))
      setIsError(null)
    } catch (error) {
      console.log(error.message)
      setIsError(error.message)
    }
  }

  useEffect(() => {
    getCart(correctURL)
  }, [])

  return (
    <div className="ques6">
      <button onClick={() => getCart(correctURL)}>Try Using Correct URL</button>
      <button onClick={() => getCart(incorrectURL)}>
        Try Using Incorrect URL
      </button>
      {isError ? (
        <p>{isError}</p>
      ) : (
        cartData.map((cart) => (
          <div key={cart.id}>
            <h2>{cart.title}</h2>
            <img src={cart.thumbnail} alt={cart.title} />
            <p>$ {cart.price}</p>
          </div>
        ))
      )}
    </div>
  )
}

export default Cart

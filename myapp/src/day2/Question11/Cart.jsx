import { useContext, useEffect, useState } from 'react'
import { MyContext } from './App.jsx'

const Cart = () => {
  const { cart, setCart } = useContext(MyContext)
  const [total, setTotal] = useState(0)
  useEffect(() => {
    const totalPrices = cart.reduce((acc, product) => acc + product.price, 0)
    setTotal(totalPrices)
  }, [cart])
  return (
    <div className="cart">
      <h1>
        Cart <span>{cart.length}</span>
      </h1>
      <p>Total Price: $ {total}</p>
      <div>
        {cart.map((product, index) => (
          <div key={product.id}>
            <h2>{product.title}</h2>
            <img src={product.images[0]} alt={product.title} />
            <button
              onClick={() => {
                const newCart = cart.filter((item, i) => i !== index)
                setCart([...newCart])
              }}
            >
              remove
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Cart

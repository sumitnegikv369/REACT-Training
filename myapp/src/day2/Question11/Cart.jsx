import { useContext, useEffect, useState } from 'react'
import { MyContext } from './App.jsx'

const Cart = () => {
  const { cart, setCart } = useContext(MyContext)
  const [total, setTotal] = useState(0)
  const [itemsInCart, setItemsInCart] = useState(0)
  useEffect(() => {
    const totalPrices = cart.reduce(
      (acc, product) => acc + product.price * product.counter,
      0,
    )
    setTotal(totalPrices)
    const totalItem = cart.reduce((acc, product) => acc + product.counter, 0)
    setItemsInCart(totalItem)
  }, [cart])
  return (
    <div className="cart">
      <h1>
        Cart <span>{itemsInCart}</span>
      </h1>
      <p>Total Price: $ {total}</p>
      <div>
        {cart.map((product) => (
          <div key={product.id}>
            {product.counter}
            <h2>{product.title}</h2>
            <img src={product.images[0]} alt={product.title} />
            <button
              onClick={() => {
                if (product.counter === 1) {
                  const afterRemoving = cart.filter(
                    (item) => item.id !== product.id,
                  )
                  setCart([...afterRemoving])
                } else {
                  const newCart = cart.map((item) => {
                    if (item.id === product.id) {
                      item.counter -= 1
                    }
                    return item
                  })
                  setCart([...newCart])
                }
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

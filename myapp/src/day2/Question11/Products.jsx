import { useContext, useEffect, useState } from 'react'
import { MyContext } from './App.jsx'

const Products = () => {
  const [data, setData] = useState([])
  const { cart, setCart } = useContext(MyContext)
  useEffect(() => {
    fetch(`https://dummyjson.com/products`)
      .then((res) => {
        return res.json()
      })
      .then((productData) => {
        setData(productData.products.splice(0, 4))
      })
      .catch((error) => console.log(error))
  }, [])
  return (
    <div className="cards-container">
      {data.map((product) => (
        <div key={product.id}>
          <h2>{product.title}</h2>
          <img src={product.images[0]} alt={product.title} />
          <p>{product.description}</p>
          <h3>$ {product.price}</h3>
          <button
            onClick={() => {
              setCart([...cart, product])
            }}
          >
            Add To Cart
          </button>
        </div>
      ))}
    </div>
  )
}

export default Products

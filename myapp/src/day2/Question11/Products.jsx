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
        const modifyProduct = productData.products.map((item)=>{
            item["counter"] = 1;
          return item;
        }).splice(0, 4);
        setData(modifyProduct);
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
              let flag = false; // To determine whether the encountered product is the first instance or if there are multiple instances of that product in the cart."
              cart.forEach(item => {
                if(item.id===product.id){
                  const newCart = cart.map((item)=>{
                    if(item.id===product.id){
                      item["counter"] = item["counter"]+1;
                      flag=true;
                    }
                    return item;
                  })
                  setCart([...newCart])
                }
              });
              if(!flag){
                setCart([...cart, product])
              }
            
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

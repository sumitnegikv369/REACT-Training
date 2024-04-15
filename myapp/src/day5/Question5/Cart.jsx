import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Cart = () => {
    const [cartData, setCartData] = useState([]);
    const getCart = async () => {
        try {
            const res = await axios.get('https://dummyjson.com/products');
            setCartData(res.data.products.slice(0,4));
            console.log(res)
        } catch (error) {
            console.log(error.message);
        }
    }

    useEffect(() => {
     getCart();
    }, []);
    
  return (
    <div>
        {
            cartData.map((cart)=>(
                <div key={cart.id}>
                    <h2>{cart.title}</h2>
                    <img src={cart.thumbnail} alt={cart.title} />
                    <p>$ {cart.price}</p>
                </div>
            ))
        }
    </div>
  )
}

export default Cart
import { useContext } from "react";
import { MyContext } from "./App.jsx";

const Cart = () => {
  const { cart, setCart } = useContext(MyContext);
  return (
    <div className="cart">
    <h1>Cart <span>{cart.length}</span></h1>
    <div>
      {cart.map((product, index) => (
        <div key={product.id}>
          <h2>{product.title}</h2>
          <img src={product.images[0]} alt={product.title}/>
          <button onClick={()=>{
            const newCart = cart.filter((item,i)=>i!==index);
            setCart([...newCart])
          }}>remove</button>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Cart;

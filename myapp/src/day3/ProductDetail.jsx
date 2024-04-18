import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { ProductContext } from './App'

const ProductDetail = () => {
  const { products } = useContext(ProductContext)
  const { id } = useParams() // Get the product ID from the URL
  console.log(id)
  // Fetch product details (you can replace this with actual API calls)
  const product = products.find((p) => p.id === parseInt(id))

  return (
    <div className="product-details">
      <h2>Product Details</h2>
      {product ? (
        <div>
          <p>{product.name}</p>
          <p>Price: ${product.price}</p>
          <p>{product.details}</p>
        </div>
      ) : (
        <p>Product not found.</p>
      )}
      <button onClick={() => window.history.back()}>Go Back</button>
    </div>
  )
}

export default ProductDetail

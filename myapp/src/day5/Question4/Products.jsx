import React, { useEffect, useState } from 'react'
import './styles.css'

const Products = () => {
  const [products, setProducts] = useState([])
  const [currentProducts, setCurrentProducts] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [productPerPage, setProductPerPage] = useState(2)

  const getProducts = async () => {
    try {
      const res = await fetch('https://dummyjson.com/products')
      const data = await res.json()
      setProducts(data.products)
    } catch (error) {
      console.log(error.message)
    }
  }

  const nextPage = () => {
    if(currentPage<parseInt(products.length/productPerPage)){
      setCurrentProducts(
        products.slice(
          currentPage * productPerPage,
          currentPage * productPerPage + productPerPage,
        ),
      )
      setCurrentPage(currentPage + 1)
    }
  }

  const prevPage = () => {
    console.log(currentPage*productPerPage)

    if(currentPage>1){
      setCurrentProducts(
        products.slice(
          (currentPage -1) * productPerPage,
         (currentPage -1) * productPerPage + productPerPage,
        ),
      )
    setCurrentPage(prev => prev - 1)

    }
  }

  const loadPage = (i) => {
    setCurrentProducts(
      products.slice((i -1) * productPerPage , i * productPerPage + productPerPage),
    )
    setCurrentPage(i)
  }

  useEffect(() => {
    getProducts()
  }, [])

  useEffect(()=>{
    setCurrentProducts(products.slice(0, productPerPage))
  }, [products])

  return (
    <div className="ques4">
      <div className="head">
        <button onClick={prevPage}>prev</button>
        <h2>Products</h2>
        <button onClick={nextPage}>next</button>
      </div>
      <div className="pagination">
        {Array(parseInt(products.length / productPerPage))
          .fill(1)
          .map((_, i) => (
            <p
              key={i}
              onClick={() => loadPage(i + 1)}
              className={`${currentPage === i + 1 ? 'active' : ''}`}
            >
              {i + 1}
            </p>
          ))}
      </div>
      <div className="container">
        {currentProducts.map((product) => (
          <div key={product.id}>
            <img src={product.images[0]} alt="product-thumbnail" />
            <div className="details">
              <h2>{product.brand}</h2>
              <p className="price">$ {product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Products

import React, { useEffect, useState } from 'react'

const SearchFilter = () => {
  const [items, setItems] = useState([])
  const [searchInput, setSearchInput] = useState('')
  const filterSearch = async () => {
    const res = await fetch('https://dummyjson.com/products')
    const data = await res.json()
    const products = data.products;

    const filterData = products.filter((product) =>
      product.title.toLowerCase().startsWith(searchInput.toLowerCase()),
    )
    setItems([...filterData])
    console.log(products)
    console.log(filterData)
    console.log(items)
  }

  useEffect(() => {
    filterSearch()
  }, [searchInput])
  

  return (
    <div>
      <input
        type="text"
        value={searchInput}
        placeholder="enter a phone brand"
        onChange={(e) => setSearchInput(e.target.value)}
      />
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default SearchFilter

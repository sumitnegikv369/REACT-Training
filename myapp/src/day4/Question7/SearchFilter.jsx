import React, { useEffect, useState } from 'react'
import './styles.css'

const SearchFilter = () => {
  const [items, setItems] = useState([])
  const [filteredItems, setFilteredItems] = useState([])
  const [searchInput, setSearchInput] = useState('')

  const filterHandler = (products) => {
    const filterData = products.filter((product) =>
      product.title.toLowerCase().startsWith(searchInput.toLowerCase()),
    )
    setFilteredItems([...filterData])
  }
  const fetchData = async () => {
    const res = await fetch('https://dummyjson.com/products')
    const data = await res.json()
    const products = data.products

    setItems([...products])
  }

  useEffect(() => {
    fetchData()
  }, [])

  useEffect(() => {
    if (searchInput.length > 0) {
      filterHandler(items)
    } else {
      filterHandler([])
    }
  }, [searchInput])

  return (
    <div className="ques7">
      <input
        type="text"
        value={searchInput}
        placeholder="enter a phone brand"
        onChange={(e) => {
          setSearchInput(e.target.value)
        }}
      />
      <ul>
        {filteredItems.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default SearchFilter

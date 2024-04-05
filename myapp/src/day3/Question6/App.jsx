import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductList from './ProductList';
import ProductDetail from './ProductDetail'; // Create this component
import { createContext } from 'react';
import './styles.css';

export const ProductContext=createContext();


function App() {
    const products = [
        { id: 1, name: 'Product A', price: 49.99,details:"All details about ProductA" },
        { id: 2, name: 'Product B', price: 29.99,details:"All details about ProductB" },
      ];
  return (
    <div className='ques6'>
    <ProductContext.Provider value={{products}}>
    <Router>
      <Routes>
        <Route exact path="/" element={ <ProductList/>}/>
        <Route path="/products/:id" element={ <ProductDetail/>} />
      </Routes>
    </Router>
    </ProductContext.Provider>
    </div>
  );
}

export default App;
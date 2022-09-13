import React from 'react'
import { Routes, Route, Link } from "react-router-dom";
import Product from './Product';
import ProductList from './ProductList';
import Register from './Register';
import Home from './Home';
import Card from './Card';
import Login from './Login';
 function Pages(props) {
    

    return (
        <>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Product" element={<Product />} />
        <Route path="/ProductList" element={<ProductList />}/>
        <Route path="/Register" element={<Register />}/>
        <Route path="/Login" element={<Login />}/>
        <Route path="/Card" element={<Card />}/>
      </Routes>

            
        </>
    )
}
export default Pages
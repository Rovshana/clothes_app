import React from 'react'
import { Routes, Route, Navigate } from "react-router-dom";
import Product from './Product';
import ProductList from './ProductList';
import Register from './Register';
import Home from './Home';
import Card from './Card';
import Login from './Login';
 function Pages(props) {
    const user = true;

    return (
        <>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/productlist" element={<ProductList />}/>
        <Route path="/Register" element={<Register />}/>
        <Route path="/Login" element={user? <Navigate to ='/'/> : <Login/>}/>
        
        <Route path="/Card" element={<Card />}/>
      </Routes>

            
        </>
    )
}
export default Pages
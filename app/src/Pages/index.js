import React from 'react'
import { Routes, Route, Navigate } from "react-router-dom";
import Product from './Product';
import ProductList from './ProductList';
import Register from './Register';
import Home from './Home';
import Card from './Card';
import Login from './Login';
import ErrorPage from './404';
 function Pages(props) {
    const user = true;

    return (
        <>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/productlist" element={<ProductList />}/>
        <Route path="/Register" element={<Register />}/>
        <Route path="/Login" element ={<Login/>}/>
        
        <Route path="/Card" element={<Card />}/>
        <Route path="/*" element={<ErrorPage />}/>
      </Routes>

            
        </>
    )
}
export default Pages
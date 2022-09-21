import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

import Register from "../Pages/Register";
import {mobile, tablet} from '../responsive'
import { useNavigate } from "react-router-dom";

import { changeLanguage } from "i18next";
import {useSelector} from 'react-redux'
import { Center, Container, Input, Language,Right, Left, Logo, MenuItem, Option, SearchContainer, Wrapper } from "../styledComponent/Navbar.styled";
function Navbar(props) {
const quantity =  useSelector(state =>state.cart.quantity);
console.log(quantity)
  const lngs = {
    az: {NativeName: "Az"},
    en: {NativeName: "En"},
    gr: {NativeName: "Gr"},
  }
  // const handleClick = (e)=>{
  //   const value = e.target.value;
  //   console.log('val',value)
   
  //   i18n.changeLanguage(value)
  // }
  
  const navigate = useNavigate()
  const navigateRegister = ()=>{
    navigate('/register')
  }
  const navigateLogin = ()=>{
    navigate('/login')
  }
  return (
    <Container>
      <Wrapper>
        <Left>
        <Language name="language" 
             onClick={(e)=>changeLanguage(e.target.value)} >
         {
          Object.keys(lngs).map((lng)=>(
         
            
            <Option
            value={lng}
             
            >{lngs[lng].NativeName}</Option>
            
          

          ))
         }</Language>
         
          <SearchContainer>
            <Input placeholder="Search" />
            <SearchIcon style={{color: "grey", fontSize: "16px"}} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo onClick={()=>navigate('/')}>Moda.Me</Logo>
        </Center>
        <Right>
          <MenuItem onClick={navigateRegister}>REGISTER</MenuItem>
          <MenuItem onClick={navigateLogin}>SIGN IN</MenuItem>
          <MenuItem>
            <Badge badgeContent={quantity} color="secondary" onClick={()=>navigate('/card')}>
              < ShoppingCartOutlinedIcon />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
}
export default Navbar;

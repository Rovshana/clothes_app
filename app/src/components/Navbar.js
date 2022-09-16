import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import styled from "styled-components";
import Register from "../Pages/Register";
import {mobile} from '../responsive'
import {useTranslation} from 'react-i18next'
import { useNavigate } from "react-router-dom";
import i18n from  "../i18n";
import { changeLanguage } from "i18next";
import {useSelector} from 'react-redux'

const Container = styled.div`
  height: 60px;
  ${mobile({height: "50px"})}
  
`;
const Wrapper = styled.div`
  display: flex;
  padding: 10px 29px;
  justify-content: space-between;
  align-items: center;
  ${mobile({height: "50px"})}
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const Language = styled.select`
  cursor: pointer;
  font-size: 14px;
  border: none;
  ${mobile({display: "none"})}
`;
const Option = styled.option`
`
const SearchContainer = styled.div`
  border: 1px solid lightgrey;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;
const Input = styled.input`
  border: none;
  ${mobile({width: '50px'})}
`;
const Center = styled.div`
  flex: 1;
  text-align: center;
`;
const Logo = styled.h1`
  font-weight: bold;
  ${mobile({fontSize: '24px'})}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({flex: 2,justifyContent: 'center'})}
`;
const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({marginLeft: "10px"})}
 
`
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
         {/* <select>
          <option>az</option>
          <option>en</option>
          <option>gr</option>
         </select> */}
         
          <SearchContainer>
            <Input placeholder="Search" />
            <SearchIcon style={{color: "grey", fontSize: "16px"}} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>Moda.Me</Logo>
        </Center>
        <Right>
          <MenuItem onClick={navigateRegister}>REGISTER</MenuItem>
          <MenuItem onClick={navigateLogin}>SIGN IN</MenuItem>
          <MenuItem>
            <Badge badgeContent={quantity} color="secondary">
              < ShoppingCartOutlinedIcon />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
}
export default Navbar;

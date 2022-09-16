import React from 'react'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom';
const Info = styled.div`
 width: 100%;
 height: 100%;
 opacity: 0;
 position: absolute;
 top: 0;
 left: 0;
 background-color: rgba(0,0, 0,0.2);
 z-index: 3;
 display: flex;
 justify-content: center;
 align-items: center;
 transition: all 0.5s ease;
 cursor: pointer;
 `
const Container = styled.div`
flex: 1;
margin: 5px;
min-width: 280px;
height: 350px;
background-color: #f5fbfd;
align-items: center;
display: flex;
justify-content: center;
position: relative;
&:hover ${Info}{
    opacity: 1;
    
}

`
const Circle = styled.div`
width: 200px;
height: 200px;
border-radius: 50%;
background-color: white;
position: absolute;

`
 const Image = styled.img`
 height: 75%;
 z-index: 2;

 `
 
 const Icon = styled.div`
 width: 40px;
 height: 40px;
 border-radius: 50%;
 background-color: white;
 display: flex;
 justify-content: center;
 align-items: center;
 margin: 10px;
 transition: all 0.5s ease;
 &:hover{
    background-color: #e9f5f5;
    transform: scale(1.1)

 }
 `

function Product({item}) {
    console.log("item",item);
  const navigate =  useNavigate()  

    return (
        <Container>
            <Circle />
            <Image src={item.photo} />
        <Info>
            <Icon>
            <ShoppingCartOutlinedIcon />
            </Icon>
            <Icon>
            <SearchOutlinedIcon onClick={()=>navigate('/product',{state:{photo:item.photo, id: item.id}})}/>
            </Icon>
            <Icon>
         <FavoriteBorderOutlinedIcon/>
            </Icon>

        </Info>

            
        </Container>
    )
}
export default Product
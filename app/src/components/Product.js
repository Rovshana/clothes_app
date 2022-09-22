import React from 'react'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { useNavigate } from 'react-router-dom';
import { Circle, Container, Icon, Image, Info } from '../styledComponent/product.styled'
function Product({item}) {
    
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
            <SearchOutlinedIcon onClick={()=>navigate('/product',{state:{ ...item}})}/>
            </Icon>
            <Icon>
         <FavoriteBorderOutlinedIcon/>
            </Icon>

        </Info>

            
        </Container>
    )
}
export default Product
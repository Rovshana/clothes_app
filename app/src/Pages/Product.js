import React, { createRef, useEffect } from 'react'
import styled from 'styled-components'
import Announce from '../components/Announce'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import NewsLetter from '../components/NewsLetter'
import RemoveOutlined from '@mui/icons-material/RemoveOutlined'
import AddOutlined from '@mui/icons-material/AddOutlined'
import {mobile} from '../responsive'
import { AppTitle } from '../tools/generalFunc'
import { useLocation, useNavigate } from 'react-router-dom'
import Card from './Card'
import { useDispatch, useSelector } from 'react-redux'
import { addCard, addProduct, addProducts, decreaseProduct } from '../store/Slices/CardSlice'
import { addBasket } from '../store/Slices/CardSlice'
import { TextSnippetTwoTone } from '@mui/icons-material'


const Container = styled.div`
`
const Wrapper = styled.div`
padding: 50px;
display: flex;
${mobile({flexDirection: "column", padding: "10px"})}
`
const ImageConatiner = styled.div`
Flex: 1;
`
const Image = styled.img`
width: 100%;
height: 90vh;
object-fit: cover;
${mobile({height: "40vh"})}
`
const InfoContainer = styled.div`
flex: 1;
padding: 0px 50px;
${mobile({padding: "10px"})}
`
const Title = styled.h1`
font-weight: 200;

`
const Price = styled.p`
font-weight: 200;
font-size: 40px;
`
const Desc = styled.p`
margin: 20px 0px;
`
const FilterContainer = styled.div`
width: 50%;
margin: 30px 0px;
display: flex;
justify-content: space-between;
${mobile({width: "100%"})}

`
const Filter = styled.div`
display: flex;
align-items: center;
`
const FilterColor = styled.div`
height: 20px;
width: 20px;
border-radius: 50%;
background-color: ${props => props.color};
cursor: pointer;
margin: 0px 5px;
`
const FilterSize = styled.select`
margin-left: 10px;
padding: 10px;
`
const FilterSizeOption = styled.option``
const FilterTitle = styled.span`
font-weight: 200;
font-size: 20px;
`
const AddContainer = styled.div`
display: flex;
align-items: center;
width: 50%;
justify-content: space-between;
${mobile({width: "100%"})}
`
const AmountContainer = styled.div`
display: flex;
align-items: center;
font-weight: 700;
`
const Amount = styled.span`
width: 30px;
height: 30px;
border: 1px solid teal;
border-radius: 12px;
display: flex;
justify-content: center;
align-items: center;
margin: 0px 5px;
`
const Button = styled.button`
padding: 15px;
background-color: white;
border: 2px solid teal;
cursor: pointer;
font-weight: 500;
&:hover{
    background-color: lightgray;
}
`

 function Product(props) {
    const count = useSelector(state=>state.cart.count)
    
    // console.log(props,"test");
    let location = useLocation()
    console.log(location,"location");
    const dispatch = useDispatch()
AppTitle('products/Moda.Me');
   


    const handleAddAmount = ()=>{
        dispatch(addProduct())
    }
    const handleDecreaseAmount = ()=>{
        dispatch(decreaseProduct())
    }

        const handleClick = (test)=>{
            dispatch(addCard(test))
            dispatch(addBasket())
        }

        useEffect(()=>{
            window.scrollTo({
                top:10,
                behavior: 'smooth'
            })
        })


    return (
        <Container>
            <Navbar/>
            <Announce/>
            <Wrapper>
                <ImageConatiner>
                    <Image src={location?.state?.photo}/>
                </ImageConatiner>
                <InfoContainer>
                    <Title>{location?.state?.brand}</Title>
                    <Desc>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tristique tortor at tellus accumsan, eget euismod sem feugiat. Vestibulum at ultricies tortor, ut gravida turpis. Donec luctus massa rutrum, consequat nulla ac, sollicitudin neque. Duis non eros hendrerit, dignissim nisl ut, semper nisl. </Desc>
                    <Price>${location?.state?.price}</Price>
                    <FilterContainer>
                        <Filter>
                            <FilterTitle>Color</FilterTitle>
                            <FilterColor  color="black"/>
                            <FilterColor  color="blue"/>
                            <FilterColor  color="gray"/>
                        </Filter>
                        <Filter>
                            <FilterTitle>Size</FilterTitle>
                            <FilterSize>
                            <FilterSizeOption value="XS">XS</FilterSizeOption>
                            <FilterSizeOption>S</FilterSizeOption>
                            <FilterSizeOption>M</FilterSizeOption>
                            <FilterSizeOption>L</FilterSizeOption>
                            <FilterSizeOption>XL</FilterSizeOption>
                            </FilterSize>
                        </Filter>

                    </FilterContainer>
                    <AddContainer>
                        <AmountContainer>
                            <RemoveOutlined onClick={handleDecreaseAmount}/>
                            <Amount>{count}</Amount>
                            <AddOutlined onClick={handleAddAmount}/>
                        </AmountContainer>
                        <Button onClick={()=>handleClick(location.state)}>ADD TO CART</Button>
                    </AddContainer>

                </InfoContainer>
            </Wrapper>
            <NewsLetter/>
            <Footer/>
            
        </Container>
    )
}
export default Product
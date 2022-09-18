import React, { useState } from 'react'
import ArrowLeftOutlinedIcon from '@mui/icons-material/ArrowLeftOutlined';
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';
import shopping from  '../Images/shopping.png'
import styled from 'styled-components'
import { clothesApi } from '../api/Slider';
import { useEffect } from 'react';
import {mobile, tablet} from '../responsive'
import { useTranslation } from 'react-i18next';

const Container = styled.div`
height: 100vh;
width: 100%;
overflow: hidden;
${mobile({display: "none"})}
${tablet({display: "none"})}
position: relative;
`
const Arrow = styled.div`
width: 50px;
height: 50px;
background-color: wheat;
border-radius: 50px;
display: flex;
align-items: center;
justify-content: center;
position: absolute;
top: 0;
bottom: 0;
left: ${props => props.direction === "left"&& "10px"};
right: ${props => props.direction === "right"&& "10px"};
margin:  auto;
cursor: pointer;
opacity: 0.5;
z-index: 3;

`

const Wrapper = styled.div`
height: 100%;
width: 100%;
display: flex;
transition: all 1.1s ease;
transform: translateX(${props => props.slideIndex  * -100}vw)
`
const Slide = styled.div`
display: flex;
align-items: center;

height: 100vh;

`
const ImageContainer = styled.div`
flex: 1;
height: 100%;
`
const InfoContaier = styled.div`
flex: 1;
padding: 50px;

`
const Title = styled.h1`
font-size: 70px;

`
const Des = styled.p`
margin: 50px 0px;
font-size: 20px;
font-weight: 500;
letter-spacing: 3px;
`
const Button = styled.button`
padding: 10px;
font-size: 20px;
background-color: transparent;
cursor: pointer;
`

const Image = styled.img`
height: 80%;
`
 function Slider(props) {


    const [data, setData] = useState(null)
    useEffect(() => {
    getClothes()
  }, [])
    const getClothes = ()=>{
        clothesApi.then(res=>{
          
            setData(res.data.clothes)
            
        })
    }
   const [slideIndex, setSlideIndex] = useState(0)
   const handleClick = (direction)=>{
    if(direction === "left"){
        setSlideIndex(slideIndex > 0 ? slideIndex -1 : 3)
    } else{
        setSlideIndex(slideIndex < 3 ? slideIndex + 1 : 0)
    }

   }
   const { t, i18n } = useTranslation();
    return (
        <Container>
            <Arrow direction="left" onClick={()=>handleClick("left")}>
                <ArrowLeftOutlinedIcon />

            </Arrow>
            <Wrapper slideIndex={slideIndex}>
            <Slide>
                    <ImageContainer>
                        <Image src={shopping} />
                    </ImageContainer>
                    <InfoContaier>
                        <Title>SUMMER SALE</Title>
                        <Des>DON'T MISS THE SUMMER SALE!</Des>
                        <Button>Shop Now</Button>
                    </InfoContaier>
                    </Slide>
                    {
                        data?.map((item, index)=>(
                            <Slide>
                    <ImageContainer>
                        <Image src={item.photo} />
                    </ImageContainer>
                    <InfoContaier>
                        <Title>{item.title}</Title>
                        <Des>{item.description}</Des>
                        <Button >Show Now</Button>
                    </InfoContaier>
                    </Slide>

                        ))

                    }
              
            </Wrapper>
            <Arrow direction='right' onClick={()=>handleClick("right")}>
                <ArrowRightOutlinedIcon />

            </Arrow>
            
        </Container>
    )
}
export default Slider
import React, { useState } from 'react'
import ArrowLeftOutlinedIcon from '@mui/icons-material/ArrowLeftOutlined';
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';
import shopping from  '../Images/shopping.png'
import { clothesApi } from '../api/Slider';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Arrow, Button, Container, Des, Image, ImageContainer, InfoContaier, Slide, Title, Wrapper } from '../styledComponent/Slider.styled'

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
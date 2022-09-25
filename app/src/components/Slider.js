import React, { useState } from 'react'
import ArrowLeftOutlinedIcon from '@mui/icons-material/ArrowLeftOutlined';
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';
import { clothesApi } from '../api/Slider';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Arrow, Button, Container, Des, Image, ImageContainer, InfoContaier, Slide, Title, Wrapper } from '../styledComponent/Slider.styled'
import { useNavigate } from 'react-router-dom';

 function Slider(props) {
const navigate = useNavigate()
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
        setSlideIndex(slideIndex > 0 ? slideIndex -1 : 4)
    } else{
        setSlideIndex(slideIndex < 4 ? slideIndex + 1 : 0)
    }

   }
   const { t, i18n } = useTranslation();
    return (
        <Container>
            <Arrow direction="left" onClick={()=>handleClick("left")}>
                <ArrowLeftOutlinedIcon />

            </Arrow>
            {
                        data?.map((item, index)=>(
                            <Wrapper slideIndex={slideIndex}>
                            <Slide>
                    <ImageContainer>
                        <Image src={item.photo} />
                    </ImageContainer>
                    <InfoContaier>
                        <Title>{item.title}</Title>
                        <Des>{item.Description}</Des>
                        <Button onClick={()=>navigate('/productlist')}>Shop Now</Button>
                    </InfoContaier>
                    </Slide>
                    </Wrapper>
                        ))

                    }
           
            <Arrow direction='right' onClick={()=>handleClick("right")}>
                <ArrowRightOutlinedIcon />

            </Arrow>
            
        </Container>
    )
}
export default Slider
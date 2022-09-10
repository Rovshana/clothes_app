import React from 'react'
import ArrowLeftOutlinedIcon from '@mui/icons-material/ArrowLeftOutlined';
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowLeftOutlined';
import shopping from  '../Images/shopping.png'
import styled from 'styled-components'

const Container = styled.div`
height: 100vh;
width: 100%;

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

`

const Wrapper = styled.div`
height: 100%;
`
const Slide = styled.div`
display: flex;
align-items: center;
width: 100vw;
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
const Image = styled.img`
height: 80%;
`
 function Slider(props) {
    

    return (
        <Container>
            <Arrow direction="left">
                <ArrowLeftOutlinedIcon />

            </Arrow>
            <Wrapper>
               <Slide>
                    <ImageContainer>
                        <Image src={shopping} />
                    </ImageContainer>
                    <InfoContaier></InfoContaier>
               
                    </Slide>
            </Wrapper>
            <Arrow direction='right'>
                <ArrowRightOutlinedIcon />

            </Arrow>
            
        </Container>
    )
}
export default Slider
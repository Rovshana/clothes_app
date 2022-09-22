import styled from 'styled-components';
import {mobile, tablet} from '../responsive';
export const Container = styled.div`
height: 100vh;
width: 100%;
overflow: hidden;
${mobile({display: "none"})}
${tablet({display: "none"})}
position: relative;
`
export const Arrow = styled.div`
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

export const Wrapper = styled.div`
height: 100%;
width: 100%;
display: flex;
transition: all 1.1s ease;
transform: translateX(${props => props.slideIndex  * -100}vw)
`
export const Slide = styled.div`
display: flex;
align-items: center;
width: 100vw;
height: 100vh;

`
export const ImageContainer = styled.div`
flex: 1;
height: 100%;
`
export const InfoContaier = styled.div`
flex: 1;
padding: 50px;

`
export const Title = styled.h1`
font-size: 70px;

`
export const Des = styled.p`
margin: 50px 0px;
font-size: 20px;
font-weight: 500;
letter-spacing: 3px;
`
export const Button = styled.button`
padding: 10px;
font-size: 20px;
background-color: transparent;
cursor: pointer;
`

export const Image = styled.img`
height: 80%;
`
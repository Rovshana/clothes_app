import {mobile, tablet} from '../responsive';
import styled from 'styled-components';
export const Container = styled.div`
flex: 1;
margin: 3px;
height: 70vh;
position: relative;

`
export const Image = styled.img`
width: 100%;
height: 100%;
object-fit: cover;
${mobile({height: '30%'})}
${tablet({height: '30%'})}

`

export const Info = styled.div`
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`
export const Title = styled.h1`
color: white;
margin-bottom: 20px;
font-weight: 600;
`
export const Button = styled.button`
border: none;
padding: 10px;
cursor: pointer;
background-color: white;
color: gray;
`
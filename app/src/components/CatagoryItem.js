import React from 'react'
import styled from "styled-components";
import {Link, useNavigate} from 'react-router-dom'
import {mobile, tablet} from '../responsive'
const Container = styled.div`
flex: 1;
margin: 3px;
height: 70vh;
position: relative;



`
const Image = styled.img`
width: 100%;
height: 100%;
object-fit: cover;
${mobile({height: '30%'})}
${tablet({height: '30%'})}

`

const Info = styled.div`
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
const Title = styled.h1`
color: white;
margin-bottom: 20px;
font-weight: 600;
`
const Button = styled.button`
border: none;
padding: 10px;
cursor: pointer;
background-color: white;
color: gray;
`
 function CatagoryItem({item}) {
    const navigate = useNavigate()

    return (
        <Container>
            
            <Image src={item.photo}/>
            <Info>
                <Title>{item.title}</Title>
                <Button onClick={()=> navigate('/productlist')}>Shop Now</Button>
            </Info>
        
        </Container>
    )
}
export default CatagoryItem
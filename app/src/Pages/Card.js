import React from 'react'
import styled from 'styled-components'
import Announce from '../components/Announce'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
const Container = styled.div`
`
const Wrapper = styled.div`
padding: 20px;
`
const Title = styled.h1`
font-weight: 300;
text-align: center;
`
const Top =styled.div`
display: flex;
align-items: center;
justify-content: space-between; 
padding: 20px;   
`
const TopButton = styled.button`
padding: 10px;
font-weight: 600;
cursor: pointer;
border: ${props=>props.type === 'filled' && 'none'};
background-color: ${props=>props.type === 'filled' ? "black" : "transparent"};
color: ${props=>props.type === "filled" && "white" };
`
const Bottom=styled.div`
`
const TopTexts = styled.div`
`
const TopText = styled.span`
text-decoration: underline;
cursor: pointer;
margin:  0px 10px;
`
 function Card(props) {
    

    return (
        <Container>
            <Navbar/>
            <Announce/>
            <Wrapper>
                <Title>YOUR BAG</Title>
                <Top>
                    <TopButton>
                        Continue Shopping
                    </TopButton>
                    
                    <TopTexts>
                        
                        <TopText>Shopping Bag(2)</TopText>
                        <TopText>
                            Your WishList(0)

                        </TopText>
                    </TopTexts>
                    <TopButton type="filled">
                        Checkout Now
                    </TopButton>
                </Top>
                <Bottom></Bottom>

            </Wrapper>
            <Footer/>
            
        </Container>
    )
}
export default Card
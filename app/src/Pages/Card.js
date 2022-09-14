import React from 'react'
import styled from 'styled-components'
import Announce from '../components/Announce'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import {mobile} from '../responsive'
import { AppTitle } from '../tools/generalFunc'
const Container = styled.div`
`
const Wrapper = styled.div`
padding: 20px;
${mobile({padding: "10px"})}
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
display: flex;
justify-content: space-between;
${mobile({flexDirection: "column"})}
`
const TopTexts = styled.div`
`
const TopText = styled.span`
text-decoration: underline;
cursor: pointer;
margin:  0px 10px;
${mobile({display: "none"})}
`
const Info = styled.div`
flex: 3;

`

const Product = styled.div`
display: flex;
justify-content: space-between;
${mobile({flexDirection: "column"})}
`
const ProductDetail = styled.div`
flex: 2;
display: flex;
`
const PriceDetail = styled.div`
flex: 1;

`
const Image = styled.img`
width: 200px;

`
const Details = styled.div`
display: flex;
flex-direction: column;
justify-content: space-around;
padding: 20px;
`
const ProductName = styled.span`
`
const ProductId = styled.span`
`
const ProductColor = styled.div`
width: 20px;
height: 20px;
border-radius: 50%;
background-color: ${props => props.color}
`
const ProductSize = styled.span`
`
const PriceDetails = styled.div`
flex: 1;
display: flex;
align-items: center;
flex-direction: column;
`
const ProductAmmountConatiner = styled.div`
display:  flex;
align-items: center;
justify-content: center;
margin-bottom: 10px;
`
const ProductAmount = styled.p`
font-size: 24px;
margin: 5px;
${mobile({margin: "5px, 15px"})}

`
const ProductPrice = styled.p`
font-size: 30px;
font-weight: 300;
${mobile({marginBottom: "20px"})}


`
const HR = styled.hr`
border: none;
height: 1px;
background-color: #eee;
`
const Summary = styled.div`
flex: 1;
border: 1px solid lightgray;
padding: 20px;
border-radius: 10px;
height: 50vh;

`
const SummaryItem = styled.div`
margin: 30px 0px;
display: flex;
justify-content: space-between;
font-weight: ${props => props.type === "total" && "500"};
font-size: ${props => props.type === "total" && "25px"}
`
const SummaryTitle = styled.h2`
font-weight: 200;
`
const SummaryText = styled.span`
`
const SummaryItemPrice = styled.span`
`
const Button = styled.button`
background-color: black;
color: white;
padding: 10px;
font-weight: 600;
width: 100%;

`

 function Card(props) {
    AppTitle('cards/Moda.Me')

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
                <Bottom>
                    <Info>
                        <Product>
                            <ProductDetail>
                                <Image src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/bc79b0c4-4530-4480-b5f8-0a85e31a8147/star-runner-3-big-kids-road-running-shoes-2f5ZdC.png"/>
                                <Details>
                                <ProductName><b>Product:</b> Nike shoes</ProductName>
                                <ProductId><b>ID</b>12078901</ProductId>
                                <ProductColor color="red"/>
                                <ProductSize><b>Size:</b> 37</ProductSize>
                            </Details>
                            </ProductDetail>
                            
                           
                            <PriceDetails>
                            <ProductAmmountConatiner>
                            <AddIcon/>
                            <ProductAmount>2</ProductAmount>
                            <RemoveIcon/>
                            
                </ProductAmmountConatiner>
                            <ProductPrice>$45</ProductPrice>
                            </PriceDetails>
                            
                        </Product>
                        <HR/>
                        <Product>
                            <ProductDetail>
                                <Image src="https://wwws.dior.com/couture/ecommerce/media/catalog/product/cache/1/cover_image_mobile_3/715x773/17f82f742ffe127f42dca9de82fb58b1/r/X/1631180722_M0505OCAL_M900_E03_GHC.jpg"/>
                                <Details>
                                <ProductName><b>Product:</b> Dior bag</ProductName>
                                <ProductId><b>ID</b>12078971</ProductId>
                                <ProductColor color="black"/>
                                <ProductSize><b>Size:</b> medium</ProductSize>
                            </Details>
                            </ProductDetail>
                            
                           
                            <PriceDetails>
                            <ProductAmmountConatiner>
                            <AddIcon/>
                            <ProductAmount>2</ProductAmount>
                            <RemoveIcon/>
                            
                </ProductAmmountConatiner>
                            <ProductPrice>$65</ProductPrice>
                            </PriceDetails>
                            
                        </Product>
                    </Info>
                    <Summary>
                    <SummaryTitle>ORDER SUMMARY</SummaryTitle> 
                    <SummaryItem  >
                    <SummaryText>Subtotal</SummaryText>
                    <SummaryItemPrice>$110</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                    <SummaryText>Estimated Shipping</SummaryText>
                    <SummaryItemPrice>$ 5.90</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                    <SummaryText> Shipping Discount</SummaryText>
                    <SummaryItemPrice>$ -5.90</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem type="total">
                    <SummaryText> Total </SummaryText>
                    <SummaryItemPrice>$ 110</SummaryItemPrice>
                    </SummaryItem>
                    <Button>Checkout Now</Button>
                    
                    </Summary>
                </Bottom>

            </Wrapper>
            <Footer/>
            
        </Container>
    )
}
export default Card
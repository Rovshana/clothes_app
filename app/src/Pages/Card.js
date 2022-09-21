import React, { useEffect } from "react";
import styled from "styled-components";
import Announce from "../components/Announce";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { mobile } from "../responsive";
import { AppTitle } from "../tools/generalFunc";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const Container = styled.div``;
const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: "10px" })}
`;
const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;
const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;
const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;
const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;
const TopTexts = styled.div``;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
  ${mobile({ display: "none" })}
`;
const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;
const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;
const PriceDetail = styled.div`
  flex: 1;
`;
const Image = styled.img`
  width: 200px;
`;
const Details = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 20px;
`;
const ProductName = styled.span``;
const ProductId = styled.span``;
const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin-left: 5px;
`;
const ProductSize = styled.span``;
const PriceDetails = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const ProductAmmountConatiner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
`;
const ProductAmount = styled.p`
  font-size: 24px;
  margin: 5px;
  ${mobile({ margin: "5px, 15px" })}
`;
const ProductPrice = styled.p`
  font-size: 30px;
  font-weight: 300;
  ${mobile({ marginBottom: "20px" })}
`;
const HR = styled.hr`
  border: none;
  height: 1px;
  background-color: #eee;
`;
const Summary = styled.div`
  flex: 1;
  border: 1px solid lightgray;
  padding: 20px;
  border-radius: 10px;
  height: 50vh;
`;
const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "25px"};
`;
const SummaryTitle = styled.h2`
  font-weight: 200;
`;
const SummaryText = styled.span``;
const SummaryItemPrice = styled.span``;
const Button = styled.button`
  background-color: black;
  color: white;
  padding: 10px;
  font-weight: 600;
  width: 100%;
`;

const Div = styled.div`
  display: flex;
`;
function Card(props) {
  const selector = useSelector((state) => state.cart.card);
  const navigate = useNavigate();
  // let total = 0;
  // selector.forEach(item=>{
  //   total += item.price
  // })
  let total = selector.reduce((sum, num) => sum + num.price, 0);
  total = total - 5.9;

  useEffect(() => {
    console.log(selector, "selector");
  }, []);
  AppTitle("cards/Moda.Me");

  return (
    <Container>
      <Navbar />
      <Announce />
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
          <TopButton onClick={() => navigate("/productlist")}>
            Continue Shopping
          </TopButton>

          <TopTexts>
            <TopText>Shopping Bag({selector.length})</TopText>
            <TopText>Your WishList(0)</TopText>
          </TopTexts>
          <TopButton type="filled">Checkout Now</TopButton>
        </Top>
        <Bottom>
          <Info>
            {selector?.map((product) => (
              <Product>
                <ProductDetail>
                  <Image src={product.photo} />
                  <Details>
                    <ProductName>
                      <b>Product:</b> {product.brand}
                    </ProductName>
                    <ProductId>
                      <b>ID: </b>
                      {product.id}
                    </ProductId>
                    <Div>
                      <b>Color: </b>
                      <ProductColor color={product.color} />
                    </Div>
                    <ProductSize>
                      <b>Size:</b> {product.size}
                    </ProductSize>
                    {/* <ProductColor>
                      <b>Color:</b> {product.color}
                    </ProductColor> */}
                  </Details>
                </ProductDetail>

                <PriceDetails>
                  <ProductAmmountConatiner>
                    <RemoveIcon />
                    <ProductAmount>2</ProductAmount>

                    <AddIcon />
                  </ProductAmmountConatiner>
                  <ProductPrice>${product.price}</ProductPrice>
                </PriceDetails>
                <HR />
              </Product>
            ))}
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
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
              <SummaryItemPrice>${total}</SummaryItemPrice>
            </SummaryItem>
            <Button>Checkout Now</Button>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
}
export default Card;

import React from 'react'
import styled from 'styled-components'
const Container = styled.div`
background: teal;
width: 100vw;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;

`
const Wrapper = styled.div`
width: 60%;
height: 60%;
border-radius: 50%;
background: white;



`
const Content = styled.div`


`
const Title = styled.h1`
text-align: center;
font-style: normal;
font-weight: 900;
font-size: 200px;
line-height: 242px;

`
const Paragraph = styled.p`
font-style: normal;
font-weight: 800;
font-size: 16px;
line-height: 19px;
text-align: center;
margin-top: 30px;
`
 function ErrorPage(props) {
    

    return (
        <Container>
           <Wrapper>
           <Content>
            <Title>
            404
            </Title>
            <Paragraph>Oops! The page you are looking for does not exist.</Paragraph>

           </Content>

           </Wrapper>
        </ Container>
    )
}
export default ErrorPage
import React from 'react'
import styled from 'styled-components'
const Container = styled.div`
width: 100vw;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
background: linear-gradient(rgba(255, 255, 255,0.5),rgba(255, 255, 255,0.5) ), url("https://shop-present.com/wp-content/uploads/2022/01/Shopping-7.jpg") ;
background-size: cover;
`
const Wrapper = styled.div`
padding: 20px;
width: 25%;
background-color: white;

`
const Title = styled.h1`
font-size: 24px;
font-weight: 400;


`

const Form = styled.form`
display: flex;
flex-direction: column;
`
const Input = styled.input`
flex: 1;
min-width: 40%;
padding: 10px;
margin:  10px 0px ;
`

const Button = styled.button`
width: 40%;
border: none;
color: white;
cursor: pointer;
background-color: teal;
padding: 10px;
margin-bottom: 10px;
`
const Link = styled.a`
margin: 5px 0;
display: flex;
font-size: 12px;
text-decoration: underline;
cursor: pointer;
`
 function Login(props) {
    

    return (
        <Container>
            <Wrapper>
                <Title>SIGN IN</Title>
                <Form>
                    
                    <Input placeholder=" username" />
                    <Input placeholder="password" />
                    
                </Form>
                
            <Button>LOGIN</Button>
            <Link>DON'T YOU REMMEBER THE PASSWORD?</Link>
            <Link>CREATE A NEW ACCOUNT</Link>
            </Wrapper>
            
        </Container>
    )
}
export default Login
import React from 'react'
import styled from 'styled-components'
import {mobile} from '../responsive'
import { AppTitle } from '../tools/generalFunc'
const Container = styled.div`
width: 100vw;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
background: url('https://media.istockphoto.com/photos/young-woman-holding-shopping-bags-picture-id1243464982?b=1&k=20&m=1243464982&s=612x612&w=0&h=dpTbUZnacIknkH_D_h0WcyrG1DmstO22e9HAN4FZmic=');

  background-repeat: no-repeat;
  background-size: cover;
  
`
const Wrapper = styled.div`
padding: 20%;
width: 40%;


${mobile({width: "75%"})}

`
const Title = styled.h1`
font-size: 25px;
font-weight: 500;


`

const Form = styled.form`
display: flex;
flex-wrap: wrap;
`
const Input = styled.input`
flex: 1;
min-width: 40%;
padding: 10px;
margin: 20px 10px 0px 0px;
`
const Agreement = styled.p`
font-size: 12px;
margin: 20px 0px;
`
const Button = styled.button`
width: 40%;
border: none;
color: white;
cursor: pointer;
background-color: teal;
padding: 10px;
`
 function Register(props) {
    AppTitle('Register/Moda.Me')

    return (
        <Container>
            <Wrapper>
                <Title>CREATE AN ACCOUNT</Title>
                <Form>
                    <Input placeholder="name" />
                    <Input placeholder="lastName" />
                    <Input placeholder=" username" />
                    <Input placeholder=" email" />
                    <Input placeholder="password" />
                    <Input placeholder="confirm password" />
                </Form>
                <Agreement>by creating an account, I consent to the processing of personal datain accordance with the <b>Privacy Policy</b></Agreement>
            <Button>Create</Button>
            </Wrapper>
            
        </Container>
    )
}
export  default Register 
import React from 'react'
import styled from 'styled-components'
import {mobile} from '../responsive'
import { AppTitle } from '../tools/generalFunc'
import { Formik } from 'formik';
import { useFormik } from 'formik';
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

width: 250px;
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
const Span = styled.span`
display: block;

min-width: 40%;
padding: 10px;
margin: 20px 10px 0px 0px;
`
 function Register(props) {
    AppTitle('Register/Moda.Me')
    const formik = useFormik({
        initialValues: {
          name: '',
          lastName: '',
          email: '',
          userName: '',
          password: '',
          confirmPassword: ''
        },
        onSubmit: values => {
          alert(JSON.stringify(values, null, 2));
        },
      
        // validation
        validate: (values)=>{
            let errors = {}
            if (!values.name) {
              errors.name = "Required!";
            }
            if (!values.email) {
              errors.email = "Required!";
            } else if (
              !/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i.test(
                values.email
              )
            ) {
              errors.email = "Please enter a valid email!";
            }
            if(!values.userName){
              errors.userName = 'Required!'
            }
            console.log(errors)
            return errors
          }
    })

    return (
        <Container>
            <Wrapper>
                <Title>CREATE AN ACCOUNT</Title>
                <Form onSubmit={formik.handleSubmit}>
      
       <Input
         id="name"
         name="name"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.name}
         placeholder = "name "
       />
       <Input
         id="lastName"
         name="lastName"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.lastName}
         placeholder="last name"
       />
      {formik.errors.name && (
          <Span className="error">{formik.errors.name}</Span>
        )}
        

       <Input
         id="email"
         name="email"
         type="email"
         onChange={formik.handleChange}
         value={formik.values.email}
         placeholder='email'
       />
       <Input
         id="userName"
         name="userName"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.userName}
         placeholder='user name'
       />
       <Input
         id="password"
         name="password"
         type="password"
         onChange={formik.handleChange}
         value={formik.values.password}
         placeholder ='password'
       />
       <Input
         id="confirmPassword"
         name="confirmPassword"
         type="confirmPassword"
         onChange={formik.handleChange}
         value={formik.values.confirmPassword}
         placeholder = 'confirm password'
       />
       
     </Form>
                <Agreement>by creating an account, I consent to the processing of personal datain accordance with the <b>Privacy Policy</b></Agreement>
            <Button>Create</Button>
            </Wrapper>
            
        </Container>
    )
}
export  default Register 
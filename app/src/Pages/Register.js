import React from 'react'
import { useFormik } from 'formik';
import { Button,Form, Container, Input, Label, Title, Wrapper, Agreement, Error, Div } from '../styledComponent/Register.styled';

function Register(props) {
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
      // alert(JSON.stringify(values, null, 2));
      console.log('data', values)
      
    },
    validate:values=>{
      let errors = {};
      if(!values.name){
       errors.name = '  Please enter your name!'
      } 
      if(!values.lastName){
       errors.lastName = 'Please enter your last name!'
      } 
     if(!values.email){
       errors.email= 'Email is required!'
      }else if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i.test(values.email)){
     errors.email = 'Invalid email format!'
     }
     if(!values.userName){
      errors.userName = 'Pls enter your userName!'
     } if(!values.password){
      errors.password = "Password is required"
     }
      if(!values.confirmPassword){
      errors.confirmPassword = "required"
     }
      return errors;
     }
  });

  return (
  
     
      <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form onSubmit={formik.handleSubmit}>
          <Div>
       <Input
         id="name"
         name="name"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.name}
         placeholder="name"
       />
       {formik.errors.name && <Error className="error">{formik.errors.name}       </Error>}
       </Div>
       <Div>
       <Input
         id="lastName"
         name="lastName"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.lastName}
         placeholder="lastName"
       />
        {formik.errors.lastName && <Error className="error">{formik.errors.lastName}       </Error>}
        </Div>
        <Div>
       <Input
         id="email"
         name="email"
         type="email"
         onChange={formik.handleChange}
         value={formik.values.email}
         placeholder="email"
       />
        {formik.errors.name && <Error className="error">{formik.errors.email}       </Error>}
        </Div>
        <Div>
        <Input
         id="userName"
         name="userName"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.userName}
         placeholder="user name"
       />
       
        {formik.errors.userName && <Error className="error">{formik.errors.userName}       </Error>}
        </Div>
        <Div>
        <Input
         id="password"
         name="password"
         type="password"
         onChange={formik.handleChange}
         value={formik.values.password}
         placeholder = "password"
       />
        {formik.errors.password && <Error className="error">{formik.errors.password}       </Error>}
        </Div>
        <Div>
        <Input
         id="confirmPassword"
         name="confirmPassword"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.confirmPassword}
         placeholder = "confirm password"
       />
        {formik.errors.confirmPassword && <Error className="error">{formik.errors.confirmPassword}       </Error>}
        </Div>
<Agreement>by creating an account, I consent to the processing of my personal data in accordance
  with the <b> Privarcy Policy</b> </Agreement>
        <Button type="submit">Create</Button>
       
       </Form>
       </Wrapper>
       </Container>
     
      
  
  )
}

export default Register
import React from 'react'
import { useFormik } from 'formik';
import { Button,Form, Container, Input, Label, Title, Wrapper, Agreement } from '../styledComponent/Register.styled';

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
       errors.name = 'Required!'
      } 
      if(!values.lastName){
       errors.lastName = 'Required!'
      } 
     if(!values.email){
       errors.email= 'Required!'
      }else if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i.test(values.email)){
     errors.email = 'Invalid email format!'
     }
     if(!values.userName){
      errors.userName = 'Required!'
     } if(!values.password){
      errors.password = "required"
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
       <Input
         id="name"
         name="name"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.name}
         placeholder="name"
       />
       {formik.errors.name && <p className="error">{formik.errors.name}       </p>}
       
       <Input
         id="lastName"
         name="lastName"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.lastName}
         placeholder="lastName"
       />
        {formik.errors.lastName && <div className="error">{formik.errors.lastName}       </div>}
       
       <Input
         id="email"
         name="email"
         type="email"
         onChange={formik.handleChange}
         value={formik.values.email}
         placeholder="email"
       />
        {formik.errors.name && <div className="error">{formik.errors.email}       </div>}
    
        <Input
         id="userName"
         name="userName"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.userName}
         placeholder="user name"
       />
       
        {formik.errors.userName && <div className="error">{formik.errors.userName}       </div>}
      
        <Input
         id="password"
         name="password"
         type="password"
         onChange={formik.handleChange}
         value={formik.values.password}
         placeholder = "password"
       />
        {formik.errors.password && <div className="error">{formik.errors.password}       </div>}
        
        <Input
         id="confirmPassword"
         name="confirmPassword"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.confirmPassword}
         placeholder = "confirm password"
       />
        {formik.errors.userName && <div className="error">{formik.errors.confirmPassword}       </div>}

<Agreement>by creating an account, I consent to the processing of my personal data in accordance
  with the <b> Privarcy Policy</b> </Agreement>
        <Button type="submit">Create</Button>
       
       </Form>
       </Wrapper>
       </Container>
     
      
  
  )
}

export default Register
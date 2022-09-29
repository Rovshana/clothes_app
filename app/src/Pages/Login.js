import React from 'react'
import { Button, Container, Form, Input, Title, Wrapper, Link, Box, Error } from '../styledComponent/Login.styled'
import { AppTitle } from '../tools/generalFunc'
import { useFormik } from 'formik';
 function Login(props) {
    const formik = useFormik({
        initialValues: {
          userName: '',
          password: '',
         
        },
        onSubmit: values => {
          alert(JSON.stringify(values, null, 2));
        },
validate: values =>{
    let errors = {}
    if(!values.userName){
        errors.userName = "required!"
    }
 if(!values.password){
    errors.password = "required!"
 }
 return errors
}


      });
    
AppTitle('Login/Moda.Me')
    return (
        <Container>
            <Wrapper>
                <Title>SIGN IN</Title>
                <Form onSubmit={formik.handleSubmit}>
                    <Box>
                    <Input placeholder=" username"
                    id="userName"
                    name="userName"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.userName} />
                     {formik.errors.userName && <Error className="error">{formik.errors.userName}       </Error>}
                    </Box>
                    <Box>
                    <Input placeholder="password"
                    id="password"
                    name="password"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.password} />

{formik.errors.password && <Error className="error">{formik.errors.password}       </Error>}
                    </Box>
                </Form>
                
            <Button type="submit">LOGIN</Button>
            <Link>DON'T YOU REMMEBER THE PASSWORD?</Link>
            <Link>CREATE A NEW ACCOUNT</Link>
            </Wrapper>
            
        </Container>
    )
}
export default Login
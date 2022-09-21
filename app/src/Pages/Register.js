import React from 'react'
import { useFormik } from 'formik';

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
    <>
     <form onSubmit={formik.handleSubmit}>
       <label htmlFor="name"> Name</label>
       <input
         id="name"
         name="name"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.name}
       />
       {formik.errors.name && <div className="error">{formik.errors.name}       </div>}
       <label htmlFor="lastName">Last Name</label>
       <input
         id="lastName"
         name="lastName"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.lastName}
       />
        {formik.errors.lastName && <div className="error">{formik.errors.lastName}       </div>}
       <label htmlFor="email">Email Address</label>
       <input
         id="email"
         name="email"
         type="email"
         onChange={formik.handleChange}
         value={formik.values.email}
       />
        {formik.errors.name && <div className="error">{formik.errors.email}       </div>}
        <label htmlFor="userName">User Name</label>
        <input
         id="userName"
         name="userName"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.userName}
       />
       
        {formik.errors.userName && <div className="error">{formik.errors.userName}       </div>}
        <label htmlFor="password">Password</label>
        <input
         id="password"
         name="password"
         type="password"
         onChange={formik.handleChange}
         value={formik.values.password}
       />
        {formik.errors.password && <div className="error">{formik.errors.password}       </div>}
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
         id="confirmPassword"
         name="confirmPassword"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.confirmPassword}
       />
        {formik.errors.userName && <div className="error">{formik.errors.confirmPassword}       </div>}
       <button type="submit">Submit</button>
     </form>
      
    </>
  )
}

export default Register
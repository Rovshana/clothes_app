import styled from 'styled-components'

export const Container = styled.div`
width: 100vw;
height: 100vh;
background: url('https://media.istockphoto.com/photos/young-woman-holding-shopping-bags-picture-id1243464982?k=20&m=1243464982&s=612x612&w=0&h=b5-E3jIkG-M2lRe0QkyU6ldWgKxfoXoELry-PJDmJEk=');
background-repeat: no-repeat;
object-fit: cover;
background-position: center;
background-size: cover;
display: flex;
justify-content: center;
align-items: center;
`
export const Title = styled.h1`
font-size: 24px;
font-weight: 300;


`
 export const Form = styled.form `
 display: flex;
 flex-wrap: wrap;
`
export const Div = styled.div`
display: flex;
flex-direction: column
`
export const Wrapper = styled.div`
width: 40%;
background-color: white;
padding:  20px;


`
export const Label = styled.label`

`
export const Agreement = styled.span`
font-size: 12px;
margin: 10px 0px;
`

export const Input = styled.input`
flex: 1;
width: 250px;
margin: 20px 20px 5px 5px;
padding: 10px;


`
export const Button = styled.button`
width: 40%;
border: none;
padding: 10px;

background: teal;
border-radius: 20px;
cursor: pointer;
color: white;

`
export const Error = styled.div`
width: 250px;
display: block;
margin-left: 5px;


`
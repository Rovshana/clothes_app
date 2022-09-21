import React from 'react'
import {Container, Image, Info, Title, Button} from '../styledComponent/catagoriesItem.styled'
import {Link, useNavigate} from 'react-router-dom'



 function CatagoryItem({item}) {
     const navigate = useNavigate()

    return (
        <Container>
            
            <Image src={item.photo}/>
            <Info>
                <Title>{item.title}</Title>
                <Button onClick={()=> navigate('/productlist')}>Shop Now</Button>
            </Info>
        
        </Container>
    )
}
export default CatagoryItem
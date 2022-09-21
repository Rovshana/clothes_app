import React from 'react'
import SendIcon from '@mui/icons-material/Send';
import { Button, Container, Description, Input, InputContainer, Title } from '../styledComponent/newsLetter.styled'
 function NewsLetter(props) {
    return (
        <Container>
            <Title>NewsLetter</Title>
            <Description>Get timely updates from your favorite products.</Description>
            <InputContainer>
            <Input placeholder='Your email' />
            <Button>
                <SendIcon/>
            </Button>
            </InputContainer>
            
        </Container>
    )
}
export default NewsLetter
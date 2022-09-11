import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import AddLocationIcon from '@mui/icons-material/AddLocation';
import PhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';
import styled from 'styled-components'
 const Container = styled.div`
 display: flex;
 `
 const Left= styled.div`
 flex: 1;
 display: flex;
 flex-direction: column;
 padding: 20px;
 `

 const Logo = styled.h1`
 `
 const Desc = styled.p`
 margin: 20px 0px;
 `
 const SocialContainer = styled.div`
 display: flex;
 `
 const SocialIcon = styled.div`
 width: 40px;
 height: 40px;
 border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
margin-right: 20px;
background-color: #${props => props.color}



 `

 const Right = styled.div`
 flex: 1;
 padding: 20px;
 `
 const ContactItem = styled.div`
 margin-bottom: 20px;
 display: flex;
 align-items: center;
 `
 const Center = styled.div`
 flex: 1;
 padding: 20px;
 `
 const Title = styled.h3`
 margin-bottom: 30px;
 `
 const List = styled.ul`
 margin: 0;
 padding: 0;
 display: flex;
 flex-wrap: wrap;
 
 `

 const ListItem = styled.li`
 list-style: none;
 width: 50%;
 margin-bottom: 10px;
 `
 function Footer() {
    

    return (
        <Container>
            <Left>
               <Logo>Dior.</Logo>
               
<Desc>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi efficitur gravida dui et vulputate. Sed eget odio vitae sem convallis eleifend. Fusce molestie facilisis lorem</Desc>
           <SocialContainer>
            <SocialIcon color="#4267B2"><FacebookIcon/></SocialIcon>
            <SocialIcon color="#e60002"><InstagramIcon/></SocialIcon>
            <SocialIcon color="#1DA1F2"><TwitterIcon/></SocialIcon>
            <SocialIcon color="#e60028"><PinterestIcon/></SocialIcon>

           </SocialContainer>
            </Left>
            <Center>
            <Title>Useful Links</Title>
            <List>
            <ListItem>Home</ListItem>
            <ListItem>Cart</ListItem>
            <ListItem>Woman fasion</ListItem>
            <ListItem>Accessories</ListItem>
            <ListItem>Bags</ListItem>
            <ListItem>Boots</ListItem>
            <ListItem>Shoes</ListItem>
            </List>
            </Center>
            <Right>
            <Title>Contact</Title>
            <ContactItem>
            <AddLocationIcon  style={{marginRight: "10px"}}/>
            city Baku, 28May
            </ContactItem>
            <ContactItem>
            <PhoneIcon  style={{marginRight: "10px"}}/>
            +994 70 444 44 44
            </ContactItem>
            <ContactItem>
            <MailIcon style={{marginRight: "10px"}}/>
            rzali@gmail.com
            </ContactItem>
            </Right>
            
        </Container>
    )
}
export default Footer
import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import AddLocationIcon from '@mui/icons-material/AddLocation';
import PhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';
import {Contact, Center,Desc, Title, List, Container, ContactItem, Left, ListItem, Logo, Right,SocialContainer,SocialIcon} from '../styledComponent/Footer.styled'
 function Footer() {
    

    return (
        <Container>
            <Left>
               <Logo>Moda.Me</Logo>
               
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
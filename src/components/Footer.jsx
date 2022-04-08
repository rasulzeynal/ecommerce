import { Facebook, Instagram, Twitter,Room,Phone } from "@material-ui/icons";
import styled from "styled-components";
import {mobile} from "../Responsive";
import { Link } from "react-router-dom";



const Container = styled.div`
    display: flex;
    ${mobile({flexDirection:"column"})};
`;
const Left = styled.div`
    flex:1;
    display: flex;
    flex-direction: column;
    padding: 20px;
    
`;

const SocialContainer = styled.div`
    display: flex;
`;
const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${(props) => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`;
const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({display:"none"})};
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;


const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({backgroundColor:"#fff8f8"})};
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;



const Footer = () => {
  return (
    <Container>
      <Left>
          <Title>SOCIAL</Title>
          <SocialContainer>
              <SocialIcon color="3b5999">
                  <Facebook/>
              </SocialIcon>
              <SocialIcon color="e4405f">
                  <Instagram/>
              </SocialIcon>
              <SocialIcon color="55acee">
                  <Twitter/>
              </SocialIcon>
          </SocialContainer>
      </Left>
      <Center>
          <Title style={{textAlign:"center"}}>Useful Links</Title>
          <List >
            <Link to="/" style={{textDecoration:"none",padding:"5px 15px",fontWeight:"bold",color:"black"}}>
             Home
            </Link>
            <Link to="/products"  style={{textDecoration:"none",padding:"5px 15px",fontWeight:"bold",color:"black"}}>
               Products
            </Link>
            <Link to="/cart" style={{textDecoration:"none",padding:"5px 15px",fontWeight:"bold",color:"black"}}>
            Cart
            </Link>
            <Link to="/" style={{textDecoration:"none",padding:"5px 15px",fontWeight:"bold",color:"black"}}>
            Account
            </Link>
          </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{marginRight:"10px"}}/> Binagady District
        </ContactItem>
        <ContactItem>
          <Phone style={{marginRight:"10px"}}/> +994 000 11 22
        </ContactItem>
      </Right>
    </Container>
  )
}

export default Footer

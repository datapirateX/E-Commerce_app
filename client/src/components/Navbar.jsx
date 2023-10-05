import React from "react";
import styled from "styled-components";
import search from "../assets/search.png";
import cart from "../assets/cart.png"
import { mobile } from "../responsive";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import { Badge } from "@material-ui/core";

const Container = styled.div`
  height: 60px;
  ${mobile({ height: "50px" })}
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  ${mobile({ padding: "10px 0px" })}
  
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 12px;
  ${mobile({ flex: 2, justifyContent: "center" })}

  
`;
const Language = styled.span`
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  ${mobile({ display: "none" })}
  
`;
const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;
const Input = styled.input`
border: none;
${mobile({ width: "50px" })}
`
const Logo = styled.h1`
font-weight: bold;
${mobile({ fontSize: "24px" })}
`
const MenuItem = styled.div`
display: flex;
font-size:14px;
font-weight: 700;
cursor: pointer;
${mobile({ fontSize: "12px", marginLeft: "10px" })}
`

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
            <Language>EN</Language>
            <SearchContainer>
                <Input />
                <Search />

            </SearchContainer>
        </Left>
        <Center><Logo>E-COMMERCE</Logo></Center>
        <Right>
          <MenuItem>REGISTER</MenuItem>
          <MenuItem>SIGN IN</MenuItem>
          <MenuItem>
              <ShoppingCartOutlined />
              <Badge badgeContent={4} color="primary"></Badge>
          
            
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;

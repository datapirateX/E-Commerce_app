import React from "react";
import styled from "styled-components";
import search from "../assets/search.png";
import cart from "../assets/cart.png"


const Container = styled.div`
  height: 60px;
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  
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

  
`;
const Language = styled.span`
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  
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
`
const Logo = styled.h1`
font-weight: bold;
`
const MenuItem = styled.div`
font-size:14px;
font-weight: 700;
cursor: pointer;
`

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
            <Language>EN</Language>
            <SearchContainer>
                <Input />
                <img src={search} alt="" style={{width: '12px', flex: '1'}}/>

            </SearchContainer>
        </Left>
        <Center><Logo>E-COMMERCE</Logo></Center>
        <Right>
          <MenuItem>REGISTER</MenuItem>
          <MenuItem>SIGN IN</MenuItem>
          <MenuItem>
              
          <img src={cart} alt="" style={{width: '24px', flex: '1'}}/>
            
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;


  import styled from "styled-components";
  import Love from "../assets/love.png";
  import Search from "../assets/search.png";
  import Cart from "../assets/cart.png";
  
  const Info = styled.div`
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.2);
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease;
    cursor: pointer;
  `;
  
  const Container = styled.div`
    flex: 1;
    margin: 5px;
    min-width: 280px;
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    
    
    position: relative;
  
    &:hover ${Info}{
      opacity: 1;
      border-radius: 20px;
    }
  `;
  
  const Circle = styled.div`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: white;
    position: absolute;
  `;
  
  const Image = styled.img`
    height: 95%;
    z-index: 2;
  `;
  
  const Icon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    transition: all 0.5s ease;
    &:hover {
      background-color: #e9f5f5;
      transform: scale(1.1);
      
    }
  `;
  
  const Product = ({ item }) => {
    return (
      <Container>
        <Circle />
        <Image src={item.img}/>
        <Info>
          <Icon>
           <img src={ Love } alt=""  style={{width: "21px"}}/>
          </Icon>
          <Icon>
           <img src={ Search } alt="" style={{width: "21px"}}/>
          </Icon>
          <Icon>
           <img src={ Cart } alt="" style={{width: "21px"}}/>
          </Icon>
        </Info>
      </Container>
    );
  };
  
  export default Product;
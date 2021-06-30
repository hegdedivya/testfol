import React from "react";
import styled from "styled-components";
import image from "../images/heropicf.svg";
import bg from "../images/hero.jpg";
import HeroText from "./HeroText";
import {  motion } from "framer-motion";
const Hero = () => {
  
  return (
    <Container>
      <Wrapper>
        <InnerWrapper>
          <Left>
            <HeroText />
          </Left>
          <motion.img 
          initial={{ scale: 0 }}
          animate={{ rotate: 360, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20
          }}
          src={image} alt="@canva"/>
        </InnerWrapper>
      </Wrapper>
    </Container>
  );
};


export default Hero;
const Left = styled.div`
  width: 70%;
  @media (max-width: 670px) {
    width: 100%;
  }
`;
const InnerWrapper = styled.div`
  max-width: 900px;
  height: 100%;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  img {
  
    height: 260px;
    width: 260px;
    
    @media (max-width: 670px) {
      display: none;
    }
  }
`;

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: rgba(255, 255, 255, 0.9);
  @supports (-webkit-backdrop-filter: none) or (backdrop-filter: none) {
    -webkit-backdrop-filter: blur(35px);
    backdrop-filter: blur(35px);
    background-color: rgba(255, 255, 255, 0.4);
  }
`;

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${bg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
 
`;
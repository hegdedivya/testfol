import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion"
const HeroText = () => {
  return (
    <Container>
      
      <h1>Hi,</h1>
      <motion.h1
      initial={{opacity:0}}
      animate={{opacity:1}}
      transition={{duration:1}}>I'm Divya!</motion.h1>
      <h1>Welcome To</h1>
      <motion.h1
      initial={{opacity:0}}
      animate={{opacity:1}}
      transition={{duration:1}}>My Portfolio.</motion.h1>
      <BtnContainer>
        <Link to={"/projects"}><button className="projects">Projects</button></Link>
        <Link to={"/skills"}><button>Skills</button></Link>
      </BtnContainer>
    </Container>
  );
};

export default HeroText;
const Container = styled.div`
  margin-top: 2rem;
  padding: 3rem;
  
  h1 {
    
    font-weight: 900;
    font-size: 3.5rem;
    &:nth-of-type(1) {
      color: #af60ff;
      font-weight: 700;
 
    }
    &:nth-of-type(2) {
      color: #8849c7;
 
    }
    &:nth-of-type(3) {
      color: #651fac;
  
    }
    &:nth-of-type(4) {
      color: #3c0473;
 
    }
  }
`;
const BtnContainer = styled.div`
  margin-top: 2rem;
  button {
    background-color: #81d1ff;
    border: none;
    padding: 0.9rem 1.1rem;
    color: #fff;
    border-radius: 1rem;
    box-shadow: 0px 13px 24px -7px #81d1ff;
    transition: all 0.3s ease-in-out;
    margin: 0.5rem;
    font-size: 0.8rem;
    cursor: pointer;
    &:hover {
      transform: translateX(5px);
    }
  }
  .projects {
    color: #81d1ff;
    background: transparent;
    border: 3px solid #81d1ff;
    &:hover {
      transform: translateX(5px);
    }
  }
`;
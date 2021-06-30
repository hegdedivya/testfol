import React, { useState } from "react";
import styled from "styled-components";
import divyar from "../images/divyar.png";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Nav>
      <Container>
      <Link to={"/"}>
        <LogoIcon>
            
          <h3>DIVYA</h3>
          <img src={divyar} alt="" />
          <h3>HEGDE</h3>
          
        </LogoIcon>
        </Link>
        <Hamburger onClick={() => setIsOpen(!isOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </Hamburger>
        <Menu isOpen={isOpen}>
          <LinkWrapper>
          <Link to={"/"}>
            <MenuLink>Home</MenuLink></Link>
            <Link to={"/skills"}>
            <MenuLink>Skills</MenuLink></Link>
            <Link to={"/projects"}>
            <Button>Projects</Button></Link>
          </LinkWrapper>
        </Menu>
      </Container>
    </Nav>
  );
};

export default Navbar;
const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 3;
`;
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  max-width: 1000px;
  margin: auto;
  width: 100%;
  padding: 2rem;
`;
const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  cursor: pointer;
  @media (max-width: 768px) {
    background-color: rgba(255, 255, 255, 0.9);
    @supports (-webkit-backdrop-filter: none) or (backdrop-filter: none) {
      -webkit-backdrop-filter: blur(35px);
      backdrop-filter: blur(15px);
      background-color: rgba(255, 255, 255, 0.4);
    }
    border-radius: 1rem;
    margin-top: 1rem;
    box-shadow: -4px 8px 15px 1px rgba(0, 0, 0, 0.07);
    overflow: hidden;
    flex-direction: column;
    max-height: ${({ isOpen }) => (isOpen ? "300px" : "0")};
    transition: max-height 0.3s ease-in-out;
    width: 100%;
  }
`;
const LinkWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  padding: 1.5rem 0;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const MenuLink = styled.a`
  text-decoration: none;
  color: #858586;
  font-size: 0.9rem;
  padding: 0.7rem 1.5rem;
  transition: all 0.2s ease-in;
  border-radius: 0.5rem;
  font-weight: 500;
  &:hover {
    color: #7781d4;
    background: #e7e9fc;
    padding-bottom: 0.3rem;
  }
`;
const Button = styled.button`
  font-size: 0.8rem;
  background: #f774c5;
  color: #ffffff;
  border: none;
  border-radius: 1rem;
  padding: 0.8rem 1.1rem;
  box-shadow: 0px 13px 24px -7px #ecb6d7;
  transition: max-height 0.2s ease-in;
  margin-left: 0.5rem;
  cursor: pointer;
  &:hover {
    box-shadow: 0 17 16 -11 #ecb6d7;
    transform: translateY(-5px);
  }
  @media (max-width: 670px) {
    /* width: 100%; */
    padding: 0.3;
  }
`;
const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;
  span {
    height: 2px;
    width: 25px;
    background: #f774c5;
    margin-bottom: 4px;
    border-radius: 5px;
  }
  @media (max-width: 768px) {
    display: flex;
  }
`;
const LogoIcon = styled.div`
  cursor: pointer;
  display: flex;
  img {
    height: 2rem;
    padding-bottom: 0.2rem;
  }
  h3 {
    color: #000;
    text-align: left;
    font-size: 18px;
    padding: 0.2rem;
  }
`;
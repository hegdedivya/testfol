import React from "react";
import styled from "styled-components";
import { FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";
const Footer = () => {
  return (
    <Container>
      <FooterText>Find Me Here.</FooterText>
      <SocialIcons>
        <SocialIconLink
          href="https://www.instagram.com/"
          target="_blank"
          aria_label="Facebook"
        >
          <FaFacebook />
        </SocialIconLink>
        <SocialIconLink href="/" target="_blank" aria_label="Linkedin">
          <FaLinkedin />
        </SocialIconLink>
        <SocialIconLink href="/" target="_blank" aria_label="Github">
          <FaGithub />
        </SocialIconLink>
      </SocialIcons>    
      <Rights>©2021 DIVYA HEGDE</Rights>
    </Container>
  );
};

export default Footer;

const Container = styled.div`
background-color: #FEF1FC;
height: 500px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;

const FooterText = styled.p`
  color: #65109B;
  font-weight: 800;
  font-size: 3rem;
  margin-top: 2rem;
  margin-bottom: 0.7rem;
  text-align: center;
`;
const SocialIcons = styled.div`
  justify-content: center;
  margin-top: 2rem;
  color: #000;
  display: flex;
`;
const SocialIconLink = styled.div`
  justify-content: center;
  padding-left: 1rem;
  font-size: 1.5rem;
  cursor: pointer;
  &:hover{
    color: #70edb9;
  }
`;
const Rights = styled.p`
  font-size: 1rem;
  font-weight: 500px;
  text-align: center;
  margin-top: 2rem;
  margin-bottom: 2rem;
`;
export const Image= styled.img`
position: absolute;
width: 100%;
height: 100%;
max-width: 100px;
max-height: 100px;
`;
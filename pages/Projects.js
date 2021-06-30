import React from 'react'
import styled from 'styled-components';
import Footer from '../Footer';
import Pic from './hacker.png';
import AniWeb from './webdev.svg';
import Wait from './waitqr.png';
import Gamer from './gamergirl.png';
const Projects = () => {
    
    return (
      <Container>
        <h1>Projects</h1>
        <ProjWrapper>
        <ProjDiv>
          <ProjPic>
          <img src={Wait} height="140px" width="200px" alt="phishing website"/>
          </ProjPic>
          <ProjInfo>
            <ProjTitle>WAITQR</ProjTitle>
            <ProjText>A hackathon project to help people order food safely at a <br/>restaurant by scanning a QR code on their table. We made <br/>it to top 10 under HealthTech category!</ProjText>
          </ProjInfo>
        </ProjDiv>
        <ProjDiv>
          <ProjInfo>
            <ProjTitle>Gaming Website</ProjTitle>
            <ProjText>Using pure HTML, CSS, JS and Bootstrap, this colorful website<br/> is brought to life. Games like rock paper scissors were made <br/> with JavaScript.</ProjText>
          </ProjInfo>
          <ProjPic>
            <img src={Gamer} height="140px" width="200px" alt="animated website"/>
          </ProjPic>
        </ProjDiv>
        <ProjDiv>
          <ProjPic>
          <img src={Pic} height="140px" width="200px" alt="phishing website"/>
          </ProjPic>
          <ProjInfo>
            <ProjTitle>Phishing URL Detection</ProjTitle>
            <ProjText>This project helps to detect if a given URL is phished or not.<br/>Training a machine learning model to pick up on <br/>most prominent features of a phishing website.</ProjText>
          </ProjInfo>
        </ProjDiv>
        <ProjDiv>
          <ProjInfo>
            <ProjTitle>Animated Website</ProjTitle>
            <ProjText>Using react libraries like framer motion, a fluid card is created.<br/> Helps bring figma prototypes to life.</ProjText>
          </ProjInfo>
          <ProjPic>
            <img src={AniWeb} height="140px" width="200px" alt="animated website"/>
          </ProjPic>
        </ProjDiv>
        </ProjWrapper>
        <Footer/>
      </Container>
      )
}

export default Projects;

export const ProjWrapper= styled.div`
box-sizing: border-box;
@media (max-width: 670px){
  display: flex;
  flex-direction: column;
}
`;
export const Container= styled.div`
justify-content: center;
align-items: center;
background-color: aliceblue;

padding-top: 2rem;
h1{
  font-size: 4rem;
  margin-top: 6rem;
margin-bottom: 4rem;
text-align: center;
padding-top: 4rem;
}
`;
export const ProjPic= styled.div`
padding: 3rem;
height: 150px;
width: 200px;
background-color: green;
border-radius: 50px;
cursor: pointer;
transition: all 0.5s ease-in-out;
&:hover{
  transform: translateX(-5px);
}
@media (max-width: 670px){
  height: 70px;
  width: 100px;
  
  img{
    width: 150px;
    height: 100px;
    padding-bottom: 2rem;
    
  }
}
`;
export const ProjTitle= styled.div`
color: blueviolet;
font-weight: 800;
font-size: 0.8rem;
padding-bottom: 0.5rem;
@media (max-width: 607px){
  font-size: 1rem;
}
`;
export const ProjText= styled.div`
color: grey;
font-size: 1.1rem;
font-weight: 500;
@media (max-width: 670px){
  display: none;
  
}
`;
export const ProjInfo= styled.div`
margin-top: 2rem;
margin-bottom: 2rem;
padding: 3rem;
@media (max-width: 670px){
  padding: 0.5rem;
}
`;

export const ProjDiv= styled.div`
justify-content: center;
align-items: center;
display: flex;
margin-bottom: 5rem;
@media (max-width: 607px){
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
}
`;
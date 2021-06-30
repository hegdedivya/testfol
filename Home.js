import React from 'react'
import styled from "styled-components";
import Hero from "./Hero";
import Sidebar from "./Sidebar";
import Main from "./Main";
import bgImg from "../images/bg.png";
import Footer from "./Footer";
import Interest from "../components/pages/Interest";
import Tech from "../components/pages/Tech";
const Home = () => {
    return (
    <Container>
      <Hero />
      <Interest/>
      <Tech/>
      <Wrapper>
        <Sidebar />
        <Main />
      </Wrapper>
      <Footer />
    </Container>
    )
}

export default Home;

const Container = styled.div`
  background: #cbddd1;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;

const Wrapper = styled.div`
background-image: url(${bgImg});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  display: flex;
`;
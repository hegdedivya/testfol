import React from "react";
import styled from "styled-components";

const Main = () => {
  return (
    <Container>
        
    </Container>
  );
};

const Container = styled.div`

  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  
  h1 {
    font-size: 45px;
    font-weight: 800;
    color: #343434;
    @media (max-width: 900px) {
      display: none;
    }
  }
`;

export default Main;
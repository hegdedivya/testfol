import React from 'react';
import styled from 'styled-components';
const Tech = () => {
    return (
        <Container>
            <h1>Tech</h1>
            <h5>Tech I use for all of my projects</h5>
            <TechContainer>
                <TechWrapper  >
                    <TechDiv >
                        <TechText style={{color: "#ED4C67"}}>Firebase</TechText>
                    </TechDiv>
                    <TechDiv>
                        <TechText style={{color: "#a29bfe"}}>Illustrator</TechText>
                    </TechDiv>
                </TechWrapper>
                <TechWrapper>
                    <TechDiv>
                        <TechText style={{color: "#fd79a8"}}>ReactJS</TechText>
                    </TechDiv>
                    <TechDiv>
                        <TechText style={{color: "#00cec9"}}>Flutter</TechText>
                    </TechDiv>
                    <TechDiv>
                        <TechText style={{color: "#F79F1F"}}>Python</TechText>
                    </TechDiv>
                </TechWrapper>
                <TechWrapper>
                    <TechDiv>
                        <TechText style={{color: "#74b9ff"}}>Figma</TechText>
                    </TechDiv>
                    <TechDiv>
                        <TechText style={{color: "#B53471"}}>Adobe XD</TechText>
                    </TechDiv>
                </TechWrapper>
            </TechContainer>
        </Container>
    )
}

export default Tech;
export const TechContainer= styled.div`
display: flex;
@media (max-width: 670px){
    display: flex;
    flex-direction: column;
}
`;
export const TechWrapper= styled.div`
justify-content: center;
align-items: center;
display: flex;
flex-direction: column;
margin-top: 1.5rem;
margin-bottom: 4rem;
padding-right: 1rem;
padding-left: 1rem;
@media (max-width: 670px){
    margin-bottom: 1rem;
}
`;

export const TechDiv= styled.div`
cursor: pointer;
height: 100px;
width: 150px;
border-radius: 15px;
background-color: #F6FFF0;
justify-content: center;
align-items: center;
margin-top: 1rem;
margin-bottom: 1rem;
box-shadow: 0px 13px 24px -7px #CAD3C8;
transition: all 0.3s ease-in-out;
&:hover{
transform: scale3d(0.8, 0.9, 0.7);
}
`;

export const TechText= styled.div`
font-size: 1.5rem;
text-align: center;
margin-bottom: 2rem;
margin-top: 2rem;
`;
export const Container= styled.div`
justify-content: center;
align-items: center;
display: flex;
flex-direction: column;
background-color: #FFFBFF;

h1{
    
    font-size: 3rem;
    font-weight: 800;
    margin-top: 4.5rem;
    margin-bottom: 2rem;
}
h5{
    color: grey;
}
`;
import React from 'react'
import styled from 'styled-components';
import Footer from '../Footer';
import { motion } from 'framer-motion';
const Skills = () => {
    const fadeLeft= {
        hiddenf: {opacity: 0, x: 200},
        visiblef: {opacity: 1, x: -200},
        hiddenb: {opacity: 0, x: -400},
        visibleb: {opacity: 1, x:0},
        hiddeng: {opacity: 0, x: 600},
        visibleg: {opacity: 1, x:200},
        hidden: {opacity: 0, x: 0},
        visible: {opacity: 1, x:0}
    }
    return (
        <Container>
            <h1>Skills</h1>
            <SkillWrapper>
                <BackEnd>
                <motion.div
                    variants={fadeLeft}
                    initial='hiddenf'
                    animate='visiblef'
                    transition={{duration: 1}}>
                    <h1>front<span>End
                        </span>
                        </h1>
                    <SkillDiv>
                        HTML, CSS, ReactJS
                    </SkillDiv>
                    </motion.div>
                </BackEnd>
                <BackEnd>
                    <motion.div
                    variants={fadeLeft}
                    initial='hiddenb'
                    animate='visibleb'
                    transition={{duration: 1}}>
                    <h1>back<span>End
                        </span>
                        </h1>
                    <SkillDiv>
                        Python, Firebase, NodeJS
                    </SkillDiv>
                    </motion.div>
                </BackEnd>
                <BackEnd>
                <motion.div
                    variants={fadeLeft}
                    initial='hiddeng'
                    animate='visibleg'
                    transition={{duration: 1}}>
                    <h1>graphic<span>Design
                        </span>
                        </h1>
                    <SkillDiv>
                        Figma, Adobe XD, Illustrator
                    </SkillDiv>
                    </motion.div>
                </BackEnd>
            </SkillWrapper>
            <Footer/>
        </Container>
    )
}

export default Skills;
export const SkillWrapper = styled.div`

`;

export const SkillDiv = styled.div`
color: gray;
`;
export const Container = styled.div`
justify-content: center;
align-items: center;

background-color: azure;
padding-top: 2rem;
h1{
    font-size: 4rem;
  margin-top: 6rem;
margin-bottom: 4rem;
text-align: center;
padding-top: 4rem;
}
span{
    color: #FC0392;
}
`;
export const BackEnd= styled.div`
align-items: center;
justify-content: center;
display: flex;
flex-direction: column;
margin-bottom: 2rem;
img{
    height: 100px;
    width: 200px;
}
h1{
    font-size: 2rem;
  margin-top: 1rem;
margin-bottom: 1.5rem;
text-align: center;
padding-top: 1rem;
}
@media (max-width: 670px){
    display: none;
}
`;



import React from 'react'
import styled from 'styled-components';
import { motion } from 'framer-motion';
import SvgUser from './iconComponents/fuser';
import Svgblog from './iconComponents/fblog';
import Svgweb from './iconComponents/fwebdevv';
import Svgml from './iconComponents/fmacl';
import Svggd from './iconComponents/fgraphd';
import Svgmob from './iconComponents/fmobdev';
const Interest = () => {
    return (
        <Container>
            <motion.h1
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{duration:1}}>
                Interests
            </motion.h1>
            <InterestWrapper>
                <UiUex>
                    <SvgUser />
                    <InterestTitle>
                        <h5>UI/UX</h5>
                    </InterestTitle>
                    <InterestText>
                    Landing pages, User Flow, Wireframes, Prototypes, Mobile and Web App Design
                    </InterestText>
                </UiUex>
                <UiUex>
                    <Svgweb/>
                    <InterestTitle>
                        <h5>Web Development</h5>
                    </InterestTitle>
                    <InterestText>
                        Animated, responsive web apps using ReactJS, Framer Motion and Firebase
                    </InterestText>
                </UiUex>
                <UiUex>
                    <Svgml/>
                    <InterestTitle>
                        <h5>Machine Learning</h5>
                    </InterestTitle>
                    <InterestText>
                     Machine Learning and Deep Learning models using Python to solve problems.
                    </InterestText>
                </UiUex>
            </InterestWrapper>
            <InterestWrapper>
                <UiUex>
                    <Svgmob/>
                    <InterestTitle>
                        <h5>Mobile App Development</h5>
                    </InterestTitle>
                    <InterestText>
                      Widgets, scaffold, routers, animated containers for mobile apps using Flutter and Dart.
                    </InterestText>
                </UiUex>
                <UiUex>
                    <Svggd/>
                    <InterestTitle>
                        <h5>Graphic Design</h5>
                    </InterestTitle>
                    <InterestText>Vector art, animations, SVG animations and custom illustrations with React, Figma, Adobe Illustrator
                    </InterestText>
                </UiUex>
                <UiUex>
                    <Svgblog/>

                    <InterestTitle>
                        <h5>WordPress</h5>
                    </InterestTitle>
                    <InterestText>
                        SEO optimized content, Keyword Research, Google Ads, Digital/social media marketing
                    </InterestText>
                </UiUex>
            </InterestWrapper>
        </Container>
    )
}

export default Interest;
export const Container= styled.div`
width: 100%;
background-color: #f2fffc;

justify-content: center;
align-items: center;
display: flex;
flex-direction: column;

h1{
    font-size: 3rem;
    font-weight: 800;
    margin-top: 4.5rem;
    margin-bottom: 2rem;
}
`;
export const InterestWrapper=styled.div`
display: flex;
justify-content: center;
justify-content: center;
align-items: center;
@media (max-width: 670px) {
    display: flex;
    flex-direction: column;
  }
`;
export const UiUex= styled.div`
justify-content: center;
align-items: center;
display: flex;
flex-direction: column;
padding: 1rem 1rem;
width: 160px;
`;
export const InterestTitle= styled.div`
margin-bottom: 0.3rem;
margin-top: 1rem;
`;
export const InterestText= styled.div`
color: #606060;
text-align: center;
display: flex;
margin-bottom: 1rem;
font-size: 0.7rem;

width: 100%;
max-width: 300px;
padding: 1rem 1rem;
box-sizing: border-box;

`;

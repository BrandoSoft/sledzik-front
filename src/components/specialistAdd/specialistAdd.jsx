import React from 'react';
import styled from "styled-components";

import {BrandLogo} from '../brandLogo';
import { Marginer } from "../marginer";

import CatCompImage from '../../images/CatLogo.png';
import { Button } from '../button/button';


const SpecialistAdContainer = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  background-color: #000000;
  align-items: center;
  justify-content: center;
`;

const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
 
`;

const SloganContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin-right: 5em;
  
`;

const Slogan = styled.h2`
  margin: 0;
  font-size: 24px;
  color: #fff;
  font-weight: 700;
  line-height: 1.3;
  text-align: start;
 
`;

const StandoutImage = styled.div`
  width: 35em;
  height: 29em;
  img {
    width: 100%;
    height: 100%;
  }
  
`;


export function SpecialistAdd(props){
return(
    <SpecialistAdContainer>
      <ContentContainer>
        <SloganContainer>
          <BrandLogo logoSize={60} textSize={55} marginLeft={-80} />
          <Marginer direction="vertical" margin="1em"/>
          <SloganContainer>
            <Slogan>Dzięki nam wiesz, czy Twój</Slogan>
            <Slogan>KOT spędza więcej czasu</Slogan>
            <Slogan>u somsiada niż w DOMU!</Slogan>
          </SloganContainer>
          <Marginer direction="vertical" margin={40}/>
          <Button marginLeft={-20}>CHCĘ WIEDZIEĆ!</Button>
        </SloganContainer>
          <StandoutImage>
            <img src={CatCompImage} alt="Cat Service Logo"/>
          </StandoutImage>
      </ContentContainer>
    </SpecialistAdContainer>
)

}


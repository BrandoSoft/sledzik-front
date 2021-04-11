import React from "react";
import styled from "styled-components";

import TopSectionBackgroundImage from "../../images/TopBg.jpg";
import CatComputer from "../../images/CatLogo.png";
import { BrandLogo } from "../../components/brandLogo";
import { Button } from "../../components/button/button";
import { Marginer } from "../../components/marginer";
import { useMediaQuery } from "react-responsive";
import { deviceSize } from "../../components/responsive/responsive";

const TopSectionContainer = styled.div`
  width: 100%;
  height: 800px;
  background: url(${TopSectionBackgroundImage}) no-repeat;
  background-position: 0 -150px;
  background-size: cover;

  @media screen and (max-width: ${deviceSize.mobile}px) {
    background-position: -900px 0;
    background-size: auto;
  }
`;

const TopSectionInnerContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

// const Title = styled.h2`
// margin: 0;
// font-size: 24px;
// color: #fff;
// line-height: 1.7;
// `;

const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const BackgroundFilter = styled.div`
width: 100%;
height: 100%;
background-color: rgba(22,70,88,0.0);
display flex;
flex-direction: column;
`;

const StandoutImage = styled.div`
  width: 30em;
  height: 24em;
  img {
    width: 100%;
    height: 100%;
  }
`;

const SloganText = styled.h3`
  margin: 0;
  line-height: 1.4;
  color: #fff;
  font-weight: 500;
  font-size: 25px;
  margin-left: ${({ marginLeft }) =>
    marginLeft ? marginLeft + "px" : "200px"};
`;

export function TopSection(props) {
  const { children } = props;

  const isMobile = useMediaQuery({ maxWidth: deviceSize.mobile });

  return (
    <TopSectionContainer>
      <BackgroundFilter>
        {children}
        <TopSectionInnerContainer>
          <LogoContainer>
            <BrandLogo
              logoSize={isMobile ? 50 : 100}
              textSize={isMobile ? 45 : 60}
              marginLeft={isMobile ? 30 : 200}
            />
            <SloganText marginLeft={isMobile ? 80 : 310}>
              Odkryj nocne ścieżki
            </SloganText>
            <SloganText marginLeft={isMobile ? 80 : 310}>
              Twojego kota.
            </SloganText>
            <Marginer direction="vertical" margin={60} />
            <Button marginLeft={isMobile ? 60 : 280}>CHCĘ ŚLEDZIĆ!</Button>
          </LogoContainer>
          {!isMobile && (
            <StandoutImage>
              <img src={CatComputer} alt="Cat Computer Logo" />
            </StandoutImage>
          )}
        </TopSectionInnerContainer>
      </BackgroundFilter>
    </TopSectionContainer>
  );
}

import React from "react";
import styled from "styled-components";
import { BrandLogo } from "../brandLogo";

import { useMediaQuery } from "react-responsive";
import { deviceSize } from "../responsive/responsive";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter } from "@fortawesome/free-brands-svg-icons";

const FooterContainer = styled.div`
  margin-top: 20px;
  width: 100%;
  min-height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2em 3em 0;
  border-top: 0.6px solid rgb(0, 0, 0, 0.3);

  @media screen and (max-width: ${deviceSize.mobile}px) {
    padding: 1em 1.5em;
  }
`;

const TopContainer = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 1em;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  &:not(:last-of-type) {
    margin-right: 3%;
  }
`;

const BottomContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  border-top: 0.6px solid rgb(0, 0, 0, 0.3);
  padding: 0 10px;
`;

const RightBottomContainer = styled.div`
  display: flex;
`;

const LeftBottomContainer = styled.div`
  display: flex;
`;

const Title = styled.h2`
  margin: 0 0 13px;
  color: #000;
  font-weight: 600;
  font-size: 20px;
`;

const FLink = styled.a`
  text-decoration: none;
  color: #6f6f6f;
  font-weight: 500;
  font-size: 15px;
  cursor: pointer;
  &:not(:last-of-type) {
    margin-bottom: 8px;
  }
`;

const PrivacyText = styled.h6`
  color: #a3a3a3;
  font-size: 11px;
  display: flex;
  margin: 5px 0 0 10px;
  align-items: center;
`;

const SocialIcon = styled.div`
  color: #8a8a8a;
  font-size: 20px;
  cursor: pointer;
  transition: background-color, 200ms ease-in-out;
  &:not(:last-of-type) {
    margin-right: 10px;
  }
  &:hover {
    color: #777777;
  }
`;

export function Footer() {
  const isMobile = useMediaQuery({ maxWidth: deviceSize.mobile });
  return (
    <FooterContainer>
      <TopContainer>
        <ContentContainer>
          <Title>Kategorie</Title>
          <FLink>Home</FLink>
          <FLink>Kup na allegro</FLink>
          <FLink>Dowiedz się więcej</FLink>
          <FLink>F.A.Q.</FLink>
        </ContentContainer>
        <ContentContainer>
          <Title>Logowanie</Title>
          <FLink>Will</FLink>
          <FLink>Add</FLink>
          <FLink>Some</FLink>
          <FLink>Later</FLink>
        </ContentContainer>
      </TopContainer>
      <BottomContainer>
        <LeftBottomContainer>
          <BrandLogo
            logoSize={20}
            textSize={15}
            color={"#326295"}
            marginLeft={isMobile}
          />
          <PrivacyText> &#169; All Rights Reserved. 2021</PrivacyText>
        </LeftBottomContainer>
        <RightBottomContainer>
          <SocialIcon>
            <FontAwesomeIcon icon={faFacebook} />
          </SocialIcon>
          <SocialIcon>
            <FontAwesomeIcon icon={faTwitter} />
          </SocialIcon>
        </RightBottomContainer>
      </BottomContainer>
    </FooterContainer>
  );
}

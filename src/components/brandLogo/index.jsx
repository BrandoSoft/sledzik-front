import React from 'react';
import styled from 'styled-components';

import CatPaw from '../../images/catPawLogo.png'


const BrandLogoContainer = styled.div`
display: flex;
align-items: center;
margin-left:  ${({ marginLeft }) => (marginLeft ? marginLeft + "px" : "30px")};
`;

const LogoImage = styled.div`
  width: ${({ size }) => (size ? size + "px" : "2em")};
  height: ${({ size }) => (size ? size + "px" : "2em")};
  img {
    width: 100%;
    height: 100%;
  }
`;

const LogoTitle = styled.h2`
  margin: 0;
  font-size: ${({ size }) => (size ? size + "px" : "20px")};
  color: ${({ color }) => (color ? color : "#fff")};
  font-weight: 900;
  margin-left: 6px;
`;


export function BrandLogo(props) {
    const { logoSize, textSize, marginLeft } = props;

    return (
        <BrandLogoContainer marginLeft={marginLeft}>
            <LogoImage size={logoSize}>
                <img src={CatPaw} alt="Cat Paw Logo" />
            </LogoImage>
            <LogoTitle size={textSize}>
                Śledzik Kota
            </LogoTitle>
        </BrandLogoContainer>
    )
}
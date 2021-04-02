import React from 'react';
import styled from 'styled-components';
import { BrandLogo } from '../brandLogo';
import { Button } from '../button/button';
import { Marginer } from '../marginer';

const NavbarContainer = styled.div`
display: flex;
width: 100%;
height: 60px;
align-items: center;
justify-content: space-between;
`;

const AccessibilityContainer = styled.div`
height: 100%;
display: flex;
align-items: center;
`;

const AnchorLink = styled.a`
font-size: 17;
color: #fff;
cursor: pointer;
text-decoration: none;
outline: none;
transition: all 200ms ease-in-out;

&:hover {
    filter: contrast(0.6);
}
`;

const Separator = styled.div`
min-height:40%;
width: 1px;
background-color: #fff;
`;

export function Navbar(props){
return(
    <NavbarContainer>
        <BrandLogo/>
        <AccessibilityContainer>
        <AnchorLink>Śledzenie Kota</AnchorLink>
        <Marginer direction="horizontal" margin={10}/>
        <Separator/>
        <Marginer direction="horizontal" margin={10}/>
        <Button size={15} marginLeft={10} width={120}>Rejestracja</Button>
        <Marginer direction="horizontal" margin={20}/>
        <AnchorLink>Logowanie</AnchorLink>
        <Marginer direction="horizontal" margin={20}/>
        </AccessibilityContainer>
    </NavbarContainer>
)
}
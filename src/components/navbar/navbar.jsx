import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { BrandLogo } from "../brandLogo";
import { Button } from "../button/button";
import { Marginer } from "../marginer";

const NavbarContainer = styled.div`
  display: flex;
  width: 100%;
  height: 60px;
  align-items: center;
  justify-content: space-between;

  background-color: ${({ useTransparent }) =>
    useTransparent ? "transparent" : "#264653"};
`;

const AccessibilityContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;

const AnchorLink = styled(Link)`
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
  min-height: 40%;
  width: 1px;
  background-color: #fff;
`;

export function Navbar(props) {
  const { useTransparent } = props;

  return (
    <NavbarContainer useTransparent={useTransparent}>
      <BrandLogo />
      <AccessibilityContainer>
        <AnchorLink to="#">Śledzenie Kota</AnchorLink>
        <Marginer direction="horizontal" margin={10} />
        <Separator />
        <Marginer direction="horizontal" margin={10} />
        <Link to="customer/access/signup">
          <Button size={15} marginLeft={10} width={120}>
            Rejestracja
          </Button>
        </Link>
        <Marginer direction="horizontal" margin={20} />
        <AnchorLink to="customer/access/signin">Logowanie</AnchorLink>
        <Marginer direction="horizontal" margin={20} />
      </AccessibilityContainer>
    </NavbarContainer>
  );
}

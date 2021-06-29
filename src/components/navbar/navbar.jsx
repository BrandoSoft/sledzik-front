import React, {useContext} from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { BrandLogo } from "../brandLogo";
import { Button } from "../button/button";
import { Marginer } from "../marginer";

import { useMediaQuery } from "react-responsive";
import { deviceSize } from "../../components/responsive/responsive";
import {AppContext} from "../../AppContext";
import axios from "axios";

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

  const isMobile = useMediaQuery({ maxWidth: deviceSize.mobile });



const {isUserLogged, logedUserName, userLoginHandler} = useContext(AppContext)
console.log('nawbar pokazuje: ' + logedUserName)

const logoutHandler= () =>{
    axios.get("http://localhost:3000/auth/logout").then((res) => {
      console.log(res);
    });
    userLoginHandler(false)
}

  return (

    <NavbarContainer useTransparent={useTransparent}>
      <BrandLogo
        logoSize={isMobile ? 30 : 40}
        textSize={isMobile ? 15 : "2em"}
        marginLeft={isMobile ? 5 : 30}
      />
      {isUserLogged?
       <AccessibilityContainer>
        {!isMobile && <AnchorLink to="/">Witaj {logedUserName}</AnchorLink>}
        <Marginer direction="horizontal" margin={10} />
        {!isMobile && <Separator />}
        <Marginer direction="horizontal" margin={10} />
        <Link to="/usersettings">
          <Button size={15} marginLeft={isMobile ? 1 : 10} width={120}>
            Ustawienia
          </Button>
        </Link>
        <Marginer direction="horizontal" margin={20} />
        <AnchorLink to="/" onClick={(e) => logoutHandler()}>Wyloguj</AnchorLink>
        <Marginer direction="horizontal" margin={20} />
      </AccessibilityContainer>
             :
       <AccessibilityContainer>
        {!isMobile && <AnchorLink to="/">Śledzenie Kota</AnchorLink>}
        <Marginer direction="horizontal" margin={10} />
        {!isMobile && <Separator />}
        <Marginer direction="horizontal" margin={10} />
        <Link to="/customer/access/signup">
          <Button size={15} marginLeft={isMobile ? 1 : 10} width={120}>
            Rejestracja
          </Button>
        </Link>
        <Marginer direction="horizontal" margin={20} />
        <AnchorLink to="/customer/access/signin">Logowanie</AnchorLink>
        <Marginer direction="horizontal" margin={20} />
      </AccessibilityContainer>
      }
    </NavbarContainer>
  );
}

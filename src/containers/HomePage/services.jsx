import Axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";

import { AppContext } from "../../AppContext";

const ServicesContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;


const Title = styled.h1`
  font-weight: 900;
  color: #000;
`;

const WarningText = styled.h3`
  color: rgba(100, 100, 100);
  font-weight: 500;
`;


export function Services(props) {

    const { logedUserName, isUserLogged, coordsHandler, coordsData } = useContext(AppContext);
console.log()

  return (
    <ServicesContainer>
      <Title>Lista śledzonych kotów</Title>
    </ServicesContainer>
  );
}

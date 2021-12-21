import Axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";


import { AppContext } from "../../AppContext";
import axios from "axios";

import CatAvatar0 from '../../../src/images/avatar1.jpg'

const ServicesContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;


const Title = styled.h1`
  font-weight: 900;
  color: #000;
`;


const CatCard = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 300px;
  height: 300px;
  background-color: rgba(0, 0, 0, 0.2);
  justify-content: center;
  align-items: center;
  margin: 5px auto;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  border-radius: 10px;

  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
`

const AvatarImg = styled.img`
  width: 100%;
  display: flex;
`
const WarningText = styled.h3`
  display: flex;
  color: rgba(100, 100, 100);
  font-weight: 900;
  font-size: 2rem;
`;

const StyledLink = styled(Link)`
   margin: 20px;
`


export function Services() {
    const apiUrl = process.env.REACT_APP_API;
    const { logedUserName, isUserLogged } = useContext(AppContext);

    const [responseData, setResponseData] = useState([]);
    useEffect(() => {
        if (isUserLogged) getCats()
    }, [])

    const getCats = async () => {
        const response = await axios.get(`${apiUrl}user/hids/${logedUserName}`)
        setResponseData(response.data)
    }
    let catList = null;

    if (responseData.length > 0) {
        catList = responseData.map((item, index) =>
            <StyledLink to="/usersettings">
            <CatCard key={index}>
                <AvatarImg src={CatAvatar0}/>
                <WarningText>{item.catName}</WarningText>
            </CatCard>
            </StyledLink>
        )
    }


    console.log('resp data', responseData)
    if (!isUserLogged) {
        return (
            <ServicesContainer>
                <Title>Zaloguj się by zobaczyć listę śledzonych kotów.</Title>
            </ServicesContainer>
        );
    } else {
        return (
            <ServicesContainer>{catList}</ServicesContainer>
        )
    }


}

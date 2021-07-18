import React, {useState, useContext} from "react";
import styled from "styled-components";
import { Footer } from "../../components/footer/footer";
import { Navbar } from "../../components/navbar/navbar";
import {
  InnerPageContainer,
  PageContainer,
} from "../../components/PageContainer";
import { deviceSize } from "../../components/responsive/responsive";
import {useMediaQuery} from "react-responsive";
import {FormContainer, Input, SubmitButton} from "../../components/accountBox/common";
import {MapComponent} from '../../components/MapComponent'



import { ListOfUserCats } from './listOfUserCats'


import axios from "axios";
import {AppContext} from "../../AppContext";

// const Title = styled.h1`
// font-weight: 900;
// color: #000;
// `;

const ContentContainer = styled.div`
  width: 100%;
  max-width: ${deviceSize.laptop}px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 1em;
  border: 2px solid black;
`;

const HidAndCatsContainer = styled.div`
  width: 80%;
  display: flex;  
  min-height: 50px;
  border: 2px solid pink;  
`

const FlexRowContainer = styled.div`
flex-direction: row;
width: 100%;
`

export function UserPage() {


  const {logedUserName} = useContext(AppContext)
  const {coordsData} = useContext(AppContext)

  const isMobile = useMediaQuery({ maxWidth: deviceSize.mobile });
  const apiUrl = "http://localhost:3000/";


  const [formVisibility, setFormVisibility] = useState(true)
  const [data, setData] = useState({
    hid: "",
    catName: "",
  });


  const formVisibilityHandler = () =>{
  setFormVisibility(false)

  }

  const onChangeHandler = (e) => {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);

  };

  const addHidAndName = (e) => {
    e.preventDefault();
    setFormVisibility(true)
  console.log(data)
    axios
      .post(`${apiUrl}user/addhid`, {
        hid: data.hid,
        catName: data.catName,
        name: logedUserName,
      })

  };

  return (
    <PageContainer>
        <Navbar/>
    <InnerPageContainer>
      <ContentContainer>
        <FlexRowContainer>
          <ListOfUserCats logedUserName/>
        </FlexRowContainer>
        <HidAndCatsContainer>
          {formVisibility &&
          <SubmitButton size={15} marginLeft={isMobile ? 1 : 10} width={120}
                        onClick={() => formVisibilityHandler(false)}>
            Dodaj Kotka
          </SubmitButton>
          }
          {!formVisibility &&
          <FormContainer>
            <Input
                type="text"
                onChange={(e) => onChangeHandler(e)}
                id="hid"
                value={data.hid}
                placeholder="Podaj HID"
            />
            <Input
                type="text"
                onChange={(e) => onChangeHandler(e)}
                id="catName"
                value={data.catName}
                placeholder="Podaj imie Kotka"
            />
            <SubmitButton size={15} marginLeft={isMobile ? 1 : 10} width={120} onClick={(e) => addHidAndName(e)}>Dodaj
              Kotka</SubmitButton>
            </FormContainer>
          }
        </HidAndCatsContainer>
        </ContentContainer>
      <MapComponent koordynaty={coordsData}/>
    </InnerPageContainer>
    <Footer />
    </PageContainer>
  );
}

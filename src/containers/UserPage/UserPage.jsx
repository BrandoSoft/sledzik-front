import React, {useState} from "react";
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

import { ListOfUserCats } from  '../../components/listOfUserCats/listOfUserCats'


import axios from "axios";

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

    // axios
    //   .post(apiUrl, {
    //     hid: data.hid,
    //     catName: data.catName,
    //   })
    //   .then((res) => {
    //     console.log(res)
        // console.log( 'w then')
        // console.log(res.data)
        // responseFromLogin = res.data;
        // console.log( 'po zapisaniu')
        // console.log(responseFromLogin)


         // if(res.data.error === "Invalid login data!"){
         //     setWrongPassMessage(true)}
         // else if(res.data.ok){
         //     const {ok, userName} = res.data
         //     userLoginHandler(ok);
         //     userNameHandler(userName)
         //
         //     history.push('/usersettings')
         // }

        //  console.log('res data to')
        // console.log(res)
        // console.log('teraz2 ok')
        // console.log(ok)
        // console.log('teraz3 un')
        // console.log(userName)
      // });
  };


// const ListOfUserCats = () => {
//     const [responseData, setResponseData] = useState([]);
//
//     useEffect( async () =>{
//       try {
//         const res = await axios.get(`${apiUrl}user/hids/${logedUserName}`)
//         setResponseData(res.data);
//       }catch(err){
//       console.log(err)}
//       }, []);
//
//       return responseData.map(item => <div>{item.catName}</div>)
//   }



  return (
    <PageContainer>
        <Navbar/>
    <InnerPageContainer>
      <ContentContainer>
        <FlexRowContainer>
          <ListOfUserCats />
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
    </InnerPageContainer>
    <Footer />
    </PageContainer>
  );
}

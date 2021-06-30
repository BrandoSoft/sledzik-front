import React, {useState, useEffect, useContext} from "react";
import styled from "styled-components";
import axios from "axios";
import {AppContext} from "../../AppContext";


const CatContener = styled.div`
display: flex;
height: auto;
width: 30%;
border: 2px solid black;
background-color: deeppink;
`

const CatName = styled.div`
display: flex;
width: 150px;
  background-color: #312;

`
const CatHid = styled.div`
display: flex;
width: 100px;
  background-color: #665456;
`




export function ListOfUserCats () {

    const {logedUserName} = useContext(AppContext)
    const apiUrl = "http://localhost:3000/";

    const [responseData, setResponseData] = useState([]);

    useEffect(() =>{
      async function fetchData() {
          try {
            const res = await axios.get(`${apiUrl}user/hids/${logedUserName}`)
            setResponseData(res.data);
          }catch(err){
              console.log(err)}
      }
      fetchData();
      }, );

      return responseData.map(item => <CatContener key={item.id}>
      <CatName>{item.catName}</CatName>
      <CatHid>{item.hid}</CatHid>
      </CatContener>)
  }



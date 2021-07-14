import React, {useState, useEffect, useContext} from "react";
import styled from "styled-components";
import axios from "axios";
import {AppContext} from "../../AppContext";


const CatContener = styled.div`
display: flex;
height: auto;
width: 30%;
//border: 2px solid black;
//background-color: deeppink;
justify-content: space-between;
`

const CatName = styled.div`
width: 50%;
border: none;
outline: none;
color: #fff;
padding: 10px 1em;
font-weight: 700;
border-radius: 5px;
background-color: #326295;
margin: 5px;

cursor: pointer;
transition: all 200ms ease-in-out;

&:hover{
    background-color: #fff;
    color: #326295;
}

&:focus {
    outline: none;
}

`

const CatHid = styled.div`
width: 30%;
border: none;
outline: none;
color: #fff;
padding: 10px 1em;
font-weight: 700;
border-radius: 5px;
background-color: #326295;
align-items: center;
justify-content: center;
margin: 5px;
`
const DelCat = styled.button`
width: 30%;
border: none;
outline: none;
color: #fff;
padding: 10px 1em;
font-weight: 700;
border-radius: 5px;
background-color: #326295;
align-items: center;
justify-content: center;
margin: 5px;
`

export function ListOfUserCats () {

    const {logedUserName} = useContext(AppContext)
    const apiUrl = "http://localhost:3000/";

    const [responseData, setResponseData] = useState([]);
    const [compUpdate, setCompUpdate] = useState('1');

    const {coordsHandler} = useContext(AppContext)



    useEffect(() =>{
      async function fetchData() {
          try {
            const res = await axios.get(`${apiUrl}user/hids/${logedUserName}`)
            setResponseData(res.data);
          }catch(err){
              console.log(err)}
      }
      fetchData();
      }, [compUpdate]);

    // const getListOfCatAndHids = async () =>{
    //     try {
    //         const res = await axios.get(`${apiUrl}user/hids/${logedUserName}`)
    //            setResponseData(res.data);
    //     }catch(err){
    //                   console.log(err)}
    // }
    // useEffect(()=>{
    //     getListOfCatAndHids()
    // },)


    const deleteCatHandler = (e)=>{

        console.log(e)

        axios.delete(`${apiUrl}user/deletecat/${e}`)


        setCompUpdate('9')
    }

    const loadCatCoords = async (e) =>{
        try{
            const res = await axios.get(`${apiUrl}coords/${e}`)
            console.log('tutaj')
            console.log(res)

           coordsHandler(res.data)
        }catch (err){
            console.log(err)
        }
    }





    return responseData.map(item => <CatContener key={item.id}>
      <CatName onClick={() => loadCatCoords(item.hid)}>{item.catName}</CatName>
      <CatHid>{item.hid}</CatHid>
      <DelCat onClick={()=>deleteCatHandler(item.id)}>Usuń</DelCat>
      </CatContener>)
  }



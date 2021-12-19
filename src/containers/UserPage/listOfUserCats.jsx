import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { AddCatForm } from "./addCatForm";
import axios from "axios";
import { AppContext } from "../../AppContext";

const ListContainer = styled.div`
  width: 50%;
`

const CatContener = styled.div`
  display: flex;
  height: auto;
  width: 100%;
  justify-content: space-between;
`


const CatName = styled.div`
  width: 40%;
  border: none;
  outline: none;
  color: #fff;
  padding: 10px 1em;
  font-weight: 700;
  border-radius: 5px;
  background-color: ${props => props.info ? '#0c1936' : '#1e4b94'};
  margin: 5px;

  ${props => props.info ?
          null
          :
          `cursor: pointer;
           transition: all 200ms ease-in-out;

            &:hover {
                background-color: #fff;
                color: #326295;
            }

            &:focus {
                outline: none;
            } `
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
  background-color: ${props => props.info ? '#0c1936' : '#1e4b94'};
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

export function ListOfUserCats(props) {

    const apiUrl = "http://localhost:3000/";

    const { logedUserName } = useContext(AppContext);

    const { delCat, loadCatCoords, catCoords } = props;
    const [responseData, setResponseData] = useState([]);

    useEffect(() => {
        getListOfCats()
    }, [delCat])

    const getListOfCats = () => {

        axios.get(`${apiUrl}user/hids/${logedUserName}`)
            .then(response => setResponseData(response.data));
    }


    const rerenderHandler = async () => {
        const newlist = await axios.get(`${apiUrl}user/hids/${logedUserName}`);
        setResponseData(newlist.data)
    }
    //@TODO przerobić na list
    const catUl = responseData.map(item =>
        <CatContener key={item.id}>
            <CatName onClick={() => loadCatCoords(item.hid)}>{item.catName}</CatName>
            <CatHid>{item.hid}</CatHid>
            <DelCat onClick={() => delCat(item.id)}>Usuń</DelCat>
        </CatContener>)

    return (
        <ListContainer>
            <CatContener>
                <CatName info>Cat Name</CatName>
                <CatHid info>Cat Hid</CatHid>
                <CatHid info>Action</CatHid>
            </CatContener>
            {catUl}
            <AddCatForm catCoords={catCoords} rerender={rerenderHandler}/>
        </ListContainer>
    )


    // return listOfCats.map(item =>
    //     <CatContener key={item.id}>
    //         <CatName onClick={() => loadCatCoords(item.hid)}>{item.catName}</CatName>
    //         <CatHid>{item.hid}</CatHid>
    //         <DelCat onClick={() => delCat(item.id)}>Usuń</DelCat>
    //     </CatContener>)


}



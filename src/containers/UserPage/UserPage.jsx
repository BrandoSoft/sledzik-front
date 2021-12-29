import React, { useContext, useEffect, useState } from "react";

import { Footer } from "../../components/footer/footer";
import { Navbar } from "../../components/navbar/navbar";
import {
    InnerPageContainer,
    PageContainer,
} from "../../components/PageContainer";
import axios from "axios";
import { AppContext } from "../../AppContext";
import { ListOfUserCats } from "./listOfUserCats";
import MapComponent from "../../components/MapComponent";
import styled from "styled-components";
import Modal from "./Modal";

const Button = styled.button`
  position: absolute;
  left: 1%;
  top: 30%;
  min-width: 100px;
  padding: 16px 30px;
  border-radius: 4px;
  background-color: #326295;
  font-size: 14px;
  cursor: pointer;
`


export function UserPage() {

    const apiUrl = process.env.REACT_APP_API;

    const { logedUserName, isUserLogged, coordsHandler, coordsData } = useContext(AppContext);

    // console.log({ logedUserName, isUserLogged, coordsHandler, coordsData })

    const [responseData, setResponseData] = useState([]);
    const [showModal, setShowModal] = useState((false));

    const openModal = () => {
        setShowModal(prev => !prev)
    }


    const getListOfCats = () => {

        axios.get(`${apiUrl}user/hids/${logedUserName}`)
            .then(response => setResponseData(response.data));
    }

    const loadCatCoords = async (e) => {
        try {

            const res = await axios.get(`${apiUrl}coords/${e}`)
            coordsHandler(res.data)
        } catch (err) {
            console.log(err)
        }
    }

    const deleteCatHandler = (e) => {
        console.log(e)
        axios
            .delete(`${apiUrl}user/deletecat/${e.id}`)
            .then(getListOfCats)
        axios
            .delete(`${apiUrl}coords/clear-cat/${e.hid}`)
            .then(getListOfCats)
    }

    useEffect(() => {
        if (isUserLogged) {
            getListOfCats()
        }
    }, [isUserLogged])

    const postData1 = async () =>{
        await axios.post(`${apiUrl}coords/table`, [
            {
                "hid": "123456",
                "latitude": "52.221166147898785",
                "longitude": "21.050360765491316",
                "date": "4-5-2021 17:35:41"
            },
            {
                "hid": "123456",
                "latitude": "52.216663766268724",
                "longitude": "21.065314089264277",
                "date": "4-5-2021 18:36:42"
            },
            {
                "hid": "123456",
                "latitude": "52.21547556166627",
                "longitude": "21.076541840902674",
                "date": "4-5-2021 19:35:43"
            },
            {
                "hid": "123456",
                "latitude": "52.2110664194342",
                "longitude": "21.08583025362172",
                "date": "4-5-2021 20:35:43"
            },
            {
                "hid": "123456",
                "latitude": "52.20895045973346",
                "longitude": "21.091773681670336",
                "date": "4-5-2021 21:35:43"
            },
            {
                "hid": "123456",
                "latitude": "52.19437907910841",
                "longitude": "21.085336379781182",
                "date": "4-5-2021 20:35:43"
            },
            {
                "hid": "123456",
                "latitude": "52.19595743767977",
                "longitude": "21.052205732725007",
                "date": "4-5-2021 20:35:43"
            },
            {
                "hid": "123456",
                "latitude": "52.200113513812404",
                "longitude": "21.020791699505946",
                "date": "4-5-2021 20:35:43"
            },
            {
                "hid": "123456",
                "latitude": "52.19190620466551",
                "longitude": "20.997617412704997",
                "date": "4-5-2021 20:35:43"
            },
            {
                "hid": "123456",
                "latitude": "52.20968679256773",
                "longitude": "21.009719540256604",
                "date": "4-5-2021 20:35:43"
            },
            {
                "hid": "123456",
                "latitude": "52.20958160290999",
                "longitude": "21.00997703233217",
                "date": "4-5-2021 20:35:43"
            },
            {
                "hid": "123456",
                "latitude": "52.20653099449658",
                "longitude": "20.99221007911811",
                "date": "4-5-2021 20:35:43"
            },
            {
                "hid": "123456",
                "latitude": "52.217417550550934",
                "longitude": "21.006114651198676",
                "date": "4-5-2021 20:35:43"
            },
            {
                "hid": "123456",
                "latitude": "52.21489336934529",
                "longitude": "21.030833890453028",
                "date": "4-5-2021 20:35:43"
            },
            {
                "hid": "123456",
                "latitude": "52.21068608189473",
                "longitude": "21.043107679388342",
                "date": "4-5-2021 20:35:43"
            },
        ])
        await axios.post(`${apiUrl}user/addhid`, {
            "hid": "123456",
            "catName": "Mruczek",
            "name": `${logedUserName}`

        })
        getListOfCats()
    }
    const postData2 = async () =>{
        await axios.post(`${apiUrl}coords/table`, [
            {
                "hid": "1234567",
                "latitude": "52.21836408152108",
                "longitude": "21.039502790330417",
                "date": "4-5-2021 17:35:41"
            },
            {
                "hid": "1234567",
                "latitude": "52.2191528419205",
                "longitude": "21.0264565251684",
                "date": "4-5-2021 18:36:42"
            },
            {
                "hid": "1234567",
                "latitude": "52.21179053342163",
                "longitude": "21.027486493470665",
                "date": "4-5-2021 19:35:43"
            },
            {
                "hid": "1234567",
                "latitude": "52.210002360046616",
                "longitude": "21.038472822028154",
                "date": "4-5-2021 20:35:43"
            },
            {
                "hid": "1234567",
                "latitude": "52.2133156832473",
                "longitude": "21.04757087536482",
                "date": "4-5-2021 21:35:43"
            },
            {
                "hid": "1234567",
                "latitude": "52.215366664247966",
                "longitude": "21.044480970458032",
                "date": "4-5-2021 20:35:43"
            },
            {
                "hid": "1234567",
                "latitude": "52.22451604114902",
                "longitude": "21.031520535987866",
                "date": "4-5-2021 20:35:43"
            }

        ])
        await axios.post(`${apiUrl}user/addhid`, {
            "hid": "1234567",
            "catName": "Ciapek",
            "name": `${logedUserName}`
        })
        getListOfCats()
    }


    const catExample1 = async () => {
        const resp = await axios.get(`${apiUrl}user/hids/${logedUserName}`)
        const cords = await axios.get(`${apiUrl}coords/123456`)

        console.log('resp',resp.data)
        console.log('coords',cords.data)

        if(resp.data.filter(e=> e.hid ==='123456').length > 0){
            console.log(('mamy już taki hid 123456'))
        }else{
            postData1()
        }


    }
    const catExample2 = async () => {
        const resp = await axios.get(`${apiUrl}user/hids/${logedUserName}`)
        const cords = await axios.get(`${apiUrl}coords/1234567`)

        if(resp.data.filter(e=> e.hid ==='1234567').length > 0){
            console.log(('mamy już taki hid 1234567'))
        }else{
            postData2()
        }
    }


    return (
        <PageContainer>
            <Navbar/>
            {isUserLogged &&
            <InnerPageContainer>
                <Button onClick={openModal}>Wypuść kota na spacer.</Button>
                <Modal showModal={showModal} setShowModal={setShowModal} addCat1={catExample1} addCat2={catExample2}/>
                <ListOfUserCats
                    // listOfCats={responseData}
                    delCat={deleteCatHandler}
                    loadCatCoords={loadCatCoords}
                    catCoords={coordsData}
                />
                <MapComponent catCoords={coordsData}/>
            </InnerPageContainer>
            }
            {!isUserLogged &&
            'Dostęp tylko dla zalogowanych'
            }
            <Footer/>
        </PageContainer>
    );
}

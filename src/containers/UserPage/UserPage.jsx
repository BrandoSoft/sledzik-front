import React, {useContext, useEffect, useState} from "react";

import {Footer} from "../../components/footer/footer";
import {Navbar} from "../../components/navbar/navbar";
import {
    InnerPageContainer,
    PageContainer,
} from "../../components/PageContainer";
import axios from "axios";
import {AppContext} from "../../AppContext";
import {ListOfUserCats} from "./listOfUserCats";
import MapComponent from "../../components/MapComponent";
import {AddCatForm} from "./addCatForm";


export function UserPage() {

    const apiUrl = "http://localhost:3000/";

    const {logedUserName, isUserLogged, coordsHandler, coordsData} = useContext(AppContext);

    const [responseData, setResponseData] = useState([]);

    const getListOfCats = () => {
        axios.get(`${apiUrl}user/hids/${logedUserName}`)
            .then(response => setResponseData(response.data));
    }

    useEffect(() => {

        if (isUserLogged) {
            getListOfCats()
        }
    }, [])

    const deleteCatHandler = (e) => {
        console.log(e)
        axios
            .delete(`${apiUrl}user/deletecat/${e}`)
            .then(getListOfCats)
    }
    const loadCatCoords = async (e) => {
        try {
            const res = await axios.get(`${apiUrl}coords/${e}`)
            coordsHandler(res.data)
        } catch (err) {
            console.log(err)
        }
    }
    const odbieranie = e => {
        console.log('odbieramy z komponentu')
        console.log(e)
    }


    return (
        <PageContainer>
            <Navbar/>
            {isUserLogged &&
            <InnerPageContainer>
                <ListOfUserCats listOfCats={responseData} delCat={deleteCatHandler} loadCatCoords={loadCatCoords}/>
                <MapComponent catCoords={coordsData}/>
                <AddCatForm funkcja={odbieranie}/>
            </InnerPageContainer>
            }
            {!isUserLogged &&
            'Dostęp tylko dla zalogowanych'
            }
            <Footer/>
        </PageContainer>
    );
}

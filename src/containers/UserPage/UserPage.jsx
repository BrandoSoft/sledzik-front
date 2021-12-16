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
import { AddCatForm } from "./addCatForm";


export function UserPage() {

    const { logedUserName, isUserLogged, coordsHandler, coordsData } = useContext(AppContext);

    console.log({ logedUserName, isUserLogged, coordsHandler, coordsData })

    const apiUrl = "http://localhost:3000/";

    const [responseData, setResponseData] = useState([]);
    const [renderList, setRenderList] = useState();
    console.log('przed useefect ', responseData);

    const getListOfCats = () => {
        console.log('name zalogowanego', logedUserName)
        axios.get(`${apiUrl}user/hids/${logedUserName}`)
            .then(response => setResponseData(response.data));
    }

    const loadCatCoords = async (e) => {
        try {
            console.log('czym jest e?', e)
            const res = await axios.get(`${apiUrl}coords/${e}`)
            coordsHandler(res.data)
        } catch (err) {
            console.log(err)
        }
    }

    const deleteCatHandler = (e) => {
        console.log(e)
        axios
            .delete(`${apiUrl}user/deletecat/${e}`)
            .then(getListOfCats)
    }

    useEffect(() => {
        if (isUserLogged) {
            getListOfCats()
        }
    }, [isUserLogged])



    return (
        <PageContainer>
            <Navbar/>
            {isUserLogged &&
            <InnerPageContainer>
                <ListOfUserCats listOfCats={responseData} delCat={deleteCatHandler} loadCatCoords={loadCatCoords}/>
                <AddCatForm data={responseData} rerender={getListOfCats}/>
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

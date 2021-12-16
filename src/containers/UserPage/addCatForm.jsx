import React, { useContext, useState } from "react";
import {FormContainer, Input, SubmitButton} from "../../components/accountBox/common";
// import axios from "axios";
import {useMediaQuery} from "react-responsive";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {deviceSize} from "../../components/responsive/responsive";
import axios from "axios";
import { AppContext } from "../../AppContext";


export function AddCatForm(props) {

    const apiUrl = "http://localhost:3000/";
    const {logedUserName} = useContext(AppContext);
    console.log(logedUserName)

    const isMobile = useMediaQuery({maxWidth: deviceSize.mobile});
    const [data, setData] = useState({
        hid: "",
        catName: "",
    });

    const onChangeHandler = (e) => {
        const newData = {...data};
        newData[e.target.id] = e.target.value;
        setData(newData);

    };

    console.log('data z propsu',props.data)



    const addCatToDb = async (e) =>{
        e.preventDefault()

        if (Number(data.hid) && data.catName.length >0) {
            try {

                if (props.data.some( i => i.hid.includes(data.hid))) {
                    alert(`Kot o Hardware ID ( ${data.hid} ) już istnieje`);
                } else {
                    axios
                        .post(`${apiUrl}user/addhid`, {
                            hid: data.hid,
                            catName: data.catName,
                            name: logedUserName,
                        })
                        .then(() => console.log('dodano pomyslnie'))
                }
            } catch (err) {
                throw new Error(err)
            }
        } else {
            alert(`Hardware ID musi być Liczbą, a kot Musi mieć imię!`)
        }

        setData({
            hid: "",
            catName: "",
        })
        props.rerender()
    }


    return (
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
            <SubmitButton size={15} marginLeft={isMobile ? 1 : 10} width={120}
                          onClick={addCatToDb}
            >
                Dodaj Kotka
            </SubmitButton>
        </FormContainer>
    )
}
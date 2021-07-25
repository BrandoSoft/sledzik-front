import React, {useState} from "react";
import {FormContainer, Input, SubmitButton} from "../../components/accountBox/common";
// import axios from "axios";
import {useMediaQuery} from "react-responsive";
import {deviceSize} from "../../components/responsive/responsive";


export function AddCatForm(props) {
    const isMobile = useMediaQuery({maxWidth: deviceSize.mobile});
    // const apiUrl = "http://localhost:3000/";
    const [data, setData] = useState({
        hid: "",
        catName: "",
    });

    const onChangeHandler = (e) => {
        const newData = {...data};
        newData[e.target.id] = e.target.value;
        setData(newData);
        console.log('handler w catform')
        console.log(newData)
    };

    // const addHidAndName = (e) => {
    //
    //     // props.formHandler()
    //     console.log(data)
    //     axios
    //         .post(`${apiUrl}user/addhid`, {
    //             hid: data.hid,
    //             catName: data.catName,
    //             name: props.logedUserName,
    //         })
    // };

    const funkcjajakas = e => {
        e.preventDefault();
        props.funkcja(data)
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
            onClick={(e)=> funkcjajakas(e)}
            >
                Dodaj Kotka
            </SubmitButton>
            {/*<SubmitButton size={15} marginLeft={isMobile ? 1 : 10} width={120} onClick={(e) => addHidAndName(e)}>Dodaj*/}
            {/*    Kotka</SubmitButton>*/}
        </FormContainer>
    )
}
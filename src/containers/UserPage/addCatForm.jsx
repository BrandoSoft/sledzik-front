import React, {useState} from "react";
import {FormContainer, Input, SubmitButton} from "../../components/accountBox/common";
// import axios from "axios";
import {useMediaQuery} from "react-responsive";
import {deviceSize} from "../../components/responsive/responsive";


export function AddCatForm(props) {
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

    const transferUpCatHidAndName = e => {
        e.preventDefault();
        props.passCatInfo(data);

        setData({
            hid: "",
            catName: "",
        })

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
            onClick={(e)=> transferUpCatHidAndName(e)}
            >
                Dodaj Kotka
            </SubmitButton>
            {/*<SubmitButton size={15} marginLeft={isMobile ? 1 : 10} width={120} onClick={(e) => addHidAndName(e)}>Dodaj*/}
            {/*    Kotka</SubmitButton>*/}
        </FormContainer>
    )
}
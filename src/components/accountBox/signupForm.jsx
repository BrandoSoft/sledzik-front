import React, { useContext, useState } from "react";
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton,
} from "./common";
import { Marginer } from "../marginer";
import { AccountContext } from "./accountContext";
import axios from "axios";




export function SignupForm() {
  const { switchToSignin } = useContext(AccountContext);


    const apiUrl = process.env.REACT_APP_API_LOCAL;
  const [data, setData] = useState({
    name: "",
    email: "",
    pwd: "",
  });


  function registerHandler(e) {
    e.preventDefault();

    axios
      .post(apiUrl, {
        name: data.name,
        email: data.email,
        pwd: data.pwd,
      })
      .then(() => {
        console.log('needd to validate and work on this a bit more');
        switchToSignin()
      });

  }

  function onChangeHandler(e) {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);

  }

  return (
    <BoxContainer>
      <FormContainer>
        <Input
          onChange={(e) => onChangeHandler(e)}
          id="name"
          value={data.name}
          type="text"
          placeholder="Imię"
        />
        <Input
          onChange={(e) => onChangeHandler(e)}
          id="email"
          value={data.email}
          placeholder="Email"
          type="email"
        />
        <Input
          onChange={(e) => onChangeHandler(e)}
          id="pwd"
          value={data.pwd}
          type="password"
          placeholder="Hasło"
        />
        <Input type="password" placeholder="Potwierdz HAsło" />
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <SubmitButton type="submit" onClick={(e) => registerHandler(e)}>
        Zarejestruj
      </SubmitButton>
      <Marginer direction="vertical" margin="1em" />
      <MutedLink href="#">
        Posiadasz już konto?
        <BoldLink href="#" onClick={switchToSignin}>
          Zaloguj
        </BoldLink>
      </MutedLink>
    </BoxContainer>
  );
}

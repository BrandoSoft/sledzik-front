import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
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
import {AppContext} from "../../AppContext";

export function LoginForm(props) {

  let history = useHistory()
  const { switchToSignup } = useContext(AccountContext);

  const apiUrl = "http://localhost:3000/auth/login";

  const [data, setData] = useState({
    email: "",
    pwd: "",
  });

  const onChangeHandler = (e) => {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
  };

  const {userLoginHandler,userNameHandler,} = useContext(AppContext)
  const [wrongPassMessage, setWrongPassMessage] = useState(false)

  const loginHandler = (e) => {
    e.preventDefault();


    axios
      .post(apiUrl, {
        email: data.email,
        pwd: data.pwd,
      })
      .then((res) => {
        if(res.data){
        setData({
        email: '',
        pwd:''})



         if(res.data.error === "Invalid login data!"){
             setWrongPassMessage(true)}
         else if(res.data.ok){
             const {ok, userName} = res.data
             userLoginHandler(ok);
             userNameHandler(userName)

             console.log(userName)

             history.push('/usersettings')
         }



       }
      });
  };



  return (
    <BoxContainer>
    {!wrongPassMessage? '' : 'Email lub hasło nieprawidłowe. Spróbuj jeszcze raz'}
      <Marginer direction="horizonstal" margin="1.6em" />
      <FormContainer>
        <Input
          type="email"
          onChange={(e) => onChangeHandler(e)}
          id="email"
          value={data.email}
          placeholder="Email"
        />
        <Input
          type="password"
          placeholder="Password"
          onChange={(e) => onChangeHandler(e)}
          id="pwd"
          value={data.pwd}
        />
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <MutedLink href="#">Forget your password?</MutedLink>
      <Marginer direction="vertical" margin="1.6em" />
      <SubmitButton type="submit" onClick={(e) => loginHandler(e)}>
        Zaloguj
      </SubmitButton>
      {/*<SubmitButton type="submit" onClick={(e) => logoutHandler(e)}>*/}
      {/*  Wyloguj*/}
      {/*</SubmitButton>*/}
      <Marginer direction="vertical" margin="1em" />
      <MutedLink href="#">
        Nie posiadasz konta?{" "}
        <BoldLink href="#" onClick={switchToSignup}>
          Zarejestruj
        </BoldLink>
      </MutedLink>
    </BoxContainer>
  );
}

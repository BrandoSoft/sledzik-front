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

export function SignupForm(props) {
  const { switchToSignin } = useContext(AccountContext);

  const apiUrl = "http://localhost:3000/user/register";
  const [data, setData] = useState({
    name: "",
    email: "",
    pwd: "",
  });

  function loginHandler(e) {
    e.preventDefault();

    axios
      .post(apiUrl, {
        name: data.name,
        email: data.email,
        pwd: data.pwd,
      })
      .then((res) => {
        console.log(res);
      });

    // axios
    //   .post("localhost:3000/user/register", {
    //     name: data.name,
    //     email: data.email,
    //     pwd: data.pwd,
    //   })

    //   .catch(function (error) {
    //     console.log(error);
    //   });

    // axios.get("http://localhost:3000/user/message");
  }

  function onChangeHandler(e) {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
    console.log(newData);
  }

  return (
    <BoxContainer>
      <FormContainer>
        <Input
          onChange={(e) => onChangeHandler(e)}
          id="name"
          value={data.name}
          type="text"
          placeholder="Name"
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
          type="text"
          placeholder="Password"
        />
        <Input type="password" placeholder="Confirm Password" />
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <SubmitButton type="submit" onClick={(e) => loginHandler(e)}>
        Signup
      </SubmitButton>
      <Marginer direction="vertical" margin="1em" />
      <MutedLink href="#">
        Already have an account?
        <BoldLink href="#" onClick={switchToSignin}>
          Signin
        </BoldLink>
      </MutedLink>
    </BoxContainer>
  );
}

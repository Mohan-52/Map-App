import React, { useState } from "react";
import { useNavigate, Navigate, Link } from "react-router-dom";
import Cookies from "js-cookie";
import {
  LoginContainer,
  Form,
  Label,
  Input,
  CheckboxLabel,
  ErrorMessage,
  SignupText,
  Button,
} from "./styledComponents";

function Login() {
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [showpwd, setShowpwd] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);

  const navigate = useNavigate();
  const successfulSubmit = (jwtToken) => {
    Cookies.set("jwt_token", jwtToken, { expires: 30 });
    navigate("/");
  };

  const submitUserDetails = async (event) => {
    event.preventDefault();

    setIdentifier("");
    setPassword("");
    setErrorMsg(null);

    const userDetails = {
      identifier,
      password,
    };

    const apiurl = "https://syncthreadsassignment.onrender.com/api/login";
    const options = {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(userDetails),
    };

    try {
      const response = await fetch(apiurl, options);
      const data = await response.json();
      if (response.ok) {
        successfulSubmit(data.jwtToken);
      } else {
        const { message } = data;
        setErrorMsg(message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const jwtToken = Cookies.get("jwt_token");

  if (jwtToken) {
    return <Navigate to="/" />;
  }

  return (
    <LoginContainer>
      <Form onSubmit={submitUserDetails}>
        <Label htmlFor="identi">Username or Email</Label>
        <Input
          type="text"
          id="identi"
          value={identifier}
          onChange={(e) => setIdentifier(e.target.value)}
          required
        />
        <Label htmlFor="password">PASSWORD</Label>
        <Input
          type={showpwd ? "text" : "password"}
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <CheckboxLabel>
          <Input
            type="checkbox"
            checked={showpwd}
            onChange={() => setShowpwd((prev) => !prev)}
          />
          Show Password
        </CheckboxLabel>
        <Button type="submit">Submit</Button>
        {errorMsg && <ErrorMessage>{errorMsg}</ErrorMessage>}
      </Form>
      <SignupText>
        Not Registered? <Link to="/signup">Signup</Link>
      </SignupText>
    </LoginContainer>
  );
}

export default Login;

import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  SignupContainer,
  Form,
  Label,
  Input,
  Button,
  ErrorMessage,
  SuccessMessage,
  Already,
} from "./styledComponents";

function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState(null);
  const [successMsg, setSuccessMsg] = useState(null);

  const navigate = useNavigate();

  const validateUsername = (name) => {
    return /^[a-zA-Z0-9_]{3,15}$/.test(name);
  };

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validatePassword = (password) => {
    return password.length >= 6;
  };

  const submitSignupDetails = async (event) => {
    event.preventDefault();
    setErrorMsg(null);
    setSuccessMsg(null);

    if (!validateUsername(username)) {
      setErrorMsg(
        "Username should be 3-15 characters (letters, numbers, underscores)."
      );
      return;
    }
    if (!validateEmail(email)) {
      setErrorMsg("Enter a valid email.");
      return;
    }
    if (!validatePassword(password)) {
      setErrorMsg("Password should be at least 6 characters.");
      return;
    }

    const userDetails = { username, email, password };
    const apiurl = "https://syncthreadsassignment.onrender.com/api/signup";

    const options = {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(userDetails),
    };

    try {
      const response = await fetch(apiurl, options);
      const data = await response.json();

      if (response.ok) {
        setSuccessMsg("Account created successfully! Redirecting to login...");
        setTimeout(() => navigate("/login"), 2000);
      } else {
        setErrorMsg(data.message);
      }
    } catch (error) {
      setErrorMsg("Something went wrong. Please try again.");
    }
  };

  return (
    <SignupContainer>
      <Form onSubmit={submitSignupDetails}>
        <Label htmlFor="username">Username</Label>
        <Input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        <Label htmlFor="email">Email</Label>
        <Input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <Label htmlFor="password">Password</Label>
        <Input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <Button type="submit">Sign Up</Button>

        {errorMsg && <ErrorMessage>{errorMsg}</ErrorMessage>}
        {successMsg && <SuccessMessage>{successMsg}</SuccessMessage>}
      </Form>
      <Already>
        Already have an account? <Link to="/login">Login</Link>
      </Already>
    </SignupContainer>
  );
}

export default Signup;

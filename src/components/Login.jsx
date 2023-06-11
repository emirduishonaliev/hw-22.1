import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { login } from "../store/authSlice";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [FormIsValid, setFormIsValid] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const emailChangeHandler = (e) => {
    setEmail(e.target.value);
    setFormIsValid(e.target.value.includes("@") && password.trim().length > 6);
  };

  const passwordChangeHandler = (e) => {
    setPassword(e.target.value);
    setFormIsValid(e.target.value.trim().length > 6 && email.includes("@"));
  };

  const loginClickHandler = (e) => {
    e.preventDefault();
    if (email.includes("@") && password.length > 6) {
      dispatch(login({ email: email, password: password }));
    }
    navigate("/todo");
  };

  return (
    <Container>
      <form>
        <AuthForm>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={emailChangeHandler}
          />
        </AuthForm>
        <AuthForm>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={passwordChangeHandler}
          />
        </AuthForm>
        <StyledButton
          disabled={!FormIsValid}
          onClick={loginClickHandler}
          type="submit"
        >
          Login
        </StyledButton>
      </form>
    </Container>
  );
};

const Container = styled.form`
  display: flex;
  justify-content: center;
  margin: 6rem auto;
  padding: 25px;
  border: 1px solid;
  width: 30%;
  height: 150px;
  background-color: #fff;
`;

const AuthForm = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
  input {
    padding: 5px;
    width: 200px;
    border: 1px solid gray;
    border-radius: 2px;
    &:hover {
      background-color: aliceblue;
    }
  }
`;

const StyledButton = styled.button`
  width: 90px;
  padding: 7px 10px;
  border: none;
  border-radius: 5px;
  background-color: green;
  color: white;
  :disabled {
    background-color: gray;
    color: white;
  }
`;

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { todoSlice } from "../store/todoSlice";
import { logOut } from "../store/authSlice";
import { TodoList } from "./TodoList";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export const TodoForm = () => {
  const [inputValue, setInputValue] = useState("");

  const { todo } = useSelector((state) => state);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const inputChangeHandler = (e) => {
    setInputValue(e.target.value);
  };

  const clickHandler = () => {
    const data = {
      title: inputValue,
      id: Date.now(),
      completed: false,
    };

    dispatch(todoSlice.actions.add(data));
    setInputValue("");
  };

  const deleteAllClickHandler = () => {
    dispatch(todoSlice.actions.deleteAll());
  };

  const logOutHandler = () => {
    dispatch(logOut());
    dispatch(todoSlice.actions.deleteAll());
    navigate("/login");
  };

  return (
    <Container>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <LogoutButton onClick={logOutHandler}>logout</LogoutButton>
      </div>
      <InputForm>
        <input
          type="text"
          onChange={inputChangeHandler}
          value={inputValue}
          placeholder="Add new todo"
        />
        <AddTodoButton onClick={clickHandler} disabled={!inputValue}>
          ADD
        </AddTodoButton>
        <DeleteAll onClick={deleteAllClickHandler}>Delete All</DeleteAll>
      </InputForm>
      <ul>
        {todo.map((el) => (
          <TodoList key={el.id} todo={el} />
        ))}
      </ul>
    </Container>
  );
};

const Container = styled.div``;

const InputForm = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 10px;
  padding: 30px;
  background-color: aliceblue;
  width: 900px;
  margin: 0 auto;

  input {
    margin: 10px;
    width: 230px;
    height: 20px;
    border: 1px solid gray;
    border-radius: 5px;
    padding: 5px;
  }
`;

const AddTodoButton = styled.button`
  padding: 7px;
  width: 75px;
  border-radius: 7px;
  color: black;
  font-weight: bold;
  background-color: blue;
  color: #fff;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: #4444a3;
  }

  :disabled {
    background-color: gray;
  }
`;

const DeleteAll = styled.button`
  padding: 7px;
  width: 75px;
  border-radius: 7px;
  background-color: red;
  border: none;
  color: #fff;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    background-color: #671212;
  }
`;

const LogoutButton = styled.button`
  padding: 10px;
  width: 100px;
  border-radius: 5px;
  border: none;
  background-color: rgb(0, 128, 0);
  color: #fff;
  margin: 10px;
`;

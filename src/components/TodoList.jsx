import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { todoSlice } from "../store/todoSlice";

export const TodoList = ({ todo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState("");

  const dispatch = useDispatch();

  const changeEditValue = (e) => {
    setEditValue(e.target.value);
  };

  const deleteClickHandler = () => {
    dispatch(todoSlice.actions.delete(todo.id));
  };

  const saveClickHandler = () => {
    dispatch(todoSlice.actions.edit({ id: todo.id, title: editValue }));
    setIsEditing(false);
  };

  const editHandler = () => {
    setIsEditing(true);
    setEditValue(todo.title);
  };

  const completedClickHandler = () => {
    dispatch(todoSlice.actions.completed(todo.id));
  };

  return (
    <ListItem>
      {isEditing ? (
        <>
          <EditInput type="text" onChange={changeEditValue} value={editValue} />
          <SaveButton onClick={saveClickHandler}>Save</SaveButton>
        </>
      ) : (
        <>
          <Title done={todo.completed}>{todo.title}</Title>
          <ButtonBlock>
            <button className="delete-btn" onClick={deleteClickHandler}>
              Delete
            </button>
            <button className="edit-btn" onClick={editHandler}>
              Edit
            </button>

            <button className="completed-btn" onClick={completedClickHandler}>
              Completed
            </button>
          </ButtonBlock>
        </>
      )}
    </ListItem>
  );
};

const EditInput = styled.input`
  width: 200px;
  padding: 5px;
  border: 1px solid gray;
  border-radius: 5px;
`;

const SaveButton = styled.button`
  width: 85px;
  padding: 6px;
  background-color: green;
  border: none;
  border-radius: 5px;
  color: #fff;
  cursor: pointer;
  font-weight: bold;
`;

const ListItem = styled.li`
  width: 700px;
  padding: 40px 30px;
  border: 1px solid black;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  margin-top: 17px;
  background-color: #7d8fa0;
`;

const ButtonBlock = styled.div`
  display: flex;
  gap: 20px;
  button {
    padding: 7px 11px;
    border: none;
    border-radius: 5px;
    font-weight: bold;
    cursor: pointer;
  }

  .delete-btn {
    background-color: red;
    color: #fff;
  }

  .edit-btn {
    background-color: blue;
    color: #fff;
  }

  .completed-btn {
    background-color: green;
    color: #fff;
  }
`;

const Title = styled.span`
  text-decoration: ${(props) => (props.done ? "line-through" : "")};
  color: white;
  font-weight: bold;
`;

import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todo",
  initialState: [],
  reducers: {
    add(state, action) {
      state.push(action.payload);
    },
    delete(state, action) {
      return state.filter((el) => el.id !== action.payload);
    },
    deleteAll() {
      return [];
    },
    edit(state, action) {
      const todo = state.find((el) => el.id === action.payload.id);
      todo.title = action.payload.title;
    },
    completed(state, action) {
      const todo = state.find((el) => el.id === action.payload);
      todo.completed = !todo.completed;
    },
  },
});

import { combineReducers, createStore } from "redux";
import { todoSlice } from "./todoSlice";
import { authSlice } from "./authSlice";

const rootReducer = combineReducers({
  [todoSlice.name]: todoSlice.reducer,
  [authSlice.name]: authSlice.reducer,
});

export const store = createStore(rootReducer);

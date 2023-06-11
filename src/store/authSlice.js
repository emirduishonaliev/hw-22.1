import { createSlice } from "@reduxjs/toolkit";

export const actionTypesAuth = {
  LOGIN: "LOGIN",
  LOGOUT: "LOGOUT",
};

const initialState = {
  email: "",
  password: "",
  isAuthorized: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, action) {
      state.email = action.payload.email;
      state.password = action.payload.password;
      state.isAuthorized = true;
    },
    logOut(state) {
      state.isAuthorized = false;
    },
  },
});
export const { login, logOut } = authSlice.actions
export default authSlice.reducer;


import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: "",
  password: "",
  isLoggedIn: false,
  error: { status: false, message: "Enter a valid username or password" },
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setFields: (state, action) => {
      const { name, value } = action.payload;
      state[name] = value;
    },
    submitForm: (state) => {
      if (state.username !== "" && state.password !== "") {
        state.error.status = false;
        console.log("pushed to backend");
      } else {
        state.error.status = true;
      }
    },
    cancelForm: () => {
      return initialState;
    },
    loginSuccess: (state) => {
      state.isLoggedIn = true;
    },
    logout: () => {
      return initialState;
    },
  },
});

export const { setFields, loginSuccess, logout, submitForm, cancelForm } =
  authSlice.actions;
export default authSlice.reducer;

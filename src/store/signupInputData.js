import { createSlice, configureStore } from "@reduxjs/toolkit";

const signupDataSlice = createSlice({
  name: "signup data",
  initialState: {
    email: "",
    password: "",
    confirmPassword: "",
  },

  reducers: {
    addSignupData(state, action) {
      state.email = action.payload.email;
      state.password = action.payload.password;
      state.confirmPassword = action.payload.confirmPassword;
    },
  },
});

const store = configureStore({
  reducer: signupDataSlice.reducer,
});
// configureStore created store and as createStore it needs to know the reducer which will be responsible for changing it, so we pass this reducer with a special property of reducer

export const signupActions = signupDataSlice.actions;
// signupActions contains all reducers that are in signupDataSlice slice

export default store;

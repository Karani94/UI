import { configureStore } from "@reduxjs/toolkit";
import userReducer from '../slice/userSlice';
import authReducer from "../redux/reducer/auth";

export const store = configureStore({
  reducer: {
    user: userReducer,
    auth: authReducer,
  }
});
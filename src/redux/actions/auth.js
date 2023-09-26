import axios from "axios";
import { toast } from "react-toastify";

export const registerAction = (authData) => async (dispatch) => {
  try {
    const { data } = await axios.post(
      "http://119.235.112.154:3003/api/v1/users/register", // http://localhost:5000/register
      authData,
      {
        headers: {
          "accept": "application/json",
          "Content-Type": "application/json",
        },
        data: {
          username: "chariyev",
          email: "agamyrat.chariyev@gmail.com",
          password: "F42daA",
        },
      }
    );
    dispatch({ type: "REGISTER", payload: data });
    window.location = "/";
  } catch (error) {
    toast("bu ulanyjy bar", {
      position: "top-right",
      autoClose: 5000,
    });
  }
};

export const loginAction = (authData) => async (dispatch) => {
  try {
    const { data } = await axios.post(
      "http://119.235.112.154:3003/api/v1/users/login", // http://localhost:5000/login
      authData,
      {
        headers: {
          "accept": "application/json",
          "Content-Type": "application/json",
        },
        data: {
          username: "chariyev",
          password: "F42daA",
        },
      }
    );
    dispatch({ type: "LOGIN", payload: data });
    window.location = "/";
  } catch (error) {
    toast("parolaniz yanlys", {
      position: "top-right",
      autoClose: 5000,
    });
  }
};

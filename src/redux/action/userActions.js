import axios from "axios";
import { message } from "antd";

export const userLogin = (reqObj) => {
  return async (dispatch) => {
    dispatch({ type: "LOADING", payload: true });
    try {
      const response = await axios.post(`/api/user/login`, reqObj);
      localStorage.setItem("user", JSON.stringify(response.data));
      dispatch({ type: "LOADING", payload: false });
      message.success("Login successful");
      setTimeout(() => {
        window.location.href = "/";
      }, 500);
      
    } catch (error) {
      console.log(error);
      dispatch({ type: "LOADING", payload: false });
      message.error("Login failed");
    }
  };
};

export const userRegister = (reqObj) => {
  return async (dispatch) => {
    dispatch({ type: "LOADING", payload: true });
    try {
      const response = await axios.post(`/api/user/register`, reqObj);
      message.success("Registration successful");
      setTimeout(() => {
        window.location.href = "/login";
      }, 500);
    

      dispatch({ type: "LOADING", payload: false });
    } catch (error) {
      console.log(error);
      message.error("Registration failed");
      dispatch({ type: "LOADING", payload: false });
    }
  };
};

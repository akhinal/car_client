

import { message } from "antd";
import axios from "axios";

export const bookCar = (reqObj) => async (dispatch) => {
  dispatch({ type: "LOADING", payload: true });
  try {
    const response = await axios.post(`/api/bookings/bookcar`, reqObj);

    dispatch({ type: "LOADING", payload: false });
    console.log(reqObj);
    message.success("Booked successfully");
  } catch (error) {
    console.log(error);
    dispatch({ type: "LOADING", payload: false });
    message.error("Booking failed");
  }
};

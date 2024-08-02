import { authActions } from "../slices/authSlice";
import request from "../../utils/request";
import { toast } from "react-toastify";

// Login User
export function loginUser(user) {
  return async (dispatch) => {
    try {
      const { data } = await request.post("/api/auth/login", user);

      dispatch(authActions.login(data));
      localStorage.setItem("userInfo", JSON.stringify(data));
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
}

// Logout User
export function logoutUser() {
  return (dispatch) => {
    dispatch(authActions.logout());
    localStorage.removeItem("userInfo");
  };
}

// Register User
export function registerUser(user) {
  return async (dispatch) => {
    try {
      console.log("Register payload:", user); // Log payload
      const { data } = await request.post("/api/auth/register", user);
      dispatch(authActions.register(data.message));
    } catch (error) {
      console.error("Error response:", error.response); // Log full error response
      toast.error(
        error.response ? error.response.data.message : "An error occurred"
      );
    }
  };
}

import { GET_ERRORS, SET_USER_DATA } from "./types";
import axios from "axios";


// Action for logging user in
export const loginUser = (userData,userType) => (dispath) => {
    if (userType == "admin"){
        axios
          .post("http://localhost:5000/adminlogin", {
            Email: userData.email,
            Password: userData.password,
          })
          .then((res) => {})
          .catch((err) => {

          });
    }
    if (userData.type == "student") {
        axios
          .post("http://localhost:5000/studentlogin", {
            Email: userData.email,
            Password: userData.password,
          })
          .then((res) => {})
          .catch((err) => {

          });

    }
    if (userData.type == "teacher") {

        axios
          .post("http://localhost:5000/teacherlogin", {
            Email: userData.email,
            Password: userData.password,
          })
          .then((res) => {})
          .catch((err) => {});

    }
}
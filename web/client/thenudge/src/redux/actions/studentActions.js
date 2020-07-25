import { GET_STUDENTS_DATA } from "./types";
import axios from "axios";

// Action for getting list of all students
export const getStudents = () => (dispatch) => {
 
    axios.get('http://localhost:5000/getStudentDetails')
    .then(res => {console.log(res.data.data);dispatch({
        type:GET_STUDENTS_DATA,
        payload: res.data.data
    })})

};

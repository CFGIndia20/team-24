import { GET_STUDENTS_DATA,SET_STUDENTS_LOADING } from "./types";
import axios from "axios";

// Action for getting list of all students
export const getStudents = () => (dispatch) => {

    dispatch(setStudentLoading());
 
    axios.get('http://localhost:5000/getStudentDetails')
    .then(res => {dispatch({
        type:GET_STUDENTS_DATA,
        payload: res.data.data
    })})

};

// To set the loading status of students
export const setStudentLoading = () => ({
    type: SET_STUDENTS_LOADING
})

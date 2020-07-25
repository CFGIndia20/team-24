import axios from "axios";

export const addJob = (userData) => (dispatch) => {

    axios
        .post("http://localhost:5000/addjob", userData)
        .then((res) => {
            dispatch({
                type: "JOB_ADD",
            });
        })
        .catch((err) => {
            console.log(err);
        });

};

export const getJobDetails = () => (dispatch) => {

    axios
        .get("http://localhost:5000/getJobDetails")
        .then((res) => {
            dispatch({
                type: "JOB_DETAILS",
                payload: res
            });
        })
        .catch((err) => {
            console.log(err);
        });

};

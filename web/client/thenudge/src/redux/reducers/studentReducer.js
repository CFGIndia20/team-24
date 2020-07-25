import { GET_STUDENTS_DATA } from "../actions/types";

const initialState = {};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_STUDENTS_DATA:
      return {
        ...state,
        students: action.payload
      };
    case "ADD_JOB":
      return {
        ...state
      }
    case "JOB_DETAILS":
      return {
        ...state,
        jobs: action.payload
      }
    default:
      return state;
  }
}

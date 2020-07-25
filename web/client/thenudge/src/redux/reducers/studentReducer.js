import { GET_STUDENTS_DATA } from "../actions/types";

const initialState = {};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_STUDENTS_DATA:
      return {
        ...state,
        students: action.payload
      };
    default:
      return state;
  }
}

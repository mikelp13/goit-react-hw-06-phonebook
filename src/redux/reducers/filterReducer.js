import { SET_FILTER } from "../PhonebookConstants";

const filterReducer = (state = "", action) => {
  switch (action.type) {
    case SET_FILTER:
      return action.payload.value ;

    default:
      return state;
  }
};
export default filterReducer;
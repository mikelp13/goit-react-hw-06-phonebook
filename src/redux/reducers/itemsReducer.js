import { ADD_CONTACT, DELETE_CONTACT } from "../PhonebookConstants";


const itemsReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_CONTACT:
      return [...state, action.payload.contact];

    case DELETE_CONTACT:
      return [...state.filter((item) => item.id !== action.payload.id)];

    default:
      return state;
  }
};
export default itemsReducer;

import { combineReducers } from "redux";
import itemsReducer from "./itemsReducer";
import filterReducer from "./filterReducer";

// ============ combineReducers ===================================

const phonebookReducer = combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});

export default phonebookReducer;

// // =========== phoneReducer =======================================
// import { ADD_CONTACT, DELETE_CONTACT, SET_FILTER } from "../PhonebookConstants";

// const initialState = {
//   contacts: {
//     items: [],
//     filter: "",
//   },
// };

// const phonebookReducer = (state = { ...initialState }, action) => {
//   switch (action.type) {
//     case ADD_CONTACT:
//       return {
//         ...state,
//         contacts: {
//           ...state.contacts,
//           items: [...state.contacts.items, action.payload.contact],
//         },
//       };

//     case DELETE_CONTACT:
//       return {
//         ...state,
//         contacts: {
//           ...state.contacts,
//           items: [
//             ...state.contacts.items.filter(
//               (item) => item.id !== action.payload.id
//             ),
//           ],
//           filter: "",
//         },
//       };

//     case SET_FILTER:
//       return {
//         ...state,
//         contacts: { ...state.contacts, filter: action.payload.value },
//       };
//     default:
//       return state;
//   }
// };

// export default phonebookReducer

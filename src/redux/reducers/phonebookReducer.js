import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import {
  addContact,
  deleteContact,
  setFilter,
} from "../actions/phonebookActions";

// ========== redux toolkit ============================

const items = createReducer([], {
  [addContact]: (state, action) => [...state, action.payload.contact],
  [deleteContact]: (state, action) => [
    ...state.filter((item) => item.id !== action.payload),
  ],
});

const filter = createReducer("", {
  [setFilter]: (state, action) => action.payload,
});

const phonebookReducer = combineReducers({
  items,
  filter,
});

export default phonebookReducer;

// ============ combineReducers ===================================

// import { ADD_CONTACT, DELETE_CONTACT } from "../PhonebookConstants";

// const itemsReducer = (state = [], action) => {
//   switch (action.type) {
//     case ADD_CONTACT:
//       return [...state, action.payload.contact];

//     case DELETE_CONTACT:
//       return [...state.filter((item) => item.id !== action.payload.id)];

//     default:
//       return state;
//   }
// };

// const filterReducer = (state = "", action) => {
//   switch (action.type) {
//     case SET_FILTER:
//       return action.payload.value ;

//     default:
//       return state;
//   }
// };

// const phonebookReducer = combineReducers({
//   items: itemsReducer,
//   filter: filterReducer,
// });

// export default phonebookReducer;

// // =========== phonebookReducer pure redux =======================================

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

import { ADD_CONTACT, DELETE_CONTACT, SET_FILTER } from "../PhonebookConstants";

const initialState = {
  contacts: {
    items: [],
    filter: "",
  },
};

const phonebookReducer = (state = { ...initialState }, action) => {
  switch (action.type) {
    case ADD_CONTACT:
      return {
        ...state,
        contacts: {
          ...state.contacts,
          items: [...state.contacts.items, action.payload.contact],
        },
      };

    case DELETE_CONTACT:
      return {
        ...state,
        contacts: {
          ...state.contacts,
          items: [
            ...state.contacts.items.filter(
              (item) => item.id !== action.payload.id
            ),
          ],
        },
      };

    case SET_FILTER:
      return {
        ...state,
        contacts: { ...state.contacts, filter: action.payload.value },
      };
    default:
      return state;
  }
};

export default phonebookReducer
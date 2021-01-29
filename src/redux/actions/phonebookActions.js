import { v4 as uuidv4 } from "uuid";
import { ADD_CONTACT, DELETE_CONTACT, SET_FILTER } from "../PhonebookConstants";

export const addContact = (contact) => ({
  type: ADD_CONTACT,
  payload: {
    contact,
  },
});

export const deleteContact = (id) => ({
  type: DELETE_CONTACT,
  payload: {
    id,
  },
});

export const setFilter = (value) => ({
  type: SET_FILTER,
  payload: {
    value,
  },
});

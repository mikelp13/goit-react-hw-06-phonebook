import { v4 as uuidv4 } from "uuid";
import { createAction } from "@reduxjs/toolkit";

// ========= redux toolkit ===========================

export const addContact = createAction(
  "phonebook/addNewContact",
  (name, number) => ({
    payload: {
      contact: { name, number, id: uuidv4() },
    },
  })
);

export const deleteContact = createAction("phonebook/deleteContact")
export const setFilter = createAction("phonebook/setFilter")
export const getContacts = createAction("phonebook/getContacts")


// // ========= pure redux ===========================

// import { ADD_CONTACT, DELETE_CONTACT, SET_FILTER } from "../PhonebookConstants";

// export const addContact = (name, number) => ({
//   type: ADD_CONTACT,
//   payload: {
//     contact:{name, number, id:uuidv4() },
//   },
// });

// export const deleteContact = (id) => ({
//   type: DELETE_CONTACT,
//   payload: {
//     id,
//   },
// });

// export const setFilter = (value) => ({
//   type: SET_FILTER,
//   payload: {
//     value,
//   },
// });

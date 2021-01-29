import React, { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import { v4 as uuidv4 } from "uuid";
import ContactForm from "./contactForm/ContactForm";
import ContactList from "./contactList/ContactList";
import Filter from "./filter/Filter";
import { Container } from "./AppStyled";
import Notification from "./notification/Notification";

const initialState = {
  contacts: [],
  filter: "",
  alert: false,
};

const App = () => {
  const [state, setState] = useState({ ...initialState });

  useEffect(() => {
    const storageContacts = localStorage.getItem("contacts");
    storageContacts &&
      setState((prevState) => ({
        ...prevState,
        contacts: JSON.parse(storageContacts),
      }));
  }, []);

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(state.contacts));
  }, [state.contacts]);

  const changeFilter = (e) => {
    const { value } = e.target;
    setState((prevState) => ({ ...prevState, filter: value }));
  };

  const getFilteredContacts = () => {
    const { contacts, filter } = state;
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const addContact = (name, number) => {
    const { contacts } = state;
    const contact = { id: uuidv4(), name, number };
    if (!name || !number) {
      return setState((prevState) => ({
        ...prevState,
        alert: true,
        alertMessage: "Please enter some contact information.",
      }));
    }
 
    contacts.some((cont) => cont.name.toLowerCase() === name.toLowerCase())
      ? setState((prevState) => ({
        ...prevState,
        alert: true,
        alertMessage: `${name} is already in contacts!`,
      }))
      : setState((prevState) => ({
          ...prevState,
          contacts: [contact, ...prevState.contacts],
        }));
  };

  const deleteContact = (e) => {
    const contactId = e.target.dataset.id;
    setState((prevState) => ({
      ...prevState,
      contacts: [...prevState.contacts.filter(({ id }) => id !== contactId)],
      filter: "",
    }));
  };

  const handleNotificationExit = () =>
    setState((prevState) => ({ ...prevState, alert: false }));

  return (
    <Container>
      <CSSTransition
        in={true}
        appear={true}
        classNames="phonebook-title"
        timeout={500}
        unmountOnExit
      >
        <h1>Phonebook</h1>
      </CSSTransition>

      <ContactForm onAddContact={addContact} />

      <CSSTransition
        in={state.contacts.length > 1}
        classNames="filter"
        timeout={500}
        unmountOnExit
      >
        <Filter value={state.filter} onChangeFilter={changeFilter} />
      </CSSTransition>

      <ContactList
        contacts={getFilteredContacts()}
        onDeleteContact={deleteContact}
      />

      {!state.contacts.length && <p>There are no contacts in current list.</p>}
      <CSSTransition
        in={state.alert}
        classNames="Notification"
        onEntered={handleNotificationExit}
        timeout={3000}
        unmountOnExit
      >
        <Notification message={state.alertMessage} />
      </CSSTransition>
    </Container>
  );
};

export default App;

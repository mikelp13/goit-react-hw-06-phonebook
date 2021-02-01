import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { addContact, getContacts } from "../../redux/actions/phonebookActions";
import Notification from "../notification/Notification";
import { Form, Input, Button } from "./ContactFormStyled";
import { CSSTransition } from "react-transition-group";

const initialState = {
  name: "",
  number: "",
  alert: false,
};

const ContactForm = ({ contacts, addContact, getContacts }) => {
  const [state, setState] = useState({ ...initialState });

  useEffect(() => {
    if (localStorage.getItem("contacts")) {
      const contacts = JSON.parse(localStorage.getItem("contacts"));
      getContacts(contacts);
    }
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, number } = state;

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
      : addContact(name, number);

    setState((prevState) => ({ ...prevState, name: "", number: "" }));
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <label>
          Name
          <Input
            type="text"
            name="name"
            value={state.name}
            placeholder="Enter your name"
            onChange={handleChange}
          ></Input>
        </label>
        <label>
          Number
          <Input
            type="tel"
            name="number"
            value={state.number}
            placeholder="123-45-678"
            onChange={handleChange}
          ></Input>
        </label>
        <Button type="submit">Add contact</Button>
      </Form>
      <CSSTransition
        in={state.alert}
        classNames="Notification"
        onEntered={() =>
          setState((prevState) => ({ ...prevState, alert: false }))
        }
        timeout={3000}
        unmountOnExit
      >
        <Notification message={state.alertMessage} />
      </CSSTransition>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    contacts: state.contacts.items,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addContact: (name, number) => {
      dispatch(addContact(name, number));
    },
    getContacts: (contacts) => {
      dispatch(getContacts(contacts));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);

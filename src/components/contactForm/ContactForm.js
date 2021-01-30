import React, { useState } from "react";
import { connect } from "react-redux";
import { addContact } from "../../redux/actions/phonebookActions";
import Notification from "../notification/Notification";
import { Form, Input, Button } from "./ContactFormStyled";
import { CSSTransition } from "react-transition-group";
import PropTypes from "prop-types";

const initialState = {
  name: "",
  number: "",
  alert: false,
};

const ContactForm = ({ contacts, addContact }) => {
  const [state, setState] = useState({ ...initialState });

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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);

// ContactForm.propTypes = {
//   onAddContact: PropTypes.func.isRequired
// }

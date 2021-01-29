import React, { useState } from "react";
import PropTypes from "prop-types";
import { Form, Input, Button } from "./ContactFormStyled";

const initialState = {
  name: "",
  number: "",
};

const ContactForm = ({onAddContact}) => {
  const [state, setState] = useState({ ...initialState });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState)=> ({...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, number } = state;
   onAddContact(name, number);
    setState({ name: "", number: "" });
  };

  return (
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
  );
};

ContactForm.propTypes = {
  onAddContact: PropTypes.func.isRequired
}

export default ContactForm;


import React, { useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Form, Input, Button } from "./ContactFormStyled";
import { addContact } from "../../redux/actions/phonebookActions";

const initialState = {
  name: "",
  number: "",
};

const ContactForm = ({addContact}) => {
  const [state, setState] = useState({ ...initialState });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState)=> ({...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, number } = state;
   addContact(name, number);
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

const mapStateToProps = (state) => {
  return {
   state
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
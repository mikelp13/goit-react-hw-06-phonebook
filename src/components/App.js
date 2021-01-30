import React from "react";
import { connect } from "react-redux";
import ContactForm from "./contactForm/ContactForm";
import ContactList from "./contactList/ContactList";
import Filter from "./filter/Filter";
import { CSSTransition } from "react-transition-group";
import { Container } from "./AppStyled";

const App = ({ contacts }) => {

  // useEffect(() => {
  //   const storageContacts = localStorage.getItem("contacts");
  //   storageContacts &&
  //     setState((prevState) => ({
  //       ...prevState,
  //       contacts: JSON.parse(storageContacts),
  //     }));
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem("contacts", JSON.stringify(state.contacts));
  // }, [state.contacts]);

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

      <ContactForm />

      <CSSTransition
        in={contacts.length > 1}
        classNames="filter"
        timeout={500}
        unmountOnExit
      >
        <Filter />
      </CSSTransition>

      <ContactList />

      {!contacts.length && <p>There are no contacts in current list.</p>}
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    contacts: state.contacts.items,
  };
};

export default connect(mapStateToProps)(App);

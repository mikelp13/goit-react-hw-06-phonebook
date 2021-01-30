import React from "react";
import { connect } from "react-redux";
import ContactListItem from "./contactListItem/ContactListItem";
import { deleteContact, setFilter } from "../../redux/actions/phonebookActions";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { Wrapper } from "./ContactListStyled";

const ContactList = ({ contacts, deleteContact, setFilter }) => {

  const handleDeleteContact = (e) => {
    const { id } = e.target.dataset;
    deleteContact(id);
    setFilter("");
  };
  return (
    <Wrapper>
      <TransitionGroup component="ul">
        {contacts.map((contact) => (
          <CSSTransition
            key={contact.id}
            timeout={250}
            classNames="ContactList-item"
          >
            <ContactListItem
              contact={contact}
              onDeleteContact={handleDeleteContact}
            />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </Wrapper>
  );
};

const mapStateToProps = (state) => {
  return {
    contacts: state.contacts.items.filter((item) =>
      item.name.toLowerCase().includes(state.contacts.filter.toLowerCase())
    ),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteContact: (id) => {
      dispatch(deleteContact(id));
    },
    setFilter: (value) => {
      dispatch(setFilter(value));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);



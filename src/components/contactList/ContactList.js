import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import ContactListItem from "./contactListItem/ContactListItem";
import PropTypes from "prop-types";
import { Wrapper } from "./ContactListStyled";

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <Wrapper>
      <TransitionGroup component="ul">
        {contacts.map((contact) => (
          <CSSTransition key={contact.id} timeout={250} classNames="ContactList-item">
            <ContactListItem
              contact={contact}
              onDeleteContact={onDeleteContact}
            />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </Wrapper>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;

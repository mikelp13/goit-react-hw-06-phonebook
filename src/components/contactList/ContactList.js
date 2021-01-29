import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import ContactListItem from "./contactListItem/ContactListItem";
import PropTypes from "prop-types";
import { Wrapper } from "./ContactListStyled";
import { connect } from "react-redux";
import { deleteContact } from "../../redux/actions/phonebookActions";

const ContactList = ({ contacts, deleteContact }) => {

  const handleDeleteContact = (e) => {
    deleteContact(e.target.dataset.id)
    
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
    contacts: state.contacts.items,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteContact: (id) => {
      dispatch(deleteContact(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  deleteContact: PropTypes.func.isRequired,
};

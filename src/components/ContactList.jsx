/* eslint-disable array-callback-return */
import { Component } from 'react';
import PropTypes from 'prop-types';
import css from './ContactList.module.css';

class ContactList extends Component {
  render() {
    const { contacts, filter, onDelete } = this.props;
    return (
      <ul>
        {contacts.map(contact => {
          if (contact.name.toLowerCase().includes(filter.toLowerCase())) {
            return (
              <li key={contact.id}>
                {contact.name}: {contact.number}
                <button
                  className={css.deletebutton}
                  key={contact.id}
                  type="button"
                  onClick={() => onDelete(contact.id)}
                >
                  Delete
                </button>
              </li>
            );
          }
        })}
      </ul>
    );
  }
}

ContactList.propTypes = {
  onDelete: PropTypes.func,
};

export default ContactList;

// test

import { Component } from 'react';
import PropTypes from 'prop-types';

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

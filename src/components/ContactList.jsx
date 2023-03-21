import { Component } from 'react';

class ContactList extends Component {
  //   handleDelete = id => {
  //     this.props.onDelete(id);
  //   };

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

export default ContactList;

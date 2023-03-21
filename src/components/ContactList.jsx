import { Component } from 'react';

class ContactList extends Component {
  render() {
    const { contacts, filter } = this.props;
    return (
      <ul>
        {contacts.map(contact => {
          if (contact.name.toLowerCase().includes(filter.toLowerCase())) {
            return (
              <li key={contact.id}>
                {contact.name}: {contact.number}
              </li>
            );
          }
        })}
      </ul>
    );
  }
}

export default ContactList;

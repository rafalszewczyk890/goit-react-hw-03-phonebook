import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleSubmit = contact => {
    this.setState(prevState => ({
      contacts: [
        ...prevState.contacts,
        { id: contact.id, name: contact.name, number: contact.number },
      ],
    }));
  };

  render() {
    const { contacts, name, number } = this.state;
    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm handleSubmit={this.handleSubmit} />
        {/* <form>
          <label>Name</label>
          <input
            type="text"
            onChange={this.handleChange}
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            value={name}
            required
          />
          <label>Phone</label>
          <input
            type="tel"
            onChange={this.handleChange}
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            value={number}
            required
          />
          <button type="submit" onClick={this.handleSubmit}>
            Add contact
          </button>
        </form> */}
        <h2>Contacts</h2>
        <p>Find contacts by name</p>
        <input
          type="text"
          onChange={this.handleChange}
          name="filter"
          title="Contacts will be filtered by this input value"
        ></input>
        <ul>
          {contacts.map(contact => {
            if (
              contact.name
                .toLowerCase()
                .includes(this.state.filter.toLowerCase())
            ) {
              return (
                <li key={contact.id}>
                  {contact.name}: {contact.number}
                </li>
              );
            }
          })}
        </ul>
      </>
    );
  }
}

export default App;

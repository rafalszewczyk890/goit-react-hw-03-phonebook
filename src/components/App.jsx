import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';
import css from './App.module.css';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const contactsFromStorage = localStorage.getItem('contacts');
    if (contactsFromStorage) {
      this.setState({
        contacts: JSON.parse(contactsFromStorage),
      });
    }
  }

  handleSubmit = contact => {
    this.setState(prevState => ({
      contacts: [
        ...prevState.contacts,
        { id: contact.id, name: contact.name, number: contact.number },
      ],
    }));

    const contactsFromStorageParsed =
      JSON.parse(localStorage.getItem('contacts')) || [];
    contactsFromStorageParsed.push(contact);
    localStorage.setItem('contacts', JSON.stringify(contactsFromStorageParsed));
  };

  onFilterChange = value => {
    this.setState({
      filter: value,
    });
  };

  handleDelete = id => {
    const filteredContacts = this.state.contacts.filter(
      contact => contact.id !== id
    );
    this.setState({
      contacts: filteredContacts,
    });
    localStorage.setItem('contacts', JSON.stringify(filteredContacts));
  };

  render() {
    const { contacts, filter } = this.state;
    return (
      <div className={css.container}>
        <h1>Phonebook</h1>
        <ContactForm handleSubmit={this.handleSubmit} contacts={contacts} />
        <h2>Contacts</h2>
        <Filter onChange={this.onFilterChange} />
        <ContactList
          contacts={contacts}
          filter={filter}
          onDelete={this.handleDelete}
        />
      </div>
    );
  }
}

App.propTypes = {
  contacts: PropTypes.array,
  filter: PropTypes.string,
};

export default App;

// test

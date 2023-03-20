import React, { Component } from 'react';
import { nanoid } from 'nanoid';

class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  handleChange = event => {
    this.setState({
      name: event.target.value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    this.setState(prevState => ({
      contacts: [...prevState.contacts, { id: nanoid(), name: prevState.name }],
      name: '',
    }));
  };

  render() {
    const { contacts } = this.state;
    return (
      <>
        <h5>Phonebook</h5>
        <form>
          <input
            type="text"
            onChange={this.handleChange}
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            value={this.state.name}
            required
          />
          <button type="submit" onClick={this.handleSubmit}>
            Add contact
          </button>
        </form>
        <h5>Contacts</h5>
        <ul>
          {contacts.map(contact => {
            return <li key={contact.id}>{contact.name}</li>;
          })}
        </ul>
      </>
    );
  }
}

export default App;

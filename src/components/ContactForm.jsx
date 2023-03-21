import { Component } from 'react';
import { nanoid } from 'nanoid';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
    console.log(this.state);
  };

  onSubmit = event => {
    const { handleSubmit, contacts } = this.props;
    const contact = {
      id: nanoid(),
      name: this.state.name,
      number: this.state.number,
    };

    if (contacts.find(listContact => listContact.name === contact.name)) {
      alert(`${contact.name} is already in contacts.`);
      return;
    }
    handleSubmit(contact);
  };

  render() {
    const { name, number } = this.state;
    return (
      <form>
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
        <button type="button" onClick={this.onSubmit}>
          Add contact
        </button>
      </form>
    );
  }
}

export default ContactForm;

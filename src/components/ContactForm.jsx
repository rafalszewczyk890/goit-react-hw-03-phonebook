import { Component } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import css from './ContactForm.module.css';

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

    this.setState({
      name: '',
      number: '',
    });

    if (contacts.find(listContact => listContact.name === contact.name)) {
      alert(`${contact.name} is already in contacts.`);
      return;
    }
    handleSubmit(contact);
  };

  render() {
    const { name, number } = this.state;
    return (
      <form className={css.contactform}>
        <label>Name</label>
        <input
          className={css.input}
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
          className={css.input}
          type="tel"
          onChange={this.handleChange}
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          value={number}
          required
        />
        <button className={css.submit} type="button" onClick={this.onSubmit}>
          Add contact
        </button>
      </form>
    );
  }
}

ContactForm.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.string,
};

export default ContactForm;

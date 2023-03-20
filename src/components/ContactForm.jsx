import { Component } from 'react';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

    
    
  render() {
    return (
      <form>
        <label>Name</label>
        <input
          type="text"
          onChange={this.props.handleChange}
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          value={this.state.name}
          required
        />
        <label>Phone</label>
        <input
          type="tel"
          onChange={this.props.handleChange}
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          value={this.state.number}
          required
        />
        <button type="submit" onClick={this.handleSubmit}>
          Add contact
        </button>
      </form>
    );
  }
}

export default ContactForm;

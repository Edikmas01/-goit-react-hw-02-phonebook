import { Component } from "react";
import './Phonebook.css'

export class Phonebook extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
    };
    
    handleSubmit = (e) => {
        e.preventDefault();
        const { name, number } = this.state;
      this.props.onSubmit(name, number);
    
        this.setState({
            name: "",
            number: "",
        })
    }
  render() {
    return (
      <form className="phonebook-form" onSubmit={this.handleSubmit}>
        <h3 className="input-title">Name</h3>
        <input
          value={this.state.name}
          onChange={this.handleChange}
          className="phonebook-input"
          type="text"
          name="name"
          // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <h3 className="input-title">Number</h3>
        <input
          onChange={this.handleChange}
          value={this.state.number}
          className="phonebook-input"
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <button type="submit" className="phonebook-button">
          Add contact
        </button>
      </form>
    );
  }
}
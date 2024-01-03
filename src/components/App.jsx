import { Component } from "react";
import { nanoid } from 'nanoid';
import { Phonebook } from "./Phonebook/Phonebook";
import { Contacts } from "./Contacts/Contacts";
import { Filter } from "./Filter/Filter";

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };


  handleSubmit = (name, number) => {
    const { contacts } = this.state;
    const isNameAlreadyExists = contacts.some(contact => contact.name === name);
    if (isNameAlreadyExists) {
      alert(`${name} is already in contacts.`);
      return;
    }

    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  handleChange = value => {
    console.log(value);
    this.setState({ filter: value });
  };

  handleDeleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const { filter, contacts } = this.state;

    const normalizedFilter = filter.toLowerCase();

    const visibleContacts = contacts.filter(
      ({ name, number }) =>
        name.toLowerCase().includes(normalizedFilter) ||
        number.includes(normalizedFilter)
    );

    return (
      <div>
        <h1 className="title">Phonebook</h1>

        <Phonebook onSubmit={this.handleSubmit} />
        <h1 className="title">Contacts</h1>
        <Filter onChange={this.handleChange} filter={filter} />
        <Contacts
          contacts={visibleContacts}
          onChange={this.handleChange}
          filter={filter}
          onDelete={this.handleDeleteContact}
        />
      </div>
    );
  }
};

export default App;
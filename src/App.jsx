import React from 'react';
//import { v4 } from 'uuid';

import { Component } from 'react';



class App extends Component {
  state = {
    contacts: [],
    name: "",
    number: '',
    filter: "",
  };

  handleInputChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
    
  }

  render() {
    return (
      <>
        <h1>Phonebook</h1>
        <form action="">
          <label htmlFor="">Name
            <input
              onChange={this.handleInputChange}
              value={this.state.name}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
              required
            />            
          </label>
          <label>Number
            <input
              onChange={this.handleInputChange}
              value={this.state.number}
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
              required
            />

          </label>
          <button type="button">Add contact</button>
        </form>
        <h2>Contacts</h2>
        <ul>
          <li></li>
          <li></li>

        </ul>

      </>
    )
  };
}
export default App;

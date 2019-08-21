import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
  state = {
    name: '',
    email: '',
    selected: 'Pedro'
  }

  handleChangle = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSelect = (e) => {
    this.setState({ selected: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
  }

  render() { 
    return (
      <form className="form" onSubmit={ this.handleSubmit }>
        <input
          type="text" 
          name="name"
          onChange={ this.handleChangle } 
          value={ this.state.name }
        />

        <input 
          type="text" 
          name="email"
          onChange={ this.handleChangle }
          value={ this.state.email }
        />

        <select value={ this.state.selected } onChange={ this.handleSelect } >
          <option value="Pedro">Pedro</option>
          <option value="Edu">Edu</option>
          <option value="Johnny">Johnny</option>
        </select>

        <input type="submit" value="Enviar"/>
      </form>
    );
  }
}
 
export default Form;
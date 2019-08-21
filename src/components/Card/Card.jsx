import React, { Component } from 'react';
import './Card.css';

class Card extends Component {
  state = {  }
  render() {
    const { model, brand, year, image, lucas } = this.props.car;
    return (
      <div className="card" style={ lucas }>
        <p>Model: { model }</p>
        <p>Marca: { brand }</p>
        <p>Ano: { year }</p>
        <img src={ image } alt={ model } />
      </div>
    );
  }
}
 
export default Card;
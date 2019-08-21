import React, { Component } from 'react';
import Card from '../Card/Card';
import './Euli.css';

class Euli extends Component {
  state = {
    carros: [
      {
        model: 'hrv',
        brand: 'Honda',
        year: 2016,
        image: 'https://abrilquatrorodas.files.wordpress.com/2019/05/honda-hr-v-touring-dianteira-movimento-1-e1557327210211.jpg?quality=70&strip=info&w=1024',
        lucas: {
          backgroundColor: 'red',
          color: 'green'
        }
      },
      {
        model: 'Fusca',
        brand: 'VW',
        year: 2053,
        image: 'https://img.olx.com.br/images/38/387921000895729.jpg',
        lucas: {
          backgroundColor: 'green',
          color: 'blue'
        }
      },
      {
        model: 'Pedro',
        brand: 'Dev',
        year: 1997,
        image: 'https://scontent.frec10-1.fna.fbcdn.net/v/t1.0-9/23916004_1735917363108685_799976842279344351_n.jpg?_nc_cat=103&_nc_oc=AQkJGsM8Ag5RUqTOCWB93RwfWWIYEfWoEFzUpu6Fm9ZVGAVKDbGyImQkZdDMCdAq-JI&_nc_ht=scontent.frec10-1.fna&oh=3821485f48af1617ae74f1086ed154db&oe=5DDF74C3',
        lucas: {
          backgroundColor: 'blue',
          color: 'red'
        }
      },
      {
        model: 'Rio doce',
        brand: 'Mercedez',
        year: 1111,
        image: 'https://cdn-motorshow-ssl.akamaized.net/wp-content/uploads/sites/2/2015/07/img-362426-o-waze-do-busao.jpg',
        lucas: {
          backgroundColor: 'pink',
          color: 'cyan'
        }
      }
    ]
  }
  render() { 
    return (
      <div className="euli">
        <h1>Carros</h1>
        {
          this.state.carros.map((carro) => {
            return <Card car={ carro } key={ carro.model } />
          })
        }
      </div>
    );
  }
}
 
export default Euli;
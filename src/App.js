import React, { Component } from 'react';
import './App.css';
import Euli from './components/Euli/Euli';
import Form from './components/Form/Form';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

class App extends Component {
  state = {
    info: {} // npm i --save react-router-dom
  }


  render() {
    return (
      <Router>
        <div className="App">
          <nav>
            <ul>
              <Link to="/">
                <li>Home</li>
              </Link>
              <Link to="/contact">
                <li>Contato</li>
              </Link>
            </ul>
          </nav>
          <Switch>
            <Route path="/" exact component={ Euli } />
            <Route path="/contact" component={ Form } />
          </Switch>
        </div>

      </Router>
    );
  }
}

export default App;

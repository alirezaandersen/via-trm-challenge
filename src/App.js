import React, { Component } from 'react';
import AddressForm from './components/addressForm'
import { Row, Col } from 'react-materialize'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Row>
      <Col>
       <AddressForm />
       </Col>
       <Col>
        <h1>Month Selector</h1>
       </Col>
       </Row>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import AddressForm from './components/addressForm'
import { Row, Col } from 'react-materialize'
import MonthRangeSelector from './components/monthRangeSelector'

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
        <MonthRangeSelector years="2017,2018,2019" />
       </Col>
       </Row>
      </div>
    );
  }
}

export default App;

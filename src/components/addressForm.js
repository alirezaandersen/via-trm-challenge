import React, { Component } from 'react'
import { Row } from 'react-materialize'
import Select from './select'
import Input from './input'
import countries from '../const/countries'
import states from '../const/usStates'


export default class AddressForm extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  handleInputChange = (e) => {
    const targetValue = e.target.value
    const targetName = e.target.name

    this.setState({[targetName]: targetValue})
  }

  render() {
    return (
      <div>
        <Select
          name={'country'}
          placeholder={'Country'}
          collections={countries}
          handleSelectChange={this.handleInputChange}
        />
        <Input
          name='city'
          placeholder={'City'}
          handleInputChange={this.handleInputChange}
        />
        {
          this.state.country === 'US' ?
          <Select
            name={'state'}
            placeholder={'State'}
            collections={states}
            handleSelectChange={this.handleInputChange}
          />
          :
          <Input
            name={'state'}
            placeholder={'State'}
            handleSelectChange={this.handleInputChange}
          />
        }
        <Input
          name='zipCode'
          placeholder={'Zip Code'}
          handleInputChange={this.handleInputChange}
        />
        <Input
          name='permAddress'
          placeholder={'Permanent Address'}
          handleInputChange={this.handleInputChange}
        />
        <Input
          name='permAddress2'
          placeholder={'Permanent Address (Line 2)'}
          handleInputChange={this.handleInputChange}
        />
      </div>
    )
  }
}

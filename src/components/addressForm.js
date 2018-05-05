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
          handleSelectChange={this.handleInputChange}
          name={'country'}
          placeholder={'Country'}
          collections={countries}
        />
        <Input
          handleInputChange={this.handleInputChange}
          name='city'
         placeholder={'City'}
        />
        {
          this.state.country === 'US' ?
          <Select
            handleSelectChange={this.handleInputChange}
            name={'state'}
            placeholder={'State'}
            collections={states}
          />
          :
          <Input
            placeholder={'State'}
            handleSelectChange={this.handleInputChange}
            name={'state'}
          />
        }
      </div>
    )
  }
}

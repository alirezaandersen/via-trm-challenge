import React, { Component } from 'react'
import Select from './select'
import Input from './input'
import countries from '../const/countries'


export default class AddressForm extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  handleCountrySelectChange = (e) => {
    const country = e.target.value
    this.setState({country})
  }

  handleStateSelectChange = (e) => {
    const state = e.target.value
    this.setState({state})
  }

  render() {
    return (
      <div>
        <Select
          handleSelectChange={this.handleCountrySelectChange}
          placeholder={'Country'}
          collections={countries}
        />
        <Input
         placeholder={'City'}
        />
        {
          this.state.country === 'US' ?
          <Select
            handleSelectChange={this.handleStateSelectChange}
            placeholder={'State'}
            collections={countries}
          />
          :
          <Input
            placeholder={'State'}
          />
        }
      </div>
    )
  }
}

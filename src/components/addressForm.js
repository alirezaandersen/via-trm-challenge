import React, { Component } from 'react'
import Select from './select'
import countries from '../const/countries'

export default class AddressForm extends Component {
  render() {
    return (
      <div>
        <Select
        label={"Country of Origin"}
        type={'select'}
        collections={countries}
        />
      </div>
    )
  }
}

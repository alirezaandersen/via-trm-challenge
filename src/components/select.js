import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { Input, Row } from 'react-materialize'

export default class Select extends Component {
  render() {
    const { placeholder, collections, handleSelectChange, name } = this.props
    return (
        <Input m={12} type='select' name={name} onChange={handleSelectChange}>
        <option value='' disabled selected>{placeholder}</option>
       {
         collections.map(element => (
         <option value={element.value}>{element.name}</option>
       )
     )
   }
      </Input>
    )
  }
}

Select.defaultProps = {
  placeholder: 'Select',
  handleSelectChange: () => {}
}

Select.propTypes = {
  placeholder: PropTypes.string,
  name: PropTypes.string,
  collections: PropTypes.array.isRequired,
  handleSelectChange: PropTypes.func
}

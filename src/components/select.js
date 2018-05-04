import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { Input, Row } from 'react-materialize'

export default class Select extends Component {
  render() {
    const { type, placeholder, collections, handleSelectChange } = this.props
    return (
      <Row>
        <Input s={12} type='select' onChange={handleSelectChange}>
        <option value='' disabled selected>{placeholder}</option>
       {
         collections.map(element => (
         <option value={element.value}>{element.name}</option>
       )
     )
   }
      </Input>
    </Row>
    )
  }
}

Select.propTypes = {
  label: PropTypes.string,
  collections: PropTypes.array.isRequired
}

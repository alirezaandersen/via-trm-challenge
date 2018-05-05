import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Input as MaterializeInput, Row } from 'react-materialize'

export default class Input extends Component {
  render() {
    const { placeholder, handleInputChange, name } = this.props
    return (
      <MaterializeInput
        m={12}
        type='text'
        name={name}
        placeholder={placeholder}
        onChange={handleInputChange}
      >
      </MaterializeInput>
    )
  }
}

Input.defaultProps = {
  placeholder: 'Test',
  handleInputChange: () => {}
}

Input.propTypes = {
  placeholder: PropTypes.string,
  name: PropTypes.string,
  handleInputChange: PropTypes.func.isRequired
}

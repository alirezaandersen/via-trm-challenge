import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Input as MaterializeInput, Row } from 'react-materialize'

export default class Input extends Component {
  render() {
    const { placeholder } = this.props
    return (
      <MaterializeInput m={12} type='text' placeholder={placeholder}>
      </MaterializeInput>
    )
  }
}

Input.propTypes = {
  placeholder: PropTypes.string
}

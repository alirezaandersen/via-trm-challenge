import React, { Component } from 'react'
import { Button, Col, Row } from 'react-materialize'
import monthAbv from '../const/months'

export default class MonthRangeSelector extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedMonths: []
    }
  }

  handleMonthSelect = date => {
    const { selectedMonths } = this.state

     if (this.state.selectedMonths.length === 2) {
       this.setState({ selectedMonths: [date] })
     } else {
       this.setState({ selectedMonths: [...selectedMonths, date]})
     }
  }


  monthsFor(yearNumber) {
    return (
      monthAbv.map((month, index) => {
        const date = new Date(yearNumber, index);
        return <Button flat
          key={month}
          onClick={() => this.handleMonthSelect(date)}
          style={{ border: '',  }} >
          {month}
        </Button>
      })
    )
  }

  render() {
    return this.props.years.split(",").map((year) =>
      <Row key = {year} className="month-range-picker-year">
        <div className="month-range-picker-year-number" > {year} </div>
        <Col m={7}>
        { this.monthsFor(parseInt(year, 10)) }
        </Col>
      </Row>
    );
  }
}

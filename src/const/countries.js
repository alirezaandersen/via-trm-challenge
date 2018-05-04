var countries = require('country-list')();

const countryData = countries.getData();

const formatedData = countryData.map(country => (
    { value: country.code, name: country.name }
  ))

export default formatedData

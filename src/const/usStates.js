var usStates = require('usa-states').UsaStates;

const states = new usStates()

const formatedStateData = states.states.map(states => (
     { value: states.abbreviation, name: states.name }
))

export default formatedStateData;

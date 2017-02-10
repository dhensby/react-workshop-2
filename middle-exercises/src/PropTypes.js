import React, { Component, PropTypes } from 'react'

export default class PropTypesExercise extends Component {
  render() {
    return (
      <div>
        <HelloPerson />
        <OtherHelloPerson name="Dannnns" />
        <NewComponent />
      </div>
    )
  }
}

class HelloPerson extends Component {
  render() {
    return (
      <p>Hello, { this.props.name }</p>
    )
  }
}

HelloPerson.propTypes = {
  // EXERCISE: fill this out with the right propTypes such that we see
  // an error if we forget to pass a name property
    name: PropTypes.string.isRequired,
}

HelloPerson.defaultProps = {
  // EXERCISE: fill this out so that if we don't pass the name prop, it defaults
  // to "JacK" (or your own name, I'm easy!)
    name: 'Danaa'
}

const OtherHelloPerson = props => (
  <p>OtherHello, { props.name }</p>
)

// EXERCISE: how can we still declare propTypes and default props for functional,
// stateless components?
const NewComponent = props => {
  return (
      <p>Hello {props.name}</p>
  )
}


NewComponent.propTypes = {
    name: PropTypes.string.isRequired,
}
NewComponent.defaultProps = {
    name: 'DandyAndy',
}

import React, { Component } from 'react'
import { connect } from 'react-redux'


// EXERCISE: connect this Counter to the redux store
// and make it able to show the current state and a button to dispatch
// an action to increment it

export default class Counter extends Component {
  increment = () => {
    // update the redux store!
  }

  render() {
    return (
      <div>
        <p>The current counter value is: 0</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    )
  }
}

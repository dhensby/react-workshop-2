import React, { Component } from 'react'
import { connect } from 'react-redux'

// EXERCISE: connect this Counter to the redux store
// and make it able to show the current state and a button to dispatch
// an action to increment it

class Counter extends Component {
  increment() {
    this.props.dispatch({type: 'INCREMENT'})
  }
  decrement() {
    this.props.dispatch({type: 'DECREMENT'})
  }
  render() {
    return (
        <div>
      <p>The current counter value is: {this.props.count}</p>
        <button onClick={e => this.increment()}>Increment</button>
        <button onClick={e => this.decrement()}>Decrement</button>
        </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    count: state,
  }
}

const Connected = connect(mapStateToProps)(Counter)

export default Connected
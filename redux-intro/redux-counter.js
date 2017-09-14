import { createStore } from 'redux'

const reducer = (state, action) => {
  return state
}

const store = createStore(reducer)

// your job is to get all of these logs outputting what they should

console.log('The store is 0 by default', store.getState(), 'should be 0')

console.log('if I dispatch INCREMENT the store goes up by one')
store.dispatch({ type: 'INCREMENT' })
console.log('store state:', store.getState(), 'should be 1')

console.log('if I dispatch DECREMENT the store goes down by 1')
store.dispatch({ type: 'DECREMENT' })
console.log('store state:', store.getState(), 'should be 0 again')

console.log('If I INCREMENT and then RESET it should be 0')
store.dispatch({ type: 'DECREMENT' })
store.dispatch({ type: 'RESET' })
console.log('store state:', store.getState(), 'should be 0')

console.log('if I dispatch INCREMENT_BY and a value I can increase the value')
store.dispatch({ type: 'INCREMENT_BY', data: { value: 4 } })
console.log('store state:', store.getState(), 'should be 4')

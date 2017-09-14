import { createStore } from 'redux'

const initialState = { counter: 0 }
const reducer = (state = initialState, action) => {
  return state
}

const store = createStore(reducer)

console.log('The state of the store', store)

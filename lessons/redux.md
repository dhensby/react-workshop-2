## Redux Intro

Now we're going to look into Redux. Redux is a tool for state management and is aimed at keeping the management of data easy in large applications. You __do not need Redux by default!__ and can get a lot way with just React, but at some point once your app gets larger you might reach for Redux.

Redux and React play nicely together, but you can also use Redux on its own, and at first we're going to learn Redux by just using Redux, and only move to React later.

## Demo

Before I let you lose on the code I'll quickly demonstrate the ideas behind Redux by creating a Redux "store".

## Get started

Run `npm run redux-counter`. This will run a Redux example in `redux-intro/redux-counter.js`.

You will see a lot of console outputs. You need to make these outputs output the right values.
The key parts of redux to note:

- your entire app's state is stored in a single object that is called the store.
- to change a state you emit an action, an object describing what happened.
- reducers take an action and produce the new state.

## Redux and React

Now we're going to build the counter example using React and add a user interface. Keep in mind throughout this entire thing that the Redux store is just the same as it always has been - this time we're just connecting it to React.

We'll use the `react-redux` package for this which provides us with two parts:

- `connect`, a function used to hook a React component up to the React Redux system. Any component that needs to interact with the store (either to get data, or dispatch actions) must be explicitly connected to it. This is a good thing because you can't accidentally have any random component talking to the store without you first allowing them to.

- `Provider` this component provided by React-Redux hooks up the store to your app. You typically wrap your most top level component in this component, and that's it.

To run this app locally, run `npm run redux-react-exercises`.

## Redux Counter

Let's take the counter and build it in React, along with some components to increment the count.

## Redux TODOS

In this app we're going to render some todos and a form to add some todos to our local state.

There are three files:

- `reducer.js` which contains the reducer including our initial state, and it can deal with the `NEW_TODO` action
- `Todos.js` renders the todos in a list and if they are done or not.
- `AddTodo.js`, which is a form to add a new TODO, but it needs connecting up.

Your job is to:

- connect `AddTodo.js` to the store, so it can call `this.props.dispatch`.
- Make it so when I fill out the `AddTodo` store, it dispatches the `NEW_TODO` action with the new todo text.

For bonus points:

- add another action, `TOGGLE_TODO`, which changes a TODO between done and not done. Add a button to the UI to allow a TODO to be toggled.

- add another action, and another UI button, that completes every single todo.

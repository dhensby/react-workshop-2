// you can use shorthand to define keys and values in objects

const name = 'jack'

// const person = { name: name }
const person = { name }
console.log('person', person)

// you can also dynamically define a key:

const key = 'name'

const person2 = { [key]: 'jack' }

console.log('person2', person2)

// you can also use https://github.com/tc39/proposal-object-rest-spread
// to create shallow copies of objects

const start = { a: 1, b: 2 }

const end = {...start, a: 2 }

console.log('end', end);

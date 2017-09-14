// arrow functions allow us to be much more succinct

const add1 = function(x, y) {
  return x + y
}

const add2 = (x, y) => x + y

console.log(add1(2, 2), add2(2, 2))

// an arrow function without braces around it implicitly returns
// but one with braces needs a return

const add3 = (x, y) => {
  return x + y
}

console.log(add3(2, 2))

// if you want to return an object literal from an arrow function,, you need
// to wrap it in parens.
// if you don't pass any arguments, you need to have an empty set of parens:

const getJack = () => ({
  name: 'jack',
})

console.log(getJack())

// if an arrow function only takes one argument, you don't need parens:

const alwaysAddTwo = x => x + 2

console.log(alwaysAddTwo(2))

// arrow functions are always bound to the right scope:

const broken = {
  name: 'jack',
  friends: ['james', 'zoe'],
  logFriends: function() {
    this.friends.forEach(function(friend) {
      console.log('=> ', this.name, 'has friend', friend)
    })
  },
}

try {
  console.log('broken example')
  broken.logFriends()
} catch (e) {
  console.log('Got an error', e.message)
}

const works = {
  name: 'jack',
  friends: ['james', 'zoe'],
  logFriends: function() {
    this.friends.forEach(friend => {
      console.log('=> ', this.name, 'has friend', friend)
    })
  },
}

console.log('this example works')
works.logFriends()

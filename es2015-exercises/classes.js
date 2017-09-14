// ES2015 introduced classes as syntactic sugar

class Person {
  constructor(name) {
    this.name = name
  }
}

const jack = new Person('jack')
console.log(jack.name)

// a class can also have static methods:

Person.makeJack = function() {
  return new Person('jack')
}

const jack2 = Person.makeJack()
console.log('jack2', jack2.name)

// you can also define class methods as arrow functions
// (based on a proposal for a future language feature)
// https://github.com/tc39/proposal-class-fields

class OtherPerson {
  constructor(name) {
    this.name = name
  }

  showName = () => console.log('otherName', this.name)
}

const otherJack = new OtherPerson('jack')
otherJack.showName()

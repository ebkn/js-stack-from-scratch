/* eslint-disable no-console */
// @flow

// const str = 'ES6'
// console.log(`Hello ${str}`)

const Dog = require('./dog').default

const toby = new Dog('Toby')
console.log(toby.bark())

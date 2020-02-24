/**
 * Variable Declariations
 */

var number;
let count = 2;
console.log(number)

function doSomething() {
  // for (let i = 0; i < 5; i++) {
  for (var i = 0; i < 5; i++) {
    console.log(i)
  }
  console.log('finally i=', i)
}

doSomething();
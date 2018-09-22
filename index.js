/*
* We declare our favorite animal inside the scope of 
* the 'myAnimal()' function
*/


function myAnimal() {
  var animal = 'dog'
  return animal
}

myAnimal()

/*
* We declare your favorite animal inside the scope of 
* the 'yourAnimal()' function
*/

function yourAnimal() {
  var animal = 'cat'
  return animal
}

yourAnimal()

function add2(n) {
  return n + 2

  // Feel free to move things around!
  const two = 2
}

var funkyFunction = function() {
  return function() {
    return "FUNKY!"
  }
}

// We want to set theFunk equal to "FUNKY!" using our funkyFunction.
// NOTE: you only need to modify the code below this line.
var theFunk = funkyFunction()()

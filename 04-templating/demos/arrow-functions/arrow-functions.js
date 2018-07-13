// Arrow Functions

// MDN docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions

// caniuse.com: https://caniuse.com/#search=arrow%20functions

// Arrow functions are an alternate form of function notation that was added in ECMAScript 2015, otherwise known as ES6.

// In some ways the differences can be viewed as only an alternate syntax, but there one key technical difference to keep in mind: arrow functions do not create their own scope, so they get their contextual "this" from the parent context. That means arrow functions cannot be used for constructor functions or to add methods to a constructor's prototype property.

// Note that arrow functions also have notational variances based upon the number of arguments they receive and also the number of statements enclosed in them. Arrow functions are ideal for use in pure "one-liner" functions.

// Single parameter loggers...
function logger(message){
  console.log(message);
}

let logger2 = function(message){
  console.log(message);
};

let logger3 = message => console.log(message);

let logger4 = () => console.log('hi');

// Two+ parameters (add): these require parentheses
function add(a,b){
  console.log(a+b);
}

let add2 = (a, b) => console.log(a+b);


// Multiple statements in the function requires curly braces for a code block AND a return statement.
let bigLogger = (message1, message2) => {
  console.log(message1);
  console.log(message2);
  return console.log(message1 + message2);
};


// Adam - Arrow notation can change contextual this, beware!
function Person(){
  this.age = 0;
  console.log(this);
  let myPerson = this;

  setInterval(function growUp(){
    console.log("Not arrow notation: ");
    console.log(this);
    myPerson.age++;

  }, 1000);

  setInterval(() => {
    console.log("Arrow notation: ");
    console.log(this);
  }, 1000);
}

let p = new Person();



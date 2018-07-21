'use strict';

const myArray = [0,1,2,3,4,5,6,7,8,9];

let sum = 0;
for(let i in myArray) {
  sum += myArray[i];
}

console.log(sum);


const sumUsingReduce = myArray.reduce(
  (accumulator, currentValue) => { 
    console.log(accumulator);
    console.log(currentValue);
    return accumulator + currentValue;
  }, 0
);

const smallerThanFive = myArray.reduce(
  (accumulator, currentValue) => { 
    return currentValue < 5 ? accumulator + 1 : accumulator;
  }, 0
);

const reversedArray = myArray.reduce(
  (accumulator, currentValue) => { 
    accumulator.unshift(currentValue);
    return accumulator;
  }, []
);

console.log(myArray);
console.log(reversedArray);

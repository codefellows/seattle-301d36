'use strict';

const myArray = [0,1,2,3,4,5,6,7,8,9];

const biggerThanFive = [];

for (let i in myArray) {
  if(myArray[i] > 5)
    biggerThanFive.push(myArray[i]);
}

console.log(biggerThanFive);


const biggerThanFiveFilter = myArray.filter(x => x > 5);
console.log(biggerThanFiveFilter);

const notFive = myArray.filter(x => x !== 5);
console.log(notFive);
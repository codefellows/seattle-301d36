'use strict';

const myArray = [0,1,2,3,4,5,6,7,8,9];

// let returnValue = myArray.slice();
// for(let i  = 0; i < myArray.length; i++) {
//   returnValue[i] += 1;
// }

// console.log(myArray);
// console.log(returnValue);

// const mappedArray = myArray.map(x => x + 10);
// console.log(myArray);
// console.log(mappedArray);
const mappedArray = myArray.map(element => element + 5).map((element) => { return element * 100} ).map(x => x - 5);
console.log(mappedArray);
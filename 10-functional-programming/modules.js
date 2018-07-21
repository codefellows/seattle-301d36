'use strict';

// MODULE PATTERN

var cats = {};

((module, condition) => {
  var gregor = 'is cute';
  var hound = 'bites a lot';
  var importantInformation = 'Gregor is cute';

  module.importantInformation = importantInformation; 
  module.number = 1;

 })(cats,1); //iife

 console.log(cats);

console.log(cats.importantInformation);

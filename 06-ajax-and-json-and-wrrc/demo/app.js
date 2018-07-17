'use strict';
// Vinicio - This line will work just fine
// $.get('data.json', data => console.log(data));

// Vinicio - This line will work just fine
//$.getJSON('data.json', data => console.log(data));

// Vinicio - This line will work just fine
//$.getJSON('data.txt', data => console.log(data));

$.getJSON('data.json')
  .then((data) => {
    // Vinicio - HERE I CAN DO ANYTHING I WANT WITH THE DATA
    for(let articleIndex in data) {
      console.log('I am reading a new value from the request');
      console.log(data[articleIndex]);
      let newArticle = new Article();
    }
  })
  .fail((error) => {
    console.error(error);
  });
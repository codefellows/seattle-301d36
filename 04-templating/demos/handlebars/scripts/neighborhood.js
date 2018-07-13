'use strict';

let neighborhoods = [];

// REVIEW: This is another way to use a constructor to duplicate an array of raw data objects
function Neighborhood (rawDataObject) {
  for (let key in rawDataObject) {
    this[key] = rawDataObject[key];
  }
};

Neighborhood.prototype.toHtml = function() {
  // 1. Get the template from the HTML document
  let template = $('#neighborhood-template').html();
  // 2. Use Handlebars to "compile" the HTML
  let templateRender = Handlebars.compile(template);
  // 3. Do not forget to return the HTML from this method
  return templateRender(this);
};

// Add neighborhoodObjects to our array
neighborhoodDataSet.forEach(function(neighborhoodObject){
  neighborhoods.push(new Neighborhood(neighborhoodObject));
});

// Adam - Same exact function as above but in arrow notation
// neighborhoodDataSet.forEach(neighborhoodObject => neighborhoods.push(new Neighborhood(neighborhoodObject)));

// Add our neighborhoodObjects to our HTML
neighborhoods.forEach(function(item){
  $('#neighborhoods').append(item.toHtml());
});

// Adam - Same exact function as above but in arrow notation
// neighborhoods.forEach(item => $('#neighborhoods').append(item.toHtml));
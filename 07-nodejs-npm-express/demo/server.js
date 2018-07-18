'use strict';
 // VINICIO - ALL OF THIS FILE IS THE CONTROLLER

// Vinicio - this is just a normal JS file, but we know it's tho controller based on how it's used (i.e. Who runs the file)

// Vinicio - the require function is the generic way to imprort packages
const express = require('express');
const PORT = 3000;
const app = express(); // Vinicio - this needs to be called because of the DOCUMENTATION

// Vinicio - From this line, I can use APP to create any HTTP handler / listener / route

// Vinicio - this is telling express to use the .public folder to send pictures back to the view
app.use(express.static('./public'));

// Vinicio - app.get is how we listen for specific requests
// Vinicio - 'show-me-a-message' would be the last part of a URL
app.get('/message',(request, response) => {
  console.log('HEY! we just got a GET REQUEST');
  response.send('<h1>HELLO FROM THE OTHER SIDE OF A FULL-STACK APPLICATION</h1>');
});

app.get('/hound',(request, response) => {
  // CALL AN API
  // CALCULATE SOMETHING
  response.sendFile('/public/hound-v2.html', {root: '.'});
});

app.delete('/message',(request, response) => {
  // DO SOMETHING
});

// Vinicio - Starting the WRRC (Web Request-Response Cycle)

app.listen(PORT,() => {
  console.log(`THE SERVER IS UP ON PORT ${PORT}`);
});


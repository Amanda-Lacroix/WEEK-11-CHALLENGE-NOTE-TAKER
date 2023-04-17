// To use Express.js
const express = require('express');
const app = express ();
const PORT = 3001;

// Middleware that defaults to serve the files in the Public folder
app.use(express.static('public'));

  
  app.listen(PORT)
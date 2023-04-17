// To use Express.js
const express = require('express');
const app = express ();
const PORT = 3001;
const path = require('path');

// Middleware that defaults to serve the files in the Public folder
app.use(express.static('public'));

// The GET Express.js routes for the index.html & notes.html
app.get('/notes', (req, res) => 
res.sendFile(path.join(__dirname, 'public/notes.html')));

app.get('/index', (req, res) => 
    res.sendFile(path.join(__dirname, 'public/index.html')));
  
app.listen(PORT, () => {
console.log ('Test-it is running')
});
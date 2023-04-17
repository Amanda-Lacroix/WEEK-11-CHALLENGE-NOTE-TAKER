// To use Express.js
const express = require('express');
const path = require('path');
const app = express ();
const PORT = 3000;


// Middleware that defaults to serve the files in the Public folder
app.use(express.static('public'));

app.get('/', (req, res) => res.send('Go to /index or /notes'));

// The GET Express.js routes for the index.html & notes.html

app.get('/index', (req, res) => 
    res.sendFile(path.join(__dirname, 'public/index.html')));

app.get('/notes', (req, res) => 
    res.sendFile(path.join(__dirname, 'public/notes.html')));
  
app.listen(PORT, () => {
console.log ('Test-running on 3000')
});

// To use Express.js
const express = require('express');
const path = require('path');
const app = express ();
const PORT = 3001;

// To use the JSON file
// const notes = require('./db.json')

// Middleware that defaults to serve the files in the Public folder
app.use(express.static('public'));

// Route for default
app.get('/', (req, res) => res.send('Go to /index or /notes'));

// The GET Express.js routes for the index.html & notes.html
app.get('/index', (req, res) => 
    res.sendFile(path.join(__dirname, 'public/index.html')));

app.get('/notes', (req, res) => 
    res.sendFile(path.join(__dirname, 'public/notes.html')));

// Redirection route if user tries to get a route that doesnt exist
// app.get('*', (req, res) =>
// res.send ('public/index.html'));

// Listening for connections
app.listen(PORT, () => 
console.log(`Running on http://localhost:${PORT}`));
    
  
// To use Express.js
const express = require('express');
const path = require('path');
const app = express ();
const PORT = 3001;
// The module to interact with the file system
const fs = require('fs');
// The NPM to create the unique ids
const uuid = require('uuid');

// To use the JSON file
// const notes = require('./db.json')

// Middleware that defaults to serve the files in the Public folder
app.use(express.static('public'));
// Middleware for the random id
app.use(express.urlencoded({ extended: true }));
// Middleware for JSON
app.use(express.json());

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

// API routes
app.get('/api/notes', (req, res) => {
  fs.readFile(path.join(__dirname, 'db/db.json'), 'utf8', (err, data) => {
    if (err) throw err;
    res.json(JSON.parse(data));
  });
});

  app.post('/api/notes', (req, res) => {
    const newNote = req.body;
    newNote.id = uuid.v4();
    
    fs.readFile(path.join(__dirname, 'db/db.json'), 'utf8', (err, data) => {
      if (err) throw err;
      
      const notes = JSON.parse(data);
      notes.push(newNote);
      
      fs.writeFile(path.join(__dirname, 'db/db.json'), JSON.stringify(notes), (err) => {
        if (err) throw err;
        res.json(newNote);
      });
    });
});

// To delete notes
app.delete('/api/notes/:id', (req, res) => {
  const {id} = req.params;

  fs.readFile(path.join(__dirname, 'db/db.json'), 'utf8', (err, data) => {
    if (err) throw err;
    
    const notes = JSON.parse(data);
    notes.push(newNote);
    
    fs.writeFile(path.join(__dirname, 'db/db.json'), JSON.stringify(notes), (err) => {
      if (err) throw err;
      res.json(newNote);
    });
  });
});


// Listening for connections
app.listen(PORT, () => 
console.log(`Running on http://localhost:${PORT}`));
    
  
const express = require('express');
const app = express();
const PORT = 3000 || process.env.PORT;
const mysql = require('mysql2');

// express.static(root, [options])
// The root argument specifies the root directory from which to serve static assets.

app.use(express.static('client/dist'));
app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

// need app.get middleware
// app.get(path, callback [, callback ...])

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'moviesdb'
});

app.get('/api/movies/search', (req, res) => {
  // express method to parse the url
  // log request.params
  var { term } = req.query;
  var query = 'SELECT * FROM movies WHERE title = ?';
  var queryArgs = [term];

  connection.query(
    query, queryArgs, function(err, results) {
      if (err) {
        res.status(400).send(err);
      } else {
        res.send(JSON.stringify(results));
      }
    }
  )
});

app.get('/api/movies', (req, res) => {
  var query = 'SELECT * FROM movies';

  connection.query(
    query, function(err, results) {
      if (err) {
        res.status(404).send(err);
      } else {
        res.send(JSON.stringify(results));
      }
    }
  )
});

app.post('/api/movies', (req, res) => {
  console.log('req.body:::', req.body);
  var { title } = req.body;
  var query = 'INSERT INTO movies VALUES (null, ?)';
  var queryArgs = [title];

  connection.query(
    query, queryArgs, function(err, results) {
      if (err) {
        res.status(404).send(err);
      } else {
        res.status(201).send(results);
      }
    }
  )
});


/*

sub-problem 1: create a schema.sql database (done)a
sub-problem 2: design the schema for the database (done)
  2a: diagram the flow of data in the movie list app. What info will need to be stored in the database? (done)
  2b: determine the tables that will be needed, their values and primary key/foreign key relationships (done)
sub-problem 3: Build an express get route that returns all the movies from the database (done)
  3a: buiild the connection from index.js to mysql server (done)
sub-problem 4: Refactor React App to fetch the movies from this route (done)
sub-problem 5: Write an /api/movies/search?term= get route that returns movies from the database matching the searched term (done)
  5a: write an express get function (done)
sub-problem 6: add user input movie to the server
  6a: connect handleUserInputs to the server and pass a post request with the data input by the user (done)
  6b: parse the post request server side getting the user movie (done)
  6c: add movie to database (wip)
  6d: re-render to show added movie (next)




INSTRUCTIONS:
  Use the documentation first for express and mysql driver (also see old version that should be compatible and more friendly docs) spend 10-20 minutes only on official docs. Remember you can google site:express.js to search only a site. (Same for React)
  After that use the internet, do an unbounded google search and research for 10-20 minutes.
  After that use staff or group debugging to move you forward. Trace your found answer back to original documentation.
*/
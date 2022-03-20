const moviesController = require('../controllers/movies');
const connection = require('../db/index.js');

module.exports = {
  getAll: function(callback) {
    
    var query = 'SELECT * FROM movies';

    connection.query(query, function(err, data) {
      if (err) {
        callback(err);
      } else {
        callback(null, data);
      }
    });
  },

  create: function(title, callback) {

    var query = 'INSERT INTO movies VALUES (null, ?)';
    var queryArgs = [title];

    connection.query(query, queryArgs, function(err, response) {
      if (err) {
        callback(err);
      } else {
        callback(null, response);
      }
    });
  }
}
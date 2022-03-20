const searchController = require('../controllers/search.js');
const connection = require('../db/index.js');

// set the query in here and pass in terms

module.exports = {
  find: function(term, callback) {
    var query = 'SELECT * FROM movies WHERE title LIKE ?';
    var queryArgs = [`%${term}%`];

    connection.query(query, queryArgs, function(err, results) {
      if (err) {
        callback(err)
      } else {
        callback(null, results);
      }
    });
  }
}
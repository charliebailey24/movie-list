const index = require('../index.js');
const moviesModel = require('../models/movies');

module.exports = {

  get: function(req, res) {

    moviesModel.getAll(function(err, data) {
      if (err) {
        res.status(404).send(err);
      } else {
        res.send(JSON.stringify(data));
      }
    });
  },

  post: function(req, res) {

    var { title } = req.body;
    moviesModel.create(title, function(err, response) {
      if (err) {
        res.status(404).send(err);
      } else {
        res.status(201).send(response);
      }
    });
  }
}
const index = require('../index.js');
const searchModel = require('../models/search.js');

// strip the terms off the req in here

module.exports = {
  get: function(req, res) {

    var { term } = req.query;
    searchModel.find(term, function(err, data) {
      if (err) {
        res.status(404).send(err);
      } else {
        res.send(JSON.stringify(data));
      }
    })
  }
}
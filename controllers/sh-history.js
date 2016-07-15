var config = require('config');
var debug = require('debug')('mdwCatch');
var db = require('../commons/db');

function SearchHistry (req, res, next) {
  var collection = config.get('serverDb.collectionCatch');
  db.find(collection, {}).then((hs) => {
      res.json(hs);
  })
  .catch(next);
}

module.exports =  SearchHistry;

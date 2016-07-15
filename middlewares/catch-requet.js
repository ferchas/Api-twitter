var config = require('config');
var mongojs = require('mongojs');
var db = require('../commons/db');
var debug = require('debug')('mdwCatch');

function CatchRequet (req, res, next) {
  debug('Init catch request', req.query);
  var collection = config.get('serverDb.collectionCatch');
  db.save(collection, {
    data:new Date(),
    query: req.query
  });
  next();
}

module.exports =  CatchRequet;

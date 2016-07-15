var mongojs = require('mongojs');
var config = require('config');

var debug = require('debug')('commons');

var Db = function () {
  debug('Init commons db');
  this.myDB = mongojs(config.get('serverDb.host'));
};

Db.prototype.find = function (collection, sentence) {
  debug('Commons Db sentence : ' + sentence);
  return new Promise((resolve, rejec) => {
    var mycollection = this.myDB.collection(collection);
    mycollection.find(sentence, (err, docs) => {
      if(!err){
        debug('Commons Db Resul sentence ok ');
        resolve(docs);
      } else {
          rejec(err);
      }
    });
  });
};

Db.prototype.save = function (collection, sentence) {
  debug('Commons Db sentence to save: ' + sentence);
  return new Promise((resolve, rejec) => {
    var mycollection = this.myDB.collection(collection);
    mycollection.save(sentence);
    debug('Commons Db Save sentence ok ');
    resolve(docs);
  });
};

module.exports =  new Db();

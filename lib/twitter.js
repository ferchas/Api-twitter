var TwitterNpm = require('twitter');
var config = require('config');

var debug = require('debug')('libTwitter');

var Twitter = function () {
  debug('Init lib Twitter');
  this.client = new TwitterNpm({
    consumer_key: config.get('twitter.key'),
    consumer_secret: config.get('twitter.secret'),
    access_token_key: config.get('twitter.token'),
    access_token_secret:  config.get('twitter.token_secret'),
  });
};

Twitter.prototype.find = function (sentence) {
  debug('Finde sentence : ' + sentence);
  return new Promise((resolve, rejec) => {
    this.client.get('search/tweets', {q: sentence}, function(error, tweets) {
      if(!error){
        debug('Resul sentence ok ');
        resolve({sentence:sentence, date:tweets});
      } else {
          rejec(error);
      }
});


  });
};

module.exports =  new Twitter();

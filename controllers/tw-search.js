"use strict";

var express = require('express');
var twitts = require('../lib/twitter');

function Search (req, res, next) {
  twitts.find(req.query.sentence)
    .then((tw) => {
      res.json(tw);
    })
    .catch(next);
}

module.exports =  Search;

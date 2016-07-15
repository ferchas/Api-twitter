var express = require('express');
var router = express.Router();
var tSearch = require('../controllers/tw-search');
var shHistory= require('../controllers/sh-history');
var catchRequet = require('../middlewares/catch-requet');

// test route to make sure everything is working (accessed at GET http://localhost:5050/api)
router.get('/', function(req, res) {
    res.json({ message: 'welcome to our api!' });
});

router.get('/search',catchRequet,tSearch);
router.get('/search-history', shHistory);

module.exports = router;

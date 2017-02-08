var express = require('express');
var router = express.Router();
var userDaoControl= require('../controls/useDaoControl.js');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/getuserlist', function(req, res, next) {
  userDaoControl.get(req,res,next);
});

module.exports = router;

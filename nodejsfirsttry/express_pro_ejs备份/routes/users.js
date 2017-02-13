var express = require('express');
var router = express.Router();
var userDaoControl= require('../controls/useDaoControl.js');

/* GET users listing. */
router.get('/:name', function(req, res, next) {
  res.render('users',{
  	name:req.params.name
  });
});
router.get('/getuserlist', function(req, res, next) {
  userDaoControl.get(req,res,next);
});

module.exports = router;

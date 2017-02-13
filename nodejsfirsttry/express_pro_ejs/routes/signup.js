var express = require('express');
var router = express.Router();

var checkNotLogin = require('../middlewares/check').checkNotLogin;

// GET /signup 注册页
router.get('/', function(req, res, next) {
  res.render('signup',{ user: 'JasonM的木屋' });
});

// POST /signup 用户注册
router.post('/', checkNotLogin, function(req, res, next) {
  res.send('success');
});

module.exports = router;
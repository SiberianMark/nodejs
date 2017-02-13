var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'JasonM的木屋' });
});
router.get('/me',function(req,res,next){
	res.sendfile('./web/me/index.html');
});


module.exports = router;

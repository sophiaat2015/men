var express = require('express');
var router = express.Router();

var request = require('request');

var tomcat = require('../modules/tomcat.js');

/* whole path looks like: /test/user/select/id */
router.get('/', function(req, res, next) {
  res.render('test', { title: '智慧出行管家Test Page' });
});

router.get('/user/select/:id', function(req, res, next){
    var id  = req.params.id;
    var url = tomcat.getUrl() + 'test/user/select/' + id;
    request(url).pipe(res);
});

module.exports = router;

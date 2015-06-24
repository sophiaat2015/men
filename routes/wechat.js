var express = require('express');
var router = express.Router();
var request = require('request');
var crypto = require('crypto');
var url = require('url');


function checkSignature(signature,timestamp,nonce,token){
    var array = new Array();
    array[0] = timestamp;
    array[1] = nonce;
    array[2] = token;
    array.sort();
    var hasher = crypto.createHash('sha1');
    var msg = array[0]+array[1]+array[2];
    hasher.update(msg);
    var msg = hasher.digest('hex');  // 计算SHA1值
    if(msg === signature){
        return true;
    }else{
        return false;
    }
}

var config = {
    token: 'nigcbd'
};


/*  */
router.get('/', function(req, res, next) {
    var url_parts = url.parse(req.url, true);
    var query = url_parts.query;
    var checkResult = false;

    var signature = query.signature;
    var timestamp = query.timestamp;
    var nonce     = query.nonce;
    var echostr   = query.echostr;

    var token = config.token;
    checkResult = checkSignature(signature, timestamp, nonce, token

    if (checkResult) {
        res.send(echostr);
    }else{
        console.log('微信接入验证失败');
        res.send(null);
    }
});

module.exports = router;

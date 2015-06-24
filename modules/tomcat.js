/**
 * Node服务的一些配置
 */

var tomcat = {};

tomcat.IP = '121.40.236.187';

tomcat.port = 8888;

tomcat.getUrl = function(){
    var url = 'http://' + this.IP + ':' + this.port + '/';
    return url;
}

module.exports = tomcat;

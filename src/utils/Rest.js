/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

var request = require('superagent');

/*****
*http://localhost:3000/api/query/proxy?proxyUrl=/FreeGuideService/InsertFreeGuideForJs
*
*
***/
function get(url,callBack){
  request
  .get(window.global.host+'api/query/proxy?proxyUrl=' + url)
  .end(function(err, res){
    callBack(res);
    // Calling the end function will send the request
  });
}
//window.location.host + 
function post(url,reqData,callBack) {
  var purl = window.global.host+'api/query/proxy?proxyUrl=' + url;
    request
    .post(purl)
    .set('X-API-Key', 'foobar')
    .set('Access-Control-Allow-Origin', '*')
    .send(JSON.stringify(reqData))
    .end(function(err, res){
      callBack(res);
      // Calling the end function will send the request
    });
} 

/**
 * 发布正式环境用
 * @param  {[type]} url      [description]
 * @param  {[type]} callBack [description]
 * @return {[type]}          [description]
 */
/*function get(url,callBack){
  request
  .get('http://node.rrliuxue.com/api/query/proxy?proxyUrl=' + url)
  .end(function(err, res){
    callBack(res);
    // Calling the end function will send the request
  });
}

function post(url,reqData,callBack) {

    request
    .post('http://node.rrliuxue.com/api/query/proxy?proxyUrl=' + url)
    .set('X-API-Key', 'foobar')
    .set('Access-Control-Allow-Origin', '*')
    .send(JSON.stringify(reqData))
    .end(function(err, res){
      callBack(res);
      // Calling the end function will send the request
    });
}*/
export default { post,get };

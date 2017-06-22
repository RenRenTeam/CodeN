/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import { Router } from 'express';
import db from '../core/Database';
var http = require('http');
var url = require('url');
var fs = require('fs');
var qs = require('querystring');
var request = require('request');
//var request = require('superagent');
const router = new Router();

router.get('/', async (req, res, next) => {
  try {
    let path = req.query.path;

    if (!path) {
      res.status(400).send({error: `The 'path' query parameter cannot be empty.`});
    }

    let page = await db.getPage(path);

    if (page) {
      res.status(200).send(page);
    } else {
      res.status(404).send({error: `The page '${path}' is not found.`});
    }
  } catch (err) {
    next(err);
  }
});

router.post('/proxy', async (req, res, next) => {
    try {
      var proxyUrl = "";
      if (req.url.indexOf('?') > -1) {
          proxyUrl = "http://service.shenyuan.org/API.aspx?api=" + req.query.proxyUrl;
          console.log(proxyUrl);
      }

      //proxyUrl = "http://121.43.233.53:8080/hello";
      if (req.method === 'POST') {
          var post = '';     //定义了一个post变量，用于暂存请求体的信息

        req.on('data', function(chunk){    //通过req的data事件监听函数，每当接受到请求体的数据，就累加到post变量中
            post += chunk;
        });
        //req.write(require('querystring').stringify(post));
        req.on('end', function(){    //在end事件触发后，通过querystring.parse将post解析为真正的POST请求格式，然后向客户端返回。
            //post = qs.parse(post);
            //post = JSON.stringify(post);

            console.log(post);
            request({
                      method: 'POST',
                      url: proxyUrl,
                      form: post,
                      headers:{
                        "Content-Type":"text/json"
                      }
                  }).pipe(res);
        });
      }
    }
    catch (err) {
      next(err);
    }
  });


  /** 代理跨域请求Service
  *http://localhost:3000/api/query/proxy?proxyUrl=/FreeGuideService/InsertFreeGuideForJs
  *
  *
  **/
  router.get('/proxy', async (req, res, next) => {
      try {
        var proxyUrl = "";
        if (req.url.indexOf('?') > -1) {
            proxyUrl = "http://service.shenyuan.org" + req.query.proxyUrl;
            console.log(proxyUrl);
        }
        if (req.method === 'GET') {
            request.get(proxyUrl).pipe(res);
        }
      }
      catch (err) {
        next(err);
      }
    });
  router.get('/vcode', async (req, res, next) => {
      try {
          var geetest = require('geetest')('69982d105aec93bec5416768af2cedd0 ', 'b6fa2ad4ca055777f9fd93431ad542e1','http://api.geetest.com/');
          geetest.register(function(err, challenge) {
              if (err) {
                  //network error
                  return;
              }
              if(challenge) {
                  //deal with it
                  //res.json({challenge: challenge});
                  console.log('challenge' + challenge);
                  res.send(200, challenge);
              }else{
                  console.log('null');
                  res.send(200, 'null');
              }
          });
          console.log('next');
      }
      catch (err) {
          next(err);
      }
  });

export default router;

/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import withStyles from '../../decorators/withStyles';
import styles from './SmallMenu.less';
import $ from 'jquery'
import LoginPage from '../LoginPage/LoginPage.js';
var Common = require('../../utils/Common.js');
import Link from '../../utils/Link';

@withStyles(styles)
class SmallMenu extends React.Component{
  bakTop(){

    $("html,body").animate({scrollTop:0},200);
  }
  login(){

    document.getElementById("nodeRenRen_Login").innerHTML = "";

    React.render(<LoginPage />, document.getElementById('nodeRenRen_Login'));


  }
  render() {
    return (
        <div>
          <div className="small-menu">
              <div className="home-menu"><a href="/"><div className="icon"></div></a></div>
              <div className="top-menu" onClick={this.bakTop.bind(this)}><div className="icon"></div></div>
              <div className="qq-menu">
                      <div className="icon"></div>
                      <div className="qq-content">
                          <div className="title"></div>
                          <div>
                              <ul>
                                  <li>
                                      <a href="http://wpa.qq.com/msgrd?v=3&uin=207506653&site=qq&menu=yes" title="点击这里咨询老师" target="_blank">
                                          <img src="http://passport.shenyuan.org/WebResources/Default/images/qq.png" />少少老师
                                      </a>
                                  </li>
                                  <li>
                                      <a href="http://wpa.qq.com/msgrd?v=3&uin=3158217214&site=qq&menu=yes" title="点击这里咨询老师" target="_blank">
                                          <img src="http://passport.shenyuan.org/WebResources/Default/images/qq.png" />飞飞老师
                                      </a>
                                  </li>
                                  <div className="clear"></div>
                              </ul>
                              <div className="title"></div>
                              <ul>
                                  <li>
                                      <a href="http://wpa.qq.com/msgrd?v=3&uin=1423401931&site=qq&menu=yes" title="点击这里咨询老师" target="_blank">
                                          <img src="http://passport.shenyuan.org/WebResources/Default/images/qq.png" />牛牛老师
                                      </a>
                                  </li>
                                  <li>
                                      <a href="http://wpa.qq.com/msgrd?v=3&uin=1406786634&site=qq&menu=yes" title="点击这里咨询老师" target="_blank">
                                          <img src="http://passport.shenyuan.org/WebResources/Default/images/qq.png" />文文老师
                                      </a>
                                  </li>
                                  <div className="clear"></div>
                              </ul>
                              <div className="clear"></div>
                          </div>
                          <div className="clear"></div>
                      </div>
              </div>
              <div className="weixin-menu">
                  <div className="icon"></div>
                  <div className="weixin-content">
                      <div className="title">
                          扫描二维码<br />
                          关注人人留学公众帐号
                      </div>
                      <div className="qr"><img src="http://passport.shenyuan.org//WebResources/Default/images/qr/weixin.jpg" /></div>

                  </div>
              </div>
              <div className="tel-phone">
                <div className="icon"></div>
                <div className="tel-content">
                      <div className="title">
                         <img src="http://passport.shenyuan.org//WebResources/Default/images/new_tel.png" />
                      </div>
                  </div>
              </div>
               <div className="user-menu logged hidden">
                  <div className="login-button"><div className="icon">登 录</div></div>
                  <div className="user"><a href="http://passport.rrliuxue.com/user/"><div className="icon"></div></a></div>
                  <div className="login-tip"></div>
              </div>
          </div>
        </div>
    );
  }
  //dom加载完调用
  componentDidMount(){


  }
}

export default SmallMenu;

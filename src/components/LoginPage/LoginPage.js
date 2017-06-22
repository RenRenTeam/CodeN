/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import $ from 'jquery';
import styles from "./LoginPage.less";
import withViewport from '../../decorators/withViewport';
import withStyles from '../../decorators/withStyles';
import Link from '../../utils/Link';
var Common = require('../../utils/Common.js');
var Rest = require('../../utils/Rest.js');

@withStyles(styles)
class LoginPage  extends React.Component{
   constructor(props) {
        super(props);

        this.state = {
            LoginWay:'zhanghao'
        };
    }
  closeLoginAlert(){
    document.getElementById("nodeRenRen_Login").innerHTML = "";
    $(".reveal-modal-bg").hide();
  }
  LoginNow(){

    var txtUserName = $("#txtUserName").val();
    var pwd = $("#txtPassword").val();
    var email;
    var phone;

    var telReg = !!txtUserName.match(/^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/);

    var emailReg  = !!txtUserName.match(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/);

    if(telReg == true && pwd != ""){

      phone = txtUserName;

      email=""

    }
    else if(emailReg == true && pwd != ""){

      email = txtUserName;

      phone=""

    }else{

      Common.alert("请输入正确的用户名或密码！");
      return false;
    }


    Rest.post('/MembersNodeJsService/Login',
        {"CallBack":Date.now(),"ChildEntity":{
          "LoginPwd":pwd,"Email":email,"Name":name,"Phone":phone}}
        ,function(responseText){
          if(responseText.text == "用户名或密码错误"){

            Common.alert(responseText.text);
          }else{
            //console.log(responseText.text);
            Common.cookieManager("userLoginSuccess",responseText.text,new Date().getTime() + (1 * 24 * 60 * 60 * 1000));

            document.getElementById("nodeRenRen_Login").innerHTML = "";

            $(".reveal-modal-bg").hide();

            Common.alert("登录成功！");

            $(".user-menu").removeClass("hidden");

            $(".user-menu").addClass("logged");

            $(".user-menu-exit").show();

          $("#isLoginMenU-no").hide();

          $("#isLoginMenU-yes").show();
          }

    });

  }
  chooseWay(e){
    if(e.target.innerHTML == "二维码登录"){
      this.setState({
            LoginWay:"qrcode"
        });
    }else if(e.target.innerHTML == "邮箱登录"){
      this.setState({
            LoginWay:"email"
        });
    }else{
      this.setState({
            LoginWay:"zhanghao"
        });
    }
  }
  LoginEmailNow(e){
    var email = $("#txtEmailName").val();
    var emailReg  = !!email.match(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/);

    if(!emailReg){

      Common.alert("请输入正确的邮箱！");

    }else{


    $(".user-menu").removeClass("hidden");
    }
  }
  render() {
    return (
      <div id="loginBox" className="reveal-modal">
          <div className="login-box">
              <div className="login-tabs">
                  <div className={this.state.LoginWay == "qrcode" ? "item qr selected" :"item qr"}data-content="#qr" onClick={this.chooseWay.bind(this)}>二维码登录</div>
                  <div className={this.state.LoginWay == "zhanghao" ? "item selected" :"item"} data-content="#account" onClick={this.chooseWay.bind(this)}>账号登录</div>
                  <div className="clear"></div>
                  <div className={this.state.LoginWay == "qrcode" ? "hr qr" : this.state.LoginWay == "email" ? "hr email":"hr account"}>
                      <div className="line"></div>
                      <div className="base-line"></div>
                  </div>
              </div>
              <div className="login-content">
                  <div id="account" className={this.state.LoginWay == "zhanghao" ? "login-content-box" :"login-content-box hide"}>
                      <div id="loginForm">
                          <dl>
                              <dd>
                                  <input type="text" id="txtUserName" placeholder="手机号/邮箱" />
                              </dd>
                              <dd>
                                  <input type="password" id="txtPassword" placeholder="密码" />
                              </dd>
                              <dd>
                                  <div className="action">
                                      <button className="button-line" onClick={this.LoginNow.bind(this)}>登 录</button>
                                      <div><span>*</span><a href="/FindPassword" onClick={Link.handleClick} id="forgetpass">忘记密码</a></div>
                                  </div>
                              </dd>
                          </dl>
                      </div>
                  </div>
                  <div id="qr" className={this.state.LoginWay == "qrcode" ? "login-content-box" :"login-content-box hide"}>
                    <h4>手机扫码&nbsp;&nbsp;安全防盗</h4>
                    <div className="qr-pic"><img src="http://passport.shenyuan.org/WebResources/Default/images/login-box/weixin.jpg" /></div>
                    <div className="description">使用手机扫描二维码登录</div>
                </div>
              </div>
              <div className="cooperate-box">
                  <h5>使用合作网站登录</h5>
                  <div className="">
                    <ul>
                        <li><a href="javascript:void(0)" title="功能暂未开放"><img src="http://passport.shenyuan.org/WebResources/Default/images/login-box/qq.png" /></a></li>
                        <li><a href="javascript:void(0)" title="功能暂未开放"><img src="http://passport.shenyuan.org/WebResources/Default/images/login-box/weibo.png" /></a></li>
                        <li><a href="javascript:void(0)" title="功能暂未开放"><img src="http://passport.shenyuan.org/WebResources/Default/images/login-box/renren.png" /></a></li>
                        <li><a href="javascript:void(0)" title="功能暂未开放"><img src="http://passport.shenyuan.org/WebResources/Default/images/login-box/baidu.png" /></a></li>
                        <li><a href="javascript:void(0)" title="功能暂未开放"><img src="http://passport.shenyuan.org/WebResources/Default/images/login-box/qzone.png" /></a></li>
                    </ul>
                  </div>
                  <div className="clear"></div>
              </div>
              <div className="register-box">还没有账号，<a href="/Register" target = "_blank">马上注册</a></div>
              <a className="close-reveal-modal" onClick={this.closeLoginAlert.bind(this)}></a>
          </div>
      </div>
    );
  }
  componentDidMount() {
    $(".reveal-modal-bg").show();

  }
}

export default LoginPage;

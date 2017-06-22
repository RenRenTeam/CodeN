/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import styles from './RegisterPage.less';
import withViewport from '../../decorators/withViewport';
import withStyles from '../../decorators/withStyles';
import Link from '../../utils/Link';
import AppActions from '../../actions/AppActions';
import LoginPage from '../LoginPage/LoginPage';
import SmallMenu from '../SmallMenu/SmallMenu';
import $ from 'jquery';
var Common = require('../../utils/Common');
var Rest = require('../../utils/Rest.js');

@withStyles(styles)
class RegisterPage extends React.Component{

  static contextTypes = {
      onSetTitle: PropTypes.func.isRequired
  };

  ConfrimLogin(){

    var form = $("#registerForm");

    var txtPassword = $("#txtPassword").val();
    var txtConfirmPassword = $("#txtConfirmPassword").val();
    var txtUserName = $("#txtUserName").val();
    var txtCode = $("#txtCode").val();
    var email;
    var phone;

    var telReg = !!txtUserName.match(/^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/);

    //var emailReg  = !!txtUserName.match(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/);

    if(telReg == false){

      Common.alert("请输入正确的用户名！");

      return false;

    }
    else if(telReg&&txtCode == ""){

        Common.alert("请输入收到的验证码！");

        return false;

    }
    else if(txtPassword == "" && txtConfirmPassword == ""){
        Common.alert("密码不能为空，请重新输入！");
        return false;

    }
    else if(txtPassword != txtConfirmPassword){

        Common.alert("两次密码不一致，请重新输入！");

        return false;

    }else if(!window.embed_captcha.getValidate()){
            Common.alert('请先拖动完成验证操作!');
            return;
    }else{
        if(telReg == true){

            phone = txtUserName;
            email = "";

        }else if(emailReg == true){

            phone = "";
            email = txtUserName;
        }

        var regSysNo = Common.getCookie("regSysNo");

        Rest.post('/MembersNodeJsService/New_Register',
            {"CallBack":Date.now(),"ChildEntity":{
                "Code":txtCode,"CodeSysno":regSysNo,"LoginPwd":txtPassword,"Phone":phone,"Email":email}}
            ,function(responseText){
                if(responseText.text.indexOf("！") >= 0){

                Common.alert(responseText.text);

                return false;
                }else{
                if(phone.length>0){
                    Common.cookieManager("userLoginSuccess",responseText.text,new Date().getTime() + (1 * 24 * 60 * 60 * 1000));

                    Common.alert("注册成功,3秒后进入首页！");


                    window.setTimeout(function(){
                        window.location.href = '/';
                    },3000);
                }
                else if(email.length>0){
                    $("#OK_submit").attr("disabled","disabled");
                    Common.alert("注册成功,请到邮箱中激活帐号！");
                }

                }
                //console.log(responseText);

        });
    }
}

    buttonClick(self) {

        var speed = 60;
        var timeOut;
        //获取验证码
        var $self = self;
        var text = $self.text();
        var countdown = speed;
        $self.prop("disabled", true);
        $self.text(text + "(" + countdown + ")");
        var result = true;

        function start() {
            countdown--;
            $self.text(text + "(" + countdown + ")");
            if (countdown <= 0) {
                $self.prop("disabled", false);
                $self.text(text);

            } else {
                timeOut = setTimeout(start, 1000);
            }
        }
        if (result) {
            timeOut = setTimeout(start, 1000);
        } else {
            $self.prop("disabled", false);
            $self.text(text);
            if (elment) {
                $(elment).one("click", buttonClick);
            }
        }
    }

    SendPhoneNumber(){
        if(!window.embed_captcha.getValidate()){
            Common.alert('请先拖动完成验证操作!');
            return;
        }else{
            var moblie = $("#txtUserName").val();
            $.ajax({
                url: "http://service.shenyuan.org/MembersNodeJsService/SendSMS/Phone="+moblie+";CallBack=register_jsonpCallback",
                type: "get",
                dataType: "jsonp",
                async: false,
                jsonp: "callbackparam",//传递给请求处理程序或页面的，用以获得jsonp回调函数名的参数名(默认为:callback)
                jsonpCallback: "register_jsonpCallback",//自定义的jsonp回调函数名称，默认为jQuery自动生成的随机函数名
            }).done(function (json) {

                if(json){

                    Common.cookieManager("regSysNo",json.Message,new Date().getTime() + (1 * 24 * 60 * 60 * 1000));

                    var self = $("#getCodeNo");

                    this.buttonClick(self);

                }else{

                    return false;
                }
            }.bind(this));
        }
  }

  render() {
    let title = '注册－人人留学';
    this.context.onSetTitle(title);
    return (
      <div>
        <div id="loginPagerDiv">
            <SmallMenu />
        </div>
        <header>
          <div className="header-box">
              <div className="logo"><a href="/"><img src="http://passport.shenyuan.org/WebResources/Default/images/register/logo.png" /></a></div>
              <div className="hr"></div>
              <div className="title"><h1>用户注册</h1></div>
              <div className="clear"></div>
          </div>
        </header>
        <section className="register-box">
            <div className="content-box">
                <div className="form">
                    <div className="register-tabs">
                        <div className="item selected" data-content="#account">手机注册</div>
                        <div className="clear"></div>
                        <div className="hr account">
                            <div className="line"></div>
                            <div className="base-line"></div>
                        </div>
                    </div>
                    <div className="register-content">
                        <div id="account" className="register-content-box">
                            <div id="registerForm">
                                <dl>
                                    <dd>
                                        <div className="username"><input type="text" placeholder="手机号" id="txtUserName" /></div>
                                        <div className="getcode"><button id="getCodeNo" type="button" className="button-normal" onClick={this.SendPhoneNumber.bind(this)}>获取验证码</button></div>
                                        <div className="clear"></div>
                                    </dd>
                                    <dd className="getcode">
                                        <input type="text" placeholder="请输入收到的验证码" id="txtCode" />
                                    </dd>
                                    <dd className="password-region">
                                        <input type="password" placeholder="设置密码" id="txtPassword" />
                                    </dd>
                                    <dd className="confirm-password-region">
                                        <input type="password" placeholder="输入密码" id="txtConfirmPassword" />
                                    </dd>
                                    <dd>
                                        <div className="validation-code-input" id="div_id_embed"></div>
                                    </dd>
                                    <dd>
                                        <div className="action"><button className="button-line" id="OK_submit" type="submit" onClick={this.ConfrimLogin.bind(this)}>确 定</button></div>
                                    </dd>
                                    <dd>
                                      <div className="df4b3s">海外用户注册请联系客服邮箱：bwen@rrliuxue.com</div>
                                    </dd>
                                </dl>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="description">已有 2036 位小伙伴加入人人留学,已有账号，<button className="button-line red" id="btnLogin" onClick={this.loginFunc.bind(this)}>马上登录</button></div>
            </div>
        </section>
      </div>
    );
  }
  loginFunc(){
    document.getElementById("nodeRenRen_Login").innerHTML = "";
    React.render(<LoginPage />, document.getElementById('nodeRenRen_Login'));
  }
  componentDidMount() {
    //$("#loginPagerDiv").hide();
    var box = $(".content-box");
    var form = $("#registerForm");

     form.find("#txtUserName").keyup(function () {
        var value = $(this).val();
        if (/^1[\d]{0,10}$/.test(value)) {
            form.find(".getcode").show();
        } else {
            form.find(".getcode").hide();
        }

    }).blur(function () {
        var $self = $(this);
        $self.removeClass("error");
        if($("#txtUserName").val() == ""){

            return false;

        }else{
            var m = $("#txtUserName").val();
            $self.removeClass("error");
            //$("#getCodeNo").removeAttr(disabled);
            $.ajax({
                url: "http://service.shenyuan.org/MembersNodeJsService/New_ExistsByPhone/Phone="+m+";CallBack=successTruePhone_jsonpCallback",
                type: "get",
                dataType: "jsonp",
                async: false,
                jsonp: "callbackparam",//传递给请求处理程序或页面的，用以获得jsonp回调函数名的参数名(默认为:callback)
                jsonpCallback: "successTruePhone_jsonpCallback",//自定义的jsonp回调函数名称，默认为jQuery自动生成的随机函数名
            }).done(function (json) {

                if(!json.Success){

                    alert(json.Message);

                    $self.addClass("error");
                    $("#getCodeNo").prop("disabled", true);
                    return false;

                }else{

                  $("#getCodeNo").prop("disabled", false);
                }
            }.bind(this));
        }
    });


    if (!$('html').hasClass('ie')) {
        box.hover(function () {
            var $this = $(this);
            $this.animate({ height: "820px", top: "-100px" }, 500);
            $this.find(".form").animate({ height: "660px" }, 500, function () {
                $this.find(".action").fadeIn(300);
            });

        });
    }

    $.get(window.global.host + 'api/query/vcode').then(function(challenge){
        window.embed_captcha = new Geetest({ gt: "b6fa2ad4ca055777f9fd93431ad542e1", challenge: challenge, product: "float" }).appendTo("#div_id_embed");
    });
  }
}

export default RegisterPage;

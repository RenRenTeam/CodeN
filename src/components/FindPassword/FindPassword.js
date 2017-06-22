/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import styles from './FindPassword.less';
import withViewport from '../../decorators/withViewport';
import withStyles from '../../decorators/withStyles';
import Link from '../../utils/Link';
import AppActions from '../../actions/AppActions';
import $ from 'jquery';
var Common = require('../../utils/Common');
var Rest = require('../../utils/Rest.js');

@withStyles(styles)
class FindPassword extends React.Component{

  static contextTypes = {
      onSetTitle: PropTypes.func.isRequired
  };

  ConfrimLogin(){

    if(!window.embed_findPassWd.getValidate()){
        Common.alert('请先拖动完成验证操作!');
        return;
    }
    var form = $("#registerForm");

    var txtPassword = $("#txtPassword").val();
    var txtConfirmPassword = $("#txtConfirmPassword").val();
    var txtUserName = $("#txtUserName").val();
    var txtCode = $("#txtCode").val();
    var email;
    var phone;

    var telReg = !!txtUserName.match(/^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/);

    var emailReg  = !!txtUserName.match(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/);

    if(telReg == false && emailReg == false){

      Common.alert("请输入正确的用户名！");

      return false;

    }
    else if(telReg&&txtCode == ""){

        Common.alert("请输入收到的验证码！");

        return false;

    }
    else if(telReg&&txtPassword == "" && txtConfirmPassword == ""){

        Common.alert("密码不能为空，请重新输入！");

        return false;

    }
    else if(telReg&&txtPassword != txtConfirmPassword){

        Common.alert("两次密码不一致，请重新输入！");

        return false;

    }else{

        if(telReg == true){

            phone = txtUserName;
            email = "";

        }else if(emailReg == true){

            phone = "";
            email = txtUserName;
        }
        if(telReg == true){
            var regSysNo = Common.getCookie("regSysNo");
            Rest.post('/MembersNodeJsService/UpdatePasswordByPhone',
                {"CallBack":Date.now(),"ChildEntity":{
                  "Code":txtCode,"CodeSysno":regSysNo,"LoginPwd":txtPassword,"Phone":phone}}
                ,function(responseText){
                  if(responseText.text.indexOf("！") >= 0){
                    Common.alert(responseText.text);
                    return false;
                  }else{
                    if(phone.length>0){
                        Common.alert("修改成功！");
                        window.location.href = '/';
                    }
                  }
                  //console.log(responseText);

            });
        }
        else if(emailReg){
            Rest.post('/MembersNodeJsService/GetEmailUpdatePwd',
                {"CallBack":Date.now(),"ChildEntity":{
                 "Email":email}}
                ,function(responseText){
                  if(responseText.text.indexOf("！") >= 0){
                    Common.alert(responseText.text);
                    return false;
                  }else{
                    $("#OK_submit").attr("disabled","disabled");
                    Common.alert("邮件发送成功，请登录邮箱进行密码修改！");
                  }
            });
        }
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

  render() {
    let title = '找回密码－人人留学';
    this.context.onSetTitle(title);
    return (
      <div>
        <header>
          <div className="header-box">
              <div className="logo"><a href="/"><img src="http://passport.shenyuan.org/WebResources/Default/images/register/logo.png" /></a></div>
              <div className="hr"></div>
              <div className="title"><h1>找回密码</h1></div>
              <div className="clear"></div>
          </div>
        </header>
        <section className="register-box">
            <div className="content-box">
                <div className="form">
                    <div className="register-tabs">
                        <div className="item selected" data-content="#account">找回密码</div>
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
                                        <div className="username"><input type="text" placeholder="手机号/邮箱" id="txtUserName" /></div>
                                        <div className="getcode"><button id="getCodeNo" type="button" className="button-normal" onClick={this.SendPhoneNumber.bind(this)}>获取验证码</button></div>
                                        <div className="clear"></div>
                                    </dd>
                                    <dd className="getcode">
                                        <input type="text" placeholder="请输入收到的验证码" id="txtCode" />
                                    </dd>
                                    <dd className="password-region pwd">
                                        <input type="password" placeholder="设置密码" id="txtPassword" />
                                    </dd>
                                    <dd className="confirm-password-region pwd">
                                        <input type="password" placeholder="输入密码" id="txtConfirmPassword" />
                                    </dd>
                                    <dd>
                                        <div className="validation-code-input"><input type="text" placeholder="验证码" id="txtValidationCode" /></div>
                                        <div className="validation-code-box"><img src="" className="validation-code"/></div>
                                        <div className="clear"></div>
                                    </dd>
                                    <dd>
                                        <div className="validation-code-input" id="findPassWd_embed"></div>
                                    </dd>
                                    <dd>

                                        <div className="action"><button className="button-line" id="OK_submit" type="submit" onClick={this.ConfrimLogin.bind(this)}>确 定</button></div>
                                    </dd>
                                </dl>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="description">已有 2036 位小伙伴加入人人留学,已有账号，<button className="button-line red" id="btnLogin">马上登录</button></div>
            </div>
        </section>
      </div>
    );
  }
    componentDidMount() {

        var box = $(".content-box");
        var form = $("#registerForm");

         form.find("#txtUserName").keyup(function () {
            var value = $(this).val();
            if (/^1[\d]{0,10}$/.test(value)) {
                form.find(".getcode").show();
                form.find(".pwd").show();
            } else {
                form.find(".getcode").hide();
                form.find(".pwd").hide();
            }

        }).blur(function () {
            var $self = $(this);
            $self.removeClass("error");
            if($("#txtUserName").val() == ""){

                return false;

            }else{


            }
        });


        if (!$('html').hasClass('ie')) {
            box.hover(function () {
                var $this = $(this);
                $this.animate({ height: "820px", top: "-100px" }, 500);
                $this.find(".form").animate({ height: "660px" }, 500, function () {
                    $this.find(".action").fadeIn(300);
                });

            }, function () {
                var $this = $(this);
                $this.stop();
                $this.find(".action").stop();
                $this.find(".form").stop();

                $this.find(".action").fadeOut(200);
                $this.animate({ height: "410px", top: "0" }, 500);
                $this.find(".form").animate({ height: "250px" }, 500);
            });
        }
        $.get(window.global.host + 'api/query/vcode').then(function(challenge){
            window.embed_findPassWd = new Geetest({ gt: "b6fa2ad4ca055777f9fd93431ad542e1", challenge: challenge, product: "float" }).appendTo("#findPassWd_embed");
        });
    }
}

export default FindPassword;

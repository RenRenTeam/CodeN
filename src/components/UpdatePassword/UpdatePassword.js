/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import styles from './UpdatePassword.less';
import withViewport from '../../decorators/withViewport';
import withStyles from '../../decorators/withStyles';
import Link from '../../utils/Link';
import AppActions from '../../actions/AppActions';
import $ from 'jquery';
var Common = require('../../utils/Common');  
var Rest = require('../../utils/Rest.js');

@withStyles(styles)
class UpdatePassword extends React.Component{

  static contextTypes = {
      onSetTitle: PropTypes.func.isRequired
  };

    getQueryString(name) { 
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i"); 
        var r = window.location.search.substr(1).match(reg); 
        if (r != null) return unescape(r[2]); return null; 
    }

  ConfrimLogin(){
    var form = $("#registerForm");

    var txtPassword = $("#txtPassword").val();
    var txtConfirmPassword = $("#txtConfirmPassword").val();
    var sysno=this.getQueryString("x");
    if(sysno==null||sysno==""){
        Common.alert("用户不存在，请重新发送邮件！");
        return false;
    }
    else if(txtPassword == "" && txtConfirmPassword == ""){

        Common.alert("密码不能为空，请重新输入！");

        return false;

    }
    else if(txtPassword != txtConfirmPassword){

        Common.alert("两次密码不一致，请重新输入！");

        return false;

    }else{
        var regSysNo = Common.getCookie("regSysNo");
        Rest.post('/MembersNodeJsService/UpdatePasswordByEmail',  
            {"CallBack":Date.now(),"ChildEntity":{
              "SysnoStr":sysno,"LoginPwd":txtPassword}}
            ,function(responseText){
              if(responseText.text.indexOf("！") >= 0){
                Common.alert(responseText.text);
                return false;
              }else{
                Common.alert("修改成功！");
                window.location.href = '/';
              }

        });
    }
  }

  render() {
    let title = '修改密码－人人留学';
    this.context.onSetTitle(title);
    return (
      <div>
        <header>
          <div className="header-box">
              <div className="logo"><a href="/"><img src="http://passport.shenyuan.org/WebResources/Default/images/register/logo.png" /></a></div>
              <div className="hr"></div>
              <div className="title"><h1>修改密码</h1></div>
              <div className="clear"></div>
          </div>
        </header>
        <section className="register-box">
            <div className="content-box">
                <div className="form">
                    <div className="register-tabs">
                        <div className="item selected" data-content="#account">修改密码</div>
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
                                        <div className="action"><button className="button-line" type="submit" onClick={this.ConfrimLogin.bind(this)}>确 定</button></div>
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
  }
}

export default UpdatePassword;

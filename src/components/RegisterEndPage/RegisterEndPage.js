/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import styles from './RegisterEndPage.less';
import withViewport from '../../decorators/withViewport';
import withStyles from '../../decorators/withStyles';
import Link from '../../utils/Link';
import AppActions from '../../actions/AppActions';
import $ from 'jquery';
var Common = require('../../utils/Common');
var Rest = require('../../utils/Rest.js');

@withStyles(styles)
class RegisterEndPage extends React.Component{
    static contextTypes = {
        onSetTitle: PropTypes.func.isRequired
    };

    getQueryString(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) return unescape(r[2]); return null;
    }

    componentWillUnmount() {

    }

    componentDidMount() {
        var box = $(".content-box");
        var form = $("#registerForm");
        var x=this.getQueryString("x");
        Rest.post('/MembersNodeJsService/UpdateMembersStatus',
            {"CallBack":Date.now(),"ChildEntity":{
              "SysnoStr":x}}
            ,function(responseText){
                if(responseText.text.indexOf("！") < 0){
                    Common.cookieManager("userLoginSuccess",responseText.text,new Date().getTime() + (1 * 24 * 60 * 60 * 1000));
                    $("#registerForm").html("<h4 style='color:#000'><a href='http://www.rrliuxue.com/'>激活成功，去首页看看</a></h4>");
                }
                else{
                    $("#registerForm").html("<h4 style='color:#000'>"+responseText.text+"</h4>");
                }
                $("#registerForm").css("text-align","center");
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

    }

    render() {
      let title = '帐号激活－人人留学';
      this.context.onSetTitle(title);
      return (
        <div>
          <header>
            <div className="header-box">
                <div className="logo"><a href="/"><img src="http://passport.shenyuan.org/WebResources/Default/images/register/logo.png" /></a></div>
                <div className="hr"></div>
                <div className="title"><h1>帐号激活</h1></div>
                <div className="clear"></div>
            </div>
          </header>
          <section className="register-box">
            <div className="content-box">
                <div className="form">
                    <div className="register-tabs">
                        <div className="item selected" data-content="#account">邮箱帐号激活</div>
                        <div className="clear"></div>
                        <div className="hr account">
                            <div className="line"></div>
                            <div className="base-line"></div>
                        </div>
                    </div>
                    <div className="register-content">
                        <div id="account" className="register-content-box">
                            <div id="registerForm" >

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

}

export default RegisterEndPage;

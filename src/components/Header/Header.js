/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React from 'react';
import classNames from 'classnames';
import styles from './Header.less';
import withStyles from '../../decorators/withStyles';
import Link from '../../utils/Link';
import HeaderMenu from './HeaderMenu/HeaderMenu.js';
import $ from 'jquery';
import LoginPage from '../LoginPage/LoginPage.js';
var Common = require('../../utils/Common.js');

@withStyles(styles)
class Header extends React.Component{

  constructor(props) {
      super(props);
      this.state={userClick:"one",islogin:"no"};
  }

  changeChoose(e){
    React.render(<HeaderMenu data={e}  click={this.changeChoose.bind(this)}/>,document.getElementById('indexMenu'));
  }

  login(){
    if(Common.getCookie("userLoginSuccess") && Common.getCookie("userLoginSuccess").length > 0){

        Common.cookieManager("userLoginSuccess","");

        $(".user-menu").removeClass("logged");

        $(".user-menu-exit").hide();

        Common.alert("注销成功！");

        $(".user-menu").addClass("hidden");

        $("#isLoginMenU-no").show();

        $("#isLoginMenU-yes").hide();
    }else{
        document.getElementById("nodeRenRen_Login").innerHTML = "";

        React.render(<LoginPage />, document.getElementById('nodeRenRen_Login'));
    }




  }

  render() {
    return (
        <div className={classNames(this.props.className, 'Header')} role="navigation">
          <div className="fullHeader"></div>
          <header className="nav nav_HeadeR sticky-header-pinned">
            <div className="startBorder"></div>
            <div className="nav-box">
              <div className="header-box">
                <div className="logo"><a href="/" onClick={Link.handleClick}><img src={require('./logo.png')} alt="人人留学" /></a></div>
                <div className="language">
                  <div className="line">
                    <a href="/USA" className="first" onClick={Link.handleClick}><img src={require('./USA.png')}/>美国</a>
                    <a href="/UK" onClick={Link.handleClick}><img src={require('./UK.png')} />英国</a>
                  </div>
                  <div>
                    <a href="/Jp" className="first" onClick={Link.handleClick}><img src={require('./JP.png')} />日本</a>
                    <a href="/AUS" onClick={Link.handleClick}><img src={require('./AUS.png')} />澳洲</a>
                  </div>
                </div>
                <div className="menu-box">
                    <div id="indexMenu"></div>

                </div>
                <div className="logAndReg" id="isLoginMenU-no">
                    <span className="spanOne" id="spanOne_isLogin" onClick={this.login.bind(this)}>登录</span>
                    <span><a href="/Register" onClick={Link.handleClick}>注册</a></span>
                </div>
                <div className="logAndReg " id="isLoginMenU-yes">
                    <span className="spanOne" id="spanOne_isLogin" ><a href="http://passport.rrliuxue.com/user/">个人中心</a></span>
                    <span><a onClick={this.login.bind(this)}>注销</a></span>
                </div>
                <div className="clear"></div>
              </div>
              <div className="clear"></div>
            </div>
            <div id="nodeRenRen_Login"></div>
            <div className="reveal-modal-bg"></div>
          </header>
        </div>
    );
  }
  componentDidMount() {
      let pathUrl=window.location.pathname;
      React.render(<HeaderMenu data={pathUrl}  click={this.changeChoose.bind(this)}/>,document.getElementById('indexMenu'));

      isLogin();

      function isLogin() {

        var loginUser = Common.getCookie("userLoginSuccess");

        if(Common.getCookie("userLoginSuccess") && Common.getCookie("userLoginSuccess").length > 0){
           $(".user-menu").removeClass("hidden");
           $("#isLoginMenU-no").hide();
           $("#isLoginMenU-yes").show();
        }else{
            $(".user-menu").addClass("hidden");
           $("#isLoginMenU-no").show();
           $("#isLoginMenU-yes").hide();
        }
      }
      function rrScroll(up,down){
        var scrollTop,bScrollTop;
        window.onscroll = function(e){
          scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
          //console.log(scrollTop);
          //log(e);
          if(typeof bScrollTop == "undefined")
          {
            down(scrollTop);
          }else {
            if(bScrollTop > scrollTop){
              up(scrollTop);
            }else {
              down(scrollTop);
            }
          }
          bScrollTop = scrollTop;
          if (scrollTop > 300) {
              $(".small-menu").fadeIn(300);
          }
          else {
              $(".small-menu").fadeOut(300);
          }
        };
      }

      rrScroll(function(scroll_Var){
          if($(".sticky-header-pinned").hasClass("headerDisnone")){
            $(".sticky-header-pinned").removeClass("headerDisnone");
          }
      },function(scroll_Var){
          if(!$(".sticky-header-pinned").hasClass("headerDisnone")){
            $(".sticky-header-pinned").addClass("headerDisnone");
          }
      });



  }
}

export default Header;

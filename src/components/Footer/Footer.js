/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import styles from './Footer.less';
import withViewport from '../../decorators/withViewport';
import withStyles from '../../decorators/withStyles';
import Link from '../../utils/Link';
import $ from 'jquery';
import SmallMenu from '../SmallMenu/SmallMenu.js';
import LoginPage from '../LoginPage/LoginPage.js';

@withViewport
@withStyles(styles)
class Footer {

  static propTypes = {
    viewport: PropTypes.shape({
      width: PropTypes.number.isRequired,
      height: PropTypes.number.isRequired
    }).isRequired
  };

  render() {
    // This is just an example how one can render CSS
    let { width, height } = this.props.viewport;
    this.renderCss(`.Footer-viewport:after {content:' ${width}x${height}';}`);

    return (
      <div>
        <footer>
          <div className="QR">
            <ul id="QR">
              <li className="weibo">
                <div className="qr-view">
                  <div className="qr-box"><img src="http://passport.shenyuan.org/WebResources/Default/images/qr/weibo.jpg" /></div>
                </div>
              </li>
              <li className="weixin">
                <div className="qr-view">
                  <div className="qr-box"><img src="http://passport.shenyuan.org/WebResources/Default/images/qr/weixin.jpg" /></div>
                </div>
              </li>
              <li className="renren">
              </li>
            </ul>
            <div className="clear"></div>
            <hr />
          </div>
          <div className="clear"></div>
          <div className="menu">
            <ul className="first">
              <li><b>关于</b></li>
              <li><a href="/AboutUs-aboutsUs" onClick={Link.handleClick}>人人简介</a></li>
              <li><a href="/AboutUs-service" onClick={Link.handleClick}>服务特色</a></li>
              <li><a href="/AboutUs-charge" onClick={Link.handleClick}>单向收费</a></li>
              <li><a href="/AboutUs-hero" onClick={Link.handleClick}>英雄招募</a></li>
            </ul>
            <ul className="second">
              <li><b>帮助</b></li>
              <li><a href="/Register" onClick={Link.handleClick}>用户注册</a></li>
              <li><a className="login-button" onClick={this.login.bind(this)}>用户登录</a></li>
              <li><a className="forgotpass-button" href="/FindPassword" onClick={Link.handleClick} >找回密码</a></li>
              <li><a href="/AboutUs-giveMeMes" onClick={Link.handleClick}>给我留言</a></li>
            </ul>
            <ul className="third">
              <li><b>社交</b></li>
              <li><a href="http://weibo.com/u/5395532052?from=myfollow_all" target="_blank">人人日本</a></li>
              <li><a href="http://weibo.com/u/5395532052?from=myfollow_all" target="_blank">人人美国</a></li>
              <li><a href="http://weibo.com/u/5395532052?from=myfollow_all" target="_blank">人人英国</a></li>
              <li><a href="http://weibo.com/u/5395532052?from=myfollow_all" target="_blank">人人澳洲</a></li>
            </ul>
          </div>
          <div className="clear"></div>
          <p id="p_copyRight"></p>
        </footer>
        <SmallMenu />
      </div>
    );
  }

  login(){
    document.getElementById("nodeRenRen_Login").innerHTML = "";

    React.render(<LoginPage />, document.getElementById('nodeRenRen_Login'));
  }

  componentDidMount() {
    document.getElementById("p_copyRight").innerHTML =window.global.cr;
    $("#QR").find("li").hover(function () {
      $(this).addClass("hover");
      $(this).find(".qr-view").fadeIn();
    }, function () {
      $(this).find(".qr-view").hide();
      $(this).removeClass("hover");
    });
  }
}

export default Footer;

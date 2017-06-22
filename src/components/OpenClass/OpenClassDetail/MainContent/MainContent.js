/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import $ from 'jquery';
import TabsBox from '../TabsBox/TabsBox.js';
import YuYue from './YuYue/YuYue.js'
import EveryOneStudy from "./EveryOneStudy/EveryOneStudy.js";
import LeftRec from './LeftRec/LeftRec.js'
var Common = require('../../../../utils/Common.js');
var Rest = require('../../../../utils/rest');

class MainContent extends React.Component {
  ForMatData() {
    var data = this.props.json.RegistEndTimeStr;
    data = data.substring(0, 10);
    var sysNo = this.props.json.Sysno;
    $("#countDownDay").html(data);

    $.ajax({
      url: "http://service.shenyuan.org/AppointmentOpenClassService/SearchForJs/PageIndex=1;PageSize=10;OpenClassSysno=" + sysNo + ";CallBack=leftOpenClass_SuccessCallBack",
      type: "get",
      dataType: "jsonp",
      async: false,
      jsonp: "callbackparam", //传递给请求处理程序或页面的，用以获得jsonp回调函数名的参数名(默认为:callback)
      jsonpCallback: "leftOpenClass_SuccessCallBack", //自定义的jsonp回调函数名称，默认为jQuery自动生成的随机函数名
    }).done(function(json) {

      if (json) {

        React.render(<LeftRec json={json} />, document.getElementById('LeftRec'));

      } else {
        return false;
      }
    }.bind(this));
  }

  GoToYuYue() {

    React.render(<YuYue sysNo = {this.props.json.Sysno}  json={this.props.json}/>, document.getElementById('yuYueAlert'));
  }
  ConfrimPingJia(e) {

    var val = $(".textArea_Nosd").val();

    if (val == "") {

      Common.alert("请先输入评价，再进行提交");

      return false;
    }

    var sysNo = this.props.json.Sysno;

    var memberSysno = "0";

    if (!Common.getCookie("userLoginSuccess")) {

      Common.alert("请先登录后，再进行评价！");

      return false;

    } else {

      memberSysno = Common.getCookie("userLoginSuccess");
    }


    Rest.post('/OpenClassAssessService/InsertOpenClassAssessForJs',
      {
        "CallBack": Date.now(),
        "ChildEntity": {
          "MemberSysnoStr": memberSysno,
          "OpenClassSysno": sysNo,
          "Remark": val
        }
      }
      , function(responseText) {

        var result = parseInt(responseText.text);

        if (result > 0) {

          Common.alert("感谢您的评价！");

          $(".confrimPingJia").attr("disabled", true);

        } else {
          if (responseText.text == "未报名") {
            Common.alert("只有报名的同学才可以进行评价哦！");
          } else {
            Common.alert("评价失败，请稍后再试！");
            Common.errorLog("公开课评论模块 - " + responseText.text);
          }
        }
      });
  }

  render() {
    let str = this.props.json.Title;
    console.log(str);
    if (str.length > 32) {
      str = str.substring(0, 32) + "...";
    }

    let arr = [1];
    let nodes = arr.map(function() {
      return (
        <h2>{str}</h2>
        );
    });
    var imgStr = Common.imageSource();
    return (
      <div>
                <section className="banner">
                    <div className="open-class-info-box">
                        <div className="detail-content">
                            <div className="class-img">
                                <img src={imgStr + this.props.json.ClassImgStr} />
                            </div>
                            <div className="class-description">
                                {nodes}
                                <div className="class-info">
                                    <div className="class-length">
                                        共 <span className="length">{this.props.json.ClassCount}</span> 节｜
                                    </div>
                                    <div className={1 == 1 ? "star " + this.props.json.StarStr + "" : ""}></div>
                                    <div className="enroll">｜  <span className="enroll-number">{this.props.json.AppointmentCount}</span>人报名  ｜  </div>
                                    <div className="clear"></div>
                                </div>
                                <div className="date">时间：{this.props.json.StartDateStr}</div>
                                <div className="price-box"><span className="price">{this.props.json.Cost}</span>￥</div>
                                <div className="period">{this.props.json.TimeRemark}结束</div>
                                <div className="spearker">主讲人：{this.props.json.TeacherName}</div>
                                <div className="count-down" id="countDown">报名结束时间为
                                    <span className="day" id="countDownDay">&nbsp;&nbsp;&nbsp;&nbsp;</span>
                                </div>
                                <div className="action">
                                    <button className="button-line" id="btnSchedule" onClick={this.GoToYuYue.bind(this)}>立即预约</button>
                                </div>
                            </div>
                            <div className="clear"></div>
                        </div>
                        <div className="enroll-record">
                            <h4>报名记录<span> ( {this.props.json.AppointmentCount} )</span></h4>
                            <ul id="LeftRec">

                            </ul>
                        </div>
                        <div className="clear"></div>
                    </div>
                </section>
                <section className="open-class-detail-box">
                    <div className="left-box">
                        <div id="leftTabsBox">

                        </div>


                        <div className="correlation">
                            <h4>学生评价</h4>
                            <textarea className="textArea_Nosd"></textarea>
                            <button className="button-line confrimPingJia" onClick={this.ConfrimPingJia.bind(this)}>确认评价</button>
                            <div className="clear"></div>
                        </div>
                    </div>
                    <div className="right-box">
                        <h3>开课机构</h3>
                        <h4>人人留学网</h4>
                        <div className="content">
                            <div>学生满意评分： <span>{this.props.json.ManYiDu}</span></div>
                            <div>描述一致评分： <span>{this.props.json.YiZhi}</span></div>
                            <div>老师讲解评分： <span>{this.props.json.JiangPing}</span></div>
                            <div>课前服务评分： <span>{this.props.json.FuWu }</span></div>
                        </div>
                        <div className="consultation-telephone"></div>
                        <EveryOneStudy />
                    </div>
                    <div className="clear"></div>
                </section>
                <div id="yuYueAlert"></div>
                <div id="yuYueSuccess"></div>
            </div>
      );
  }
  componentDidUpdate() {
    this.ForMatData();
    React.render(<TabsBox json={this.props.json}/>, document.getElementById('leftTabsBox'));
  }
  componentDidMount() {

    this.ForMatData();
    React.render(<TabsBox json={this.props.json} />, document.getElementById('leftTabsBox'));
  }
}

export default MainContent;

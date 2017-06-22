/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import $ from 'jquery';
import Success from '../Success/Success.js';
var Common = require('../../../../../utils/Common.js');
var Rest = require('../../../../../utils/rest');

class YuYue extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      phoneNum: ""
    };
  }
  closeYuYue() {
    $("#yuYueAlert").html("");
    $(".reveal-modal-bg").hide();
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
  GetCode() {

    var moblie = $("#scheduleForm #txtPhone").val();

    var telReg = !!moblie.match(/^1[\d]{10}$/);

    if (telReg == false) {
      alert("请填写正确的手机号！");
      return false;
    } else {

      $.ajax({
        url: "http://service.shenyuan.org/MembersNodeJsService/SendSMS/Phone=" + moblie + ";CallBack=openClassYuYue_jsonpCallback",
        type: "post",
        dataType: "jsonp",
        async: false,
        jsonp: "callbackparam",
        jsonpCallback: "openClassYuYue_jsonpCallback",
      }).done(function(json) {

        if (json) {

          Common.cookieManager("openClasssysNo", json.Message, new Date().getTime() + (1 * 24 * 60 * 60 * 1000));

          var self = $("#btnGetCode");

          this.buttonClick(self);


        } else {

          return false;
        }
      }.bind(this));

    }
  }
  ConfrimYuYue() {
    var yzm = $("#txtCode").val();

    var phoneNum = $("#txtPhone").val();

    var Sysno = Common.getCookie("openClasssysNo");

    var mail = $("#txtEamil").val();

    var name = $("#txtName").val();

    var openClasssysNo = this.props.sysNo;

    var emailReg = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    var json = this.props.json;

    var memberSysno = "0";

    if (Common.getCookie("userLoginSuccess") != null && Common.getCookie("userLoginSuccess").length > 0) {

      memberSysno = Common.getCookie("userLoginSuccess");
    }

    if (name == "") {
      alert("姓名不能为空！")
      return false;
    }

    if (!emailReg.test(mail)) {
      alert('您的电子邮件格式不正确');
      return false;
    }

    if (yzm == "") {
      alert("请输入验证码！");
      return false;
    }
    // else{
    //     alert("请先登录，再进行预约！");
    //     return false;
    // }

    Rest.post('/AppointmentOpenClassService/InsertAppointmentOpenClassForJs',
      {
        "CallBack": Date.now(),
        "ChildEntity": {
          "Email": mail,
          "OpenClassSysno": openClasssysNo,
          "Name": name,
          "Phone": phoneNum,
          "Code": yzm,
          "CodeSysno": Sysno,
          "MemberSysnoStr": memberSysno
        }
      }, function(responseText) {
        if (responseText.text == "验证码错误") {

          alert("请输入正确的验证码!");

        } else {

          $("#yuYueAlert").html("");

          React.render(<Success json = {json} />, document.getElementById('yuYueSuccess'));

          $("#btnSchedule").attr("disabled", true);

          $("#btnSchedule").html("已预约");
        }
      });

  }
  render() {
    return (
      <div id="scheduleBox" className="reveal-modal">
                <a className="close-reveal-modal" onClick={this.closeYuYue} id={this.props.sysNo}></a>
                <h3>预约-讲座</h3>
                <div className="schedule">
                    <div id="scheduleForm" >
                        <dl>
                            <dd className="schedule-code">
                                <input type="text" placeholder="姓名" id="txtName" />
                                <input type="text" placeholder="邮箱" id="txtEamil" />
                                <div className="clear"></div>
                            </dd>
                            <dd>
                                <div className="schedule-phone">
                                    <input type="text" placeholder="请输入手机号" id="txtPhone" />
                                </div>
                                <div className="action">
                                    <button className="button-normal" id="btnGetCode" onClick={this.GetCode.bind(this)}>获取验证码</button>
                                </div>
                                <div className="clear"></div>
                            </dd>
                            <dd className="schedule-code">
                                <input type="text" placeholder="请输入验证码" id="txtCode" />
                            </dd>
                            <dd>
                                <button className="button-normal" type="submit" id="btnSubmit" onClick={this.ConfrimYuYue.bind(this)}>确 认</button>
                            </dd>
                        </dl>
                    </div>
                </div>
            </div>
      );
  }
  componentDidMount() {
    $(".reveal-modal-bg").show();
  }
}

export default YuYue;

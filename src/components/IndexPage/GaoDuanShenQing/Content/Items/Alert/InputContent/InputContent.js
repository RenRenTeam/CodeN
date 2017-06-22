/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';

import $ from 'jquery';

var Common = require('../../../../../../../utils/Common.js');  

import Rest from '../../../../../../../utils/Rest.js';

class InputContent extends React.Component {

    constructor(props) {
        super(props);
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
    GetCode(){
        var moblie = $("#txtPhone").val();
        var telReg = !!moblie.match(/^1[\d]{10}$/);
        
        if(telReg == false){
            Common.alert("请填写正确的手机号！");
            return false;
        }
        else{
            $.ajax({
                url: "http://service.shenyuan.org/MembersNodeJsService/SendSMS/Phone="+moblie+";CallBack=gaoDuanShengqing_jsonpCallback",
                type: "get",
                dataType: "jsonp",
                async: false,
                jsonp: "callbackparam",
                jsonpCallback: "gaoDuanShengqing_jsonpCallback",           
            }).done(function (json) {
                
                if(json){
                    
                    Common.cookieManager("sysNo_YuYueProject",json.Message,new Date().getTime() + (1 * 24 * 60 * 60 * 1000));

                    var self = $("#gaoDuanShengQingGetCode");

                    this.buttonClick(self);
                    
                }else{

                    return false;
                }
            }.bind(this));

        }
    }

    yuYueProject(){
        var moblie = $("#txtPhone").val();
        var txtContent = $("#txtContent").val();
        var txtName = $("#txtName").val();
        var txtEmail = $("#txtEmail").val();
        var txtCode = $("#txtCode").val();
        var emailReg = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        var Sysno = Common.getCookie("sysNo_YuYueProject");
        var expertSysno = this.props.projectId;

        if(txtContent == ""){
           Common.alert("请输入预约服务内容！")
           return false; 
        }
        if(txtName == ""){
            Common.alert("姓名不能为空！")
            return false;
        }

        if (!emailReg.test(txtEmail)){
            Common.alert('您的电子邮件格式不正确');
             return false;
        }

        if(txtCode == ""){
            Common.alert("请输入验证码！");
            return false;
        }


        var s_content={};
            s_content.ChildEntity={};
            s_content.ChildEntity.Remark=txtContent;
            s_content.ChildEntity.Name=txtName;
            s_content.ChildEntity.Email=txtEmail;
            s_content.ChildEntity.Phone=moblie;
            s_content.ChildEntity.Code=txtCode;
            s_content.ChildEntity.CodeSysno=Sysno;
            s_content.ChildEntity.ExpertSysno=this.props.projectId;
            s_content.CallBack="successYuYue_jsonpCallback";


        Rest.post('/AppointmentExpertService/InsertAppointmentExpertForJs',  
          {"CallBack":Date.now(),"ChildEntity":{
            "Email":txtEmail,"Code":txtCode,"CodeSysno":Sysno,"ExpertSysno":expertSysno,"Name":txtName,"Phone":moblie,"Remark": txtContent}}
          ,function(responseText){
            
            if(responseText.text.indexOf("！") > 0 ){

                Common.alert(responseText.text);

            }else{

               Common.alert("预约成功!");
            }
        });
    }
    
    render() {
        return (
            <div className="expert-content tab-content-box" id="schedule">
                <div id="scheduleExpertForm">
                    <dl>
                        <dd className="content-region">
                            <textarea id="txtContent" placeholder="请输入预约服务内容，预期联络时间"></textarea>
                        </dd>
                    </dl>
                    <dl>
                        <dd className="name-region">
                            <input type="text" placeholder="姓名" id="txtName" />
                        </dd>
                        <dd className="email-region">
                            <input type="text" placeholder="邮箱" id="txtEmail" />
                        </dd>
                        <dd className="clear"></dd>
                    </dl>
                    <dl>
                        <dd className="phone-region">
                            <input type="text" placeholder="电话" id="txtPhone" /></dd>
                        <dd className="getcode">
                            <button className="button-normal" id="gaoDuanShengQingGetCode" type="button" onClick={this.GetCode.bind(this)}>获取验证码</button></dd>
                        <dd className="clear"></dd>
                    </dl>
                    <dl>
                        <dd className="code-region">
                            <input type="text" placeholder="请输入收到的验证码" id="txtCode" />
                        </dd>
                    </dl>
                    <dl className="action">
                        <dd>
                            <button className="button-line" type="submit" onClick={this.yuYueProject.bind(this)}>留言预约</button>
                        </dd>
                    </dl>
                </div>
                <div className="message">
                    您已成功提交专家<span>XXX</span>的预约申请,稍后我们将确认您的预约信息!
                </div>
            </div>
        );
    }
    //dom加载完调用
    componentDidMount(){
        
    }
}

export default InputContent;

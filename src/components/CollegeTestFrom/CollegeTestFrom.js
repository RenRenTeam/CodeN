/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import withStyles from '../../decorators/withStyles';
import styles from './CollegeTestFrom.less';
import $ from 'jquery';
var Select = require('rc-select');
var Option = Select.Option;
var Checkbox = require('rc-checkbox');
import Success from './Success/Success.js';
var Rest = require('../../utils/Rest.js');
var Common = require('../../utils/Common.js'); 
import LoginPage from '../LoginPage/LoginPage.js';
import FormPage from './FormPage/FormPage.js';

@withStyles(styles)
class CollegeTestFrom  extends React.Component{	  

    constructor(props) {
        super(props);
        this.state =
        {
            CountryVAR:'',
            TypeAR:'',
            SysnoAR:'',
            SchoolName:'',
            FreeGuidSysno:''
        };
    }   

    static contextTypes = {
       onSetTitle: PropTypes.func.isRequired
    }


    ConfirmForm(xueli,seleone,seletwo,selectThree){
        let loginUser = Common.getCookie("userLoginSuccess");
        if(!loginUser){           
            Common.alert("请先登录，再进行操作！");
            document.getElementById("nodeRenRen_Login").innerHTML = "";
            React.render(<LoginPage />, document.getElementById('nodeRenRen_Login'));
            loginUser=-1;
            return false;

        }

        let xueliTest =xueli;

        let oneTest =seleone;

        let twoTest = seletwo;

        let threeTest =selectThree;

        let checkboxVal;
        if(!$(".rc-checkbox").hasClass("rc-checkbox-checked")){
            checkboxVal = 0;
        }else{
            checkboxVal = 1;
        }

        if(threeTest == "985/211"){
            threeTest = "985、211";
        }


        let country_VAR;

        if( this.state.CountryVAR == "USA"){
            country_VAR = "美国";
        }else if( this.state.CountryVAR == "UK"){
            country_VAR = "英国";
        }else if( this.state.CountryVAR == "JP"){
            country_VAR = "日本";
        }else if( this.state.CountryVAR == "AUS"){
            country_VAR = "澳大利亚";
        }

        let type_AR = decodeURI(this.state.TypeAR);
        let sysno_AR = this.state.SysnoAR;
        
        let schoolNameA = this.state.SchoolName;
        let FreeGuidSysno_ = this.state.FreeGuidSysno;
        let formElement = $("#testForm");

        if (!xueliTest) {
            Common.alert("请选择想申请的学历!");
            return false;
        }
        if (formElement.find("#num-input").val() == "") {
            Common.alert("平均分不能为空!");
            return false;
        }
        if (oneTest == "" || oneTest == "请选择") {
            Common.alert("请选择最高学历!");
            return false;
        }
        if (twoTest == "" || twoTest == "请选择") {
            Common.alert("请选择语言成绩!");
            return false;
        }
        if (formElement.find("#yyinput").val() == "") {
            Common.alert("语言成绩不能为空!");
            return false;
        }
        if (threeTest == "" || threeTest == "请选择") {
            Common.alert("请选择出身校!");
            return false;
        }
        if (formElement.find("#nameInput").val() == "") {
            Common.alert("姓名不能为空!");
            return false;
        }
        if (formElement.find("#mbInput").val() == "") {
            Common.alert("手机不能为空!");
            return false;
        }
        if (formElement.find("#weqqInput").val() == "") {
            Common.alert("微信/QQ不能为空!");
            return false;
        }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
        Rest.post('/UniversityRequestService/InsertUniversityRequestForJS',  
          {"CallBack":Date.now(),
          "ChildEntity":{"UniversitySysno":sysno_AR,"FreeGuidSysno":FreeGuidSysno_,"Country":country_VAR,"UniversityName":schoolNameA,"MemberSysnoStr":loginUser,"Name":formElement.find("#nameInput").val(),
          "SchoolType":type_AR,"JsonEntity":"{\"RequestXueLi\":\""+
          xueli+"\",\"AvgCode\":\""+formElement.find("#num-input").val()+"\",\"HighestEduBack\":\""+oneTest+"\",\"LanguageTestType\":\""+twoTest+"\",\"LanguageCode\":\""+formElement.find("#yyinput").val()+"\",\"SchoolGrade\":\""+threeTest+"\",\"Name\":\""+formElement.find("#nameInput").val()+"\",\"Phone\":\""+formElement.find("#mbInput").val()+"\",\"IM\":\""+formElement.find("#weqqInput").val()+"\",\"IsAgreeContact\":\""+checkboxVal+"\"}"}
          },function(responseText){
            if(responseText.text.indexOf("！")>=0||responseText.text.indexOf("!")>=0){
                Common.alert(responseText.text);
                return false;

            }else{

                $("#testFormId").html("");

                React.render(<Success nameSchool = {schoolNameA}  country = {country_VAR} />, document.getElementById('testFormId'));
            }
            
        });

    }
/*    SelectXueli(e){

        this.setState({xueli:e.target.innerHTML});
    }*/
    render() {
        let title = '测试 - 人人留学';
        this.context.onSetTitle(title); 
        return (
            <div>
            <section className="test-box">
                <div className="testForm" id="testFormId">
                    
                </div>
            </section>
            </div>
        );
    }

    componentDidMount() {
        
        var _FreeGuidSysno;

        var url = window.location.href;

        url = url.substr(url.indexOf('/CollegeTestFrom-') + ('/CollegeTestFrom-').length);
        let urlArr=url.split('-');
       
        let _countryVAR = urlArr[0];
        let _typeAR = urlArr[1];
        let _sysnoAR = urlArr[2];
        let _schoolNameVAR = decodeURI(urlArr[3]);
        if(urlArr.length>4){   _FreeGuidSysno = urlArr[4];
        }
        else{   _FreeGuidSysno = "0";} 
        this.setState({
            CountryVAR:_countryVAR,
            TypeAR:_typeAR,
            SysnoAR:_sysnoAR,
            SchoolName:_schoolNameVAR,
            FreeGuidSysno:_FreeGuidSysno
        });
       
        React.render(<FormPage typeSchool={_typeAR} schoolName={_schoolNameVAR} toTest={this.ConfirmForm.bind(this)} arrStr={_FreeGuidSysno} />, document.getElementById('testFormId'));
    }
}

export default CollegeTestFrom;

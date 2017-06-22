/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import styles from '../Data.less';
import withStyles from '../../../../decorators/withStyles';
import LeftBox from '../LeftBox/LeftBox.js';
import $ from 'jquery';
import Link from '../../../../utils/Link.js';
import Common from '../../../../utils/Common.js';
import Rest from '../../../../utils/Rest.js';

@withStyles(styles)
class DetailDataC extends React.Component{
    constructor(props) {
        super(props);
        this.state = {clickEvent:true};
    }
    render() {
        var imgStr=Common.imageSource();
        var img2="http://image.shenyuan.org/";
        return (
            <div className="collegeDataContent">
                <section className="college-info">
                    <h1 id="h_name">
                        <span className="chName">{this.props.json.Name}</span>
                        <span className="hr">|</span>
                        <span>{this.props.json.EnglishName}</span>
                        <span>{this.props.json.Country}</span>
                    </h1>
                    <div className="college-box">
                        <div id="div_university" className="info">
                            <div className="logo-box">
                                <div className="logo">
                                    <img src={img2+this.props.json.logo2} />
                                </div>
                                <div className="text">
                                    <div className="ch">{this.props.json.Name}</div>
                                    <div className="en">{this.props.json.EnglishName}</div>
                                </div>
                            </div>
                            <div className="description">
                                <div className="desc">学校类型：<span className="type">{this.ToGB2312(this.props.json.content.classes)}</span>建校时间：<span>{this.props.json.content.JianXiaoShiJian}</span></div>
                                <div className="other">
                                    <div className="like" onClick={this.state.clickEvent?this.likePush.bind(this):""}>{this.props.json.content.xiangqu}</div>
                                    <div className="position">{this.props.json.content.SuoZaiChengShi}</div>
                                    <div className="clear"></div>
                                </div>
                                <div className="compare">
                                    <div>
                                        <a className="btn btn-attention" id="attopen1" title="关注" href="javascript:;" rel="80" onClick={this.addCare.bind(this)}>关 注</a>
                                    </div>
                                </div>
                            </div>
                            <div className="clear"></div>
                        </div>
                        <div className="action">
                            <a href={1==1?"/CollegeTestFrom-"+this.props.Country+"-"+this.props.SchoolType+"-"+this.props.Sysno+"-"+this.props.json.Name+"-"+this.props.FreeGuidSysno:""} onClick={Link.handleClick}><button className="button-line">免费申请</button></a>
                           <br />

                        </div>
                        <div className="clear"></div>
                    </div>
                </section>
                <section className="college-description">
                    <LeftBox />
                    <div className="clear"></div>
                </section>
            </div>
        );
    }

    ToGB2312(str) {

        return unescape(str.replace(/\\u/gi, '%u'));
    }

    addCare(){
        let userCookie=Common.getCookie("userLoginSuccess");
        let country_Var = this.props.Country;
        if(country_Var=="UK"){country_Var="英国";}
        let type_Var = "大学";
        let sysNo_Var = this.props.json.Sysno;
        if(userCookie){
                let url="/Members_CollectionNodeJsService/InsertMembers_Collection";
                let arr={"CallBack":"","ChildEntity":{"MemberSysnoStr":userCookie,"UniversitySysno":sysNo_Var,"Country":country_Var,"Type":type_Var}};

                Rest.post(url,arr,function(res){
                    if(res.text=="不能重复关注！"){
                       Common.alert("不能重复关注！");
                    }else{
                       Common.alert("关注成功！");
                    }
               });
       }else{
            Common.alert("请您先登录！");
       }

    }

    likePush(e){
        var thisNode=$(e.target);
        var country_Var = this.props.Country;
        var type_Var = this.props.json.SchoolType;
        var sysNo_Var = this.props.json.Sysno;
        var thisPage=this;
        $.ajax({
            url: "http://service.shenyuan.org/UniversitySearchNodeJsService/Recommend/Country="+country_Var+";Type="+type_Var+";Sysno="+sysNo_Var+"",
            type: "get",
            dataType: "jsonp",
            async: false,
            jsonp: "callbackparam",//传递给请求处理程序或页面的，用以获得jsonp回调函数名的参数名(默认为:callback)
            jsonpCallback: "success_jsonpCallback",//自定义的jsonp回调函数名称，默认为jQuery自动生成的随机函数名
            success: function (json) {

                var num = parseInt(thisNode.html() ) + 1;
                thisNode.html(num);
                thisPage.setState({
                    clickEvent:false
                });

            },
            error: function (e) {
              //console.log(e);
              Common.errorLog(e);
            }
        });
    }
    loadingFunc(){
        if($("#pageloader_appPager")){ $("#pageloader_appPager").fadeOut();}
    }
    //dom加载完调用
    componentDidMount(){
        setTimeout(this.loadingFunc,900);



    }
}

export default DetailDataC;

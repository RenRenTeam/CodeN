/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import styles from './Content.less';
import withStyles from '../../../decorators/withStyles';
import $ from 'jquery'
import AppActions from '../../../actions/AppActions';
import ALL from './ALL/ALL.js';
import HuiGu from './ALL/HuiGu/HuiGu.js';
var EnterAnimation = require('enter-animation') ;
@withStyles(styles)
class Content extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
          Country:"美国",
          pageNum:"0",
          direction:'enter',
          upend:false,
          type:'right',
          interval:0.1,
          delay:0.7};
    }
    openUk(e){
        this.setState({
            Country:e.target.innerHTML
        });
        this.state.pageNum = 0;


        if(e.target.innerHTML == "澳洲"){

            this.state.Country = "澳大利亚";

        }else if(e.target.innerHTML == "全部"){

            this.state.Country = "";

            this.sendAjax();

            return false;

        }else{

            this.state.Country = e.target.innerHTML;
        }
        this.sendAjax();

    }

    sendAjax(){

        var city = this.state.Country;
        var pageNum = this.state.pageNum;

        if(this.state.Country == "全部"){
            city = "";
        }

        pageNum++;

        this.state.pageNum = pageNum;

        $.ajax({
            url: "http://service.shenyuan.org/OpenClassForJsService/Search/Country="+city+";PageIndex="+pageNum+";PageSize=5",
            type: "get",
            dataType: "jsonp",
            async: false,
            jsonp: "callbackparam",//传递给请求处理程序或页面的，用以获得jsonp回调函数名的参数名(默认为:callback)
            jsonpCallback: "success_jsonpCallback",//自定义的jsonp回调函数名称，默认为jQuery自动生成的随机函数名
        }).done(function (json) {
            if(json&&json.length>0){
                if(pageNum == 1){
                    if(json[0].TotalCount <= 5){
                        $("#read-more").hide();
                        document.getElementById("openClassTabsContent").innerHTML = "";
                        React.render(<ALL DataSource={json} />, document.getElementById('openClassTabsContent'));
                    }else{
                        $("#read-more").show();
                        React.render(<ALL DataSource={json} />, document.getElementById('openClassTabsContent'));
                    }
                }else{

                    if(json[0].TotalCount - $(".ul_bodyS").find(".eachGetHref").length <= 5){
                        $("#read-more").hide();
                    }
                    React.render(<ALL DataSource={json} />, document.getElementById('div_next'));
                    $("#div_next").removeAttr("id");
                }
            }else{
                $("#read-more").hide();
                return false;

            }
        }.bind(this));

    }
    render() {
        return (
            <EnterAnimation interval={this.state.interval} type={this.state.type} upend={this.state.upend} direction={this.state.direction}>
            <section className="open-class-box">
                <h2>公开课</h2>
                <div className="description">分享课程，传承智慧</div>
                <div className="tabs-box" id="openClassTabs">
                    <div className="tabs">
                        <div className={this.state.Country=="全部"? "item selected" : "item"} onClick={this.openUk.bind(this)}>全部</div>
                        <div className={this.state.Country=="英国"? "item selected" : "item"} onClick={this.openUk.bind(this)}>英国</div>
                        <div className={this.state.Country=="美国"? "item selected" : "item"} onClick={this.openUk.bind(this)}>美国</div>
                        <div className={this.state.Country=="澳洲"? "item selected" : "item"} onClick={this.openUk.bind(this)}>澳洲</div>
                        <div className={this.state.Country=="日本"? "item selected full" : "item full"} onClick={this.openUk.bind(this)}>日本</div>
                        <div className="clear"></div>
                    </div>
                    <div className="tab-content">
                        <div id="all" className="open-class-tab-content-box tab-content-box">
                            <div id="openClassTabsContent" className="ul_bodyS"></div>
                            <HuiGu />
                            <div className="clear"></div>
                        </div>
                    </div>
                    <div id="read-more" onClick={this.sendAjax.bind(this)}>
                        <font id="read-more-font">查看更多</font><i className="icon"></i>
                    </div>
                </div>
            </section>
            </EnterAnimation>
        );
    }
    componentDidMount() {

        this.sendAjax();
    }
}

export default Content;

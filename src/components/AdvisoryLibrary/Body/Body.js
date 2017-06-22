/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React from 'react';
import styles from './Body.less';
import withViewport from '../../../decorators/withViewport';
import withStyles from '../../../decorators/withStyles';
import List from '../List/List.js';
import Link from '../../../utils/Link';
import $ from 'jquery';
import Common from '../../../utils/Common.js';

@withStyles(styles)
export class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {Country:"USA",tabsChange:"" ,category:"留学信息",pageNum:1};
    }
    searchData(flag,value){
           var userSearch= $("#q").val();
           var countryStr=this.state.Country;
           var tabStr=this.state.category;
           var pageStr=this.state.pageNum;
           if(flag=="country"){
                countryStr=value;pageStr=1;
                if(value=="JP"){
                    tabStr="留学申请";
                }else{
                   tabStr="留学信息";
                }
            }
           else if(flag=="tabs"){tabStr=value;pageStr=1;}
           else if(flag=="page"){pageStr=value;}

            $.ajax({
                url: "http://service.shenyuan.org/ArticleService/SearchForJS/"+countryStr+","+userSearch+","+tabStr+","+pageStr+",5",
                type: "get",
                dataType: "jsonp",
                async: false,
                jsonp: "callbackparam",//传递给请求处理程序或页面的，用以获得jsonp回调函数名的参数名(默认为:callback)
                jsonpCallback: "success_jsonpCallback",//自定义的jsonp回调函数名称，默认为jQuery自动生成的随机函数名
                success: function (json) {
                    if(json.length <= 0){
                        $("#read-more").hide();
                        $("#ul_body").hide();
                        return false;
                    }
                    $("#read-more").show();
                    $("#ul_body").show();
                    if(pageStr == 1){
                        if(json[0].TotalCount <= 5){
                            $("#read-more").hide();
                            $("#ul_body").html("");
                            React.render(<List data={json} />,document.getElementById('ul_body'));
                        }
                        else{
                            $("#ul_body").html("");
                            React.render(<List data={json} />,document.getElementById('ul_body'));
                        }
                    }else{
                        if(json[0].TotalCount - $("#ul_body").find(".eachGetHref").length <= 5){
                            $("#read-more").hide();
                        }
                        React.render(<List data={json} />,document.getElementById('div_next'));
                        $("#div_next").removeAttr("id");

                    }
                    $("#read-more-font").html("查看更多");



                },
                error: function (e) {
                  //console.log(e);
                  Common.errorLog(e);
                }
            });
    }
    userInputFunc(){
        this.searchData("","");
    }
    changeCountry(e){
        var count=$(e.target).attr("data-content");
        this.setState({ Country:count, pageNum:1 });
        if(count=="JP"){
            this.setState({ tabsChange:"JP",category:"留学申请" });
        }else{
            this.setState({  tabsChange:"",category:"留学信息" });
        }
        $("#q").val("");
        this.searchData("country",count);
    }

    changeTabs(e){
        var tabData=$(e.target).attr("data-value");
        this.setState({
            category:tabData,
            pageNum:1
        });
        $("#q").val("");
        this.searchData("tabs",tabData);
    }
    changePage(e){
        var num=this.state.pageNum+1;
        this.setState({
            pageNum:num
        });
        this.searchData("page",num);
        $("#read-more-font").html("加载中...");
    }
    render() {
        return (
            <div>
                <div className="tabs" id="advTabs">
                    <div data-content="" data-value="" onClick={this.changeCountry.bind(this)} className={this.state.Country==""?"item selected":"item"}>全部</div>
                    <div data-content="UK" data-value="英国" onClick={this.changeCountry.bind(this)} className={this.state.Country=="UK"?"item selected":"item"}>英国</div>
                    <div data-content="USA" data-value="美国" onClick={this.changeCountry.bind(this)} className={this.state.Country=="USA"?"item selected":"item"}>美国</div>
                    <div data-content="AUS" data-value="澳洲" onClick={this.changeCountry.bind(this)} className={this.state.Country=="AUS"?"item selected":"item"}>澳洲</div>
                    <div data-content="JP" data-value="日本" onClick={this.changeCountry.bind(this)} className={this.state.Country=="JP"?"item full selected":"item full"}>日本</div>
                    <div className="clear"></div>
                </div>
                <div className="search_input_dv">
                    <div id="searchForm">
                        <input type="text" placeholder="请输入"  id="q"/>
                        <button  id="advSubBt" onClick={this.userInputFunc.bind(this)} ></button>
                        <div className="clear"></div>
                    </div>
                </div>
                <div className="category-box">
                    <ul id="ulCategory" className={this.state.tabsChange==""?"":"hidden"}>
                        <li data-value="留学信息" onClick={this.changeTabs.bind(this)}  className={this.state.category=="留学信息"?"active":""}>留学信息</li>
                        <li data-value="签证信息" onClick={this.changeTabs.bind(this)}  className={this.state.category=="签证信息"?"active":""}>签证信息</li>
                        <li data-value="工作信息" onClick={this.changeTabs.bind(this)}  className={this.state.category=="工作信息"?"active":""}>工作信息</li>
                        <li data-value="移民信息" onClick={this.changeTabs.bind(this)}  className={this.state.category=="移民信息"?"active":""}>移民信息</li>
                        <li data-value="学校新闻" onClick={this.changeTabs.bind(this)}  className={this.state.category=="学校新闻"?"active":""}>学校新闻</li>
                        <li data-value="英语培训" onClick={this.changeTabs.bind(this)}  className={this.state.category=="英语培训"?"active":""}>英语培训</li>
                    </ul>
                    <ul  className={this.state.tabsChange=="JP"?"":"hidden"}>
                        <li data-value="留学申请" onClick={this.changeTabs.bind(this)}  className={this.state.category=="留学申请"?"active":""} >留学申请</li>
                        <li data-value="院校专业" onClick={this.changeTabs.bind(this)}  className={this.state.category=="院校专业"?"active":""}>院校专业</li>
                        <li data-value="签证材料" onClick={this.changeTabs.bind(this)}  className={this.state.category=="签证材料"?"active":""}>签证材料</li>
                        <li data-value="行前准备" onClick={this.changeTabs.bind(this)}  className={this.state.category=="行前准备"?"active":""}>行前准备</li>
                        <li data-value="奖学金" onClick={this.changeTabs.bind(this)}  className={this.state.category=="奖学金"?"active":""}>奖学金</li>
                        <li data-value="生活经验" onClick={this.changeTabs.bind(this)}  className={this.state.category=="生活经验"?"active":""}>生活经验</li>
                    </ul>
                </div>
                <div className="tab-content">
                    <div id="all" className="open-class-tab-content-box tab-content-box">
                        <div className="listUl">
                            <div id="ul_body">

                            </div>
                            <div className="clear"></div>
                            <div id="read-more">
                                <font id="read-more-font" onClick={this.changePage.bind(this)} >查看更多</font><i className="icon"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }


    componentDidMount() {
        var countryUrl=this.props.country;
        this.setState({  pageNum:1 });
        if(countryUrl=="JP"){
            this.setState({Country:"JP",tabsChange:"JP",category:"留学申请" });
        }else if(countryUrl) {
            this.setState({  tabsChange:"",Country:countryUrl,category:"留学信息" });
        }else{
            countryUrl="USA";
            this.setState({  tabsChange:"",Country:"USA",category:"留学信息" });
        }
        this.searchData("country",countryUrl);

      /*  var pageNum = 1;

        getPar();

        $("#read-more").click(function(){

            pageNum++;

            $("#read-more-font").html("加载中...");

            var country = $("#advTabs .selected").attr("data-content");

            var val = $("#q").val();

            var tag = $("#ulCategory").find(".active").attr("data-value");

            sendAjax(country,val,tag,pageNum);

        });


        $("#advTabs .item").click(function(){
            pageNum = 1;
            $("#advTabs").find(".item").removeClass("selected");
            $(this).addClass("selected");
            getPar();
        });

         $("#ulCategory").find("li").click(function () {
            pageNum = 1;
            if (!$(this).hasClass("active")) {
                $(this).parent().find("li").removeClass("active");
                $(this).addClass("active");
                getPar();
            }
        });

         $("#advSubBt").click(function(){
            pageNum = 1;
            getPar();
         });

         function getPar(){

            var country = $("#advTabs .selected").attr("data-content");

            var val = $("#q").val();

            var tag = $("#ulCategory").find(".active").attr("data-value");

            sendAjax(country,val,tag,pageNum);
         }

         function sendAjax(country,val,tag,pageNum){
            if(!tag){  tag=""; }
            if(!country){  country="";}
            if(!val){    val=""; }

        }*/

    }
}

export default Header;

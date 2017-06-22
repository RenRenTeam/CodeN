/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import withStyles from '../../../../decorators/withStyles';
import Items from './Items/Items.js';
import Link from '../../../../utils/Link.js';
import Common from '../../../../utils/Common.js'

import $ from 'jquery';
var CSlider = require('react-slick');

class OpenClassAll extends React.Component {

    sendAjax(){
        
        var inputTxt = $(".countryOpenClassInput").val();

        var selected = $(".filter").find(".selected").html();

        if(selected == "全部"){

            selected = "";

        }else if(selected == "澳洲"){ 

            selected = "澳大利亚";
            
        } 
    }

    render() {  
        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true, 
        };

        var items;

        var jsonObj2 = this.props.json;

        var nameVar;
        var imageSource=Common.imageSource();

        if(jsonObj2 instanceof Array){
            items = this.props.json.map(function (item,index) {
                if(index!=0){
                    nameVar=item.Title;
                    if(nameVar.length > 25){  nameVar = nameVar.substr(0,25)+"..."; }
                    return (<Items json={item} Title ={nameVar} />);
                }
               

           

            });          
        }
        return (
            <div className="content" id="allClass">
                <div className="first-box">
                    <div className="search-class">
                        <div className="search-class-input">
                            <input type="text" className="countryOpenClassInput" placeholder="搜索课程"/>
                            <button type="button" onClick={this.sendAjax.bind(this)}>&nbsp;</button>
                            <div className="clear"></div>
                        </div>
                    </div>
                    <div className="new-class">
                        <div className="class-info">
                            <a href={this.props.json[0]?"/OpenClassDetail-"+this.props.json[0].Sysno:""}  onClick={Link.handleClick}>
                                <img src= {this.props.json[0]?(imageSource+this.props.json[0].ClassImgStr):""} /></a>
                        </div>
                        <div className="class-desc">
                            <div className="date">{this.props.json[0]?this.props.json[0].StartDateStr:""}</div>
                            <div className="detail"><a href={this.props.json[0]?"/OpenClassDetail-"+this.props.json[0].Sysno:""}  onClick={Link.handleClick}>即将开课 ></a></div>
                            <div className="clear"></div>
                        </div>
                    </div>
                    <div className="student-evaluation" id="openClassUser"> 
                        <h1>学员评价</h1>
                        <CSlider {...settings}>
                            <div className="evaluation-list" >
                                <div id="testdo" className="evaluation-item  " >
                                    <div className="head-pic">
                                        <img src="http://passport.shenyuan.org/WebResources/Default/images/face/face1.jpg"/>
                                    </div>
                                    <div className="evaluation-info">
                                        <div className="student-name">张同学</div>
                                        <div className="class-name"><a href="#">气候模式及预测</a></div>
                                    </div>
                                    <div className="clear"></div>
                                    <div className="evaluation-content" data-value="one"  >
                                        威廉老师上课认真负责，雅思考试中的大部分疑难问题都能在课上解决，人人的公开课真是我“烤鸭”路上的好帮手。
                                    </div>
                                </div>
                                <div className="evaluation-item " >
                                    <div className="head-pic">
                                        <img src="http://passport.shenyuan.org/WebResources/Default/images/face/face2.jpg"/>
                                    </div>
                                    <div className="evaluation-info">
                                        <div className="student-name">黄同学</div>
                                        <div className="class-name"><a href="#">人类学</a></div>
                                    </div>
                                    <div className="clear"></div>
                                    <div className="evaluation-content" data-value="two" >
                                        人人留学举办的公开课别出心裁，让我学到了许多在别的留学网站上学习不到的实时咨讯，对留学及未来人生规划大有裨益。
                                    </div>
                                </div>
                            </div>
                            <div className="evaluation-list" >
                                <div id="testdo" className="evaluation-item  " >
                                    <div className="head-pic">
                                        <img src="http://passport.shenyuan.org/WebResources/Default/images/face/face3.jpg"/>
                                    </div>
                                    <div className="evaluation-info">
                                        <div className="student-name">周同学</div>
                                        <div className="class-name"><a href="#">古典文学</a></div>
                                    </div>
                                    <div className="clear"></div>
                                    <div className="evaluation-content" data-value="one"  >
                                        感谢人人留学的公开课给了我一个接触新鲜事物的新平台，我还需要及时消化老师讲授的新知识。下次还会来听！
                                    </div>
                                </div>
                                <div className="evaluation-item " >
                                    <div className="head-pic">
                                        <img src="http://passport.shenyuan.org/WebResources/Default/images/face/face4.jpg"/>
                                    </div>
                                    <div className="evaluation-info">
                                        <div className="student-name">梁同学</div>
                                        <div className="class-name"><a href="#">航天与宇宙探索</a></div>
                                    </div>
                                    <div className="clear"></div>
                                    <div className="evaluation-content" data-value="two" >
                                        人人留学新上线的公开课真是太好了！比起死板的文字阅读，课堂既生动又有趣，从雅思考试讲到留学之路及职业发展，让我受益匪浅！
                                    </div>
                                </div>
                            </div>
                            <div className="evaluation-list" >
                                <div id="testdo" className="evaluation-item  " >
                                    <div className="head-pic">
                                        <img src="http://passport.shenyuan.org/WebResources/Default/images/face/face5.jpg"/>
                                    </div>
                                    <div className="evaluation-info">
                                        <div className="student-name">小罗</div>
                                        <div className="class-name"><a href="#">金钱与爱情</a></div>
                                    </div>
                                    <div className="clear"></div>
                                    <div className="evaluation-content" data-value="one"  >
                                        人人留学公开课开讲拉，第一次来听就有好多收获。希望人人公开课内容越办越广！
                                    </div>
                                </div>
                                <div className="evaluation-item " >
                                    <div className="head-pic">
                                        <img src="http://passport.shenyuan.org/WebResources/Default/images/face/face6.jpg"/>
                                    </div>
                                    <div className="evaluation-info">
                                        <div className="student-name">小鑫</div>
                                        <div className="class-name"><a href="#">励志人生</a></div>
                                    </div>
                                    <div className="clear"></div>
                                    <div className="evaluation-content" data-value="two" >
                                        好奇参加了一次人人留学的公开课便一发不可收拾！连续听了几次，老师讲课生动活泼，互动频繁。让留学不仅仅停留在梦想中，梦想也能照进现实。
                                    </div>
                                </div>
                            </div>
                            <div className="evaluation-list" >
                                <div id="testdo" className="evaluation-item  " >
                                    <div className="head-pic">
                                       <img src="http://passport.shenyuan.org/WebResources/Default/images/face/face7.jpg"/>
                                    </div>
                                    <div className="evaluation-info">
                                        <div className="student-name">陈同学</div>
                                        <div className="class-name"><a href="#">化妆与社交</a></div>
                                    </div>
                                    <div className="clear"></div>
                                    <div className="evaluation-content" data-value="one"  >
                                        人人公开课真是我们渴望留学的莘莘学子的福音，有了人人公开课，许多问题都能迎刃而解，希望下次我的网络能再给力些！！
                                    </div>
                                </div>
                                <div className="evaluation-item " >
                                    <div className="head-pic">
                                        <img src="http://passport.shenyuan.org/WebResources/Default/images/face/face8.jpg"/>
                                    </div>
                                    <div className="evaluation-info">
                                        <div className="student-name">詹同学</div>
                                        <div className="class-name"><a href="#">古希腊历史</a></div>
                                    </div>
                                    <div className="clear"></div>
                                    <div className="evaluation-content" data-value="two" >
                                        人人留学公开课攻略雅思，听了几次成绩有了明显提高，下次还会参加口语的课程讲座。
                                    </div>
                                </div>
                            </div>
                            <div className="evaluation-list" >
                                <div id="testdo" className="evaluation-item  " >
                                    <div className="head-pic">
                                        <img src="http://passport.shenyuan.org/WebResources/Default/images/face/face9.jpg"/>
                                    </div>
                                    <div className="evaluation-info">
                                        <div className="student-name">侯同学</div>
                                        <div className="class-name"><a href="#">人生是一场永不停歇的战斗</a></div>
                                    </div>
                                    <div className="clear"></div>
                                    <div className="evaluation-content" data-value="one"  >
                                        第一次参加人人留学的公开课是抱着试试看的态度，原本以为没什么大用处，但实际听下来，解决了许多对留学困惑的地方。为老师们牺牲休息时间给我们上课点个大大的赞。
                                    </div>
                                </div>
                                <div className="evaluation-item " >
                                    <div className="head-pic">
                                        <img src="http://passport.shenyuan.org/WebResources/Default/images/face/face10.jpg"/>
                                    </div>
                                    <div className="evaluation-info">
                                        <div className="student-name">崔同学</div>
                                        <div className="class-name"><a href="#">哲学</a></div>
                                    </div>
                                    <div className="clear"></div>
                                    <div className="evaluation-content" data-value="two" >
                                        人人留学的公开课再多请一些专家来吧！希望参与的人越来越多！
                                    </div>
                                </div>
                            </div>
                         </CSlider>
                        <div className="clear"></div>
                    </div>
                    <div className="clear"></div>
                </div>
                <div className="list-box">
                    <div className="class-list">
                        {items}
                    </div>
                    <div className="more"><a href="/OpenClass" onClick={Link.handleClick}>查看全部 ></a></div>
                </div>
            </div>
        );
    }

    componentDidMount() {
     /*   $(".evaluation-list .evaluation-item").hover(function(){
            $(".evaluation-list .evaluation-item").find(".bgShdow").removeClass("ac");
            $(this).find(".bgShdow").addClass("ac");
        });*/
        
            $("#openClassUser button").hide();
            $("#openClassUser .slick-dots").css("display","none !important");


            $(".evaluation-item .class-name").each(function(){

                var length = $(this).text().length;

                var html = $(this).text();

                if(length > 6){

                    html = html.substr(0,6) + "...";
                }

                $(this).text(html);
            });

    }
}

export default OpenClassAll;

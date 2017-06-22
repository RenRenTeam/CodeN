import React, { PropTypes } from 'react';

var Select = require('rc-select');
var Option = Select.Option;

require('rc-radio/assets/index.css');
var Radio = require('rc-radio');
import Link from '../../../utils/Link';

import SelectStyles from "./SetpC.less";
import withStyles from '../../../decorators/withStyles';
@withStyles(SelectStyles)
export class SetpResule extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            top_up:0,//top-up课程
            zmxx:0,//专门学校
            zdbk:0,//转学分就读本科
            cbde:0,//插班本科大二
            bskc:0 //博士课程
        };
        var result=this.props.result;//返回值为数组，0最低排名，1最高排名，2得分，3最低学校名称，4最高学校名称，5最低学校编号，6最高学校编号，7之后为选择的品牌
        for(var i=0;i<result.length;i++){
            if(result[i]=="专门学校"){
                this.state.zmxx = 1;
            }
            if(result[i]=="博士课程"){
                this.state.bskc = 1;
            }
            if(result[i]=="top-up 课程"){
                this.state.top_up = 1;
            }
            if(result[i]=="转学分就读本科"){
                this.state.zdbk = 1;
            }
            if(result[i]=="插读本科大二"){
                this.state.cbde = 1;
            }

        }
    }

    componentWillUnmount() {


    }

    render() {
        var schooolData=this.props.schoool;
        var CountryStr=this.props.Country;
        var typeStr=this.props.Type;
        var nodeSchool="";
        if(schooolData){
            nodeSchool=schooolData.map(function(obj){
                return(
                <li>
                    <div className="xuexiao">
                        <div className="xuexiao_top">
                            {obj.Name}<span className="xuexiao_top_x">|</span> <span className="xuexiao_zi">{obj.EnglishName}</span>
                        </div>
                        <div className="xuexiao_bot">
                            <div className="xuexiao_bot_left">
                                <a className="eachGetHrefA" href={"/CollegeDetail-" + CountryStr + "-" + typeStr +"-" + obj.Sysno} onClick={Link.handleClick}>
                                    <img src={obj.Logo} />
                                </a>
                            </div>
                            <div className="xuexiao_bot_right">
                                <div className="xuexiao_bot_right_top">
                                    <div className="bot_right_left" >
                                        <div className="left_zuo like"><img src="http://passport.shenyuan.org/WebResources/Default/images/college/like.png"  /></div>
                                        <div className="left_you left_you_num">{obj.Follow}</div>
                                    </div>
                                    <div className="bot_right_left">
                                        <div className="left_zuo"><img src="http://passport.shenyuan.org/WebResources/Default/images/college/position.png" /></div>
                                        <div className="left_you">{obj.PlaceArea}</div>
                                    </div>
                                </div>
                                <div className="right_bot">
                                    <div className="sc_paiming">

                                    </div>
                                </div>
                                <div className="clear"></div>
                            </div>
                            <div className="clear"></div>
                        </div>
                    </div>
                </li>
                );
            });
        }
        var fen=this.props.result[2];
        fen=Number(fen);
        var AUSStart="根据系统测试，没有匹配的学校。";
        var titleStr = "";
        if(this.props.Country=="AUS"&&(this.props.Type=="大学"||this.props.Type=="硕士")){
            titleStr="";
            if(fen<50){AUSStart="根据系统测试，您可申请的大学大致在   0 星级  ——    1  星级区间";}
            else if(fen<60){AUSStart="根据系统测试，您可申请的大学大致在   1  星级  ——   2  星级区间";}
            else if(fen<70){AUSStart="根据系统测试，您可申请的大学大致在   2  星级  ——   3   星级区间";}
            else if(fen<80){AUSStart="根据系统测试，您可申请的大学大致在   3  星级  ——   4   星级区间";}
            else if(fen>=80){AUSStart="根据系统测试，您可申请的大学大致在  4  星级  ——   5   星级区间";}
        }

        var schoolOne="",schoolTwo="";
        if(this.props.result[1]){
            schoolOne=this.props.result[1];
        }
        if(this.props.result[0]){
            schoolTwo=this.props.result[0];
        }
        var aNode1=[];
        var aNode2=[];
        if(this.props.result[4]){
            aNode1.push(
                    <a className="hrefCss" target="_blank" href={"http://node.rrliuxue.com/CollegeDetail-"+this.props.Country+"-"+(this.props.Type=="高中"?"高中":"大学")+"-"+this.props.result[6]}>{this.props.result[4]}</a>
                );
        }else{
            aNode1.push(
                    <label className="hrefCss">无符合条件数据</label>
                );
        }
        if(this.props.result[3]){
            aNode2.push(
                    <a className="hrefCss" target="_blank" href={"http://node.rrliuxue.com/CollegeDetail-"+this.props.Country+"-"+(this.props.Type=="高中"?"高中":"大学")+"-"+this.props.result[5]}>{this.props.result[3]}</a>
                );
        }else{
            aNode2.push(
                    <label className="hrefCss">无符合条件数据</label>
                );
        }
        return (
            <div>

                <div className="ws-education1">
                    <div className="education-box">
                        <div className="content content-left">
                            <br/>
                            <div>
                                非常感谢您使用人人留学网选校系统！<br/><br/>

                                <div className={(this.props.Country=="JP")||(this.props.Country=="AUS")||(this.props.Country=="UK"&&this.props.Type=="高中")||(this.props.Country=="USA"&&this.props.Type=="高中")? "inputHide" : ""}>
                                    根据系统测试，您可申请的学校大致排名：
                                    {schoolOne}（{aNode1}）——
                                    {schoolTwo}（{aNode2}） 之间。
                                </div>
                                <div className={(this.props.Country=="AUS")&&(this.props.Type=="大学"||this.props.Type=="硕士")? "" : "inputHide"}>
                                        {AUSStart}
                                </div>



                                <div className={this.props.Country=="USA"&&this.props.Type=="高中"? "" : "inputHide"}>
                                    <p>美国高中数量庞大，人人院校库根据您提交的基本数据，推荐的都是能直接办理的中学。在申请旺季时，每天各个学校的招生名额都在发生变化。我们的顾问老师会在2个工作日内和您进行沟通，结合您的实际情况，提供专业的指导意见和建议，帮助您选择到适合的学校。</p><br/>
                                    <p>美国顶尖的私立寄宿制或者走读制中学一般是没有招生代理的，所以也不在我们的院校库中，如果您在申请办理中需要我们专业的指导和帮助，欢迎联系我们的顾问老师。</p>
                                    <br/>
                                    <ul className="compuUl">
                                        {nodeSchool}
                                    </ul>
                                    <br/>
                                    <a target="_blank" href="College-index-USA-高中" className="hrefCss" >点击查看“美国高中”数据库</a>
                                </div>
                                <div className={this.props.Country=="USA"&&this.props.Type=="大学"? "" : "inputHide"}>
                                    <br />
                                    <p>系统推荐的学校是根据您提交的基本数据而得出的结论，仅供参考。选校是一个复杂的过程，除了客观的条件，还受许多其他因素的影响，所以需要专业的老师和您进行详细的沟通。我们的顾问老师会在2个工作日内和您联络，结合您的实际情况，提供专业的指导意见和建议，帮助您选择到适合的学校。</p><br/>
                                    <div><b style={{color:"red"}}>特别推荐：</b></div>
                                    <p>人人留学整理了100多所提供直接录取和双录取的美国大学，有一部分是排名前100的大学，甚至还有几所排名前50的学校，有些还提供奖学金和实习项目，欢迎有兴趣的同学查询。</p>
                                    <div><b style={{color:"red"}}>特别提醒：</b></div>
                                    <p>如果您选择了转学分申请，因为情况比较特殊，人人留学的顾问老师将根据您留下的联系方式在2个工作日内直接和您沟通，或者您也可以直接加QQ号：207506653联系，请注明：转学分申请。</p>
                                    <br />
                                    <a target="_blank" href="http://node.rrliuxue.com/USAProject" className="hrefCss">点击查看“美国大学直录双录项目</a>
                                    <br /><br />
                                    <a target="_blank" href="College-index-USA-大学" className="hrefCss" >点击查看“美国大学”数据库</a>
                                </div>
                                <div className={this.props.Country=="USA"&&this.props.Type=="硕士"? "" : "inputHide"}>
                                    <br />
                                    <p>系统推荐的学校是根据您提交的基本数据而得出的结论，仅供参考。选校是一个复杂的过程，除了客观的条件，还受许多其他因素的影响，所以需要专业的老师和您进行详细的沟通。我们的顾问老师会在2个工作日内和您联络，结合您的实际情况，提供专业的指导意见和建议，帮助您选择到适合的学校。</p><br/>
                                    <div><b style={{color:"red"}}>特别推荐：</b></div>
                                    <p>人人留学整理了100多所提供直接录取和双录取的美国大学，有一部分是排名前100的大学，甚至还有几所排名前50的学校，有些还提供奖学金和实习项目，欢迎有兴趣的同学查询。</p>
                                    <br />
                                    <a target="_blank" href="http://node.rrliuxue.com/USAProject" className="hrefCss">点击查看“美国大学直录双录项目</a>
                                    <br /><br />
                                    <a target="_blank" href="College-index-USA-大学" className="hrefCss" >点击查看“美国大学”数据库</a>
                                </div>


                                <div className={this.props.Country=="AUS"&&this.props.Type=="高中"? "" : "inputHide"}>
                                    <p>澳大利亚高中数量庞大，人人院校库根据您提交的基本数据，推荐的都是能直接办理的中学。在申请旺季时，每天各个学校的招生名额都在发生变化。我们的顾问老师会在2个工作日内和您进行沟通，结合您的实际情况，提供专业的指导意见和建议，帮助您选择到适合的学校。</p><br/>
                                    <p>澳大利亚顶尖的私立寄宿制或者走读制中学一般是没有招生代理的，所以也不在我们的院校库中，如果您在申请办理中需要我们专业的指导和帮助，欢迎联系我们的顾问老师。</p>
                                    <br/>
                                    <ul className="compuUl">
                                        {nodeSchool}
                                    </ul>
                                    <a target="_blank" href="College-index-AUS-高中" className="hrefCss" >点击查看“澳洲高中”数据库</a>
                                </div>
                                <div className={this.props.Country=="AUS"&&this.props.Type=="大学"? "" : "inputHide"}>
                                    <p>系统推荐的学校是根据您提交的基本数据而得出的结论，仅供参考。选校是一个复杂的过程，除了客观的条件，还受许多其他因素的影响，所以需要专业的老师和您进行详细的沟通。我们的顾问老师会在2个工作日内和您联络，结合您的实际情况，提供专业的指导意见和建议，帮助您选择到适合的学校。</p><br/>
                                    <div>5星级大学，也就是著名的澳洲8大，是中国学生申请最多的大学：</div><br/>
                                    <div>澳洲国立大学&nbsp;&nbsp;&nbsp;&nbsp;悉尼大学&nbsp;&nbsp;&nbsp;&nbsp;墨尔本大学&nbsp;&nbsp;&nbsp;&nbsp;新南威尔士大学<br/>
                                        阿德莱德大学&nbsp;&nbsp;&nbsp;&nbsp;西澳大学&nbsp;&nbsp;&nbsp;&nbsp;莫纳什大学&nbsp;&nbsp;&nbsp;&nbsp;昆士兰大学
                                    </div>
                                    <div></div>
                                    <div><b style={{color:"red"}}>特别提醒：</b></div>
                                    <p>1.如果您选择了转学分申请，因为情况比较特殊，人人留学的顾问老师将根据您留下的联系方式在2个工作日内直接和您沟通，或者您也可以直接加QQ号：207506653联系，请注明：转学分申请。</p>
                                    <p>2.如果您选择了本科快捷课程（IBT），详情请点击：<a href="/AUSIBT" target="_blank">IBT快捷课程介绍</a></p>
                                    <br/>
                                    <a target="_blank" href="College-index-AUS-大学" className="hrefCss" >点击查看“澳洲大学”数据库</a>
                                </div>
                                 <div className={this.props.Country=="AUS"&&this.props.Type=="硕士"? "" : "inputHide"}>
                                    <p>系统推荐的学校是根据您提交的基本数据而得出的结论，仅供参考。选校是一个复杂的过程，除了客观的条件，还受许多其他因素的影响，所以需要专业的老师和您进行详细的沟通。我们的顾问老师会在2个工作日内和您联络，结合您的实际情况，提供专业的指导意见和建议，帮助您选择到适合的学校。</p><br/>
                                    <div>5星级大学，也就是著名的澳洲8大，是中国学生申请最多的大学：</div><br/>
                                    <div>澳洲国立大学&nbsp;&nbsp;&nbsp;&nbsp;悉尼大学&nbsp;&nbsp;&nbsp;&nbsp;墨尔本大学&nbsp;&nbsp;&nbsp;&nbsp;新南威尔士大学<br/>
                                        阿德莱德大学&nbsp;&nbsp;&nbsp;&nbsp;西澳大学&nbsp;&nbsp;&nbsp;&nbsp;莫纳什大学&nbsp;&nbsp;&nbsp;&nbsp;昆士兰大学
                                    </div>
                                    <div></div>
                                    <br /><br />
                                    <a target="_blank" href="College-index-AUS-大学" className="hrefCss" >点击查看“澳洲大学”数据库</a>
                                </div>




                                <div className={this.props.Country=="UK"&&this.props.Type=="高中"? "" : "inputHide"}>
                                    <p>英国高中数量庞大，人人院校库根据您提交的基本数据，推荐的都是能直接办理的中学。在申请旺季时，每天各个学校的招生名额都在发生变化。我们的顾问老师会在2个工作日内和您进行沟通，结合您的实际情况，提供专业的指导意见和建议，帮助您选择到适合的学校。</p><br/>
                                    <p>英国顶尖的私立寄宿制或者走读制中学一般是没有招生代理的，所以也不在我们的院校库中，如果您在申请办理中需要我们专业的指导和帮助，欢迎联系我们的顾问老师。</p>
                                    <br/>
                                    <ul className="compuUl">
                                        {nodeSchool}
                                    </ul>
                                    <a target="_blank" href="College-index-UK-高中" className="hrefCss" >点击查看“英国高中”数据库</a>
                                </div>

                                <div className={this.props.Country=="UK"&&this.props.Type=="大学"? "" : "inputHide"}>
                                    <p>系统推荐的学校是根据您提交的基本数据而得出的结论，仅供参考。选校是一个复杂的过程，除了客观的条件，还受许多其他因素的影响，所以需要专业的老师和您进行详细的沟通。我们的顾问老师会在2个工作日内和您联络，结合您的实际情况，提供专业的指导意见和建议，帮助您选择到适合的学校。</p><br/>
                                    <div><b style={{color:"red"}}>特别提醒：</b></div>
                                    <p>如果你选择了Top-up课程，因为情况较为特殊，人人留学的顾问老师将根据您留下的联系方式在2个工作日内直接和您沟通，或者您也可以直接加QQ号：1406786634联系，请注明：Top-up申请。</p>
                                    <br/>
                                    <a target="_blank" href="College-index-UK-大学" className="hrefCss" >点击查看“英国大学”数据库</a>
                                </div>
                                <div className={this.props.Country=="UK"&&this.props.Type=="硕士"? "" : "inputHide"}>
                                    <p>系统推荐的学校是根据您提交的基本数据而得出的结论，仅供参考。选校是一个复杂的过程，除了客观的条件，还受许多其他因素的影响，所以需要专业的老师和您进行详细的沟通。我们的顾问老师会在2个工作日内和您联络，结合您的实际情况，提供专业的指导意见和建议，帮助您选择到适合的学校。</p><br/>
                                    <br />
                                    <a target="_blank" href="College-index-UK-大学" className="hrefCss" >点击查看“英国大学”数据库</a>
                                </div>


                                <div className={this.props.Country=="JP"&&this.props.Type=="高中"? "" : "inputHide"}>
                                    <p>日本到中国直接招生的中学一共只有十几所，可选择的范围很小，我们的顾问老师会在2个工作日内和您进行沟通，结合您的实际情况，提供专业的指导意见和建议，帮助您选择到适合的学校。</p><br/>
                                    <p>人人院校库对在中国直接招生的学校作了整理和展示，你可以通过它了解更多信息，</p>
                                    <a target="_blank" href="College-index-JP-高中" className="hrefCss" >点击查看“日本高中”数据库</a>
                                </div>
                                <div className={this.props.Country=="JP"&&this.props.Type=="大学"? "" : "inputHide"}>
                                    <p>日本只有国立大学才会接受研究生申请，接受研究生一般都是由导师个人决定，尽管有一定的客观标准，但带有更多的主观倾向，所以无法给出一个标准的推荐。我们的顾问老师会在2个工作日内和您进行详细的沟通，结合您的实际情况，给出专业的指导意见和建议，帮助您选择到适合您的学校和专业。</p><br/>
                                    <div><b>这里展示基本的要求：</b></div>
                                    <p>1.文科：有学士学位、日语N1、经济经营学需要托福成绩80分以上</p>
                                    <p>2.理科：本科有学士学位、日语N2、托福成绩80分以上</p>
                                    <br/>
                                    <p>人人院校库对日本大学作了详尽的介绍，你可以通过它了解更多大学情况，</p>
                                    <a target="_blank" href="College-index-JP-大学" className="hrefCss" >点击查看“日本大学”数据库</a>
                                </div>

                                <div className={this.props.Country=="JP"&&this.props.Type=="语言学校"? "" : "inputHide"}>
                                    <p>因为日本的语言学校没有排名，所以也就没有统一的选校标准。一般都以地区分布、学费高低、国际化程度、开设的课程等作为参考。你可到人人日本院校库里按以上属性进行搜索了解。</p><br/>
                                    <p>我们的顾问老师会在2个工作日内和您进行沟通，结合您的实际情况，提供专业的指导意见和建议，帮助您选择到适合的学校。</p>
                                    <a target="_blank" href="College-index-JP-高中" className="hrefCss" >点击查看“日本语言学校”数据库</a>
                                </div>
                                <div className={this.props.Country=="JP"&&this.props.Type=="研究生院"? "" : "inputHide"}>
                                    <p>日本只有国立大学才会接受研究生申请，接受研究生一般都是由导师个人决定，尽管有一定的客观标准，但带有更多的主观倾向，所以无法给出一个标准的推荐。我们的顾问老师会在2个工作日内和您进行详细的沟通，结合您的实际情况，给出专业的指导意见和建议，帮助您选择到适合您的学校和专业。</p><br/>
                                    <div><b>这里展示基本的要求：</b></div>
                                    <p>1.文科：有学士学位、日语N1、经济经营学需要托福成绩80分以上</p>
                                    <p>2.理科：本科有学士学位、日语N2、托福成绩80分以上</p>
                                    <br/>
                                    <p>人人院校库对日本大学作了详尽的介绍，你可以通过它了解更多大学情况，</p>
                                    <a target="_blank" href="College-index-JP-研究生院"  className="hrefCss">点击查看“研究生院”数据库</a>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="clear"></div>
                </div>
            </div>
            )
    }

}


export default SetpResule;


/*     <div className={this.props.Country=="AUS"&&this.props.Type=="大学"? "" : "inputHide"}>
                                    <p>系统推荐的学校是根据您提交的基本数据而得出的结论，仅供参考。选校是一个复杂的过程，除了客观的条件，还受许多其他因素的影响，所以需要专业的老师和您进行详细的沟通。我们的顾问老师会在2个工作日内和您联络，结合您的实际情况，提供专业的指导意见和建议，帮助您选择到适合的学校。</p><br/>
                                    <div>5星级大学，也就是著名的澳洲8大，是中国学生申请最多的大学：</div><br/>
                                    <div>澳洲国立大学&nbsp;&nbsp;&nbsp;&nbsp;悉尼大学&nbsp;&nbsp;&nbsp;&nbsp;墨尔本大学&nbsp;&nbsp;&nbsp;&nbsp;新南威尔士大学<br/>
                                        阿德莱德大学&nbsp;&nbsp;&nbsp;&nbsp;西澳大学&nbsp;&nbsp;&nbsp;&nbsp;莫纳什大学&nbsp;&nbsp;&nbsp;&nbsp;昆士兰大学
                                    </div>
                                    <div></div>
                                    <div><b style={{color:"red"}}>特别提醒：</b></div>
                                    <p>1.如果您选择了转学分申请，因为情况比较特殊，人人留学的顾问老师将根据您留下的联系方式在2个工作日内直接和您沟通，或者您也可以直接加QQ号：207506653联系，请注明：转学分申请。</p>
                                    <p>2.如果您选择了本科快捷课程（IBT），详情请点击：<a href="/AUSIBT" target="_blank">IBT快捷课程介绍</a></p>
                                    <br/>
                                    <a target="_blank" href="College-index-AUS-大学" >点击查看“澳洲大学”数据库</a>
                                </div>*/






/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import styles from './USA.less';
import withStyles from '../../../../decorators/withStyles';
import Link from '../../../../utils/Link';

import $ from 'jquery';

@withStyles(styles)
class SchoolSearch extends React.Component{

    constructor(props) {
        super(props);
        this.state = {zhuanye:"本科排名"};
    }
    changeState(e){
        this.setState({zhuanye:e.target.innerHTML});

        if(e.target.innerHTML=="本科排名"){

            $("#benkeZhuangye").show();
            $("#yanjiushengZhuangye").hide();
        }else{

            $("#benkeZhuangye").hide();
            $("#yanjiushengZhuangye").show();
        }
    }
    render() {

        var flag=this.props.flag;

        var arr=[1];

        var showDv;

          showDv = arr.map(function(){

                return (
                    <div>
                        <ul className="zhuanYeUl" id="benkeZhuangye">
                            <li className="zhuanYeli">
                                <div className="img">
                                    <img src="http://7xnmna.com2.z0.glb.qiniucdn.com/usa-benke-Princeton.png" />
                                </div>
                                <div className="mainContent">
                                    <ul className="mainContentUl">
                                        <li>
                                            <div className="orangeBlock">1</div>
                                            <div className="titleLi">普林斯顿大学</div>
                                            <div className="clear"></div>
                                        </li>
                                        <li className="englishName">
                                            Princeton University
                                        </li>
                                        <li className="xueliLi">
                                            <span>私立非营利</span>
                                            <span>本科学校</span>
                                        </li>
                                        <li className="kemuLI">
                                            <div className="iterm"><i></i><span>商科</span></div>
                                            <div className="iterm"><i></i><span>工程</span></div>
                                            <div className="iterm"><i></i><span>科学</span></div>
                                            <div className="clear"></div>
                                        </li>
                                        <li className="buttonLi">
                                            <button className="button-normal"><a href="/CollegeDetail-USA-大学-24980" onClick={Link.handleClick}>查看详情</a></button>
                                        </li>
                                    </ul>
                                </div>
                                <div className="clear"></div>
                            </li>
                            <li className="zhuanYeli">
                                <div className="img">
                                    <img src="http://7xnmna.com2.z0.glb.qiniucdn.com/usa-benke-Harvard.png" />
                                </div>
                                <div className="mainContent">
                                    <ul className="mainContentUl">
                                        <li>
                                            <div className="orangeBlock">2</div>
                                            <div className="titleLi">哈佛大学</div>
                                            <div className="clear"></div>
                                        </li>
                                        <li className="englishName">
                                            Harvard University
                                        </li>
                                        <li className="xueliLi">
                                            <span>私立非营利</span>
                                            <span>本科学校</span>
                                            <span>商学院</span>
                                        </li>
                                        <li className="kemuLI">
                                            <div className="iterm"><i></i><span>商科</span></div>
                                            <div className="iterm"><i></i><span>工程</span></div>
                                            <div className="iterm"><i></i><span>设计</span></div>
                                            <div className="iterm"><i></i><span>科学</span></div>
                                            <div className="clear"></div>
                                        </li>
                                        <li className="buttonLi">
                                            <button className="button-normal"><a href="/CollegeDetail-USA-大学-29487" onClick={Link.handleClick}>查看详情</a></button>
                                        </li>
                                    </ul>
                                </div>
                                <div className="clear"></div>
                            </li>
                            <li className="zhuanYeli">
                                <div className="img">
                                    <img src="http://7xnmna.com2.z0.glb.qiniucdn.com/usa-benke-Yale.png" />
                                </div>
                                <div className="mainContent">
                                    <ul className="mainContentUl">
                                        <li>
                                            <div className="orangeBlock">3</div>
                                            <div className="titleLi">耶鲁大学</div>
                                            <div className="clear"></div>
                                        </li>
                                        <li className="englishName">
                                            Yale University
                                        </li>
                                        <li className="xueliLi">
                                            <span>私立非营利</span>
                                            <span>本科学校</span>
                                            <span>商学院</span>
                                        </li>
                                        <li className="kemuLI">
                                            <div className="iterm"><i></i><span>商科</span></div>
                                            <div className="iterm"><i></i><span>工程</span></div>
                                            <div className="iterm"><i></i><span>科学</span></div>
                                            <div className="clear"></div>
                                        </li>
                                        <li className="buttonLi">
                                            <button className="button-normal"><a href="/CollegeDetail-USA-大学-25019" onClick={Link.handleClick}>查看详情</a></button>
                                        </li>
                                    </ul>
                                </div>
                                <div className="clear"></div>
                            </li>
                            <li className="zhuanYeli">
                                <div className="img">
                                    <img src="http://7xnmna.com2.z0.glb.qiniucdn.com/usa-benke-Columbia.png" />
                                </div>
                                <div className="mainContent">
                                    <ul className="mainContentUl">
                                        <li>
                                            <div className="orangeBlock">4</div>
                                            <div className="titleLi">哥伦比亚大学</div>
                                            <div className="clear"></div>
                                        </li>
                                        <li className="englishName">
                                            Columbia University in the City of New York
                                        </li>
                                        <li className="xueliLi">
                                            <span>公立</span>
                                            <span>本科学院</span>
                                            <span>商学院</span>
                                        </li>
                                        <li className="kemuLI">
                                            <div className="iterm"><i></i><span>商科</span></div>
                                            <div className="iterm"><i></i><span>工程</span></div>
                                            <div className="iterm"><i></i><span>设计</span></div>
                                            <div className="iterm"><i></i><span>科学</span></div>
                                            <div className="clear"></div>
                                        </li>
                                        <li className="buttonLi">
                                            <button className="button-normal"><a href="/CollegeDetail-USA-大学-25018" onClick={Link.handleClick}>查看详情</a></button>
                                        </li>
                                    </ul>
                                </div>
                                <div className="clear"></div>
                            </li>
                             <li className="zhuanYeli">
                                <div className="img">
                                    <img src="http://7xnmna.com2.z0.glb.qiniucdn.com/usa-benke-Chicago.png" />
                                </div>
                                <div className="mainContent">
                                    <ul className="mainContentUl">
                                        <li>
                                            <div className="orangeBlock">4</div>
                                            <div className="titleLi">芝加哥大学</div>
                                            <div className="clear"></div>
                                        </li>
                                        <li className="englishName">
                                            University of Chicago
                                        </li>
                                        <li className="xueliLi">
                                            <span>私立营利</span>
                                            <span>本科学校</span>
                                            <span>商学院</span>
                                        </li>
                                        <li className="kemuLI">
                                            <div className="iterm"><i></i><span>商科</span></div>
                                            <div className="iterm"><i></i><span>工程</span></div>
                                            <div className="iterm"><i></i><span>设计</span></div>
                                            <div className="iterm"><i></i><span>传媒</span></div>
                                            <div className="iterm"><i></i><span>科学</span></div>
                                            <div className="clear"></div>
                                        </li>
                                        <li className="buttonLi">
                                            <button className="button-normal"><a href="/CollegeDetail-USA-大学-24981" onClick={Link.handleClick}>查看详情</a></button>
                                        </li>
                                    </ul>
                                </div>
                                <div className="clear"></div>
                            </li>
                             <li className="zhuanYeli">
                                <div className="img">
                                    <img src="http://7xnmna.com2.z0.glb.qiniucdn.com/usa-benke-Stanford.png" />
                                </div>
                                <div className="mainContent">
                                    <ul className="mainContentUl">
                                        <li>
                                            <div className="orangeBlock">4</div>
                                            <div className="titleLi">斯坦福大学</div>
                                            <div className="clear"></div>
                                        </li>
                                        <li className="englishName">
                                            Stanford University
                                        </li>
                                        <li className="xueliLi">
                                            <span>私立非营利</span>
                                            <span>本科学校</span>
                                            <span>商学院</span>
                                        </li>
                                        <li className="kemuLI">
                                            <div className="iterm"><i></i><span>商科</span></div>
                                            <div className="iterm"><i></i><span>工程</span></div>
                                            <div className="iterm"><i></i><span>设计</span></div>
                                            <div className="iterm"><i></i><span>科学</span></div>
                                            <div className="clear"></div>
                                        </li>
                                        <li className="buttonLi">
                                            <button className="button-normal"><a href="/CollegeDetail-USA-大学-25030" onClick={Link.handleClick}>查看详情</a></button>
                                        </li>
                                    </ul>
                                </div>
                                <div className="clear"></div>
                            </li>
                             <li className="zhuanYeli">
                                <div className="img">
                                    <img src="http://7xnmna.com2.z0.glb.qiniucdn.com/usa-benke-Massachusetts.png" />
                                </div>
                                <div className="mainContent">
                                    <ul className="mainContentUl">
                                        <li>
                                            <div className="orangeBlock">7</div>
                                            <div className="titleLi">麻省理工学院</div>
                                            <div className="clear"></div>
                                        </li>
                                        <li className="englishName">
                                            Massachusetts Institute of Technology (MIT)
                                        </li>
                                        <li className="xueliLi">
                                            <span>私立非营利</span>
                                            <span>本科学校</span>
                                            <span>商学院</span>
                                        </li>
                                        <li className="kemuLI">
                                            <div className="iterm"><i></i><span>商科</span></div>
                                            <div className="iterm"><i></i><span>工程</span></div>
                                            <div className="iterm"><i></i><span>科学</span></div>
                                            <div className="clear"></div>
                                        </li>
                                        <li className="buttonLi">
                                            <button className="button-normal"><a href="/CollegeDetail-USA-大学-25036" onClick={Link.handleClick}>查看详情</a></button>
                                        </li>
                                    </ul>
                                </div>
                                <div className="clear"></div>
                            </li>
                             <li className="zhuanYeli">
                                <div className="img">
                                    <img src="http://7xnmna.com2.z0.glb.qiniucdn.com/usa-benke-University.png" />
                                </div>
                                <div className="mainContent">
                                    <ul className="mainContentUl">
                                        <li>
                                            <div className="orangeBlock">8</div>
                                            <div className="titleLi">宾夕法尼亚大学</div>
                                            <div className="clear"></div>
                                        </li>
                                        <li className="englishName">
                                            University of Pennsylvania
                                        </li>
                                        <li className="xueliLi">
                                            <span>私立非营利</span>
                                            <span>本科学校</span>
                                            <span>商学院</span>
                                        </li>
                                        <li className="kemuLI">
                                            <div className="iterm"><i></i><span>商科</span></div>
                                            <div className="iterm"><i></i><span>工程</span></div>
                                            <div className="iterm"><i></i><span>设计</span></div>
                                            <div className="iterm"><i></i><span>科学</span></div>
                                            <div className="clear"></div>
                                        </li>
                                        <li className="buttonLi">
                                            <button className="button-normal"><a href="/CollegeDetail-USA-大学-25021" onClick={Link.handleClick}>查看详情</a></button>
                                        </li>
                                    </ul>
                                </div>
                                <div className="clear"></div>
                            </li>
                            <div className="clear"></div>
                        </ul>
                        <ul className="sectionZhuanYeContentUl" id="yanjiushengZhuangye">
                            <li className="ZhuanYeContentUlli">
                                <div className="showBg">
                                    <i className="icon"></i>
                                    <div className="font">商科</div>
                                    <div className="clear"></div>
                                </div>
                                <ul className="schoolList">
                                    <li><a href="/CollegeRank-USA-商科排名-会计学" onClick={Link.handleClick}>会计学</a></li>
                                    <li><a href="/CollegeRank-USA-商科排名-企业管理/创业学" onClick={Link.handleClick}>企业管理/创业学</a></li>
                                    <li><a href="/CollegeRank-USA-商科排名-高级工商管理硕士" onClick={Link.handleClick}>高级工商管理硕士</a></li>
                                    <li><a href="/CollegeRank-USA-商科排名-金融学" onClick={Link.handleClick}>金融学</a></li>
                                    <li><a href="/CollegeRank-USA-商科排名-信息系统管理学" onClick={Link.handleClick}>信息系统管理学</a></li>
                                    <li><a href="/CollegeRank-USA-商科排名-国际" onClick={Link.handleClick}>国际</a></li>
                                    <li><a href="/CollegeRank-USA-商科排名-管理学" onClick={Link.handleClick}>管理学</a></li>
                                    <li><a href="/CollegeRank-USA-商科排名-市场营销学" onClick={Link.handleClick}>市场营销学</a></li>
                                    <li><a href="/CollegeRank-USA-商科排名-非盈利" onClick={Link.handleClick}>非盈利</a></li>
                                    <li><a href="/CollegeRank-USA-商科排名-在职工商管理硕士" onClick={Link.handleClick}>在职工商管理硕士</a></li>
                                    <li><a href="/CollegeRank-USA-商科排名-生产/运营学" onClick={Link.handleClick}>生产/运营学</a></li>
                                    <li><a href="/CollegeRank-USA-商科排名-供应链/物流学" onClick={Link.handleClick}>供应链/物流学</a></li>
                   
                                    <div className="clear"></div>
                                </ul>
                                <div className="bgShadowAS">
                                    <div className="contentFont">鼠标移上去之后显示专业简介</div>
                                </div>
                            </li>
                            <li className="ZhuanYeContentUlli">
                                <div className="showBg">
                                    <i className="icon icon1"></i>
                                    <div className="font">教育学</div>
                                    <div className="clear"></div>
                                </div>
                                <ul className="schoolList">
                                    <li><a href="/CollegeRank-USA-教育学排名-课程与导论" onClick={Link.handleClick}>课程与导论</a></li>
                                    <li><a href="/CollegeRank-USA-教育学排名-教育管理和监管学" onClick={Link.handleClick}>教育管理和监管学</a></li>
                                    <li><a href="/CollegeRank-USA-教育学排名-教育政策学" onClick={Link.handleClick}>教育政策学</a></li>
                                    <li><a href="/CollegeRank-USA-教育学排名-教育心理学" onClick={Link.handleClick}>教育心理学</a></li>
                                    <li><a href="/CollegeRank-USA-教育学排名-初级师范教育学" onClick={Link.handleClick}>初级师范教育学</a></li>
                                    <li><a href="/CollegeRank-USA-教育学排名-高等教育管理学" onClick={Link.handleClick}>高等教育管理学</a></li>
                                    <li><a href="/CollegeRank-USA-教育学排名-中级师范教育学" onClick={Link.handleClick}>中级师范教育学</a></li>
                                    <li><a href="/CollegeRank-USA-教育学排名-特殊教育学" onClick={Link.handleClick}>特殊教育学</a></li>
                                    <li><a href="/CollegeRank-USA-教育学排名-学生咨询和个人服务学" onClick={Link.handleClick}>学生咨询和个人服务学</a></li>
                                    <div className="clear"></div>
                                </ul>
                                <div className="bgShadowAS">
                                    <div className="contentFont">鼠标移上去之后显示专业简介</div>
                                </div>
                            </li>
                            <li className="ZhuanYeContentUlli">
                                <div className="showBg">
                                    <i className="icon icon2"></i>
                                    <div className="font">工程学</div>
                                    <div className="clear"></div>
                                </div>
                                <ul className="schoolList">
                                    <li><a href="/CollegeRank-USA-工程学排名-宇宙空间/航空/太空航行学" onClick={Link.handleClick}>宇宙空间/航空/太空航行学</a></li>
                                    <li><a href="/CollegeRank-USA-工程学排名-生物/农业学" onClick={Link.handleClick}>生物/农业学</a></li>
                                    <li><a href="/CollegeRank-USA-工程学排名-生物医学/生物工程学" onClick={Link.handleClick}>生物医学/生物工程学</a></li>
                                    <li><a href="/CollegeRank-USA-工程学排名-化工" onClick={Link.handleClick}>化工</a></li>
                                    <li><a href="/CollegeRank-USA-工程学排名-城市学" onClick={Link.handleClick}>城市学</a></li>
                                    <li><a href="/CollegeRank-USA-工程学排名-计算机学" onClick={Link.handleClick}>计算机学</a></li>
                                    <li><a href="/CollegeRank-USA-工程学排名-电学/电子学/通信工程学" onClick={Link.handleClick}>电学/电子学/通信工程学</a></li>
                                    <li><a href="/CollegeRank-USA-工程学排名-材料" onClick={Link.handleClick}>材料</a></li>
                                    <li><a href="/CollegeRank-USA-工程学排名-环境学/环境健康学" onClick={Link.handleClick}>环境学/环境健康学</a></li>
                                    <li><a href="/CollegeRank-USA-工程学排名-工业学/制造学/系统学" onClick={Link.handleClick}>工业学/制造学/系统学</a></li>
                                    <li><a href="/CollegeRank-USA-工程学排名-机械学" onClick={Link.handleClick}>机械学</a></li>
                                    <li><a href="/CollegeRank-USA-工程学排名-原子能学" onClick={Link.handleClick}>原子能学</a></li>
                           
                                    <div className="clear"></div>
                                </ul>
                                <div className="bgShadowAS">
                                    <div className="contentFont">鼠标移上去之后显示专业简介</div>
                                </div>
                            </li>
                            <div className="clear"></div>
                            <div className="hr"></div>
                            <li className="ZhuanYeContentUlli">
                                <div className="showBg">
                                    <i className="icon icon3"></i>
                                    <div className="font">法学</div>
                                    <div className="clear"></div>
                                </div>
                                <ul className="schoolList">
                                    <li><a href="/CollegeRank-USA-法学排名-临床训练学" onClick={Link.handleClick}>临床训练学</a></li>
                                    <li><a href="/CollegeRank-USA-法学排名-纠纷解决机制学" onClick={Link.handleClick}>纠纷解决机制学</a></li>
                                    <li><a href="/CollegeRank-USA-法学排名-环境学" onClick={Link.handleClick}>环境学</a></li>
                                    <li><a href="/CollegeRank-USA-法学排名-卫生保健法" onClick={Link.handleClick}>卫生保健法</a></li>
                                    <li><a href="/CollegeRank-USA-法学排名-知识产权法" onClick={Link.handleClick}>知识产权法</a></li>
                                    <li><a href="/CollegeRank-USA-法学排名-国际法" onClick={Link.handleClick}>国际法</a></li>
                                    <li><a href="/CollegeRank-USA-法学排名-法律文书写作" onClick={Link.handleClick}>法律文书写作</a></li>
                                    <li><a href="/CollegeRank-USA-法学排名-在职法学" onClick={Link.handleClick}>在职法学</a></li>
                                    <li><a href="/CollegeRank-USA-法学排名-税法学" onClick={Link.handleClick}>税法学</a></li>
                                    <li><a href="/CollegeRank-USA-法学排名-辩护学" onClick={Link.handleClick}>辩护学</a></li>
                                    <div className="clear"></div>
                                </ul>
                                <div className="bgShadowAS">
                                    <div className="contentFont">鼠标移上去之后显示专业简介</div>
                                </div>
                            </li>
                            <li className="ZhuanYeContentUlli">
                                <div className="showBg">
                                    <i className="icon icon4"></i>
                                    <div className="font">医学</div>
                                    <div className="clear"></div>
                                </div>
                                <ul className="schoolList">
                                    <li><a href="/CollegeRank-USA-医学排名-艾滋病学" onClick={Link.handleClick}>艾滋病学</a></li>
                                    <li><a href="/CollegeRank-USA-医学排名-药品与酒精滥用" onClick={Link.handleClick}>药品与酒精滥用</a></li>
                                    <li><a href="/CollegeRank-USA-医学排名-家用医学" onClick={Link.handleClick}>家用医学</a></li>
                                    <li><a href="/CollegeRank-USA-医学排名-老年医学" onClick={Link.handleClick}>老年医学</a></li>
                                    <li><a href="/CollegeRank-USA-医学排名-内科医学" onClick={Link.handleClick}>内科医学</a></li>
                                    <li><a href="/CollegeRank-USA-医学排名-小儿科" onClick={Link.handleClick}>小儿科</a></li>
                                    <li><a href="/CollegeRank-USA-医学排名-乡土医学" onClick={Link.handleClick}>乡土医学</a></li>
                                    <li><a href="/CollegeRank-USA-医学排名-女性健康" onClick={Link.handleClick}>女性健康</a></li>
                                    <li><a href="/CollegeRank-USA-医学排名-生物科学" onClick={Link.handleClick}>生物科学</a></li>
                                    <div className="clear"></div>
                                </ul>
                                <div className="bgShadowAS">
                                    <div className="contentFont">鼠标移上去之后显示专业简介</div>
                                </div>
                            </li>
                            <li className="ZhuanYeContentUlli">
                                <div className="showBg">
                                    <i className="icon icon5"></i>
                                    <div className="font">科学</div>
                                    <div className="clear"></div>
                                </div>
                                <ul className="schoolList">
                                    <li><a href="/CollegeRank-USA-科学排名-化学" onClick={Link.handleClick}>化学</a></li>
                                    <li><a href="/CollegeRank-USA-科学排名-计算机科学" onClick={Link.handleClick}>计算机科学</a></li>
                                    <li><a href="/CollegeRank-USA-科学排名-地球科学" onClick={Link.handleClick}>地球科学</a></li>
                                    <li><a href="/CollegeRank-USA-科学排名-数学" onClick={Link.handleClick}>数学</a></li>
                                    <li><a href="/CollegeRank-USA-科学排名-物理学" onClick={Link.handleClick}>物理学</a></li>
                                    <li><a href="/CollegeRank-USA-科学排名-统计学" onClick={Link.handleClick}>统计学</a></li>
  
                                    <div className="clear"></div>
                                </ul>
                                <div className="bgShadowAS">
                                    <div className="contentFont">鼠标移上去之后显示专业简介</div>
                                </div>
                            </li>
                            <div className="clear"></div>
                            <div className="hr"></div>
                            <li className="ZhuanYeContentUlli">
                                <div className="showBg">
                                    <i className="icon icon6"></i>
                                    <div className="font">图书馆与信息研究</div>
                                    <div className="clear"></div>
                                </div>
                                <ul className="schoolList">
                                    <li><a href="/CollegeRank-USA-图书馆与信息研究排名-档案保存" onClick={Link.handleClick}>档案保存</a></li>
                                    <li><a href="/CollegeRank-USA-图书馆与信息研究排名-数学图书馆" onClick={Link.handleClick}>数学图书馆</a></li>
                                    <li><a href="/CollegeRank-USA-图书馆与信息研究排名-卫生事业" onClick={Link.handleClick}>卫生事业</a></li>
                                    <li><a href="/CollegeRank-USA-图书馆与信息研究排名-信息系统" onClick={Link.handleClick}>信息系统</a></li>
                                    <li><a href="/CollegeRank-USA-图书馆与信息研究排名-法律图书馆" onClick={Link.handleClick}>法律图书馆</a></li>
                                    <li><a href="/CollegeRank-USA-图书馆与信息研究排名-学校图书馆媒体" onClick={Link.handleClick}>学校图书馆媒体</a></li>
                                    <li><a href="/CollegeRank-USA-图书馆与信息研究排名-儿童及青少年服务" onClick={Link.handleClick}>儿童及青少年服务</a></li>
                     
                                    <div className="clear"></div>
                                </ul>
                                <div className="bgShadowAS">
                                    <div className="contentFont">鼠标移上去之后显示专业简介</div>
                                </div>
                            </li>
                            <li className="ZhuanYeContentUlli">
                                <div className="showBg">
                                    <i className="icon icon7"></i>
                                    <div className="font">社会科学与人文科学</div>
                                    <div className="clear"></div>
                                </div>
                                <ul className="schoolList">
                                    <li><a href="/CollegeRank-USA-社会科学与人文科学排名-社会学" onClick={Link.handleClick}>社会学</a></li>
                                    <li><a href="/CollegeRank-USA-社会科学与人文科学排名-经济学" onClick={Link.handleClick}>经济学</a></li>
                                    <li><a href="/CollegeRank-USA-社会科学与人文科学排名-英语" onClick={Link.handleClick}>英语</a></li>
                                    <li><a href="/CollegeRank-USA-社会科学与人文科学排名-历史学" onClick={Link.handleClick}>历史学</a></li>
                                    <li><a href="/CollegeRank-USA-社会科学与人文科学排名-政治学" onClick={Link.handleClick}>政治学</a></li>
                                    <li><a href="/CollegeRank-USA-社会科学与人文科学排名-心理学" onClick={Link.handleClick}>心理学</a></li>
                                    <li><a href="/CollegeRank-USA-社会科学与人文科学排名-犯罪学" onClick={Link.handleClick}>犯罪学</a></li>
                                    <div className="clear"></div>
                                </ul>
                                <div className="bgShadowAS">
                                    <div className="contentFont">鼠标移上去之后显示专业简介</div>
                                </div>
                            </li>
                            <li className="ZhuanYeContentUlli">
                                <div className="showBg">
                                    <i className="icon icon8"></i>
                                    <div className="font">医疗保障</div>
                                    <div className="clear"></div>
                                </div>
                                <ul className="schoolList">
                                    <li><a href="/CollegeRank-USA-医疗保障排名-听力学" onClick={Link.handleClick}>听力学</a></li>
                                    <li><a href="/CollegeRank-USA-医疗保障排名-临床心理学" onClick={Link.handleClick}>临床心理学</a></li>
                                    <li><a href="/CollegeRank-USA-医疗保障排名-医疗保健管理" onClick={Link.handleClick}>医疗保健管理</a></li>
                                    <li><a href="/CollegeRank-USA-医疗保障排名-护理" onClick={Link.handleClick}>护理</a></li>
                                    <li><a href="/CollegeRank-USA-医疗保障排名-麻醉护理" onClick={Link.handleClick}>麻醉护理</a></li>
                                    <li><a href="/CollegeRank-USA-医疗保障排名-助产护理" onClick={Link.handleClick}>助产护理</a></li>
                                    <li><a href="/CollegeRank-USA-医疗保障排名-职业治疗法" onClick={Link.handleClick}>职业治疗法</a></li>
                                    <li><a href="/CollegeRank-USA-医疗保障排名-药学" onClick={Link.handleClick}>药学</a></li>
                                    <li><a href="/CollegeRank-USA-医疗保障排名-理疗" onClick={Link.handleClick}>理疗</a></li>
                                    <li><a href="/CollegeRank-USA-医疗保障排名-医师助理" onClick={Link.handleClick}>医师助理</a></li>
                                    <li><a href="/CollegeRank-USA-医疗保障排名-公共卫生" onClick={Link.handleClick}>公共卫生</a></li>
                                    <li><a href="/CollegeRank-USA-医疗保障排名-康复咨询" onClick={Link.handleClick}>康复咨询</a></li>
                                    <li><a href="/CollegeRank-USA-医疗保障排名-社会服务" onClick={Link.handleClick}>社会服务</a></li>
                                    <li><a href="/CollegeRank-USA-医疗保障排名-语音语言医理学" onClick={Link.handleClick}>语音语言医理学</a></li>
                                    <li><a href="/CollegeRank-USA-医疗保障排名-职业治疗法" onClick={Link.handleClick}>职业治疗法</a></li>
                                    <li><a href="/CollegeRank-USA-医疗保障排名-兽医" onClick={Link.handleClick}>兽医</a></li>
                                    <div className="clear"></div>
                                </ul>
                                <div className="bgShadowAS">
                                    <div className="contentFont">鼠标移上去之后显示专业简介</div>
                                </div>
                            </li>
                            <div className="clear"></div>
                            <div className="hr"></div>
                            <li className="ZhuanYeContentUlli">
                                <div className="showBg">
                                    <i className="icon icon9"></i>
                                    <div className="font">公共事务</div>
                                    <div className="clear"></div>
                                </div>
                                <ul className="schoolList">
                                    <li><a href="/CollegeRank-USA-公共事务排名-城市管理与城市政策" onClick={Link.handleClick}>城市管理与城市政策</a></li>
                                    <li><a href="/CollegeRank-USA-公共事务排名-环境政策与管理" onClick={Link.handleClick}>环境政策与管理</a></li>
                                    <li><a href="/CollegeRank-USA-公共事务排名-卫生政策与管理" onClick={Link.handleClick}>卫生政策与管理</a></li>
                                    <li><a href="/CollegeRank-USA-公共事务排名-信息技术管理" onClick={Link.handleClick}>信息技术管理</a></li>
                                    <li><a href="/CollegeRank-USA-公共事务排名-非营利组织管理" onClick={Link.handleClick}>非营利组织管理</a></li>
                                    <li><a href="/CollegeRank-USA-公共事务排名-公共财政与预算" onClick={Link.handleClick}>公共财政与预算</a></li>
                                    <li><a href="/CollegeRank-USA-公共事务排名-公共管理学" onClick={Link.handleClick}>公共管理学</a></li>
                                    <li><a href="/CollegeRank-USA-公共事务排名-公共政策分析" onClick={Link.handleClick}>公共政策分析</a></li>
                                    <li><a href="/CollegeRank-USA-公共事务排名-社会政策" onClick={Link.handleClick}>社会政策</a></li>
               
                                    <div className="clear"></div>
                                </ul>
                                <div className="bgShadowAS">
                                    <div className="contentFont">鼠标移上去之后显示专业简介</div>
                                </div>
                            </li>
                            <li className="ZhuanYeContentUlli">
                                <div className="showBg">
                                    <i className="icon icon10"></i>
                                    <div className="font">艺术类</div>
                                    <div className="clear"></div>
                                </div>
                                <ul className="schoolList">
                                    <li><a href="/CollegeRank-USA-艺术类排名-陶器制造" onClick={Link.handleClick}>陶器制造</a></li>
                                    <li><a href="/CollegeRank-USA-艺术类排名-平面造型设计" onClick={Link.handleClick}>平面造型设计</a></li>
                                    <li><a href="/CollegeRank-USA-艺术类排名-工业设计" onClick={Link.handleClick}>工业设计</a></li>
                                    <li><a href="/CollegeRank-USA-艺术类排名-室内设计" onClick={Link.handleClick}>室内设计</a></li>
                                    <li><a href="/CollegeRank-USA-艺术类排名-多媒体视频通信" onClick={Link.handleClick}>多媒体视频通信</a></li>
                                    <li><a href="/CollegeRank-USA-艺术类排名-美术" onClick={Link.handleClick}>美术</a></li>
                                    <li><a href="/CollegeRank-USA-艺术类排名-摄影" onClick={Link.handleClick}>摄影</a></li>
                                    <li><a href="/CollegeRank-USA-艺术类排名-版画" onClick={Link.handleClick}>版画</a></li>
                                    <li><a href="/CollegeRank-USA-艺术类排名-雕刻" onClick={Link.handleClick}>雕刻</a></li>
                                    <div className="clear"></div>
                                </ul>
                                <div className="bgShadowAS">
                                    <div className="contentFont">鼠标移上去之后显示专业简介</div>
                                </div>
                            </li>
                        <div className="clear"></div>
                        </ul>
                    </div>
                );
            });
        

        return (
            <section className="zhuangYePaiMing">
                <div className="title">
                    <h2>所有专业</h2>
                    <ul className="itemDv">
                        <li className={this.state.zhuanye == "本科排名"?"item active":"item"}  onClick={this.changeState.bind(this)}>本科排名</li>
                        <li className={this.state.zhuanye == "研究生排名"?"item active":"item"} onClick={this.changeState.bind(this)}>研究生排名</li>
                        <div className="clear"></div>
                    </ul>
                    <h4 className={this.state.zhuanye == "本科排名"?"readMore" : "hhdiee"}><a href="/CollegeRank-USA" onClick={Link.handleClick}>查看全部</a></h4>
                    <h4 className={this.state.zhuanye == "研究生排名"?"readMore" : "hhdiee"}><a href="/CollegeRank-USA-yanJiuSheng" onClick={Link.handleClick}>查看全部</a></h4>
                    <div className="clear"></div>
                </div>
                {showDv}
            </section>
        );
    }
    componentDidMount() {
        $(document).ready(function(){

            $("#benkeZhuangye").show();

            $("#yanjiushengZhuangye").hide();
/*
            $(".sectionZhuanYeContentUl .ZhuanYeContentUlli .showBg").mouseover(function(){

                var $self = $(this).parent();

                 $(".sectionZhuanYeContentUl .ZhuanYeContentUlli .bgShadowAS").hide();

                $self.find(".bgShadowAS").show();
            });*/
        });
    }
}

export default SchoolSearch;
/**
 * Created by XiaoKangZheng on 2015/7/28.
 */

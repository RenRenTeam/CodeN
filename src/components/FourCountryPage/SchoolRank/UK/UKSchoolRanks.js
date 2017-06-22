//UKSchoolRanks.js
/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import styles from './UK.less';
import withStyles from '../../../../decorators/withStyles';
import Link from '../../../../utils/Link';

import $ from 'jquery';

@withStyles(styles)
class UKSchoolRanks extends React.Component{

    render() {

        var flag=this.props.flag;

        var arr=[1];

        var showDv="";
            showDv = arr.map(function(){ 

                return (
                    <div>
                        <ul className="sectionZhuanYeContentUl" id="yanjiushengZhuangye">
                            <li className="ZhuanYeContentUlli">
                                <div className="showBg">
                                    <i className="icon"></i>
                                    <div className="font">商科</div>
                                    <div className="clear"></div>
                                </div>
                                <ul className="schoolList">
                                    <li><a href="/CollegeRank-UK-商业研究" onClick={Link.handleClick}>商业研究</a></li>
                                    <li><a href="/CollegeRank-UK-图书馆及信息管理" onClick={Link.handleClick}>图书馆及信息管理</a></li>
                                    <li><a href="/CollegeRank-UK-土地及物业管理" onClick={Link.handleClick}>土地及物业管理</a></li>
                                    <li><a href="/CollegeRank-UK-酒店" onClick={Link.handleClick}>酒店</a></li>
                                    <li><a href="/CollegeRank-UK-休闲" onClick={Link.handleClick}>休闲</a></li>
                                    <li><a href="/CollegeRank-UK-娱乐和旅游" onClick={Link.handleClick}>娱乐和旅游</a></li>
                              
                                    <div className="clear"></div>
                                </ul>
                                <div className="bgShadowAS">
                                    <div className="contentFont">鼠标移上去之后显示专业简介</div>
                                </div>
                            </li>
                            <li className="ZhuanYeContentUlli">
                                <div className="showBg">
                                    <i className="icon icon1"></i>
                                    <div className="font">金融</div>
                                    <div className="clear"></div>
                                </div>
                                <ul className="schoolList">
                                    <li><a href="/CollegeRank-UK-会计与金融" onClick={Link.handleClick}>会计与金融</a></li>
                                    <li><a href="/CollegeRank-UK-经济学" onClick={Link.handleClick}>经济学</a></li>
                          
                                    <div className="clear"></div>
                                </ul>
                                <div className="bgShadowAS">
                                    <div className="contentFont">鼠标移上去之后显示专业简介</div>
                                </div>
                            </li>
                            <li className="ZhuanYeContentUlli">
                                <div className="showBg">
                                    <i className="icon icon2"></i>
                                    <div className="font">工科</div>
                                    <div className="clear"></div>
                                </div>
                                <ul className="schoolList">
                                    <li><a href="/CollegeRank-UK-航空和制造工程学" onClick={Link.handleClick}>航空和制造工程学</a></li>
                                    <li><a href="/CollegeRank-UK-建筑学" onClick={Link.handleClick}>建筑学</a></li>
                                    <li><a href="/CollegeRank-UK-化学工程" onClick={Link.handleClick}>化学工程</a></li>
                                    <li><a href="/CollegeRank-UK-土木工程" onClick={Link.handleClick}>土木工程</a></li>
                                    <li><a href="/CollegeRank-UK-计算机科学" onClick={Link.handleClick}>计算机科学</a></li>
                                    <li><a href="/CollegeRank-UK-电子与电气工程" onClick={Link.handleClick}>电子与电气工程</a></li>
                                    <li><a href="/CollegeRank-UK-一般工程" onClick={Link.handleClick}>一般工程</a></li>
                                    <li><a href="/CollegeRank-UK-材料技术" onClick={Link.handleClick}>材料技术</a></li>
                                    <li><a href="/CollegeRank-UK-机械工程" onClick={Link.handleClick}>机械工程</a></li>
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
                                    <div className="font">自然科学</div>
                                    <div className="clear"></div>
                                </div>
                                <ul className="schoolList">
                                    <li><a href="/CollegeRank-UK-农业和林业学" onClick={Link.handleClick}>农业和林业学</a></li>
                                    <li><a href="/CollegeRank-UK-生物科学" onClick={Link.handleClick}>生物科学</a></li>
                                    <li><a href="/CollegeRank-UK-化学" onClick={Link.handleClick}>化学</a></li>
                                    <li><a href="/CollegeRank-UK-营养学" onClick={Link.handleClick}>营养学</a></li>
                                    <li><a href="/CollegeRank-UK-地理和环境科学" onClick={Link.handleClick}>地理和环境科学</a></li>
                                    <li><a href="/CollegeRank-UK-地质学" onClick={Link.handleClick}>地质学</a></li>
                                    <li><a href="/CollegeRank-UK-数学" onClick={Link.handleClick}>数学</a></li>
                                    <li><a href="/CollegeRank-UK-物理和天文" onClick={Link.handleClick}>物理和天文</a></li>
                                    <div className="clear"></div>
                                </ul>
                                <div className="bgShadowAS">
                                    <div className="contentFont">鼠标移上去之后显示专业简介</div>
                                </div>
                            </li>



                            <li className="ZhuanYeContentUlli">
                                <div className="showBg">
                                    <i className="icon icon4"></i>
                                    <div className="font">医药学</div>
                                    <div className="clear"></div>
                                </div>
                                <ul className="schoolList">
                                    <li><a href="/CollegeRank-UK-解剖与生理学" onClick={Link.handleClick}>解剖与生理学</a></li>
                                    <li><a href="/CollegeRank-UK-牙科" onClick={Link.handleClick}>牙科</a></li>
                                    <li><a href="/CollegeRank-UK-医学" onClick={Link.handleClick}>医学</a></li>
                                    <li><a href="/CollegeRank-UK-护理" onClick={Link.handleClick}>护理</a></li>
                                    <li><a href="/CollegeRank-UK-医学和相关学" onClick={Link.handleClick}>医学和相关学</a></li>

                                    <li><a href="/CollegeRank-UK-药物性和药剂" onClick={Link.handleClick}>药物性和药剂</a></li>
                                    <li><a href="/CollegeRank-UK-物理治疗学" onClick={Link.handleClick}>物理治疗学</a></li>
                                    <li><a href="/CollegeRank-UK-心理学" onClick={Link.handleClick}>心理学</a></li>
                                    <li><a href="/CollegeRank-UK-影像学" onClick={Link.handleClick}>影像学</a></li>
                                    <li><a href="/CollegeRank-UK-兽医" onClick={Link.handleClick}>兽医</a></li>
                                    <div className="clear"></div>
                                </ul>
                                <div className="bgShadowAS">
                                    <div className="contentFont">鼠标移上去之后显示专业简介</div>
                                </div>
                            </li>
                            <li className="ZhuanYeContentUlli">
                                <div className="showBg">
                                    <i className="icon icon5"></i>
                                    <div className="font">艺术</div>
                                    <div className="clear"></div>
                                </div>
                                <ul className="schoolList">
                                    <li><a href="/CollegeRank-UK-建筑学" onClick={Link.handleClick}>建筑学</a></li>
                                    <li><a href="/CollegeRank-UK-艺术" onClick={Link.handleClick}>艺术</a></li>
                                    <li><a href="/CollegeRank-UK-戏剧和舞蹈" onClick={Link.handleClick}>戏剧和舞蹈</a></li>
                                    <li><a href="/CollegeRank-UK-建筑与设计学" onClick={Link.handleClick}>建筑与设计学</a></li>
                                    <li><a href="/CollegeRank-UK-城镇和农村的规划和设计" onClick={Link.handleClick}>城镇和农村的规划和设计</a></li>
                     
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
                                    <div className="font">社会科学</div>
                                    <div className="clear"></div>
                                </div>
                                <ul className="schoolList">
                                    <li><a href="/CollegeRank-UK-通信及传媒研究" onClick={Link.handleClick}>通信及传媒研究</a></li>
                                    <li><a href="/CollegeRank-UK-教育" onClick={Link.handleClick}>教育</a></li>
                                    <li><a href="/CollegeRank-UK-美国研究" onClick={Link.handleClick}>美国研究</a></li>
                                    <li><a href="/CollegeRank-UK-人类学" onClick={Link.handleClick}>人类学</a></li>
                                    <li><a href="/CollegeRank-UK-考古学" onClick={Link.handleClick}>考古学</a></li>
                                    <li><a href="/CollegeRank-UK-凯尔特研究" onClick={Link.handleClick}>凯尔特研究</a></li>
                                    <li><a href="/CollegeRank-UK-经典和古代历史" onClick={Link.handleClick}>经典和古代历史</a></li>
                                    <li><a href="/CollegeRank-UK-东亚和南亚研究" onClick={Link.handleClick}>东亚和南亚研究</a></li>

                                    <li><a href="/CollegeRank-UK-英语" onClick={Link.handleClick}>英语</a></li>
                                    <li><a href="/CollegeRank-UK-法语" onClick={Link.handleClick}>法语</a></li>
                                    <li><a href="/CollegeRank-UK-德语" onClick={Link.handleClick}>德语</a></li>
                                    <li><a href="/CollegeRank-UK-历史" onClick={Link.handleClick}>历史</a></li>
                                    <li><a href="/CollegeRank-UK-意大利语" onClick={Link.handleClick}>意大利语</a></li>
                                    <li><a href="/CollegeRank-UK-伊比利亚语" onClick={Link.handleClick}>伊比利亚语</a></li>
                                    <li><a href="/CollegeRank-UK-法律" onClick={Link.handleClick}>法律</a></li>
                                    <li><a href="/CollegeRank-UK-语言学" onClick={Link.handleClick}>语言学</a></li>

                                    <li><a href="/CollegeRank-UK-中东和非洲研究" onClick={Link.handleClick}>中东和非洲研究</a></li>
                                    <li><a href="/CollegeRank-UK-音乐" onClick={Link.handleClick}>音乐</a></li>
                                    <li><a href="/CollegeRank-UK-哲学" onClick={Link.handleClick}>哲学</a></li>
                                    <li><a href="/CollegeRank-UK-政治" onClick={Link.handleClick}>政治</a></li>
                                    <li><a href="/CollegeRank-UK-社会政策" onClick={Link.handleClick}>社会政策</a></li>
                                    <li><a href="/CollegeRank-UK-社会工作" onClick={Link.handleClick}>社会工作</a></li>
                                    <li><a href="/CollegeRank-UK-社会学" onClick={Link.handleClick}>社会学</a></li>
                                    <li><a href="/CollegeRank-UK-神学和宗教研究" onClick={Link.handleClick}>神学和宗教研究</a></li>
                                    <li><a href="/CollegeRank-UK-俄罗斯和东欧语言" onClick={Link.handleClick}>俄罗斯和东欧语言</a></li>
                                    <div className="clear"></div>
                                </ul>
                                <div className="bgShadowAS">
                                    <div className="contentFont">鼠标移上去之后显示专业简介</div>
                                </div>
                            </li>






                           
                        </ul>
                    </div>
                );
            });
        

        return (
            <section className="zhuangYePaiMing">
                <div className="title">
                    <h2>所有专业</h2>
                
                    <h4 className="readMore"><a href="/CollegeRank-UK" onClick={Link.handleClick}>看排名</a></h4>
                    <div className="clear"></div>
                </div>
                {showDv}
            </section>
        );
    }
    componentDidMount() {
        $(document).ready(function(){

        });
    }
}

export default UKSchoolRanks;
/**
 * Created by XiaoKangZheng on 2015/7/28.
 */

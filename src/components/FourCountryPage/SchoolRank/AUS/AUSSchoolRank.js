/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import styles from './AUS.less';
import withStyles from '../../../../decorators/withStyles';
import Link from '../../../../utils/Link';

import $ from 'jquery';

@withStyles(styles)
class AUSSchoolRank {

    render() {
        return (
            <section className="sectionZhuanYe">
                <div className="section-title">
                    <h1>澳洲移民热门专业</h1>
                    <div className="clear"></div>
                </div>
                <div className="sectionZhuanYeContent">
                    <ul className="sectionZhuanYeContentUl">
                        <li className="ZhuanYeContentUlli">
                            <div className="showBg">
                                <i className="icon"></i>
                                <div className="font">会计</div>
                                <div className="clear"></div>
                            </div>
                            <ul className="schoolList">
                                <li><a href="/CollegeDetail-AUS-大学-6" onClick={Link.handleClick}>莫纳什大学</a></li>
                                <li><a href="/CollegeDetail-AUS-大学-19" onClick={Link.handleClick}>迪肯大学</a></li>
                                <li><a href="/CollegeDetail-AUS-大学-3" onClick={Link.handleClick}>悉尼大学</a></li>
                                <li><a href="/CollegeDetail-AUS-大学-5" onClick={Link.handleClick}>新南威尔士大学</a></li> 
                                <li><a href="/CollegeDetail-AUS-大学-10" onClick={Link.handleClick}>悉尼科技大学</a></li>
                                <li><a href="/CollegeDetail-AUS-大学-8" onClick={Link.handleClick}>阿德莱德大学</a></li>
                                <li><a href="/CollegeDetail-AUS-大学-9" onClick={Link.handleClick}>麦考瑞大学</a></li>
                                <li><a href="/CollegeDetail-AUS-大学-2" onClick={Link.handleClick}>墨尔本大学</a></li>
                                <div className="clear"></div>
                            </ul>
                            <div className="bgShadowAS">
                                <div className="contentFont">鼠标移上去之后显示专业简介</div>
                            </div>
                        </li>
                        <li className="ZhuanYeContentUlli">
                            <div className="showBg">
                                <i className="icon icon1"></i>
                                <div className="font">护理</div>
                                <div className="clear"></div>
                            </div>
                            <ul className="schoolList">
                                <li><a href="/CollegeDetail-AUS-大学-10" onClick={Link.handleClick}>悉尼科技大学</a></li>
                                <li><a href="/CollegeDetail-AUS-大学-28" onClick={Link.handleClick}>西悉尼大学</a></li>
                                <li><a href="/CollegeDetail-AUS-大学-17" onClick={Link.handleClick}>南澳大学</a></li>
                                <li><a href="/CollegeDetail-AUS-大学-15" onClick={Link.handleClick}>纽卡斯尔大学</a></li>
                                <li><a href="/CollegeDetail-AUS-大学-19" onClick={Link.handleClick}>迪肯大学</a></li>
                                <li><a href="/CollegeDetail-AUS-大学-34" onClick={Link.handleClick}>澳大利亚天主教大学</a></li>
                                <li><a href="/CollegeDetail-AUS-大学-6" onClick={Link.handleClick}>莫纳什大学</a></li>
                                <li><a href="/CollegeDetail-AUS-大学-20" onClick={Link.handleClick}>拉筹伯大学</a></li>
                                <div className="clear"></div>
                            </ul>
                            <div className="bgShadowAS">
                                <div className="contentFont">鼠标移上去之后显示专业简介</div>
                            </div>
                        </li>
                        <li className="ZhuanYeContentUlli">
                            <div className="showBg">
                                <i className="icon icon2"></i>
                                <div className="font">金融</div>
                                <div className="clear"></div>
                            </div>
                            <ul className="schoolList">
                                <li><a href="/CollegeDetail-AUS-大学-3" onClick={Link.handleClick}>悉尼大学</a></li>
                                <li><a href="/CollegeDetail-AUS-大学-5" onClick={Link.handleClick}>新南威尔士大学</a></li>
                                <li><a href="/CollegeDetail-AUS-大学-9" onClick={Link.handleClick}>麦考瑞大学</a></li>
                                <li><a href="/CollegeDetail-AUS-大学-6" onClick={Link.handleClick}>莫纳什大学</a></li>
                                <li><a href="/CollegeDetail-AUS-大学-2" onClick={Link.handleClick}>墨尔本大学</a></li>
                                <li><a href="/CollegeDetail-AUS-大学-19" onClick={Link.handleClick}>迪肯大学</a></li>
                                <li><a href="/CollegeDetail-AUS-大学-17" onClick={Link.handleClick}>南澳大学</a></li>
                                <li><a href="/CollegeDetail-AUS-大学-4" onClick={Link.handleClick}>昆士兰大学</a></li>
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
                                <div className="font">会展管理</div>
                                <div className="clear"></div>
                            </div>
                            <ul className="schoolList">
                                <li><a href="/CollegeDetail-AUS-大学-5" onClick={Link.handleClick}>新南威尔士大学</a></li>
                                <li><a href="/CollegeDetail-AUS-大学-4" onClick={Link.handleClick}>昆士兰大学</a></li>
                                <li><a href="/CollegeDetail-AUS-大学-6" onClick={Link.handleClick}>莫纳什大学</a></li>
                                <li><a href="/CollegeDetail-AUS-大学-10" onClick={Link.handleClick}>悉尼科技大学</a></li>
                                <li><a href="/CollegeDetail-AUS-大学-9" onClick={Link.handleClick}>麦考瑞大学</a></li>
                                <li><a href="/CollegeDetail-AUS-大学-38" onClick={Link.handleClick}>埃迪斯科文大学</a></li>
                                <li><a href="/CollegeDetail-AUS-大学-16" onClick={Link.handleClick}>格里菲斯大学</a></li>
                                <li><a href="/CollegeDetail-AUS-大学-17" onClick={Link.handleClick}>南澳大学</a></li>
                                <div className="clear"></div>
                            </ul>
                            <div className="bgShadowAS">
                                <div className="contentFont">鼠标移上去之后显示专业简介</div>
                            </div>
                        </li>
                        <li className="ZhuanYeContentUlli">
                            <div className="showBg">
                                <i className="icon icon4"></i>
                                <div className="font">翻译</div>
                                <div className="clear"></div>
                            </div>
                            <ul className="schoolList">
                                <li><a href="/CollegeDetail-AUS-大学-9" onClick={Link.handleClick}>麦考瑞大学</a></li>
                                <li><a href="/CollegeDetail-AUS-大学-28" onClick={Link.handleClick}>西悉尼大学</a></li>
                                <li><a href="/CollegeDetail-AUS-大学-4" onClick={Link.handleClick}>昆士兰大学</a></li>
                                <li><a href="/CollegeDetail-AUS-大学-6" onClick={Link.handleClick}>莫纳什大学</a></li>
                                <li><a href="/CollegeDetail-AUS-大学-1054" onClick={Link.handleClick}>墨尔本皇家理工大学</a></li>
                                <div className="clear"></div>
                            </ul>
                            <div className="bgShadowAS">
                                <div className="contentFont">鼠标移上去之后显示专业简介</div>
                            </div>
                        </li>
                        <li className="ZhuanYeContentUlli">
                            <div className="showBg">
                                <i className="icon icon5"></i>
                                <div className="font">工程</div>
                                <div className="clear"></div>
                            </div>
                            <ul className="schoolList">
                                <li><a href="/CollegeDetail-AUS-大学-8" onClick={Link.handleClick}>阿德莱德大学</a></li>
                                <li><a href="/CollegeDetail-AUS-大学-7" onClick={Link.handleClick}>西澳大学</a></li>
                                <li><a href="/CollegeDetail-AUS-大学-17" onClick={Link.handleClick}>南澳大学</a></li>
                                <li><a href="/CollegeDetail-AUS-大学-13" onClick={Link.handleClick}>科廷科技大学</a></li>
                                <li><a href="/CollegeDetail-AUS-大学-16" onClick={Link.handleClick}>格里菲斯大学</a></li>
                                <li><a href="/CollegeDetail-AUS-大学-12" onClick={Link.handleClick}>昆士兰科技大学</a></li>
                                <li><a href="/CollegeDetail-AUS-大学-18" onClick={Link.handleClick}>詹姆斯库克大学</a></li>
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
                                <div className="font">食品营养</div>
                                <div className="clear"></div>
                            </div>
                            <ul className="schoolList">
                                <li><a href="/CollegeDetail-AUS-大学-27" onClick={Link.handleClick}>堪培拉大学</a></li>
                                <li><a href="/CollegeDetail-AUS-大学-2" onClick={Link.handleClick}>墨尔本大学</a></li>
                                <li><a href="/CollegeDetail-AUS-大学-23" onClick={Link.handleClick}>弗林德斯大学</a></li>
                                <li><a href="/CollegeDetail-AUS-大学-4" onClick={Link.handleClick}>昆士兰大学</a></li>
                                <li><a href="/CollegeDetail-AUS-大学-1054" onClick={Link.handleClick}>墨尔本皇家理工大学</a></li>
                                <li><a href="/CollegeDetail-AUS-大学-3" onClick={Link.handleClick}>悉尼大学</a></li>
                                <li><a href="/CollegeDetail-AUS-大学-6" onClick={Link.handleClick}>莫纳什大学</a></li>
                                <li><a href="/CollegeDetail-AUS-大学-15" onClick={Link.handleClick}>纽卡斯尔大学</a></li>
                                <div className="clear"></div>
                            </ul>
                            <div className="bgShadowAS">
                                <div className="contentFont">鼠标移上去之后显示专业简介</div>
                            </div>
                        </li>
                        <li className="ZhuanYeContentUlli">
                            <div className="showBg">
                                <i className="icon icon7"></i>
                                <div className="font">传媒</div>
                                <div className="clear"></div>
                            </div>
                            <ul className="schoolList">
                                <li><a href="/CollegeDetail-AUS-大学-16" onClick={Link.handleClick}>格里菲斯大学</a></li>
                                <li><a href="/CollegeDetail-AUS-大学-1054" onClick={Link.handleClick}>墨尔本皇家理工大学</a></li>
                                <li><a href="/CollegeDetail-AUS-大学-17" onClick={Link.handleClick}>南澳大学</a></li>
                                <li><a href="/CollegeDetail-AUS-大学-9" onClick={Link.handleClick}>麦考瑞大学</a></li>
                                <li><a href="/CollegeDetail-AUS-大学-6" onClick={Link.handleClick}>莫纳什大学</a></li>
                                <li><a href="/CollegeDetail-AUS-大学-3" onClick={Link.handleClick}>悉尼大学</a></li>
                                <li><a href="/CollegeDetail-AUS-大学-27" onClick={Link.handleClick}>堪培拉大学</a></li>
                                <div className="clear"></div>
                            </ul>
                            <div className="bgShadowAS">
                                <div className="contentFont">鼠标移上去之后显示专业简介</div>
                            </div>
                        </li>
                        <li className="ZhuanYeContentUlli">
                            <div className="showBg">
                                <i className="icon icon8"></i>
                                <div className="font">信息技术</div>
                                <div className="clear"></div>
                            </div>
                            <ul className="schoolList">
                                <li><a href="/CollegeDetail-AUS-大学-5" onClick={Link.handleClick}>新南威尔士大学</a></li>
                                <li><a href="/CollegeDetail-AUS-大学-10" onClick={Link.handleClick}>悉尼科技大学</a></li>
                                <li><a href="/CollegeDetail-AUS-大学-3" onClick={Link.handleClick}>悉尼大学</a></li>
                                <li><a href="/CollegeDetail-AUS-大学-11" onClick={Link.handleClick}>卧龙岗大学</a></li>
                                <li><a href="/CollegeDetail-AUS-大学-2" onClick={Link.handleClick}>墨尔本大学</a></li>
                                <li><a href="/CollegeDetail-AUS-大学-6" onClick={Link.handleClick}>莫纳什大学</a></li>
                                <li><a href="/CollegeDetail-AUS-大学-1054" onClick={Link.handleClick}>墨尔本皇家理工大学</a></li>
                                <li><a href="/CollegeDetail-AUS-大学-25" onClick={Link.handleClick}>斯威本科技大学</a></li>
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
                                <div className="font">人力资源</div>
                                <div className="clear"></div>
                            </div>
                            <ul className="schoolList">
                                <li><a href="/CollegeDetail-AUS-大学-3" onClick={Link.handleClick}>悉尼大学</a></li>
                                <li><a href="/CollegeDetail-AUS-大学-2" onClick={Link.handleClick}>墨尔本大学</a></li>
                                <li><a href="/CollegeDetail-AUS-大学-6" onClick={Link.handleClick}>莫纳什大学</a></li>
                                <li><a href="/CollegeDetail-AUS-大学-5" onClick={Link.handleClick}>新南威尔士大学</a></li>
                                <li><a href="/CollegeDetail-AUS-大学-19" onClick={Link.handleClick}>迪肯大学</a></li>
                                <div className="clear"></div>
                            </ul>
                            <div className="bgShadowAS">
                                <div className="contentFont">鼠标移上去之后显示专业简介</div>
                            </div>
                        </li>
                        <li className="ZhuanYeContentUlli">
                            <div className="showBg">
                                <i className="icon icon10"></i>
                                <div className="font">社会工作</div>
                                <div className="clear"></div>
                            </div>
                            <ul className="schoolList">
                                <li><a href="/CollegeDetail-AUS-大学-1" onClick={Link.handleClick}>国立大学</a></li>
                                <li><a href="/CollegeDetail-AUS-大学-4" onClick={Link.handleClick}>昆士兰大学</a></li>
                                <li><a href="/CollegeDetail-AUS-大学-38" onClick={Link.handleClick}>埃迪斯科文大学</a></li>
                                <li><a href="/CollegeDetail-AUS-大学-7" onClick={Link.handleClick}>西澳大学</a></li>
                                <li><a href="/CollegeDetail-AUS-大学-13" onClick={Link.handleClick}>科廷大学</a></li>
                                <li><a href="/CollegeDetail-AUS-大学-1054" onClick={Link.handleClick}>墨尔本皇家理工大学</a></li>
                                <li><a href="/CollegeDetail-AUS-大学-3" onClick={Link.handleClick}>悉尼大学</a></li>
                                <li><a href="/CollegeDetail-AUS-大学-29" onClick={Link.handleClick}>新英格兰大学</a></li>
                                <div className="clear"></div>
                            </ul>
                            <div className="bgShadowAS">
                                <div className="contentFont">鼠标移上去之后显示专业简介</div>
                            </div>
                        </li>
                        <li className="ZhuanYeContentUlli">
                            <div className="showBg">
                                <i className="icon icon11"></i>
                                <div className="font">酒店旅游管理</div>
                                <div className="clear"></div>
                            </div>
                            <ul className="schoolList">
                                <li><a href="/CollegeDetail-AUS-大学-33" onClick={Link.handleClick}>南士字星大学</a></li>
                                <li><a href="/CollegeDetail-AUS-大学-4" onClick={Link.handleClick}>昆士兰大学</a></li>
                                <li><a href="/CollegeDetail-AUS-大学-31" onClick={Link.handleClick}>维多利亚大学</a></li>
                                <li><a href="/CollegeDetail-AUS-大学-16" onClick={Link.handleClick}>格里菲斯大学</a></li>
                                <li><a href="/CollegeDetail-AUS-大学-8" onClick={Link.handleClick}>阿德莱德大学</a></li>
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
                                <i className="icon icon12"></i>
                                <div className="font">动漫设计</div>
                                <div className="clear"></div>
                            </div>
                            <ul className="schoolList">
                                <li><a href="/CollegeDetail-AUS-大学-16" onClick={Link.handleClick}>格里菲斯大学</a></li>
                                <li><a href="/CollegeDetail-AUS-大学-3" onClick={Link.handleClick}>悉尼大学</a></li>
                                <li><a href="/CollegeDetail-AUS-大学-12" onClick={Link.handleClick}>昆士兰科技大学</a></li>
                                <li><a href="/CollegeDetail-AUS-大学-17" onClick={Link.handleClick}>南澳大学</a></li>
                                <li><a href="/CollegeDetail-AUS-大学-10" onClick={Link.handleClick}>悉尼科技大学</a></li>
                                <li><a href="/CollegeDetail-AUS-大学-25" onClick={Link.handleClick}>斯威本科技大学</a></li>
                                <li><a href="/CollegeDetail-AUS-大学-1054" onClick={Link.handleClick}>墨尔本皇家理工大学</a></li>
                                <li><a href="/CollegeDetail-AUS-大学-2" onClick={Link.handleClick}>墨尔本大学</a></li>
                                <div className="clear"></div>
                            </ul>
                            <div className="bgShadowAS">
                                <div className="contentFont">鼠标移上去之后显示专业简介</div>
                            </div>
                        </li>
                        <li className="ZhuanYeContentUlli">
                            <div className="showBg">
                                <i className="icon icon13"></i>
                                <div className="font">游戏研发</div>
                                <div className="clear"></div>
                            </div>
                            <ul className="schoolList">
                                <li><a href="/CollegeDetail-AUS-大学-16" onClick={Link.handleClick}>格里菲斯大学</a></li>
                                <li><a href="/CollegeDetail-AUS-大学-1054" onClick={Link.handleClick}>墨尔本皇家理工大学</a></li>
                                <li><a href="/CollegeDetail-AUS-大学-12" onClick={Link.handleClick}>昆士兰科技大学</a></li>
                                <li><a href="/CollegeDetail-AUS-大学-26" onClick={Link.handleClick}>莫道克大学</a></li>
                                <li><a href="/CollegeDetail-AUS-大学-3" onClick={Link.handleClick}>悉尼大学</a></li>
                                <li><a href="/CollegeDetail-AUS-大学-2" onClick={Link.handleClick}>墨尔本大学</a></li>
                                <li><a href="/CollegeDetail-AUS-大学-17" onClick={Link.handleClick}>南澳大学</a></li>
                                <div className="clear"></div>
                            </ul>
                            <div className="bgShadowAS">
                                <div className="contentFont">鼠标移上去之后显示专业简介</div>
                            </div>
                        </li>
                        <div className="clear"></div>
                    </ul>
                </div>
            </section>
        );
    }
    componentDidMount() { 
        $(document).ready(function(){

        });
    }
}

export default AUSSchoolRank;
/**
 * Created by XiaoKangZheng on 2015/7/28.
 */

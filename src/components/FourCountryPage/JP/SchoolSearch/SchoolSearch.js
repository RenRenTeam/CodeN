/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import Link from '../../../../utils/Link';


import $ from 'jquery';

@withStyles(styles)

class SchoolSearch extends React.Component {

    constructor(props) {
        super(props);
        this.state = {Country:"JP"};
    }

    render() {

        return (
            <div className="country-search-school">
                <h2>院校搜索</h2>
                <div className="country-search-school-box search-tabs-box">
                    <div className="leftPart tabs">
                        <div className="item selected" data-content="#high">语言学校</div>
                        <div className="item" data-content="#postgraduate">日本大学</div>
                        <div className="item" data-content="#language">大学院</div>
                        <div className="item" data-content="#specialized">日本高中</div>
                        <div className="item" data-content="#zhiZhao" >直招大学</div>
                    </div>
                    <div className="tab-content rightPart">
                        <div id="high" className="search-box tab-content-box">
                            <div className="searchLanguage">
                                <div className="inputDv">
                                    <div className="title">按名称：</div>
                                    <div className="inputBg">
                                        <input type="text" />
                                    </div>
                                    <div className="clear"></div>
                                </div>
                                <div className="inputDv inputDvMargin">
                                    <div className="title">按专业：</div>
                                    <div className="inputBg">
                                        <input type="text" />
                                    </div>
                                    <div className="clear"></div>
                                </div>
                                <ul className="byConti">
                                    <li className="title">按条件：</li>
                                    <li className="item current">所在地区</li>
                                    <li className="item">大学类别</li>
                                    <li className="item">入学月份</li>
                                    <li className="item">留考EJU方式</li>
                                    <li className="item">校内考方式</li>
                                    <div className="clear"></div>
                                </ul>
                                <div className="noticeFont"><span className="notcieRed">*</span>不清楚自己能上哪所大学，点击<a href="/college_new.aspx">这里</a>赶快测测你能考入哪些学校吧！</div>
                            </div>
                        </div>
                        <div id="postgraduate" className="search-box tab-content-box">
                            <ul className="schUl">
                                <li>
                                    <div className="topContent">
                                        <img src="WebResources/Default/images/JP/schoolImg.jpg" />
                                    </div>
                                    <div className="titleSchool">千叶晓星高等学校</div>
                                </li>
                                <li>
                                    <div className="topContent">
                                        <img src="WebResources/Default/images/JP/schoolImg.jpg" />
                                    </div>
                                    <div className="titleSchool">千叶晓星高等学校</div>
                                </li>
                                <li>
                                    <div className="topContent">
                                        <img src="WebResources/Default/images/JP/schoolImg.jpg" />
                                    </div>
                                    <div className="titleSchool">千叶晓星高等学校</div>
                                </li>
                                <li>
                                    <div className="topContent">
                                        <img src="WebResources/Default/images/JP/schoolImg.jpg" />
                                    </div>
                                    <div className="titleSchool">千叶晓星高等学校</div>
                                </li>
                                <li>
                                    <div className="topContent">
                                        <img src="WebResources/Default/images/JP/schoolImg.jpg" />
                                    </div>
                                    <div className="titleSchool">千叶晓星高等学校</div>
                                </li>
                                <li>
                                    <div className="topContent">
                                        <img src="WebResources/Default/images/JP/schoolImg.jpg" />
                                    </div>
                                    <div className="titleSchool">千叶晓星高等学校</div>
                                </li>
                                <li>
                                    <div className="topContent">
                                        <img src="WebResources/Default/images/JP/schoolImg.jpg" />
                                    </div>
                                    <div className="titleSchool">千叶晓星高等学校</div>
                                </li>
                                <li>
                                    <div className="topContent">
                                        <img src="WebResources/Default/images/JP/schoolImg.jpg" />
                                    </div>
                                    <div className="titleSchool">千叶晓星高等学校</div>
                                </li>
                            </ul>
                        </div>
                        <div id="language" className="search-box tab-content-box">
                            <ul className="schUl">
                                <li>
                                    <div className="topContent">
                                        <img src="WebResources/Default/images/JP/schoolImg.jpg" />
                                    </div>
                                    <div className="titleSchool">千叶晓星高等学校</div>
                                </li>
                                <li>
                                    <div className="topContent">
                                        <img src="WebResources/Default/images/JP/schoolImg.jpg" />
                                    </div>
                                    <div className="titleSchool">千叶晓星高等学校</div>
                                </li>
                                <li>
                                    <div className="topContent">
                                        <img src="WebResources/Default/images/JP/schoolImg.jpg" />
                                    </div>
                                    <div className="titleSchool">千叶晓星高等学校</div>
                                </li>
                                <li>
                                    <div className="topContent">
                                        <img src="WebResources/Default/images/JP/schoolImg.jpg" />
                                    </div>
                                    <div className="titleSchool">千叶晓星高等学校</div>
                                </li>
                                <li>
                                    <div className="topContent">
                                        <img src="WebResources/Default/images/JP/schoolImg.jpg" />
                                    </div>
                                    <div className="titleSchool">千叶晓星高等学校</div>
                                </li>
                                <li>
                                    <div className="topContent">
                                        <img src="WebResources/Default/images/JP/schoolImg.jpg" />
                                    </div>
                                    <div className="titleSchool">千叶晓星高等学校</div>
                                </li>
                                <li>
                                    <div className="topContent">
                                        <img src="WebResources/Default/images/JP/schoolImg.jpg" />
                                    </div>
                                    <div className="titleSchool">千叶晓星高等学校</div>
                                </li>
                                <li>
                                    <div className="topContent">
                                        <img src="WebResources/Default/images/JP/schoolImg.jpg" />
                                    </div>
                                    <div className="titleSchool">千叶晓星高等学校</div>
                                </li>
                            </ul>
                        </div>
                        <div id="specialized" className="search-box tab-content-box">
                            <ul className="schUl">
                                <li>
                                    <div className="topContent">
                                        <img src="WebResources/Default/images/JP/schoolImg.jpg" />
                                    </div>
                                    <div className="titleSchool">千叶晓星高等学校</div>
                                </li>
                                <li>
                                    <div className="topContent">
                                        <img src="WebResources/Default/images/JP/schoolImg.jpg" />
                                    </div>
                                    <div className="titleSchool">千叶晓星高等学校</div>
                                </li>
                                <li>
                                    <div className="topContent">
                                        <img src="WebResources/Default/images/JP/schoolImg.jpg" />
                                    </div>
                                    <div className="titleSchool">千叶晓星高等学校</div>
                                </li>
                                <li>
                                    <div className="topContent">
                                        <img src="WebResources/Default/images/JP/schoolImg.jpg" />
                                    </div>
                                    <div className="titleSchool">千叶晓星高等学校</div>
                                </li>
                                <li>
                                    <div className="topContent">
                                        <img src="WebResources/Default/images/JP/schoolImg.jpg" />
                                    </div>
                                    <div className="titleSchool">千叶晓星高等学校</div>
                                </li>
                                <li>
                                    <div className="topContent">
                                        <img src="WebResources/Default/images/JP/schoolImg.jpg" />
                                    </div>
                                    <div className="titleSchool">千叶晓星高等学校</div>
                                </li>
                                <li>
                                    <div className="topContent">
                                        <img src="WebResources/Default/images/JP/schoolImg.jpg" />
                                    </div>
                                    <div className="titleSchool">千叶晓星高等学校</div>
                                </li>
                                <li>
                                    <div className="topContent">
                                        <img src="WebResources/Default/images/JP/schoolImg.jpg" />
                                    </div>
                                    <div className="titleSchool">千叶晓星高等学校</div>
                                </li>
                            </ul>
                        </div>
                        <div id="zhiZhao" className="search-box tab-content-box">
                            <ul className="schUl">
                                <li>
                                    <div className="topContent">
                                        <img src="WebResources/Default/images/JP/schoolImg.jpg" />
                                    </div>
                                    <div className="titleSchool">千叶晓星高等学校</div>
                                </li>
                                <li>
                                    <div className="topContent">
                                        <img src="WebResources/Default/images/JP/schoolImg.jpg" />
                                    </div>
                                    <div className="titleSchool">千叶晓星高等学校</div>
                                </li>
                                <li>
                                    <div className="topContent">
                                        <img src="WebResources/Default/images/JP/schoolImg.jpg" />
                                    </div>
                                    <div className="titleSchool">千叶晓星高等学校</div>
                                </li>
                                <li>
                                    <div className="topContent">
                                        <img src="WebResources/Default/images/JP/schoolImg.jpg" />
                                    </div>
                                    <div className="titleSchool">千叶晓星高等学校</div>
                                </li>
                                <li>
                                    <div className="topContent">
                                        <img src="WebResources/Default/images/JP/schoolImg.jpg" />
                                    </div>
                                    <div className="titleSchool">千叶晓星高等学校</div>
                                </li>
                                <li>
                                    <div className="topContent">
                                        <img src="WebResources/Default/images/JP/schoolImg.jpg" />
                                    </div>
                                    <div className="titleSchool">千叶晓星高等学校</div>
                                </li>
                                <li>
                                    <div className="topContent">
                                        <img src="WebResources/Default/images/JP/schoolImg.jpg" />
                                    </div>
                                    <div className="titleSchool">千叶晓星高等学校</div>
                                </li>
                                <li>
                                    <div className="topContent">
                                        <img src="WebResources/Default/images/JP/schoolImg.jpg" />
                                    </div>
                                    <div className="titleSchool">千叶晓星高等学校</div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="clear"></div>
                </div>
            </div>
        );
    }
    componentDidMount() {

    }

}

export default SchoolSearch;
/*
 * xyx 2015.8.21
 */
 
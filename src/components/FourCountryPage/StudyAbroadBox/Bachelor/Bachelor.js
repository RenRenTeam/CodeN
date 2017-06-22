/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */
import React, { PropTypes } from 'react';

import styles from './Bachelor.less';
import withStyles from '../../../../decorators/withStyles';
import Link from '../../../../utils/Link';

var CSlider = require('react-slick');
var Select = require('rc-select');
import $ from 'jquery';

@withStyles(styles)
class Bachelor extends React.Component {

    render() {
        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 4,
            autoplay: false,
        };
        //console.log("asdddddddd"+this.props.city);
        var propsArr = this.props.data;
        let oneNodes=[];
        let twoNodes=[];
        let threeNodes=[];
        var arr=[];
        if(this.props.city == "JP"){
            arr.push(
                <div>
                <a href="/College-fourCountry-JP-大学--" onClick={Link.handleClick}>
                        <img src="http://7xnmna.com2.z0.glb.qiniucdn.com/jp-advistory-1.jpg" /></a>
                    <a href="/FreeGuide" onClick={Link.handleClick}>
                        <img src="http://7xnmna.com2.z0.glb.qiniucdn.com/jp-advistory-2.jpg" /></a></div>
                );
        }else if(this.props.city == "UK"){
            arr.push(
                <div>
                <a href="/College-fourCountry-UK-大学--" onClick={Link.handleClick}>
                        <img src="http://7xnmna.com2.z0.glb.qiniucdn.com/uk-ad1.jpg" /></a>
                    <a href="/FreeGuide" onClick={Link.handleClick}>
                        <img src="http://7xnmna.com2.z0.glb.qiniucdn.com/uk-ad2.jpg" /></a></div>
                );
        }else if(this.props.city == "AUS"){
            arr.push(
                <div>
                <a href="/College-fourCountry-AUS-高中--" onClick={Link.handleClick}>
                        <img src="http://7xnmna.com2.z0.glb.qiniucdn.com/zixunA.jpg" /></a>
                    <a href="/FreeGuide" onClick={Link.handleClick}>
                        <img src="http://7xnmna.com2.z0.glb.qiniucdn.com/zixunB.jpg" /></a></div>
                );
        }else{
             arr.push(
                <div>
                <a href="/USAProject" onClick={Link.handleClick}>
                        <img src="http://7xnmna.com2.z0.glb.qiniucdn.com/usaAd2.jpg" /></a>
                    <a href="/StudySolution_美国" onClick={Link.handleClick}>
                        <img src="http://7xnmna.com2.z0.glb.qiniucdn.com/usaAd1.jpg" /></a></div>
                );
        }
        propsArr.map(function(obj,index){
            if(index == 0){
                let content=obj.Remark;
                let title=obj.Title;
                if(content.length > 40){ content = content.substr(0,40) + "..."; }
                if(title.length>25){title = title.substr(0,25) + "...";}
                oneNodes.push(
                        <div className="major">
                            <h4>
                                <a onClick={Link.handleClick} href={"/AdvisoryDetail?id="+obj.Sysno} className="firstActiveTitle">
                                    {title}
                                </a>
                            </h4>
                            <div className="description">{content}</div>
                        </div>
                    );
            }
            else if(index>0&&index<7){
                let content=obj.Title;
                if(content.length > 20){   content = content.substr(0,18) + "..."; }
                twoNodes.push(
                    <li><a onClick={Link.handleClick} href={"/AdvisoryDetail?id="+obj.Sysno}>{content}</a></li>
                    );
            }
            else if(index>=7&&index<15){
                let content=obj.Title;
                if(content.length > 20){   content = content.substr(0,20) + "..."; }
                threeNodes.push(
                        <li><a onClick={Link.handleClick} href={"/AdvisoryDetail?id="+obj.Sysno}>{content}</a></li>
                    );
            }

        });

        return (
            <div id="bachelor" className="study-abroad-box tab-content-box" >
                <div className="review-box" >
                    {oneNodes}
                    <div className="hr"></div>
                    <ul className="noticeUl">
                        {twoNodes}
                    </ul>
                </div>
                <div className="advertisement-box">
                    {arr}
                </div>
                <div className="review-box" id="threeNodes" >
                    <ul className="noticeUl" >
                        {threeNodes}
                    </ul>
                </div>
                <div className="clear"></div>
            </div>
        );
    }

}

export default Bachelor;
/**
 *  XYX 2015.8.21
 */

/*保留模块等待设计，到时候完全替换threeNodes模块的div className="review-box"标签*/
/*
       <div className="third-box">
            <div className="minor-tabs tabs-box">
                <div className="tabs">
                    <div className="item" data-content="#enroll" data-value="录取捷报">录取捷报</div>
                    <div className="item" data-content="#apply" data-value="申请技巧">申请技巧</div>
                    <div className="clear"></div>
                </div>
                <div className="tab-content">
                    <div id="apply" className="skill-box tab-content-box"></div>
                    <div id="enroll" className="skill-box tab-content-box"></div>
                </div>
            </div>
            <div className="hr"></div>
            <div className="education-school">
                <div className="school-container">
                    <CSlider {...settings}>
                        <div className="slide">
                            <a href="/college-detail.aspx">
                                <img src="http://passport.shenyuan.org/WebResources/Default/images/study-abroad/school1.png" /></a>
                        </div>
                        <div className="slide">
                            <a href="/college-detail.aspx">
                                <img src="http://passport.shenyuan.org/WebResources/Default/images/study-abroad/school2.png" /></a>
                        </div>
                        <div className="slide">
                            <a href="/college-detail.aspx">
                                <img src="http://passport.shenyuan.org/WebResources/Default/images/study-abroad/school1.png" /></a>
                        </div>
                        <div className="slide">
                            <a href="/college-detail.aspx">
                                <img src="http://passport.shenyuan.org/WebResources/Default/images/study-abroad/school2.png" /></a>
                        </div>
                        <div className="slide">
                            <a href="/college-detail.aspx">
                                <img src="http://passport.shenyuan.org/WebResources/Default/images/study-abroad/school1.png" /></a>
                        </div>
                        <div className="slide">
                            <a href="/college-detail.aspx">
                                <img src="http://passport.shenyuan.org/WebResources/Default/images/study-abroad/school2.png" /></a>
                        </div>
                        <div className="slide">
                            <a href="/college-detail.aspx">
                                <img src="http://passport.shenyuan.org/WebResources/Default/images/study-abroad/school1.png" /></a>
                        </div>
                        <div className="slide">
                            <a href="/college-detail.aspx">
                                <img src="http://passport.shenyuan.org/WebResources/Default/images/study-abroad/school2.png" /></a>
                        </div>
                        <div className="slide">
                            <a href="/college-detail.aspx">
                                <img src="http://passport.shenyuan.org/WebResources/Default/images/study-abroad/school1.png" /></a>
                        </div>
                        <div className="slide">
                            <a href="/college-detail.aspx">
                                <img src="http://passport.shenyuan.org/WebResources/Default/images/study-abroad/school2.png" /></a>
                        </div>
                        <div className="slide">
                            <a href="/college-detail.aspx">
                                <img src="http://passport.shenyuan.org/WebResources/Default/images/study-abroad/school1.png" /></a>
                        </div>
                        <div className="slide">
                            <a href="/college-detail.aspx">
                                <img src="http://passport.shenyuan.org/WebResources/Default/images/study-abroad/school2.png" /></a>
                        </div>
                    </CSlider>
                </div>
            </div>
        </div>
*/

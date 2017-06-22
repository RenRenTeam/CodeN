/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */
import React, { PropTypes } from 'react';
import styles from './OpenClass.less';
import withStyles from '../../../decorators/withStyles';
import Link from '../../../utils/Link';
import Common from '../../../utils/Common';

import $ from 'jquery';

@withStyles(styles)
class OpenClass {
    render() {
        var arr=[];
        var imgStr=Common.imageSource();
        if(this.props.flag == "日本"){
            arr.push(<div className="open-class-content">
                    <div className="content">
                        <div className="first-box">
                            <div className="search-class">
                                <div className="search-class-input" data-country="JP">
                                    <input type="text" placeholder="搜索课程" />
                                    <a href="/OpenClass" onClick={Link.handleClick}><button type="button" >&nbsp;</button></a>
                                    <div className="clear"></div>
                                </div>
                            </div>
                            <div className="new-class">
                                <div className="class-info">
                                    <a href="/OpenClassDetail-5" onClick={Link.handleClick}>
                                       < img src="http://passport.shenyuan.org/WebResources/Default/images/JP/xzd.jpg"/>
                                    </a>
                                </div>
                                <div className="class-desc">
                                    <div className="date">2015-09-01 10:00</div>
                                    <div className="detail"><a href="/OpenClassDetail-5" onClick={Link.handleClick}>即将开课 ></a></div>
                                    <div className="clear"></div>
                                </div>
                            </div>
                            <div className="other-class">
                                <ul>
                                    <li>
                                        <img src="http://passport.shenyuan.org/WebResources/Default/images/JP/xz2.jpg"/>
                                        <div className="title-box">
                                            <div className="title">
                                                <h5><a href="/OpenClassDetail-9" onClick={Link.handleClick}>不会日语，照样赴日读研——日本名校G30招生</a></h5>
                                                <div className="lecturer">主讲人：吴昊</div>
                                                <div className="description">已预约<span className="number">0</span>人</div>
                                            </div>
                                            <div className="title-bg"></div>
                                        </div>
                                    </li>
                                    <li>
                                        <img src="http://passport.shenyuan.org/WebResources/Default/images/JP/xz1.jpg"/>
                                        <div className="title-box">
                                            <div className="title">
                                                <h5><a href="http://yy.liuxuewind.com/index.html" target="_blank">YY讲座 - 一场免费留学DIY盛宴</a></h5>
                                                <div className="lecturer">主讲人：袁列</div>
                                                <div className="description">已预约<span className="number">216</span>人<span className="date">{(this.props.data[2])?(this.props.data[2].TimeRemark):""}</span></div>
                                            </div>
                                            <div className="title-bg"></div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="clear"></div>
                        </div>
                    </div>
                </div>);
        }else{
            arr.push(<div className="open-class-content">
                    <div className="content">
                        <div className="first-box">
                            <div className="search-class">
                                <div className="search-class-input" data-country="JP">
                                    <input type="text" placeholder="搜索课程" />
                                    <a href="/OpenClass" onClick={Link.handleClick}><button type="button" >&nbsp;</button></a>
                                    <div className="clear"></div>
                                </div>
                            </div>
                            <div className="new-class">
                                <div className="class-info">
                                    <a href={(this.props.data[0])?"OpenClassDetail-"+(this.props.data[0].Sysno):"/OpenClass"}>
                                        <img src={(this.props.data[0])?(imgStr+this.props.data[0].ClassImgStr):"http://passport.shenyuan.org/WebResources/Default/images/open-class/new-class.jpg"} />
                                    </a>
                                </div>
                                <div className="class-desc">
                                    <div className="date">{(this.props.data[0])?(this.props.data[0].StartDateStr):""}</div>
                                    <div className="detail"><a href={(this.props.data[0])?"OpenClassDetail-"+(this.props.data[0].Sysno):"/OpenClass"}>即将开课 ></a></div>
                                    <div className="clear"></div>
                                </div>
                            </div>
                            <div className="other-class">
                                <ul>
                                    <li>
                                        <img src={(this.props.data[1])?(imgStr+this.props.data[1].ClassImgStr):"http://passport.shenyuan.org/WebResources/Default/images/open-class/other-class.png"} />
                                        <div className="title-box">
                                            <div className="title">
                                                <h5><a href={(this.props.data[1])?"OpenClassDetail-"+(this.props.data[1].Sysno):"/OpenClass"}>{(this.props.data[1])?(this.props.data[1].Title):""}</a></h5>
                                                <div className="lecturer">主讲人：{(this.props.data[1])?(this.props.data[1].TeacherName):""}</div>
                                                <div className="description">已预约<span className="number">{(this.props.data[1])?(this.props.data[1].AppointmentCount):"0"}</span>人<span className="date">{(this.props.data[1])?(this.props.data[1].TimeRemark):""}</span></div>
                                            </div>
                                            <div className="title-bg"></div>
                                        </div>
                                    </li>
                                    <li>
                                        <img src={(this.props.data[2])?(imgStr+this.props.data[2].ClassImgStr):"http://passport.shenyuan.org/WebResources/Default/images/open-class/other-class.png"} />
                                        <div className="title-box">
                                            <div className="title">
                                                <h5><a href={(this.props.data[2])?"OpenClassDetail-"+(this.props.data[2].Sysno):"/OpenClass"}>{(this.props.data[2])?(this.props.data[2].Title):""}</a></h5>
                                                <div className="lecturer">主讲人：{(this.props.data[2])?(this.props.data[2].TeacherName):""}</div>
                                                <div className="description">已预约<span className="number">{(this.props.data[2])?(this.props.data[2].AppointmentCount):"0"}</span>人<span className="date">{(this.props.data[2])?(this.props.data[2].TimeRemark):""}</span></div>
                                            </div>
                                            <div className="title-bg"></div>
                                        </div>
                                    </li>
                                    <li>
                                        <img src="http://7xnmna.com2.z0.glb.qiniucdn.com/openclassjp.jpg"/>
                                        <div className="title-box">
                                            <div className="title">
                                                <h5><a href="http://coach-g30.com/" target="_blank">日本文部科学省G30项目</a></h5>
                                                <div className="lecturer">主讲人：吴昊</div>
                                                <div className="description">已预约<span className="number">216</span>人<span className="date">{(this.props.data[2])?(this.props.data[2].TimeRemark):""}</span></div>
                                            </div>
                                            <div className="title-bg"></div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="clear"></div>
                        </div>
                    </div>
                </div>);
        }
        return (
            <section className="open-class">
                <div className="section-title">
                    <h1>公开课</h1>
                    <div className="clear"></div>
                </div>
                {arr}
            </section>
        );
    }
    componentDidMount() {
        $(document).ready(function() {
            $(".other-class").find("li").hover(function () {
                //console.log(1);
                $(this).find(".title-bg").show();
                $(this).find("h5").animate({ top: "0", opacity: 1 }, 400).css({ flter: "Alpha(Opacity=100)" });
                $(this).find(".lecturer").animate({ opacity: 1 }, 400).css({ flter: "Alpha(Opacity=100)" });
                $(this).find(".description").animate({ top: "0", opacity: 1 }, 400).css({ flter: "Alpha(Opacity=100)" });
            }, function () {
                $(this).find("h5").stop();
                $(this).find(".lecturer").stop();
                $(this).find(".description").stop();
                $(this).find(".title-bg").hide();
                $(this).find("h5").css("top", "-15px").css("opacity", 0).css({ flter: "Alpha(Opacity=0)" });
                $(this).find(".lecturer").css("opacity", 0).css({ flter: "Alpha(Opacity=0)" });
                $(this).find(".description").css("top", "15px").css("opacity", 0).css({ flter: "Alpha(Opacity=0)" });


            });
        });
    }
}

export default OpenClass;
/**
 * Created by XiaoKangZheng on 2015/7/28.
 */

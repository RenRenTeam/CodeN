/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import styles from './MainContent.less';
import withStyles from '../../../../../decorators/withStyles';
import AppActions from '../../../../../actions/AppActions';
import Link from '../../../../../utils/Link';
import Common from '../../../../../utils/Common';
import $ from 'jquery'

@withStyles(styles)
class MainContent {

    render() {
        var imgStr=Common.imageSource();
        return (
            <div className="class-item eachGetHref">
                <div className="class-img"><a href={1 == 1 ? "/OpenClassDetail-"+this.props.json.Sysno:""}  onClick={Link.handleClick}><img src={imgStr+this.props.json.ClassImgStr} /></a></div>
                <div className="class-description">
                    <h4><a href={1 == 1 ? "/OpenClassDetail-"+this.props.json.Sysno:""}  onClick={Link.handleClick}>{this.props.title}</a></h4>
                    <div className="class-info">共 <span className="length">{this.props.json.ClassCount}</span> 节 ｜  {this.props.json.AppointmentCount}人报名</div>
                    <div className="date">时间：{this.props.json.TimeRemark}</div>
                    <div className="other">
                        <div className="speaker">
                            <div className="title">主讲人：</div>
                            <div className="speaker-img"><img src={imgStr+this.props.json.TeacherHeadImgStr} /></div>
                            <div className="clear"></div>
                        </div>
                        <div className="action"><a className="appointment button-line" href={1 == 1 ? "/OpenClassDetail-"+this.props.json.Sysno:""} onClick={Link.handleClick}>我要预约</a></div>
                        <div className="clear"></div>
                    </div>
                </div>
                <div className="clear"></div>
            </div>
        );
    }
}

export default MainContent;

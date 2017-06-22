/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import Link from '../../../../../utils/Link';
import Common from '../../../../../utils/Common.js'

class Items{
    render() {
        var imageSource=Common.imageSource();
        return (
            <div className="class-item">
                <div className="class-pic">
                    <a href={1 == 1 ? "/OpenClassDetail-"+this.props.json.Sysno:""}  onClick={Link.handleClick}>
                        <img src={imageSource+this.props.json.ClassImgStr}/>
                    </a>
                </div>
                <div className="class-desc class-desc-fff">
                    <h1><a href={1 == 1 ? "/OpenClassDetail-"+this.props.json.Sysno:""}  onClick={Link.handleClick}>{this.props.Title}</a></h1>

                    <div className="class-info">预约：<span className="population">{this.props.json.AppointmentCount}</span>
                        人&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
                        <span className="speaker">主讲人：<span>{this.props.json.TeacherName}</span></span>
                    </div>
                    <div className="action">
                        <a href={1 == 1 ? "/OpenClassDetail-"+this.props.json.Sysno:""}  onClick={Link.handleClick}>我要预约</a>
                        <span className="date">{this.props.json.StartDateStr}</span>
                    </div>
                </div>
                <div className="clear"></div>
            </div>
        );
    }
}

export default Items;

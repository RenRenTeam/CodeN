/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import $ from 'jquery'

class Evaluate extends React.Component{


    render() {
        var nodes = this.props.json.map(function(obj){
            return (
                <div className="item">
                    <div className="head-pic">
                        <img src={obj.HeadImgStr?obj.HeadImgStr:"http://passport.shenyuan.org/WebResources/Default/images/open-class/demo.jpg"} />
                    </div>
                    <div className="content">
                        <div className="name">{obj.MemberName}</div>
                        <div className="text">{obj.Remark}</div>
                        <div className="datetime">{obj.InDateStr}</div>
                        <div className="action">
                            <div className="clear"></div>
                        </div>
                    </div>
                    <div className="clear"></div>
                </div>
            );
        });

        return (
            <div id="evaluate" className="open-class-detail-content tab-content-box">
                <div className="evaluate-box">
                    {nodes}
                </div>
                <div className="pagenav"></div>
            </div>
        );
    }
    
}

export default Evaluate;

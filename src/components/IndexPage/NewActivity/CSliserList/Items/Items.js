/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';

import $ from 'jquery'

class Items extends React.Component{

    render() {
        
        return (
            <div>
                <img src="http://passport.shenyuan.org/WebResources/Default/images/activity/lunbo1.jpg" />
                <div className="activity-info">
                    <p>
                        <span className="name">{this.props.json.Title}</span>
                    </p>
                </div>
            </div>
        );
    }
    //dom加载完调用
    componentDidMount(){
    }
}

export default Items;

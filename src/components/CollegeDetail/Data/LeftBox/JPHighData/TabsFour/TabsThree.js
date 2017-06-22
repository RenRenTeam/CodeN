/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';

import $ from 'jquery';

class TabsFour{
    render() {
        return (
            <div className="college-detail-content">
                {this.props.PositionIntroduce}
            </div>
        );
    }
    //dom加载完调用
    componentDidMount(){

    }
}

export default TabsFour;

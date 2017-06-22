/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';

import $ from 'jquery';

class MainContent{
    render() {
        return (
            <li>
                <img src={this.props.json.Content.DefaultImageUrl} />
                <dd className="tu_ling">{this.props.json.ImageName}</dd>
            </li>
        );
    }
    //dom加载完调用
    componentDidMount(){

    }
}

export default MainContent;

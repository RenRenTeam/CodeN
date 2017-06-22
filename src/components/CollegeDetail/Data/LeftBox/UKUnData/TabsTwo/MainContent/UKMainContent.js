//UKMainContent.js 
/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import Common from '../../../../../../../utils/Common.js'
import $ from 'jquery';

class UKMainContent{
    render() {
        var imgStr=Common.imageSource();
        return (
            <li>
                <img src={imgStr+this.props.json.DefaultImageUrl} />
                <dd className="tu_ling">{this.props.json.ImageName}</dd>
            </li>
        );
    }
    //dom加载完调用
    componentDidMount(){

    }
}

export default UKMainContent;

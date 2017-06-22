/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';

import $ from 'jquery';
import MainContent from './MainContent/MainContent.js'

class TabsTwo{
    render() {
        var items = this.props.Content.map(function (item) {
            return (<MainContent json={item}/>)
        });
        return (
            <div className="college-detail-content">
                <ul className="imgUl">
                    {items}
                </ul>
            </div>
        );
    }
    //dom加载完调用
    componentDidMount(){

    }
}

export default TabsTwo;

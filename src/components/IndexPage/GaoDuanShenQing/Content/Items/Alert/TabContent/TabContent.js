/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';

import $ from 'jquery';

class TabContent extends React.Component {

    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div className="expert-content tab-content-box" id="intro">
                {this.props.json}
            </div>
        );
    }
    //dom加载完调用
    componentDidMount(){
        
    }
}

export default TabContent;

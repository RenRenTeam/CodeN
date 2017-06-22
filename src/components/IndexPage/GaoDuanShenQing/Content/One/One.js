/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import $ from 'jquery';

class One extends React.Component {

    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="tutor-info">
                <div className="nickname">昵称：{this.props.json.Name}</div>
                <div className={1==1?"star dark "+this.props.json.StarStr+"": ""}></div>
                <div className="speciality">专长：{this.props.json.Expertise}</div>
            </div>
        );
    }

    componentDidMount(){
        
    }
}

export default One;

//AUSHighData.js
/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';

import $ from 'jquery';
import TabsOne from './TabsOne/TabsOne.js';
import TabsTwo from './TabsTwo/TabsTwo.js';


class AUSHighData extends React.Component{
    constructor(props) {
        super(props);
        this.state =
        {
            tab:'学校介绍'
        };
    }    
    render() { 
        return (
            <div className="tabs-box tabs-line">
                <div id="div_tabs" className="tabs">
                    <div className={this.state.tab == "学校介绍" ? "item selected" : "item"} data-content="#tabContent1" onClick={this.openTabsOne.bind(this)}>学校介绍</div>                        
                    <div className={this.state.tab == "图库" ? "item selected" : "item"} data-content="#tabContent4" onClick={this.TabsTwo.bind(this)}>图库</div>
                </div>
                <div id="tabContent1-Content-Data" className="tab-content"></div>
            </div>
        );
    }
    //dom加载完调用
    componentDidMount(){  
      
        React.render(<TabsOne Content={this.props.json[0].ExContent} />, document.getElementById('tabContent1-Content-Data'));
        let content = this.props.json[0].ExContent;
        let markdown = require('marked');
        let htmlContent = markdown( content );
        document.getElementById('tabContent1-Content-Data').innerHTML = htmlContent;
      
    } 
    openTabsOne(e){
        this.setState({tab:e.target.innerHTML});
        React.render(<TabsOne Content={this.props.json[0].ExContent} />, document.getElementById('tabContent1-Content-Data'));
         let content = this.props.json[0].ExContent;
        let markdown = require('marked');
        let htmlContent = markdown( content );
        document.getElementById('tabContent1-Content-Data').innerHTML = htmlContent;

    }
    TabsTwo(e){
        this.setState({tab:e.target.innerHTML});
        React.render(<TabsTwo Content={this.props.jsonPic} />, document.getElementById('tabContent1-Content-Data'));

    }
}

export default AUSHighData;



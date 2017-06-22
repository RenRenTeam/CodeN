/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';

import $ from 'jquery';
import TabsOne from './TabsOne/TabsOne.js';
import TabsTwo from './TabsTwo/TabsTwo.js';
import TabsThree from './TabsThree/TabsThree.js';
import TabsFour from './TabsFour/TabsFour.js';
import TabsFive from './TabsFive/TabsFive.js';

class Data extends React.Component{
    constructor(props) {
        super(props);
        this.state =
        {
            json:props.json,
            tab:'学校介绍'
        };


    }    
    render() {
        return (
            <div className="tabs-box tabs-line">
                <div id="div_tabs" className="tabs">
                    <div className={this.state.tab == "学校介绍" ? "item selected" : "item"} data-content="#tabContent1" onClick={this.openTabsOne.bind(this)}>学校介绍</div>
                    <div className={this.state.tab == "招生信息" ? "item selected" : "item"} data-content="#tabContent2" onClick={this.openTabsTwo.bind(this)}>招生信息</div>                            
                    <div className={this.state.tab == "交通指南" ? "item selected" : "item"} data-content="#tabContent3" onClick={this.openTabsThree.bind(this)}>交通指南</div>                      
                    <div className={this.state.tab == "生活资源" ? "item selected" : "item"} data-content="#tabContent4" onClick={this.openTabsFour.bind(this)}>生活资源</div>
                    <div className={this.state.tab == "图库" ? "item selected" : "item"} data-content="#tabContent5" onClick={this.openTabsFive.bind(this)}>图库</div>
                </div>
                <div id="tabContent1-Content-Data" className="tab-content"></div>
            </div>
        );
    }
    //dom加载完调用
    componentDidMount(){
        React.render(<TabsOne Content={this.props.json[0].Universitycharacteristic} />, document.getElementById('tabContent1-Content-Data'));
        let content = this.props.json[0].Universitycharacteristic;
        let markdown = require('marked');
        let htmlContent = markdown( content );
        document.getElementById('tabContent1-Content-Data').innerHTML = htmlContent;
    }
    openTabsOne(e){
        this.setState({tab:e.target.innerHTML});
        React.render(<TabsOne Content={this.props.json[0].Universitycharacteristic} />, document.getElementById('tabContent1-Content-Data'));
        let content = this.props.json[0].Universitycharacteristic;
        let markdown = require('marked');
        let htmlContent = markdown( content );
        document.getElementById('tabContent1-Content-Data').innerHTML = htmlContent;
    }
    openTabsTwo(e){
        this.setState({tab:e.target.innerHTML});
        React.render(<TabsTwo Content={this.props.json[0].infrastructure} />, document.getElementById('tabContent1-Content-Data'));
        let content = this.props.json[0].infrastructure;
        let markdown = require('marked');
        let htmlContent = markdown( content );
        document.getElementById('tabContent1-Content-Data').innerHTML = htmlContent;
    }
    openTabsThree(e){
        this.setState({tab:e.target.innerHTML});
        React.render(<TabsThree Content={this.props.json[0].PositionIntroduce} />, document.getElementById('tabContent1-Content-Data'));
        let content = this.props.json[0].PositionIntroduce;
        let markdown = require('marked');
        let htmlContent = markdown( content );
        document.getElementById('tabContent1-Content-Data').innerHTML = htmlContent;
    }
    openTabsFour(e){
        this.setState({tab:e.target.innerHTML});
        React.render(<TabsFour Content={this.props.json[0].UniversityHistory} />, document.getElementById('tabContent1-Content-Data'));
        let content = this.props.json[0].UniversityHistory;
        let markdown = require('marked');
        let htmlContent = markdown( content );
        document.getElementById('tabContent1-Content-Data').innerHTML = htmlContent;
    }
    openTabsFive(e){
        this.setState({tab:e.target.innerHTML});
        React.render(<TabsFive Content={this.props.jsonPic} />, document.getElementById('tabContent1-Content-Data'));
    }
}

export default Data;

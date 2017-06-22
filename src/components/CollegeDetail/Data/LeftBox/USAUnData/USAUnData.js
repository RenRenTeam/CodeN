/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';

import $ from 'jquery';
import TabsOne from './TabsOne/TabsOne.js';
import TabsTwo from './TabsTwo/TabsTwo.js';
import TabsThree from './TabsThree/TabsThree.js';
import TabsFour from './TabsFour/TabsFour.js';

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
                    <div className={this.state.tab == "图库" ? "item selected" : "item"} data-content="#tabContent4" onClick={this.openTabsFour.bind(this)}>图库</div>
                    <div id="USAproject" className={this.state.tab == "项目介绍" ? "item selected  " : "item  "} onClick={this.openTabsTwo.bind(this)}>项目介绍</div>
                </div>
                <div id="tabContent1-Content-Data" className="tab-content"></div>
            </div>
        );
    }
    //dom加载完调用
    componentDidMount(){ 
        $("#USAproject").hide();
        var USAProject=this.props.json.ProjectExplain;
        if(USAProject){this.setState({tab:"项目介绍"});$("#USAproject").show();
            React.render(<TabsTwo Content={this.props.json.ProjectExplain} />, document.getElementById('tabContent1-Content-Data'));
            let content = this.props.json.ProjectExplain;
            let markdown = require('marked');
            let htmlContent = markdown( content );
            document.getElementById('tabContent1-Content-Data').innerHTML = htmlContent;
        }else{
            React.render(<TabsOne Content={this.props.json.ActionExplain} />, document.getElementById('tabContent1-Content-Data'));
            let content = this.props.json.ActionExplain;
            let markdown = require('marked');
            let htmlContent = markdown( content );
            document.getElementById('tabContent1-Content-Data').innerHTML = htmlContent;
        }
       
      
    } 

    openTabsOne(e){
        this.setState({tab:e.target.innerHTML});
        React.render(<TabsOne Content={this.props.json.ActionExplain} />, document.getElementById('tabContent1-Content-Data'));
         let content = this.props.json.ActionExplain;
        let markdown = require('marked');
        let htmlContent = markdown( content );
        document.getElementById('tabContent1-Content-Data').innerHTML = htmlContent;

    }
    openTabsTwo(e){
        this.setState({tab:e.target.innerHTML});
        React.render(<TabsTwo Content={this.props.json.ProjectExplain} />, document.getElementById('tabContent1-Content-Data'));
        let content = this.props.json.ProjectExplain;
        let markdown = require('marked');
        let htmlContent = markdown( content );
        document.getElementById('tabContent1-Content-Data').innerHTML = htmlContent;
    }
    openTabsFour(e){
        this.setState({tab:e.target.innerHTML});
        React.render(<TabsFour Content={this.props.jsonPic} />, document.getElementById('tabContent1-Content-Data'));

    }
}

export default Data;

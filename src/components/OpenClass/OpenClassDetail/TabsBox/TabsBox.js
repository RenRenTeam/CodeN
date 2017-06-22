/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import styles from './TabsBox.less';
import withStyles from '../../../../decorators/withStyles';
import $ from 'jquery';
import Detail from './TabContent/Detail/Detail.js';
import List from './TabContent/List/List.js';
import Evaluate from './TabContent/Evaluate/Evaluate.js';

@withStyles(styles)
class TabsBox extends React.Component{

    constructor(props) {
        super(props);
        this.state = {tab:"专家介绍"};
    }   

    openTabs(e){
        let tabs="";
        if(e){
           this.setState({
              tab: e.target.innerHTML
            });
            tabs=e.target.innerHTML; 
       }else{
            tabs=this.state.tab;
       }
        

        if(tabs == "专家介绍"){
            React.render(<Detail  json={this.props.json.Remark}/>, document.getElementById('node-OpenTabsContent'));
            let content = this.props.json.Remark;
            let markdown = require('marked');
            let htmlContent = markdown( content );
            document.getElementById('markDowndetail').innerHTML = htmlContent;
            

        }else if(tabs == "课程详情"){
            React.render(<List  json={this.props.json.ClassRemark}/>, document.getElementById('node-OpenTabsContent'));
            let content = this.props.json.ClassRemark;
            let markdown = require('marked');
            let htmlContent = markdown( content );
            document.getElementById('markDownlist').innerHTML = htmlContent;

        }else{

            var sysno = this.props.json.Sysno;
            $.ajax({
                url: "http://service.shenyuan.org/OpenClassAssessService/SearchForJs/PageIndex=1;PageSize=10;OpenClassSysno="+sysno+";CallBack=getPingjiaOpenClass_SuccessCallBack",
                type: "get",
                dataType: "jsonp",
                async: false,
                jsonp: "callbackparam",
                jsonpCallback: "getPingjiaOpenClass_SuccessCallBack",         
            }).done(function (json) {
                
                if(json){

                    React.render(<Evaluate  json={json}/>, document.getElementById('node-OpenTabsContent'));
                    
                }else{
                    return false;
                }
            }.bind(this));

        }
    }

    render() {
        return ( 
            <div className="tabs-box tabs-line">
                <div className="tabs">
                    <div className={this.state.tab == "专家介绍" ? "item selected" : "item"} data-content="#detail" onClick={this.openTabs.bind(this)}>专家介绍</div>
                    <div className={this.state.tab == "课程详情" ? "item selected" : "item"}  data-content="#list" onClick={this.openTabs.bind(this)}>课程详情</div>
                    <div className={this.state.tab == "课程评价" ? "item selected" : "item"}  data-content="#evaluate" onClick={this.openTabs.bind(this)}>课程评价</div>
                    <div className="clear"></div>
                </div>
                <div className="tab-content" id="node-OpenTabsContent"></div>
            </div>
        );
    }
 
    loadingFunc(){
        if($("#pageloader_ClassDetail")){ $("#pageloader_ClassDetail").fadeOut();}  
    }
    componentDidUpdate(){
        
        this.openTabs();
        setTimeout(this.loadingFunc,900);
    }
    componentDidMount(){

        this.openTabs();
        setTimeout(this.loadingFunc,900);
    }


}

export default TabsBox;

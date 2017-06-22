/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import styles from './OpenClass.less';
import withStyles from '../../../decorators/withStyles';
import $ from 'jquery'
import ControlUK from './UK/OpenClassUK.js'
import OpenClassAll from './ALL/OpenClassAll.js'

@withStyles(styles)
class OpenClass extends React.Component {

    
    constructor(props) {
        super(props);
        this.state =
        {
            tab:'美国' 
        };
    }

    render() {
        return (
            <section className="open-class">
                <div className="section-title">
                    <h1>人人学堂</h1>
                    <ul className="filter">
                        <li data-content="#allClass" className={this.state.tab == "全部" ? "selected" : ""} onClick={this.handleGoOpenClass.bind(this)}>全部</li>
                        <li data-content="#UKClass" className={this.state.tab == "英国" ? "selected" : ""}  onClick={this.handleGoOpenClass.bind(this)}>英国</li>
                        <li data-content="#USAClass" className={this.state.tab == "美国" ? "selected" : ""}  onClick={this.handleGoOpenClass.bind(this)}>美国</li>
                        <li data-content="#AUSClass" className={this.state.tab == "澳洲" ? "selected" : ""}  onClick={this.handleGoOpenClass.bind(this)}>澳洲</li>
                        <li data-content="#JPClass" className={this.state.tab == "日本" ? "selected" : ""}  onClick={this.handleGoOpenClass.bind(this)}>日本</li>
                    </ul>
                    <div className="clear"></div>
                </div>
                <div className="open-class-content" id="openClassContent"></div>
            </section>
        );
    }
    //dom加载完调用
    componentDidMount(){
        $(document).ready(function(){
            GetAjax("美国");
        });

        function GetAjax(s){

            if(!s || s==null){
               s = "";
            }

            $.ajax({
                url: "http://service.shenyuan.org/OpenClassForJsService/Search/Country="+s+";PageIndex=1;PageSize=7;CallBack=success_indexPage_OpenClass_jsonpCallback",
                type: "get",
                dataType: "jsonp",
                async: false,
                jsonp: "callbackparam",
                jsonpCallback: "success_indexPage_OpenClass_jsonpCallback",
            }).done(function (json) {
                if(json){

                    React.render(<OpenClassAll json = {json} />, document.getElementById('openClassContent'));
                }else{
                    return false;
                }
            }.bind(this));
        }
    }
    handleGoOpenClass(e){
        let country=e.target.innerHTML;
         this.setState({tab:e.target.innerHTML});
        if(country == "全部"){
           country = "";
        }else if(country == "澳洲"){
            country = "澳大利亚";
        }

        this.GetAjax(country);
    }

    GetAjax(s){

        if(!s || s==null){
           s = "";
        }

        $.ajax({
            url: "http://service.shenyuan.org/OpenClassForJsService/Search/Country="+s+";PageIndex=1;PageSize=7;CallBack=success_indexPage_OpenClass_jsonpCallback",
            type: "get",
            dataType: "jsonp",
            async: false,
            jsonp: "callbackparam",
            jsonpCallback: "success_indexPage_OpenClass_jsonpCallback",
        }).done(function (json) {
            if(json){
                
                React.render(<OpenClassAll json = {json} />, document.getElementById('openClassContent'));
            }else{
                return false;
            }
        }.bind(this));
    }

}

export default OpenClass;

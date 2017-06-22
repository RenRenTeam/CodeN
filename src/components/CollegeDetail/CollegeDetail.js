/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import styles from './CollegeDetail.less';
import withStyles from '../../decorators/withStyles';

import $ from 'jquery';
import DetailDataA from './Data/DetailDataA/DetailDataA.js';
import DetailDataB from './Data/DetailDataB/DetailDataB.js';
import DetailDataC from './Data/DetailDataC/DetailDataC.js';
import DetailDataD from './Data/DetailDataD/DetailDataD.js';

var LifeCycle = require('react-lifecycle');

@withStyles(styles)
class CollegeDetail{


    static contextTypes = {
        onSetTitle: PropTypes.func.isRequired
    };
    render() {
        let title = '院校库详细 - 人人留学';
        this.context.onSetTitle(title);
        return (
                
                <div id="collegeDetail-Node">
                   
                </div>

            
        );
    }

    //dom加载完调用
   componentDidMount(){          
            this.CgetDetailInfo();
    }

    componentDidUpdate(){ 
        var _this = this;
        $("#pageloader_appPager").fadeIn(function(){
            $('#collegeDetail-Node').html("");
            _this.CgetDetailInfo();

        });
    }

     CgetDetailInfo(_url){
            var url = window.location.href;
            if(_url)
                url = _url;
            url = url.substr(url.indexOf('/CollegeDetail-') + ('/CollegeDetail-').length);
            var Country = url.split('-')[0];
            var Type = url.split('-')[1];
            var Sysno = url.split('-')[2];
            var FreeGuidSysno = 0;
            if(url.split('-').length>3){
                FreeGuidSysno = url.split('-')[3];
            }
            $.ajax({
                url: "http://service.shenyuan.org/UniversitySearchNodeJsService/UniversitySearchBySysno/Country="+Country+";Type="+Type+";Sysno="+Sysno+"",
                type: "get",
                dataType: "jsonp",
                async: false,
                jsonp: "callbackparam",//传递给请求处理程序或页面的，用以获得jsonp回调函数名的参数名(默认为:callback)
                jsonpCallback: "success_jsonpCallback",//自定义的jsonp回调函数名称，默认为jQuery自动生成的随机函数名
                success: function (json) {
                    //大学 %E5%A4%A7%E5%AD%A6
                    //日本大学  %E5%A4%A7%E5%AD%A6
                    //研究生院 %E7%A0%94%E7%A9%B6%E7%94%9F%E9%99%A2
                    if(Type == "%E5%A4%A7%E5%AD%A6" && Country=="UK"){ 

                        json.content=eval("("+json.content+")");                     

                        React.render(<DetailDataC json={json} FreeGuidSysno={FreeGuidSysno} Country = {Country} SchoolType={Type} Sysno={Sysno} />, document.getElementById('collegeDetail-Node'));

                        
                    }else if(Type == "%E5%A4%A7%E5%AD%A6" && Country=="USA"){

                        if(json){ 

                            React.render(<DetailDataB json={json} FreeGuidSysno={FreeGuidSysno} Country = {Country} SchoolType={Type} Sysno={Sysno} />, document.getElementById('collegeDetail-Node'));
                        }else{

                            React.render(<DetailDataB json="" FreeGuidSysno={FreeGuidSysno} Country = {Country} SchoolType={Type} Sysno={Sysno} />, document.getElementById('collegeDetail-Node'));
                        }
                    }else if(Type == "%E5%A4%A7%E5%AD%A6" && Country=="JP"){

                        if(json){

                            React.render(<DetailDataD json={json} FreeGuidSysno={FreeGuidSysno} Country = {Country} SchoolType={Type} Sysno={Sysno} />, document.getElementById('collegeDetail-Node'));
                        }else{

                            React.render(<DetailDataD json="" FreeGuidSysno={FreeGuidSysno} Country = {Country} SchoolType={Type} Sysno={Sysno} />, document.getElementById('collegeDetail-Node'));
                        }

                    }else if(Type == "%E7%A0%94%E7%A9%B6%E7%94%9F%E9%99%A2" && Country=="JP"){

                        if(json){

                            React.render(<DetailDataD json={json} FreeGuidSysno={FreeGuidSysno} Country = {Country} SchoolType={Type} Sysno={Sysno} />, document.getElementById('collegeDetail-Node'));
                        }else{

                            React.render(<DetailDataD json="" FreeGuidSysno={FreeGuidSysno} Country = {Country} SchoolType={Type} Sysno={Sysno} />, document.getElementById('collegeDetail-Node'));
                        }

                    }else{
                        if(json){

                            React.render(<DetailDataA json={json} FreeGuidSysno={FreeGuidSysno} Country = {Country} SchoolType={Type} Sysno={Sysno} />, document.getElementById('collegeDetail-Node'));
                        }else{

                            React.render(<DetailDataA json="" FreeGuidSysno={FreeGuidSysno} Country = {Country} SchoolType={Type} Sysno={Sysno} />, document.getElementById('collegeDetail-Node'));
                        }
                    }
                    
                },
                error: function (e) {
                    return false;
                }
            });

    }
}

export default CollegeDetail;

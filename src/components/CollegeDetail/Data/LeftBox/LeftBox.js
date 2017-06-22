/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import USAUnData from './USAUnData/USAUnData.js';
import AUSHighData from './AUSHighData/AUSHighData.js';
import USAHighData from './USAHighData/USAHighData.js';
import UKUnData from './UKUnData/UKUnData.js';
import JPHighData from './JPHighData/JPHighData.js';
import JPUnData from './JPUnData/JPUnData.js';
import RightPart from '../RightPart/RightPart.js';
import $ from 'jquery';

class LeftBox{
    render() {
        return (
            <div>
                <div className="left-box" id="leftBox-Data"></div>
                <div id="rightBox_Data"></div>
            </div>
        );
    }
    //dom加载完调用
    componentDidMount(){

        $(document).ready(function(){

            var url = window.location.href;
            url = url.substr(url.indexOf('/CollegeDetail-') + ('/CollegeDetail-').length);
            var Country = url.split('-')[0];
            var Type = url.split('-')[1];
            var Sysno = url.split('-')[2]; 
            //高中  %E9%AB%98%E4%B8%AD
            //大学  %E5%A4%A7%E5%AD%A6
            //语言学校 %E8%AF%AD%E8%A8%80%E5%AD%A6%E6%A0%A1
            //日本高中 %E9%AB%98%E4%B8%AD
            //日本大学  %E5%A4%A7%E5%AD%A6
            //研究生院 %E7%A0%94%E7%A9%B6%E7%94%9F%E9%99%A2
            //url: "http://service.shenyuan.org/UniversitySearchNodeJsService/UniversityExSearch/Country=USA;Type=大学;UniversitySysno=24878",
            if(Type == "%E5%A4%A7%E5%AD%A6" && Country=="USA"){
                $.ajax({
                    url: "http://service.shenyuan.org/UniversitySearchNodeJsService/UniversitySearchBySysno/Country="+Country+";Type="+Type+";Sysno="+Sysno+"",
                    type: "get",
                    dataType: "jsonp",
                    async: false,
                    jsonp: "callbackparam",//传递给请求处理程序或页面的，用以获得jsonp回调函数名的参数名(默认为:callback)
                    jsonpCallback: "success_jsonpCallback",//自定义的jsonp回调函数名称，默认为jQuery自动生成的随机函数名
                    success: function (json) {
                        if(json){
                            $.ajax({
                                url: "http://service.shenyuan.org/UniversitySearchNodeJsService/University_ImagesSearch/Country="+Country+";Type="+Type+";UniversitySysno="+Sysno+"",
                                type: "get",
                                dataType: "jsonp",
                                async: false,
                                jsonp: "callbackparam",//传递给请求处理程序或页面的，用以获得jsonp回调函数名的参数名(默认为:callback)
                                jsonpCallback: "success_jsonpCallback",//自定义的jsonp回调函数名称，默认为jQuery自动生成的随机函数名
                                success: function (jsonPic) {
                                    if(jsonPic && jsonPic.length >= 1){

                                        React.render(<USAUnData json={json} jsonPic={jsonPic} />, document.getElementById('leftBox-Data'));
                                        React.render(<RightPart jsonPic={jsonPic} country={Country} school={Type}/>, document.getElementById('rightBox_Data'));

                                    }else{

                                        React.render(<USAUnData json={json} jsonPic={[]} />, document.getElementById('leftBox-Data'));
                                        React.render(<RightPart jsonPic={[]} country={Country} school={Type} />, document.getElementById('rightBox_Data'));

                                    }
                                },
                                error: function (e) { 
                                    return false;
                                }
                            });

                        }else{

                            React.render(<USAUnData json={[]} />, document.getElementById('leftBox-Data'));
                            React.render(<RightPart jsonPic={[]} country={Country} school={Type} />, document.getElementById('rightBox_Data'));
                        }
                    },
                    error: function (e) { 
                        return false;
                    }

                });
            }else if(Type == "%E9%AB%98%E4%B8%AD" && Country=="AUS"){
                $.ajax({
                    url: "http://service.shenyuan.org/UniversitySearchNodeJsService/UniversityExSearch/Country="+Country+";Type="+Type+";UniversitySysno="+Sysno+"",
                    //url: "http://service.shenyuan.org/UniversitySearchNodeJsService/UniversityExSearch/Country="+Country+";Type="+Type+";UniversitySysno="+Sysno+"",
                    type: "get",
                    dataType: "jsonp",
                    async: false,
                    jsonp: "callbackparam",//传递给请求处理程序或页面的，用以获得jsonp回调函数名的参数名(默认为:callback)
                    jsonpCallback: "success_jsonpCallback",//自定义的jsonp回调函数名称，默认为jQuery自动生成的随机函数名
                    success: function (json) {
                        if(json){
                            $.ajax({
                                url: "http://service.shenyuan.org/UniversitySearchNodeJsService/University_ImagesSearch/Country="+Country+";Type="+Type+";UniversitySysno="+Sysno+"",
                                type: "get",
                                dataType: "jsonp",
                                async: false,
                                jsonp: "callbackparam",//传递给请求处理程序或页面的，用以获得jsonp回调函数名的参数名(默认为:callback)
                                jsonpCallback: "success_jsonpCallback",//自定义的jsonp回调函数名称，默认为jQuery自动生成的随机函数名
                                success: function (jsonPic) {
                
                                    if(jsonPic && jsonPic.length >= 1){

                                        React.render(<AUSHighData json={json} jsonPic={jsonPic} />, document.getElementById('leftBox-Data'));
                                        React.render(<RightPart jsonPic={jsonPic} country={Country} school={Type}/>, document.getElementById('rightBox_Data'));

                                    }else{

                                        React.render(<AUSHighData json={json} jsonPic={[]} />, document.getElementById('leftBox-Data'));
                                        React.render(<RightPart jsonPic={[]} country={Country} school={Type} />, document.getElementById('rightBox_Data'));

                                    }
                                },
                                error: function (e) { 
                                    return false;
                                }
                            });

                        }else{

                            React.render(<AUSHighData json={[]} />, document.getElementById('leftBox-Data'));
                            React.render(<RightPart jsonPic={[]} country={Country} school={Type} />, document.getElementById('rightBox_Data'));
                        }
                    },
                    error: function (e) { 
                        return false;
                    }

                });

            }else{
              $.ajax({
                url: "http://service.shenyuan.org/UniversitySearchNodeJsService/UniversityExSearch/Country="+Country+";Type="+Type+";UniversitySysno="+Sysno+"",
                type: "get",
                dataType: "jsonp",
                async: false,
                jsonp: "callbackparam",//传递给请求处理程序或页面的，用以获得jsonp回调函数名的参数名(默认为:callback)
                jsonpCallback: "success_jsonpCallback",//自定义的jsonp回调函数名称，默认为jQuery自动生成的随机函数名
                success: function (json) {
                   if(Type == "%E5%A4%A7%E5%AD%A6" && Country=="UK"){
                        

                        if(json&&json.length>=1){

                            $.ajax({
                                url: "http://service.shenyuan.org/UniversitySearchNodeJsService/University_ImagesSearch/Country="+Country+";Type="+Type+";UniversitySysno="+Sysno+"",
                                type: "get",
                                dataType: "jsonp",
                                async: false,
                                jsonp: "callbackparam",//传递给请求处理程序或页面的，用以获得jsonp回调函数名的参数名(默认为:callback)
                                jsonpCallback: "success_jsonpCallback",//自定义的jsonp回调函数名称，默认为jQuery自动生成的随机函数名
                                success: function (jsonPic) {
                                    
                                    if(jsonPic && jsonPic.length >= 1){ 

                                        React.render(<UKUnData json={json} jsonPic={jsonPic} />, document.getElementById('leftBox-Data'));
                                        React.render(<RightPart jsonPic={jsonPic} country={Country} school={Type} />, document.getElementById('rightBox_Data'));

                                    }else{

                                        React.render(<UKUnData json={json} jsonPic={[]} />, document.getElementById('leftBox-Data'));
                                        React.render(<RightPart jsonPic={[]}  country={Country} school={Type}/>, document.getElementById('rightBox_Data'));

                                    }
                                },
                                error: function (e) {
                                    return false;
                                }
                            });

                        }else{

                            React.render(<UKUnData json={[]}/>, document.getElementById('leftBox-Data'));
                            React.render(<RightPart jsonPic={[]}  country={Country} school={Type}/>, document.getElementById('rightBox_Data'));
                        }

                    }else if(Type == "%E8%AF%AD%E8%A8%80%E5%AD%A6%E6%A0%A1" && Country=="JP"){
              
                        if(json&&json.length>=1){ 

                            $.ajax({
                                url: "http://service.shenyuan.org/UniversitySearchNodeJsService/University_ImagesSearch/Country="+Country+";Type="+Type+";UniversitySysno="+Sysno+"",
                                type: "get",
                                dataType: "jsonp",
                                async: false,
                                jsonp: "callbackparam",//传递给请求处理程序或页面的，用以获得jsonp回调函数名的参数名(默认为:callback)
                                jsonpCallback: "success_jsonpCallback",//自定义的jsonp回调函数名称，默认为jQuery自动生成的随机函数名
                                success: function (jsonPic) {
                                    
                                    if(jsonPic && jsonPic.length >= 1){

                                        React.render(<JPHighData json={json} jsonPic={jsonPic} />, document.getElementById('leftBox-Data'));
                                        React.render(<RightPart jsonPic={jsonPic} country={Country} school={Type} />, document.getElementById('rightBox_Data'));

                                    }else{

                                        React.render(<JPHighData json={json} jsonPic={[]} />, document.getElementById('leftBox-Data'));
                                        React.render(<RightPart jsonPic={[]}  country={Country} school={Type}  />, document.getElementById('rightBox_Data'));

                                    }
                                },
                                error: function (e) {
                                    return false;
                                }
                            });

                        }else{

                            React.render(<JPHighData json={[]} />, document.getElementById('leftBox-Data'));
                             React.render(<RightPart jsonPic={[]}  country={Country} school={Type}  />, document.getElementById('rightBox_Data'));
                        }


                    }else if(Type == "%E9%AB%98%E4%B8%AD" && Country=="JP"){

                        if(json&&json.length>=1){

                            $.ajax({
                                url: "http://service.shenyuan.org/UniversitySearchNodeJsService/University_ImagesSearch/Country="+Country+";Type="+Type+";UniversitySysno="+Sysno+"",
                                type: "get",
                                dataType: "jsonp",
                                async: false,
                                jsonp: "callbackparam",//传递给请求处理程序或页面的，用以获得jsonp回调函数名的参数名(默认为:callback)
                                jsonpCallback: "success_jsonpCallback",//自定义的jsonp回调函数名称，默认为jQuery自动生成的随机函数名
                                success: function (jsonPic) {
                                    
                                    if(jsonPic && jsonPic.length >= 1){

                                        React.render(<JPHighData json={json} jsonPic={jsonPic} />, document.getElementById('leftBox-Data'));
                                        React.render(<RightPart jsonPic={jsonPic} country={Country} school={Type}  />, document.getElementById('rightBox_Data'));

                                    }else{

                                        React.render(<JPHighData json={json} jsonPic={[]} />, document.getElementById('leftBox-Data'));
                                        React.render(<RightPart jsonPic={[]}  country={Country} school={Type} />, document.getElementById('rightBox_Data'));

                                    }
                                },
                                error: function (e) {
                                    return false;
                                }
                            });

                        }else{

                            React.render(<JPHighData json={[]} />, document.getElementById('leftBox-Data'));
                             React.render(<RightPart jsonPic={[]}  country={Country} school={Type} />, document.getElementById('rightBox_Data'));
                        }

                    }else if(Type == "%E7%A0%94%E7%A9%B6%E7%94%9F%E9%99%A2" && Country=="JP"){


                        if(json&&json.length>=1){

                            $.ajax({
                                url: "http://service.shenyuan.org/UniversitySearchNodeJsService/University_ImagesSearch/Country="+Country+";Type="+Type+";UniversitySysno="+Sysno+"",
                                type: "get",
                                dataType: "jsonp",
                                async: false,
                                jsonp: "callbackparam",//传递给请求处理程序或页面的，用以获得jsonp回调函数名的参数名(默认为:callback)
                                jsonpCallback: "success_jsonpCallback",//自定义的jsonp回调函数名称，默认为jQuery自动生成的随机函数名
                                success: function (jsonPic) {
                                    
                                    if(jsonPic && jsonPic.length >= 1){

                                        React.render(<JPUnData json={json} Sysno={Sysno} jsonPic={jsonPic} />, document.getElementById('leftBox-Data'));
                                        React.render(<RightPart jsonPic={jsonPic} country={Country} school={Type} />, document.getElementById('rightBox_Data'));

                                    }else{

                                        React.render(<JPUnData json={json} Sysno={Sysno} jsonPic={[]} />, document.getElementById('leftBox-Data'));
                                        React.render(<RightPart jsonPic={[]} country={Country} school={Type} />, document.getElementById('rightBox_Data'));

                                    }
                                },
                                error: function (e) {
                                    return false;
                                }
                            });

                        }else{
                            React.render(<JPUnData json={[]} Sysno={Sysno} jsonPic={[]}/>, document.getElementById('leftBox-Data'));
                            React.render(<RightPart jsonPic={[]} country={Country} school={Type} />, document.getElementById('rightBox_Data'));
                        }


                    }else if(Type == "%E5%A4%A7%E5%AD%A6" && Country=="JP"){

                        if(json){

                            $.ajax({
                                url: "http://service.shenyuan.org/UniversitySearchNodeJsService/University_ImagesSearch/Country="+Country+";Type="+Type+";UniversitySysno="+Sysno+"",
                                type: "get",
                                dataType: "jsonp",
                                async: false,
                                jsonp: "callbackparam",//传递给请求处理程序或页面的，用以获得jsonp回调函数名的参数名(默认为:callback)
                                jsonpCallback: "success_jsonpCallback",//自定义的jsonp回调函数名称，默认为jQuery自动生成的随机函数名
                                success: function (jsonPic) {                             

                                    if(jsonPic && jsonPic.length >= 1){

                                        React.render(<JPUnData json={json} Sysno={Sysno} jsonPic={jsonPic} />, document.getElementById('leftBox-Data'));
                                        React.render(<RightPart jsonPic={jsonPic} country={Country} school={Type} />, document.getElementById('rightBox_Data'));

                                    }else{

                                        React.render(<JPUnData json={json}  Sysno={Sysno} jsonPic={[]} />, document.getElementById('leftBox-Data'));
                                        React.render(<RightPart jsonPic={[]} country={Country} school={Type} />, document.getElementById('rightBox_Data'));

                                    }
                                },
                                error: function (e) {
                                    return false;
                                }
                            });

                        }else{

                            React.render(<JPUnData json={[]} Sysno={Sysno} jsonPic={[]}/>, document.getElementById('leftBox-Data'));
                            React.render(<RightPart jsonPic={[]} country={Country} school={Type} />, document.getElementById('rightBox_Data'));
                        }
                        
                    }else{
                        if(json&&json.length>=1){
                            $.ajax({
                                url: "http://service.shenyuan.org/UniversitySearchNodeJsService/University_ImagesSearch/Country="+Country+";Type="+Type+";UniversitySysno="+Sysno+"",
                                type: "get",
                                dataType: "jsonp",
                                async: false,
                                jsonp: "callbackparam",//传递给请求处理程序或页面的，用以获得jsonp回调函数名的参数名(默认为:callback)
                                jsonpCallback: "success_jsonpCallback",//自定义的jsonp回调函数名称，默认为jQuery自动生成的随机函数名
                                success: function (jsonPic) {
                                    if(jsonPic && jsonPic.length >= 1){ 

                                        React.render(<USAHighData json={json} jsonPic={jsonPic} />, document.getElementById('leftBox-Data'));
                                        React.render(<RightPart jsonPic={jsonPic} country={Country} school={Type} />, document.getElementById('rightBox_Data'));

                                    }else{

                                        React.render(<USAHighData json={json} jsonPic={[]} />, document.getElementById('leftBox-Data'));
                                        React.render(<RightPart jsonPic={[]} country={Country} school={Type} />, document.getElementById('rightBox_Data'));

                                    }
                                },
                                error: function (e) {
                                    return false;
                                }
                            });

                        }else{
                            React.render(<USAHighData json={[]} />, document.getElementById('leftBox-Data'));
                            React.render(<RightPart jsonPic={[]} country={Country} school={Type} />, document.getElementById('rightBox_Data'));
                        }

                    }

                },
                error: function (e) {
                    return false;
                }
            });
          }

        });

    }
}

export default LeftBox;

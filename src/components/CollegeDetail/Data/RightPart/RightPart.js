/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';

import styles from './RightPart.less';
import withStyles from '../../../../decorators/withStyles';
import $ from 'jquery';
import SchoolList from './SchoolList/SchoolList.js';
import Common from '../../../../utils/Common';
var CSlider = require('react-slick');

@withStyles(styles)
class RightPart{
    render() {
        var imgStr=Common.imageSource();
        var nodes="";
            if(this.props.jsonPic  instanceof Array){
                nodes=this.props.jsonPic.map(function(obj,index){

                        return(
                                <a className="fancybox">
                                    <img className="img_photo" src={imgStr+obj.DefaultImageUrl} />
                                </a>
                            );

                });
                if(nodes.length>4){
                    nodes.length=4;
                }
            }else{
                var arr=[1,1];
                nodes=arr.map(function(){
                   return(
                        <a className="fancybox">
                            <img className="img_photo" src="http://passport.shenyuan.org/WebResources/Default/images/college/college-logo.png" />
                        </a>
                    );
                });

            };
        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: false,
        };
        return (
                <div className="right-box">
                    <div className="photo-box">
                        <div className="photo-list">
                            <CSlider {...settings}>
                               {nodes}
                            </CSlider> 
                        </div> 
                    </div>
                    <div className="nearby-school">
                        <h3>热门学校</h3>                      
                        <div id="rightSchoolList"></div>
                    </div>
                </div>
        );
    }

    loadSchool(){
        var CountryVar=this.props.country; 
        var typeVar=this.props.school;
            if(typeVar=="%E9%AB%98%E4%B8%AD"){typeVar="高中"}
            if(typeVar=="%E5%A4%A7%E5%AD%A6"){typeVar="大学"}
            if(typeVar=="%E8%AF%AD%E8%A8%80%E5%AD%A6%E6%A0%A1"){typeVar="语言学校"}
            if(typeVar=="E9%AB%98%E4%B8%AD" && CountryVar=="JP"){typeVar="日本高中"}
            if(typeVar=="%E5%A4%A7%E5%AD%A6"&& CountryVar=="JP"){typeVar="日本大学"}
            if(typeVar=="%E7%A0%94%E7%A9%B6%E7%94%9F%E9%99%A2"){typeVar="研究生院"}
          $.ajax({
            url: "http://service.shenyuan.org/UniversitySearchNodeJsService/UniversitySearch/Country="+CountryVar+";Type="+typeVar+";PageIndex=1;PageSize=4;Name=",
            type: "get",
            dataType: "jsonp",
            async: false,
            jsonp: "callbackparam",//传递给请求处理程序或页面的，用以获得jsonp回调函数名的参数名(默认为:callback)
            jsonpCallback: "success_jsonpCallback",//自定义的jsonp回调函数名称，默认为jQuery自动生成的随机函数名            
        }).done(function (json) { 
            if(json&&json.length>0){
                React.render(<SchoolList json={json} country={CountryVar}  school={typeVar}/>, document.getElementById('rightSchoolList'));
                
            }
        });
    }

    //dom加载完调用
    componentDidMount(){

        this.loadSchool();
    }
}

export default RightPart;

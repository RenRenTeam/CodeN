/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';

import styles from './Wish.less';
import withStyles from '../../../decorators/withStyles';
import XiangQuDeGuoJia from './XiangQuDeGuoJia';
import XiangDuDeDaXue from './XiangDuDeDaXue';
import XiangXueDeZhuanYe from './XiangXueDeZhuanYe';
import HotSchoolWishModule from '../WishUtilReactjs/HotSchoolWishModule/HotSchoolWishModule.js';
import ShowSchool from '../WishUtilReactjs/ShowSchool/ShowSchool.js';
import GetActionData from '../WishUtilReactjs/ActionInformation/GetActionData/GetActionData.js';
var CSlider = require('react-slick');
import $ from 'jquery'
@withStyles(styles)
class Wish  extends React.Component{ 
    render() {
        
        return (
            <section className="wish">
                <div className="content">
                        <XiangQuDeGuoJia  />
                        <div className="box schoolShowDv">
                            <div className="school-show">
                                <h1>留学资讯</h1>                              
                                <div id="ActionInformationDiv" className="news"></div>
                            </div>
                        </div>              
                        <div className="clear"></div>
                </div>
                <div className="content full wish-school-container">
                        <div id="schoolContainer">
                            <div id="UKWish" className="school-container" data-country="UK">
                                <XiangXueDeZhuanYe />
                                <div className="box full">
                                    <div className="hot-school">
                                        <h1>热门院校</h1>
                                        <div id="hotSchool"></div>
                                        <div className="clear"></div>
                                    </div>
                                </div>
                                <div className="clear"></div>
                            </div>
                        </div>
                </div>
            </section>
        );
    }
    loadAction(){
         $.ajax({
            type: "get",
            url: "http://service.shenyuan.org/UniversitySearchNodeJsService/UniversitySearch/Country=USA;Type=大学;PageIndex=1;PageSize=25;Name=",
            dataType: "jsonp",
            async:false,
            jsonp:"callbackparam",
            jsonpCallback:"success_jsonpCallback",
        }).always(function(json){
            if(json){
                 React.render(<HotSchoolWishModule flag="USA" />,document.getElementById('hotSchool'));
            }else{
                 React.render(<HotSchoolWishModule flag="USA"/>,document.getElementById('hotSchool'));
            }

        }).then(function(){
                    $.ajax({
                        type: "get",
                        url: "http://service.shenyuan.org/ArticleService/SearchForJS/USA,,,1,11",
                        dataType: "jsonp",
                        async:false,
                        jsonp:"callbackparam",//
                        jsonpCallback:"success_jsonpCallback",//自定义jsonp回调函数名称       
                    }).always(function(jsonAction){
                        if(jsonAction){
                            React.render(<GetActionData data={jsonAction} />,document.getElementById('ActionInformationDiv'));
                        }else{
                            React.render(<GetActionData data="" />,document.getElementById('ActionInformationDiv'));
                        }
                    });
        });
    }
    componentDidMount() {
        //this.countryClickEvent();
        this.loadAction();
    }
}

export default Wish;

/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
var CSlider = require('react-slick');
import $ from 'jquery';
import Detail from './Detail/Detail.js';

class List  extends React.Component{
    render() {

        var settings = {
            dots: true,
            infinite: true,
            speed: 1500,
            slidesToShow: 3,
            slidesToScroll: 3,
            autoplay: true, 
        }; 
        let  arr= this.props.json;
        if(arr.length<6){
            for(var i=0;i<6;i++){
                arr[i]?"":arr[i]="changeIt";
            }
        } 
        var nodes =[];
        nodes =arr.map(function(obj,index){
            if(obj!="changeIt"){
                return (
                        <div>
                            <Detail data={obj} />
                        </div>
                        );
            }else{
                return (<div  data-key={index} className="cSliderItem">
                            <img src='http://passport.shenyuan.org/WebResources/Default/images/effect-wish/1.jpg' />
                            <div className="title-box">
                                <div className="title">{index}'期待您的评论……' </div>
                                <div className="title-bg"></div>
                            </div>
                            <div className="bg"></div>
                            <div className="components_Alert">

                            </div>
                        </div>
                        );
            }
           
        });

        return (
            <CSlider {...settings}>
                {nodes}
            </CSlider>
        );
    }
    componentDidMount() {

        $(".effect-wish").find(".cSliderItem").hover(function () {
            
                $(this).find(".bg").animate({ opacity: 0 }, 300).css({ flter: "Alpha(Opacity=0)" });
                $(this).find(".title-box").animate({ marginTop: "-40px" }, 300);

            }, function () {
                $(this).find(".bg").stop();
                $(this).find(".title-box").stop();
                $(this).find(".bg").animate({ opacity: 0.4 }, 300).css({ flter: "Alpha(Opacity=40)" });
                $(this).find(".title-box").animate({ marginTop: "0px" }, 300);
            });
    }
}

export default List;

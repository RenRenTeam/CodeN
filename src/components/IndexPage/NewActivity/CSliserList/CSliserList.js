/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';

import $ from 'jquery';
var CSlider = require('react-slick');
import Link from '../../../../utils/Link.js';

class CSliserList extends React.Component{

    render() {
        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
        };
        var arr = [];
        if(this.props.flag == "jp"){
            arr.push(
            <div>
                <div className="openAct1">
                 <a href="http://jz.liuxuewind.com/" target="_blank"><img src="http://7xnmna.com2.z0.glb.qiniucdn.com/renren-Activeity-5.jpg"  className="img"/></a>
                    <div className="activity-info">
                        <p>
                            <span className="name">人人活动 - 和风从东来！</span>
                        </p>
                    </div>
                </div>
            </div>);
        }else{
            arr.push(
            <div>
                <CSlider {...settings} >
                <div className="openAct1">
                    <a href="ActivityPage-owen" target="_blank"><img src="http://7xnmna.com2.z0.glb.qiniucdn.com/renren-Activeity-4.jpg" className="img" /></a>
                    <div className="activity-info">
                        <p>
                            <span className="name">人人活动 - 招生部老师亲临上海！</span>
                        </p>
                    </div>
                </div>
                <div className="openAct2">
                     <a href="ActivityPage-runningMan" target="_blank"><img src="http://7xnmna.com2.z0.glb.qiniucdn.com/renren-Activeity-3.jpg" className="img" /></a>
                    <div className="activity-info">
                        <p>
                            <span className="name">人人活动 - 奔跑吧，童鞋！</span>
                        </p>
                    </div>
                </div>
                <div className="openAct2">
                     <a href="http://coach-g30.com/" target="_blank"><img src="http://7xnmna.com2.z0.glb.qiniucdn.com/openclassjp.jpg" className="img" /></a>
                    <div className="activity-info">
                        <p>
                            <span className="name">日本文部科学省G30项目</span>
                        </p>
                    </div>
                </div>
                </CSlider>
             </div>
           );
        }
        return (
            <div>{arr}</div>
        );
    }
    //dom加载完调用
    componentDidMount(){
       
    }
    
}

export default CSliserList;

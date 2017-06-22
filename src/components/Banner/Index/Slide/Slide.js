/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React from 'react';

import CSliderstyles from "./Slide.less";
import withViewport from '../../../../decorators/withViewport';
import withStyles from '../../../../decorators/withStyles';
import Link from '../../../../utils/Link.js';
var CSlider = require('react-slick');
import $ from 'jquery'
@withStyles(CSliderstyles)
class Slide {
    render() {
        var settings = {
                dots: true,
                infinite: true,
                speed: 500,
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 6000,

        };
        return (
            <div className="div_banner">
                <CSlider {...settings}>
                    <div className="slide1">
                        <p name="banner1">
                            <a href="/USAProject" onClick={Link.handleClick}>
                                <img src="http://7xnmna.com2.z0.glb.qiniucdn.com/index-content-1.png" alt="" />
                            </a>
                        </p>
                    </div>
                    <div className="slide2">
                        <div className="slide-img-box">
                            <div className="slide-img-content">
                                <a href="/USAProjectPage" onClick={Link.handleClick}>
                                  <div className="text1">
                                      <img src="http://7xnmna.com2.z0.glb.qiniucdn.com/index-content-2.png" />
                                  </div>
                                  <div className="text2">
                                      <img src="http://7xnmna.com2.z0.glb.qiniucdn.com/index-content-3.png" />
                                  </div>
                                  <div className="text3">
                                      <img src="http://7xnmna.com2.z0.glb.qiniucdn.com/index-content-4.png" />
                                  </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="slide3">
                        <a href="/USAProjectPage" onClick={Link.handleClick}>
                          <h2 name="banner1">
                              <img src="http://7xnmna.com2.z0.glb.qiniucdn.com/index-content-5.png" /></h2>
                          <p name="banner1">
                              <img src="http://7xnmna.com2.z0.glb.qiniucdn.com/index-content-6.png" alt="2015 带你留学" />
                          </p>
                          <div className="da-img" name="banner1">
                              <img src="http://7xnmna.com2.z0.glb.qiniucdn.com/index-content-7.png" />
                          </div>
                        </a>
                    </div>
                </CSlider>
                <div className="bgShadow"></div>
            </div>
        );
    }
    componentDidMount() {
        $(".bgShadow").hide();
    }
}

export default Slide;

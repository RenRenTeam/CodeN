/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import styles from './Banner.less';
import withStyles from '../../../decorators/withStyles';
import $ from 'jquery'
import AppActions from '../../../actions/AppActions';

@withStyles(styles)
class Banner {

    static contextTypes = {
        onSetTitle: PropTypes.func.isRequired
    };
    GotoBanner(e){
        $('body,html').animate({ scrollTop: 680 }, 300);
    }
    render() {
        let title = '公开课－人人留学';
        this.context.onSetTitle(title);
        return (
            <section className="banner">
                <div id="da-slider" className="slideshow da-slider">
                    <div className="da-slide open-class-banner1">
                        <div className="content">
                            <div className="title"><h2 className="openH2">Open class</h2></div>                      
                            <div className="arrow" onClick={this.GotoBanner.bind(this)}></div>
                        </div>
                    </div>
                    <div className="slider-nav">
                        <div className="da-dots"></div>
                        <div className="da-arrows">
                            <span className="da-arrows-prev"><img src='http://passport.shenyuan.org/WebResources/Default/Images/banner-carousel-left.png' /></span>
                            <span className="da-arrows-next"><img src='http://passport.shenyuan.org/WebResources/Default/Images/banner-carousel-right.png' /></span>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Banner;

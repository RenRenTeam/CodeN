import React, { PropTypes } from 'react';
import styles from './CountryActive.less';
/*import styles from '../CountryEducationStudyAbroad/CountryEducationStudyAbroad.less';
import styles from '../StudyAbroadBox/Bachelor/Bachelor.less';*/
import withStyles from '../../../decorators/withStyles';
import Link from '../../../utils/Link';
var CSlider = require('react-slick');
var Select = require('rc-select');
import $ from 'jquery';
/*已经不用暂时保留*/
@withStyles(styles)
class CountryActive  extends React.Component {
    render() {
         var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 4,
            autoplay: false,
        };
        return (
           <section className="country-education-study-abroad">
                <div className="major-tabs-box">
                    <div className="major-tabs">
                        <div className="item bachelor selected" data-content="#bachelor" data-value="本科留学"  >
                            <div className="title" onClick={this.props.click} >本科留学</div>
                            <div className="more"><a href="/advisory-library.aspx?country=USA&tags=本科留学">查看全部 ></a></div>
                            <div className="clear"></div>
                        </div>
                        <div className="item master" data-content="#master" data-value="硕士留学"   >
                            <div className="title" onClick={this.props.click}>硕士留学</div>
                            <div className="more"><a href="/advisory-library.aspx?country=USA&tags=硕士留学">查看全部 ></a></div>
                            <div className="clear"></div>
                        </div>
                        <div className="item high" data-content="#high" data-value="高中留学"  >
                            <div className="title" onClick={Link.handleClick}>高中留学</div>
                            <div className="more"><a href="/advisory-library.aspx?country=USA&tags=高中留学">查看全部 ></a></div>
                            <div className="clear"></div>
                        </div>
                        <div className="clear"></div>
                    </div>
                    <div className="major-tab-content" id="major-tab-content">

                        <div id="bachelor" className="study-abroad-box tab-content-box" >
                            <div className="review-box">
                                <div className="major">
                                    <h4><a href="/advisory-library-detail.aspx">全国巡讲回顾{2==2?222:333}</a></h4>
                                    <div className="description">2015开年巨献，听牛津、剑桥、全奖录取导师，为大家带来最有价值的美国留学申请指导课程。</div>
                                </div>
                                <div className="hr"></div>
                            </div>
                        <div className="advertisement-box">
                             <a href="#"><img src="http://passport.shenyuan.org/WebResources/Default/images/study-abroad/1.jpg" /></a>
                             <a href="/college-rank.aspx?country=USA&type=list"><img src="http://passport.shenyuan.org/WebResources/Default/images/study-abroad/3.jpg" /></a>
                        </div>
                        <div className="third-box">
                            <div className="minor-tabs tabs-box">
                                <div className="tabs">
                                    <div className="item" data-content="#enroll" data-value="录取捷报">录取捷报</div>
                                    <div className="item" data-content="#apply" data-value="申请技巧">申请技巧</div>
                                    <div className="clear"></div>
                                </div>
                                <div className="tab-content">
                                    <div id="apply" className="skill-box tab-content-box"></div>
                                    <div id="enroll" className="skill-box tab-content-box"></div>
                                </div>
                            </div>
                            <div className="hr"></div>
                            <div className="education-school">
                        <div className="school-container">
                            <CSlider {...settings}>
                                <div className="slide">
                                    <a href="/college-detail.aspx">
                                        <img src="http://passport.shenyuan.org/WebResources/Default/images/study-abroad/school1.png" /></a>
                                </div>
                                <div className="slide">
                                    <a href="/college-detail.aspx">
                                        <img src="http://passport.shenyuan.org/WebResources/Default/images/study-abroad/school2.png" /></a>
                                </div>
                                <div className="slide">
                                    <a href="/college-detail.aspx">
                                        <img src="http://passport.shenyuan.org/WebResources/Default/images/study-abroad/school1.png" /></a>
                                </div>
                                <div className="slide">
                                    <a href="/college-detail.aspx">
                                        <img src="http://passport.shenyuan.org/WebResources/Default/images/study-abroad/school2.png" /></a>
                                </div>
                                <div className="slide">
                                    <a href="/college-detail.aspx">
                                        <img src="http://passport.shenyuan.org/WebResources/Default/images/study-abroad/school1.png" /></a>
                                </div>
                                <div className="slide">
                                    <a href="/college-detail.aspx">
                                        <img src="http://passport.shenyuan.org/WebResources/Default/images/study-abroad/school2.png" /></a>
                                </div>
                                <div className="slide">
                                    <a href="/college-detail.aspx">
                                        <img src="http://passport.shenyuan.org/WebResources/Default/images/study-abroad/school1.png" /></a>
                                </div>
                                <div className="slide">
                                    <a href="/college-detail.aspx">
                                        <img src="http://passport.shenyuan.org/WebResources/Default/images/study-abroad/school2.png" /></a>
                                </div>
                                <div className="slide">
                                    <a href="/college-detail.aspx">
                                        <img src="http://passport.shenyuan.org/WebResources/Default/images/study-abroad/school1.png" /></a>
                                </div>
                                <div className="slide">
                                    <a href="/college-detail.aspx">
                                        <img src="http://passport.shenyuan.org/WebResources/Default/images/study-abroad/school2.png" /></a>
                                </div>
                                <div className="slide">
                                    <a href="/college-detail.aspx">
                                        <img src="http://passport.shenyuan.org/WebResources/Default/images/study-abroad/school1.png" /></a>
                                </div>
                                <div className="slide">
                                    <a href="/college-detail.aspx">
                                        <img src="http://passport.shenyuan.org/WebResources/Default/images/study-abroad/school2.png" /></a>
                                </div>
                            </CSlider>
                        </div>
                    </div>
                </div>
                <div className="clear"></div>
            </div>



                    </div>
                </div>
            </section>
        );
    }
   componentDidMount() {
            $(".major-tabs-box .major-tabs .item").click(function(){
                    $(".major-tabs-box .major-tabs .item").removeClass("selected");
                    $(this).addClass("selected"); 
            });

    }

    handleGoBachelorClick(){

    }
    testClick1(e){

        this.props.click();
    }
    testClick2(e){

        this.props.click();
    }
    testClick3(e){
        
        this.f1();
    }

}

export default CountryActive;
/**
 *     Created by xyx on 2015.8.20
 */
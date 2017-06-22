/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import $ from 'jquery';
import Link from '../../../../../utils/Link.js';
import SearchOpenClassFunc from '../../SearchOpenClassFunc/SearchOpenClassFunc.js';

class EveryOneStudy extends React.Component{
    
    render() {
        return ( 
            <div>
                <h5>大家都在学</h5>
                <div className="class-list-box">
                    <div className="class-item">
                        <div className="class-img">
                            <a   href="/OpenClassDetail-11" onClick={Link.handleClick}>
                                <img   src="http://passport.shenyuan.org/WebResources/Default/images/open-class/class/new/1.jpg" />
                            </a>
                        </div>
                        <div className="class-desc wrap">
                            <div className="subwrap">
                                <div className="middle">
                                    <h6><a href="/OpenClassDetail-11" onClick={Link.handleClick}>澳洲留学？你一定不能错过他</a></h6>
                                    <div className="appointment">已预约 <span>127</span> 人</div>
                                </div>
                            </div>
                        </div>
                        <div className="clear"></div>
                    </div>
                    <div className="class-item">
                        <div className="class-img">
                            <a href="/OpenClassDetail-4"  onClick={Link.handleClick}>
                                <img   src="http://passport.shenyuan.org/WebResources/Default/images/open-class/class/new/2.jpg" />
                            </a>
                        </div>
                        <div className="class-desc wrap">
                            <div className="subwrap">
                                <div className="middle">
                                    <h6><a href="/OpenClassDetail-4" onClick={Link.handleClick}>普通话流利的雅思考官和你说雅思</a></h6>
                                    <div className="appointment">已预约 <span>395</span> 人</div>
                                </div>
                            </div>
                        </div>
                        <div className="clear"></div>
                    </div>
                    <div className="class-item">
                        <div className="class-img">
                            <a    href="/OpenClassDetail-8" onClick={Link.handleClick}>
                                <img  src="http://passport.shenyuan.org/WebResources/Default/images/open-class/class/new/3.jpg" />
                            </a>
                        </div>
                        <div className="class-desc wrap"> 
                            <div className="subwrap">
                                <div className="middle">
                                    <h6><a   href="/OpenClassDetail-8" onClick={Link.handleClick}>执业移民律师，为你详解新西兰留学、移民</a></h6>
                                    <div className="appointment">已预约 <span>123</span> 人</div>
                                </div>
                            </div>
                        </div>
                        <div className="clear"></div>
                    </div>
                    <div className="class-item">
                        <div className="class-img">
                    
                            <a href="/OpenClassDetail-5" onClick={Link.handleClick}>
                                <img  src="http://passport.shenyuan.org/WebResources/Default/images/open-class/class/new/4.jpg" />
                            </a>
                       
                        </div>
                        <div className="class-desc wrap">
                            <div className="subwrap">
                                <div className="middle">
                                    <h6><a href="/OpenClassDetail-5" onClick={Link.handleClick}>著名的“袁大大”，引领你赴日留学之路</a></h6>
                                    <div className="appointment">已预约 <span>287</span> 人</div>
                                </div>
                            </div>
                        </div>
                        <div className="clear"></div>
                    </div>
                </div>
            </div>
        );
    }


    componentDidMount(){
        
    }
}

export default EveryOneStudy;
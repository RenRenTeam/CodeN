/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import styles from './HotSchool.less';
import withStyles from '../../../decorators/withStyles';
import Link from '../../../utils/Link';

import $ from 'jquery';

@withStyles(styles)
class HotSchool extends React.Component{
  render() {

        var flag=this.props.flag;

        var arr=[1];

        if(flag == "AUS"){

            var usaDv=arr.map(function(){

                return (
                    <div className="hot-school-box">
                        <div className="school-detail">
                            <div className="school-pic">
                                <a onClick={Link.handleClick} href="/AUSIBT">
                                    <img src="http://7xnmna.com2.z0.glb.qiniucdn.com/aus-hotschool-1.jpg" />
                                </a>
                            </div>
                            <div className="school-info">
                                <h3><a onClick={Link.handleClick} href="/AUSIBT">埃迪斯科文大学</a></h3>
                                <div className="location">{flag}</div>
                                <div className="description">Edith Cowan University</div>
                                <div className="action">
                                    <a onClick={Link.handleClick} href="/AUSIBT">详情</a>
                                </div>
                            </div>
                            <div className="clear"></div>
                        </div>
                        <div className="school-list">
                            <div className="item">
                                <a onClick={Link.handleClick} href="/AUSIBT">
                                    <img src="http://7xnmna.com2.z0.glb.qiniucdn.com/aus-hotschool-2.jpg" />
                                    <div className="title-box">
                                        <div className="title">迪肯大学</div>
                                        <div className="bg"></div>
                                    </div>
                                </a>
                            </div>
                            <div className="item">
                                <a onClick={Link.handleClick} href="/AUSIBT">
                                    <img src="http://7xnmna.com2.z0.glb.qiniucdn.com/aus-hotschool-3.jpg" />
                                    <div className="title-box">
                                        <div className="title">格里菲斯大学</div>
                                        <div className="bg"></div>
                                    </div>
                                </a>
                            </div>
                            <div className="item">
                                <a onClick={Link.handleClick} href="/AUSIBT">
                                    <img src="http://7xnmna.com2.z0.glb.qiniucdn.com/aus-hotschool-4.jpg" />
                                    <div className="title-box">
                                        <div className="title">麦考瑞大学</div>
                                        <div className="bg"></div>
                                    </div>
                                </a>
                            </div>
                            <div className="item">
                                <a onClick={Link.handleClick}  href="/AUSIBT">
                                    <img src="http://7xnmna.com2.z0.glb.qiniucdn.com/aus-hotschool-5.jpg" />
                                    <div className="title-box">
                                        <div className="title">南澳大学</div>
                                        <div className="bg"></div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="clear"></div>
                    </div>
                );
            });
        }else if(flag == "USA"){
                var usaDv=arr.map(function(){
                return (
                    <div className="hot-school-box">
                        <div className="school-detail">
                            <div className="school-pic">
                                <a onClick={Link.handleClick} href="/USAProjectPage-schoolA">
                                    <img src="http://7xnmna.com2.z0.glb.qiniucdn.com/usa-hotSchool-1-1.jpg" />
                                </a>
                            </div>
                            <div className="school-info">
                                <h3><a onClick={Link.handleClick} href="/USAProjectPage-schoolA">东北大学</a></h3>
                                <div className="location">{flag}</div>
                                <div className="description">Northeastern University</div>
                                <div className="action">
                                    <a onClick={Link.handleClick} href="/USAProjectPage-schoolA">详情</a>
                                </div>
                            </div>
                            <div className="clear"></div>
                        </div>
                        <div className="school-list">
                            <div className="item">
                                <a onClick={Link.handleClick} href="/USAProjectPage-schoolB">
                                    <img src="http://7xnmna.com2.z0.glb.qiniucdn.com/usa-hotSchool-2-2.jpg" />
                                    <div className="title-box">
                                        <div className="title">俄勒冈州立大学</div>
                                        <div className="bg"></div>
                                    </div>
                                </a>
                            </div>
                            <div className="item">
                                <a onClick={Link.handleClick} href="/USAProjectPage-schoolC">
                                    <img src="http://7xnmna.com2.z0.glb.qiniucdn.com/usa-hotSchool-3.jpg" />
                                    <div className="title-box">
                                        <div className="title">圣地亚哥州立大学</div>
                                        <div className="bg"></div>
                                    </div>
                                </a>
                            </div>
                            <div className="item">
                                <a onClick={Link.handleClick} href="/USAProjectPage-schoolD">
                                    <img src="http://7xnmna.com2.z0.glb.qiniucdn.com/usa-hotSchool-4.jpg" />
                                    <div className="title-box">
                                        <div className="title">佩斯大学</div>
                                        <div className="bg"></div>
                                    </div>
                                </a>
                            </div>
                            <div className="item">
                                <a onClick={Link.handleClick}  href="/USAProjectPage-schoolE">
                                    <img src="http://7xnmna.com2.z0.glb.qiniucdn.com/usa-hotSchool-5-5.jpg" />
                                    <div className="title-box">
                                        <div className="title">特拉华大学</div>
                                        <div className="bg"></div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="clear"></div>
                    </div>
                );
            });
        }
        else if(flag == "UK"){

            var usaDv=arr.map(function(){

                return (
                    <div className="hot-school-box">
                        <div className="school-detail">
                            <div className="school-pic">
                                <a onClick={Link.handleClick} href="/CollegeDetail-UK-大学-249">
                                    <img src="http://7xnmna.com2.z0.glb.qiniucdn.com/uk-hotSchool-1.jpg" />
                                </a>
                            </div>
                            <div className="school-info">
                                <h3><a onClick={Link.handleClick} href="/CollegeDetail-UK-大学-249">华威大学</a></h3>
                                <div className="location">{flag}</div>
                                <div className="description">University of Warwick</div>
                                <div className="action">
                                    <a onClick={Link.handleClick} href="/CollegeDetail-UK-大学-249">详情</a>
                                </div>
                            </div>
                            <div className="clear"></div>
                        </div>
                        <div className="school-list">
                            <div className="item">
                                <a onClick={Link.handleClick} href="/CollegeDetail-UK-大学-255">
                                    <img src="http://7xnmna.com2.z0.glb.qiniucdn.com/uk-hotSchool-2.jpg" />
                                    <div className="title-box">
                                        <div className="title">伯明翰大学</div>
                                        <div className="bg"></div>
                                    </div>
                                </a>
                            </div>
                            <div className="item">
                                <a onClick={Link.handleClick} href="/CollegeDetail-UK-大学-261">
                                    <img src="http://7xnmna.com2.z0.glb.qiniucdn.com/uk-hotSchool-3.jpg" />
                                    <div className="title-box">
                                        <div className="title">爱丁堡大学</div>
                                        <div className="bg"></div>
                                    </div>
                                </a>
                            </div>
                            <div className="item">
                                <a onClick={Link.handleClick} href="/CollegeDetail-UK-大学-246">
                                    <img src="http://7xnmna.com2.z0.glb.qiniucdn.com/uk-hotSchool-4.jpg" />
                                    <div className="title-box">
                                        <div className="title">巴斯大学</div>
                                        <div className="bg"></div>
                                    </div>
                                </a>
                            </div>
                            <div className="item">
                                <a onClick={Link.handleClick}  href="/CollegeDetail-UK-大学-265">
                                    <img src="http://7xnmna.com2.z0.glb.qiniucdn.com/uk-hotSchool-5.jpg" />
                                    <div className="title-box">
                                        <div className="title">曼彻斯特大学</div>
                                        <div className="bg"></div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="clear"></div>
                    </div>
                );
            });
        }else{
            var usaDv=arr.map(function(){

                return (
                    <div className="hot-school-box">
                        <div className="school-detail">
                            <div className="school-pic">
                                <a onClick={Link.handleClick}>
                                    <img src="http://passport.shenyuan.org/WebResources/Default/images/AUS/1.jpg" />
                                </a>
                            </div>
                            <div className="school-info">
                                <h3><a onClick={Link.handleClick} href="">澳洲国立大学</a></h3>
                                <div className="location">{flag}</div>
                                <div className="description">The Australian National University</div>
                                <div className="action">
                                    <a onClick={Link.handleClick} href="">详情</a>
                                </div>
                            </div>
                            <div className="clear"></div>
                        </div>
                        <div className="school-list">
                            <div className="item">
                                <a onClick={Link.handleClick}>
                                    <img src="http://passport.shenyuan.org/WebResources/Default/images/AUS/2.jpg" />
                                    <div className="title-box">
                                        <div className="title">墨尔本大学</div>
                                        <div className="bg"></div>
                                    </div>
                                </a>
                            </div>
                            <div className="item">
                                <a onClick={Link.handleClick}>
                                    <img src="http://passport.shenyuan.org/WebResources/Default/images/AUS/3.jpg" />
                                    <div className="title-box">
                                        <div className="title">悉尼大学</div>
                                        <div className="bg"></div>
                                    </div>
                                </a>
                            </div>
                            <div className="item">
                                <a onClick={Link.handleClick}>
                                    <img src="http://passport.shenyuan.org/WebResources/Default/images/AUS/4.jpg" />
                                    <div className="title-box">
                                        <div className="title">昆士兰大学</div>
                                        <div className="bg"></div>
                                    </div>
                                </a>
                            </div>
                            <div className="item">
                                <a onClick={Link.handleClick}>
                                    <img src="http://passport.shenyuan.org/WebResources/Default/images/AUS/5.jpg" />
                                    <div className="title-box">
                                        <div className="title">New South Wales</div>
                                        <div className="bg"></div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="clear"></div>
                    </div>
                );
            });
        }
        var titleStr="热门学校";
        if(flag=="USA"){titleStr="直录、双录项目";}
        else if(flag=="AUS"){titleStr="本科快捷课程"}
        return (
            <div className="country-school-list" >
                <h2>{titleStr}</h2>
                {usaDv}
            </div>
        );
    }
}

export default HotSchool;
/**
 * Created by XiaoKangZheng on 2015/7/28.
 */

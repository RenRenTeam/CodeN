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

                var firstNode=this.props.data.map(function(obj,index){
                        if(index==0){
                            return (
                                    <div className="school-detail"> 
                                        <div className="school-pic">
                                            <a onClick={Link.handleClick} href={"CollegeDetail-"+flag+"-大学-"+obj.Sysno}>
                                                <img src={obj.Logo} />
                                            </a>
                                        </div>
                                        <div className="school-info">
                                            <h3><a onClick={Link.handleClick} href={"CollegeDetail-"+flag+"-大学-"+obj.Sysno}>{obj.Name}</a></h3>
                                            <div className="location">{flag}</div>
                                            <div className="description">{obj.EnglishName}</div><div className="action"><a onClick={Link.handleClick} href={"CollegeDetail-"+flag+"-大学-"+obj.Sysno}>详情</a></div>
                                        </div>
                                        <div className="clear"></div>
                                    </div>
                                );
                        }
                });
                var nodes = this.props.data.map(function(obj,index){ 
                        if(index>0&&index<4){
                            return (

                                  <div className="item">
                                        <a onClick={Link.handleClick} href={"CollegeDetail-"+flag+"-大学-"+obj.Sysno}>
                                            <img src={obj.Logo} />
                                            <div className="title-box">
                                                <div className="title">{obj.Name}</div>
                                                <div className="bg"></div>
                                            </div>
                                        </a>
                                    </div>
                                );
                        }
                    
                });
                return (

                            <div className="country-school-list" >
                                    <h2>热门学校</h2>
                                    <div className="hot-school-box">   
                                            {firstNode} 
                                            <div className="school-list">
                                                    {nodes}
                                                    <div className="item more">
                                                        <a onClick={Link.handleClick} href="/College">
                                                            <div className="title-box">
                                                                <div className="title">查看全部</div>
                                                                <div className="bg"></div>
                                                            </div>
                                                        </a>
                                                    </div>
                                            </div>
                                            <div className="clear"></div>
                                    </div>
                            </div>
                );
            }

 /*   render() {
        return (
            <div className="country-school-list" >
                <h2>热门学校</h2>
                <div className="hot-school-box">
                    <div className="school-detail"> 
                        
                        <div className="school-pic">
                            <a onClick={Link.handleClick} href={"CollegeDetail-"+(this.props.flag)+"-大学-"+((this.props.data[0])?(this.props.data[0].Sysno):"")}>
                                <img src={(this.props.data[0])?(this.props.data[0].Logo):""} />
                            </a>
                        </div>
                        <div className="school-info">
                            <h3><a onClick={Link.handleClick} href={"CollegeDetail-"+(this.props.flag)+"-大学-"+((this.props.data[0])?(this.props.data[0].Sysno):"")}>{(this.props.data[0])?(this.props.data[0].Name):""}</a></h3>
                            <div className="location">{this.props.flag}</div>
                            <div className="description">{this.props.data[0].EnglishName}</div><div className="action"><a onClick={Link.handleClick} href={"CollegeDetail-"+(this.props.flag)+"-大学-"+((this.props.data[0])?(this.props.data[0].Sysno):"")}>详情</a></div>
                        </div>
                        <div className="clear"></div>
                        
                    </div>
                    <div className="school-list">
                        <div className="item">
                            <a onClick={Link.handleClick} href={"CollegeDetail-"+(this.props.flag)+"-大学-"+((this.props.data[1])?(this.props.data[1].Sysno):"")}>
                                <img src={(this.props.data[1])?(this.props.data[1].Logo):""} />
                                <div className="title-box">
                                    <div className="title">{this.props.data[1].Name}</div>
                                    <div className="bg"></div>
                                </div>
                            </a>
                        </div>
                        <div className="item">
                            <a onClick={Link.handleClick} href={"CollegeDetail-"+(this.props.flag)+"-大学-"+((this.props.data[2])?(this.props.data[2].Sysno):"")}>
                               <img src={(this.props.data[2])?(this.props.data[2].Logo):""} />
                                <div className="title-box">
                                    <div className="title">{this.props.data[2].Name}</div>
                                    <div className="bg"></div>
                                </div>
                            </a>
                        </div>
                        <div className="item">
                            <a onClick={Link.handleClick} href={"CollegeDetail-"+(this.props.flag)+"-大学-"+((this.props.data[3])?(this.props.data[3].Sysno):"")}>
                                <img src={(this.props.data[3])?(this.props.data[3].Logo):""} />
                                <div className="title-box">
                                    <div className="title">{this.props.data[3].Name}</div>
                                    <div className="bg"></div>
                                </div>
                            </a>
                        </div>
                        <div className="item more">
                            <a onClick={Link.handleClick} href="/College">
                                <div className="title-box">
                                    <div className="title">查看全部</div>
                                    <div className="bg"></div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="clear"></div>
                </div>
            </div>
        );
    }*/

}

export default HotSchool;
/**
 * Created by XiaoKangZheng on 2015/7/28.
 */

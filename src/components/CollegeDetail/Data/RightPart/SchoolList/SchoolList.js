//SchoolList.js
/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import $ from 'jquery';

import Link from '../../../../../utils/Link';
class SchoolList{

    render() {  
	var coun=this.props.country;
	var school=this.props.school;
	var num=this.props.json.length-1;
             var EnglishStr="";
	var nodes=this.props.json.map(function(obj,index){
                        EnglishStr=obj.EnglishName;
                        let url = "CollegeDetail-"+coun+"-"+school+"-"+obj.Sysno;
                        if(EnglishStr.length>16){EnglishStr=EnglishStr.substring(0,12)+"..."}
			if(index==num){                            
					return(
  						 <div className="school-item  full" >
		                    <div className="school-logo">
		                        <a href={url}  onClick={Link.handleClick}>
		                            <img src={obj.Logo} /></a>
		                    </div>
		                    <div className="school-description">
		                        <h5><a href={url} onClick={Link.handleClick}>{obj.Name}</a></h5>
		                        <h6><a href={url} onClick={Link.handleClick}>{EnglishStr}</a></h6>
		                        <div className="number"><span>{obj.Follow?obj.Follow:(obj.XiangQu?obj.XiangQu:obj.Browses)}</span>人已申请该校</div>
		                    </div>
		                    <div className="clear"></div>
		                </div>
		            );
			}else{
					return(
  						 <div className="school-item" >
		                    <div className="school-logo">
		                        <a href={url} onClick={Link.handleClick}>
		                            <img src={obj.Logo} /></a>
		                    </div>
		                    <div className="school-description">
		                        <h5><a href={url} onClick={Link.handleClick}>{obj.Name}</a></h5>
		                        <h6><a href={url} onClick={Link.handleClick}>{EnglishStr}</a></h6>
		                        <div className="number"><span>{obj.Follow?obj.Follow:(obj.XiangQu?obj.XiangQu:obj.Browses)}</span>人已申请该校</div>
		                    </div>
		                    <div className="clear"></div>
		                </div>
		            );
			}
			  				
						
						
			});
			if(nodes.length > 6){
           
                    nodes.length=6;
				
			}
        return (
                <div className="school-list">
                	{nodes}
                </div>
        );
    }

    //dom加载完调用
    componentDidMount(){

        //this.loadSchoolList();
    }
}

export default SchoolList;




/*<div className="school-item">
                                <div className="school-logo">
                                    <a href="/college-detail.aspx">
                                        <img src="http://passport.shenyuan.org/WebResources/Default/images/college/college-logo.png" />
                                    </a>
                                </div>
                                <div className="school-description">
                                    <h5><a href="/college-detail.aspx">新希望学校</a></h5>
                                    <h6><a href="/college-detail.aspx">New Hope Academy</a></h6>
                                    <div className="number"><span>65</span>人已申请该校</div>
                                </div>
                                <div className="clear"></div>
                            </div>
                            <div className="school-item">
                                <div className="school-logo">
                                    <a href="/college-detail.aspx">
                                        <img src="http://passport.shenyuan.org/WebResources/Default/images/college/college-logo.png" /></a>
                                </div>
                                <div className="school-description">
                                    <h5><a href="/college-detail.aspx">新希望学校</a></h5>
                                    <h6><a href="/college-detail.aspx">New Hope Academy</a></h6>
                                    <div className="number"><span>65</span>人已申请该校</div>
                                </div>
                                <div className="clear"></div>
                            </div>
                            <div className="school-item">
                                <div className="school-logo">
                                    <a href="/college-detail.aspx">
                                        <img src="http://passport.shenyuan.org/WebResources/Default/images/college/college-logo.png" /></a>
                                </div>
                                <div className="school-description">
                                    <h5><a href="/college-detail.aspx">新希望学校</a></h5>
                                    <h6><a href="/college-detail.aspx">New Hope Academy</a></h6>
                                    <div className="number"><span>65</span>人已申请该校</div>
                                </div>
                                <div className="clear"></div>
                            </div>
                            <div className="school-item">
                                <div className="school-logo">
                                    <a href="/college-detail.aspx">
                                        <img src="http://passport.shenyuan.org/WebResources/Default/images/college/college-logo.png" /></a>
                                </div>
                                <div className="school-description">
                                    <h5><a href="/college-detail.aspx">新希望学校</a></h5>
                                    <h6><a href="/college-detail.aspx">New Hope Academy</a></h6>
                                    <div className="number"><span>65</span>人已申请该校</div>
                                </div>
                                <div className="clear"></div>
                            </div>
                            <div className="school-item">
                                <div className="school-logo">
                                    <a href="/college-detail.aspx">
                                        <img src="http://passport.shenyuan.org/WebResources/Default/images/college/college-logo.png" /></a>
                                </div>
                                <div className="school-description">
                                    <h5><a href="/college-detail.aspx">新希望学校</a></h5>
                                    <h6><a href="/college-detail.aspx">New Hope Academy</a></h6>
                                    <div className="number"><span>65</span>人已申请该校</div>
                                </div>
                                <div className="clear"></div>
                            </div>
                            <div className="school-item full">
                                <div className="school-logo">
                                    <a href="/college-detail.aspx">
                                        <img src="http://passport.shenyuan.org/WebResources/Default/images/college/college-logo.png" /></a>
                                </div>
                                <div className="school-description">
                                    <h5><a href="/college-detail.aspx">新希望学校</a></h5>
                                    <h6><a href="/college-detail.aspx">New Hope Academy</a></h6>
                                    <div className="number"><span>65</span>人已申请该校</div>
                                </div>
                                <div className="clear"></div>
                            </div>*/
//AUS_IBT.js
/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import withStyles from '../../../../decorators/withStyles';
import styles from './AUS_IBT.less';
import Link from '../../../../utils/Link.js';

@withStyles(styles)
class AUSIBT  extends React.Component {  

     constructor(props) {
        super(props);
        this.state = ({
          direction:'',
        });
    }

    static contextTypes = {
        onSetTitle: PropTypes.func.isRequired
    };

    render() {
        let title = '澳洲－IBT';
        this.context.onSetTitle(title);
        return (
        	<div>
				<div className="ibt_banner"></div>
				<div className="ibt_guoli">IBT课程对应的6所国立大学</div>
				<div className="ibt_guoli_xx">
				  <ul>
				    <li><div className="img"><a href="/CollegeDetail-AUS-%E5%A4%A7%E5%AD%A6-9" onClick={Link.handleClick}><img src="http://passport.shenyuan.org/WebResources/Default/images/AUS/new/g1.jpg" border="0" /><div className="border"></div></a></div></li>
				    <li><div className="img"><a href="/CollegeDetail-AUS-%E5%A4%A7%E5%AD%A6-19" onClick={Link.handleClick}><img src="http://passport.shenyuan.org/WebResources/Default/images/AUS/new/g2.jpg" border="0" /><div className="border"></div></a></div></li>
				    <li><div className="img"><a href="/CollegeDetail-AUS-%E5%A4%A7%E5%AD%A6-17" onClick={Link.handleClick}><img src="http://passport.shenyuan.org/WebResources/Default/images/AUS/new/g3.jpg" border="0" /><div className="border"></div></a></div></li>
				    <li><div className="img"><a href="/CollegeDetail-AUS-%E5%A4%A7%E5%AD%A6-16" onClick={Link.handleClick}><img src="http://passport.shenyuan.org/WebResources/Default/images/AUS/new/g4.jpg" border="0" /><div className="border"></div></a></div></li>
				    <li><div className="img"><a href="/CollegeDetail-AUS-%E5%A4%A7%E5%AD%A6-38" onClick={Link.handleClick}><img src="http://passport.shenyuan.org/WebResources/Default/images/AUS/new/g5.jpg" border="0" /><div className="border"></div></a></div></li>
				    <li><div className="img"><a href="/CollegeDetail-AUS-%E5%A4%A7%E5%AD%A6-13" onClick={Link.handleClick}><img src="http://passport.shenyuan.org/WebResources/Default/images/AUS/new/g6.jpg" border="0" /><div className="border"></div></a></div></li>
			  	    <div className="clear"></div>
				  </ul>
				</div>
				<div style={{clear:"both"}}></div>
				<div className="ibt_zhuanye">IBT课程开设的专业<span>开设有商业管理、电脑及信息科技、大众传媒、旅游酒店管理及设计五大类40余种科目，均为热门专业。</span></div>
				<div className="bit_zhuanye_lb">
				  <ul>
				    <li><img src="http://passport.shenyuan.org/WebResources/Default/images/AUS/new/z1.jpg" width="197" height="197" border="0" /></li>
				    <li><img src="http://passport.shenyuan.org/WebResources/Default/images/AUS/new/z2.jpg" width="197" height="197" border="0" /></li>
				    <li><img src="http://passport.shenyuan.org/WebResources/Default/images/AUS/new/z3.jpg" width="197" height="197" border="0" /></li>
				    <li><img src="http://passport.shenyuan.org/WebResources/Default/images/AUS/new/z4.jpg" width="197" height="197" border="0" /></li>
				    <li><img src="http://passport.shenyuan.org/WebResources/Default/images/AUS/new/z5.jpg" width="197" height="197" border="0" /></li>
			  	    <div className="clear"></div>
				  </ul>
				</div>
				<div style={{clear:"both"}}></div>
				<div className="ibt_youshi">IBT课程的优势</div>
				<div className="ibt_youshi_lb">
				  <ul>
				    <li>
				      <div className="youshi_left"><img src="http://passport.shenyuan.org/WebResources/Default/images/AUS/new/one.jpg" width="27" height="27" /></div>
				      <div className="youshi_right">入学时间灵活：每年3次入学，分别为3月、6月和10月</div>
				    </li>
				    <li>
				      <div className="youshi_left"><img src="http://passport.shenyuan.org/WebResources/Default/images/AUS/new/two.jpg" width="27" height="27" /></div>
				      <div className="youshi_right">入学要求降低：雅思5.5分左右，高中平均成绩75分就有申请资格。雅思未达要求，可加读英文课程</div>
				    </li>
				    <li>
				      <div className="youshi_left"><img src="http://passport.shenyuan.org/WebResources/Default/images/AUS/new/three.jpg" width="27" height="27" /></div>
				      <div className="youshi_right">学制短：完成IBT课程后，直接进入大学二年级，仅需2年8个月就可获得学士学位</div>
				    </li>
				    <li>
				      <div className="youshi_left"><img src="http://passport.shenyuan.org/WebResources/Default/images/AUS/new/four.jpg" width="27" height="27" /></div>
				      <div className="youshi_right">确保学习质量：在澳大利亚大学一般每单元的学习时间为3个小时，每天的授课时间为6个小时（早上 9:00-12:00,下午1：30
				        －4：30）；但IBT课程每单元的学习时间为4个小时，每天的授课时间为8个小时（早上8：30-12:30,下午 1：30－5：30）。
				        这样设置课程保证了学生在较短的时间内可以充分理解掌握所学的知识 </div>
				    </li>
				    <li>
				      <div className="youshi_left"><img src="http://passport.shenyuan.org/WebResources/Default/images/AUS/new/five.jpg" width="27" height="27" /></div>
				      <div className="youshi_right">学历认可：文凭均为澳洲大学承认，完成IBT的文凭课程，可保证直升澳洲大学二年级</div>
				    </li>
			  	    <div className="clear"></div>
				  </ul>
				</div>

        	</div>
  
        );
    }
    componentDidMount() {



    }

}

export default AUSIBT;
/**
 * xyx 2015.8.21
 */

























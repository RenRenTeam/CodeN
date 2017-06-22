/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, {PropTypes} from 'react';
import withStyles from '../../../decorators/withStyles';
import AppActions from '../../../actions/AppActions';
import styles from './USAProjectPage.less';
import Link from '../../../utils/Link.js';
var EnterAnimation = require('enter-animation') ;

@withStyles(styles)
class USAProjectPage extends React.Component  {
	static contextTypes = {
	      onSetTitle: PropTypes.func.isRequired
	  };
	  constructor(props) {
	        super(props);

	        this.state = {
	            paiMing:'全部',
	            project:'全部',
	            isFive:'0',
	             direction:'enter',
          upend:false,
          type:'right',
          interval:0.1,
          delay:0.7
	        };
	    }
    	handelCurrent(e){

    		this.setState({
    			paiMing:e.target.innerHTML
    		});
    		this.state.paiMing = e.target.innerHTML;

    		//console.log(this.state);
    	}
    	handelCurrentV(e){
    		this.setState({
    			project:e.target.innerHTML
    		});
    		this.state.project = e.target.innerHTML;
    	}
          render() {
          	let title = '美国项目详细－人人留学';
    		this.context.onSetTitle(title);

                    return (
                    	<div className="contaniner_Deail">
		                    <div className="college-filter-box" id="showwTableisshow">
		                              <div className="college-filter-options" >
		                                        <div className="title">按排名：</div>
		                                        <ul className="college-filter-list">
		                                                  <li className={this.state.paiMing == "全部" ? "all active" : "all"}><a className="nofollow" onClick={this.handelCurrent.bind(this)}>全部</a></li>
		                                                  <li className={this.state.paiMing == "1-50名" ? " active" : ""}><a className="nofollow" onClick={this.handelCurrent.bind(this)}>1-50名</a></li>
		                                                  <li className={this.state.paiMing == "50-100名" ? " active" : ""}><a className="nofollow" onClick={this.handelCurrent.bind(this)}>50-100名</a></li>
		                                                  <li className={this.state.paiMing == "100-200名" ? " active" : ""}><a className="nofollow" onClick={this.handelCurrent.bind(this)}>100-200名</a></li>
		                                                  <li className={this.state.paiMing == "200名之后" ? " active" : ""}><a className="nofollow" onClick={this.handelCurrent.bind(this)}>200名之后</a></li>
		                                        </ul>
		                              </div>
		                              <div className="college-filter-options" >
		                                        <div className="title">按项目：</div>
		                                        <ul className="college-filter-list">
		                                                  <li className={this.state.project == "全部" ? "all active" : "all"}><a className="nofollow" onClick={this.handelCurrentV.bind(this)}>全部</a></li>
		                                                  <li className={this.state.project == "本科录取" ? " active" : ""}><a className="nofollow" onClick={this.handelCurrentV.bind(this)}>本科录取</a></li>
		                                                  <li className={this.state.project == "硕士录取" ? " active" : ""}><a className="nofollow" onClick={this.handelCurrentV.bind(this)}>硕士录取</a></li>
		                                        </ul>
		                              </div>

                <EnterAnimation interval={this.state.interval} type={this.state.type} upend={this.state.upend} direction={this.state.direction}>
		                              <table className="bigDv" cellspacing="0">
			                              <tr className="tr_tHeader">
			                              	<td className="t1">
			                              		USNews综排
			                              	</td>
			                              	<td className="t2">
			                              		院校名称
			                              	</td>
			                              	<td className="t3">
			                              		所在地区
			                              	</td>
			                              	<td className={this.state.project == "本科录取"  || this.state.project  == "全部"? "as_table benke cutelement" : "hide_bxox"}>
				                              	<table cellspacing="0" className="noBrder_table">
				                              		<tr>
				                              			<td  className="cutelement">
				                              				本科项目
				                              			</td>
				                              		</tr>
				                              		<tr>
				                              			<td className="as_table_A">
						                              		直录
						                              	</td>
						                              	<td className="as_table_B">
						                              		双录
						                              	</td>
						                              	<td className="as_table_C">
						                              		奖学金
						                              	</td>
				                              		</tr>
			                              		</table>
			                              	</td>
			                              	<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "as_table shuoshi cutelement" : "hide_bxox"} >
				                              	<table cellspacing="0"  className="noBrder_table">
				                              		<tr>
				                              			<td className="cutelement">
				                              				硕士项目
				                              			</td>
				                              		</tr>
				                              		<tr>
				                              			<td className="as_table_A">
						                              		直录
						                              	</td>
						                              	<td className="as_table_B">
						                              		双录
						                              	</td>
						                              	<td className="as_table_C">
						                              		奖学金
						                              	</td>
				                              		</tr>
			                              		</table>
			                              	</td>
			                              </tr>
			                              <tbody className={this.state.paiMing == "1-50名" && this.state.project != ""  || this.state.paiMing == "全部" ? "" : "hide_bxox"}>
		                              		<tr>
								<td className="xuhao">23</td>
								<td className="name">
									<a onClick = {Link.handleClick} href="/CollegeDetail-USA-%E5%A4%A7%E5%AD%A6-25023">
										南加州大学<p> University of South California</p>
									</a>
								</td>
								<td>加利福尼亚州</td>
								<td className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke as_table_A" : "hide_bxox"}></td>
								<td  className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke smallSiza as_table_B" : "hide_bxox"}>
								无语言提供有条件录取 本科预备证书课程：最低托福61，雅思5.5
							</td>
								<td className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke as_table_C" : "hide_bxox"}></td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi as_table_A" : "hide_bxox"}>有</td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi smallSiza as_table_B" : "hide_bxox"}>部分专业提供有条件录取：最低GPA3，托福61，雅思5.5
							硕士预备证书课程：最低托福51，雅思5.0，无语言可内测</td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi last_td as_table_C" : "hide_bxox"}></td>
							</tr>

							<tr>
								<td className="xuhao">23</td>
								<td className="name"><a onClick = {Link.handleClick} href="/CollegeDetail-USA-%E5%A4%A7%E5%AD%A6-25028">加州大学洛杉矶分校 <p>University of California-Los Angeles</p></a></td>
								<td>加利福尼亚州</td>
								<td className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke as_table_A" : "hide_bxox"}></td>
								<td  className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke smallSiza as_table_B" : "hide_bxox"}>
								语言项目培训
							</td>
								<td className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke as_table_C" : "hide_bxox"}></td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi as_table_A" : "hide_bxox"}></td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi smallSiza as_table_B" : "hide_bxox"}>预科：GPA3,托福69，雅思6分以上
							证书课程：最低托福83，雅思6.5语言可内测</td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi last_td as_table_C" : "hide_bxox"}></td>
							</tr>

							<tr>
								<td className="xuhao">30</td>
								<td className="name"><a onClick = {Link.handleClick} href="/CollegeDetail-USA-%E5%A4%A7%E5%AD%A6-24950">北卡罗莱纳大学教堂山分校<p>University of North Carolin-Chapel Hill</p></a></td>
								<td>北卡罗莱纳州</td>
								<td className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke as_table_A" : "hide_bxox"}></td>
								<td  className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke smallSiza as_table_B" : "hide_bxox"}>
								语言项目培训
							</td>
								<td className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke as_table_C" : "hide_bxox"}></td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi as_table_A" : "hide_bxox"}></td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi smallSiza as_table_B" : "hide_bxox"}>教育学硕士要求：
							语言预科托福75或雅思7分（单项6.5），GPA3.0</td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi last_td as_table_C" : "hide_bxox"}></td>
							</tr>

							<tr id="schoolA">
								<td className="xuhao">47</td>
								<td className="name"><a onClick = {Link.handleClick} href="/CollegeDetail-USA-%E5%A4%A7%E5%AD%A6-24983">东北大学 <p>Northeastern University</p> < /a></td >

								<td>马萨诸塞州</td>
								<td className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke as_table_A" : "hide_bxox"}></td>
								<td  className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke smallSiza as_table_B" : "hide_bxox"}>
								桥梁课程：GPA3.0以上，托福65或雅思6分以上
							</td>
								<td className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke as_table_C" : "hide_bxox"}></td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi as_table_A" : "hide_bxox"}>专升硕直录
							可配语言：最低要求托福45，雅思5，GPA2.5</td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi smallSiza as_table_B" : "hide_bxox"}>桥梁课程：GPA3.0以上，托福61或雅思6.0以上可以申请有条件录取
							未达要求可加读语言，最低要求：托福35、雅思4.5</td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi last_td as_table_C" : "hide_bxox"}></td>
							</tr>

			                              </tbody>
			                              <tbody className={this.state.paiMing == "50-100名" && this.state.project != ""  || this.state.paiMing == "全部" ? "" : "hide_bxox"}>
							<tr>
								<td className="xuhao">52</td>
								<td className="name"><a onClick = {Link.handleClick} href="/CollegeDetail-USA-%E5%A4%A7%E5%AD%A6-24975">华盛顿大学 <p>University of Washington</p></a></td>
								<td>华盛顿州</td>
								<td className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke as_table_A" : "hide_bxox"}></td>
								<td  className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke smallSiza as_table_B" : "hide_bxox"}>
								桥梁课程：托福72，雅思6，GPA3.0
							除了西雅图校区以外，其他几个校区提供本科无语言双录取
							</td>
								<td className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke as_table_C" : "hide_bxox"}></td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi as_table_A" : "hide_bxox"}>专升硕直录
							可配语言：最低要求托福45，雅思5，GPA2.5</td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi smallSiza as_table_B" : "hide_bxox"}>桥梁课程：GPA3.0以上，托福61或雅思6.0以上可以申请有条件录取
							未达要求可加读语言，最低要求：托福35、雅思4.5</td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi last_td as_table_C" : "hide_bxox"}></td>
							</tr>
							<tr>
								<td className="xuhao">61</td>
								<td className="name"><a onClick = {Link.handleClick} href="/CollegeDetail-USA-%E5%A4%A7%E5%AD%A6-24972">克莱门森大学<p> Clemson University</p></a></td>
								<td>南卡罗来纳州</td>
								<td className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke as_table_A" : "hide_bxox"}></td>
								<td  className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke smallSiza as_table_B" : "hide_bxox"}>
								</td>
								<td className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke as_table_C" : "hide_bxox"}></td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi as_table_A" : "hide_bxox"}></td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi smallSiza as_table_B" : "hide_bxox"}>硕士部分热门专业（MBA，计算机等）可以提供无语言双录取，GPA2.5以上</td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi last_td as_table_C" : "hide_bxox"}></td>
							</tr>

							<tr>
								<td className="xuhao">70</td>
								<td className="name"><a onClick = {Link.handleClick} href="/CollegeDetail-USA-%E5%A4%A7%E5%AD%A6-25095">弗吉尼亚理工大学<p> Virginia Tech</p></a></td>
								<td>弗吉尼亚州</td>
								<td className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke as_table_A" : "hide_bxox"}>直录：GPA3.0,托福80或雅思6.5及SAT/ACT成绩；</td>
								<td  className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke smallSiza as_table_B" : "hide_bxox"}>提供无语言双录取但是学生需要完成语言550级, 达到Offer要求的SAT成绩，考出托福80
								</td>
								<td className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke as_table_C" : "hide_bxox"}></td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi as_table_A" : "hide_bxox"}></td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi smallSiza as_table_B" : "hide_bxox"}></td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi last_td as_table_C" : "hide_bxox"}></td>
							</tr>

							<tr  id="schoolE">
								<td className="xuhao">75</td>
								<td className="name"><a onClick = {Link.handleClick} href="/CollegeDetail-USA-%E5%A4%A7%E5%AD%A6-25181">特拉华大学 <p>University of Delaware</p></a></td>
								<td>特拉华州</td>
								<td className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke as_table_A" : "hide_bxox"}></td>
								<td  className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke smallSiza as_table_B" : "hide_bxox"}>GPA3以上，无语言提供双录取
								</td>
								<td className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke as_table_C" : "hide_bxox"}>参加STAR课程奖学金：500美金</td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi as_table_A" : "hide_bxox"}>直录：GPA2.8以上，托福100或雅思7.5分以上，GMAT550以上两年以上工作经验--条件优秀可免</td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi smallSiza as_table_B" : "hide_bxox"}>部分专业提供双录取
							GPA2.8以上，无语言可以有条件录取</td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi last_td as_table_C" : "hide_bxox"}></td>
							</tr>

							<tr>
								<td className="xuhao">86</td>
								<td className="name"><a onClick = {Link.handleClick} href="/CollegeDetail-USA-%E5%A4%A7%E5%AD%A6-24925">马凯特大学<p> Marquette University</p></a></td>
								<td>威斯康辛州</td>
								<td className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke as_table_A" : "hide_bxox"}>GPA3，托福76或雅思6.5以上</td>
								<td  className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke smallSiza as_table_B" : "hide_bxox"}>无语言可以提供双录取
								</td>
								<td className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke as_table_C" : "hide_bxox"}></td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi as_table_A" : "hide_bxox"}></td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi smallSiza as_table_B" : "hide_bxox"}>无语言参加语言课程，ELS112级无须再考语言</td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi last_td as_table_C" : "hide_bxox"}></td>
							</tr>

							<tr>
								<td className="xuhao">89</td>
								<td className="name"><a onClick = {Link.handleClick} href="/CollegeDetail-USA-%E5%A4%A7%E5%AD%A6-25008">圣地亚哥大学<p> University of San Diego</p></a></td>
								<td>加利福尼亚州</td>
								<td className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke as_table_A" : "hide_bxox"}>GPA3，托福80或雅思6.5</td>
								<td  className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke smallSiza as_table_B" : "hide_bxox"}>部分专业GPA3以上，托福70或雅思6分以上提供双录取
								</td>
								<td className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke as_table_C" : "hide_bxox"}></td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi as_table_A" : "hide_bxox"}></td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi smallSiza as_table_B" : "hide_bxox"}></td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi last_td as_table_C" : "hide_bxox"}></td>
							</tr>

							<tr>
								<td className="xuhao">89</td>
								<td className="name"><a onClick = {Link.handleClick} href="/CollegeDetail-USA-%E5%A4%A7%E5%AD%A6-25194">北卡罗莱纳州立大学罗利分校 <p>North Carolina State University—​Raleigh</p></a></td>
								<td>北卡罗莱纳州</td>
								<td className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke as_table_A" : "hide_bxox"}>GPA 3.5以上，托福85或雅思6.5以上</td>
								<td  className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke smallSiza as_table_B" : "hide_bxox"}>GPA3.5以上，托福60或雅思6.0以上可以双录取
								</td>
								<td className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke as_table_C" : "hide_bxox"}></td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi as_table_A" : "hide_bxox"}></td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi smallSiza as_table_B" : "hide_bxox"}></td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi last_td as_table_C" : "hide_bxox"}></td>
							</tr>

							<tr>
								<td className="xuhao">89</td>
								<td className="name"><a onClick = {Link.handleClick} href="/CollegeDetail-USA-%E5%A4%A7%E5%AD%A6-25257">佛蒙特大学<p> The University of Vermont</p></a></td>
								<td>佛蒙特州</td>
								<td className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke as_table_A" : "hide_bxox"}>GPA3以上，托福90或雅思6.5以上
							国际大一最低要求：托福55，雅思5.5</td>
								<td  className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke smallSiza as_table_B" : "hide_bxox"}>GPA2.5以上，高二可申请桥梁课程
								</td>
								<td className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke as_table_C" : "hide_bxox"}>4000-10000美金/年，须面试</td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi as_table_A" : "hide_bxox"}></td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi smallSiza as_table_B" : "hide_bxox"}></td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi last_td as_table_C" : "hide_bxox"}></td>
							</tr>

							<tr>
								<td className="xuhao">96</td>
								<td className="name"><a onClick = {Link.handleClick} href="/CollegeDetail-USA-%E5%A4%A7%E5%AD%A6-25202">圣路易斯大学<p> Saint Louis University</p></a></td>
								<td>密苏里州</td>
								<td className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke as_table_A" : "hide_bxox"}>GPA3以上，托福80或雅思6.5分以上</td>
								<td  className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke smallSiza as_table_B" : "hide_bxox"}>GPA3以上，托福55或雅思5.5以上可以双录取，免申请费
								</td>
								<td className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke as_table_C" : "hide_bxox"}>8000美金/年（转学生）
							直录的3000美金荣誉奖学金可直免学费，双录SAT GPA达到要求也可获
							总统奖学金需单独申请</td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi as_table_A" : "hide_bxox"}>最低托福80或雅思6.5</td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi smallSiza as_table_B" : "hide_bxox"}></td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi last_td as_table_C" : "hide_bxox"}></td>
							</tr>

							<tr>
								<td className="xuhao">96</td>
								<td className="name"><a onClick = {Link.handleClick} href="/CollegeDetail-USA-%E5%A4%A7%E5%AD%A6-24906">阿拉巴马大学<p>University of Alabama</p></a></td>
								<td>阿拉巴马州</td>
								<td className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke as_table_A" : "hide_bxox"}>GPA3以上，托福71或雅思6分</td>
								<td  className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke smallSiza as_table_B" : "hide_bxox"}>无语言可双录取 GPA 3.0以上
								</td>
								<td className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke as_table_C" : "hide_bxox"}></td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi as_table_A" : "hide_bxox"}></td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi smallSiza as_table_B" : "hide_bxox"}></td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi last_td as_table_C" : "hide_bxox"}></td>
							</tr>

							<tr>
								<td className="xuhao">99</td>
								<td className="name"><a onClick = {Link.handleClick} href="/CollegeDetail-USA-%E5%A4%A7%E5%AD%A6-24961">德雷塞尔大学<p> Drexel University</p></a></td>
								<td>宾夕法尼亚州</td>
								<td className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke as_table_A" : "hide_bxox"}></td>
								<td  className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke smallSiza as_table_B" : "hide_bxox"}>桥梁课程：满足学术要求，托福53或雅思5分以上
								</td>
								<td className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke as_table_C" : "hide_bxox"}></td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi as_table_A" : "hide_bxox"}></td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi smallSiza as_table_B" : "hide_bxox"}>硕士桥梁课程：托福63，雅思5.5，商科需GMAT；
							（加州校区）金融硕士专业：GPA3.0以上，托福90或雅思6.5以上，GMAT570以上</td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi last_td as_table_C" : "hide_bxox"}></td>
							</tr>
			                              </tbody>
			                              <tbody className={this.state.paiMing == "100-200名" && this.state.project != ""  || this.state.paiMing == "全部" ? "" : "hide_bxox"}>
				                              <tr>
								<td className="xuhao">102</td>
								<td className="name"><a onClick = {Link.handleClick} href="/CollegeDetail-USA-%E5%A4%A7%E5%AD%A6-24879">奥本大学<p> Auburn University</p></a></td>
								<td>阿拉巴马州</td>
								<td className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke as_table_A" : "hide_bxox"}>GPA3.0,托福79雅思6.5，要SAT/ACT成绩</td>
								<td  className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke smallSiza as_table_B" : "hide_bxox"}>国际大一：GPA2.5,托福60或雅思5分；报16周语言课程的语言要求则更低。
								</td>
								<td className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke as_table_C" : "hide_bxox"}></td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi as_table_A" : "hide_bxox"}></td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi smallSiza as_table_B" : "hide_bxox"}>国际衔接课程：托福74，雅思6，GPA2.75，可加16周学术英语课程
							无简历、推荐、PS、GRE/GMAT，有6-9个硕士学分的接收内侧。</td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi last_td as_table_C" : "hide_bxox"}></td>
							</tr>

							<tr>
								<td className="xuhao">103</td>
								<td className="name"><a onClick = {Link.handleClick} href="/CollegeDetail-USA-%E5%A4%A7%E5%AD%A6-25237">新罕布什尔大学<p> University of New Hampshire</p></a></td>
								<td>新罕布什尔州</td>
								<td className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke as_table_A" : "hide_bxox"}>GPA2.5以上，托福80或雅思6.5以上，提供SAT1650</td>
								<td  className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke smallSiza as_table_B" : "hide_bxox"}>滚动录取桥梁课程：GPA2.5，托福50，雅思4.5，无语言可内测。
								</td>
								<td className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke as_table_C" : "hide_bxox"}></td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi as_table_A" : "hide_bxox"}></td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi smallSiza as_table_B" : "hide_bxox"}></td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi last_td as_table_C" : "hide_bxox"}></td>
							</tr>

							<tr>
								<td className="xuhao">103</td>
								<td className="name"><a onClick = {Link.handleClick} href="/CollegeDetail-USA-%E5%A4%A7%E5%AD%A6-24947">田纳西大学 <p>University of Tennessee</p></a></td>
								<td>田纳西州</td>
								<td className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke as_table_A" : "hide_bxox"}>直录要求：GPA3,托福70或雅思6.5，个别专业要求更高</td>
								<td  className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke smallSiza as_table_B" : "hide_bxox"}>GPA3以上，无语言无SAT可双录取
								</td>
								<td className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke as_table_C" : "hide_bxox"}></td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi as_table_A" : "hide_bxox"}>GPA3,托福80或雅思6.5，GRE/GMAT要求不同</td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi smallSiza as_table_B" : "hide_bxox"}></td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi last_td as_table_C" : "hide_bxox"}></td>
							</tr>

							<tr>
								<td className="xuhao">108</td>
								<td className="name"><a onClick = {Link.handleClick} href="/CollegeDetail-USA-%E5%A4%A7%E5%AD%A6-25227">南卡罗来纳大学<p> University of South Carolina</p></a></td>
								<td>南卡罗来纳州</td>
								<td className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke as_table_A" : "hide_bxox"}>GPA2.8以上，托福79或雅思6.5以上</td>
								<td  className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke smallSiza as_table_B" : "hide_bxox"}>国际大一：GPA2.5，托福60，雅思5分，可加18周语言，语言要求更低。
								</td>
								<td className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke as_table_C" : "hide_bxox"}></td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi as_table_A" : "hide_bxox"}>GPA3以上，托福80或雅思6.5以上，GMAT/GRE要求不同</td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi smallSiza as_table_B" : "hide_bxox"}></td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi last_td as_table_C" : "hide_bxox"}></td>
							</tr>

							<tr>
								<td className="xuhao">108</td>
								<td className="name"><a onClick = {Link.handleClick} href="/CollegeDetail-USA-%E5%A4%A7%E5%AD%A6-24895">戴顿大学 <p>University of Dayton</p></a></td>
								<td>俄亥俄州</td>
								<td className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke as_table_A" : "hide_bxox"}>GPA3.0，TOEFL70，雅思6.0</td>
								<td  className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke smallSiza as_table_B" : "hide_bxox"}>无语言双录取，滚动
								</td>
								<td className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke as_table_C" : "hide_bxox"}></td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi as_table_A" : "hide_bxox"}></td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi smallSiza as_table_B" : "hide_bxox"}>部分专业提供双录取（MBA、工程类、教育）</td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi last_td as_table_C" : "hide_bxox"}></td>
							</tr>

							<tr>
								<td className="xuhao">115</td>
								<td className="name"><a onClick = {Link.handleClick} href="/CollegeDetail-USA-%E5%A4%A7%E5%AD%A6-25078">圣托马斯大学<p> University of St. Thomas</p></a></td>
								<td>明尼苏达州</td>
								<td className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke as_table_A" : "hide_bxox"}>GPA3以上，托福80或雅思6.5以上</td>
								<td  className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke smallSiza as_table_B" : "hide_bxox"}>无语言可以双录取</td>
								<td className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke as_table_C" : "hide_bxox"}>5000美金/年</td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi as_table_A" : "hide_bxox"}>GPA3以上，托福80或雅思6.5以上</td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi smallSiza as_table_B" : "hide_bxox"}>部分硕士专业（音乐、工程、教育等）提供无语言双录取</td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi last_td as_table_C" : "hide_bxox"}></td>
							</tr>

							<tr>
								<td className="xuhao">115</td>
								<td className="name"><a onClick = {Link.handleClick} href="/CollegeDetail-USA-%E5%A4%A7%E5%AD%A6-25047">堪萨斯大学<p> University of Kansas</p></a></td>
								<td>堪萨斯州</td>
								<td className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke as_table_A" : "hide_bxox"}>GPA2.5,托福80或雅思6.5分</td>
								<td  className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke smallSiza as_table_B" : "hide_bxox"}>本科学术课程：最低GPA2.5,托福68或雅思5.5分</td>
								<td className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke as_table_C" : "hide_bxox"}>免申请费录取块</td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi as_table_A" : "hide_bxox"}></td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi smallSiza as_table_B" : "hide_bxox"}></td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi last_td as_table_C" : "hide_bxox"}></td>
							</tr>

							<tr>
								<td className="xuhao">121</td>
								<td className="name"><a onClick = {Link.handleClick} href="/CollegeDetail-USA-%E5%A4%A7%E5%AD%A6-24920">亚利桑那大学<p> University of Arizona</p></a></td>
								<td>亚利桑那州</td>
								<td className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke as_table_A" : "hide_bxox"}>托福70，雅思6</td>
								<td  className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke smallSiza as_table_B" : "hide_bxox"}>GPA2.8以上，无语言可以双录取，滚动</td>
								<td className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke as_table_C" : "hide_bxox"}></td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi as_table_A" : "hide_bxox"}></td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi smallSiza as_table_B" : "hide_bxox"}></td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi last_td as_table_C" : "hide_bxox"}></td>
							</tr>

							<tr>
								<td className="xuhao">121</td>
								<td className="name"><a onClick = {Link.handleClick} href="/CollegeDetail-USA-%E5%A4%A7%E5%AD%A6-24901">加州大学河滨分校<p> University of California-Riverside</p></a></td>
								<td>加利福尼亚州</td>
								<td className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke as_table_A" : "hide_bxox"}></td>
								<td  className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke smallSiza as_table_B" : "hide_bxox"}>桥梁课程：GPA3.4, 托福71或雅思5.5，SAT阅读560，无语言可加语言课程，2周下录取</td>
								<td className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke as_table_C" : "hide_bxox"}></td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi as_table_A" : "hide_bxox"}></td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi smallSiza as_table_B" : "hide_bxox"}></td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi last_td as_table_C" : "hide_bxox"}></td>
							</tr>

							<tr>
								<td className="xuhao">127</td>
								<td className="name"><a onClick = {Link.handleClick} href="/CollegeDetail-USA-%E5%A4%A7%E5%AD%A6-24948">科罗拉多州立大学 <p>Colorado State University</p></a></td>
								<td>科罗拉多州</td>
								<td className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke as_table_A" : "hide_bxox"}>GPA3.25,最低托福71或雅思6分</td>
								<td  className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke smallSiza as_table_B" : "hide_bxox"}>本科桥梁：GPA2.5,最低托福60或雅思5.5分，无语言内测，低语言可加语言课程，免申请费，2-4周下录取</td>
								<td className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke as_table_C" : "hide_bxox"}></td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi as_table_A" : "hide_bxox"}>GPA3,最低托福80或雅思6.5分</td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi smallSiza as_table_B" : "hide_bxox"}>硕士桥梁：GPA2.75,最低托福71或雅思6分，无须GRE/GMAT，免申请费，2-4周下录取</td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi last_td as_table_C" : "hide_bxox"}></td>
							</tr>

							<tr>
								<td className="xuhao">129</td>
								<td className="name"><a onClick = {Link.handleClick} href="/CollegeDetail-USA-%E5%A4%A7%E5%AD%A6-24897">亚利桑那州立大学<p> Arizona State University</p></a></td>
								<td>亚利桑那州</td>
								<td className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke as_table_A" : "hide_bxox"}>托福61，雅思6分</td>
								<td  className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke smallSiza as_table_B" : "hide_bxox"}>GPA 2.8以上，所有专业提供双录取，部分要求较高，商学院或需SAT</td>
								<td className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke as_table_C" : "hide_bxox"}></td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi as_table_A" : "hide_bxox"}></td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi smallSiza as_table_B" : "hide_bxox"}>商学院外，部分专业双录取</td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi last_td as_table_C" : "hide_bxox"}></td>
							</tr>

							<tr>
								<td className="xuhao">129</td>
								<td className="name"><a onClick = {Link.handleClick} href="/CollegeDetail-USA-%E5%A4%A7%E5%AD%A6-25844">纽约州立大学-阿尔巴尼分校<p>  University at Albany-SUNY</p></a></td>
								<td>纽约州</td>
								<td className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke as_table_A" : "hide_bxox"}>GPA3以上，托福79或雅思6分以上</td>
								<td  className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke smallSiza as_table_B" : "hide_bxox"}>无语言双录取，滚动</td>
								<td className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke as_table_C" : "hide_bxox"}></td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi as_table_A" : "hide_bxox"}>GPA3以上，托福79或雅思6分，需GRE/GMAT</td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi smallSiza as_table_B" : "hide_bxox"}></td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi last_td as_table_C" : "hide_bxox"}></td>
							</tr>

							<tr>
								<td className="xuhao">129</td>
								<td className="name"><a onClick = {Link.handleClick} href="/CollegeDetail-USA-%E5%A4%A7%E5%AD%A6-24930">阿肯色大学 <p>University of Arkansas</p></a></td>
								<td>阿肯色州</td>
								<td className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke as_table_A" : "hide_bxox"}>GPA3.0,托福79或雅思6.5</td>
								<td  className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke smallSiza as_table_B" : "hide_bxox"}>无语言成绩可以双录取</td>
								<td className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke as_table_C" : "hide_bxox"}></td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi as_table_A" : "hide_bxox"}>GPA 3.0,托福79或雅思6.5，要求GMAT/GRE成绩</td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi smallSiza as_table_B" : "hide_bxox"}>除商学院、建筑学院外接受双录取，但需提供GRE</td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi last_td as_table_C" : "hide_bxox"}></td>
							</tr>

							<tr>
								<td className="xuhao">135</td>
								<td className="name"><a onClick = {Link.handleClick} href="/CollegeDetail-USA-%E5%A4%A7%E5%AD%A6-25011">乔治梅森大学 <p>George Mason University</p></a></td>
								<td>弗吉尼亚州</td>
								<td className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke as_table_A" : "hide_bxox"}>GPA3，托福88或雅思6.5以上</td>
								<td  className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke smallSiza as_table_B" : "hide_bxox"}>本科桥梁：GPA2.5，托福60，雅思5.5，无语言可内测，无申请费，结果快</td>
								<td className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke as_table_C" : "hide_bxox"}></td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi as_table_A" : "hide_bxox"}>GPA3以上，托福88或雅思6.5以上</td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi smallSiza as_table_B" : "hide_bxox"}>硕士桥梁：GPA2.75，最低托福70，雅思6分，无语言可以内测，无申请费，结果快</td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi last_td as_table_C" : "hide_bxox"}></td>
							</tr>

							<tr>
								<td className="xuhao">135</td>
								<td className="name"><a onClick = {Link.handleClick} href="/CollegeDetail-USA-%E5%A4%A7%E5%AD%A6-24917">俄亥俄大学<p> Ohio University</p></a></td>
								<td>俄亥俄州</td>
								<td className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke as_table_A" : "hide_bxox"}>GPA3.0,最低托福71或雅思6分以上</td>
								<td  className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke smallSiza as_table_B" : "hide_bxox"}>无语言可以双录取，可加15周语言课程</td>
								<td className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke as_table_C" : "hide_bxox"}>荣誉奖学金需SAT/ACT</td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi as_table_A" : "hide_bxox"}></td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi smallSiza as_table_B" : "hide_bxox"}></td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi last_td as_table_C" : "hide_bxox"}></td>
							</tr>

							<tr id="schoolB">
								<td className="xuhao">135</td>
								<td className="name"><a onClick = {Link.handleClick} href="/CollegeDetail-USA-%E5%A4%A7%E5%AD%A6-24943">俄勒冈州立大学 <p>Oregon State University</p></a></td>
								<td>俄勒冈州</td>
								<td className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke as_table_A" : "hide_bxox"}>GPA 3.0以上，托福80或雅思6.5以上</td>
								<td  className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke smallSiza as_table_B" : "hide_bxox"}>衔接课程：最低GPA2.5以上，托福60，雅思5.5，无语言双录取</td>
								<td className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke as_table_C" : "hide_bxox"}></td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi as_table_A" : "hide_bxox"}>GPA3.0,托福80或雅思6.5，需要提供GRE/GMAT成绩</td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi smallSiza as_table_B" : "hide_bxox"}>GPA2.75,托福70或雅思6.0以上，部分专业可以双录取</td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi last_td as_table_C" : "hide_bxox"}></td>
							</tr>

							<tr>
								<td className="xuhao">135</td>
								<td className="name"><a onClick = {Link.handleClick} href="/CollegeDetail-USA-%E5%A4%A7%E5%AD%A6-24929">霍夫斯特拉大学 <p>Hofstra University</p></a></td>
								<td>纽约州</td>
								<td className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke as_table_A" : "hide_bxox"}></td>
								<td  className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke smallSiza as_table_B" : "hide_bxox"}></td>
								<td className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke as_table_C" : "hide_bxox"}></td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi as_table_A" : "hide_bxox"}></td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi smallSiza as_table_B" : "hide_bxox"}></td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi last_td as_table_C" : "hide_bxox"}></td>
							</tr>

							<tr>
								<td className="xuhao">140</td>
								<td className="name"><a onClick = {Link.handleClick} href="/CollegeDetail-USA-%E5%A4%A7%E5%AD%A6-24882">辛辛那提大学 <p>University of Cincinnati</p></a></td>
								<td>俄亥俄州</td>
								<td className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke as_table_A" : "hide_bxox"}>GPA3，托福66，雅思6分，或SAT480</td>
								<td  className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke smallSiza as_table_B" : "hide_bxox"}>无语言可以双录</td>
								<td className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke as_table_C" : "hide_bxox"}>7000美金/年</td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi as_table_A" : "hide_bxox"}>GPA3，最低托福88，GRE310</td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi smallSiza as_table_B" : "hide_bxox"}>部分专业可以双录取，或需GRE/GMAT</td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi last_td as_table_C" : "hide_bxox"}></td>
							</tr>

							<tr>
								<td className="xuhao">140</td>
								<td className="name"><a onClick = {Link.handleClick} href="/CollegeDetail-USA-%E5%A4%A7%E5%AD%A6-25179">德克萨斯大学达拉斯分校 <p>University of Texas-Dallas</p></a></td>
								<td>德克萨斯州</td>
								<td className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke as_table_A" : "hide_bxox"}>GPA3.0以上，托福80或雅思6.5，提供SAT/ACT成绩</td>
								<td  className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke smallSiza as_table_B" : "hide_bxox"}>无语言双录取，滚动</td>
								<td className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke as_table_C" : "hide_bxox"}></td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi as_table_A" : "hide_bxox"}>GPA3.0以上，托福79或雅思6.5以上，需提供GMAT/GRE成绩</td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi smallSiza as_table_B" : "hide_bxox"}>GPA3.0以上，部分专业无语言可以双录取，滚动</td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi last_td as_table_C" : "hide_bxox"}></td>
							</tr>

							<tr>
								<td className="xuhao">146</td>
								<td className="name"><a onClick = {Link.handleClick} href="/CollegeDetail-USA-%E5%A4%A7%E5%AD%A6-25217">堪萨斯州立大学 <p>Kansas State University</p></a></td>
								<td>堪萨斯州</td>
								<td className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke as_table_A" : "hide_bxox"}>最低GPA2.5以上，托福79或雅思6.5以上</td>
								<td  className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke smallSiza as_table_B" : "hide_bxox"}>无语言可以双录取</td>
								<td className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke as_table_C" : "hide_bxox"}></td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi as_table_A" : "hide_bxox"}></td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi smallSiza as_table_B" : "hide_bxox"}></td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi last_td as_table_C" : "hide_bxox"}></td>
							</tr>

							<tr id="schoolC">
								<td className="xuhao">149</td>
								<td className="name"><a onClick = {Link.handleClick} href="/CollegeDetail-USA-%E5%A4%A7%E5%AD%A6-24904">圣地亚哥州立大学 <p>San Diego State University</p></a></td>
								<td>加利福尼亚州</td>
								<td className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke as_table_A" : "hide_bxox"}>GPA3以上，托福80或雅思6.5以上</td>
								<td  className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke smallSiza as_table_B" : "hide_bxox"}>无语言可以双录取，滚动</td>
								<td className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke as_table_C" : "hide_bxox"}>750-1000美金学费减免</td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi as_table_A" : "hide_bxox"}>GPA3以上，托福80或雅思6.5以上，GRE/GMAT</td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi smallSiza as_table_B" : "hide_bxox"}>MBA预备课程：托福70，雅思5.5，无语言内测</td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi last_td as_table_C" : "hide_bxox"}></td>
							</tr>

							<tr>
								<td className="xuhao">153</td>
								<td className="name"><a onClick = {Link.handleClick} href="/CollegeDetail-USA-%E5%A4%A7%E5%AD%A6-24966">圣约翰大学 <p>St John's University</p></a></td>
								<td>纽约州</td>
								<td className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke as_table_A" : "hide_bxox"}>托福80，雅思6.5，托福61-79可参加测试搭配ESL</td>
								<td  className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke smallSiza as_table_B" : "hide_bxox"}>YES GPA3以上，无语言可以双录取</td>
								<td className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke as_table_C" : "hide_bxox"}></td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi as_table_A" : "hide_bxox"}>最低GPA3.0，托福100，雅思7，部分需要GRE/GMAT</td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi smallSiza as_table_B" : "hide_bxox"}>部分专业提供无双录取，建议托福60，雅思6分以上</td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi last_td as_table_C" : "hide_bxox"}></td>
							</tr>

							<tr>
								<td className="xuhao">153</td>
								<td className="name"><a onClick = {Link.handleClick} href="/CollegeDetail-USA-%E5%A4%A7%E5%AD%A6-24962">艾得菲大学 <p>Adelphi University</p></a></td>
								<td>纽约州</td>
								<td className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke as_table_A" : "hide_bxox"}>GPA2.8，托福80</td>
								<td  className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke smallSiza as_table_B" : "hide_bxox"}>无语言可以双录取</td>
								<td className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke as_table_C" : "hide_bxox"}></td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi as_table_A" : "hide_bxox"}>GPA3.0，托福80</td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi smallSiza as_table_B" : "hide_bxox"}>个别专业可以无语言双录取，MBA无GMAT双录，生物/环境无GRE双录</td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi last_td as_table_C" : "hide_bxox"}></td>
							</tr>

							<tr>
								<td className="xuhao">156</td>
								<td className="name"><a onClick = {Link.handleClick} href="/CollegeDetail-USA-%E5%A4%A7%E5%AD%A6-24936">南佛罗里达大学<p> University of Southern Florida</p></a></td>
								<td>佛罗里达州</td>
								<td className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke as_table_A" : "hide_bxox"}>GPA3,托福79或雅思6.5，SAT最低1360</td>
								<td  className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke smallSiza as_table_B" : "hide_bxox"}>桥梁课程：最低GPA2.5，托福60，雅思5.5</td>
								<td className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke as_table_C" : "hide_bxox"}></td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi as_table_A" : "hide_bxox"}>GPA3,托福79或雅思6.5，GRE300+，GMAT500+</td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi smallSiza as_table_B" : "hide_bxox"}>桥梁课程：最低GPA2.5，托福65，雅思5.5，无语言内测</td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi last_td as_table_C" : "hide_bxox"}></td>
							</tr>

							<tr>
								<td className="xuhao">156</td>
								<td className="name"><a onClick = {Link.handleClick} href="/CollegeDetail-USA-%E5%A4%A7%E5%AD%A6-25717">麻省大学罗威尔校区<p> University of Massachusetts-Lowell</p></a></td>
								<td>马萨诸塞州</td>
								<td className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke as_table_A" : "hide_bxox"}>GPA3,托福79</td>
								<td  className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke smallSiza as_table_B" : "hide_bxox"}>桥梁课程：最低GPA2.5，托福55，雅思4.5</td>
								<td className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke as_table_C" : "hide_bxox"}></td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi as_table_A" : "hide_bxox"}></td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi smallSiza as_table_B" : "hide_bxox"}>桥梁课程：最低GPA3，最低托福55，雅思4.5，加语言课程</td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi last_td as_table_C" : "hide_bxox"}></td>
							</tr>

							<tr>
								<td className="xuhao">160</td>
								<td className="name"><a onClick = {Link.handleClick} href="/CollegeDetail-USA-%E5%A4%A7%E5%AD%A6-24892">拉文大学<p>University of La Verne</p></a></td>
								<td>加利福尼亚州</td>
								<td className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke as_table_A" : "hide_bxox"}>GPA2.8以上，托福80或雅思6.5</td>
								<td  className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke smallSiza as_table_B" : "hide_bxox"}>无语言可以双录取</td>
								<td className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke as_table_C" : "hide_bxox"}>5000美金/年，达预言要求</td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi as_table_A" : "hide_bxox"}></td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi smallSiza as_table_B" : "hide_bxox"}></td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi last_td as_table_C" : "hide_bxox"}></td>
							</tr>

							<tr>
								<td className="xuhao">161</td>
								<td className="name"><a onClick = {Link.handleClick} href="/CollegeDetail-USA-%E5%A4%A7%E5%AD%A6-24973">佛罗里达理工大学<p> Florida Institute of Technology</p></a></td>
								<td>佛罗里达州</td>
								<td className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke as_table_A" : "hide_bxox"}>GPA2.5以上，托福79或雅思6.5</td>
								<td  className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke smallSiza as_table_B" : "hide_bxox"}>无语言可以双录，托福61-78可选语言课程</td>
								<td className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke as_table_C" : "hide_bxox"}></td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi as_table_A" : "hide_bxox"}>GPA3.0,托福79或雅思6.5，需要提供GRE/GMAT成绩</td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi smallSiza as_table_B" : "hide_bxox"}>部分专业无语言可以双录，或需GRE</td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi last_td as_table_C" : "hide_bxox"}></td>
							</tr>

							<tr>
								<td className="xuhao">168</td>
								<td className="name"><a onClick = {Link.handleClick} href="/CollegeDetail-USA-%E5%A4%A7%E5%AD%A6-25094">中佛罗里达大学<p> University of Central Florida</p></a></td>
								<td>佛罗里达州</td>
								<td className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke as_table_A" : "hide_bxox"}>GPA3,托福80或雅思6.5</td>
								<td  className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke smallSiza as_table_B" : "hide_bxox"}>国际学术课程：托福60，雅思5.5，GPA2.75，无语言可内测后双录取，免申请费</td>
								<td className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke as_table_C" : "hide_bxox"}></td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi as_table_A" : "hide_bxox"}></td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi smallSiza as_table_B" : "hide_bxox"}></td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi last_td as_table_C" : "hide_bxox"}></td>
							</tr>

							<tr>
								<td className="xuhao">168</td>
								<td className="name"><a onClick = {Link.handleClick} href="/CollegeDetail-USA-%E5%A4%A7%E5%AD%A6-25040">爱达荷大学<p> University of Idaho</p></a></td>
								<td>爱达荷州</td>
								<td className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke as_table_A" : "hide_bxox"}>GPA2.5,托福70或雅思6以上</td>
								<td  className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke smallSiza as_table_B" : "hide_bxox"}>无语言不达标可双录取，GPA 2.5以上</td>
								<td className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke as_table_C" : "hide_bxox"}></td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi as_table_A" : "hide_bxox"}>GPA3.0,托福79或雅思6.5以上</td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi smallSiza as_table_B" : "hide_bxox"}>部分专业可以双录取</td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi last_td as_table_C" : "hide_bxox"}></td>
							</tr>

							<tr>
								<td className="xuhao">168</td>
								<td className="name"><a onClick = {Link.handleClick} href="/CollegeDetail-USA-%E5%A4%A7%E5%AD%A6-24884">德州理工大学 <p>Texas Tech University</p></a></td>
								<td>德克萨斯州</td>
								<td className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke as_table_A" : "hide_bxox"}>GPA2.5,托福79或雅思6.5以上</td>
								<td  className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke smallSiza as_table_B" : "hide_bxox"}>部分专业无语言可以双录取</td>
								<td className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke as_table_C" : "hide_bxox"}></td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi as_table_A" : "hide_bxox"}></td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi smallSiza as_table_B" : "hide_bxox"}>部分专业无语言可以双录取</td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi last_td as_table_C" : "hide_bxox"}></td>
							</tr>

							<tr>
								<td className="xuhao">175</td>
								<td className="name"><a onClick = {Link.handleClick} href="/CollegeDetail-USA-%E5%A4%A7%E5%AD%A6-25239">西弗吉尼亚大学<p> West Virginia University</p></a></td>
								<td>西弗吉尼亚州</td>
								<td className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke as_table_A" : "hide_bxox"}>GPA2.5以上，托福61或雅思6分</td>
								<td  className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke smallSiza as_table_B" : "hide_bxox"}>无语言可双录取</td>
								<td className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke as_table_C" : "hide_bxox"}>GPA和SAT达到要求奖学金不等</td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi as_table_A" : "hide_bxox"}>GPA2.75以上，托福79或雅思6.5</td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi smallSiza as_table_B" : "hide_bxox"}>部分专业提供双录取</td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi last_td as_table_C" : "hide_bxox"}></td>
							</tr>

							<tr>
								<td className="xuhao">175</td>
								<td className="name"><a onClick = {Link.handleClick} href="/CollegeDetail-USA-%E5%A4%A7%E5%AD%A6-29465">肯特州立大学 <p>Kent State University</p></a></td>
								<td>俄亥俄州</td>
								<td className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke as_table_A" : "hide_bxox"}>GPA2.5 托福71或雅思6分，滚动</td>
								<td  className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke smallSiza as_table_B" : "hide_bxox"}>本科双录取最低GPA2.5</td>
								<td className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke as_table_C" : "hide_bxox"}></td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi as_table_A" : "hide_bxox"}>有</td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi smallSiza as_table_B" : "hide_bxox"}>传播学和计算机科学提供无语言双录取</td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi last_td as_table_C" : "hide_bxox"}></td>
							</tr>

							<tr>
								<td className="xuhao">180</td>
								<td className="name"><a onClick = {Link.handleClick} href="/CollegeDetail-USA-%E5%A4%A7%E5%AD%A6-25107">圣玛丽明尼苏达大学 <p>Saint Mary's University of Minnesota</p></a></td>
								<td>明尼苏达州</td>
								<td className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke as_table_A" : "hide_bxox"}>GPA2以上，托福72或雅思6.5以上可获奖学金1W美金</td>
								<td  className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke smallSiza as_table_B" : "hide_bxox"}>部分双录</td>
								<td className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke as_table_C" : "hide_bxox"}>8000-10000美金/年</td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi as_table_A" : "hide_bxox"}></td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi smallSiza as_table_B" : "hide_bxox"}></td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi last_td as_table_C" : "hide_bxox"}></td>
							</tr>

							<tr id="schoolD">
								<td className="xuhao">180</td>
								<td className="name"><a onClick = {Link.handleClick} href="/CollegeDetail-USA-%E5%A4%A7%E5%AD%A6-24958">佩斯大学 <p>Pace University</p></a></td>
								<td>纽约州</td>
								<td className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke as_table_A" : "hide_bxox"}>有</td>
								<td  className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke smallSiza as_table_B" : "hide_bxox"}>桥梁课程，GPA2.5，托福61，雅思5.5</td>
								<td className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke as_table_C" : "hide_bxox"}></td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi as_table_A" : "hide_bxox"}>有</td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi smallSiza as_table_B" : "hide_bxox"}>硕士桥梁课程：最低GPA3，托福55，雅思5.5</td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi last_td as_table_C" : "hide_bxox"}></td>
							</tr>

							<tr>
								<td className="xuhao">185</td>
								<td className="name"><a onClick = {Link.handleClick} href="/CollegeDetail-USA-%E5%A4%A7%E5%AD%A6-25469">博林格林州立大学 <p>Bowling Green State University</p></a></td>
								<td>俄亥俄州</td>
								<td className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke as_table_A" : "hide_bxox"}>GPA2.5,托福71或雅思6.0</td>
								<td  className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke smallSiza as_table_B" : "hide_bxox"}>部分专业提供双录取</td>
								<td className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke as_table_C" : "hide_bxox"}></td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi as_table_A" : "hide_bxox"}>GPA3.0,托福80或雅思7分以上，滚动</td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi smallSiza as_table_B" : "hide_bxox"}>部分专业提供无语言双录取，滚动</td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi last_td as_table_C" : "hide_bxox"}></td>
							</tr>

							<tr>
								<td className="xuhao">187</td>
								<td className="name"><a onClick = {Link.handleClick} href="/CollegeDetail-USA-%E5%A4%A7%E5%AD%A6-25692">威德勒大学<p> Widener University</p></a></td>
								<td>宾夕法尼亚州</td>
								<td className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke as_table_A" : "hide_bxox"}>有</td>
								<td  className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke smallSiza as_table_B" : "hide_bxox"}>国际大一：最低GPA2.75,托福45或雅思4.5</td>
								<td className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke as_table_C" : "hide_bxox"}></td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi as_table_A" : "hide_bxox"}>有</td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi smallSiza as_table_B" : "hide_bxox"}>预备课程：最低GPA2.7,托福60或雅思5.5</td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi last_td as_table_C" : "hide_bxox"}></td>
							</tr>

							<tr>
								<td className="xuhao">187</td>
								<td className="name"><a onClick = {Link.handleClick} href="/CollegeDetail-USA-%E5%A4%A7%E5%AD%A6-28784">内华达大学雷诺分校 <p> University of Nevada-Reno</p></a></td>
								<td>内华达州</td>
								<td className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke as_table_A" : "hide_bxox"}>GPA3以上，托福61或雅思6分，或SAT510以上代替</td>
								<td  className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke smallSiza as_table_B" : "hide_bxox"}>无语言可以双录取</td>
								<td className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke as_table_C" : "hide_bxox"}></td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi as_table_A" : "hide_bxox"}>GPA2.75，托福61或雅思6分，GRE/GMAT要求不同</td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi smallSiza as_table_B" : "hide_bxox"}></td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi last_td as_table_C" : "hide_bxox"}></td>
							</tr>
							<tr>
								<td className="xuhao">194</td>
								<td className="name"><a onClick = {Link.handleClick} href="/CollegeDetail-USA-%E5%A4%A7%E5%AD%A6-25651">北卡罗来纳大学夏洛特分校 <p>University of North Carolina-Charlotte</p></a></td>
								<td>北卡罗莱纳州</td>
								<td className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke as_table_A" : "hide_bxox"}>GPA3，托福64或雅思6分</td>
								<td  className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke smallSiza as_table_B" : "hide_bxox"}>无语言可双录</td>
								<td className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke as_table_C" : "hide_bxox"}></td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi as_table_A" : "hide_bxox"}></td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi smallSiza as_table_B" : "hide_bxox"}></td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi last_td as_table_C" : "hide_bxox"}></td>
							</tr>
			                              </tbody>
			                              <tbody className={this.state.paiMing == "200名之后" && this.state.project != ""  || this.state.paiMing == "全部" ? "" : "hide_bxox"}>
			                              	<tr>
								<td className="xuhao">200+</td>
								<td className="name"><a onClick = {Link.handleClick} href="/CollegeDetail-USA-%E5%A4%A7%E5%AD%A6-25277">中华盛顿大学<p> Central Washington University</p></a></td>
								<td>华盛顿州</td>
								<td className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke as_table_A" : "hide_bxox"}>GPA3，托福71或雅思6分</td>
								<td  className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke smallSiza as_table_B" : "hide_bxox"}>所有专业无语言双录</td>
								<td className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke as_table_C" : "hide_bxox"}>根据GPA高低不等</td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi as_table_A" : "hide_bxox"}>GPA3，托福79或雅思6.5分，或需GRE</td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi smallSiza as_table_B" : "hide_bxox"}>部分专业提供双录</td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi last_td as_table_C" : "hide_bxox"}></td>
							</tr>

							<tr>
								<td className="xuhao">200+</td>
								<td className="name"><a onClick = {Link.handleClick} href="/CollegeDetail-USA-%E5%A4%A7%E5%AD%A6-25196">夏威夷太平洋大学 <p>Hawaii Pacific University</p></a></td>
								<td>夏威夷州</td>
								<td className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke as_table_A" : "hide_bxox"}>GPA2.5以上，托福80或雅思6分</td>
								<td  className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke smallSiza as_table_B" : "hide_bxox"}>滚动双录取</td>
								<td className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke as_table_C" : "hide_bxox"}>2000-10000美金</td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi as_table_A" : "hide_bxox"}>GPA2.7以上，托福80或雅思6分以上</td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi smallSiza as_table_B" : "hide_bxox"}>滚动双录取</td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi last_td as_table_C" : "hide_bxox"}>2000-6000美金</td>
							</tr>

							<tr>
								<td className="xuhao">200+</td>
								<td className="name"><a onClick = {Link.handleClick} href="/CollegeDetail-USA-%E5%A4%A7%E5%AD%A6-25048">西雅图城市大学 <p>City University</p></a></td>
								<td>华盛顿州</td>
								<td className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke as_table_A" : "hide_bxox"}>不接受新生录取：GPA2以上，托福76或雅思6分以上</td>
								<td  className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke smallSiza as_table_B" : "hide_bxox"}>有</td>
								<td className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke as_table_C" : "hide_bxox"}></td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi as_table_A" : "hide_bxox"}>不接受新生录取：GPA2以上，托福87或雅思6.5分</td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi smallSiza as_table_B" : "hide_bxox"}>有</td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi last_td as_table_C" : "hide_bxox"}></td>
							</tr>

							<tr>
								<td className="xuhao">200+</td>
								<td className="name"><a onClick = {Link.handleClick} href="/CollegeDetail-USA-%E5%A4%A7%E5%AD%A6-24891">西肯塔基大学<p> Western Kentucky University</p></a></td>
								<td>肯塔基州</td>
								<td className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke as_table_A" : "hide_bxox"}></td>
								<td  className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke smallSiza as_table_B" : "hide_bxox"}>本科桥梁：托福53，雅思4.5，未达到可内测</td>
								<td className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke as_table_C" : "hide_bxox"}></td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi as_table_A" : "hide_bxox"}></td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi smallSiza as_table_B" : "hide_bxox"}>会计没有双录，硕士桥梁最低GPA2.75，雅思5.5</td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi last_td as_table_C" : "hide_bxox"}></td>
							</tr>

							<tr>
								<td className="xuhao">200+</td>
								<td className="name"><a onClick = {Link.handleClick} href="/CollegeDetail-USA-%E5%A4%A7%E5%AD%A6-25827">长岛大学<p> Long Island University C.W. Post</p></a></td>
								<td>纽约州</td>
								<td className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke as_table_A" : "hide_bxox"}>GPA2.5以上，托福75或雅思6分</td>
								<td  className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke smallSiza as_table_B" : "hide_bxox"}>无语言可以双录取</td>
								<td className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke as_table_C" : "hide_bxox"}></td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi as_table_A" : "hide_bxox"}>GPA3以上，托福79或雅思6.5</td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi smallSiza as_table_B" : "hide_bxox"}>硕士部分专业双录取最低托福56分或雅思5.5分，GPA3</td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi last_td as_table_C" : "hide_bxox"}></td>
							</tr>

							<tr>
								<td className="xuhao">200+</td>
								<td className="name"><a onClick = {Link.handleClick} href="/CollegeDetail-USA-%E5%A4%A7%E5%AD%A6-25574">田纳西科技大学 <p>Tennessee Tech University</p></a></td>
								<td>田纳西州</td>
								<td className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke as_table_A" : "hide_bxox"}>GPA2.5以上，托福61或雅思5</td>
								<td  className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke smallSiza as_table_B" : "hide_bxox"}>有，滚动</td>
								<td className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke as_table_C" : "hide_bxox"}></td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi as_table_A" : "hide_bxox"}>GPA3以上，最低托福71或雅思5.5</td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi smallSiza as_table_B" : "hide_bxox"}>教育和MBA可无语言双录</td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi last_td as_table_C" : "hide_bxox"}></td>
							</tr>

							<tr>
								<td className="xuhao">200+</td>
								<td className="name"><a onClick = {Link.handleClick} href="/CollegeDetail-USA-%E5%A4%A7%E5%AD%A6-25902">坦帕大学 <p>University of Tampa</p></a></td>
								<td>佛罗里达州</td>
								<td className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke as_table_A" : "hide_bxox"}>托福79，雅思6.5；GPA 2.7</td>
								<td  className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke smallSiza as_table_B" : "hide_bxox"}>有</td>
								<td className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke as_table_C" : "hide_bxox"}></td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi as_table_A" : "hide_bxox"}>托福90，雅思6.5 ；GMAT 500 + 或GRE 1000+；GPA 3.0</td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi smallSiza as_table_B" : "hide_bxox"}>部分专业无语言可以双录</td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi last_td as_table_C" : "hide_bxox"}></td>
							</tr>

							<tr>
								<td className="xuhao">200+</td>
								<td className="name"><a onClick = {Link.handleClick} href="/CollegeDetail-USA-%E5%A4%A7%E5%AD%A6-24910">圣约瑟夫大学<p> Saint Joseph's University</p></a></td>
								<td>宾夕法尼亚州</td>
								<td className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke as_table_A" : "hide_bxox"}>GPA3.2，TOEFL79，雅思6.5</td>
								<td  className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke smallSiza as_table_B" : "hide_bxox"}>无语言可以双录取</td>
								<td className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke as_table_C" : "hide_bxox"}></td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi as_table_A" : "hide_bxox"}>GPA3.0以上，TOEFL80，雅思6.5</td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi smallSiza as_table_B" : "hide_bxox"}>心理学和生物学之外提供双录取</td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi last_td as_table_C" : "hide_bxox"}></td>
							</tr>

							<tr>
								<td className="xuhao">200+</td>
								<td className="name"><a onClick = {Link.handleClick} href="/CollegeDetail-USA-%E5%A4%A7%E5%AD%A6-25072">圣何塞州立大学 <p>San Jose State University</p></a></td>
								<td>加利福尼亚州</td>
								<td className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke as_table_A" : "hide_bxox"}>GPA3以上，托福61或雅思6分</td>
								<td  className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke smallSiza as_table_B" : "hide_bxox"}>无语言可以提供双录取</td>
								<td className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke as_table_C" : "hide_bxox"}></td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi as_table_A" : "hide_bxox"}>GPA2.5以上，托福80或雅思7分</td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi smallSiza as_table_B" : "hide_bxox"}>无语言双录取</td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi last_td as_table_C" : "hide_bxox"}></td>
							</tr>

							<tr>
								<td className="xuhao">200+</td>
								<td className="name"><a onClick = {Link.handleClick} href="/CollegeDetail-USA-%E5%A4%A7%E5%AD%A6-25059">瑞德福大学 <p>Radford University</p></a></td>
								<td>弗吉尼亚州</td>
								<td className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke as_table_A" : "hide_bxox"}>GPA2.5以上，托福68或雅思5.5以上</td>
								<td  className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke smallSiza as_table_B" : "hide_bxox"}>除护理外都提供无语言双录取</td>
								<td className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke as_table_C" : "hide_bxox"}></td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi as_table_A" : "hide_bxox"}>GPA2.75以上，托福79或雅思6.5以上</td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi smallSiza as_table_B" : "hide_bxox"}>部分硕士专业可以提供双录取</td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi last_td as_table_C" : "hide_bxox"}></td>
							</tr>

							<tr>
								<td className="xuhao">200+</td>
								<td className="name"><a onClick = {Link.handleClick} href="/CollegeDetail-USA-%E5%A4%A7%E5%AD%A6-25126">桥港大学 <p>University of Bridgeport</p></a></td>
								<td>康涅狄格州</td>
								<td className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke as_table_A" : "hide_bxox"}>GPA2.7,托福75或雅思6.0以上</td>
								<td  className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke smallSiza as_table_B" : "hide_bxox"}>所有专业无语言双录取，滚动</td>
								<td className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke as_table_C" : "hide_bxox"}>5000-12000美金/年</td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi as_table_A" : "hide_bxox"}>GPA2.8以上，托福80或雅思6.5以上</td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi smallSiza as_table_B" : "hide_bxox"}>除健康教育，咨询外无语言双录取，滚动</td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi last_td as_table_C" : "hide_bxox"}></td>
							</tr>

							<tr>
								<td className="xuhao">200+</td>
								<td className="name"><a onClick = {Link.handleClick} href="/CollegeDetail-USA-%E5%A4%A7%E5%AD%A6-25081">强生威尔士大学 <p>Johnson & Wales University </p></a></td>
								<td>罗得岛州</td>
								<td className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke as_table_A" : "hide_bxox"}>托福80，雅思6.5，最低GPA2</td>
								<td  className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke smallSiza as_table_B" : "hide_bxox"}>无语言双录取</td>
								<td className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke as_table_C" : "hide_bxox"}>2000美金/年</td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi as_table_A" : "hide_bxox"}>有</td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi smallSiza as_table_B" : "hide_bxox"}>无语言可以双录取</td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi last_td as_table_C" : "hide_bxox"}></td>
							</tr>

							<tr>
								<td className="xuhao">200+</td>
								<td className="name"><a onClick = {Link.handleClick} href="/CollegeDetail-USA-%E5%A4%A7%E5%AD%A6-25928">纽约电影学院 <p>New York Film Academy</p></a></td>
								<td>纽约州</td>
								<td className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke as_table_A" : "hide_bxox"}>GPA2.5以上，托福68或雅思5.5</td>
								<td  className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke smallSiza as_table_B" : "hide_bxox"}>无语言可以双录取，滚动</td>
								<td className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke as_table_C" : "hide_bxox"}></td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi as_table_A" : "hide_bxox"}>GPA2.8以上，托福79或雅思6.5以上</td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi smallSiza as_table_B" : "hide_bxox"}>无语言可以双录，滚动</td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi last_td as_table_C" : "hide_bxox"}></td>
							</tr>

							<tr>
								<td className="xuhao">200+</td>
								<td className="name"><a onClick = {Link.handleClick} href="/CollegeDetail-USA-%E5%A4%A7%E5%AD%A6-25391">纽黑文大学 <p>University of New Haven</p></a></td>
								<td>康涅狄格州</td>
								<td className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke as_table_A" : "hide_bxox"}>GPA2.7以上，托福80或雅思6.5</td>
								<td  className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke smallSiza as_table_B" : "hide_bxox"}>无语言可以双录取</td>
								<td className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke as_table_C" : "hide_bxox"}>9000美金/年</td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi as_table_A" : "hide_bxox"}>GPA2.7以上，最低托福75或雅思6分以上</td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi smallSiza as_table_B" : "hide_bxox"}>大部分硕士专业无语言无GRE/GMAT双录取</td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi last_td as_table_C" : "hide_bxox"}></td>
							</tr>

							<tr>
								<td className="xuhao">200+</td>
								<td className="name"><a onClick = {Link.handleClick} href="/CollegeDetail-USA-%E5%A4%A7%E5%AD%A6-26062">莫瑞州立大学 <p>Murray State University</p></a></td>
								<td>肯塔基州</td>
								<td className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke as_table_A" : "hide_bxox"}>GP2.5以上，托福71或雅思6</td>
								<td  className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke smallSiza as_table_B" : "hide_bxox"}>无语言或托福低于60，雅思低于5分可有条件录取</td>
								<td className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke as_table_C" : "hide_bxox"}>5000美金/年</td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi as_table_A" : "hide_bxox"}>GPA2.8以上，托福71或雅思6</td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi smallSiza as_table_B" : "hide_bxox"}>部分专业无语言可有条件录取</td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi last_td as_table_C" : "hide_bxox"}>6000美金/年</td>
							</tr>

							<tr>
								<td className="xuhao">200+</td>
								<td className="name"><a onClick = {Link.handleClick} href="/CollegeDetail-USA-%E5%A4%A7%E5%AD%A6-25232">蒙大拿州立大学波兹曼分校 <p>Montana State University Bozeman</p></a></td>
								<td>蒙大拿州</td>
								<td className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke as_table_A" : "hide_bxox"}>GPA2.5,托福71或雅思6分以上</td>
								<td  className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke smallSiza as_table_B" : "hide_bxox"}>提供托福或雅思成绩可以申请双录取</td>
								<td className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke as_table_C" : "hide_bxox"}>3500美金/年</td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi as_table_A" : "hide_bxox"}>GPA3以上，托福80或雅思7以上</td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi smallSiza as_table_B" : "hide_bxox"}>硕士部分专业可以双录取，必须提供语言成绩</td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi last_td as_table_C" : "hide_bxox"}></td>
							</tr>

							<tr>
								<td className="xuhao">200+</td>
								<td className="name"><a onClick = {Link.handleClick} href="/CollegeDetail-USA-%E5%A4%A7%E5%AD%A6-29474">杜肯大学 <p>Duquense University</p></a></td>
								<td>宾夕法尼亚州</td>
								<td className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke as_table_A" : "hide_bxox"}>GPA3.0,托福90或雅思6.5以上</td>
								<td  className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke smallSiza as_table_B" : "hide_bxox"}>除职业疗法、物理治疗、医师助理3个专业外都可无语言双录</td>
								<td className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke as_table_C" : "hide_bxox"}></td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi as_table_A" : "hide_bxox"}>GPA 3.0，托福90或雅思7分以上，要求GRE/GMAT成绩</td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi smallSiza as_table_B" : "hide_bxox"}>MBA evening、信息系统管理、生物科技、媒体艺术与技术、教育学、健康管理系统6个硕士提供双录取，最低GPA2.75，托福50，雅思5.5</td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi last_td as_table_C" : "hide_bxox"}></td>
							</tr>

							<tr>
								<td className="xuhao">200+</td>
								<td className="name"><a onClick = {Link.handleClick} href="/CollegeDetail-USA-%E5%A4%A7%E5%AD%A6-25284">北亚利桑那大学 <p>Northern Arizona University</p></a></td>
								<td>亚利桑那州</td>
								<td className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke as_table_A" : "hide_bxox"}>GPA2.5以上，托福70或雅思6分以上</td>
								<td  className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke smallSiza as_table_B" : "hide_bxox"}>有</td>
								<td className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke as_table_C" : "hide_bxox"}>根据GPA，1500-3000美金不等</td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi as_table_A" : "hide_bxox"}></td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi smallSiza as_table_B" : "hide_bxox"}></td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi last_td as_table_C" : "hide_bxox"}></td>
							</tr>

							<tr>
								<td className="xuhao">200+</td>
								<td className="name"><a onClick = {Link.handleClick} href="/CollegeDetail-USA-%E5%A4%A7%E5%AD%A6-25236">阿肯色州立大学 <p>Arkansas State University</p></a></td>
								<td>阿肯色州</td>
								<td className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke as_table_A" : "hide_bxox"}>GPA3,托福79或雅思6.5</td>
								<td  className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke smallSiza as_table_B" : "hide_bxox"}>未达语言要求可以双录取</td>
								<td className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke as_table_C" : "hide_bxox"}></td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi as_table_A" : "hide_bxox"}>GPA 3.0以上，托福79或雅思6.0以上，需提供GMAT/GRE成绩</td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi smallSiza as_table_B" : "hide_bxox"}>双录专业：会计、MBA、传媒学、历史学，英语，政治学、MPA、社会学。GPA 2.75以上，须在开学之前提供GRE290或GMAT480以上</td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi last_td as_table_C" : "hide_bxox"}></td>
							</tr>

							<tr>
								<td className="xuhao">200+</td>
								<td className="name"><a onClick = {Link.handleClick} href="/CollegeDetail-USA-%E5%A4%A7%E5%AD%A6-25442">北德克萨斯大学<p> University of North Texas</p></a></td>
								<td>德克萨斯州</td>
								<td className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke as_table_A" : "hide_bxox"}>GPA 3.0,托福79或雅思6.5</td>
								<td  className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke smallSiza as_table_B" : "hide_bxox"}>所有专业无语言双录取</td>
								<td className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke as_table_C" : "hide_bxox"}></td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi as_table_A" : "hide_bxox"}>GPA3.0, 托福79或雅思6.5以上，需提供GMAT/GRE成绩</td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi smallSiza as_table_B" : "hide_bxox"}>部分专业无语言双录取</td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi last_td as_table_C" : "hide_bxox"}></td>
							</tr>

							<tr>
								<td className="xuhao">200+</td>
								<td className="name"><a onClick = {Link.handleClick} href="/CollegeDetail-USA-%E5%A4%A7%E5%AD%A6-25839">菲尔狄更斯大学<p> Fairleigh Dickinson University</p></a></td>
								<td>新泽西州</td>
								<td className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke as_table_A" : "hide_bxox"}>GPA3.0,托福79或雅思6分以上</td>
								<td  className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke smallSiza as_table_B" : "hide_bxox"}>所有专业无语言双录取</td>
								<td className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke as_table_C" : "hide_bxox"}></td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi as_table_A" : "hide_bxox"}>GPA3.0, 托福79或雅思6分以上，GMAT500或GRE288以上</td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi smallSiza as_table_B" : "hide_bxox"}>部分专业无语言双录取</td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi last_td as_table_C" : "hide_bxox"}></td>
							</tr>

							<tr>
								<td className="xuhao">200+</td>
								<td className="name"><a onClick = {Link.handleClick} href="/CollegeDetail-USA-%E5%A4%A7%E5%AD%A6-29476">德州农工大学，科伯斯克里提分校 <p>Texas A&M University-Corpus Christi</p></a></td>
								<td>德克萨斯州</td>
								<td className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke as_table_A" : "hide_bxox"}>托福79，雅思6.5；GPA 2</td>
								<td  className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke smallSiza as_table_B" : "hide_bxox"}>部分专业无语言双录取</td>
								<td className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke as_table_C" : "hide_bxox"}></td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi as_table_A" : "hide_bxox"}>托福79，雅思6.5；GPA 2.5，MBA提供GMAT</td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi smallSiza as_table_B" : "hide_bxox"}>部分专业无语言双录取</td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi last_td as_table_C" : "hide_bxox"}></td>
							</tr>

							<tr>
								<td className="xuhao">200+</td>
								<td className="name"><a onClick = {Link.handleClick} href="/CollegeDetail-USA-%E5%A4%A7%E5%AD%A6-25001">北伊利诺伊大学<p> Northern Illinois University</p></a></td>
								<td>伊利诺伊州</td>
								<td className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke as_table_A" : "hide_bxox"}>GPA3,雅思6，托福71</td>
								<td  className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke smallSiza as_table_B" : "hide_bxox"}>无语言可以双录取</td>
								<td className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke as_table_C" : "hide_bxox"}></td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi as_table_A" : "hide_bxox"}>GPA3,托福80或雅思6.5，GRE/GMAT要求不同</td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi smallSiza as_table_B" : "hide_bxox"}>部分专业无托福无GRE可以双录取</td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi last_td as_table_C" : "hide_bxox"}></td>
							</tr>

							<tr>
								<td className="xuhao">200+</td>
								<td className="name"><a onClick = {Link.handleClick} href="/CollegeDetail-USA-%E5%A4%A7%E5%AD%A6-25009">达拉斯浸会大学 <p>Dallas Baptist University</p></a></td>
								<td>德克萨斯州</td>
								<td className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke as_table_A" : "hide_bxox"}>GPA2.5,托福71或雅思5.5</td>
								<td  className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke smallSiza as_table_B" : "hide_bxox"}>语言未达需读ESL课程</td>
								<td className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke as_table_C" : "hide_bxox"}></td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi as_table_A" : "hide_bxox"}>GPA3.0,托福79或雅思6.0以上，或需GRE/GMAT成绩</td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi smallSiza as_table_B" : "hide_bxox"}>语言未达需读ESL课程</td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi last_td as_table_C" : "hide_bxox"}></td>
							</tr>

							<tr>
								<td className="xuhao">200+</td>
								<td className="name"><a onClick = {Link.handleClick} href="/CollegeDetail-USA-%E5%A4%A7%E5%AD%A6-25201">费城大学 <p>Philadelphia University</p></a></td>
								<td>宾夕法尼亚州</td>
								<td className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke as_table_A" : "hide_bxox"}>GPA3.0, 托福65或雅思6分以上，或需GMAT/GRE</td>
								<td  className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke smallSiza as_table_B" : "hide_bxox"}></td>
								<td className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke as_table_C" : "hide_bxox"}></td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi as_table_A" : "hide_bxox"}>GPA3.0,托福79或雅思6.5分以上</td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi smallSiza as_table_B" : "hide_bxox"}>部分专业无GRE/GMAT可直录或双录</td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi last_td as_table_C" : "hide_bxox"}></td>
							</tr>

							<tr>
								<td className="xuhao">200+</td>
								<td className="name"><a onClick = {Link.handleClick} href="/CollegeDetail-USA-%E5%A4%A7%E5%AD%A6-24951">俄克拉荷马城市大学<p> Oklahoma City University</p></a></td>
								<td>俄克拉荷马州</td>
								<td className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke as_table_A" : "hide_bxox"}>GPA3.0,托福80或雅思6分以上</td>
								<td  className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke smallSiza as_table_B" : "hide_bxox"}></td>
								<td className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke as_table_C" : "hide_bxox"}></td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi as_table_A" : "hide_bxox"}>GPA 3.0以上，托福80或雅思6.0以上</td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi smallSiza as_table_B" : "hide_bxox"}>除法律外所有专业可以无语言双录取</td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi last_td as_table_C" : "hide_bxox"}></td>
							</tr>

							<tr>
								<td className="xuhao">200+</td>
								<td className="name"><a onClick = {Link.handleClick} href="/CollegeDetail-USA-%E5%A4%A7%E5%AD%A6-25291">芬德雷大学 <p>Findlay University</p></a></td>
								<td>俄亥俄州</td>
								<td className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke as_table_A" : "hide_bxox"}>GPA 2.5以上 托福61或雅思6分以上</td>
								<td  className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke smallSiza as_table_B" : "hide_bxox"}>双录免申请费</td>
								<td className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke as_table_C" : "hide_bxox"}>学校提供每年8000美金本科奖学金，只要录取就有</td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi as_table_A" : "hide_bxox"}>GPA2.8以上，托福79或雅思7分以上，需提供GMAT/GRE成绩</td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi smallSiza as_table_B" : "hide_bxox"}>双录免申请费</td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi last_td as_table_C" : "hide_bxox"}></td>
							</tr>

							<tr>
								<td className="xuhao">200+</td>
								<td className="name"><a onClick = {Link.handleClick} href="/CollegeDetail-USA-%E5%A4%A7%E5%AD%A6-25439">佛罗里达国际大学<p> Florida International University</p></a></td>
								<td>佛罗里达州</td>
								<td className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke as_table_A" : "hide_bxox"}>GPA3.0,托福80或雅思6.5</td>
								<td  className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke smallSiza as_table_B" : "hide_bxox"}>国际大一课程：托福60，雅思5，无语言可内测，可加语言课程</td>
								<td className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke as_table_C" : "hide_bxox"}></td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi as_table_A" : "hide_bxox"}></td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi smallSiza as_table_B" : "hide_bxox"}></td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi last_td as_table_C" : "hide_bxox"}></td>
							</tr>

							<tr>
								<td className="xuhao">200+</td>
								<td className="name"><a onClick = {Link.handleClick} href="/CollegeDetail-USA-%E5%A4%A7%E5%AD%A6-25880">佛罗里达大西洋大学<p> Florida Atlantic University</p></a></td>
								<td>佛罗里达州</td>
								<td className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke as_table_A" : "hide_bxox"}>有</td>
								<td  className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke smallSiza as_table_B" : "hide_bxox"}>桥梁课程：最低GPA2以上，托福59或雅思5分</td>
								<td className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke as_table_C" : "hide_bxox"}></td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi as_table_A" : "hide_bxox"}></td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi smallSiza as_table_B" : "hide_bxox"}>研究生预科：雅思5.5，托福69，可内测</td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi last_td as_table_C" : "hide_bxox"}></td>
							</tr>

							<tr>
								<td className="xuhao">200+</td>
								<td className="name"><a onClick = {Link.handleClick} href="/CollegeDetail-USA-%E5%A4%A7%E5%AD%A6-27627">伯克利学院 <p>Berkeley College</p></a></td>
								<td>纽约州</td>
								<td className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke as_table_A" : "hide_bxox"}>GPA 2.5,托福61或雅思5.5</td>
								<td  className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke smallSiza as_table_B" : "hide_bxox"}>无语言可以双录（7/9月不招生）</td>
								<td className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke as_table_C" : "hide_bxox"}></td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi as_table_A" : "hide_bxox"}></td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi smallSiza as_table_B" : "hide_bxox"}></td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi last_td as_table_C" : "hide_bxox"}></td>
							</tr>

							<tr>
								<td className="xuhao">200+</td>
								<td className="name"><a onClick = {Link.handleClick} href="/CollegeDetail-USA-%E5%A4%A7%E5%AD%A6-25174">加利福尼亚路德大学 <p>California Lutheran University</p></a></td>
								<td>加利福尼亚州</td>
								<td className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke as_table_A" : "hide_bxox"}>GPA3.0以上，托福79或雅思6.5，SAT/ACT成绩</td>
								<td  className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke smallSiza as_table_B" : "hide_bxox"}></td>
								<td className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke as_table_C" : "hide_bxox"}></td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi as_table_A" : "hide_bxox"}></td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi smallSiza as_table_B" : "hide_bxox"}>MBA方向专业提供无语言无GMAT双录取，最低GPA2.8，托福88，雅思6.5</td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi last_td as_table_C" : "hide_bxox"}></td>
							</tr>

							<tr>
								<td className="xuhao">200+</td>
								<td className="name"><a onClick = {Link.handleClick} href="/CollegeDetail-USA-%E5%A4%A7%E5%AD%A6-25668">加州多明尼克大学 <p>Dominican University of California</p></a></td>
								<td>加利福尼亚州</td>
								<td className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke as_table_A" : "hide_bxox"}>GPA2.5, 托福80或雅思6.5</td>
								<td  className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke smallSiza as_table_B" : "hide_bxox"}>所有专业无语言双录，滚动</td>
								<td className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke as_table_C" : "hide_bxox"}>8000美金/年</td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi as_table_A" : "hide_bxox"}>GPA3.0, 托福80或雅思6.5</td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi smallSiza as_table_B" : "hide_bxox"}>部分专业提供双录取，滚动</td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi last_td as_table_C" : "hide_bxox"}></td>
							</tr>

							<tr>
								<td className="xuhao">200+</td>
								<td className="name"><a onClick = {Link.handleClick} href="/CollegeDetail-USA-%E5%A4%A7%E5%AD%A6-25837">加州州立大学北岭分校<p> California State University Northridge</p></a></td>
								<td>加利福尼亚州</td>
								<td className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke as_table_A" : "hide_bxox"}>GPA3.0,最低托福61或雅思5.5</td>
								<td  className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke smallSiza as_table_B" : "hide_bxox"}>无语言可以双录</td>
								<td className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke as_table_C" : "hide_bxox"}></td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi as_table_A" : "hide_bxox"}>GPA3.0,最低托福79或雅思6分</td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi smallSiza as_table_B" : "hide_bxox"}>部分专业可以提供双录取</td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi last_td as_table_C" : "hide_bxox"}></td>
							</tr>

							<tr>
								<td className="xuhao">200+</td>
								<td className="name"><a onClick = {Link.handleClick} href="/CollegeDetail-USA-%E5%A4%A7%E5%AD%A6-25809">加州州立大学东湾分校<p> California State University East Bay</p></a></td>
								<td>加利福尼亚州</td>
								<td className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke as_table_A" : "hide_bxox"}>GPA3.0,托福61或雅思6分</td>
								<td  className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke smallSiza as_table_B" : "hide_bxox"}>无语言可以双录取</td>
								<td className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke as_table_C" : "hide_bxox"}></td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi as_table_A" : "hide_bxox"}>GPA2.5,托福79或雅思6.5以上</td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi smallSiza as_table_B" : "hide_bxox"}>无语言可以双录取
							MBA预科：最低托福71，雅思6，本科最后两年GPA2.5以上</td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi last_td as_table_C" : "hide_bxox"}></td>
							</tr>

							<tr>
								<td className="xuhao">200+</td>
								<td className="name"><a onClick = {Link.handleClick} href="/CollegeDetail-USA-%E5%A4%A7%E5%AD%A6-25790">加州州立大学奇科分校<p> California State University Chico</p></a></td>
								<td>加利福尼亚州</td>
								<td className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke as_table_A" : "hide_bxox"}>GPA3.0,托福61或雅思6分以上</td>
								<td  className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke smallSiza as_table_B" : "hide_bxox"}>无语言双录取，滚动</td>
								<td className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke as_table_C" : "hide_bxox"}></td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi as_table_A" : "hide_bxox"}>GPA3.0，托福80或雅思6.5以上</td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi smallSiza as_table_B" : "hide_bxox"}>无语言双录取，滚动</td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi last_td as_table_C" : "hide_bxox"}></td>
							</tr>

							<tr>
								<td className="xuhao">200+</td>
								<td className="name"><a onClick = {Link.handleClick} href="/CollegeDetail-USA-%E5%A4%A7%E5%AD%A6-25813">加州州立大学圣马克斯分校<p> California State University San Marcos</p></a></td>
								<td>加利福尼亚州</td>
								<td className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke as_table_A" : "hide_bxox"}>GPA3.0以上，托福61或雅思5.5</td>
								<td  className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke smallSiza as_table_B" : "hide_bxox"}></td>
								<td className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke as_table_C" : "hide_bxox"}></td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi as_table_A" : "hide_bxox"}></td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi smallSiza as_table_B" : "hide_bxox"}></td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi last_td as_table_C" : "hide_bxox"}></td>
							</tr>

							<tr>
								<td className="xuhao">200+</td>
								<td className="name"><a onClick = {Link.handleClick} href="/CollegeDetail-USA-%E5%A4%A7%E5%AD%A6-25757">加州州立长滩大学 <p>California State University--Long Beach</p></a></td>
								<td>加利福尼亚州</td>
								<td className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke as_table_A" : "hide_bxox"}>GPA2.0,托福61或雅思5.5</td>
								<td  className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke smallSiza as_table_B" : "hide_bxox"}>可加13-16周语言课程</td>
								<td className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke as_table_C" : "hide_bxox"}></td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi as_table_A" : "hide_bxox"}></td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi smallSiza as_table_B" : "hide_bxox"}></td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi last_td as_table_C" : "hide_bxox"}></td>
							</tr>

							<tr>
								<td className="xuhao">200+</td>
								<td className="name"><a onClick = {Link.handleClick} href="/CollegeDetail-USA-%E5%A4%A7%E5%AD%A6-25728">金门大学 <p>Golden Gate University</p></a></td>
								<td>加利福尼亚州</td>
								<td className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke as_table_A" : "hide_bxox"}></td>
								<td  className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke smallSiza as_table_B" : "hide_bxox"}></td>
								<td className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke as_table_C" : "hide_bxox"}></td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi as_table_A" : "hide_bxox"}>GPA3以上，托福79或雅思6.5</td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi smallSiza as_table_B" : "hide_bxox"}>PLUS课程：GPA2.8以上，托福61或雅思5.5以上可以双录取
							MBA双录取需有GMAT</td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi last_td as_table_C" : "hide_bxox"}></td>
							</tr>

							<tr>
								<td className="xuhao">200+</td>
								<td className="name"><a onClick = {Link.handleClick} href="/CollegeDetail-USA-%E5%A4%A7%E5%AD%A6-29478">旧金山艺术大学<p> Academy of Art University</p></a></td>
								<td>加利福尼亚州</td>
								<td className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke as_table_A" : "hide_bxox"}>艺术学士：托福81，雅思6.5</td>
								<td  className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke smallSiza as_table_B" : "hide_bxox"}>无语言可以双录取，滚动</td>
								<td className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke as_table_C" : "hide_bxox"}></td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi as_table_A" : "hide_bxox"}>艺术硕士：托福81，雅思6.5</td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi smallSiza as_table_B" : "hide_bxox"}>无语言可以双录取，滚动</td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi last_td as_table_C" : "hide_bxox"}></td>
							</tr>

							<tr>
								<td className="xuhao">200+</td>
								<td className="name"><a onClick = {Link.handleClick} href="/CollegeDetail-USA-%E5%A4%A7%E5%AD%A6-25159">旧金山州立大学 <p>San Francisco State University</p></a></td>
								<td>加利福尼亚州</td>
								<td className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke as_table_A" : "hide_bxox"}>GPA2.5,或61或雅思6分</td>
								<td  className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke smallSiza as_table_B" : "hide_bxox"}>无语言双录取</td>
								<td className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke as_table_C" : "hide_bxox"}></td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi as_table_A" : "hide_bxox"}></td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi smallSiza as_table_B" : "hide_bxox"}></td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi last_td as_table_C" : "hide_bxox"}></td>
							</tr>

							<tr>
								<td className="xuhao">200+</td>
								<td className="name"><a onClick = {Link.handleClick} href="/CollegeDetail-USA-%E5%A4%A7%E5%AD%A6-25259">科罗拉多丹佛大学 <p>University of Colorado Denver</p></a></td>
								<td>科罗拉多州</td>
								<td className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke as_table_A" : "hide_bxox"}>托福75，雅思6.5</td>
								<td  className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke smallSiza as_table_B" : "hide_bxox"}></td>
								<td className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke as_table_C" : "hide_bxox"}></td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi as_table_A" : "hide_bxox"}></td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi smallSiza as_table_B" : "hide_bxox"}></td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi last_td as_table_C" : "hide_bxox"}></td>
							</tr>

							<tr>
								<td className="xuhao">200+</td>
								<td className="name"><a onClick = {Link.handleClick} href="/CollegeDetail-USA-%E5%A4%A7%E5%AD%A6-25462">克利夫兰艺术学院<p> Cleveland Institute of Art</p></a></td>
								<td>俄亥俄州</td>
								<td className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke as_table_A" : "hide_bxox"}>GPA3以上，托福79或雅思6以上</td>
								<td  className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke smallSiza as_table_B" : "hide_bxox"}>双录要求参加面试</td>
								<td className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke as_table_C" : "hide_bxox"}>直录有奖学金</td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi as_table_A" : "hide_bxox"}></td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi smallSiza as_table_B" : "hide_bxox"}></td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi last_td as_table_C" : "hide_bxox"}></td>
							</tr>

							<tr>
								<td className="xuhao">200+</td>
								<td className="name"><a onClick = {Link.handleClick} href="/CollegeDetail-USA-%E5%A4%A7%E5%AD%A6-25753">克利夫兰州立大学<p> Cleveland State University</p></a></td>
								<td>俄亥俄州</td>
								<td className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke as_table_A" : "hide_bxox"}>GPA3,托福65或雅思6.0，入校参加英语能力测试</td>
								<td  className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke smallSiza as_table_B" : "hide_bxox"}>无语言可以双录取</td>
								<td className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke as_table_C" : "hide_bxox"}></td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi as_table_A" : "hide_bxox"}></td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi smallSiza as_table_B" : "hide_bxox"}></td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi last_td as_table_C" : "hide_bxox"}></td>
							</tr>

							<tr>
								<td className="xuhao">200+</td>
								<td className="name"><a onClick = {Link.handleClick} href="/CollegeDetail-USA-%E5%A4%A7%E5%AD%A6-26064">拉萨尔大学<p> La Salle University</p></a></td>
								<td>宾夕法尼亚州</td>
								<td className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke as_table_A" : "hide_bxox"}>GPA2.75,托福64或雅思5.5</td>
								<td  className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke smallSiza as_table_B" : "hide_bxox"}>所有专业无语言双录取</td>
								<td className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke as_table_C" : "hide_bxox"}></td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi as_table_A" : "hide_bxox"}>GPA2.75以上，托福90或雅思7分以上</td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi smallSiza as_table_B" : "hide_bxox"}>所有专业无语言双录取，除MBA外都无须GRE</td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi last_td as_table_C" : "hide_bxox"}></td>
							</tr>

							<tr>
								<td className="xuhao">200+</td>
								<td className="name"><a onClick = {Link.handleClick} href="/CollegeDetail-USA-%E5%A4%A7%E5%AD%A6-25878">莱特州立大学<p> Wright State University</p></a></td>
								<td>俄亥俄州</td>
								<td className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke as_table_A" : "hide_bxox"}>GPA2.5以上，托福61或雅思5.5</td>
								<td  className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke smallSiza as_table_B" : "hide_bxox"}></td>
								<td className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke as_table_C" : "hide_bxox"}></td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi as_table_A" : "hide_bxox"}>GPA3以上，托福79或雅思6分</td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi smallSiza as_table_B" : "hide_bxox"}></td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi last_td as_table_C" : "hide_bxox"}></td>
							</tr>

							<tr>
								<td className="xuhao">200+</td>
								<td className="name"><a onClick = {Link.handleClick} href="/CollegeDetail-USA-%E5%A4%A7%E5%AD%A6-25165">麻省大学波士顿校区<p> University of Massachusetts Boston</p></a></td>
								<td>马萨诸塞州</td>
								<td className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke as_table_A" : "hide_bxox"}>GPA3.0，托福79，雅思6分，SAT/ACT</td>
								<td  className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke smallSiza as_table_B" : "hide_bxox"}>本科桥梁课程：GPA2以上</td>
								<td className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke as_table_C" : "hide_bxox"}></td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi as_table_A" : "hide_bxox"}>GPA3.0，托福79，雅思6.5分，GRE/GMAT</td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi smallSiza as_table_B" : "hide_bxox"}>部分专业提供桥梁课程：最低GPA2.75，雅思5.5，托福59，不接受内测</td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi last_td as_table_C" : "hide_bxox"}></td>
							</tr>

							<tr>
								<td className="xuhao">200+</td>
								<td className="name"><a onClick = {Link.handleClick} href="/CollegeDetail-USA-%E5%A4%A7%E5%AD%A6-27722">麻省大学达特茅斯校区 <p>University of Massachusetts DartMouth</p></a></td>
								<td>马萨诸塞州</td>
								<td className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke as_table_A" : "hide_bxox"}>GPA3.0，托福68，SAT/ACT</td>
								<td  className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke smallSiza as_table_B" : "hide_bxox"}>本科桥梁课程：GPA2以上</td>
								<td className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke as_table_C" : "hide_bxox"}></td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi as_table_A" : "hide_bxox"}>GPA3.0，托福80，雅思6.5分，GRE/GMAT</td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi smallSiza as_table_B" : "hide_bxox"}>部分专业提供桥梁课程：最低GPA2.6，雅思5.5，托福70</td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi last_td as_table_C" : "hide_bxox"}></td>
							</tr>

							<tr>
								<td className="xuhao">200+</td>
								<td className="name"><a onClick = {Link.handleClick} href="/CollegeDetail-USA-%E5%A4%A7%E5%AD%A6-25588">马歇尔大学 <p>Marshall University</p></a></td>
								<td>弗吉尼亚州</td>
								<td className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke as_table_A" : "hide_bxox"}>GPA2.5，托福78，雅思6分</td>
								<td  className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke smallSiza as_table_B" : "hide_bxox"}>衔接课程：最低GPA2.0，托福60，雅思5.5</td>
								<td className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke as_table_C" : "hide_bxox"}></td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi as_table_A" : "hide_bxox"}>GPA2.5，托福80，雅思6.5分</td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi smallSiza as_table_B" : "hide_bxox"}>衔接课程：最低GPA2.25，托福70，雅思6.0</td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi last_td as_table_C" : "hide_bxox"}></td>
							</tr>

							<tr>
								<td className="xuhao">200+</td>
								<td className="name"><a onClick = {Link.handleClick} href="/CollegeDetail-USA-%E5%A4%A7%E5%AD%A6-25135">麦克尼斯州立大学<p> Mcneese State University</p></a></td>
								<td>路易斯安那州</td>
								<td className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke as_table_A" : "hide_bxox"}>GPA2.35以上，托福61或雅思5分以上</td>
								<td  className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke smallSiza as_table_B" : "hide_bxox"}>部分专业滚动双录取</td>
								<td className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke as_table_C" : "hide_bxox"}>本土学费 5853美金/年</td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi as_table_A" : "hide_bxox"}>GPA2.5以上，托福71或雅思6以上</td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi smallSiza as_table_B" : "hide_bxox"}>部分专业滚动双录取</td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi last_td as_table_C" : "hide_bxox"}></td>
							</tr>

							<tr>
								<td className="xuhao">200+</td>
								<td className="name"><a onClick = {Link.handleClick} href="/CollegeDetail-USA-%E5%A4%A7%E5%AD%A6-26281">梅里马克学院 <p>Merrimack College</p></a></td>
								<td>马萨诸塞州</td>
								<td className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke as_table_A" : "hide_bxox"}>GPA2.75以上，托福80或雅思6.5分以上</td>
								<td  className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke smallSiza as_table_B" : "hide_bxox"}>托福70或雅思5分，无语言可内测
							可加读语言课程：最低要求托福57，雅思5分</td>
								<td className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke as_table_C" : "hide_bxox"}></td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi as_table_A" : "hide_bxox"}>GPA2.5以上，托福84或雅思6.5以上</td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi smallSiza as_table_B" : "hide_bxox"}>双录取托福75，雅思5.5，无语言可内测</td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi last_td as_table_C" : "hide_bxox"}></td>
							</tr>

							<tr>
								<td className="xuhao">200+</td>
								<td className="name"><a onClick = {Link.handleClick} href="/CollegeDetail-USA-%E5%A4%A7%E5%AD%A6-29071">门罗大学 <p>Monroe College</p></a></td>
								<td>纽约州</td>
								<td className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke as_table_A" : "hide_bxox"}>GPA2.5，托福61或雅思5.5以上</td>
								<td  className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke smallSiza as_table_B" : "hide_bxox"}>无语言可以双录，滚动</td>
								<td className={this.state.project == "本科录取"  || this.state.project  == "全部"? "benke as_table_C" : "hide_bxox"}></td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi as_table_A" : "hide_bxox"}>GPA3，托福80或雅思6以上</td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi smallSiza as_table_B" : "hide_bxox"}>部分专业可以双录取</td>
								<td className={this.state.project == "硕士录取"  || this.state.project  == "全部"? "shuoshi last_td as_table_C" : "hide_bxox"}></td>
							</tr>

			                              </tbody>
		                              </table>
                </EnterAnimation>
		                    </div>
		          </div>
                    );
          }
          componentDidMount(){

		$(".cutelement").attr("colspan","3");

		var url = window.location.href;

       		let flag = url.substr(url.indexOf('/USAProjectPage') + ('/USAProjectPage').length);

       		var subStr = flag.replace("-","");

       		//console.log(subStr);

       		if(flag.length > 0){
       		    if(subStr == "benke"){

       		    	this.setState({
	    			project:"本科录取"
	    		});

	    		this.state.project = "本科录取";

       		    }else if(subStr == "shuoshi"){

       		    	this.setState({
	    			project:"硕士录取"
	    		});

	    		this.state.project = "硕士录取";
       		    }else{
			    var mao = $("#" + subStr); //获得锚点
			    mao.addClass("table-hover-sd-color");
			     if (mao.length > 0) {//判断对象是否存在
			         var pos = mao.offset().top;
			         var poshigh = mao.height();
			         $("html,body").animate({ scrollTop: pos-poshigh+47 }, 0);
			         windowScroll();
			     } else{
			     	$("html,body").animate({ scrollTop: 0 }, 1000);
			     }
		     }
	     	}
	 //     	function windowScroll(){
		//      	$(window).scroll(function(){
		// 		console.log("-------------");
		//      		$(".bigDv tr").removeClass("table-hover-sd-color");

		//      	});
		// }
          }
}

export default USAProjectPage;

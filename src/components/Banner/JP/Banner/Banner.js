/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import styles from './Banner.less';
import withStyles from '../../../../decorators/withStyles';
import Link from '../../../../utils/Link';
import Common from '../../../../utils/Common.js';
import AppActions from '../../../../actions/AppActions';
import $ from 'jquery';
var CSlider = require('react-slick');
var Select = require('rc-select');
var Option = Select.Option;

@withStyles(styles)
class Banner extends React.Component{
    constructor(props) {
        super(props);
        this.state = {selectOne:"计划出国时间",selectTwo:"目前就读年级"};
    }
    render() {
        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: false,
                autoplaySpeed: 6000,
        };
        return (
            <section className="banner">
                <div id="da-slider" className="slideshow da-slider">
                    <CSlider {...settings}>
                        <div className="da-slide jp-banner1">
                            <h2>
                                <img src="http://7xnmna.com2.z0.glb.qiniucdn.com/jp-content-1.png" /></h2>
                            <div className="small-thing-box">
                                <div className="fan-green thing"></div>
                                <div className="fan-yellow thing"></div>
                                <div className="grass thing"></div>
                                <div className="sandals thing"></div>
                                <div className="warrior thing"></div>
                            </div>
                        </div>
                        <div className="da-slide jp-banner2">
                            <h2>
                                <img src="http://7xnmna.com2.z0.glb.qiniucdn.com/jp-content-2.png" />
                            </h2>
                            <p>
                                <img src="http://7xnmna.com2.z0.glb.qiniucdn.com/jp-content-3.png" />
                            </p>
                        </div>
                        <div className="da-slide jp-banner3">
                            <h2>
                                <img src="http://7xnmna.com2.z0.glb.qiniucdn.com/jp-content-4.png" />
                            </h2>
                        </div>
                        <div className="da-slide jp-banner4">
                        </div>
                    </CSlider>
                    <div className="bgShadow"></div>
                </div>
                <div className="plan-box">
                    <div id="planForm" >
                        <h1>免费获取日本留学方案</h1>
                        <input type="hidden" id="planCountry" data-country="JP" />
                        <ul>
                            <li id="selectO">
                                <Select value={this.state.selectOne} style={{width:270,height:45}} optionFilterProp="desc"  renderDropdownToBody={true} onChange={this.handleChangeOne.bind(this)}>
                                    <Option value="计划出国时间" desc="计划出国时间">计划出国时间</Option>
                                    <Option value="2018" desc="2018">2018</Option>
                                    <Option value="2017" desc="2017">2017</Option>
                                    <Option value="2016" desc="2016">2016</Option>
                                </Select>
                            </li>
                            <li id="select1">
                                <Select value={this.state.selectTwo} style={{width:270,height:45}} optionFilterProp="desc"  renderDropdownToBody={true} onChange={this.handleChangeTwo.bind(this)}>
                                    <Option value="目前就读年级" desc="目前就读年级">目前就读年级</Option>
                                    <Option value="硕士在读或毕业已工作">硕士在读或毕业已工作</Option>
                                    <Option value="本科大四或毕业已工作">本科大四或毕业已工作</Option>
                                    <Option value="本科大三">本科大三</Option>
                                    <Option value="本科大二">本科大二</Option>
                                    <Option value="本科大一">本科大一</Option>
                                    <Option value="大专大三在读或已毕业">大专大三在读或已毕业</Option>
                                    <Option value="大专大二">大专大二</Option>
                                    <Option value="大专大一">大专大一</Option>
                                    <Option value="高三或已工作">高三或已工作</Option>
                                    <Option value="高二">高二</Option>
                                    <Option value="高一">高一</Option>
                                    <Option value="初三">初三</Option>
                                </Select>
                            </li>
                            <li>
                                <button className="btn-plan" onClick={this.handleGoRequest.bind(this)}>获取留学方案</button>
                            </li>
                        </ul>
                        <div className="bottom">
                            <p>人开启留学单向收费新时代</p>
                            <div className="message">
                                <a href="/Register" onClick={Link.handleClick}>我要加入</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
    handleChangeOne(e){
        let str=e;
         this.setState({
                selectOne:str
            });  
    }
    handleChangeTwo(e){
        let Two=e;
         this.setState({
                selectTwo:Two
            }); 
    }
    componentDidMount() {
        $(".bgShadow").hide();
    }
    handleGoRequest(){
        let time = this.state.selectOne;
        let grade = this.state.selectTwo;
        //AppActions.navigateTo("/StudySolution_JP_" + time + "_" + grade);
        if(time=="计划出国时间"){
            Common.alert("请选择计划出国时间。");
        }else if(grade=="目前就读年级"){
            Common.alert("请选择目前就读年级。");
        }else{
            AppActions.navigateTo("/StudySolution_日本_" + time + "_" + grade);
        }
      }
}

export default Banner;
/**
 * Created by XiaoKangZheng on 2015/7/28.
 */

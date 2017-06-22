/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React from 'react';
var Select = require('rc-select');
var Option = Select.Option;

import styles from "./Select.less";
import withViewport from '../../../decorators/withViewport';
import withStyles from '../../../decorators/withStyles';
import Slide from "./Slide/Slide.js";
import AppActions from '../../../actions/AppActions';
import Common from '../../../utils/Common.js';
import Link from '../../../utils/Link';
import $ from 'jquery'

@withStyles(styles)
class Banner_Index  extends React.Component{
    constructor(props) {
        super(props);
        this.state = {country:"USA",selectOne:"计划出国时间",selectTwo:"目前就读年级"};
    }
  render() { 
    return (
      <section className="banner"> 
        <Slide />
        <div className="plan-box">
          <div id="planForm">
            <h1>免费获取留学方案</h1>
            <ul className="country" id="planCountry">
              <li className={this.state.country=="UK"?"first active":"first"} >
                <img src="http://passport.shenyuan.org/WebResources/Default/images/plan/plan-uk.png" data-country="UK" onClick={this.changeCountry.bind(this)} /><div className="bg"></div>
                <div className="activeicon"></div>
              </li>
              <li className={this.state.country=="USA"?"second active":"second"} >
                <img src="http://passport.shenyuan.org/WebResources/Default/images/plan/plan-usa.png" data-country="USA" onClick={this.changeCountry.bind(this)} /><div className="bg"></div>
                <div className="activeicon"></div>
              </li>
              <li className={this.state.country=="AUS"?"third active":"third"}  >
                <img src="http://passport.shenyuan.org/WebResources/Default/images/plan/plan-aus.png" data-country="AUS" onClick={this.changeCountry.bind(this)} /><div className="bg"></div>
                <div className="activeicon"></div>
              </li>
              <li className={this.state.country=="JP"?"fourth active":"fourth"} >
                <img src="http://passport.shenyuan.org/WebResources/Default/images/plan/plan-jp.png" data-country="JP"  onClick={this.changeCountry.bind(this)} /><div className="bg"></div>
                <div className="activeicon"></div>
              </li>
            </ul>
            <div className="clear"></div>
            <ul className="other">
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
              <p>人人留学 - 开启留学单向收费新时代</p>
              <div className="message">
                <a href="/Register" onClick={Link.handleClick}>我要加入</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  changeCountry(e){
      let countryStr=$(e.target).attr("data-country");
      this.setState({
            country:countryStr
        });
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
  //dom加载完调用
  componentDidMount(){

  }

  handleGoRequest(){

    let time=this.state.selectOne;
    let grade=this.state.selectTwo;
    let country=this.state.country;

    if(country=="UK")
          country="英国";
    else if(country=="USA")
      country="美国";
    else if(country=="JP")
      country="日本";
    else if(country=="AUS")
      country="澳洲"
    
    if(time=="计划出国时间"){
        Common.alert("请选择计划出国时间。");
    }else if(grade=="目前就读年级"){
        Common.alert("请选择目前就读年级。");
    }else{
        AppActions.navigateTo("/StudySolution_" + country + "_" + time + "_" + grade);
    }
   
  }
}

export default Banner_Index;

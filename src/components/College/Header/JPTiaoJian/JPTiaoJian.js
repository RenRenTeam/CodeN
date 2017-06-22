/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import $ from 'jquery';
import High from './High/High.js';
import YanJiuSheng from './YanJiuSheng/YanJiuSheng.js';
import LanguageSchool from './LanguageSchool/LanguageSchool.js';
import CollegeUtilFunc from '../../CollegeUtilFunc/CollegeUtilFunc.js';


require('rc-radio/assets/index.css');
var Radio = require('rc-radio');

class JPTiaoJian extends React.Component{
    constructor(props) {
        super(props);
        this.state = {disabled: false,
                      checked: null,
                      r: '3'};
    }
    radHandleChange(e) {
        let changeValue=$(e.target).attr("data-value");
        this.setState({
          r: changeValue 
        })

        var school="";
        var orderValue="";
        if(changeValue == 0){
            school="大学";
            React.render(<High flag={"change"} major={""} />,document.getElementById('JP_high'));
          
        }else if(changeValue == 1){
            school="研究生院";
              React.render(<YanJiuSheng flag={"change"} major={""} />,document.getElementById('JP_yan'));
        }else if(changeValue == 2){
            school="语言学校";
            orderValue="order=";
            React.render(<LanguageSchool flag={"change"} major={""} order={""} />,document.getElementById('LanguageSchool'));
        }else if(changeValue == 3){
            //school="日本高中";
            school="高中";
            orderValue="order=";
        }
        let nameStr=$("#txtSearch").val();
        if(!nameStr){ nameStr="";}
        CollegeUtilFunc.UserSearchSchool("JP",school,1,15,nameStr,orderValue,"");
        
    }

    render() {
        return (
            <div id="JP" className="college-filter-content tab-content-box">
                <div className="college-level-box">
                    <div className="college-level">
                        <Radio value="0" name="radio_JP" data-value="0"
                              checked = {this.state.r === '0'}
                              onChange={this.radHandleChange.bind(this)}
                              disabled={this.state.disabled}/>
                        <label data-value="0" onClick={this.radHandleChange.bind(this)}>日本大学</label>
                    </div>
                    <div className="college-level">
                        <Radio value="1" name="radio_JP" data-value="1"
                              checked = {this.state.r === '1'}
                              onChange={this.radHandleChange.bind(this)}
                              disabled={this.state.disabled}/>
                        <label data-value="1" onClick={this.radHandleChange.bind(this)}>研究生院</label>
                    </div>
                    <div className="college-level">
                        <Radio value="2" name="radio_JP" data-value="2"
                              checked = {this.state.r === '2'}
                              onChange={this.radHandleChange.bind(this)}
                              disabled={this.state.disabled}/>
                        <label data-value="2" onClick={this.radHandleChange.bind(this)}>语言学校</label>
                    </div>
                    <div className="college-level">
                        <Radio value="3" name="radio_JP" data-value="3"
                              checked = {this.state.r === '3'}
                              onChange={this.radHandleChange.bind(this)}
                              disabled={this.state.disabled}/>
                        <label data-value="3" onClick={this.radHandleChange.bind(this)}>日本高中</label>
                    </div>
                </div>
                <div id="JPSChool">
                    <div className={this.state.r == 2 ? "" : "inputHide"} id="LanguageSchool"></div>
                    <div className={this.state.r == 3 ? "" : "inputHide"}></div>
                    <div className={this.state.r == 0 ? "" : "inputHide"} id="JP_high"></div>
                    <div className={this.state.r == 1 ? "" : "inputHide"} id="JP_yan"></div>
                </div>
            </div>
        );
    }
    //dom加载完调用
    componentDidMount(){ 

        let schoolType=this.props.typeSchool;
        if(schoolType&&schoolType=="大学"){ this.setState({ r:"0" }); }
        else if(schoolType&&schoolType=="语言学校"){   this.setState({  r:"2" }); }
        else if(schoolType&&schoolType=="研究生院"){   this.setState({  r:"1" }); }
        else if(schoolType&&schoolType=="高中"){   this.setState({  r:"3" }); }
        
        let fourCountry=this.props.fourCountry; 
        if(fourCountry){
            if(fourCountry&&fourCountry[3]=="语言学校"){ 
                  this.setState({  r:"2" });
                  let AreaStr=fourCountry[5];
                  let orderStr=this.props.order;
                  if(orderStr&&orderStr.length>0){
                    React.render(<LanguageSchool flag={""} major={""} order={orderStr} />,document.getElementById('LanguageSchool'));
                  }else{
                    React.render(<LanguageSchool flag={""} major={AreaStr} order={""} />,document.getElementById('LanguageSchool'));
                  }
                  
            }else if(fourCountry&&fourCountry[3]=="大学"){
                   this.setState({ r:"0"  });
                    let universityMajor=fourCountry[5];
                    React.render(<LanguageSchool flag={""} major={""} order={""} />,document.getElementById('LanguageSchool'));
                    React.render(<High flag={""}  major={universityMajor} />,document.getElementById('JP_high'));
                    React.render(<YanJiuSheng flag={""} major={""} />,document.getElementById('JP_yan')); 
            }else if(fourCountry&&fourCountry[3]=="研究生院"){
                    this.setState({ r:"1" });
                    let Major=fourCountry[5];
                    React.render(<LanguageSchool flag={""} major={""} order={""} />,document.getElementById('LanguageSchool'));
                    React.render(<High flag={""}  major={""} />,document.getElementById('JP_high'));
                    React.render(<YanJiuSheng flag={""} major={Major} />,document.getElementById('JP_yan')); 
            }
            
        }else{
          React.render(<High flag={""}  major={""} />,document.getElementById('JP_high'));
          React.render(<YanJiuSheng flag={""} major={""} />,document.getElementById('JP_yan'));
          React.render(<LanguageSchool flag={""} major={""} order={""} />,document.getElementById('LanguageSchool'));

        }

   
    }
}

export default JPTiaoJian;

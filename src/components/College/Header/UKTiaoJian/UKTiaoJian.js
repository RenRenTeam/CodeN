/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import High from './High/High.js';
import University from './University/University.js';
import $ from 'jquery';
import CollegeUtilFunc from '../../CollegeUtilFunc/CollegeUtilFunc.js';

require('rc-radio/assets/index.css');
var Radio = require('rc-radio');


class UKTiaoJian extends React.Component {
    constructor(props) {
        super(props);
        this.state = {disabled: false,
                      checked: null,
                      r: '2'};
    }
    radHandleChange(e) { 
        let changeValue=$(e.target).attr("data-value");
        this.setState({
          r: changeValue
        });

        var school="";
        if(changeValue== 2){  
            school="高中";
            React.render(<High flag={"change"} />,document.getElementById('Uk_high'));
        }else{
            school="大学";
            React.render(<University flag={"change"} />,document.getElementById('Uk_University'));
        }

        let nameStr=$("#txtSearch").val();
        if(!nameStr){ nameStr=""; }
      
        CollegeUtilFunc.UserSearchSchool("UK",school,1,15,nameStr,"","");
        
       
    }
    render() {
        return (
            <div id="UK" className="college-filter-content tab-content-box">
                <div className="college-level-box">
                    <div className="college-level">
                        <Radio value="3" name="radio_UK" data-value="3" 
                              checked = {this.state.r === '3'}
                              onChange={this.radHandleChange.bind(this)}
                              disabled={this.state.disabled}/>
                        <label data-value="3" onClick={this.radHandleChange.bind(this)}>大学</label>
                    </div>
                    <div className="college-level">
                        <Radio value="2" name="radio_UK" data-value="2"
                              checked = {this.state.r === '2'}
                              onChange={this.radHandleChange.bind(this)}
                              disabled={this.state.disabled}/>
                        <label data-value="2" onClick={this.radHandleChange.bind(this)}>高中</label>
                    </div>
                  
                </div>
                <div id="UKSChool">
                    <div className={this.state.r == 2 ? "" : "inputHide"}  id="Uk_high"></div>
                    <div className={this.state.r == 3 ? "" : "inputHide"} id="Uk_University" ></div>
                </div>
            </div>
        );
    }
    //dom加载完调用
    componentDidMount(){
        let schoolType=this.props.typeSchool;
        if(schoolType&&schoolType=="大学"){
              this.setState({
                    r:"3"
                });
        }else if(schoolType&&schoolType=="高中"){
           this.setState({
                    r:"2"
                }); 
        }
        let fourCountry=this.props.fourCountry;
        if(fourCountry){
            if(fourCountry&&fourCountry[3]=="大学"){
                  this.setState({
                        r:"3"
                    });
            }else if(fourCountry&&fourCountry[3]=="高中"){
               this.setState({
                        r:"2"
                    }); 
            }
            React.render(<High flag={""} search={fourCountry} />,document.getElementById('Uk_high'));
            React.render(<University flag={""} search={fourCountry} />,document.getElementById('Uk_University'));
        }else{
            React.render(<High flag={""} search={""} />,document.getElementById('Uk_high'));
            React.render(<University flag={""} search={""} />,document.getElementById('Uk_University'));
        }

        
    }
}

export default UKTiaoJian;

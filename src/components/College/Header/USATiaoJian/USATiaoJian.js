/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import High from './High/High.js';
import University from './University/University.js';
import CollegeUtilFunc from '../../CollegeUtilFunc/CollegeUtilFunc.js';
import $ from 'jquery';

require('rc-radio/assets/index.css');
var Radio = require('rc-radio');

class USATiaoJian extends React.Component{ 
    constructor(props) {
        super(props);
        this.state = {disabled: false,
                      checked: null,
                      r:"0",
                      flag:true
                  };
    }
    //高中大学切换事件
    radHandleChange(e) {
        let changeValue=$(e.target).attr("data-value");
        this.setState({
          r: changeValue,
        });
        let school="";
        if(changeValue == 0){
            school="高中";
            React.render(<High flag={"change"} search={""} />,document.getElementById('USAHigh'));
        }else{
            school="大学";
            React.render(<University flag={"change"} search={""} />,document.getElementById('USAUni'));
        }
        let nameStr=$("#txtSearch").val();
        if(!nameStr){ nameStr="";  }
        CollegeUtilFunc.UserSearchSchool("USA",school,1,15,nameStr,"","");  
      
        
    }
    render() { 
        return ( 
            <div id="USA" className="college-filter-content tab-content-box">
                <div className="college-level-box">
                    <div className="college-level">
                        <Radio value="1" name="radio_USA" data-value="1"
                              checked = {this.state.r === '1'}
                              onChange={this.radHandleChange.bind(this)}
                              disabled={this.state.disabled}/>
                        <label data-value="1" onClick={this.radHandleChange.bind(this)}>大学</label>
                    </div>
                    <div className="college-level">
                        <Radio value="0" name="radio_USA" data-value="0"
                              checked = {this.state.r === '0'}
                              onChange={this.radHandleChange.bind(this)}
                              disabled={this.state.disabled}/>
                        <label data-value="0" onClick={this.radHandleChange.bind(this)}>高中</label>
                    </div>
                   
                </div>
                <div id="USASChool">
                    <div className={this.state.r == 0 ? "" : "inputHide"  } id="USAHigh" > </div>
                    <div className={this.state.r == 1 ? "" : "inputHide"  } id="USAUni" ></div>
                </div>
                <section className="college-list">
                    
                </section>
            </div>
        );
    }
    //dom加载完调用
    componentDidMount(){ 
        //this.props.submitSearch();
        let schoolType=this.props.typeSchool;
        if(schoolType&&schoolType=="大学"){
              this.setState({
                    r:"1"
                });
        }else if(schoolType&&schoolType=="高中"){
           this.setState({
                    r:"0"
                }); 
        }

        let fourCountry=this.props.fourCountry;
        if(fourCountry){
            if(fourCountry&&fourCountry[3]=="大学"){
                  this.setState({
                        r:"1"
                    });
            }else if(fourCountry&&fourCountry[3]=="高中"){
               this.setState({
                        r:"0"
                    }); 
            }
            React.render(<High flag={""} search={fourCountry} />,document.getElementById('USAHigh'));
            React.render(<University flag={""} search={fourCountry} />,document.getElementById('USAUni'));
        }else{
            React.render(<High flag={""} search={""} />,document.getElementById('USAHigh'));
            React.render(<University flag={""} search={""} />,document.getElementById('USAUni')); 
        }
       

    }
}

export default USATiaoJian;

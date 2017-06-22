/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import styles from './Header.less';
import withStyles from '../../../decorators/withStyles';

import $ from 'jquery';
import UKTiaoJian from './UKTiaoJian/UKTiaoJian.js';
import USATiaoJian from './USATiaoJian/USATiaoJian.js';
import JPTiaoJian from './JPTiaoJian/JPTiaoJian.js';
import AUSTiaoJian from './AUSTiaoJian/AUSTiaoJian.js';
import CollegeUtilFunc from '../CollegeUtilFunc/CollegeUtilFunc.js';
import List from '../List/List.js';
import CollegePage from '../CollegeReactjs/CollegePage/CollegePage.js';
import TotalCollegeCount from '../CollegeReactjs/TotalCollegeCount/TotalCollegeCount.js';
/*
        var countryAndType=e.target.id;
        var countrySearch=countryAndType.split(";")[0];
        var typeSearch=countryAndType.split(";")[1];
        
        //this.props.submitSearch(1,co,"","","高中","");
        //UserSearchSchool(countryU,typeU,pageIndexU,pageSizeU,nameU,chooseArrU){
        CollegeUtilFunc.UserSearchSchool(countrySearch,typeSearch,1,15,"","");
*/

require('rc-radio/assets/index.css');
var Radio = require('rc-radio');

@withStyles(styles)
class Header extends React.Component{ 
    constructor(props) {
        super(props);
        this.state = {Country:"USA"};
    }


    //国家选项卡切换
   CountryClick(e){ 

        this.setState({
            Country:e.target.id
        });
 
         var countrySearch=e.target.id;  
         //根据不同国家加载搜索条件,
         let school="";
         let orderValue="";
         if(countrySearch=="UK"){
            React.render(<UKTiaoJian  typeSchool="大学" />,document.getElementById('hearderSearch'));
         }else if(countrySearch=="JP"){
            orderValue="order=";
            React.render(<JPTiaoJian typeSchool="大学"  />,document.getElementById('hearderSearch'));
         }else if(countrySearch=="AUS"){
            React.render(<AUSTiaoJian typeSchool="大学"   />,document.getElementById('hearderSearch'));
         }else{
            React.render(<USATiaoJian typeSchool="大学" search={this.props.search}  />,document.getElementById('hearderSearch'));
         }
          $("#txtSearch").val("");   
        CollegeUtilFunc.UserSearchSchool(countrySearch,"大学",1,15,"",orderValue,"");
   }
   inputClick(e){
        let indexSearch=this.props.noCountry;
        let val = $("#txtSearch").val();
        let SearchStr=this.props.search;
        if(indexSearch&&indexSearch=="true"){
            CollegeUtilFunc.indexSearchSchool(val,1);
        }else if(SearchStr&&SearchStr.length>5){
            CollegeUtilFunc.UserSearchSchool(SearchStr[0],SearchStr[1],1,15,val,SearchStr[5],"");
        }
       
   }
   
    render() {

        return ( 
            <div> 
                <section className="college-filter" >
                    <div id="filterForm" >
                        <div className="tabs-box">
                            <div className="tabs" id="CountryAll"> 
                                <div className={this.state.Country=="USA"?"item selected":"item"} data-content="#USA" id="USA" data-country="USA" onClick={this.CountryClick.bind(this)}>美国</div>
                                <div className={this.state.Country=="UK"?"item selected":"item"} data-content="#UK" id="UK" data-country="UK" onClick={this.CountryClick.bind(this)}>英国</div>
                                <div className={this.state.Country=="JP"?"item selected":"item"} data-content="#JP" id="JP" data-country="JP" onClick={this.CountryClick.bind(this)}>日本</div>
                                <div className={this.state.Country=="AUS"?"item selected":"item"} data-content="#AUS" id="AUS" data-country="AUS" onClick={this.CountryClick.bind(this)}>澳洲</div>
                                <div className="clear"></div>
                            </div>
                            <div className="filter-search">
                                <div className="input-container">
                                    <input type="text" id="txtSearch" placeholder="院校名称" />
                                </div>
                                <div className="button-container">
                                    <button id="collegeSearch" onClick={this.inputClick.bind(this)}>搜索</button>
                                </div>
                                <div className="clear"></div>
                            </div>
                            <div id="hearderSearch">

                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }

    componentDidMount(){  

        let url = window.location.href;
            url=decodeURI(url);
        let userInput = url.substr(url.indexOf('/College') + ('/College').length);
        let userArr=userInput.split("-");
        //College-index-AUS
        if(userArr&&userArr[1]&&userArr[1]=="index"){
            let schStr=userArr[3];
            if(!schStr){schStr="大学";};    
            if(userArr[2]=="JP"){
                this.setState({
                    Country:"JP"
                });
                let orderStr="";
                if(schStr=="高中"||schStr=="语言学校"){orderStr="order=";}
                React.render(<JPTiaoJian typeSchool={schStr} fourCountry=""  />,document.getElementById('hearderSearch'));
                CollegeUtilFunc.UserSearchSchool("JP",schStr,1,15,"",orderStr);
            }else if(userArr[2]=="UK"){
                this.setState({
                    Country:"UK"
                });
                React.render(<UKTiaoJian typeSchool={schStr} fourCountry=""  />,document.getElementById('hearderSearch'));
                CollegeUtilFunc.UserSearchSchool("UK",schStr,1,15,"","");
            }else if(userArr[2]=="AUS"){
                this.setState({
                    Country:"AUS"
                });
                React.render(<AUSTiaoJian typeSchool={schStr} fourCountry=""   />,document.getElementById('hearderSearch'));
                CollegeUtilFunc.UserSearchSchool("AUS",schStr,1,15,"","");
            }else if(userArr[2]=="USA"){
                this.setState({
                    Country:"USA" 
                });
                React.render(<USATiaoJian typeSchool={schStr} fourCountry=""  />,document.getElementById('hearderSearch'));
                CollegeUtilFunc.UserSearchSchool("USA",schStr,1,15,"","");
            }else{
                this.setState({
                    Country:"NoCountry"
                });
                $("#txtSearch").val(userArr[2]); 
                //React.render(<AUSTiaoJian typeSchool="noSchool" fourCountry=""  />,document.getElementById('hearderSearch'));         
                CollegeUtilFunc.indexSearchSchool(userArr[2],1); 

            }

        }else if(userArr&&userArr[1]&&userArr[1]=="fourCountry"){

                let positionStr=userArr[5];
                let countryStr=userArr[2];
                let schoolStr=userArr[3];
                let nameStr=userArr[4];
                let sortVlaue="";
                this.setState({
                    Country:countryStr
                });
                $("#txtSearch").val(nameStr); 
     
                if(countryStr=="USA"){
                    positionStr="Area="+positionStr;
                    React.render(<USATiaoJian typeSchool={""} search={""} fourCountry={userArr} />,document.getElementById('hearderSearch'));
                }else if(countryStr=="UK"){
                    if(schoolStr=="高中"){
                        positionStr="PlaceArea="+positionStr; 
                    }else{
                        positionStr="Area="+positionStr;
                    }
                    React.render(<UKTiaoJian typeSchool={""} fourCountry={userArr} />,document.getElementById('hearderSearch'));                                  
                }else if(countryStr=="AUS"){
                    positionStr="PlaceArea="+positionStr;
                    React.render(<AUSTiaoJian typeSchool={""} fourCountry={userArr} />,document.getElementById('hearderSearch'));
                }else if(countryStr=="JP"){
                    if(schoolStr=="语言学校"){
                    
                        if(positionStr.indexOf('order=')>=0){
                            sortVlaue=positionStr.substr(positionStr.indexOf('order=') + ('order=').length);
                            positionStr="order="+sortVlaue;
                            React.render(<JPTiaoJian typeSchool={""} fourCountry={userArr} order={sortVlaue} />,document.getElementById('hearderSearch'));
                        }else{ 
                            positionStr="PlaceArea="+positionStr+";order=";
                            React.render(<JPTiaoJian typeSchool={""} fourCountry={userArr} order={""} />,document.getElementById('hearderSearch'));

                        }
                       
                        
                    }else{
                        positionStr="SubjectProfessional="+positionStr;
                        React.render(<JPTiaoJian typeSchool={""} fourCountry={userArr} />,document.getElementById('hearderSearch'));
                    }
                   
                }
                CollegeUtilFunc.UserSearchSchool(countryStr,schoolStr,1,15,nameStr,positionStr); 
                

        }else{
            CollegeUtilFunc.UserSearchSchool("USA","大学",1,15,"","");
            React.render(<USATiaoJian typeSchool="大学" search={""} fourCountry="" />,document.getElementById('hearderSearch'));
        }

    }
}

export default Header;
 
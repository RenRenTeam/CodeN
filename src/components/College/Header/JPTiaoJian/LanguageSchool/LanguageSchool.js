//LanguageSchool.js
/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import styles from '../../../../WebResources/Default/css/select.less';
import withStyles from '../../../../../decorators/withStyles';
import CollegeUtilFunc from '../../../CollegeUtilFunc/CollegeUtilFunc.js';

var Select = require('rc-select');
var Option = Select.Option;

import $ from 'jquery';

@withStyles(styles)
class LanguageSchool extends React.Component{

    constructor(props) {
        super(props);
        this.state = {Position:'',schoolSort:"",MoreFilter:false,MoreArea:false};
    }
    JPToSearchU(name,value){
        let PositionArr=this.state.Position;
        let sortValue=this.state.schoolSort;
        if("PositionArr"==name){PositionArr=value;}
        else if("order"==name){sortValue=value;}


        let SearchArr=$("#txtSearch").val();
        if(!SearchArr){ SearchArr=""; }       
        let userSearch=(!!PositionArr)?("PlaceArea="+PositionArr+";order="+sortValue):("order="+sortValue);
        CollegeUtilFunc.UserSearchSchool("JP","语言学校",1,15,SearchArr,userSearch,"");
    }
    changeArea(e){
        let AreaVar=$(e.target).parent().attr("data-value");
        this.setState({
            Position:AreaVar
        }); 
        this.JPToSearchU("PositionArr",AreaVar);   
    }
    sortSchool(e){
        let sortStr=$(e.target).attr("data-value");
        this.setState({
           schoolSort:sortStr 
        });
        this.JPToSearchU("order",sortStr);   
    }   
    render() {
        return (
            <div className="college-filter-box university">
                <div className={this.state.MoreArea?"college-filter-options more show":"college-filter-options more"} data-group="JPArea">
                    <div className="title">所在地区：</div>
                    <ul className="college-filter-list" id="JPPosition_Y">
                        <li className={this.state.Position==""?"all active":"all"} data-value=""><a className="nofollow" onClick={this.changeArea.bind(this)}>全部</a></li> 
                        <li className={this.state.Position=="1"?"active":""} data-value="1"><a className="nofollow" onClick={this.changeArea.bind(this)}>北海道</a></li>
                        <li className={this.state.Position=="2"?"active":""}  data-value="2"><a className="nofollow" onClick={this.changeArea.bind(this)}>青森</a></li>
                        <li className={this.state.Position=="3"?"active":""}  data-value="3"><a className="nofollow" onClick={this.changeArea.bind(this)}>岩手</a></li>
                        <li className={this.state.Position=="4"?"active":""}  data-value="4"><a className="nofollow" onClick={this.changeArea.bind(this)}>宫城</a></li>
                        <li className={this.state.Position=="5"?"active":""}  data-value="5"><a className="nofollow" onClick={this.changeArea.bind(this)}>秋田</a></li>
                        <li className={this.state.Position=="6"?"active":""}  data-value="6"><a className="nofollow" onClick={this.changeArea.bind(this)}>山形</a></li>
                        <li className={this.state.Position=="7"?"active":""}  data-value="7"><a className="nofollow" onClick={this.changeArea.bind(this)}>福岛</a></li>
                        <li className={this.state.Position=="8"?"active":""}  data-value="8"><a className="nofollow" onClick={this.changeArea.bind(this)}>茨城</a></li>
                        <li className={this.state.Position=="9"?"active":""}  data-value="9"><a className="nofollow"  onClick={this.changeArea.bind(this)}>栃木</a></li>
                        <li className={this.state.Position=="10"?"active":""}  data-value="10"><a className="nofollow" onClick={this.changeArea.bind(this)}>群马</a></li>
                        <li className={this.state.Position=="11"?"active":""}  data-value="11"><a className="nofollow" onClick={this.changeArea.bind(this)}>崎玉</a></li>
                        <li className={this.state.Position=="13"?"active":""}  data-value="13"><a className="nofollow" onClick={this.changeArea.bind(this)}>东京</a></li>
                        <li className={this.state.Position=="12"?"active":""}  data-value="12"><a className="nofollow" onClick={this.changeArea.bind(this)}>千叶</a></li>
                        <li className={this.state.Position=="14"?"active":""}  data-value="14"><a className="nofollow" onClick={this.changeArea.bind(this)}>神奈川</a></li>
                        <li className={this.state.Position=="15"?"active":""}  data-value="15"><a className="nofollow" onClick={this.changeArea.bind(this)}>新泻</a></li>
                        <li className={this.state.Position=="16"?"active":""}  data-value="16"><a className="nofollow" onClick={this.changeArea.bind(this)}>富山</a></li>
                        <li className={this.state.Position=="17"?"active":""}  data-value="17"><a className="nofollow" onClick={this.changeArea.bind(this)}>石川</a></li>
                        <li className={this.state.Position=="18"?"active":""}  data-value="18"><a className="nofollow" onClick={this.changeArea.bind(this)}>福井</a></li>
                        <li className={this.state.Position=="19"?"active":""}  data-value="19"><a className="nofollow" onClick={this.changeArea.bind(this)}>山梨</a></li>
                        <li className={this.state.Position=="20"?"active":""}  data-value="20"><a className="nofollow" onClick={this.changeArea.bind(this)}>长野</a></li>
                        <li className={this.state.Position=="21"?"active":""}  data-value="21"><a className="nofollow" onClick={this.changeArea.bind(this)}>岐阜</a></li>
                        <li className={this.state.Position=="22"?"active":""}  data-value="22"><a className="nofollow" onClick={this.changeArea.bind(this)}>静冈</a></li>
                        <li className={this.state.Position=="23"?"active":""}  data-value="23"><a className="nofollow" onClick={this.changeArea.bind(this)}>爱知</a></li>
                        <li className={this.state.Position=="24"?"active":""}  data-value="24"><a className="nofollow" onClick={this.changeArea.bind(this)}>三重</a></li>
                        <li className={this.state.Position=="25"?"active":""}  data-value="25"><a className="nofollow" onClick={this.changeArea.bind(this)}>滋贺</a></li>
                        <li className={this.state.Position=="26"?"active":""}  data-value="26"><a className="nofollow" onClick={this.changeArea.bind(this)}>京都府</a></li>
                        <li className={this.state.Position=="27"?"active":""}  data-value="27"><a className="nofollow" onClick={this.changeArea.bind(this)}>大阪府</a></li>
                        <li className={this.state.Position=="28"?"active":""}  data-value="28"><a className="nofollow" onClick={this.changeArea.bind(this)}>兵库</a></li>
                        <li className={this.state.Position=="29"?"active":""}  data-value="29"><a className="nofollow" onClick={this.changeArea.bind(this)}>奈良</a></li>
                        <li className={this.state.Position=="30"?"active":""}  data-value="30"><a className="nofollow" onClick={this.changeArea.bind(this)}>和歌山</a></li>
                        <li className={this.state.Position=="31"?"active":""}  data-value="31"><a className="nofollow" onClick={this.changeArea.bind(this)}>鸟取</a></li>
                        <li className={this.state.Position=="32"?"active":""}  data-value="32"><a className="nofollow" onClick={this.changeArea.bind(this)}>岛根</a></li>
                        <li className={this.state.Position=="33"?"active":""}  data-value="33"><a className="nofollow" onClick={this.changeArea.bind(this)}>冈山</a></li>
                        <li className={this.state.Position=="34"?"active":""}  data-value="34"><a className="nofollow" onClick={this.changeArea.bind(this)}>广岛</a></li>
                        <li className={this.state.Position=="35"?"active":""}  data-value="35"><a className="nofollow" onClick={this.changeArea.bind(this)}>山口</a></li>
                        <li className={this.state.Position=="36"?"active":""}  data-value="36"><a className="nofollow" onClick={this.changeArea.bind(this)}>德岛</a></li>
                        <li className={this.state.Position=="37"?"active":""}  data-value="37"><a className="nofollow" onClick={this.changeArea.bind(this)}>香川</a></li>
                        <li className={this.state.Position=="38"?"active":""}  data-value="38"><a className="nofollow" onClick={this.changeArea.bind(this)}>爱媛</a></li>
                        <li className={this.state.Position=="39"?"active":""}  data-value="39"><a className="nofollow" onClick={this.changeArea.bind(this)}>高知</a></li>
                        <li className={this.state.Position=="40"?"active":""}  data-value="40"><a className="nofollow" onClick={this.changeArea.bind(this)}>福冈</a></li>
                        <li className={this.state.Position=="41"?"active":""}  data-value="41"><a className="nofollow" onClick={this.changeArea.bind(this)}>佐贺</a></li>
                        <li className={this.state.Position=="42"?"active":""}  data-value="42"><a className="nofollow" onClick={this.changeArea.bind(this)}>长崎</a></li>
                        <li className={this.state.Position=="43"?"active":""}  data-value="43"><a className="nofollow" onClick={this.changeArea.bind(this)}>熊本</a></li>
                        <li className={this.state.Position=="44"?"active":""}  data-value="44"><a className="nofollow" onClick={this.changeArea.bind(this)}>大分</a></li>
                        <li className={this.state.Position=="45"?"active":""}  data-value="45"><a className="nofollow" onClick={this.changeArea.bind(this)}>宫崎</a></li>
                        <li className={this.state.Position=="46"?"active":""}  data-value="46"><a className="nofollow" onClick={this.changeArea.bind(this)}>鹿儿岛</a></li>
                        <li className={this.state.Position=="47"?"active":""}  data-value="47"><a className="nofollow" onClick={this.changeArea.bind(this)}>冲绳</a></li>
                    </ul>
                    <div className="college-filter-ext">
                        <a className={this.state.MoreArea?"college-options-more up":"college-options-more"} onClick={this.MoreArea.bind(this)}></a>
                    </div>
                </div> 
                <div className="college-filter-options" data-group="Classes">
                    <div className="title">排序条件：</div>
                    <ul className="college-filter-list" id="JPClasses_Y">
                        <li className={this.state.schoolSort==""?"all active":"all"} data-value=""><a data-value="" className="nofollow" onClick={this.sortSchool.bind(this)}>无排序</a></li>
                        <li className={this.state.schoolSort=="Newenroll"?"active":""} data-value="Newenroll"><a data-value="Newenroll" className="nofollow" onClick={this.sortSchool.bind(this)}>学校规模</a></li>
                        <li className={this.state.schoolSort=="Tuition"?"active":""} data-value="Tuition"><a data-value="Tuition" className="nofollow" onClick={this.sortSchool.bind(this)}>学费多少</a></li>
                        <li className={this.state.schoolSort=="Buildtime"?"active":""} data-value="Buildtime"><a data-value="Buildtime" className="nofollow" onClick={this.sortSchool.bind(this)}>成立时间</a></li>
                        <li className={this.state.schoolSort=="Satline"?"active":""} data-value="Satline"><a data-value="Satline" className="nofollow" onClick={this.sortSchool.bind(this)}>升学指导</a></li>
                        <li className={this.state.schoolSort=="Studentquantity"?"active":""} data-value="Studentquantity"><a data-value="Studentquantity" className="nofollow" onClick={this.sortSchool.bind(this)}>按国际化程度(中国学生所占比例)</a></li>
                        <li className={this.state.schoolSort=="Enrollquantity"?"active":""} data-value="Enrollquantity"><a data-value="Enrollquantity" className="nofollow" onClick={this.sortSchool.bind(this)}>打工方便度</a></li>
                    </ul>             
                </div>
            </div>
        );
    }
    MoreArea(){
        this.setState({
            MoreArea:!this.state.MoreArea
        }); 
    }
    componentWillReceiveProps(){    
        this.setState({
            Position:'',
            MoreArea:false
        });      
    }

    //dom加载完调用
    componentDidMount(){
        if(this.props.major){
            this.setState({
                Position:this.props.major
            });  
        }
        
        if(this.props.order){
            this.setState({
                schoolSort:this.props.order
            });
        }
    }
}

export default LanguageSchool;

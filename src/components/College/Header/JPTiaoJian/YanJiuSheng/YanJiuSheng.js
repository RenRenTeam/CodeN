/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import styles from '../../../../WebResources/Default/css/select.less';
import withStyles from '../../../../../decorators/withStyles';
import CollegeUtilFunc from '../../../CollegeUtilFunc/CollegeUtilFunc.js';

var Select = require('rc-select');
var Option = Select.Option;

import $ from 'jquery';

@withStyles(styles)
class YanJiuSheng extends React.Component{

    constructor(props) {
        super(props);
        this.state = {Position:'',Uniproperty:'',MoreFilter:false,MoreArea:false,Exam:"",changeTime:"",EJU:""};
    }
    JPToSearchU(name,value){
        let PositionArr=this.state.Position;
        let ClassesArr=this.state.Uniproperty;
        let timeArr=this.state.changeTime;
        let EJUArr=this.state.EJU;
        let ExamArr=this.state.Exam;
        if("PositionArr"==name){PositionArr=value;}
        else if("ClassesArr"==name){ClassesArr=value;}
        else if("changeTimeArr"==name){timeArr=value;}
        else if("EJUArr"==name){EJUArr=value;}
        else if("ExamArr"==name){ExamArr=value;}
        let SearchArr=$("#txtSearch").val();
        if(!SearchArr){
            SearchArr="";
        }       
       /* let userSearch="";*/
  /*      if(!!PositionArr){
             userSearch="Position="+PositionArr+";Classes="+ClassesArr;
         }else{
             userSearch="Classes="+ClassesArr;
         }*/
        let ResearchmentDepartment=$("#ResearchmentDepartment").val();
        let SubjectProfessional=$("#SubjectProfessional").val();
        let userSearch="Position="+PositionArr+";Classes="+ClassesArr+";ResearchmentDepartment="+ResearchmentDepartment+
        ";SubjectProfessional="+SubjectProfessional+";Admission="+timeArr+";StudyAbroadTest="+EJUArr+";JapanBeforeAdmission="+ExamArr;
        CollegeUtilFunc.UserSearchSchool("JP","研究生院",1,15,SearchArr,userSearch,"");
    }
    changeArea(e){
        let AreaVar=$(e.target).parent().attr("data-value");
        this.setState({
            Position:AreaVar
        }); 
        this.JPToSearchU("PositionArr",AreaVar);  
    }
    changeUniproperty(e){
        let UnipropertyVar=$(e.target).parent().attr("data-value");
        this.setState({
            Uniproperty:UnipropertyVar 
        }); 
        this.JPToSearchU("ClassesArr",UnipropertyVar);  
    }
    changeTime(e){
        let timeStr=$(e.target).attr("data-value");
        this.setState({
            changeTime:timeStr
        });
        this.JPToSearchU("changeTimeArr",timeStr);  
    }
    changeEJU(e){
        let EJUStr=$(e.target).attr("data-value");
        this.setState({
            EJU:EJUStr
        }); 
        this.JPToSearchU("EJUArr",EJUStr); 
    }
    changeExam(e){
        let ExamStr=$(e.target).attr("data-value");
        this.setState({
            Exam:ExamStr
        }); 
        this.JPToSearchU("ExamArr",ExamStr); 
    }
    searchAll(){
        let PositionArr=this.state.Position;
        let ClassesArr=this.state.Uniproperty;
        let timeArr=this.state.changeTime;
        let EJUArr=this.state.EJU;
        let ExamArr=this.state.Exam;
        let SearchArr=$("#txtSearch").val();
        if(!SearchArr){  SearchArr=""; }
        let ResearchmentDepartment=$("#ResearchmentDepartment").val();
        let SubjectProfessional=$("#SubjectProfessional").val();

        let userSearch="Position="+PositionArr+";Classes="+ClassesArr+";ResearchmentDepartment="+ResearchmentDepartment+
        ";SubjectProfessional="+SubjectProfessional+";Admission="+timeArr+";StudyAbroadTest="+EJUArr+";JapanBeforeAdmission="+ExamArr;
        CollegeUtilFunc.UserSearchSchool("JP","研究生院",1,15,SearchArr,userSearch,"");
    }
    render() {
        return (
            <div className="college-filter-box university">
                <div className="college-filter-options" data-group="SubjectProfessional">
                    <div className="title">专业搜索：</div>
                    <ul className="college-filter-list">
                          <li className="input">
                            <input data-name="ResearchmentDepartment" id="ResearchmentDepartment" placeholder="学系" type="text" />
                            <em></em>
                            <input data-name="SubjectProfessional" id="SubjectProfessional" placeholder="科目/专业" type="text" />
                            <button type="button" className="button-confirm" onClick={this.searchAll.bind(this)}>确定</button>
                        </li>
                    </ul>
                </div>
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
                    <div className="title">大学类别：</div>
                    <ul className="college-filter-list" id="JPClasses_Y">
                        <li className={this.state.Uniproperty==""?"all active":"all"} data-value=""><a className="nofollow" onClick={this.changeUniproperty.bind(this)}>全部</a></li>
                        <li className={this.state.Uniproperty=="1"?"active":""} data-value="1"><a className="nofollow" onClick={this.changeUniproperty.bind(this)}>国立</a></li>
                        <li className={this.state.Uniproperty=="2"?"active":""} data-value="2"><a className="nofollow" onClick={this.changeUniproperty.bind(this)}>公立</a></li>
                        <li className={this.state.Uniproperty=="3"?"active":""} data-value="3"><a className="nofollow" onClick={this.changeUniproperty.bind(this)}>私立</a></li>
                    </ul>
                    <div className="college-filter-btns">
                        <button type="button" className="button-normal filter-btns-confirm">确定</button>
                        <button type="button" className="button-line filter-btns-cancel">取消</button>
                    </div>
                    <div className="college-filter-ext">
                        <a className="college-options-multiple"></a>
                    </div>
                </div>
                <div className={this.state.MoreFilter ? "college-filter-options filter-show filter-hide-USA" : "college-filter-options filter-hide-USA filter-hide"} data-group="SchoolDormitoryType">
                    <div className="title">入学月份：</div>
                    <ul className="college-filter-list" id="UKSchoolDormitoryType">
                        <li className={this.state.changeTime==""?"all active":"all"}  data-value=""><a className="nofollow" data-value="" onClick={this.changeTime.bind(this)} >全部</a></li>
                        <li className={this.state.changeTime=="1"?"active":""} data-value="1"><a className="nofollow" data-value="1" onClick={this.changeTime.bind(this)} >1月</a></li>
                        <li className={this.state.changeTime=="3"?"active":""} data-value="3"><a className="nofollow" data-value="3" onClick={this.changeTime.bind(this)}>3月</a></li>
                        <li className={this.state.changeTime=="4"?"active":""} data-value="4"><a className="nofollow" data-value="4" onClick={this.changeTime.bind(this)}>4月</a></li>
                        <li className={this.state.changeTime=="5"?"active":""} data-value="5"><a className="nofollow" data-value="5" onClick={this.changeTime.bind(this)}>5月</a></li>
                        <li className={this.state.changeTime=="9"?"active":""} data-value="9"><a className="nofollow" data-value="9" onClick={this.changeTime.bind(this)}>9月</a></li>
                        <li className={this.state.changeTime=="10"?"active":""} data-value="10"><a className="nofollow" data-value="10" onClick={this.changeTime.bind(this)}>10月</a></li>
                    </ul>
                </div>
                <div className={this.state.MoreFilter ? "college-filter-options filter-show filter-hide-USA" : "college-filter-options filter-hide-USA filter-hide"} data-group="Tuition">
                    <div className="title">EJU考试：</div>
                    <ul className="college-filter-list" id="UKSchoolTuition">
                        <li className={this.state.EJU==""?"all active":"all"} data-value=""><a className="nofollow" data-value="" onClick={this.changeEJU.bind(this)}>全部</a></li>
                        <li className={this.state.EJU=="1"?"active":""} data-value="1"><a className="nofollow" data-value="1" onClick={this.changeEJU.bind(this)}>需要</a></li>
                        <li className={this.state.EJU=="0"?"active":""} data-value="0"><a className="nofollow" data-value="0" onClick={this.changeEJU.bind(this)}>不需要</a></li>

                    </ul>
                </div>
                <div className={this.state.MoreFilter ? "college-filter-options filter-show filter-hide-USA" : "college-filter-options filter-hide-USA filter-hide"} data-group="Uniproperty">
                    <div className="title">校内考：</div>
                    <ul className="college-filter-list" id="UKSchoolUniproperty">
                        <li className={this.state.Exam==""?"all active":"all"}  data-value=""><a className="nofollow" data-value="" onClick={this.changeExam.bind(this)}>全部</a></li>
                        <li className={this.state.Exam=="1"?"active":""} data-value="1"><a className="nofollow" data-value="1" onClick={this.changeExam.bind(this)}>可以海外直接申请，无需来日参加入学考试</a></li>
                        <li className={this.state.Exam=="0"?"active":""} data-value="0"><a className="nofollow" data-value="0" onClick={this.changeExam.bind(this)}>可以海外直接申请，但需来日参加入学考试</a></li>
                    </ul>
                </div>
                <div className="college-filter-more" id="moreUSA">
                    <button type="button" onClick={this.changeMoreFilter.bind(this)}>更多条件<i className={this.state.MoreFilter ? "i up" : "i"}></i></button>
                </div>

            </div>
        );
    }
    changeMoreFilter(){
        this.setState({
            MoreFilter:!this.state.MoreFilter
        });
    }
    MoreArea(){
        this.setState({
            MoreArea:!this.state.MoreArea
        }); 
    }
    componentWillReceiveProps(){    
        this.setState({
            Position:'',
            Uniproperty:'',
            MoreArea:false,
            Exam:"",
            EJU:"",
            changeTime:"",
            MoreFilter:false
        });      
    }

    //dom加载完调用
    componentDidMount(){
        if(this.props.major){$("#SubjectProfessional").val(this.props.major);}
        
    }
}

export default YanJiuSheng;

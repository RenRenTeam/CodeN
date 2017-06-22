/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import styles from '../../../../WebResources/Default/css/select.less';
import withStyles from '../../../../../decorators/withStyles';
import CollegeUtilFunc from '../../../CollegeUtilFunc/CollegeUtilFunc.js';
import UKRanksA from './UKRanksA/UKRanksA.js';
import Rest from '../../../../../utils/Rest.js';
var Select = require('rc-select');
var Option = Select.Option;

import $ from 'jquery';

@withStyles(styles)
class University extends React.Component{  
   constructor(props) {
        super(props);
        this.state = {UKArea:'',Ranks:'',Major:null,MajorB:null};
    }

    UKToSearch(name,value){
        let UkSchoolArea=this.state.UKArea;
        let UKSchoolRanks=this.state.Ranks;
        if("UkSchoolArea"==name){UkSchoolArea=value;}
        else if("UKSchoolRanks"==name){UKSchoolRanks=value;}
        let SearchArr=$("#txtSearch").val();
        if(!SearchArr){
            SearchArr="";
        }
        //传用户选择的选项用于分页查询
        let userSearch="Area="+UkSchoolArea+";Ranking="+UKSchoolRanks;     
        //let AreaArr="Area="+e.target.innerHTML;
        CollegeUtilFunc.UserSearchSchool("UK","大学",1,15,SearchArr,userSearch,"");

    }
    changeArea(e){
        let AreaVar=$(e.target).parent().attr("data-value");
        this.setState({
            UKArea:AreaVar
        }); 
        this.UKToSearch("UkSchoolArea",AreaVar);
    }
    changeRanks(e){
        let RanksVar=$(e.target).parent().attr("data-value");
        this.setState({
            Ranks:RanksVar
        });
         $("#USAInputRanks1").val("");
        $("#USAInputRanks2").val(""); 
        this.UKToSearch("UKSchoolRanks",RanksVar);

    }
    userInputRanks(e){
        let input1=$("#USAInputRanks1").val();
        let input2=$("#USAInputRanks2").val();
        let num1=parseInt(input1); 
        let num2=parseInt(input2);
        if(num1&&num2){
            $("#USAInputRanks1").val(num1);
            $("#USAInputRanks2").val(num2);
            let RanksVar=num1+"-"+num2;
            this.setState({
                Ranks:RanksVar
            });
            this.UKToSearch("UKSchoolRanks",RanksVar);     
        } 
    }

    //获取专业信息
    getMajor(type){
    }
    render() {
        return (
            <div className="college-filter-box university">
                <div className="college-filter-options" data-group="Area">
                    <div className="title">所在地区：</div>
                    <ul className="college-filter-list" id="UkSchoolArea">
                        <li className={this.state.UKArea==""?"all active":"all"} data-value=""><a className="nofollow"  onClick={this.changeArea.bind(this)}>全部</a></li>
                        <li className={this.state.UKArea=="北爱尔兰"?"active":""} data-value="北爱尔兰"><a className="nofollow"  onClick={this.changeArea.bind(this)}>北爱尔兰</a></li>
                        <li className={this.state.UKArea=="威尔士"?"active":""} data-value="威尔士"><a className="nofollow"  onClick={this.changeArea.bind(this)}>威尔士</a></li>
                        <li className={this.state.UKArea=="苏格兰"?"active":""} data-value="苏格兰"><a className="nofollow"  onClick={this.changeArea.bind(this)}>苏格兰</a></li>
                        <li className={this.state.UKArea=="英格兰"?"active":""} data-value="英格兰"><a className="nofollow"  onClick={this.changeArea.bind(this)}>英格兰</a></li>
                    </ul>
                </div>
                <div className="college-filter-options" data-group="综合排名">
                    <div className="title">综合排名：</div>
                    <ul className="college-filter-list" id="UKSchoolRanks">
                        <li className={this.state.Ranks==""?"all active":"all"} data-value=""><a className="nofollow" onClick={this.changeRanks.bind(this)}>全部</a></li>
                        <li className={this.state.Ranks=="1-10"?"active":""} data-value="1-10"><a className="nofollow" onClick={this.changeRanks.bind(this)}>1-10名</a></li>
                        <li className={this.state.Ranks=="10-20"?"active":""} data-value="10-20"><a className="nofollow" onClick={this.changeRanks.bind(this)}>10-20名</a></li>
                        <li className={this.state.Ranks=="20-50"?"active":""} data-value="20-50"><a className="nofollow" onClick={this.changeRanks.bind(this)}>20-50名</a></li>
                        <li className={this.state.Ranks=="50-100"?"active":""} data-value="50-100"><a className="nofollow" onClick={this.changeRanks.bind(this)}>50-100名</a></li>
                        <li className="input">
                            <input className="number" data-name="start" type="text" id="USAInputRanks1" />
                            <em>-</em>
                            <input className="number" data-name="end" type="text" id="USAInputRanks2" />
                            <button type="button" className="button-confirm" onClick={this.userInputRanks.bind(this)}>确定</button>
                        </li>
                    </ul>
                </div>
                <div className="college-filter-options" data-group="subrankG">
                    <div className="title" >专业排名：</div>
                    <ul className="college-filter-list">
                        <li className="select">
                            <div id="UKMajorPage">
                                
                            </div>                         
                        </li>
                    </ul>
                </div>
              
            </div>
        );
    }
    componentWillReceiveProps(){    
        this.setState({
            UKArea:'',
            Ranks:''
        });      
    }
    changeClass(){
        this.setState({
            UKArea:'removeClass',
            Ranks:'removeClass'
        }); 
    }
    //dom加载完调用
    componentDidMount(){
            let search=this.props.search;
            if(search&&search.length>5){
                //$("#txtSearch").val(search[4]); 
                this.setState({
                    UKArea:search[5]
                });  
            }


            let func=this.changeClass.bind(this);
           $.ajax({
                url: "http://service.shenyuan.org/University_RankingService/GetRankingMajor/Type=专业排名;Brand=TIMES;Year=2014;CallBack=getRankingMajor_jsonpCallback",//Year=年份;Brand=品牌;Major=材料技术;Type=类型
                type: "get",
                dataType: "jsonp",
                async:false,
                jsonp:"callbackparam",//
                jsonpCallback:"getRankingMajor_jsonpCallback",//自定义jsonp回调函数名称     
            }).done(function (json) {
                if(json&&json.length>0){
                    React.render(<UKRanksA  data={json} click={func}  />,document.getElementById('UKMajorPage'));
                }else{
                    React.render(<UKRanksA  data={[]} click={func}  />,document.getElementById('UKMajorPage'));
                }
                
            });

       
    }
}

export default University;
